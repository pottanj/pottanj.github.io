(() => {
  const TAU = Math.PI * 2;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const shade = (hex, amount) => {
    const value = parseInt(hex.slice(1), 16);
    const channel = (shift) => Math.max(0, Math.min(255, ((value >> shift) & 255) + amount));
    return `rgb(${channel(16)},${channel(8)},${channel(0)})`;
  };

  const box = (parts, color, x, y, z, w, h, d) => {
    const x0=x-w/2,x1=x+w/2,y0=y-h/2,y1=y+h/2,z0=z-d/2,z1=z+d/2;
    const v=[[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]];
    parts.push(
      {p:[v[0],v[1],v[2],v[3]],c:shade(color,-24)},
      {p:[v[1],v[5],v[6],v[2]],c:shade(color,-10)},
      {p:[v[5],v[4],v[7],v[6]],c:color},
      {p:[v[4],v[0],v[3],v[7]],c:shade(color,-36)},
      {p:[v[3],v[2],v[6],v[7]],c:shade(color,18)},
      {p:[v[4],v[5],v[1],v[0]],c:shade(color,-42)}
    );
  };

  const cylinder = (parts, color, x, y, z, radius, height, segments=28) => {
    const top=[],bottom=[];
    for(let i=0;i<segments;i++){
      const a=i/segments*TAU;
      top.push([x+Math.cos(a)*radius,y+height/2,z+Math.sin(a)*radius]);
      bottom.push([x+Math.cos(a)*radius,y-height/2,z+Math.sin(a)*radius]);
    }
    parts.push({p:top,c:shade(color,18)});
    for(let i=0;i<segments;i++) parts.push({p:[bottom[i],bottom[(i+1)%segments],top[(i+1)%segments],top[i]],c:shade(color,Math.round(Math.cos(i/segments*TAU)*16)-16)});
  };

  const roof = (parts, color, x, y, z, w, d, rise) => {
    parts.push(
      {p:[[x-w/2,y,z-d/2],[x,y+rise,z-d/2],[x,y+rise,z+d/2],[x-w/2,y,z+d/2]],c:shade(color,8)},
      {p:[[x,y+rise,z-d/2],[x+w/2,y,z-d/2],[x+w/2,y,z+d/2],[x,y+rise,z+d/2]],c:shade(color,-15)},
      {p:[[x-w/2,y,z+d/2],[x,y+rise,z+d/2],[x+w/2,y,z+d/2]],c:shade(color,-28)},
      {p:[[x+w/2,y,z-d/2],[x,y+rise,z-d/2],[x-w/2,y,z-d/2]],c:shade(color,-36)}
    );
  };

  const buildModel = (type) => {
    const p=[];
    if(type==='pool'){
      box(p,'#e9dfc8',0,.14,0,3.8,.28,2.4);
      box(p,'#64aeb4',0,.30,0,3.28,.08,1.88);
      for(const x of [-1.72,1.72]) box(p,'#f5efdf',x,.34,0,.22,.12,2.2);
      for(const z of [-1.02,1.02]) box(p,'#f5efdf',0,.34,z,3.25,.12,.22);
      cylinder(p,'#d7a86d',.65,.48,.32,.30,.09,24);
    } else if(type==='coop'){
      for(const x of [-.62,.62]) for(const z of [-.46,.46]) box(p,'#71513b',x,.42,z,.1,.84,.1);
      box(p,'#b97949',0,.92,0,1.55,1.1,1.25);
      roof(p,'#4d443e',0,1.48,0,1.9,1.55,.58);
      box(p,'#eee4ca',0,.88,.635,.46,.56,.05);
      box(p,'#4b5d50',0,.89,.67,.06,.48,.04);
      box(p,'#4b5d50',0,.89,.67,.38,.06,.04);
      box(p,'#9b6c48',0,.23,.82,.58,.08,.95);
    } else {
      box(p,'#cc7e68',0,1,0,2.3,1.8,2);
      roof(p,'#514a45',0,1.9,0,2.7,2.45,.8);
      box(p,'#eef0df',0,.82,1.025,.72,1.35,.06);
      box(p,'#6d8b7c',0,.82,1.06,.08,1.18,.04);
      box(p,'#6d8b7c',0,.98,1.06,.58,.08,.04);
      for(const x of [-.78,.78]){
        box(p,'#efe7d5',x,1.18,1.03,.48,.54,.05);
        box(p,'#86a9ad',x,1.18,1.06,.36,.42,.04);
      }
    }
    return p;
  };

  const project = (point, angle, width, height, scale) => {
    const [x,y,z]=point, ca=Math.cos(angle),sa=Math.sin(angle);
    const rx=x*ca-z*sa, rz=x*sa+z*ca;
    const tilt=-.34, ct=Math.cos(tilt),st=Math.sin(tilt);
    const ry=y*ct-rz*st, depth=y*st+rz*ct;
    const perspective=1/(1+depth*.035);
    return {x:width/2+rx*scale*perspective,y:height*.56-ry*scale*perspective,z:depth};
  };

  const mount = (canvas) => {
    const ctx=canvas.getContext('2d');
    const parts=buildModel(canvas.dataset.model);
    let angle=-.55, dragging=false, lastX=0, active=true;
    const resize=()=>{const r=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(r.height*dpr));ctx.setTransform(dpr,0,0,dpr,0,0);};
    new ResizeObserver(resize).observe(canvas); resize();
    new IntersectionObserver(([entry])=>active=entry.isIntersecting,{threshold:.08}).observe(canvas);
    canvas.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;canvas.setPointerCapture(e.pointerId)});
    canvas.addEventListener('pointermove',e=>{if(dragging){angle+=(e.clientX-lastX)*.012;lastX=e.clientX}});
    canvas.addEventListener('pointerup',()=>dragging=false);canvas.addEventListener('pointercancel',()=>dragging=false);
    const draw=()=>{
      const w=canvas.clientWidth,h=canvas.clientHeight,scale=Math.min(w,h)/(canvas.dataset.model==='pool'?4.8:4.5);
      ctx.clearRect(0,0,w,h);
      const floor=ctx.createRadialGradient(w/2,h*.72,0,w/2,h*.72,w*.36);floor.addColorStop(0,'rgba(10,20,15,.28)');floor.addColorStop(1,'rgba(10,20,15,0)');ctx.fillStyle=floor;ctx.beginPath();ctx.ellipse(w/2,h*.72,w*.32,h*.08,0,0,TAU);ctx.fill();
      parts.map(face=>{const points=face.p.map(point=>project(point,angle,w,h,scale));return {...face,points,depth:points.reduce((s,p)=>s+p.z,0)/points.length}}).sort((a,b)=>a.depth-b.depth).forEach(face=>{ctx.beginPath();face.points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.fillStyle=face.c;ctx.fill();ctx.strokeStyle='rgba(244,240,226,.12)';ctx.lineWidth=.7;ctx.stroke()});
      if(active&&!dragging&&!reduceMotion) angle+=.0034;
      requestAnimationFrame(draw);
    }; draw();
  };

  const init=()=>document.querySelectorAll('canvas[data-grann-model]').forEach(mount);
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init,{once:true}):init();
})();
