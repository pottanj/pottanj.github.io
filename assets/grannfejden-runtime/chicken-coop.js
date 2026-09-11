import * as THREE from "three";
import { ball, box, con, group, mesh } from "./geometry.js";
const GAMEPLAY_SIZE = new THREE.Vector3(4.25, 2.31, 4.5);
function fitExactly(model) {
    model.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    model.scale.set(GAMEPLAY_SIZE.x / size.x, GAMEPLAY_SIZE.y / size.y, GAMEPLAY_SIZE.z / size.z);
    model.updateMatrixWorld(true);
    const fitted = new THREE.Box3().setFromObject(model);
    const center = fitted.getCenter(new THREE.Vector3());
    model.position.set(-center.x, -fitted.min.y, -center.z);
}
export function buildChickenCoop(parent, materials, facadeColor) {
    const model = group(parent);
    model.name = "chicken-coop-model";
    const siding = materials.textured(facadeColor, "wood");
    const trim = materials.get("#f5f2e7", 0.58);
    const roofMaterial = materials.textured("#dfe3e3", "roof");
    const glass = materials.glass();
    const hardware = materials.get("#8f989b", 0.3, 0.72);
    const vent = materials.get("#202522", 0.92);
    const addSiding = (geometry, x = 0, y = 0, z = 0)=>{
        const result = mesh(model, geometry, siding, x, y, z);
        result.userData.chickenCoopFacade = true;
        return result;
    };
    const coopW = 2.4;
    const coopD = 1.3;
    const legHeight = 0.15;
    const roofThickness = 0.06;
    const frontWallH = 2.31 - legHeight - roofThickness;
    const backWallH = 1.7;
    const bodyShape = new THREE.Shape();
    bodyShape.moveTo(0, 0);
    bodyShape.lineTo(coopD, 0);
    bodyShape.lineTo(coopD, frontWallH);
    bodyShape.lineTo(0, backWallH);
    bodyShape.closePath();
    const bodyGeometry = new THREE.ExtrudeGeometry(bodyShape, {
        depth: coopW,
        bevelEnabled: false
    });
    bodyGeometry.translate(-coopD / 2, 0, -coopW / 2);
    bodyGeometry.rotateY(-Math.PI / 2);
    addSiding(bodyGeometry, 0, legHeight, 0);
    for (const [x, z, height] of [
        [
            -coopW / 2,
            coopD / 2,
            frontWallH + legHeight
        ],
        [
            coopW / 2,
            coopD / 2,
            frontWallH + legHeight
        ],
        [
            -coopW / 2,
            -coopD / 2,
            backWallH + legHeight
        ],
        [
            coopW / 2,
            -coopD / 2,
            backWallH + legHeight
        ]
    ])box(model, trim, x, height / 2, z, 0.06, height, 0.06, true);
    const roofPitch = Math.atan((frontWallH - backWallH) / coopD);
    const roofLength = Math.hypot(coopD, frontWallH - backWallH) + 0.3;
    const roofWidth = coopW + 0.3;
    const roof = group(model, 0, legHeight + (frontWallH + backWallH) / 2 + 0.05, 0);
    roof.rotation.x = -roofPitch;
    box(roof, trim, 0, 0, 0, roofWidth, roofThickness, roofLength, true);
    box(roof, roofMaterial, 0, roofThickness / 2 + 0.01, 0, roofWidth - 0.02, 0.02, roofLength - 0.02, true);
    box(roof, trim, 0, 0, roofLength / 2, roofWidth + 0.02, 0.08, 0.04, true);
    const doorW = 0.65;
    const doorH = 1.35;
    const doorX = -0.55;
    box(model, trim, doorX, legHeight + doorH / 2 + 0.1, coopD / 2 + 0.01, doorW + 0.12, doorH + 0.12, 0.04, true);
    const doorBottom = box(model, siding, doorX, legHeight + doorH * 0.225 + 0.1, coopD / 2 + 0.035, doorW, doorH * 0.45, 0.05, true);
    doorBottom.userData.chickenCoopFacade = true;
    box(model, glass, doorX, legHeight + doorH * 0.775 + 0.1, coopD / 2 + 0.035, doorW, doorH * 0.45, 0.03, true);
    box(model, trim, doorX, legHeight + doorH * 0.775 + 0.1, coopD / 2 + 0.055, doorW, 0.04, 0.05, true);
    box(model, trim, doorX, legHeight + doorH * 0.775 + 0.1, coopD / 2 + 0.055, 0.04, doorH * 0.45, 0.05, true);
    for (const y of [
        doorH * 0.4,
        doorH * 0.8
    ])box(model, hardware, doorX - doorW / 2 - 0.06, legHeight + y, coopD / 2 + 0.07, 0.03, 0.08, 0.07, true);
    const ventX = 0.45;
    const ventY = legHeight + frontWallH - 0.35;
    box(model, trim, ventX, ventY, coopD / 2 + 0.02, 0.93, 0.28, 0.04, true);
    for(let index = 0; index < 6; index += 1)box(model, vent, 0.05 + index * 0.075, ventY, coopD / 2 + 0.05, 0.035, 0.2, 0.04, true);
    box(model, trim, 0.6625, ventY, coopD / 2 + 0.06, 0.425, 0.2, 0.06, true);
    const nestW = 0.6;
    const nestD = 1.1;
    const nestShape = new THREE.Shape();
    nestShape.moveTo(0, 0);
    nestShape.lineTo(nestW, 0);
    nestShape.lineTo(nestW, 0.8);
    nestShape.lineTo(0, 0.65);
    nestShape.closePath();
    const nestGeometry = new THREE.ExtrudeGeometry(nestShape, {
        depth: nestD,
        bevelEnabled: false
    });
    nestGeometry.translate(-nestW / 2, 0, -nestD / 2);
    const nest = addSiding(nestGeometry, -coopW / 2 - nestW / 2, legHeight + 0.2, 0);
    nest.castShadow = true;
    const nestRoof = box(model, trim, -coopW / 2 - nestW / 2, 1.1, 0, nestW + 0.1, 0.04, nestD + 0.1, true);
    nestRoof.rotation.z = Math.atan(0.15 / nestW);
    box(model, trim, coopW / 2 + 0.01, legHeight + 0.5, 0, 0.04, 0.68, 0.53, true);
    const hatch = box(model, siding, coopW / 2 + 0.04, legHeight + 0.5, 0, 0.05, 0.6, 0.45, true);
    hatch.userData.chickenCoopFacade = true;
    const chickenColors = [
        "#f4f1e6",
        "#8d6e63",
        "#3e2723",
        "#d7ccc8",
        "#1e211f"
    ];
    const chickens = [];
    const comb = materials.get("#c0392b", 0.85);
    const beak = materials.get("#f1c40f", 0.75);
    const starts = [
        [
            1,
            1.5
        ],
        [
            1.5,
            0.5
        ],
        [
            -1.2,
            1.8
        ],
        [
            0.5,
            1.9
        ],
        [
            -1.5,
            -1.5
        ]
    ];
    starts.forEach(([startX, startZ], index)=>{
        const chicken = group(model, startX, 0, startZ);
        chicken.name = `free-range-chicken-${index + 1}`;
        const feather = materials.get(chickenColors[index], 0.92);
        const body = ball(chicken, feather, 0, 0.12, 0, 0.12, 0.9, 1, true);
        body.scale.x *= 1.2;
        const tail = con(chicken, feather, -0.12, 0.17, 0, 0.06, 0.15);
        tail.rotation.z = Math.PI / 4;
        const head = group(chicken, 0.12, 0.18, 0);
        ball(head, feather, 0, 0, 0, 0.07, 1, 1, true);
        box(head, comb, 0, 0.08, 0, 0.03, 0.05, 0.02, true);
        const chickenBeak = con(head, beak, 0.08, 0, 0, 0.03, 0.08);
        chickenBeak.rotation.z = -Math.PI / 2;
        chickens.push({
            group: chicken,
            head,
            target: new THREE.Vector3(startX, 0, startZ),
            mode: "idle",
            timer: 0.8 + index * 0.47
        });
    });
    let elapsed = 0;
    let targetCounter = 0;
    const setTarget = (chicken)=>{
        const angle = targetCounter++ * 2.399963;
        chicken.target.set(Math.sin(angle) * 1.7, 0, 1.42 + Math.cos(angle) * 0.65);
        chicken.mode = "walk";
    };
    model.userData.updateChickenCoop = (deltaSeconds)=>{
        elapsed += deltaSeconds;
        chickens.forEach((chicken, index)=>{
            chicken.timer -= deltaSeconds;
            if (chicken.mode === "walk") {
                const direction = chicken.target.clone().sub(chicken.group.position);
                const distance = direction.length();
                if (distance < 0.08) {
                    chicken.mode = index % 2 === 0 ? "peck" : "idle";
                    chicken.timer = 1.1 + index % 3 * 0.45;
                } else {
                    direction.normalize();
                    chicken.group.position.addScaledVector(direction, deltaSeconds * 0.5);
                    chicken.group.rotation.y = Math.atan2(-direction.z, direction.x);
                    chicken.head.rotation.z = Math.sin(elapsed * 14 + index) * 0.2;
                }
            } else if (chicken.mode === "peck") {
                chicken.head.rotation.z = -Math.abs(Math.sin(elapsed * 11 + index)) * 0.75;
                if (chicken.timer <= 0) setTarget(chicken);
            } else {
                chicken.head.rotation.z = 0;
                chicken.head.rotation.y = Math.sin(elapsed * 2 + index) * 0.55;
                if (chicken.timer <= 0) {
                    chicken.head.rotation.y = 0;
                    setTarget(chicken);
                }
            }
        });
    };
    fitExactly(model);
    return model;
}
