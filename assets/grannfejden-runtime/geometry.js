import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
const geometries = new Map();
const unitBox = new THREE.BoxGeometry(1, 1, 1);
const unitRound = new RoundedBoxGeometry(1, 1, 1, 2, 0.075);
const sphere = new THREE.IcosahedronGeometry(1, 1);
const softSphere = new THREE.SphereGeometry(1, 10, 7);
const cylinder = new THREE.CylinderGeometry(1, 1, 1, 10);
const cone = new THREE.ConeGeometry(1, 1, 9);
export function mesh(parent, geometry, material, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) {
    const m = new THREE.Mesh(geometry, material);
    m.position.set(x, y, z);
    m.scale.set(sx, sy, sz);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
}
export function box(p, m, x, y, z, w, h, d, rounded = false) {
    return mesh(p, rounded ? unitRound : unitBox, m, x, y, z, w, h, d);
}
export function ball(p, m, x, y, z, r, sy = 1, sz = 1, soft = false) {
    return mesh(p, soft ? softSphere : sphere, m, x, y, z, r, r * sy, r * sz);
}
export function cyl(p, m, x, y, z, r, h) {
    return mesh(p, cylinder, m, x, y, z, r, h, r);
}
export function con(p, m, x, y, z, r, h) {
    return mesh(p, cone, m, x, y, z, r, h, r);
}
export function group(p, x = 0, y = 0, z = 0, rotation = 0) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = rotation;
    p.add(g);
    return g;
}
export function beam(p, m, a, b, radius) {
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const line = cyl(p, m, mid.x, mid.y, mid.z, radius, a.distanceTo(b));
    line.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
    return line;
}
export function torus(p, m, x, y, z, r, tube, rotation = Math.PI / 2) {
    const key = `torus:${r}:${tube}`;
    if (!geometries.has(key)) geometries.set(key, new THREE.TorusGeometry(r, tube, 6, 20));
    const result = mesh(p, geometries.get(key), m, x, y, z);
    result.rotation.x = rotation;
    return result;
}
export function roof(p, m, trim, w, depth, eave, rise) {
    const h = w / 2;
    const slope = Math.atan2(rise, h);
    const len = Math.sqrt(h * h + rise * rise);
    for (const s of [
        -1,
        1
    ]){
        const panel = box(p, m, s * h / 2, eave + rise / 2, 0, len + 0.55, 0.25, depth + 0.9);
        panel.rotation.z = -s * slope;
        for (const z of [
            -(depth + 1) / 2,
            (depth + 1) / 2
        ]){
            const fascia = box(p, trim, s * h / 2, eave + rise / 2 - 0.07, z, len + 0.65, 0.28, 0.18);
            fascia.rotation.z = -s * slope;
        }
        box(p, trim, s * (h + 0.22), eave - 0.08, 0, 0.18, 0.25, depth + 1);
    }
    const cap = cyl(p, m, 0, eave + rise + 0.06, 0, 0.22, depth + 1);
    cap.rotation.x = Math.PI / 2;
}
export function gable(p, m, w, d, eave, rise) {
    const key = `gable:${w}:${d}:${rise}`;
    if (!geometries.has(key)) {
        const s = new THREE.Shape();
        s.moveTo(-w / 2, 0);
        s.lineTo(w / 2, 0);
        s.lineTo(0, rise);
        s.closePath();
        const geo = new THREE.ExtrudeGeometry(s, {
            depth: d,
            bevelEnabled: false
        });
        geo.translate(0, 0, -d / 2);
        geometries.set(key, geo);
    }
    return mesh(p, geometries.get(key), m, 0, eave, 0);
}
export function path(p, m, a, b, width, y = 0.07) {
    const dx = b[0] - a[0], dz = b[1] - a[1];
    const result = box(p, m, (a[0] + b[0]) / 2, y, (a[1] + b[1]) / 2, width, 0.12, Math.hypot(dx, dz));
    result.rotation.y = Math.atan2(dx, dz);
    return result;
}
export function label(p, text, x, y, z, width = 3, bg = "#f2ead7", fg = "#3c4c40") {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 160;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 512, 160);
    ctx.strokeStyle = fg;
    ctx.lineWidth = 5;
    ctx.strokeRect(8, 8, 496, 144);
    ctx.fillStyle = fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `500 ${text.length > 18 ? 33 : 45}px "DM Sans", sans-serif`;
    ctx.fillText(text, 256, 84, 470);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const material = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.9
    });
    return mesh(p, new THREE.PlaneGeometry(width, width * 160 / 512), material, x, y, z);
}
export function batchStatic(root) {
    root.updateMatrixWorld(true);
    const buckets = new Map();
    root.traverse((object)=>{
        if (!(object instanceof THREE.Mesh) || object instanceof THREE.InstancedMesh || Array.isArray(object.material)) return;
        let parent = object;
        while(parent && parent !== root){
            if (parent.userData.dynamic) return;
            if (parent.userData.detailDistance) object.userData.detailDistance = parent.userData.detailDistance;
            parent = parent.parent;
        }
        if (object.material.transparent) return;
        const pos = new THREE.Vector3().setFromMatrixPosition(object.matrixWorld);
        const key = `${object.material.uuid}:${Math.floor(pos.x / 64)}:${Math.floor(pos.z / 64)}:${object.castShadow}:${object.userData.detailDistance ?? 0}`;
        const list = buckets.get(key) ?? [];
        list.push(object);
        buckets.set(key, list);
    });
    const inverse = root.matrixWorld.clone().invert();
    for (const objects of buckets.values()){
        if (objects.length < 2) continue;
        const first = objects[0];
        const parts = objects.map((obj)=>{
            const geo = obj.geometry.index ? obj.geometry.toNonIndexed() : obj.geometry.clone();
            if (!geo.attributes.uv) geo.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
            geo.applyMatrix4(inverse.clone().multiply(obj.matrixWorld));
            return geo;
        });
        const merged = mergeGeometries(parts);
        if (merged) {
            const batch = new THREE.Mesh(merged, first.material);
            batch.castShadow = first.castShadow;
            batch.receiveShadow = true;
            batch.name = "decorative-batch";
            merged.computeBoundingSphere();
            root.add(batch);
            if (first.userData.detailDistance) batch.userData.detailDistance = first.userData.detailDistance;
            objects.forEach((obj)=>obj.removeFromParent());
        }
        parts.forEach((geo)=>geo.dispose());
    }
}
