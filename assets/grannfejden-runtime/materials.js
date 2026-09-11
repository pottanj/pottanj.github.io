import * as THREE from "three";
import { seededRandom } from "./data.js";
export class Materials {
    cache = new Map();
    time = {
        value: 0
    };
    wind = {
        value: 0.45
    };
    wettable = [];
    textures = [];
    get(color, roughness = 0.85, metalness = 0) {
        const key = `${color}:${roughness}:${metalness}`;
        if (!this.cache.has(key)) this.cache.set(key, new THREE.MeshStandardMaterial({
            color,
            roughness,
            metalness
        }));
        return this.cache.get(key);
    }
    textured(color, kind) {
        const key = `${color}:${kind}`;
        if (this.cache.has(key)) return this.cache.get(key);
        const canvas = document.createElement("canvas");
        canvas.width = canvas.height = 256;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#aaaaaa";
        ctx.fillRect(0, 0, 256, 256);
        const rand = seededRandom(81);
        if (kind === "roof") {
            for(let y = 0; y < 256; y += 32)for(let x = -16; x < 272; x += 32){
                const xx = x + y / 32 % 2 * 16;
                const shade = Math.floor(155 + rand() * 38);
                ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
                ctx.fillRect(xx + 1, y + 1, 30, 30);
                ctx.fillStyle = "#777";
                ctx.fillRect(xx, y + 29, 32, 3);
                ctx.fillStyle = "#b9b9b9";
                ctx.fillRect(xx + 2, y + 2, 2, 24);
            }
        } else if (kind === "wood") {
            for(let x = 0; x < 256; x += 16){
                const g = Math.floor(150 + rand() * 35);
                ctx.fillStyle = `rgb(${g},${g},${g})`;
                ctx.fillRect(x, 0, 15, 256);
                ctx.fillStyle = "#777";
                ctx.fillRect(x, 0, 1.5, 256);
            }
            for(let i = 0; i < 300; i++){
                ctx.fillStyle = "rgba(70,60,45,.09)";
                ctx.fillRect(rand() * 256, rand() * 256, 0.6, 10 + rand() * 60);
            }
        } else if (kind === "paving") {
            ctx.fillStyle = "#bababa";
            ctx.fillRect(0, 0, 256, 256);
            for(let y = 0; y < 256; y += 64)for(let x = -32; x < 256; x += 64){
                ctx.strokeStyle = "#888";
                ctx.lineWidth = 2;
                ctx.strokeRect(x + (y % 128 ? 32 : 0), y, 64, 64);
            }
        } else {
            ctx.fillStyle = "#ececec";
            ctx.fillRect(0, 0, 256, 256);
            for(let i = 0; i < 12000; i++){
                const g = Math.floor(208 + rand() * 40);
                ctx.fillStyle = `rgb(${g},${g},${g})`;
                ctx.fillRect(rand() * 256, rand() * 256, 1, 3);
            }
        }
        const tex = new THREE.CanvasTexture(canvas);
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(kind === "roof" ? 2 : kind === "grass" ? 8 : 1, kind === "roof" ? 2 : kind === "grass" ? 8 : 1);
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 8;
        const material = new THREE.MeshStandardMaterial({
            color,
            map: tex,
            roughness: 0.9,
            bumpMap: tex,
            bumpScale: kind === "roof" ? 0.12 : 0.035
        });
        this.textures.push(tex);
        this.cache.set(key, material);
        if (kind !== "grass") this.wettable.push({
            material,
            roughness: material.roughness,
            wetRoughness: kind === "wood" ? 0.62 : kind === "roof" ? 0.5 : 0.4,
            color: material.color.clone()
        });
        return material;
    }
    foliage(color) {
        const key = `leaf:${color}`;
        if (this.cache.has(key)) return this.cache.get(key);
        const material = new THREE.MeshStandardMaterial({
            color,
            roughness: 0.92
        });
        material.onBeforeCompile = (shader)=>{
            shader.uniforms.uTime = this.time;
            shader.uniforms.uWind = this.wind;
            shader.vertexShader = "uniform float uTime; uniform float uWind;\n" + shader.vertexShader;
            shader.vertexShader = shader.vertexShader.replace("#include <begin_vertex>", `
        #include <begin_vertex>
        vec4 anchor = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          anchor = instanceMatrix * anchor;
        #endif
        anchor = modelMatrix * anchor;
        transformed.x += sin(uTime * 1.3 + anchor.x * .31 + anchor.z * .17) * .055 * uWind;
        transformed.z += cos(uTime + anchor.z * .3) * .035 * uWind;
      `);
        };
        material.customProgramCacheKey = ()=>"grannfejden-foliage";
        this.cache.set(key, material);
        return material;
    }
    glass() {
        const key = "glass";
        if (!this.cache.has(key)) this.cache.set(key, new THREE.MeshStandardMaterial({
            color: "#86b9c5",
            roughness: 0.13,
            metalness: 0.28,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide,
            depthWrite: false
        }));
        return this.cache.get(key);
    }
    emissive(color, strength = 0.5) {
        const key = `light:${color}`;
        if (!this.cache.has(key)) this.cache.set(key, new THREE.MeshStandardMaterial({
            color,
            emissive: color,
            emissiveIntensity: strength,
            roughness: 0.5
        }));
        return this.cache.get(key);
    }
    water(color, opacity = 0.92) {
        const material = new THREE.MeshStandardMaterial({
            color,
            roughness: 0.2,
            metalness: 0.28,
            transparent: true,
            opacity
        });
        material.onBeforeCompile = (shader)=>{
            shader.uniforms.uTime = this.time;
            shader.uniforms.uWind = this.wind;
            shader.vertexShader = "varying vec3 vWaterWorld;\n" + shader.vertexShader;
            shader.vertexShader = shader.vertexShader.replace("#include <worldpos_vertex>", "#include <worldpos_vertex>\nvWaterWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;");
            shader.fragmentShader = "uniform float uTime; uniform float uWind; varying vec3 vWaterWorld;\n" + shader.fragmentShader;
            shader.fragmentShader = shader.fragmentShader.replace("#include <normal_fragment_begin>", `
        #include <normal_fragment_begin>
        float waveA = sin(vWaterWorld.x * 2.8 + vWaterWorld.z * 1.4 + uTime * 1.4);
        float waveB = cos(vWaterWorld.z * 3.5 - vWaterWorld.x * .9 + uTime * 1.1);
        normal = normalize(normal + vec3(waveA, waveB, 0.0) * (.035 + uWind * .025));
      `);
        };
        material.customProgramCacheKey = ()=>"grannfejden-water";
        this.cache.set(`water:${color}`, material);
        return material;
    }
    update(time, wind, rain) {
        this.time.value = time;
        this.wind.value = wind;
        for (const entry of this.wettable){
            entry.material.roughness = THREE.MathUtils.lerp(entry.roughness, entry.wetRoughness, rain);
            entry.material.color.copy(entry.color).multiplyScalar(1 - rain * 0.13);
        }
    }
    dispose() {
        this.cache.forEach((m)=>m.dispose());
        this.textures.forEach((t)=>t.dispose());
    }
}
