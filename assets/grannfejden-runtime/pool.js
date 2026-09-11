import * as THREE from "three";
import { box, cyl, group, mesh } from "./geometry.js";
const POOL_WIDTH = 5.45;
const POOL_DEPTH = 6;
const POOL_HEIGHT = 0.61;
export function buildGardenPool(parent, materials) {
    const pool = group(parent);
    pool.name = "garden-pool-model";
    const wallThickness = 0.2;
    const innerWidth = POOL_WIDTH - wallThickness * 2;
    const innerDepth = POOL_DEPTH - wallThickness * 2;
    const wood = materials.textured("#a07855", "wood");
    const tile = materials.textured("#2782b8", "paving");
    const trim = materials.get("#d7d8d3", 0.5, 0.08);
    const chrome = materials.get("#f4f6f6", 0.12, 0.9);
    const water = materials.water("#16a8d8", 0.76);
    const bottomGeometry = new THREE.PlaneGeometry(innerWidth, innerDepth, 16, 18);
    bottomGeometry.rotateX(-Math.PI / 2);
    mesh(pool, bottomGeometry, tile, 0, 0.01);
    for (const x of [
        -POOL_WIDTH / 2 + wallThickness / 2,
        POOL_WIDTH / 2 - wallThickness / 2
    ])box(pool, wood, x, POOL_HEIGHT / 2, 0, wallThickness, POOL_HEIGHT, POOL_DEPTH, true);
    for (const z of [
        -POOL_DEPTH / 2 + wallThickness / 2,
        POOL_DEPTH / 2 - wallThickness / 2
    ])box(pool, wood, 0, POOL_HEIGHT / 2, z, innerWidth, POOL_HEIGHT, wallThickness, true);
    const copingWidth = 0.28;
    for (const x of [
        -POOL_WIDTH / 2 + copingWidth / 2,
        POOL_WIDTH / 2 - copingWidth / 2
    ])box(pool, trim, x, POOL_HEIGHT, 0, copingWidth, 0.06, POOL_DEPTH, true);
    for (const z of [
        -POOL_DEPTH / 2 + copingWidth / 2,
        POOL_DEPTH / 2 - copingWidth / 2
    ])box(pool, trim, 0, POOL_HEIGHT, z, POOL_WIDTH - copingWidth * 2, 0.06, copingWidth, true);
    const waterGeometry = new THREE.PlaneGeometry(innerWidth, innerDepth, 36, 40);
    waterGeometry.rotateX(-Math.PI / 2);
    const surface = mesh(pool, waterGeometry, water, 0, POOL_HEIGHT - 0.12);
    surface.userData.waterBob = {
        baseY: POOL_HEIGHT - 0.12,
        amplitude: 0.006,
        speed: 1.7,
        offset: 0
    };
    const addRail = (z)=>{
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(2.34, 0.08, z),
            new THREE.Vector3(2.36, 0.7, z),
            new THREE.Vector3(2.52, 1.02, z),
            new THREE.Vector3(2.68, 0.82, z),
            new THREE.Vector3(2.68, 0.62, z)
        ]);
        mesh(pool, new THREE.TubeGeometry(curve, 24, 0.025, 8, false), chrome);
    };
    addRail(-0.22);
    addRail(0.22);
    for(let step = 1; step <= 3; step += 1){
        const rung = cyl(pool, chrome, 2.35, POOL_HEIGHT * (step / 4), 0, 0.02, 0.44);
        rung.rotation.x = Math.PI / 2;
    }
    const beachBall = group(pool, 1.2, POOL_HEIGHT + 0.08, 0.8);
    beachBall.userData.waterBob = {
        baseY: POOL_HEIGHT + 0.08,
        amplitude: 0.018,
        speed: 2.2,
        offset: 2.1
    };
    beachBall.userData.floatRotationSpeed = 0.35;
    mesh(beachBall, new THREE.SphereGeometry(0.29, 20, 14), materials.get("#f4f1e8", 0.32));
    for (const [color, rotation] of [
        [
            "#e74c3c",
            0
        ],
        [
            "#f1c40f",
            Math.PI / 3
        ],
        [
            "#3498db",
            Math.PI * 2 / 3
        ]
    ]){
        const stripe = mesh(beachBall, new THREE.TorusGeometry(0.292, 0.025, 6, 24), materials.get(color, 0.34));
        stripe.rotation.set(Math.PI / 2, rotation, 0);
    }
    const mattress = group(pool, -0.5, POOL_HEIGHT - 0.04, 1.15, 0.35);
    mattress.userData.waterBob = {
        baseY: POOL_HEIGHT - 0.04,
        amplitude: 0.014,
        speed: 1.5,
        offset: 4
    };
    mattress.userData.floatRotationSpeed = 0.08;
    const mattressMaterial = materials.get("#24c9c7", 0.42);
    for(let rib = 0; rib < 5; rib += 1){
        const part = cyl(mattress, mattressMaterial, (rib - 2) * 0.13, 0, 0, 0.07, 1.4);
        part.rotation.x = Math.PI / 2;
    }
    const pillow = cyl(mattress, mattressMaterial, 0, 0.05, -0.62, 0.1, 0.65);
    pillow.rotation.z = Math.PI / 2;
    const dispenser = group(pool, 1.5, POOL_HEIGHT - 0.08, -1.6);
    dispenser.userData.waterBob = {
        baseY: POOL_HEIGHT - 0.08,
        amplitude: 0.012,
        speed: 2.5,
        offset: 1.2
    };
    dispenser.userData.floatRotationSpeed = 0.18;
    cyl(dispenser, materials.get("#2e86de", 0.5), 0, 0.04, 0, 0.08, 0.06);
    const dispenserBody = mesh(dispenser, new THREE.ConeGeometry(0.08, 0.12, 16), materials.get("#ffffff", 0.55), 0, -0.05);
    dispenserBody.rotation.x = Math.PI;
    pool.traverse((object)=>{
        if (!(object instanceof THREE.Mesh)) return;
        object.castShadow = true;
        object.receiveShadow = true;
    });
    return pool;
}
