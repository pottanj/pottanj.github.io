import * as THREE from "three";
import { box, cyl, gable, group } from "./geometry.js";
const GAMEPLAY_SIZE = new THREE.Vector3(2.99, 2.88, 3.18);
function fitExactly(model) {
    model.updateMatrixWorld(true);
    const initial = new THREE.Box3().setFromObject(model);
    const size = initial.getSize(new THREE.Vector3());
    model.scale.set(GAMEPLAY_SIZE.x / size.x, GAMEPLAY_SIZE.y / size.y, GAMEPLAY_SIZE.z / size.z);
    model.updateMatrixWorld(true);
    const fitted = new THREE.Box3().setFromObject(model);
    const center = fitted.getCenter(new THREE.Vector3());
    model.position.set(-center.x, -fitted.min.y, -center.z);
}
export function buildPlayhouse(parent, materials, facadeColor) {
    const house = group(parent);
    house.name = "playhouse-model";
    const wall = materials.textured(facadeColor, "wood");
    const trim = materials.get("#f5f1df", 0.58);
    const roofMaterial = materials.textured("#30363d", "roof");
    const doorMaterial = materials.textured("#d79a32", "wood");
    const floorMaterial = materials.textured("#7f8fa6", "wood");
    const glass = materials.glass();
    const addFacade = (x, y, z, width, height, depth)=>{
        const facade = box(house, wall, x, y, z, width, height, depth, true);
        facade.userData.playhouseFacade = true;
        return facade;
    };
    box(house, floorMaterial, 0, 0.05, -0.75, 2.4, 0.1, 1.5, true);
    box(house, floorMaterial, -0.6, 0.05, 0.5, 1.2, 0.1, 1, true);
    addFacade(-1.175, 0.65, -0.75, 0.05, 1.1, 1.5);
    addFacade(1.175, 0.65, -0.75, 0.05, 1.1, 1.5);
    addFacade(0, 0.65, -1.475, 2.4, 1.1, 0.05);
    addFacade(0, 0.65, -0.025, 2.4, 1.1, 0.05);
    for (const [x, z] of [
        [
            -1.2,
            -1.5
        ],
        [
            1.2,
            -1.5
        ],
        [
            -1.2,
            0
        ],
        [
            1.2,
            0
        ]
    ])box(house, trim, x, 0.65, z, 0.1, 1.1, 0.1, true);
    const sideGableGeometry = new THREE.ExtrudeGeometry(new THREE.Shape([
        new THREE.Vector2(-0.75, 0),
        new THREE.Vector2(0.75, 0),
        new THREE.Vector2(0, 0.75)
    ]), {
        depth: 0.05,
        bevelEnabled: false
    });
    for (const x of [
        -1.2,
        1.2
    ]){
        const sideGable = new THREE.Mesh(sideGableGeometry, wall);
        sideGable.position.set(x, 1.2, -0.75);
        sideGable.rotation.y = -Math.PI / 2;
        sideGable.userData.playhouseFacade = true;
        house.add(sideGable);
    }
    const addRoofPanel = (x, y, z, width, depth, rotationX, rotationZ)=>{
        const panel = box(house, roofMaterial, x, y, z, width, 0.06, depth, true);
        panel.rotation.set(rotationX, 0, rotationZ);
        return panel;
    };
    addRoofPanel(0, 1.49, -0.29, 2.6, 1.3, Math.PI / 4, 0);
    addRoofPanel(0, 1.49, -1.21, 2.6, 1.3, -Math.PI / 4, 0);
    box(house, trim, 0, 1.96, -0.75, 2.72, 0.09, 0.1, true);
    const porchGable = gable(house, wall, 1.2, 0.05, 1.2, 0.6);
    porchGable.position.set(-0.6, 1.2, 0.975);
    porchGable.userData.playhouseFacade = true;
    addRoofPanel(-0.95, 1.45, 0.48, 1, 1.4, 0, Math.PI / 4);
    addRoofPanel(-0.25, 1.45, 0.48, 1, 1.4, 0, -Math.PI / 4);
    box(house, trim, -0.6, 1.82, 0.48, 0.08, 0.1, 1.52, true);
    for (const [x, z] of [
        [
            -1.15,
            0.95
        ],
        [
            -0.05,
            0.95
        ],
        [
            -1.15,
            0.05
        ]
    ])box(house, trim, x, 0.65, z, 0.08, 1.1, 0.08, true);
    for (const y of [
        0.15,
        0.55
    ]){
        box(house, trim, -0.6, y, 0.95, 1.02, 0.04, 0.04, true);
        box(house, trim, -1.15, y, 0.5, 0.04, 0.04, 0.82, true);
    }
    for(let index = 1; index <= 4; index += 1){
        box(house, trim, -1.15 + index * 0.2, 0.35, 0.95, 0.03, 0.36, 0.03, true);
        box(house, trim, -1.15, 0.35, 0.05 + index * 0.16, 0.03, 0.36, 0.03, true);
    }
    box(house, trim, -0.6, 0.625, 0.015, 0.62, 1.07, 0.08, true);
    box(house, doorMaterial, -0.6, 0.575, 0.065, 0.5, 0.95, 0.04, true);
    const handle = cyl(house, materials.get("#574b3b", 0.35, 0.5), -0.4, 0.58, 0.1, 0.025, 0.05);
    handle.rotation.x = Math.PI / 2;
    box(house, trim, 0.6, 0.7, 0.025, 0.52, 0.52, 0.08, true);
    box(house, glass, 0.6, 0.7, 0.075, 0.4, 0.4, 0.025, true);
    box(house, trim, 0.6, 0.7, 0.1, 0.4, 0.03, 0.035);
    box(house, trim, 0.6, 0.7, 0.1, 0.03, 0.4, 0.035);
    const roundFrame = cyl(house, trim, -0.6, 1.47, 1.01, 0.16, 0.08);
    roundFrame.rotation.x = Math.PI / 2;
    const roundGlass = cyl(house, glass, -0.6, 1.47, 1.06, 0.12, 0.03);
    roundGlass.rotation.x = Math.PI / 2;
    box(house, trim, -0.6, 1.47, 1.09, 0.24, 0.02, 0.025);
    box(house, trim, -0.6, 1.47, 1.09, 0.02, 0.24, 0.025);
    house.traverse((object)=>{
        if (!(object instanceof THREE.Mesh)) return;
        object.castShadow = true;
        object.receiveShadow = true;
    });
    fitExactly(house);
    return house;
}
