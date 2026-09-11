const anchors = {
    house: [
        0,
        0,
        -7
    ],
    garden: [
        0,
        0,
        8
    ],
    entrance: [
        0,
        0,
        19
    ],
    boundary: [
        16.5,
        0,
        0
    ]
};
export const worldDefinition = {
    seed: 240903,
    name: "Björkbacken",
    extent: 210,
    plots: [
        {
            id: "lindens",
            number: 1,
            name: "Äppelgården",
            description: "Falurött, fallfrukt och en tupp som saknar klocka.",
            position: [
                0,
                0,
                -36.8
            ],
            rotation: 0,
            facade: "#a44536",
            roof: "#535a59",
            kind: "orchard",
            anchors
        },
        {
            id: "solglantan",
            number: 2,
            name: "Solgläntan",
            description: "Studsmattan är stor. Läggtiden är en förhandling.",
            position: [
                -36.8,
                0,
                -18
            ],
            rotation: Math.PI / 2,
            facade: "#ddbe64",
            roof: "#a96949",
            kind: "family",
            anchors
        },
        {
            id: "solsidan",
            number: 3,
            name: "Solsidan",
            description: "Solceller på taket. Grannens tuja på tillväxt.",
            position: [
                36.8,
                0,
                -18
            ],
            rotation: -Math.PI / 2,
            facade: "#7297af",
            roof: "#475965",
            kind: "solar",
            anchors
        },
        {
            id: "gronskan",
            number: 4,
            name: "Grönskan",
            description: "Allt växer här. Även diskussionen om komposten.",
            position: [
                -36.8,
                0,
                18
            ],
            rotation: Math.PI / 2,
            facade: "#8eaa82",
            roof: "#95634f",
            kind: "gardener",
            anchors
        },
        {
            id: "parlan",
            number: 5,
            name: "Pärlan",
            description: "Kvarterets blåaste pool och rakaste gräskant.",
            position: [
                36.8,
                0,
                18
            ],
            rotation: -Math.PI / 2,
            facade: "#f0e4c8",
            roof: "#626663",
            kind: "pool",
            anchors
        },
        {
            id: "festbacken",
            number: 6,
            name: "Festbacken",
            description: "Bara några vänner. Och en liten högtalare till.",
            position: [
                0,
                0,
                36.8
            ],
            rotation: Math.PI,
            facade: "#c27f68",
            roof: "#766359",
            kind: "party",
            anchors
        }
    ],
    bookmarks: [
        {
            id: "overview",
            label: "Kvarteret",
            position: [
                0,
                154,
                34
            ],
            target: [
                0,
                0,
                0
            ]
        },
        {
            id: "green",
            label: "Allmänningen",
            position: [
                18,
                12,
                23
            ],
            target: [
                -3,
                3,
                -3
            ]
        },
        {
            id: "garden",
            label: "Äppelgården",
            position: [
                19,
                10,
                -20
            ],
            target: [
                0,
                3,
                -47
            ]
        },
        {
            id: "lake",
            label: "Vid sjön",
            position: [
                87,
                8,
                60
            ],
            target: [
                107,
                1.5,
                26
            ]
        }
    ]
};
export const weatherPresets = {
    sun: {
        id: "sun",
        label: "Soligt",
        caption: "22° · En alldeles vanlig sommardag",
        sky: "#9bc8de",
        fog: "#bed5bf",
        sun: "#fff1d2",
        sunPower: 2.8,
        ambientPower: 1.2,
        sunPosition: [
            -65,
            95,
            48
        ],
        exposure: 0.93,
        rain: 0,
        wind: 0.45
    },
    golden: {
        id: "golden",
        label: "Gyllene timmen",
        caption: "19° · Kvällen dröjer sig kvar",
        sky: "#cbbbac",
        fog: "#e2c69e",
        sun: "#ffd28a",
        sunPower: 3.2,
        ambientPower: 1.15,
        sunPosition: [
            -95,
            30,
            35
        ],
        exposure: 1.05,
        rain: 0,
        wind: 0.3
    },
    rain: {
        id: "rain",
        label: "Sommarregn",
        caption: "17° · Det går snart över",
        sky: "#778f9b",
        fog: "#a3b3ae",
        sun: "#dce6f0",
        sunPower: 0.9,
        ambientPower: 1.9,
        sunPosition: [
            -65,
            95,
            48
        ],
        exposure: 0.95,
        rain: 1,
        wind: 1.05
    }
};
export function seededRandom(seed) {
    return ()=>{
        seed |= 0;
        seed = seed + 0x6d2b79f5 | 0;
        let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
export function terrainHeight(x, z) {
    const lake = Math.sqrt(((x - 131) / 48) ** 2 + ((z - 9) / 79) ** 2);
    if (lake < 1.1) return -2.8 + Math.min(1, Math.max(0, (lake - 0.83) / 0.27)) * 2.8;
    const edge = Math.max(0, Math.max(Math.abs(x) - 84, Math.abs(z) - 85));
    return -0.08 + Math.min(1, edge / 36) * (2.8 + Math.sin(x * 0.036) * Math.cos(z * 0.024) * 3.3 + Math.sin(z * 0.06) * 1.3);
}
