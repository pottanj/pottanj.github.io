import * as THREE from "three";
import { buildChickenCoop } from "./chicken-coop.js";
import { Materials } from "./materials.js";
import { buildPlayhouse } from "./playhouse.js";
import { buildGardenPool } from "./pool.js";
function buildModel(kind, parent, materials) {
    if (kind === "coop") return buildChickenCoop(parent, materials, "#77927c");
    if (kind === "pool") return buildGardenPool(parent, materials);
    return buildPlayhouse(parent, materials, "#77927c");
}
function updateModel(model, deltaSeconds) {
    model.traverse((object)=>{
        const chickenUpdate = object.userData.updateChickenCoop;
        if (typeof chickenUpdate === "function") chickenUpdate(deltaSeconds);
        const waterBob = object.userData.waterBob;
        if (waterBob) {
            waterBob.elapsed = (waterBob.elapsed ?? 0) + deltaSeconds;
            object.position.y = waterBob.baseY + Math.sin(waterBob.elapsed * waterBob.speed + waterBob.offset) * waterBob.amplitude;
        }
        const rotationSpeed = Number(object.userData.floatRotationSpeed);
        if (Number.isFinite(rotationSpeed)) object.rotation.y += deltaSeconds * rotationSpeed;
    });
}
function mount(canvas) {
    if (canvas.dataset.mounted) return;
    canvas.dataset.mounted = "true";
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(7, 5.2, 8);
    camera.lookAt(0, 1, 0);
    scene.add(new THREE.HemisphereLight("#f6f1df", "#17221c", 2.2));
    const key = new THREE.DirectionalLight("#fff4d8", 3.2);
    key.position.set(5, 9, 6);
    key.castShadow = true;
    scene.add(key);
    const fill = new THREE.DirectionalLight("#9dbb99", 1.1);
    fill.position.set(-6, 3, -4);
    scene.add(fill);
    const materials = new Materials();
    const kind = canvas.dataset.model;
    const model = buildModel(kind, scene, materials);
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    model.position.sub(center);
    model.position.y += size.y / 2;
    model.scale.multiplyScalar(3.8 / Math.max(size.x, size.y, size.z));
    const ground = new THREE.Mesh(new THREE.CircleGeometry(3.7, 64), new THREE.ShadowMaterial({
        color: "#07100c",
        opacity: 0.22
    }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    let dragging = false;
    let previousX = 0;
    let targetRotation = kind === "pool" ? 0.35 : -0.35;
    let rotation = targetRotation;
    let previousTime = performance.now();
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    canvas.addEventListener("pointerdown", (event)=>{
        dragging = true;
        previousX = event.clientX;
        canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener("pointermove", (event)=>{
        if (!dragging) return;
        targetRotation += (event.clientX - previousX) * 0.012;
        previousX = event.clientX;
    });
    canvas.addEventListener("pointerup", ()=>dragging = false);
    canvas.addEventListener("pointercancel", ()=>dragging = false);
    const resize = ()=>{
        const width = Math.max(1, canvas.clientWidth);
        const height = Math.max(1, canvas.clientHeight);
        const pixelRatio = renderer.getPixelRatio();
        if (canvas.width !== Math.round(width * pixelRatio) || canvas.height !== Math.round(height * pixelRatio)) renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };
    const tick = (now)=>{
        resize();
        const deltaSeconds = Math.min(0.05, (now - previousTime) / 1000);
        previousTime = now;
        if (!dragging && !reducedMotion) targetRotation += 0.0022;
        rotation += (targetRotation - rotation) * 0.1;
        model.rotation.y = rotation;
        if (!reducedMotion) {
            materials.update(now / 1000, 0.45, 0);
            updateModel(model, deltaSeconds);
        }
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}
document.querySelectorAll("canvas[data-grann-model]").forEach(mount);
