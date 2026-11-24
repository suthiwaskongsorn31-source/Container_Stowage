var __defProp3 = Object.defineProperty,
    __defProps3 = Object.defineProperties;
var __getOwnPropDescs3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty,
    __propIsEnum3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value,
    __spreadValues3 = (a, b) => {
        for (var prop in b || (b = {}))
            __hasOwnProp3.call(b, prop) && __defNormalProp3(a, prop, b[prop]);
        if (__getOwnPropSymbols3)
            for (var prop of __getOwnPropSymbols3(b))
                __propIsEnum3.call(b, prop) && __defNormalProp3(a, prop, b[prop]);
        return a;
    },
    __spreadProps3 = (a, b) => __defProps3(a, __getOwnPropDescs3(b));
var __defProp2 = Object.defineProperty,
    __defProps2 = Object.defineProperties,
    __getOwnPropDescs2 = Object.getOwnPropertyDescriptors,
    __getOwnPropSymbols2 = Object.getOwnPropertySymbols,
    __hasOwnProp2 = Object.prototype.hasOwnProperty,
    __propIsEnum2 = Object.prototype.propertyIsEnumerable,
    __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value,
    __spreadValues2 = (a, b) => {
        for (var prop in b || (b = {}))
            __hasOwnProp2.call(b, prop) && __defNormalProp2(a, prop, b[prop]);
        if (__getOwnPropSymbols2)
            for (var prop of __getOwnPropSymbols2(b))
                __propIsEnum2.call(b, prop) && __defNormalProp2(a, prop, b[prop]);
        return a;
    },
    __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b)),
    __defProp = Object.defineProperty,
    __defProps = Object.defineProperties,
    __getOwnPropDescs = Object.getOwnPropertyDescriptors,
    __getOwnPropSymbols = Object.getOwnPropertySymbols,
    __hasOwnProp = Object.prototype.hasOwnProperty,
    __propIsEnum = Object.prototype.propertyIsEnumerable,
    __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value
    }) : obj[key] = value,
    __spreadValues = (a, b) => {
        for (var prop in b || (b = {})) __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        if (__getOwnPropSymbols)
            for (var prop of __getOwnPropSymbols(b))
                __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        return a;
    },
    __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const SPECS = [{
            code: "20GP",
            fam: "GP",
            floor: "wooden",
            L: 5898,
            W: 2352,
            H: 2393,
            payload: 28200,
            tare: 2300,
            freight: 1800,
            handling: 350,
            overH: !1,
            overW: !1,
            doorW: 2340,
            doorH: 2280
        },
        {
            code: "40GP",
            fam: "GP",
            floor: "wooden",
            L: 12032,
            W: 2352,
            H: 2393,
            payload: 26700,
            tare: 3750,
            freight: 2600,
            handling: 400,
            overH: !1,
            overW: !1,
            doorW: 2340,
            doorH: 2280
        },
        {
            code: "40HC",
            fam: "HC",
            floor: "wooden",
            L: 12032,
            W: 2352,
            H: 2698,
            payload: 26580,
            tare: 3900,
            freight: 2750,
            handling: 400,
            overH: !1,
            overW: !1,
            doorW: 2340,
            doorH: 2585
        },
        {
            code: "20RF",
            fam: "RF",
            L: 5444,
            W: 2294,
            H: 2276,
            payload: 27400,
            tare: 3080,
            freight: 4200,
            handling: 550,
            overH: !1,
            overW: !1,
            doorW: 2290,
            doorH: 2264
        },
        {
            code: "40RH",
            fam: "RF",
            L: 11583,
            W: 2294,
            H: 2557,
            payload: 25580,
            tare: 4480,
            freight: 6500,
            handling: 650,
            overH: !1,
            overW: !1,
            doorW: 2290,
            doorH: 2470
        },
        {
            code: "20OT",
            fam: "OT",
            floor: "wooden",
            L: 5898,
            W: 2352,
            H: 2348,
            payload: 28130,
            tare: 2350,
            freight: 2900,
            handling: 500,
            overH: !0,
            overW: !1
        },
        {
            code: "40OT",
            fam: "OT",
            floor: "wooden",
            L: 12032,
            W: 2352,
            H: 2348,
            payload: 26630,
            tare: 3850,
            freight: 4200,
            handling: 600,
            overH: !0,
            overW: !1
        },
        {
            code: "20FR",
            fam: "FR",
            L: 5698,
            W: 2438,
            H: 2327,
            payload: 31260,
            tare: 2740,
            freight: 3400,
            handling: 750,
            overH: !0,
            overW: !0
        },
        {
            code: "40FR",
            fam: "FR",
            L: 11832,
            W: 2438,
            H: 2043,
            payload: 39300,
            tare: 5700,
            freight: 5200,
            handling: 900,
            overH: !0,
            overW: !0
        }
    ],
    RATES = {};
SPECS.forEach((s) => {
    RATES[s.code] = {
        freight: s.freight,
        handling: s.handling
    };
});
const rateOf = (code) => RATES[code] || {
        freight: 0,
        handling: 0
    },
    boxCost = (s) => {
        const r = rateOf(s.code);
        return (r.freight || 0) + (r.handling || 0);
    },
    passesDoor = (s, w, h) => !s.doorW || w <= s.doorW && h <= s.doorH,
    GP_H = 2698,
    GP_W = 2352,
    MAX_OOG_WIDTH = 3950,
    MAX_OOG_HEIGHT = 4100,
    RESTING_LIMITS = {
        // size -> floorType -> [ [restLenM, maxTonnes], ... ]
        20: {
            steel: [
                [1, 7.6],
                [2, 15.2],
                [3, 22.8],
                [4, 30.2],
                [5, 30.2],
                [6, 30.2]
            ],
            wooden: [
                [1, 4.8],
                [2, 9.6],
                [3, 14.4],
                [4, 19.2],
                [5, 24],
                [6, 28.8]
            ]
        },
        40: {
            steel: [
                [1, 6],
                [2, 12],
                [3, 18],
                [4, 24],
                [5, 28.5],
                [6, 28.5],
                [7, 28.5],
                [8, 28.5],
                [9, 28.5]
            ],
            wooden: [
                [1, 3],
                [2, 6],
                [3, 9],
                [4, 12],
                [5, 15],
                [6, 18],
                [7, 21],
                [8, 23],
                [9, 26]
            ]
        }
    },
    FR_RESTING = {
        20: [
            [2, 16.7],
            [4, 20.9],
            [6, 27.9]
        ],
        // ~27.9 t class (typical 20' FR)
        40: [
            [2, 21.4],
            [4, 23.5],
            [6, 26.2],
            [8, 29.4],
            [10, 33.6],
            [12, 39.3]
        ]
        // ~39.3 t class
    },
    sizeClass = (spec) => spec.L > 9e3 ? "40" : "20";

function restingLimit(spec, restLenM) {
    const size = sizeClass(spec);
    let table;
    if (spec.fam === "FR") table = FR_RESTING[size];
    else if (spec.fam === "GP" || spec.fam === "HC" || spec.fam === "OT")
        table = RESTING_LIMITS[size][spec.floor || "wooden"];
    else return spec.payload / 1e3;
    if (!table) return spec.payload / 1e3;
    if (restLenM <= table[0][0]) return table[0][1] * (restLenM / table[0][0]);
    for (let i = 1; i < table.length; i++)
        if (restLenM <= table[i][0]) {
            const [l0, t0] = table[i - 1], [l1, t1] = table[i];
            return t0 + (t1 - t0) * (restLenM - l0) / (l1 - l0);
        }
    return table[table.length - 1][1];
}
const BEDDING_MAX_EXTEND = 1e3,
    isClosedStandard = (spec) => spec.fam === "GP" || spec.fam === "HC" || spec.fam === "RF",
    itemIsOOG = (it, spec) => it.oog === !0 || it.H > (spec ? spec.H : GP_H) || Math.min(it.L, it.W) > (spec ? spec.W : GP_W);
let SPACING_TOLERANCE = 0,
    DOOR_CLEARANCE = 282,
    AUTO_STACK = false,
    LASH_BOOST = 0,
    ANTI_SLIP = !1,
    FORK_ID = "5t",
    FRICTION = 0.3;
const MIN_SUPPORT_RATIO = 0.8,
    CSC_POINT_LOAD = 5460 / 284,
    FR_END_CLEARANCE = 300,
    RAIL_ZONE = 150,
    DECK_CONC_KG = 3e3,
    VERT_DYN = 1.5,
    WALL_SAFE_KPA = 300,
    REEFER_TOP_CLEAR = 120,
    REEFER_NOSE_CLEAR = 80,
    SLING_MIN_DEG = 45,
    SLING_TARGET_DEG = 60,
    CRANE_UTIL_LIMIT = 0.7,
    RIGGING_ALLOWANCE_KG = 300,
    FORK_AXLE_TO_FACE = 450,
    FORK_UTIL_LIMIT = 0.9,
    FORK_SIDE_CLEAR = 100,
    FORK_TANDEM_SHARE = 0.6,
    FORK_LONG_UNIT = 2600,
    CRANES = [{
            id: "25t",
            cw: 5,
            boomState: "telescopic",
            slew: "360 deg on outriggers",
            outrigger: 4.8,
            name: "25 t mobile crane",
            cap: 25e3,
            boom: 30,
            chart: [
                [3, 25e3],
                [5, 17500],
                [8, 10500],
                [10, 8200],
                [12, 6400],
                [15, 4600],
                [20, 2800]
            ]
        },
        {
            id: "50t",
            cw: 11,
            boomState: "telescopic",
            slew: "360 deg on outriggers",
            outrigger: 6.3,
            name: "50 t mobile crane",
            cap: 5e4,
            boom: 40,
            chart: [
                [3, 5e4],
                [5, 38e3],
                [8, 24e3],
                [10, 19e3],
                [12, 15500],
                [15, 11500],
                [20, 7600],
                [25, 5200]
            ]
        },
        {
            id: "80t",
            cw: 18,
            boomState: "telescopic",
            slew: "360 deg on outriggers",
            outrigger: 7.4,
            name: "80 t mobile crane",
            cap: 8e4,
            boom: 48,
            chart: [
                [3, 8e4],
                [5, 62e3],
                [8, 4e4],
                [10, 32e3],
                [12, 26e3],
                [15, 2e4],
                [20, 13500],
                [25, 9600],
                [30, 7e3]
            ]
        },
        {
            id: "100t",
            cw: 24,
            boomState: "telescopic",
            slew: "360 deg on outriggers",
            outrigger: 8,
            name: "100 t mobile crane",
            cap: 1e5,
            boom: 52,
            chart: [
                [3, 1e5],
                [5, 78e3],
                [8, 52e3],
                [10, 42e3],
                [12, 34500],
                [15, 27e3],
                [20, 18500],
                [25, 13500],
                [30, 1e4]
            ]
        },
        {
            id: "130t",
            cw: 33,
            boomState: "telescopic",
            slew: "360 deg on outriggers",
            outrigger: 8.4,
            name: "130 t mobile crane",
            cap: 13e4,
            boom: 60,
            chart: [
                [3, 13e4],
                [5, 1e5],
                [8, 68e3],
                [10, 55e3],
                [12, 45e3],
                [15, 35e3],
                [20, 24e3],
                [25, 17500],
                [30, 13e3],
                [35, 1e4]
            ]
        },
        {
            id: "160t",
            cw: 45,
            boomState: "telescopic",
            slew: "360 deg on outriggers",
            outrigger: 8.8,
            name: "160 t mobile crane",
            cap: 16e4,
            boom: 64,
            chart: [
                [3, 16e4],
                [5, 124e3],
                [8, 85e3],
                [10, 69e3],
                [12, 57e3],
                [15, 44e3],
                [20, 3e4],
                [25, 22e3],
                [30, 16500],
                [35, 12800]
            ]
        },
        {
            id: "200t",
            cw: 60,
            boomState: "telescopic",
            slew: "360 deg on outriggers",
            outrigger: 9.3,
            name: "200 t mobile crane",
            cap: 2e5,
            boom: 68,
            chart: [
                [3, 2e5],
                [5, 155e3],
                [8, 106e3],
                [10, 86e3],
                [12, 71e3],
                [15, 55e3],
                [20, 38e3],
                [25, 28e3],
                [30, 21e3],
                [35, 16500],
                [40, 13e3]
            ]
        },
        {
            id: "250t",
            cw: 75,
            boomState: "telescopic",
            slew: "360 deg on outriggers",
            outrigger: 10,
            name: "250 t mobile crane",
            cap: 25e4,
            boom: 72,
            chart: [
                [3, 25e4],
                [5, 194e3],
                [8, 133e3],
                [10, 108e3],
                [12, 89e3],
                [15, 69e3],
                [20, 48e3],
                [25, 35e3],
                [30, 27e3],
                [35, 21e3],
                [40, 16500]
            ]
        },
        {
            id: "300t",
            cw: 90,
            boomState: "fixed lattice",
            slew: "360 deg on outriggers",
            outrigger: 10.6,
            name: "300 t lattice crane",
            cap: 3e5,
            boom: 84,
            chart: [
                [3, 3e5],
                [5, 233e3],
                [8, 159e3],
                [10, 129e3],
                [12, 107e3],
                [15, 83e3],
                [20, 58e3],
                [25, 42e3],
                [30, 32e3],
                [35, 25e3],
                [40, 2e4],
                [45, 16e3]
            ]
        },
        {
            id: "400t",
            cw: 120,
            boomState: "fixed lattice",
            slew: "360 deg on outriggers",
            outrigger: 11.6,
            name: "400 t lattice crane",
            cap: 4e5,
            boom: 96,
            chart: [
                [3, 4e5],
                [5, 31e4],
                [8, 212e3],
                [10, 172e3],
                [12, 142e3],
                [15, 11e4],
                [20, 77e3],
                [25, 57e3],
                [30, 43e3],
                [35, 34e3],
                [40, 27e3],
                [45, 22e3],
                [50, 18e3]
            ]
        },
        {
            id: "500t",
            cw: 150,
            boomState: "fixed lattice",
            slew: "360 deg on outriggers",
            outrigger: 12.5,
            name: "500 t lattice crane",
            cap: 5e5,
            boom: 108,
            chart: [
                [3, 5e5],
                [5, 388e3],
                [8, 265e3],
                [10, 215e3],
                [12, 178e3],
                [15, 138e3],
                [20, 97e3],
                [25, 71e3],
                [30, 54e3],
                [35, 42e3],
                [40, 34e3],
                [45, 28e3],
                [50, 23e3]
            ]
        }
    ],
    LTM_FLEET = [{
            id: "LTM1110-5.2",
            name: "Liebherr LTM 1110-5.2",
            cls: 110,
            axles: 5,
            maxTBoom: 60,
            maxCw: 110,
            control: "LICCON3",
            outrigger: 8.3,
            chart: {
                source: "Liebherr LTM 1110-5.2 product brochure, lwe-td-305-03-defisr06-2024",
                standard: "EN 13000",
                config: "T 11.5-60 m, 360 deg, counterweight 29 t",
                note: "Hook block / hook weight is part of the load and must be deducted (brochure remark 5). Radii measured from the slewing centre (remark 6). Charts assume max wind 9 m/s (remark 2).",
                booms: [11.5, 15.2, 18.9, 22.6, 26.4, 30.1, 33.8, 37.5, 41.2, 45, 48.7, 52.4, 56.1, 58.1, 60],
                rows: [
                    [3, 0, [110, 82.2, 68.3, 67.6, 66.7, 58.4]],
                    [3.5, 0, [96.4, 82.2, 68.8, 68.1, 67.1, 60.2]],
                    [4, 0, [93.1, 78.1, 69, 68.6, 66.6, 60, 50.6]],
                    [4.5, 0, [87.2, 72.1, 69, 68.9, 67.1, 59.5, 50.3, 40.8]],
                    [5, 0, [80.4, 66.7, 66.2, 65.7, 65.1, 59.9, 49.9, 40.9]],
                    [6, 0, [68.2, 55.9, 55.5, 55.5, 54.8, 54, 48.8, 40.4, 32.1, 26.2]],
                    [7, 0, [57.1, 47.1, 47.9, 48.3, 48.3, 47.1, 45.7, 39.8, 31.2, 25.9, 21.2]],
                    [8, 0, [48.7, 40.3, 41.2, 41.5, 41.6, 41.6, 40.4, 38.8, 30.1, 25.4, 21, 17.2]],
                    [9, 0, [41.1, 35.1, 36.1, 36.3, 36.9, 36.9, 35.9, 34.7, 28.6, 24.7, 20.7, 17.2, 13.6, 11.1]],
                    [10, 1, [31.9, 32, 32.7, 32.6, 32, 30.9, 26.9, 23.6, 20, 17, 13.7, 11.1, 10.1, 9.2]],
                    [11, 1, [28.3, 28.6, 29, 29, 28.6, 27.8, 25.3, 22.5, 19.2, 16.7, 13.6, 11.1, 10.1, 9.2]],
                    [12, 1, [25.2, 25.9, 26, 26, 25.7, 24.9, 23.7, 21.4, 18.5, 16.3, 13.5, 11.1, 10, 9.1]],
                    [13, 1, [22.5, 23.2, 23.3, 23.3, 22.9, 22.5, 21.6, 20.4, 17.6, 15.8, 13.4, 11, 10, 9.1]],
                    [14, 2, [20.8, 21, 21, 20.6, 20.3, 20.2, 19.2, 16.7, 15.2, 13.2, 10.9, 9.9, 9]],
                    [15, 2, [18.9, 19, 19, 18.7, 18.4, 18.8, 17.8, 16, 14.5, 12.9, 10.7, 9.8, 9]],
                    [16, 2, [17.2, 17.4, 17.3, 17, 17.4, 17.1, 16.4, 15.2, 13.9, 12.5, 10.6, 9.6, 8.9]],
                    [18, 3, [14.8, 14.5, 14.9, 14.7, 14.4, 13.9, 13.6, 12.8, 11.6, 10.1, 9.4, 8.6]],
                    [20, 3, [12.7, 12.4, 12.8, 12.6, 12.2, 12.3, 12.2, 11.5, 10.6, 9.5, 8.9, 8]],
                    [22, 4, [11.2, 11.1, 10.8, 11, 10.7, 10.4, 10.1, 9.8, 8.8, 8.4, 7.5]],
                    [24, 4, [9.9, 9.7, 9.4, 9.5, 9.2, 9.2, 8.9, 8.6, 8.1, 7.8, 6.9]],
                    [26, 5, [8.5, 8.4, 8.3, 8.1, 8, 7.7, 7.6, 7.4, 7.2, 6.3]],
                    [28, 5, [7.3, 7.7, 7.2, 7.4, 7, 6.9, 6.7, 6.4, 6.4, 5.8]],
                    [30, 6, [6.8, 6.4, 6.5, 6.1, 6.1, 5.8, 5.5, 5.6, 5.3]],
                    [32, 7, [6, 5.7, 5.6, 5.3, 5.1, 4.7, 4.8, 4.7]],
                    [34, 7, [5.3, 5, 4.9, 4.7, 4.4, 4.2, 4.2, 4.1]],
                    [36, 8, [4.5, 4.4, 4.2, 4, 3.7, 3.7, 3.7]],
                    [38, 8, [4.1, 4, 3.8, 3.6, 3.3, 3.3, 3.3]],
                    [40, 9, [3.6, 3.4, 3.2, 2.9, 3, 2.9]],
                    [42, 9, [3.3, 3.1, 2.9, 2.6, 2.6, 2.6]],
                    [44, 10, [2.8, 2.6, 2.3, 2.3, 2.3]],
                    [46, 10, [2.5, 2.3, 2, 2.1, 2]],
                    [48, 11, [2.1, 1.7, 1.8, 1.7]],
                    [50, 11, [1.8, 1.5, 1.5, 1.5]],
                    [52, 12, [1.2, 1.3, 1.2]],
                    [54, 13, [1.1, 1]],
                    [56, 14, [0.8]]
                ]
            },
            verified: !0,
            source: "manufacturer brochure - transcribed and validated"
        },
        {
            id: "LTM1250-5.1",
            name: "Liebherr LTM 1250-5.1",
            cls: 250,
            axles: 5,
            maxTBoom: 60,
            maxCw: 88,
            control: "LICCON2",
            outrigger: 8.9,
            chart: {
                kind: "curve",
                source: "Liebherr LTM 1250-5.1 product brochure",
                standard: "EN 13000",
                config: "T 13.1-60 m, 360 deg, counterweight 88 t - best-boom capacity",
                partial: !0,
                note: "Best-boom capacity per radius. The per-boom-length breakdown is not loaded for this model - the brochure's column layout could not be recovered reliably from the source, so only the maximum capacity at each radius is used. That is the figure a crew selecting the optimum boom works to, but the matrix cannot show the boom-by-boom detail. Hook block weight must be deducted; radii from the slewing centre; charts assume max wind 9 m/s.",
                curve: [
                    [3, 250],
                    [3.5, 142.2],
                    [4, 140.3],
                    [4.5, 138.1],
                    [5, 134.7],
                    [6, 119.8],
                    [7, 106.5],
                    [8, 95.2],
                    [9, 84.9],
                    [10, 74.5],
                    [11, 66.8],
                    [12, 61.7],
                    [14, 53],
                    [16, 45.8],
                    [18, 40],
                    [20, 35.1],
                    [22, 31],
                    [24, 27.6],
                    [26, 25],
                    [28, 22.6],
                    [30, 20.6],
                    [32, 18.4],
                    [34, 16.9],
                    [36, 15.5],
                    [38, 14.3],
                    [40, 13.1],
                    [42, 12.2],
                    [44, 11.1],
                    [46, 10.2],
                    [48, 9.4],
                    [50, 8.9],
                    [52, 7.8],
                    [54, 7.2],
                    [56, 6.5],
                    [58, 3.6]
                ]
            },
            verified: !0,
            source: "manufacturer brochure - best-boom curve transcribed and validated"
        },
        {
            id: "LTM1300-6.3",
            name: "Liebherr LTM 1300-6.3",
            cls: 300,
            axles: 6,
            maxTBoom: 90,
            maxCw: 68,
            control: "LICCON2",
            outrigger: 9.6,
            chart: {
                kind: "curve",
                source: "Liebherr LTM 1300-6.3 product brochure",
                standard: "EN 13000",
                config: "T 14.7-90 m, 360 deg, counterweight 88 t - best-boom capacity",
                partial: !0,
                note: "Best-boom capacity per radius. The per-boom-length breakdown is not loaded for this model - the brochure's column layout could not be recovered reliably from the source, so only the maximum capacity at each radius is used. That is the figure a crew selecting the optimum boom works to, but the matrix cannot show the boom-by-boom detail. Hook block weight must be deducted; radii from the slewing centre; charts assume max wind 9 m/s.",
                curve: [
                    [3, 300],
                    [3.5, 167.1],
                    [4, 163],
                    [4.5, 159.3],
                    [5, 150.3],
                    [6, 135],
                    [7, 119.4],
                    [8, 105.2],
                    [9, 94.4],
                    [10, 85.9],
                    [11, 77.1],
                    [12, 67],
                    [13, 62],
                    [14, 57.8],
                    [15, 54.3],
                    [16, 50.2],
                    [18, 43.4],
                    [20, 37.8],
                    [22, 34.2],
                    [24, 30.4],
                    [26, 27.5],
                    [28, 25],
                    [30, 22.6],
                    [32, 20.6],
                    [34, 18.8],
                    [36, 16.6],
                    [38, 15.4],
                    [40, 14.6],
                    [42, 13.5],
                    [44, 12.5],
                    [46, 10.7],
                    [48, 10],
                    [50, 8.8],
                    [52, 8.2],
                    [54, 7.5],
                    [56, 7],
                    [58, 6.6],
                    [60, 5.9],
                    [62, 5.4],
                    [64, 4.9],
                    [66, 4.6],
                    [68, 4.2],
                    [70, 3.8],
                    [72, 3.4],
                    [74, 2.6],
                    [76, 2.2],
                    [78, 1.9],
                    [80, 1.6],
                    [82, 1.4]
                ]
            },
            verified: !0,
            source: "manufacturer brochure - best-boom curve transcribed and validated"
        },
        {
            id: "LTM1450-8.1",
            name: "Liebherr LTM 1450-8.1",
            cls: 450,
            axles: 8,
            maxTBoom: 85,
            maxCw: 134,
            control: "LICCON2",
            outrigger: 11.4,
            chart: {
                kind: "curve",
                source: "Liebherr LTM 1450-8.1 product brochure",
                standard: "EN 13000",
                config: "T 16.1-85 m, 360 deg, counterweight 134 t - best-boom capacity",
                partial: !0,
                note: "Best-boom capacity per radius. The per-boom-length breakdown is not loaded for this model - the brochure's column layout could not be recovered reliably from the source, so only the maximum capacity at each radius is used. That is the figure a crew selecting the optimum boom works to, but the matrix cannot show the boom-by-boom detail. Hook block weight must be deducted; radii from the slewing centre; charts assume max wind 9 m/s.",
                curve: [
                    [3, 450],
                    [3.5, 239.3],
                    [4, 239.3],
                    [4.5, 239.3],
                    [5, 239.3],
                    [6, 238.8],
                    [7, 212.4],
                    [8, 185.3],
                    [9, 164.1],
                    [10, 146.8],
                    [12, 120.5],
                    [14, 101.4],
                    [16, 85],
                    [18, 73.8],
                    [20, 64.8],
                    [22, 57.6],
                    [24, 52.4],
                    [26, 47.5],
                    [28, 43.1],
                    [30, 39.4],
                    [32, 36.1],
                    [34, 33.3],
                    [36, 29.7],
                    [38, 27.5],
                    [40, 25.5],
                    [42, 23.8],
                    [44, 22.8],
                    [46, 20],
                    [48, 18.6],
                    [50, 17.3],
                    [52, 15.4],
                    [54, 14.4],
                    [56, 12.3],
                    [58, 11.8],
                    [60, 11.2],
                    [62, 9.9],
                    [64, 9.5],
                    [66, 9.1],
                    [68, 7.7],
                    [70, 7.4],
                    [72, 6.7],
                    [74, 6.5],
                    [76, 4.7],
                    [78, 3.1],
                    [80, 2.9],
                    [82, 2.3]
                ]
            },
            verified: !0,
            source: "manufacturer brochure - best-boom curve transcribed and validated"
        }
    ],
    BOOM_CONFIGS = [{
            id: "T",
            name: "T - Telescopic boom (TELEMATIK)",
            jib: !1
        },
        {
            id: "TV",
            name: "TV - Telescopic + V extension",
            jib: !1
        },
        {
            id: "TK",
            name: "TK - Telescopic + K swing-away jib (mechanical)",
            jib: !0
        },
        {
            id: "TNZK",
            name: "TNZK - Telescopic + NZK hydraulic jib",
            jib: !0
        },
        {
            id: "TS",
            name: "TS - Telescopic + S powerful jib",
            jib: !0
        },
        {
            id: "TF",
            name: "TF - Telescopic + F/NZF fixed lattice jib",
            jib: !0
        }
    ],
    WIND_STD_MS = 9,
    WIND_STOP_MS = 13.8,
    FORKLIFTS = [{
            id: "2.5t",
            width: 1150,
            mast: 2050,
            serv: 3900,
            name: "2.5 t forklift",
            cap: 2500,
            lc: 500,
            fork: 1070
        },
        {
            id: "3t",
            width: 1200,
            mast: 2100,
            serv: 4300,
            name: "3 t forklift",
            cap: 3e3,
            lc: 500,
            fork: 1220
        },
        {
            id: "5t",
            width: 1400,
            mast: 2200,
            serv: 7400,
            name: "5 t forklift",
            cap: 5e3,
            lc: 600,
            fork: 1220
        },
        {
            id: "8t",
            width: 1900,
            mast: 2500,
            serv: 11500,
            name: "8 t forklift",
            cap: 8e3,
            lc: 600,
            fork: 1500
        },
        {
            id: "10t",
            width: 2200,
            mast: 2900,
            serv: 14e3,
            name: "10 t forklift",
            cap: 1e4,
            lc: 600,
            fork: 1800
        },
        {
            id: "16t",
            width: 2300,
            mast: 3e3,
            serv: 22e3,
            name: "16 t forklift",
            cap: 16e3,
            lc: 1200,
            fork: 1800
        },
        {
            id: "25t",
            width: 2700,
            mast: 3400,
            serv: 34e3,
            name: "25 t forklift",
            cap: 25e3,
            lc: 1200,
            fork: 2400
        }
    ],
    CS_FACTOR = 1.5,
    LASH_EFF = 0.7,
    SEG_SEPARATED = [
        ["3", "5.1"],
        ["2.1", "5.1"]
    ],
    SEG_AWAY = [
        ["3", "8"],
        ["8", "5.1"],
        ["3", "4.1"],
        ["2.1", "3"]
    ],
    EPS = 1e-6,
    APP_VERSION = "10.26",
    stackCapOf = (item) => {
        const v = +(item && item.maxStackKg) || 0;
        return v > 0 ? v : 1 / 0;
    },
    contactAreaCm2 = (p) => {
        const declared = +(p.item && p.item.contactCm2) || 0;
        return declared > 0 ? declared : p.l * p.w / 100;
    },
    DEMO_CARGO = [{
            id: 1,
            name: "Auto parts carton",
            L: 1200,
            W: 1e3,
            H: 1e3,
            kg: 450,
            qty: 20,
            stack: !0,
            turn: !0,
            maxLayers: 3,
            haz: "",
            temp: !1,
            drop: 2
        },
        {
            id: 2,
            name: "Compressor unit",
            L: 1800,
            W: 1200,
            H: 1400,
            kg: 1900,
            qty: 4,
            stack: !1,
            turn: !0,
            maxLayers: 1,
            haz: "",
            temp: !1,
            drop: 2
        },
        {
            id: 3,
            name: "Lubricant drums",
            L: 1200,
            W: 1e3,
            H: 1300,
            kg: 780,
            qty: 8,
            stack: !1,
            turn: !0,
            maxLayers: 1,
            haz: "3",
            temp: !1,
            drop: 1
        },
        {
            id: 4,
            name: "Film rolls",
            L: 1100,
            W: 1100,
            H: 1900,
            kg: 320,
            qty: 10,
            stack: !1,
            turn: !0,
            maxLayers: 1,
            haz: "",
            temp: !1,
            drop: 1
        },
        {
            id: 5,
            name: "Frozen food pallet",
            L: 1200,
            W: 1e3,
            H: 1800,
            kg: 650,
            qty: 12,
            stack: !1,
            turn: !0,
            maxLayers: 1,
            haz: "",
            temp: !0,
            drop: 1
        },
        {
            id: 6,
            name: "Radiator skid",
            L: 5400,
            W: 2200,
            H: 2950,
            kg: 9800,
            qty: 1,
            stack: !1,
            turn: !1,
            maxLayers: 1,
            haz: "",
            temp: !1,
            drop: 1
        }
    ],
    segPair = (list, a, b) => list.some(([x, y]) => x === a && y === b || x === b && y === a),
    orientations = (it) => it.L === it.W || it.turn === !1 ? [
        [it.L, it.W, it.H]
    ] : [
        [it.L, it.W, it.H],
        [it.W, it.L, it.H]
    ];

function expandUnits(items) {
    const units = [];
    return items.forEach((it) => {
        for (let n = 1; n <= it.qty; n++) units.push({
            it,
            n
        });
    }), units.sort(
        (a, b) => b.it.drop - a.it.drop || (b.it.stack ? 1 : 0) - (a.it.stack ? 1 : 0) || b.it.kg - a.it.kg || b.it.L * b.it.W * b.it.H - a.it.L * a.it.W * a.it.H
    ), units;
}
class Engine {
    constructor(spec, index) {
        this.spec = spec, this.index = index, this.placed = [], this.points = [
            [0, 0, 0]
        ], this.weight = 0, this.shift = 0;
    }
    inside(x, y, z, l, w, h) {
        const s = this.spec,
            side = s.overW ? (MAX_OOG_WIDTH - s.W) / 2 : 0,
            overWide = w > s.W + EPS,
            yMin = overWide ? -side : 0,
            yMax = overWide ? s.W + side : s.W,
            uL = isClosedStandard(s) ? Math.max(0, s.L - DOOR_CLEARANCE) : s.L,
            endClear = overWide && (s.fam === "FR" || s.fam === "OT") ? FR_END_CLEARANCE : 0;
        return x >= endClear - EPS && x + l <= uL - endClear + EPS && y >= yMin - EPS && z >= -EPS && x + l <= uL + EPS && // length is a hard limit (door clearance kept for closed boxes)
            y + w <= yMax + EPS && (z + h <= s.H + EPS || s.overH && z <= EPS && z + h <= MAX_OOG_HEIGHT + EPS);
    }
    overlaps(x, y, z, l, w, h) {
        return this.placed.some(
            (p) => x < p.x + p.l - EPS && x + l > p.x + EPS && y < p.y + p.w - EPS && y + w > p.y + EPS && z < p.z + p.h - EPS && z + h > p.z + EPS
        );
    }
    support(x, y, z, l, w) {
        if (z <= EPS) return {
            ok: !0,
            sup: [],
            areas: []
        };
        let area = 0;
        const sup = [],
            areas = [];
        for (const p of this.placed)
            if (Math.abs(p.z + p.h - z) <= 2) {
                const ox = Math.max(0, Math.min(x + l, p.x + p.l) - Math.max(x, p.x)),
                    oy = Math.max(0, Math.min(y + w, p.y + p.w) - Math.max(y, p.y));
                ox * oy > 0 && (sup.push(p), areas.push(ox * oy), area += ox * oy);
            }
        return {
            ok: area + EPS >= MIN_SUPPORT_RATIO * l * w,
            sup,
            areas
        };
    }
    stackLoadOk(sup, areas, kg) {
        if (!sup || !sup.length) return !0;
        const tot = (areas || []).reduce((a, b) => a + b, 0);
        if (!(tot > 0)) return !0;
        for (let i = 0; i < sup.length; i++) {
            const p = sup[i],
                share = kg * areas[i] / tot,
                cap = stackCapOf(p.item);
            if (((p.borne || 0) + share) * VERT_DYN > cap + EPS || !this.stackLoadOk(p.sup, p.areas, share)) return !1;
        }
        return !0;
    }
    applyLoad(sup, areas, kg) {
        if (!sup || !sup.length) return;
        const tot = (areas || []).reduce((a, b) => a + b, 0);
        if (tot > 0)
            for (let i = 0; i < sup.length; i++) {
                const p = sup[i],
                    share = kg * areas[i] / tot;
                p.borne = (p.borne || 0) + share, this.applyLoad(p.sup, p.areas, share);
            }
    }
    segOk(it, x, y, l, w) {
        if (!it.haz) return !0;
        const cx = x + l / 2,
            cy = y + w / 2;
        for (const p of this.placed)
            if (!(!p.item.haz || p.item.haz === it.haz) && (segPair(SEG_SEPARATED, it.haz, p.item.haz) || segPair(SEG_AWAY, it.haz, p.item.haz) && Math.hypot(cx - (p.x + p.l / 2), cy - (p.y + p.w / 2)) < 3e3))
                return !1;
        return !0;
    }
    lifoOk(it, x) {
        return !this.placed.some(
            (p) => it.drop > p.item.drop && x > p.x + EPS || it.drop < p.item.drop && x < p.x - EPS
        );
    }
    tryPlace(it, n) {
        if (this.weight + it.kg > this.spec.payload + EPS) return !1;
        let best = null,
            bestScore = 1 / 0;
        for (const [x, y, z] of this.points)
            for (const [l, w, h] of orientations(it)) {
                if (!passesDoor(this.spec, w, h)) continue;
                const yy = this.spec.overW && w > this.spec.W + EPS ? (this.spec.W - w) / 2 : y,
                    endClamp = w > this.spec.W + EPS && (this.spec.fam === "FR" || this.spec.fam === "OT") ? FR_END_CLEARANCE : 0,
                    xx = endClamp ? Math.min(Math.max(x, endClamp), this.spec.L - endClamp - l) : x;
                if (!this.inside(xx, yy, z, l, w, h) || this.overlaps(xx, yy, z, l, w, h)) continue;
                const s = this.support(xx, yy, z, l, w);
                if (!s.ok || s.sup.some((p) => !effStack(p.item) || p.oog)) continue;
                if (z > EPS && s.sup.some((p) => it.kg > p.item.kg + 0.5)) continue;
                if (z > EPS) {
                    const layersBelow = 1 + s.sup.reduce((mx2, p) => Math.max(mx2, p.stackLayer || 1), 0) - 1,
                        capBelow = Math.min(...s.sup.map((p) => effLayers(p.item))),
                        capSelf = effLayers(it);
                    if (layersBelow + 1 > Math.min(capBelow, capSelf) || !this.stackLoadOk(s.sup, s.areas, it.kg)) continue;
                }
                if (!this.segOk(it, xx, yy, l, w) || !this.lifoOk(it, xx)) continue;
                const tw = this.weight + it.kg,
                    my = this.placed.reduce((a, p) => a + p.item.kg * (p.y + p.w / 2), 0),
                    mx = this.placed.reduce((a, p) => a + p.item.kg * (p.x + p.l / 2), 0),
                    latDev = Math.abs((my + it.kg * (yy + w / 2)) / tw - this.spec.W / 2),
                    lonDev = Math.abs((mx + it.kg * (xx + l / 2)) / tw - this.spec.L / 2);
                let score;
                if (isClosedStandard(this.spec)) {
                    const sideHug = Math.min(yy, this.spec.W - (yy + w)),
                        heavyLow = z * (1 + it.kg / this.spec.payload * 4);
                    let hDiff = 0;
                    const sameLayer = this.placed.filter((p) => Math.abs(p.z - z) <= 2);
                    sameLayer.length && (hDiff = Math.min(...sameLayer.map((p) => Math.abs(p.h - h))));
                    const faces = this.placed.filter((p) => Math.abs(p.z - z) <= 2).map((p) => p.x + p.l),
                        faceAlign = faces.length ? Math.min(...faces.map((f) => Math.abs(f - (xx + l)))) : 0;
                    score = heavyLow * 5 + xx * 1.2 + sideHug * 0.9 + latDev * 3 + lonDev * 1.5 + hDiff * 2e-3 + faceAlign * 1e-3;
                } else score = z * 5 + latDev * 4 + lonDev * 4 + xx * 0.3;
                if (score < bestScore) {
                    const layer = z <= EPS ? 1 : 1 + s.sup.reduce((mx2, p) => Math.max(mx2, p.stackLayer || 1), 0);
                    bestScore = score, best = {
                        item: it,
                        n,
                        x: xx,
                        y: yy,
                        z,
                        l,
                        w,
                        h,
                        stackLayer: layer,
                        oog: z + h > this.spec.H + EPS || w > this.spec.W + EPS,
                        sup: s.sup,
                        areas: s.areas,
                        borne: 0
                    };
                }
            }
        if (!best) return !1;
        this.placed.push(best), this.weight += it.kg, this.applyLoad(best.sup, best.areas, it.kg);
        const gap = isClosedStandard(this.spec) ? SPACING_TOLERANCE : 0;
        return this.points.push(
            [best.x + best.l + gap, best.y, best.z],
            [best.x, best.y + best.w + gap, best.z],
            [best.x, best.y, best.z + best.h]
        ), this.points = this.points.filter((pt) => !this.overlaps(pt[0], pt[1], pt[2], 1, 1, 1)), this.points.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1]), !0;
    }
}

function buildRows(placed) {
    const sorted = [...placed].sort((a, b) => a.x - b.x),
        rows = [];
    let cur = null;
    for (const p of sorted)
        (!cur || p.x >= cur.maxX - 1) && (cur = {
            items: [],
            minX: p.x,
            maxX: p.x + p.l
        }, rows.push(cur)), cur.items.push(p), cur.minX = Math.min(cur.minX, p.x), cur.maxX = Math.max(cur.maxX, p.x + p.l);
    return rows;
}

function segregationHolds(placed) {
    for (let i = 0; i < placed.length; i++)
        for (let j = i + 1; j < placed.length; j++) {
            const a = placed[i],
                b = placed[j];
            if (!(!a.item.haz || !b.item.haz || a.item.haz === b.item.haz) && segPair(SEG_AWAY, a.item.haz, b.item.haz) && Math.hypot(a.x + a.l / 2 - (b.x + b.l / 2), a.y + a.w / 2 - (b.y + b.w / 2)) < 3e3)
                return !1;
        }
    return !0;
}

function permutations(arr) {
    if (arr.length <= 1) return [arr];
    const out = [];
    return arr.forEach((v, i) => {
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).forEach((rest) => out.push([v, ...rest]));
    }), out;
}

function reorderSegment(eng, segRows) {
    const s = eng.spec,
        segStart = Math.min(...segRows.map((r) => r.minX)),
        baseMx = eng.placed.filter((p) => !segRows.some((r) => r.items.includes(p))).reduce((a, p) => a + p.item.kg * (p.x + p.l / 2), 0),
        rowLen = (r) => r.maxX - r.minX,
        rowKg = (r) => r.items.reduce((a, p) => a + p.item.kg, 0),
        evalPerm = (perm) => {
            let pos = segStart,
                mx = baseMx;
            const offs = [];
            for (const r of perm) {
                const off = pos - r.minX;
                offs.push(off);
                for (const p of r.items) mx += p.item.kg * (p.x + off + p.l / 2);
                pos += rowLen(r);
            }
            return [Math.abs(mx / eng.weight - s.L / 2), offs];
        };
    let best = null,
        bestOff = 1 / 0,
        bestOffsets = null;
    const consider = (perm) => {
        const [off, offs] = evalPerm(perm);
        return off < bestOff - 0.5 ? (bestOff = off, best = perm, bestOffsets = offs, !0) : !1;
    };
    if (segRows.length <= 6) permutations(segRows).forEach(consider);
    else {
        consider(segRows);
        const n = segRows.length,
            byKg = [...segRows].sort((a, b) => rowKg(b) - rowKg(a)),
            posOrder = [...Array(n).keys()].sort((a, b) => Math.abs(a - (n - 1) / 2) - Math.abs(b - (n - 1) / 2)),
            seeded = Array(n);
        byKg.forEach((r, i) => {
            seeded[posOrder[i]] = r;
        }), consider(seeded);
        let cur = [...best];
        for (let pass = 0; pass < 12; pass++) {
            let improved = !1;
            for (let a = 0; a < n - 1; a++)
                for (let c = a + 1; c < n; c++) {
                    const trial = [...cur];
                    [trial[a], trial[c]] = [trial[c], trial[a]], consider(trial) && (cur = trial, improved = !0);
                }
            if (!improved) break;
        }
    }
    if (!best) return;
    const backup = eng.placed.map((p) => p.x);
    best.forEach(
        (r, i) => r.items.forEach((p) => {
            p.x += bestOffsets[i];
        })
    ), segregationHolds(eng.placed) || eng.placed.forEach((p, i) => {
        p.x = backup[i];
    });
}

function rebalance(eng) {
    if (!eng.placed.length) return;
    const s = eng.spec;
    if (s.fam === "FR" || s.fam === "OT") {
        const minX2 = Math.min(...eng.placed.map((p) => p.x)),
            maxX2 = Math.max(...eng.placed.map((p) => p.x + p.l)),
            cgx = eng.placed.reduce((a, p) => a + p.item.kg * (p.x + p.l / 2), 0) / eng.weight,
            ow = eng.placed.filter((p) => p.w > s.W + EPS);
        let loX = -minX2,
            hiX = s.L - maxX2;
        if (ow.length) {
            const owMin = Math.min(...ow.map((p) => p.x)),
                owMax = Math.max(...ow.map((p) => p.x + p.l)),
                lo2x = Math.max(loX, FR_END_CLEARANCE - owMin),
                hi2x = Math.min(hiX, s.L - FR_END_CLEARANCE - owMax);
            lo2x <= hi2x && (loX = lo2x, hiX = hi2x);
        }
        const dx = Math.max(loX, Math.min(hiX, s.L / 2 - cgx));
        Math.abs(dx) > 10 && (eng.placed.forEach((p) => {
            p.x += dx;
        }), eng.shift = dx);
        const side2 = s.overW ? (MAX_OOG_WIDTH - s.W) / 2 : 0;
        let lo2 = -1 / 0,
            hi2 = 1 / 0;
        for (const p of eng.placed) {
            const over = p.w > s.W + EPS;
            lo2 = Math.max(lo2, (over ? -side2 : 0) - p.y), hi2 = Math.min(hi2, (over ? s.W + side2 : s.W) - (p.y + p.w));
        }
        const cgy = eng.placed.reduce((a, p) => a + p.item.kg * (p.y + p.w / 2), 0) / eng.weight,
            dy2 = Math.max(lo2, Math.min(hi2, s.W / 2 - cgy));
        Math.abs(dy2) > 10 && isFinite(dy2) && (eng.placed.forEach((p) => {
            p.y += dy2;
        }), eng.shiftY = dy2);
        return;
    }
    const rows = buildRows(eng.placed),
        rowIsStacked = (r) => r.items.some((p) => (p.stackLayer || 1) > 1) || eng.placed.some(
            (q) => q.z > EPS && r.items.some((p) => Math.abs(q.x - p.x) < 1 && Math.abs(q.y - p.y) < 1)
        ),
        dropOf = (r) => {
            const d = new Set(r.items.map((p) => p.item.drop));
            return d.size === 1 ? [...d][0] : null;
        };
    let i = 0;
    for (; i < rows.length;) {
        const d = dropOf(rows[i]);
        let j = i;
        for (; j < rows.length && d !== null && dropOf(rows[j]) === d;) j++;
        const flat = rows.slice(i, j).filter((r) => !rowIsStacked(r));
        flat.length >= 2 && reorderSegment(eng, flat), i = Math.max(j, i + 1);
    }
    const minX = Math.min(...eng.placed.map((p) => p.x)),
        usedLen = Math.max(...eng.placed.map((p) => p.x + p.l)) - minX,
        freeLen = s.L - usedLen;
    let mx = 0,
        my = 0;
    eng.placed.forEach((p) => {
        mx += p.item.kg * (p.x + p.l / 2), my += p.item.kg * (p.y + p.w / 2);
    });
    const cgX = mx / eng.weight,
        GAP_BUDGET = Math.abs(cgX - s.L / 2) / s.L * 100 > 10 ? freeLen : 0;
    if (GAP_BUDGET > 10) {
        const want = s.L / 2 - cgX,
            dx = Math.max(-minX, Math.min(freeLen, Math.sign(want) * Math.min(Math.abs(want), GAP_BUDGET)));
        Math.abs(dx) > 10 && (eng.placed.forEach((p) => {
            p.x += dx;
        }), eng.shift = dx);
    } else
        minX > 10 && (eng.placed.forEach((p) => {
            p.x -= minX;
        }), eng.shift = -minX);
    const side = s.overW ? (MAX_OOG_WIDTH - s.W) / 2 : 0;
    let lo = -1 / 0,
        hi = 1 / 0;
    for (const p of eng.placed) {
        const over = p.w > s.W + EPS;
        lo = Math.max(lo, (over ? -side : 0) - p.y), hi = Math.min(hi, (over ? s.W + side : s.W) - (p.y + p.w));
    }
    const dy = Math.max(lo, Math.min(hi, s.W / 2 - my / eng.weight));
    Math.abs(dy) > 10 && isFinite(dy) && (eng.placed.forEach((p) => {
        p.y += dy;
    }), eng.shiftY = dy);
}

function commitPlacement(eng, it, n, x, y, z, l, w, h, layer) {
    const s = z > EPS ? eng.support(x, y, z, l, w) : {
        sup: [],
        areas: []
    };
    eng.placed.push({
        item: it,
        n,
        x,
        y,
        z,
        l,
        w,
        h,
        stackLayer: layer || 1,
        oog: z + h > eng.spec.H + EPS || w > eng.spec.W + EPS,
        sup: s.sup,
        areas: s.areas,
        borne: 0
    }), eng.weight += it.kg, eng.applyLoad(s.sup, s.areas, it.kg);
}

function honeycombPack(eng, units) {
    if (!units.length) return 0;
    const s = eng.spec,
        it = units[0].it,
        D = Math.min(it.L, it.W),
        r = D / 2,
        H = it.H,
        rowPitch = D * (Math.sqrt(3) / 2),
        nFull = Math.floor(s.W / D),
        nOff = Math.floor((s.W - D / 2) / D);
    if (nFull < 1) return 0;
    let placed = 0,
        row = 0,
        u = 0;
    for (let x = r; x + r <= s.L + EPS && u < units.length; x = r + ++row * rowPitch) {
        const parity = row % 2,
            count = parity === 0 ? nFull : nOff;
        for (let j = 0; j < count && u < units.length; j++) {
            const y = r + j * D + parity * (D / 2);
            if (y + r > s.W + EPS) break;
            commitPlacement(eng, units[u].it, units[u].n, x - r, y - r, 0, D, D, H, 1), u++, placed++;
        }
    }
    return eng.pattern = "honeycomb", placed;
}

function pinwheelPack(eng, units) {
    if (!units.length) return 0;
    const s = eng.spec,
        it = units[0].it;
    let l = Math.max(it.L, it.W),
        w = Math.min(it.L, it.W),
        h = it.H;
    if (l === w) return 0;
    const cell = l + w,
        plainRowsPerWidth = Math.max(Math.floor(s.W / w), Math.floor(s.W / l)),
        plainResidual = s.W - Math.max(Math.floor(s.W / w) * w, Math.floor(s.W / l) * l),
        pinwheelCols = Math.floor(s.W / cell);
    if (pinwheelCols < 1 || plainResidual < Math.min(l, w) * 0.5) return 0;
    let u = 0;
    const place = (x, y, ll, ww) => u >= units.length || x + ll > s.L + EPS || y + ww > s.W + EPS ? !1 : (commitPlacement(eng, units[u].it, units[u].n, x, y, 0, ll, ww, h, 1), u++, !0);
    for (let x = 0; x + cell <= s.L + EPS && u < units.length; x += cell)
        for (let c = 0; c < pinwheelCols && u < units.length; c++) {
            const y0 = c * cell;
            place(x, y0, l, w), place(x + l, y0, w, l), place(x + l - w, y0 + w, l, w), place(x, y0 + w, w, l);
        }
    let progressed = !0;
    for (; u < units.length && progressed;) {
        progressed = !1;
        const maxX = eng.placed.length ? Math.max(...eng.placed.map((p) => p.x + p.l)) : 0,
            perRow = Math.floor(s.W / w);
        if (perRow >= 1 && maxX + l <= s.L + EPS)
            for (let j = 0; j < perRow && u < units.length; j++) place(maxX, j * w, l, w) && (progressed = !0);
        else break;
    }
    return eng.pattern = "pinwheel", u;
}

function offsetConstrainedPack(eng, units, axle) {
    let remaining = [...units],
        progress = !0;
    for (; progress;) {
        progress = !1;
        for (const uu of [...remaining])
            eng.tryPlace(uu.it, uu.n) && (remaining = remaining.filter((r) => r !== uu), progress = !0);
    }
    if (eng.pattern = "offset", axle && axle.B > 0 && eng.placed.length) {
        const s = eng.spec,
            minX = Math.min(...eng.placed.map((p) => p.x)),
            maxX = Math.max(...eng.placed.map((p) => p.x + p.l)),
            Lblock = maxX - minX,
            m = eng.weight,
            xTargetFromFront = Math.min(axle.B * (axle.rearMax / Math.max(m, 1)), axle.B * 0.6),
            xTarget = Math.max(Lblock / 2, Math.min(s.L - Lblock / 2, xTargetFromFront * 1e3)),
            curCentroid = eng.placed.reduce((a, p) => a + p.item.kg * (p.x + p.l / 2), 0) / m;
        let dx = xTarget - curCentroid;
        dx = Math.max(-minX, Math.min(s.L - maxX, dx)), Math.abs(dx) > 10 && (eng.placed.forEach((p) => {
            p.x += dx;
        }), eng.shift = dx, eng.axleShift = dx);
    }
    return eng.placed.length;
}
const STACK_TOL = 120;
function effStack(it){ return !!(it && (it.stack || AUTO_STACK)); }
function effLayers(it){ if(!it) return 1; if(it.stack) return it.maxLayers || 99; return AUTO_STACK ? 3 : 1; }

function assembleStacks(units, spec) {
    const pool = units.map((u, i) => ({
            u,
            i,
            it: u.it
        })),
        used = /* @__PURE__ */ new Set(),
        stacks = [],
        area = (it) => it.L * it.W,
        crushOk = (arr) => arr.every((r, i) => {
            const cap = r.it.maxStackKg || 0;
            return !cap || arr.slice(i + 1).reduce((t, q) => t + q.it.kg, 0) <= cap;
        }),
        fitsOn = (top, base) => top.L <= base.L + STACK_TOL && top.W <= base.W + STACK_TOL || top.W <= base.L + STACK_TOL && top.L <= base.W + STACK_TOL,
        order = [...pool].sort(
            (a, b) => b.it.drop - a.it.drop || area(b.it) - area(a.it) || b.it.kg - a.it.kg
        );
    for (const base of order) {
        if (used.has(base.i) || !effStack(base.it) || effLayers(base.it) <= 1) continue;
        used.add(base.i);
        const parts = [__spreadProps2(__spreadValues2({}, base), {
                z: 0
            })],
            maxLay = Math.max(1, effLayers(base.it));
        let h = base.it.H,
            kg = base.it.kg;
        for (; !(parts.length >= maxLay);) {
            const fpL = Math.max(...parts.map((q) => q.it.L)),
                fpW = Math.max(...parts.map((q) => q.it.W)),
                growOf = (top) => Math.min(
                    Math.max(0, top.L - fpL) + Math.max(0, top.W - fpW),
                    Math.max(0, top.W - fpL) + Math.max(0, top.L - fpW)
                ),
                cand = order.filter((c) => !used.has(c.i) && c.it.drop === base.it.drop).filter((c) => fitsOn(c.it, base.it)).filter((c) => h + c.it.H <= spec.H).filter((c) => c.it.kg <= parts[parts.length - 1].it.kg + 0.5).filter((c) => crushOk([...parts, {
                    it: c.it
                }])).sort((a, b) => growOf(a.it) - growOf(b.it) || area(b.it) - area(a.it) || b.it.kg - a.it.kg)[0];
            if (!cand) break;
            used.add(cand.i), parts.push(__spreadProps2(__spreadValues2({}, cand), {
                z: h
            })), h += cand.it.H, kg += cand.it.kg;
        }
        stacks.push({
            base,
            parts,
            h,
            kg
        });
    }
    const singles = pool.filter((x) => !used.has(x.i));
    {
        const full = stacks.filter((q) => q.parts.length > 1);
        if (full.length > 1) {
            const chain = (arr) => arr.every((r, i) => i === 0 || fitsOn(r.it, arr[i - 1].it)),
                sortArr = (arr) => {
                    const byW = [...arr].sort((x, y) => y.it.kg - x.it.kg);
                    return chain(byW) ? byW : [...arr].sort((x, y) => area(y.it) - area(x.it) || y.it.kg - x.it.kg);
                },
                inversions = (arr) => arr.reduce((t, r, i) => t + (i && r.it.kg > arr[i - 1].it.kg ? 1 : 0), 0),
                hOf = (arr) => arr.reduce((t, r) => t + r.it.H, 0),
                kgOf = (arr) => arr.reduce((t, r) => t + r.it.kg, 0),
                okArr = (arr) => crushOk(arr) && hOf(arr) <= spec.H && inversions(arr) === 0 && arr.length <= Math.max(1, Math.min(...arr.map((r) => effLayers(r.it)))) && arr.every((r, i) => i === 0 || fitsOn(r.it, arr[i - 1].it)),
                costOf = (list) => {
                    const hs = list.map(hOf),
                        ks = list.map(kgOf);
                    return Math.max(...ks) - Math.min(...ks) + (Math.max(...hs) - Math.min(...hs)) * 0.6 + // a heavy pallet sitting on a lighter one is worse than any imbalance
                        list.reduce((t, arr) => t + inversions(arr), 0) * 2500;
                };
            let cur = full.map((q) => sortArr(q.parts));
            for (let pass = 0; pass < 300; pass++) {
                const base = costOf(cur);
                let best = null;
                for (let x = 0; x < cur.length; x++)
                    for (let y = x + 1; y < cur.length; y++)
                        for (let i = 0; i < cur[x].length; i++)
                            for (let j = 0; j < cur[y].length; j++) {
                                if (cur[x][i].it.drop !== cur[y][j].it.drop || !fitsOn(cur[x][i].it, cur[y][j].it) || !fitsOn(cur[y][j].it, cur[x][i].it)) continue;
                                const fp = (arr) => [Math.max(...arr.map((r) => r.it.L)), Math.max(...arr.map((r) => r.it.W))],
                                    fpX = fp(cur[x]),
                                    fpY = fp(cur[y]),
                                    tA = [...cur[x]],
                                    tB = [...cur[y]];
                                tA[i] = cur[y][j], tB[j] = cur[x][i];
                                const nX = fp(tA),
                                    nY = fp(tB);
                                if (nX[0] !== fpX[0] || nX[1] !== fpX[1] || nY[0] !== fpY[0] || nY[1] !== fpY[1]) continue;
                                const A = [...cur[x]],
                                    B = [...cur[y]];
                                A[i] = cur[y][j], B[j] = cur[x][i];
                                const As = sortArr(A),
                                    Bs = sortArr(B);
                                if (!okArr(As) || !okArr(Bs)) continue;
                                const trial = cur.map((p2, k) => k === x ? As : k === y ? Bs : p2),
                                    c = costOf(trial);
                                c < base - 1 && (!best || c < best.c) && (best = {
                                    x,
                                    y,
                                    As,
                                    Bs,
                                    c
                                });
                            }
                if (!best) break;
                cur = cur.map((p2, k) => k === best.x ? best.As : k === best.y ? best.Bs : p2);
            }
            full.forEach((q, k) => {
                let z = 0;
                cur[k].forEach((r) => (r.z = z, z += r.it.H)), q.parts = cur[k], q.base = cur[k][0], q.h = hOf(cur[k]), q.kg = kgOf(cur[k]);
            });
        }
    }
    stacks.forEach((s2) => {
        if (s2.parts.length < 2) return;
        const chainOk = (arr) => {
                for (let i = 1; i < arr.length; i++)
                    if (!fitsOn(arr[i].it, arr[i - 1].it)) return !1;
                return !0;
            },
            byWeight = [...s2.parts].sort((a, b) => b.it.kg - a.it.kg),
            byArea = [...s2.parts].sort((a, b) => area(b.it) - area(a.it) || b.it.kg - a.it.kg),
            chosen = chainOk(byWeight) ? byWeight : chainOk(byArea) ? byArea : s2.parts;
        let z = 0;
        chosen.forEach((q) => (q.z = z, z += q.it.H)), s2.parts = chosen, s2.base = chosen[0];
    });
    const composites = stacks.map((s2, k) => {
        if (s2.parts.length === 1) return {
            u: s2.base.u,
            it: s2.base.it,
            composite: null
        };
        const it = __spreadProps2(__spreadValues2({}, s2.base.it), {
            name: s2.parts.map((q) => q.it.name).join(" + "),
            L: Math.max(...s2.parts.map((q) => q.it.L)),
            W: Math.max(...s2.parts.map((q) => q.it.W)),
            H: s2.h,
            kg: s2.kg,
            qty: 1,
            stack: !1,
            maxLayers: 1,
            maxStackKg: 0,
            _stackId: k + 1,
            parts: s2.parts.map((q) => ({
                it: q.it,
                n: q.u.n,
                z: q.z
            }))
        });
        return {
            u: {
                it,
                n: 1
            },
            it,
            composite: it
        };
    });
    return {
        units: [...composites.map((c) => c.u), ...singles.map((x) => x.u)].sort(
            (a, b) => b.it.drop - a.it.drop || b.it.H - a.it.H || b.it.kg - a.it.kg
        ),
        stackCount: composites.filter((c) => c.composite).length,
        heights: stacks.filter((x) => x.parts.length > 1).map((x) => x.h)
    };
}

function enforceStackOrder(eng) {
    const s = eng.spec;
    if (s.fam === "FR" || s.fam === "OT") return eng;
    const rows = buildRows(eng.placed);
    if (rows.length < 2) {
        const m0 = Math.min(...eng.placed.map((p) => p.x));
        return m0 > 1 && eng.placed.forEach((p) => {
            p.x -= m0;
        }), eng;
    }
    const topOf = (r) => Math.max(...r.items.map((q) => q.z + q.h)),
        dropOf = (r) => Math.max(...r.items.map((q) => q.item.drop || 1)),
        ordered = [...rows].sort((a, b) => dropOf(b) - dropOf(a) || topOf(b) - topOf(a));
    let cursor = 0;
    return ordered.forEach((r) => {
        const dx = cursor - r.minX;
        r.items.forEach((q) => {
            q.x += dx;
        }), cursor += r.maxX - r.minX;
    }), eng;
}

function stackingSummary(eng) {
    const s = eng.spec,
        cols = {};
    eng.placed.forEach((p) => {
        const k = `${Math.round(p.x)}|${Math.round(p.y)}`;
        (cols[k] = cols[k] || []).push(p);
    });
    const list = Object.values(cols).map((v) => {
        v.sort((a, b) => a.z - b.z);
        const top = Math.max(...v.map((q) => q.z + q.h));
        return {
            x: v[0].x,
            y: v[0].y,
            l: v[0].l,
            w: v[0].w,
            tiers: v.map((q, i) => ({
                tier: i + 1,
                p: q,
                id: q.item.id,
                no: q.pieceNo || null,
                pkg: q.item.pkg || "",
                label: `${q.item.name}${q.item.qty > 1 || q.n > 1 ? ` #${q.n}` : ""}`,
                h: Math.round(q.h),
                kg: Math.round(q.item.kg),
                z: Math.round(q.z)
            })),
            height: Math.round(top),
            kg: Math.round(v.reduce((a, q) => a + q.item.kg, 0)),
            count: v.length
        };
    }).sort((a, b) => a.x - b.x || a.y - b.y);
    let bay = 0,
        lastX = null;
    const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    let seq = 0;
    list.forEach((c) => {
        (lastX === null || Math.abs(c.x - lastX) > 1) && (bay += 1, lastX = c.x), c.bay = bay;
        const mid = c.y + c.w / 2;
        c.side = c.w >= s.W * 0.7 ? "full width" : mid < s.W / 2 ? "left" : "right", c.id = `${bay}${c.side === "full width" ? "" : c.side === "left" ? "L" : "R"}`, c.place = c.side === "full width" ? `Bay ${bay} - full width` : `Bay ${bay} - ${c.side} side`, c.words = `${c.place}: put ${c.tiers[0].label} on the floor${c.tiers.slice(1).map((t, k) => `, then ${t.label}${k === c.tiers.length - 2 ? " on top" : ""}`).join("")}. Finished column ${c.height} mm high, ${c.kg.toLocaleString()} kg.`, c.seq = ++seq, c.zone = c.x + c.l / 2 < s.L / 3 ? "Nose" : c.x + c.l / 2 < 2 * s.L / 3 ? "Mid" : "Door";
    });
    const stacked = list.filter((c) => c.count > 1);
    return {
        columns: list,
        stacked,
        totalKg: list.reduce((a, c) => a + c.kg, 0),
        maxHeight: list.length ? Math.max(...list.map((c) => c.height)) : 0,
        note: stacked.length ? `${stacked.length} column(s) are pre-stacked, ${list.length - stacked.length} single. Build each column on the apron in the order shown, bottom first, then load the columns in the sequence given - tallest first from the nose.` : "No pre-stacking required - every unit is a single piece."
    };
}

function containerLegend(eng) {
    const by = {};
    return eng.placed.forEach((p) => {
        const k = p.item.name;
        (by[k] = by[k] || {
            name: k,
            pkg: p.item.pkg || "",
            nos: [],
            kg: 0,
            m3: 0
        }).nos.push(p.pieceNo || 0), by[k].kg += p.item.kg, by[k].m3 += p.l * p.w * p.h / 1e9;
    }), Object.values(by).map((g) => {
        const ns = g.nos.filter(Boolean).sort((a2, b) => a2 - b),
            parts = [];
        let a = ns[0],
            prev = ns[0];
        return ns.slice(1).forEach((x) => {
            x === prev + 1 || (parts.push(a === prev ? `${a}` : `${a}-${prev}`), a = x), prev = x;
        }), ns.length && parts.push(a === prev ? `${a}` : `${a}-${prev}`), __spreadProps2(__spreadValues2({}, g), {
            range: parts.join(", "),
            count: ns.length
        });
    }).sort((x, y) => (x.nos[0] || 0) - (y.nos[0] || 0));
}

function stowMapSVG(eng) {
    const ss = stackingSummary(eng),
        s = eng.spec,
        placed = eng.placed,
        skuIds = [...new Set(placed.map((p) => p.item.id))],
        stepOf = new Map(loadingOrder(eng).map((p, i) => [p, i + 1])),
        colOf = (id) => SKU_COLORS[skuIds.indexOf(id) % SKU_COLORS.length],
        cols = ss.columns,
        e = (v) => v.toFixed(1),
        boxX = 190,
        titleY = 110,
        padT = 660,
        boxW = 1850,
        drawH = 4600,
        sc = drawH / s.L,
        minx = Math.min(...placed.map((p) => p.x)),
        used = Math.max(...placed.map((p) => p.x + p.l)) - minx,
        types = skuIds.map((id) => {
            const grp = placed.filter((p) => p.item.id === id);
            return { name: grp[0].item.name, color: colOf(id), count: grp.length, kg: Math.round(grp.reduce((a, p) => a + p.item.kg, 0)) };
        }),
        inX = boxX + 70, inY = padT + 70, inW = boxW - 140, inH = drawH - 140,
        brX = boxX + boxW + 150,
        by0 = inY, by1 = inY + used * sc,
        sBoxX = boxX + boxW + 540, sBoxW = 1950,
        W = sBoxX + sBoxW + 220,
        legY0 = padT + drawH + 320,
        legRows = Math.ceil(types.length / 2),
        H = Math.max(legY0 + legRows * 210 + 120, padT + drawH + 400);
    let o = `<svg xmlns="http://www.w3.org/2000/svg" width="${e(W)}" height="${e(H)}" viewBox="0 0 ${e(W)} ${e(H)}" font-family="Arial, Helvetica, sans-serif">`;
    o += `<rect width="${e(W)}" height="${e(H)}" fill="#FFFFFF"/>`;
    o += `<rect x="${e(boxX)}" y="${e(titleY)}" width="820" height="260" rx="20" fill="#E8B7C4" stroke="#8A5A66" stroke-width="10"/><text x="${e(boxX + 410)}" y="${e(titleY + 185)}" text-anchor="middle" font-size="185" font-weight="700" fill="#1B2430">1 x ${s.code}</text>`;
    eng.containerNo && (o += `<text x="${e(boxX + 900)}" y="${e(titleY + 185)}" font-size="155" font-weight="700" fill="#1B2430">No. ${String(eng.containerNo).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</text>`);
    o += `<text x="${e(boxX + boxW / 2)}" y="${e(padT - 55)}" text-anchor="middle" font-size="135" font-weight="700" fill="#5A6472">NOSE (front wall)</text>`;
    o += `<rect x="${e(boxX)}" y="${e(padT)}" width="${e(boxW)}" height="${e(drawH)}" fill="#EDEAE2" stroke="#000000" stroke-width="26"/>`;
    o += `<rect x="${e(boxX + 45)}" y="${e(padT + 45)}" width="${e(boxW - 90)}" height="${e(drawH - 90)}" fill="#FFFFFF" stroke="#000000" stroke-width="12"/>`;
    cols.forEach((c) => {
        const w = c.w / s.W * inW, x = inX + inW - (c.y + c.w) / s.W * inW, y = inY + (c.x - minx) * sc, h = c.l * sc,
            color = colOf(c.tiers[0].id),
            ids = c.tiers.map((t) => stepOf.get(t.p) || t.no || "").join("+"),
            fs = Math.min(Math.min(w, h) * 0.5, 175);
        o += `<rect x="${e(x + 10)}" y="${e(y + 10)}" width="${e(Math.max(1, w - 20))}" height="${e(Math.max(1, h - 20))}" rx="14" fill="${color}" fill-opacity="0.9" stroke="#1B2430" stroke-width="12"/>`;
        o += `<text x="${e(x + w / 2)}" y="${e(y + h / 2)}" text-anchor="middle" dominant-baseline="central" font-size="${e(fs)}" font-weight="700" fill="#FFFFFF" stroke="#1B2430" stroke-width="4">${ids}</text>`;
    });
    o += `<text x="${e(boxX + boxW / 2)}" y="${e(padT + drawH + 150)}" text-anchor="middle" font-size="135" font-weight="700" fill="#E8600A">DOOR</text>`;
    o += `<path d="M${e(brX)} ${e(by0)} L${e(brX + 90)} ${e(by0)} L${e(brX + 90)} ${e(by1)} L${e(brX)} ${e(by1)}" fill="none" stroke="#D33A2C" stroke-width="22"/>`;
    o += `<line x1="${e(brX + 90)}" y1="${e((by0 + by1) / 2)}" x2="${e(sBoxX)}" y2="${e((by0 + by1) / 2)}" stroke="#D33A2C" stroke-width="22"/>`;
    const counts = {};
    placed.forEach((p) => { const k = (p.item.pkg || "pcs").trim() || "pcs"; counts[k] = (counts[k] || 0) + 1; });
    const summary = Object.entries(counts).map(([k, v]) => `${v} ${k}`).join("  /  "),
        sBoxY = Math.max(padT, (by0 + by1) / 2 - 330);
    o += `<rect x="${e(sBoxX)}" y="${e(sBoxY)}" width="${sBoxW}" height="660" rx="26" fill="#BFD7EA" stroke="#3F6E8C" stroke-width="16"/>`;
    o += `<text x="${e(sBoxX + sBoxW / 2)}" y="${e(sBoxY + 210)}" text-anchor="middle" font-size="175" font-weight="700" fill="#1B2430">${summary}</text>`;
    o += `<text x="${e(sBoxX + sBoxW / 2)}" y="${e(sBoxY + 400)}" text-anchor="middle" font-size="215" font-weight="700" fill="#1B2430">${Math.round(used / 10)} cms.</text>`;
    o += `<text x="${e(sBoxX + sBoxW / 2)}" y="${e(sBoxY + 530)}" text-anchor="middle" font-size="135" font-weight="700" fill="#5A6472">${Math.round(placed.reduce((a, p) => a + p.item.kg, 0)).toLocaleString()} kg</text>`;
    o += `<text x="${e(sBoxX + sBoxW / 2)}" y="${e(sBoxY + 630)}" text-anchor="middle" font-size="108" fill="#5A6472">used of ${Math.round(s.L / 10)} cm - ${Math.round((s.L - used) / 10)} cm free at the door</text>`;
    o += `<text x="${e(boxX)}" y="${e(legY0 - 60)}" font-size="140" font-weight="700" fill="#1B2430">Colours \u00b7 numbers on boxes = loading step</text>`;
    types.forEach((t, i) => {
        const coln = i % 2, row = Math.floor(i / 2), lx = boxX + coln * ((W - boxX) / 2), ly = legY0 + row * 200;
        o += `<rect x="${e(lx)}" y="${e(ly - 120)}" width="150" height="150" rx="16" fill="${t.color}" stroke="#1B2430" stroke-width="8"/>`;
        o += `<text x="${e(lx + 200)}" y="${e(ly - 10)}" font-size="125" fill="#1B2430">${t.name}  -  ${t.count} pcs, ${t.kg.toLocaleString()} kg</text>`;
    });
    return o + "</svg>";
}


function stackingCardsSVG(eng) {
    const ss = stackingSummary(eng);
    if (!ss.stacked.length) return null;
    const cols = ss.columns,
        perRow = 4,
        CW = 2850,
        CH = 3550,
        rows = Math.ceil(cols.length / perRow),
        MAPH = 1750,
        W = 12e3,
        H = 900 + MAPH + 400 + rows * CH,
        e = (v) => v.toFixed(1),
        s = eng.spec;
    let o = `<svg xmlns="http://www.w3.org/2000/svg" width="${e(W)}" height="${e(H)}" viewBox="0 0 ${e(W)} ${e(H)}" font-family="Arial, Helvetica, sans-serif">`;
    o += `<rect width="${e(W)}" height="${e(H)}" fill="#F7F4EC"/>`, o += '<text x="250" y="420" font-size="290" font-weight="700" fill="#1B2430">HOW TO BUILD EACH STACK</text>', o += '<text x="250" y="700" font-size="200" fill="#5A6472">Build on the ground first, bottom piece down, then load the stacks in the number order shown. Number 1 goes in first, against the far wall.</text>';
    const mx = 250,
        my = 900,
        mw = W - 500,
        scx = mw / s.L,
        mh = MAPH - 300;
    o += `<rect x="${e(mx)}" y="${e(my)}" width="${e(mw)}" height="${e(mh)}" fill="#FFFFFF" stroke="#1B2430" stroke-width="26"/>`, o += `<text x="${e(mx + 60)}" y="${e(my + mh / 2)}" font-size="190" font-weight="700" fill="#5A6472" transform="rotate(-90 ${e(mx + 60)} ${e(my + mh / 2)})" text-anchor="middle">NOSE</text>`, o += `<text x="${e(mx + mw - 60)}" y="${e(my + mh / 2)}" font-size="190" font-weight="700" fill="#E8600A" transform="rotate(90 ${e(mx + mw - 60)} ${e(my + mh / 2)})" text-anchor="middle">DOOR</text>`, cols.forEach((c) => {
        const bx = mx + c.x * scx,
            bw2 = c.l * scx,
            by = my + c.y / s.W * mh,
            bh = c.w / s.W * mh;
        o += `<rect x="${e(bx + 8)}" y="${e(by + 8)}" width="${e(bw2 - 16)}" height="${e(bh - 16)}" fill="#3F6E8C" fill-opacity="0.22" stroke="#3F6E8C" stroke-width="18"/>`, o += `<circle cx="${e(bx + bw2 / 2)}" cy="${e(by + bh / 2)}" r="150" fill="#1B2430"/>`, o += `<text x="${e(bx + bw2 / 2)}" y="${e(by + bh / 2 + 62)}" text-anchor="middle" font-size="175" font-weight="700" fill="#FFFFFF">${c.seq}</text>`, o += `<text x="${e(bx + bw2 / 2)}" y="${e(by + bh - 90)}" text-anchor="middle" font-size="130" fill="#3F6E8C">${c.height} mm</text>`;
    }), o += `<text x="${e(mx)}" y="${e(my + mh + 230)}" font-size="175" fill="#5A6472">Plan view - the number in each box is the loading order. Taller stacks go nearest the nose.</text>`;
    const top0 = my + MAPH + 250,
        maxH = Math.max(...cols.map((c) => c.height));
    return cols.forEach((c, i) => {
        const cx = 250 + i % perRow * ((W - 500) / perRow),
            cy = top0 + Math.floor(i / perRow) * CH,
            cw = (W - 500) / perRow - 180;
        o += `<rect x="${e(cx)}" y="${e(cy)}" width="${e(cw)}" height="${e(CH - 220)}" rx="90" fill="#FFFFFF" stroke="#C9C2B4" stroke-width="22"/>`, o += `<circle cx="${e(cx + 260)}" cy="${e(cy + 270)}" r="185" fill="#1B2430"/>`, o += `<text x="${e(cx + 260)}" y="${e(cy + 340)}" text-anchor="middle" font-size="215" font-weight="700" fill="#FFFFFF">${c.seq}</text>`, o += `<text x="${e(cx + 520)}" y="${e(cy + 250)}" font-size="200" font-weight="700" fill="#1B2430">${c.place}</text>`, o += `<text x="${e(cx + 520)}" y="${e(cy + 460)}" font-size="170" fill="#5A6472">${c.zone} of container</text>`;
        const bx0 = cx + 170,
            bw3 = cw - 340,
            areaTop = cy + 640,
            areaH = CH - 1250,
            scale = areaH / Math.max(maxH, 1);
        let yb = areaTop + areaH;
        c.tiers.forEach((t, k) => {
            const bh2 = Math.max(230, t.h * scale);
            yb -= bh2;
            const tone = ["#3F8F5B", "#3F6E8C", "#8C5A3F", "#6E4A8C"][k % 4];
            o += `<rect x="${e(bx0)}" y="${e(yb)}" width="${e(bw3)}" height="${e(bh2)}" fill="${tone}" fill-opacity="0.85" stroke="#1B2430" stroke-width="18"/>`, o += `<text x="${e(bx0 + 90)}" y="${e(yb + bh2 / 2 - 20)}" font-size="165" font-weight="700" fill="#FFFFFF">${k === 0 ? "1st (floor)" : k === c.tiers.length - 1 ? `${k + 1}${k === 1 ? "nd" : k === 2 ? "rd" : "th"} (top)` : `${k + 1}${k === 1 ? "nd" : k === 2 ? "rd" : "th"}`}</text>`, o += `<text x="${e(bx0 + 90)}" y="${e(yb + bh2 / 2 + 175)}" font-size="185" font-weight="700" fill="#FFFFFF">${t.label}</text>`, o += `<text x="${e(bx0 + bw3 - 90)}" y="${e(yb + bh2 / 2 + 90)}" text-anchor="end" font-size="185" font-weight="700" fill="#FFFFFF">${t.kg.toLocaleString()} kg</text>`;
        }), o += `<line x1="${e(cx + cw - 80)}" y1="${e(areaTop + areaH - 60)}" x2="${e(cx + cw - 80)}" y2="${e(yb + 60)}" stroke="#5A6472" stroke-width="28" marker-end="url(#up)"/>`, o += `<text x="${e(cx + cw - 150)}" y="${e((areaTop + areaH + yb) / 2)}" text-anchor="middle" font-size="150" fill="#5A6472" transform="rotate(-90 ${e(cx + cw - 150)} ${e((areaTop + areaH + yb) / 2)})">build upward</text>`, o += `<text x="${e(cx + 170)}" y="${e(cy + CH - 330)}" font-size="185" font-weight="700" fill="#1B2430">${c.tiers.length} pieces  -  ${c.height} mm high  -  ${c.kg.toLocaleString()} kg</text>`;
    }), o += '<defs><marker id="up" markerWidth="7" markerHeight="7" refX="3.5" refY="6" orient="auto"><path d="M0,7 L3.5,0 L7,7 Z" fill="#5A6472"/></marker></defs>', o + "</svg>";
}

function stackOrderCheck(eng) {
    const cols = {};
    eng.placed.forEach((p) => {
        const k = `${Math.round(p.x)}|${Math.round(p.y)}`;
        (cols[k] = cols[k] || []).push(p);
    });
    const list = Object.entries(cols).map(([k, v]) => ({
            x: v[0].x,
            y: v[0].y,
            top: Math.max(...v.map((q) => q.z + q.h)),
            names: v.sort((a, b) => a.z - b.z).map((q) => `${q.item.name} #${q.n}`)
        })).sort((a, b) => a.x - b.x),
        warns = [];
    return list.forEach((c, i) => {
        if (i === 0) return;
        const fwd = Math.max(...list.slice(0, i).map((q) => q.top));
        c.top - fwd > 300 && warns.push(
            `STACK ORDER - ${c.names[0]} column at ${(c.x / 1e3).toFixed(2)} m stands ${Math.round(c.top)} mm but the tallest cargo forward of it is only ${Math.round(fwd)} mm. Under a brake surge the upper pieces have nothing to lean against and can topple forward. Load the taller columns first (nose end), or fit a high anti-tip lashing across this column.`
        );
    }), {
        columns: list,
        warns,
        ordered: warns.length === 0
    };
}

function expandComposites(eng) {
    const out = [];
    return eng.placed.forEach((p) => {
        if (!p.item || !p.item.parts) {
            out.push(p);
            return;
        }
        p.item.parts.forEach(
            (q, k) => out.push(__spreadProps2(__spreadValues2({}, p), {
                item: q.it,
                n: q.n,
                z: p.z + q.z,
                h: q.it.H,
                l: p.l,
                w: p.w,
                // layer index WITHIN the assembled stack - downstream crush, LIFO and
                // reporting all read this, so it must not inherit the composite's 1
                stackLayer: (p.stackLayer || 1) + k,
                _stackOf: p.item._stackId
            }))
        );
    }), eng.placed = out.sort((a, b) => a.x - b.x || a.y - b.y || a.z - b.z), eng;
}

function packAll(units, spec, startIdx, stackFirst = !0) {
    const asm = stackFirst ? assembleStacks(units, spec) : null;
    let remaining = asm ? [...asm.units] : [...units];
    const boxes = [];
    let idx = startIdx;
    for (; remaining.length;) {
        const eng = new Engine(spec, idx);
        let progress = !0;
        for (; progress;) {
            progress = !1;
            for (const u of [...remaining])
                eng.tryPlace(u.it, u.n) && (remaining = remaining.filter((r) => r !== u), progress = !0);
        }
        if (!eng.placed.length) return {
            boxes: null,
            remaining
        };
        expandComposites(eng), boxes.push(eng), idx++;
    }
    return {
        boxes,
        remaining: []
    };
}

function classify(items) {
    const g = {
        reefer: [],
        oversize_h: [],
        oversize_w: [],
        general: []
    };
    return items.forEach((it) => {
        if (it.temp) {
            g.reefer.push(it);
            return;
        }
        if (SPECS.some(
                (s) => !s.doorW || s.fam === "RF" ? !1 : orientations(it).some(([l, w, h]) => {
                    if (!(l <= s.L && w <= s.W && h <= s.H && passesDoor(s, w, h))) return !1;
                    const maxRest = Math.min(s.L, l + 2 * BEDDING_MAX_EXTEND) / 1e3,
                        permT = restingLimit(s, maxRest);
                    return it.kg / 1e3 <= permT + 0.05;
                })
            )) {
            g.general.push(it);
            return;
        }
        Math.min(it.L, it.W) > 2352 ? g.oversize_w.push(it) : it.H > 2348 ? g.oversize_h.push(it) : g.oversize_w.push(it);
    }), g;
}

function candidatesFor(group, items) {
    let specs;
    return group === "reefer" ? specs = SPECS.filter((s) => s.fam === "RF") : group === "oversize_w" ? specs = SPECS.filter((s) => s.fam === "FR") : group === "oversize_h" ? specs = SPECS.filter((s) => s.fam === "OT" || s.fam === "FR") : specs = SPECS.filter((s) => s.fam === "GP" || s.fam === "HC"), specs.filter(
        (s) => items.every(
            (i) => i.kg <= s.payload && orientations(i).some(
                ([l, w, h]) => l <= s.L && w <= (s.overW ? MAX_OOG_WIDTH : s.W) && h <= (s.overH ? MAX_OOG_HEIGHT : s.H) && passesDoor(s, w, h)
            )
        )
    );
}

function whyUnfit(spec, it) {
    if (it.temp && spec.fam !== "RF")
        return `${it.name} needs a reefer; ${spec.code} is not temperature-controlled`;
    if (!it.temp && spec.fam === "RF")
        return `${it.name} is ambient cargo; a reefer (${spec.code}) would be wasted`;
    if (it.kg > spec.payload)
        return `${it.name} is ${it.kg.toLocaleString()} kg, over ${spec.code} payload ${spec.payload.toLocaleString()} kg`;
    const maxW = spec.overW ? MAX_OOG_WIDTH : spec.W,
        maxH = spec.overH ? MAX_OOG_HEIGHT : spec.H;
    if (orientations(it).some(
            ([l2, w2, h2]) => l2 <= spec.L && w2 <= maxW && h2 <= maxH && passesDoor(spec, w2, h2)
        ))
        return null;
    const [l, w, h] = orientations(it).sort((a, b) => a[0] - b[0])[0];
    return Math.min(it.L, it.W) > spec.L ? `${it.name} shortest side ${Math.min(it.L, it.W)} mm exceeds ${spec.code} length ${spec.L} mm` : Math.min(it.W, it.L) > maxW ? `${it.name} is ${Math.min(it.W, it.L)} mm wide, over ${spec.code} limit ${maxW} mm` + (spec.overW ? "" : ` (${spec.code} has no over-width capability \u2014 needs Flat Rack)`) : it.H > maxH ? `${it.name} is ${it.H} mm tall, over ${spec.code} limit ${maxH} mm` : spec.doorW && !passesDoor(spec, Math.min(it.W, it.L), it.H) ? `${it.name} cannot pass the ${spec.code} door aperture (${spec.doorW}\xD7${spec.doorH} mm) \u2014 needs open-top/flat-rack crane loading` : `${it.name} does not fit ${spec.code}`;
}

function validateOverride(code, items) {
    const spec = SPECS.find((s) => s.code === code);
    if (!spec) return {
        ok: !1,
        reasons: [`Unknown container ${code}`],
        specs: []
    };
    const reasons = [];
    for (const it of items) {
        const why = whyUnfit(spec, it);
        why && reasons.push(why);
    }
    return {
        ok: reasons.length === 0,
        reasons,
        spec
    };
}
const fleetCost = (fleet) => fleet.reduce((a, b) => a + boxCost(b.spec), 0),
    boxUnits = (b) => b.placed.map((p) => ({
        it: p.item,
        n: p.n
    }));

function improveFleet(fleet, specs) {
    const byCost = [...specs].sort((a, b) => boxCost(a) - boxCost(b));
    for (let iter = 0; iter < 8; iter++) {
        let changed = !1;
        for (let i = 0; i < fleet.length; i++)
            for (const spec of byCost) {
                if (boxCost(spec) >= boxCost(fleet[i].spec) - 1e-9) break;
                const {
                    boxes
                } = packAll(boxUnits(fleet[i]), spec, 0);
                if (boxes && boxes.length === 1) {
                    fleet[i] = boxes[0], changed = !0;
                    break;
                }
            }
        outer: for (let i = 0; i < fleet.length - 1; i++)
            for (let j = i + 1; j < fleet.length; j++) {
                const pairCost = boxCost(fleet[i].spec) + boxCost(fleet[j].spec),
                    merged = [...boxUnits(fleet[i]), ...boxUnits(fleet[j])];
                for (const spec of byCost) {
                    if (boxCost(spec) >= pairCost - 1e-9) break;
                    const {
                        boxes
                    } = packAll(merged, spec, 0);
                    if (boxes && boxes.length === 1) {
                        fleet[i] = boxes[0], fleet.splice(j, 1), changed = !0;
                        break outer;
                    }
                }
            }
        if (!changed) break;
    }
    return fleet;
}
const GROUP_LABEL = {
    reefer: "Reefer (temperature-controlled)",
    oversize_w: "Over-width OOG (Flat Rack)",
    oversize_h: "Over-height OOG (Open Top / Flat Rack)",
    general: "General in-gauge"
};

function assignPieceNumbers(items, fleet) {
    const base = {};
    let run = 0;
    return items.forEach((it) => {
        base[it.id] = run, run += Math.max(1, it.qty || 1);
    }), fleet.forEach(
        (eng) => eng.placed.forEach((p) => {
            p.pieceNo = (base[p.item.id] || 0) + (p.n || 1);
        })
    ), fleet;
}

function pieceLegend(items) {
    const out = [];
    let run = 0;
    return items.forEach((it) => {
        const q = Math.max(1, it.qty || 1);
        out.push({
            from: run + 1,
            to: run + q,
            name: it.name,
            pkg: it.pkg || "",
            qty: q
        }), run += q;
    }), out;
}

function optimise(items, overrides = {}, patterns = {}, axle = null) {
    const groups = classify(items),
        fleet = [],
        errors = [],
        notices = [];
    let idx = 1;
    for (const [gname, gitems] of Object.entries(groups)) {
        if (!gitems.length) continue;
        let specs = candidatesFor(gname, gitems);
        const forcedEarly = overrides[gname];
        if (forcedEarly) {
            const v = validateOverride(forcedEarly, gitems);
            v.ok || notices.push({
                type: "declined",
                group: gname,
                code: forcedEarly,
                reasons: v.reasons
            });
        }
        if (!specs.length) {
            errors.push(
                `No container type can carry the ${GROUP_LABEL[gname]} cargo group. Limits: max length 11.83 m (40FR), max OOG width ${(MAX_OOG_WIDTH / 1e3).toFixed(2)} m, max OOG height ${(MAX_OOG_HEIGHT / 1e3).toFixed(2)} m, max weight 39,300 kg/unit (40FR). Larger pieces need breakbulk / special equipment.`
            );
            continue;
        }
        const forced = overrides[gname];
        let forceSpecs = null;
        const alreadyDeclined = notices.some(
            (n) => n.type === "declined" && n.group === gname && n.code === forced
        );
        if (forced && !alreadyDeclined) {
            const v = validateOverride(forced, gitems);
            if (!v.ok) notices.push({
                type: "declined",
                group: gname,
                code: forced,
                reasons: v.reasons
            });
            else {
                const {
                    boxes
                } = packAll(expandUnits(gitems), v.spec, 0);
                boxes ? (forceSpecs = [v.spec], notices.push({
                    type: "accepted",
                    group: gname,
                    code: forced,
                    reasons: [`Using ${boxes.length} \xD7 ${forced} as requested.`]
                })) : notices.push({
                    type: "declined",
                    group: gname,
                    code: forced,
                    reasons: [
                        `Cargo fits ${forced} individually but could not be arranged inside it (geometry/segregation).`
                    ]
                });
            }
        }
        const searchSpecs = forceSpecs || specs,
            units = expandUnits(gitems),
            mode = patterns[gname];
        if (mode && mode !== "auto") {
            const spec = [...searchSpecs].sort((a, b) => boxCost(a) - boxCost(b))[0];
            let best2 = null,
                remaining2 = [...units];
            const madeBoxes = [];
            let guard = 0;
            for (; remaining2.length && guard++ < 40;) {
                const eng = new Engine(spec, 0);
                let n = 0;
                if (mode === "honeycomb" ? n = honeycombPack(eng, remaining2) : mode === "pinwheel" ? n = pinwheelPack(eng, remaining2) : mode === "offset" && (n = offsetConstrainedPack(eng, remaining2, axle)), !n || !eng.placed.length)
                    break;
                const placedKeys = new Set(eng.placed.map((p) => `${p.item.id}#${p.n}`));
                remaining2 = remaining2.filter((r) => !placedKeys.has(`${r.it.id}#${r.n}`)), madeBoxes.push(eng);
            }
            if (madeBoxes.length && !remaining2.length) {
                best2 = madeBoxes, best2.forEach((b) => {
                    b.index = idx++, b.group = gname;
                }), fleet.push(...best2), notices.push({
                    type: "accepted",
                    group: gname,
                    code: `${mode} pattern`,
                    reasons: [`Applied ${mode} floor pattern in ${madeBoxes.length} \xD7 ${spec.code}.`]
                });
                continue;
            } else
                notices.push({
                    type: "declined",
                    group: gname,
                    code: `${mode} pattern`,
                    reasons: [
                        `${mode} pattern could not place all units (geometry) \u2014 used the standard packer instead.`
                    ]
                });
        }
        let best = null,
            bestCost = 1 / 0;
        for (const spec of searchSpecs) {
            const {
                boxes
            } = packAll(units, spec, 0);
            if (!boxes) continue;
            improveFleet(boxes, forceSpecs || specs);
            const cost = fleetCost(boxes);
            (cost < bestCost - 1e-9 || Math.abs(cost - bestCost) <= 1e-9 && best && boxes.length < best.length) && (best = boxes, bestCost = cost);
        }
        if (!best) {
            errors.push(`Cargo group "${GROUP_LABEL[gname]}" could not be packed into any candidate container.`);
            continue;
        }
        best.forEach((b) => {
            b.index = idx++;
        }), best.forEach((b) => {
            b.group = gname;
        }), fleet.push(...best);
    }
    return fleet.forEach((b) => {
        (!b.pattern || b.pattern === "offset") && rebalance(b), enforceStackOrder(b);
    }), assignPieceNumbers(items, fleet), {
        fleet,
        errors,
        notices,
        groups,
        legend: pieceLegend(items)
    };
}

function cgSuggestion(eng) {
    const r = cgReport(eng),
        s = eng.spec,
        tolL = 10,
        tolW = r.open ? 7 : 5;
    if (Math.abs(r.offL) <= tolL && Math.abs(r.offW) <= tolW) return {
        need: !1,
        report: r
    };
    const third = s.L / 3,
        heavyEnd = r.offL > 0 ? "door" : "nose",
        inHeavyEnd = eng.placed.filter(
            (p) => r.offL > 0 ? p.x + p.l / 2 > s.L - third : p.x + p.l / 2 < third
        ),
        inLightEnd = eng.placed.filter(
            (p) => r.offL > 0 ? p.x + p.l / 2 < third : p.x + p.l / 2 > s.L - third
        );
    if (!inHeavyEnd.length || !inLightEnd.length)
        return {
            need: !0,
            report: r,
            text: `Payload is ${Math.abs(r.offL).toFixed(1)}% ${heavyEnd}-heavy and there is no cargo at the opposite end to trade with. Move weight to another container or add ballast cargo at the ${heavyEnd === "door" ? "nose" : "door"} end.`
        };
    const heaviest = inHeavyEnd.reduce((a, b) => b.item.kg > a.item.kg ? b : a),
        lightest = inLightEnd.reduce((a, b) => b.item.kg < a.item.kg ? b : a),
        delta = heaviest.item.kg - lightest.item.kg;
    return {
        need: !0,
        report: r,
        swap: {
            heavy: heaviest,
            light: lightest,
            delta
        },
        text: delta <= 0 ? `Payload is ${Math.abs(r.offL).toFixed(1)}% ${heavyEnd}-heavy. The ${heavyEnd} end already holds the lighter units, so re-sequencing will not fix it - redistribute between containers.` : `Payload is ${Math.abs(r.offL).toFixed(1)}% ${heavyEnd}-heavy (tolerance ${tolL}%). Swap ${heaviest.item.name} #${heaviest.n} (${Math.round(heaviest.item.kg)} kg, at the ${heavyEnd} end) with ${lightest.item.name} #${lightest.n} (${Math.round(lightest.item.kg)} kg, at the ${heavyEnd === "door" ? "nose" : "door"} end) - a ${Math.round(delta)} kg transfer toward the centre. Check the drop-stop order still works before applying.`
    };
}

function cgReport(eng) {
    const W = eng.weight,
        s = eng.spec;
    let mx = 0,
        my = 0,
        mz = 0;
    eng.placed.forEach((p) => {
        mx += p.item.kg * (p.x + p.l / 2), my += p.item.kg * (p.y + p.w / 2), mz += p.item.kg * (p.z + p.h / 2);
    });
    const cg = [mx / W, my / W, mz / W],
        offL = (cg[0] - s.L / 2) / s.L * 100,
        offW = (cg[1] - s.W / 2) / s.W * 100,
        hPct = cg[2] / s.H * 100,
        warns = [];
    return s.fam === "FR" || s.fam === "OT" ? (Math.abs(offL) > 10 && warns.push(
        `Longitudinal CG ${Math.abs(offL).toFixed(1)}% off platform centre (${offL > 0 ? "rear" : "front"}-heavy) \u2014 re-position so both main beams share the load and it lifts level.`
    ), Math.abs(offW) > 7 && warns.push(
        `Lateral CG ${Math.abs(offW).toFixed(1)}% off centreline (${offW > 0 ? "right" : "left"}-heavy) \u2014 one main beam/side is overloaded; centre the unit across the platform width.`
    ), hPct > 60 && warns.push(
        `CG height at ${hPct.toFixed(0)}% of unit height \u2014 tall load: use extra lashing angles against tipping and check crane/road stability.`
    ), {
        cg,
        offL,
        offW,
        hPct,
        warns,
        ok: !warns.length,
        open: !0
    }) : (Math.abs(offL) > 10 && warns.push(
        `Longitudinal CG ${Math.abs(offL).toFixed(1)}% off centre (${offL > 0 ? "door" : "nose"}-heavy) even after auto-centering \u2014 redistribute heavy units between containers.`
    ), Math.abs(offW) > 5 && warns.push(
        `Lateral CG ${Math.abs(offW).toFixed(1)}% off centreline (${offW > 0 ? "right" : "left"}-heavy) \u2014 roll/tilt risk.`
    ), hPct > 50 && warns.push(`CG height at ${hPct.toFixed(0)}% of inner height \u2014 place heavier cargo lower.`), {
        cg,
        offL,
        offW,
        hPct,
        warns,
        ok: !warns.length,
        open: !1
    });
}
const RING_SWL = {
        closed: 1e3,
        open: 5e3
    },
    ACC_LAT = 0.5,
    ACC_LON = 0.8,
    ACC_VERT = 1,
    FRICTION_BASE = 0.3,
    FRICTION_MAT = 0.6,
    LASHING_MATERIALS = {
        web: {
            name: "Web/polyester strap",
            lc: 2500,
            unit: "strap",
            note: "50 mm polyester ratchet strap, LC 2500 daN. Edge protectors on sharp corners."
        },
        web5: {
            name: "Heavy web strap",
            lc: 5e3,
            unit: "strap",
            note: "75 mm polyester ratchet strap, LC 5000 daN. Edge protectors required."
        },
        chain: {
            name: "Chain lashing",
            lc: 5e3,
            unit: "chain",
            note: "8 mm G80 chain + tensioner, LC 5000 daN. For heavy/steel cargo."
        },
        chain10: {
            name: "Heavy chain",
            lc: 1e4,
            unit: "chain",
            note: "13 mm G80 chain + load binder, LC 10000 daN. Project/OOG cargo."
        }
    };

function pickMaterial(kg, open, methodPref) {
    return methodPref === "web" ? kg >= 3500 ? LASHING_MATERIALS.web5 : LASHING_MATERIALS.web : methodPref === "chain" || open || kg >= 4e3 ? kg >= 12e3 ? LASHING_MATERIALS.chain10 : LASHING_MATERIALS.chain : kg >= 3500 ? LASHING_MATERIALS.web5 : LASHING_MATERIALS.web;
}

function lashingFor(p, open) {
    const W = p.item.kg,
        frictionSecuresLat = FRICTION >= ACC_LAT && !open && W < HEAVY_LASH_KG && p.h < 1600,
        ringSWL = open ? RING_SWL.open : RING_SWL.closed,
        latNet = Math.max(0, W * ACC_LAT - FRICTION * W * ACC_VERT),
        lonNet = Math.max(0, W * ACC_LON - FRICTION * W * ACC_VERT),
        acrossPerSide = frictionSecuresLat ? LASH_BOOST : Math.max(Math.ceil(W / ringSWL), Math.ceil(latNet / ringSWL), 1) + LASH_BOOST,
        across = acrossPerSide * 2,
        lengthwise = (Math.max(Math.ceil(lonNet / ringSWL), 1) + LASH_BOOST) * 2,
        down = open || p.h >= 1600 || W >= 3e3 ? 2 : 0,
        total = across + lengthwise + down,
        type = W >= 4e3 ? "chain" : "web";
    return {
        across,
        lengthwise,
        down,
        total,
        type,
        ringSWL,
        acrossPerSide,
        frictionSecuresLat
    };
}

function stackLoadCheck(eng) {
    const rows = [];
    eng.placed.forEach((p) => {
        const cap = stackCapOf(p.item);
        if (!isFinite(cap)) return;
        const borne = p.borne || 0,
            dyn = borne * VERT_DYN;
        rows.push({
            p,
            cap,
            borne,
            dyn,
            pct: cap > 0 ? dyn / cap * 100 : 0
        });
    }), rows.sort((a, b) => b.pct - a.pct);
    const over = rows.filter((r) => r.dyn > r.cap + EPS),
        near = rows.filter((r) => r.dyn <= r.cap + EPS && r.pct >= 90),
        warns = [];
    return over.forEach(
        (r) => warns.push(
            `Crush hazard - ${r.p.item.name} #${r.p.n}: carrying ${Math.round(r.borne)} kg static, ${Math.round(r.dyn)} kg with the ${VERT_DYN}x heave/pitch factor, against a declared top-load limit of ${Math.round(r.cap)} kg.`
        )
    ), near.forEach(
        (r) => warns.push(
            `${r.p.item.name} #${r.p.n}: carrying ${Math.round(r.dyn)} kg dynamic (${Math.round(r.borne)} kg static x ${VERT_DYN}), ${r.pct.toFixed(0)}% of its ${Math.round(r.cap)} kg top-load limit \u2014 little margin.`
        )
    ), {
        rows,
        warns,
        declared: rows.length,
        ok: !over.length
    };
}

function pointLoadCheck(p, spec) {
    const area = contactAreaCm2(p),
        declared = +(p.item && p.item.contactCm2) > 0,
        pressure = p.item.kg / area,
        limit = CSC_POINT_LOAD,
        needCm2 = p.item.kg / limit;
    return {
        p,
        area,
        declared,
        pressure,
        limit,
        ok: pressure <= limit + 1e-9,
        needCm2,
        shortfallCm2: Math.max(0, needCm2 - area),
        floor: spec && spec.floor || "wooden"
    };
}

function deckBearingCheck(p, spec) {
    const open = spec.fam === "FR" || spec.fam === "OT",
        kg = p.item.kg,
        concentrated = +(p.item && p.item.contactCm2) > 0,
        spansRails = p.y <= RAIL_ZONE + EPS && p.y + p.w >= spec.W - RAIL_ZONE - EPS;
    if (!(open || kg >= DECK_CONC_KG || concentrated)) return {
        relevant: !1,
        ok: !0
    };
    let needLenM = null;
    const tonnes = kg / 1e3;
    for (let L = 0.1; L <= 12.1; L += 0.1)
        if (restingLimit(spec, L) + 0.05 >= tonnes) {
            needLenM = Math.round(L * 10) / 10;
            break;
        }
    const haveLenM = p.l / 1e3,
        lenOk = needLenM == null ? !1 : haveLenM + 1e-9 >= needLenM,
        ok = spansRails && lenOk,
        beams = Math.max(2, Math.ceil((needLenM || haveLenM) / 0.6));
    return {
        relevant: !0,
        open,
        spansRails,
        haveLenM,
        needLenM,
        lenOk,
        ok,
        beams,
        kg
    };
}

function floorLoadReport(eng) {
    const rows = eng.placed.filter((p) => p.z <= EPS).map((p) => pointLoadCheck(p, eng.spec)),
        fails = rows.filter((r) => !r.ok),
        warns = [];
    return fails.forEach((r) => {
        const spreadM2 = r.needCm2 / 1e4,
            beamM = Math.sqrt(spreadM2);
        warns.push(
            `${r.p.item.name} #${r.p.n}: bearing pressure ${r.pressure.toFixed(1)} kg/cm2 on ${r.area.toFixed(0)} cm2 exceeds the CSC concentrated floor load of ${r.limit.toFixed(1)} kg/cm2. Spread the load over at least ${Math.round(r.needCm2)} cm2 (about ${beamM.toFixed(2)} x ${beamM.toFixed(2)} m of timber bearers) before loading.`
        );
    }), eng.placed.filter((p) => p.z <= EPS).forEach((p) => {
        const d = deckBearingCheck(p, eng.spec);
        if (!d.relevant || d.ok) return;
        const why = [];
        d.spansRails || why.push(
            "its bearing does not reach both side rails, so the weight sits on the deck boards instead of the outer main girders"
        ), d.lenOk || why.push(
            d.needLenM == null ? `${Math.round(d.kg)} kg exceeds the permissible load for any resting length on a ${eng.spec.floor || "wooden"} floor - it must bear on the main girders via steel or heavy timber beams` : `its resting length is ${d.haveLenM.toFixed(1)} m but ${d.needLenM.toFixed(1)} m is required for ${Math.round(d.kg)} kg on a ${eng.spec.floor || "wooden"} floor`
        ), warns.push(
            `${p.item.name} #${p.n}: ${why.join("; ")}. Bed it on about ${d.beams} cross-timbers (100x100 mm) laid across the full container width so the load transfers to the side rails.`
        );
    }), rows.filter((r) => r.ok && !r.declared && r.p.item.kg >= 3e3).forEach(
        (r) => warns.push(
            `${r.p.item.name} #${r.p.n}: no contact area declared \u2014 checked against its full ${r.area.toFixed(0)} cm2 footprint. If it stands on feet, skids or a narrow base, enter the real contact area.`
        )
    ), {
        rows,
        warns,
        ok: !fails.length
    };
}

function securingBalance(eng, methodPref = "auto") {
    const geo = securingGeometry(eng),
        open = geo.open,
        rows = [];
    return geo.items.forEach((it) => {
        const p = it.p,
            m = p.item.kg;
        if (it.method === "positive-fit") {
            rows.push({
                p,
                blocked: !0,
                slide: null,
                lon: null,
                tip: p.w / (ACC_LAT * p.h),
                method: it.method
            });
            return;
        }
        const mat = pickMaterial(m, open, methodPref),
            perLash = Math.min(mat.lc / CS_FACTOR, open ? RING_SWL.open : RING_SWL.closed),
            nAcross = it.lashings.filter((l) => l.dir === "across").length,
            nLen = it.lashings.filter((l) => l.dir === "length").length,
            ct = contactFaces(eng, p),
            braceAt = (edge) => geo.bracing.some((b) => Math.abs(b.x + b.l - edge) <= 250 || Math.abs(b.x - edge) <= 250),
            latBlocked = !open && ct.left && ct.right,
            lonBlocked = !open && (ct.nose || braceAt(p.x)) && (ct.door || braceAt(p.x + p.l)),
            fric = FRICTION * m * ACC_VERT,
            slide = latBlocked ? null : (fric + nAcross * perLash * LASH_EFF) / (ACC_LAT * m),
            lon = lonBlocked ? null : (fric + nLen * perLash * LASH_EFF) / (ACC_LON * m),
            tip = p.w / (ACC_LAT * p.h);
        rows.push({
            p,
            blocked: !1,
            latBlocked,
            lonBlocked,
            material: mat.name,
            perLash,
            nAcross,
            nLen,
            slide,
            lon,
            tip,
            method: it.method
        });
    }), {
        rows,
        warns: rows.filter(
            (r) => !r.blocked && (r.slide != null && r.slide < 1 || r.lon != null && r.lon < 1 || r.tip < 1.25)
        ).map((r) => {
            const bad = [];
            return r.slide != null && r.slide < 1 && bad.push(`lateral sliding SF ${r.slide.toFixed(2)}`), r.lon != null && r.lon < 1 && bad.push(`longitudinal sliding SF ${r.lon.toFixed(2)}`), r.tip < 1.25 && bad.push(`tipping SF ${r.tip.toFixed(2)} (narrow/tall \u2014 needs anti-tip lashing high on the unit)`), `${r.p.item.name} #${r.p.n}: ${bad.join("; ")}. Add lashings or increase lashing capacity.`;
        }),
        ok: !rows.some(
            (r) => !r.blocked && (r.slide != null && r.slide < 1 || r.lon != null && r.lon < 1)
        )
    };
}

function appendIntegrityNotes(eng, notes, methodPref) {
    ANTI_SLIP && notes.push(
        `Anti-slip mats applied under every unit - securing calculated at friction ${FRICTION_MAT} instead of ${FRICTION_BASE}. The mats are load-bearing securing equipment here: if the crew omits them the balance below is invalid.`
    );
    const bal = securingBalance(eng, methodPref),
        fl = floorLoadReport(eng),
        st = stackLoadCheck(eng),
        im = imdgReport(eng);
    im.notes.forEach((w) => notes.push((im.hardStop ? "IMDG STOP - " : "IMDG - ") + w)), im.classes.length > 1 && im.ok && notes.push(
        `IMDG classes ${im.classes.join(", ")} co-loaded and checked against the segregation table - no conflict.`
    ), st.warns.forEach((w) => notes.push("STACK LOAD - " + w)), fl.warns.forEach((w) => notes.push("FLOOR LOAD - " + w)), bal.warns.forEach((w) => notes.push("SECURING BALANCE - " + w)), lifoValidate(eng).errs.forEach((w) => notes.push("LIFO - " + w)), mslCompliance(eng, methodPref).notes.forEach((w) => notes.push("MSL - " + w)), wallStressCheck(eng).notes.forEach((w) => notes.push("WALL LOAD - " + w)), reeferAirflow(eng).notes.forEach((w) => notes.push("REEFER AIRFLOW - " + w)), forkliftCheck(eng, FORK_ID).notes.forEach((w) => notes.push("FORKLIFT - " + w));
    const lashed = bal.rows.filter((r) => !r.blocked);
    return lashed.length && notes.push(
        `Securing balance (CTU 2014, lat ${ACC_LAT}g / lon ${ACC_LON}g, friction ${FRICTION}, CS = LC/${CS_FACTOR}): ` + lashed.map(
            (r) => `${r.p.item.name} #${r.p.n} slide ${r.slide == null ? "blocked" : r.slide.toFixed(2)} / ${r.lon == null ? "blocked" : r.lon.toFixed(2)}, tip ${r.tip.toFixed(2)}`
        ).join("; ") + ". Safety factors above 1.0 pass. Tipping is a geometry check only - it assumes no lashing restraint, so a low figure means add a high anti-tip lashing rather than that the plan is unworkable."
    ), notes;
}

function lifoValidate(eng) {
    const errs = [];
    for (const a of eng.placed)
        for (const b of eng.placed)
            a !== b && a.item.drop < b.item.drop && a.x + a.l / 2 < b.x + b.l / 2 - EPS && errs.push(
                `LIFO Sequencing Error: ${a.item.name} #${a.n} (drop ${a.item.drop}) is stowed further from the door than ${b.item.name} #${b.n} (drop ${b.item.drop}). Drop ${a.item.drop} would be blocked by drop ${b.item.drop} cargo at the first delivery.`
            );
    return {
        errs: [...new Set(errs)],
        ok: !errs.length
    };
}

function mslCompliance(eng, methodPref) {
    const geo = securingGeometry(eng),
        open = geo.open,
        rows = [];
    return geo.items.forEach((it) => {
        if (it.method === "positive-fit") return;
        const ct = contactFaces(eng, it.p);
        if (!open && ct.left && ct.right || !open && FRICTION >= ACC_LAT && it.p.item.kg < HEAVY_LASH_KG && it.p.h < 1600) return;
        const kg = it.p.item.kg,
            mat = pickMaterial(kg, open, methodPref),
            ringSWL = open ? RING_SWL.open : RING_SWL.closed,
            perSide = it.lashings.filter((l) => l.dir === "across").length / 2,
            mslPerSide = perSide * Math.min(mat.lc, ringSWL),
            ok = mslPerSide + EPS >= kg;
        rows.push({
            p: it.p,
            kg,
            mslPerSide,
            perSide,
            material: mat.name,
            ok
        });
    }), {
        rows,
        fails: rows.filter((r) => !r.ok),
        ok: rows.every((r) => r.ok),
        notes: rows.filter((r) => !r.ok).map(
            (r) => `${r.p.item.name} #${r.p.n}: total MSL per side is ${Math.round(r.mslPerSide)} daN against a unit weight of ${Math.round(r.kg)} kg - below the IMO rule that MSL per side must at least equal the unit weight. Add lashings on each side or move to higher-capacity gear.`
        )
    };
}

function wallStressCheck(eng) {
    const s = eng.spec,
        open = s.fam === "FR" || s.fam === "OT",
        rows = [];
    return open || eng.placed.forEach((p) => {
        const touchLeft = p.y <= CONTACT_TOL,
            touchRight = p.y + p.w >= s.W - CONTACT_TOL;
        if (!touchLeft && !touchRight) return;
        const force = p.item.kg * ACC_LAT * 9.81,
            faceCm2 = p.l * p.h / 100,
            kPa = force / (faceCm2 / 1e4) / 1e3,
            heavy = p.item.kg >= HEAVY_LASH_KG,
            ok = kPa <= WALL_SAFE_KPA && !heavy;
        rows.push({
            p,
            side: touchLeft ? "left" : "right",
            force,
            faceCm2,
            kPa,
            ok,
            heavy
        });
    }), {
        rows,
        fails: rows.filter((r) => !r.ok),
        ok: rows.every((r) => r.ok),
        notes: rows.filter((r) => !r.ok).map(
            (r) => r.kPa > WALL_SAFE_KPA ? `${r.p.item.name} #${r.p.n} presses the ${r.side} corrugated wall at about ${Math.round(r.kPa)} kPa during a ${ACC_LAT}g roll, over the ${WALL_SAFE_KPA} kPa a side panel should carry. Fit vertical timber shoring against the corner posts to spread the contact, or turn the unit so a flat face meets the wall.` : `${r.p.item.name} #${r.p.n} (${(r.p.item.kg / 1e3).toFixed(1)} t) bears on the ${r.side} wall. The walls take distributed surface loads only - fit vertical timber shoring between the unit and the corner posts so a heavy unit never loads the corrugation directly. Note the app cannot see protrusions, brackets or sharp edges: if this unit has any, treat the contact as a point load and shore it regardless.`
        )
    };
}

function reeferAirflow(eng) {
    const s = eng.spec;
    if (s.fam !== "RF") return {
        relevant: !1,
        ok: !0,
        notes: []
    };
    const notes = [],
        topZ = Math.max(0, ...eng.placed.map((p) => p.z + p.h)),
        topGap = s.H - topZ,
        noseGap = Math.min(...eng.placed.map((p) => p.x));
    return topGap < REEFER_TOP_CLEAR && notes.push(
        `Return-air channel is only ${Math.round(topGap)} mm at the ceiling - at least ${REEFER_TOP_CLEAR} mm is needed above the cargo for air to return to the unit. Cargo is stowed above the red load line and will choke the evaporator.`
    ), noseGap < REEFER_NOSE_CLEAR && notes.push(
        `Cargo sits ${Math.round(noseGap)} mm from the front bulkhead - keep at least ${REEFER_NOSE_CLEAR} mm clear of the evaporator so delivery air is not short-circuited.`
    ), notes.push(
        "Reefer stow: load on the T-floor so delivery air can pass under the pallets, and do not block the floor channels with loose dunnage or shrink wrap."
    ), {
        relevant: !0,
        topGap,
        noseGap,
        notes,
        ok: topGap >= REEFER_TOP_CLEAR && noseGap >= REEFER_NOSE_CLEAR
    };
}

function chartCapacityAt(crane, radiusM) {
    const c = crane.chart;
    if (radiusM <= c[0][0]) return c[0][1];
    if (radiusM === c[c.length - 1][0]) return c[c.length - 1][1];
    if (radiusM > c[c.length - 1][0]) return 0;
    for (let i = 1; i < c.length; i++)
        if (radiusM <= c[i][0]) {
            const [r0, q0] = c[i - 1], [r1, q1] = c[i];
            return q0 + (q1 - q0) * (radiusM - r0) / (r1 - r0);
        }
    return 0;
}

function boomSet(c) {
    const maxB = c.boom || 40,
        out = [];
    for (let i = 0; i < 5; i++) out.push(Math.round(maxB * (0.4 + i * 0.6 / 4)));
    return [...new Set(out)];
}

function boomReach(L) {
    return {
        min: Math.max(3, Math.round(L * 0.12)),
        max: L * 0.88
    };
}

function matrixCapacity(c, radiusM, boomM) {
    const rng = boomReach(boomM);
    if (radiusM < rng.min - 1e-9 || radiusM > rng.max + 1e-9) return null;
    const base = chartCapacityAt(c, radiusM);
    if (!(base > 0)) return null;
    const usable = boomSet(c).filter((L) => radiusM <= boomReach(L).max + 1e-9);
    if (!usable.length) return null;
    const shortest = Math.min(...usable),
        factor = Math.min(1, Math.pow(shortest / boomM, 0.55));
    return base * factor;
}

function loadMatrix(c, activeRadius, grossKg, derateFactor = 1) {
    const vm = c && c.verifiedModel;
    if (vm && vm.chart.kind === "curve") {
        const cur = vm.chart.curve,
            rows2 = cur.map(([r, t]) => {
                const cap = t * 1e3 * derateFactor;
                return {
                    r,
                    cells: [{
                        L: "best",
                        cap,
                        ok: grossKg <= cap * CRANE_UTIL_LIMIT
                    }]
                };
            });
        let bestRow2 = cur[0][0],
            bd = 1 / 0;
        cur.forEach(([r]) => {
            const d = Math.abs(r - activeRadius);
            d < bd && (bd = d, bestRow2 = r);
        });
        const ac = (cur.find(([r]) => r === bestRow2) || [0, 0])[1] * 1e3 * derateFactor;
        return {
            crane: c,
            verified: !0,
            partial: !0,
            booms: ["best boom"],
            rows: rows2,
            activeRadius,
            activeRow: bestRow2,
            activeBoom: "best",
            activeCap: ac,
            derateFactor,
            net: ac * CRANE_UTIL_LIMIT - RIGGING_ALLOWANCE_KG,
            grossKg
        };
    }
    if (vm) {
        const g = modelGrid(vm),
            booms2 = vm.chart.booms,
            radii2 = vm.chart.rows.map((r) => r[0]),
            rows2 = radii2.map((r) => ({
                r,
                cells: booms2.map((L) => {
                    const raw = g[L] && g[L][r] != null ? g[L][r] * 1e3 : null,
                        cap = raw == null ? null : raw * derateFactor;
                    return {
                        L,
                        cap,
                        ok: cap != null && grossKg <= cap * CRANE_UTIL_LIMIT
                    };
                })
            }));
        let bestRow2 = radii2[0],
            bd = 1 / 0;
        radii2.forEach((r) => {
            const d = Math.abs(r - activeRadius);
            d < bd && (bd = d, bestRow2 = r);
        });
        const reach = booms2.filter((L) => g[L] && g[L][bestRow2] != null);
        let ab = null,
            ac = null;
        return reach.forEach((L) => {
            const v = g[L][bestRow2] * 1e3 * derateFactor;
            (ac == null || v > ac) && (ac = v, ab = L);
        }), {
            crane: c,
            verified: !0,
            booms: booms2,
            rows: rows2,
            activeRadius,
            activeRow: bestRow2,
            activeBoom: ab,
            activeCap: ac,
            derateFactor,
            net: ac == null ? null : ac * CRANE_UTIL_LIMIT - RIGGING_ALLOWANCE_KG,
            grossKg
        };
    }
    const booms = boomSet(c),
        radii = c.chart.map((r) => r[0]),
        rows = radii.map((r) => ({
            r,
            cells: booms.map((L) => {
                const raw = matrixCapacity(c, r, L),
                    cap = raw == null ? null : raw * derateFactor;
                return {
                    L,
                    cap,
                    ok: cap != null && grossKg <= cap * CRANE_UTIL_LIMIT
                };
            })
        }));
    let bestRow = null,
        bestD = 1 / 0;
    radii.forEach((r) => {
        const d = Math.abs(r - activeRadius);
        d < bestD && (bestD = d, bestRow = r);
    });
    const reaching = booms.filter((L) => matrixCapacity(c, bestRow, L) != null),
        activeBoom = reaching.length ? Math.min(...reaching) : null,
        activeCap = activeBoom ? matrixCapacity(c, bestRow, activeBoom) * derateFactor : null;
    return {
        crane: c,
        booms,
        rows,
        activeRadius,
        activeRow: bestRow,
        activeBoom,
        activeCap,
        derateFactor,
        net: activeCap == null ? null : activeCap * CRANE_UTIL_LIMIT - RIGGING_ALLOWANCE_KG,
        grossKg
    };
}

function craneCapacity(eng, craneId, standoffM = 4, model = null, deckMm = null) {
    const deck = deckMm == null ? deckHeightFor(eng.spec) : deckMm;
    if (model && model.verified && model.chart) {
        const s0 = eng.spec;
        if (!(s0.fam === "OT" || s0.fam === "FR"))
            return {
                relevant: !1,
                rows: [],
                notes: [],
                ok: !0
            };
        const outHalf = (model.outrigger || 0) / 2,
            rows = [],
            notes = [];
        return notes.push(
            `Deck height: this ${eng.spec.code} sits ${deck} mm above ground, so every lift height below is measured from the ground, not from the deck. Hook height = deck + cargo height + sling height, and the crane must clear that at the working radius.`
        ), notes.push(
            `${model.name} - verified manufacturer chart (${model.chart.config}, ${model.chart.standard}). ${model.chart.note}`
        ), eng.placed.forEach((p) => {
            const radius = outHalf + standoffM + Math.max(0, (p.y + p.w / 2) / 1e3),
                best = modelBestCapAt(model, radius),
                gross = p.item.kg + RIGGING_ALLOWANCE_KG,
                chartCap = best.cap,
                safeCap = chartCap == null ? 0 : chartCap * CRANE_UTIL_LIMIT,
                ok = chartCap != null && gross <= safeCap;
            rows.push({
                p,
                radius,
                gross,
                chartCap: chartCap || 0,
                safeCap,
                util: chartCap ? gross / chartCap : 1 / 0,
                ok,
                bestBoom: best.boom,
                upgrade: null
            }), ok || notes.push(
                chartCap == null ? `HIGH-RISK LIFT - ${p.item.name} #${p.n}: a ${radius.toFixed(1)} m radius is outside the ${model.name} chart for this configuration.` : `HIGH-RISK LIFT - ${p.item.name} #${p.n}: ${(gross / 1e3).toFixed(1)} t gross at ${radius.toFixed(1)} m is ${(gross / chartCap * 100).toFixed(0)}% of the ${(chartCap / 1e3).toFixed(1)} t chart figure ${best.boom ? `(best boom ${best.boom} m)` : "(best boom)"}, over the ${Math.round(CRANE_UTIL_LIMIT * 100)}% working limit.`
            );
        }), {
            relevant: !0,
            crane: {
                name: model.name,
                outrigger: model.outrigger,
                cw: model.maxCw,
                boomState: "telescopic (T)",
                slew: "360 deg",
                chart: [],
                verifiedModel: model
            },
            requested: {
                name: model.name,
                id: model.id
            },
            switched: !1,
            noneClears: rows.some((r) => !r.ok),
            standoffM,
            rows,
            notes,
            ok: rows.every((r) => r.ok)
        };
    }
    return craneCapacityGeneric(eng, craneId, standoffM);
}

function craneCapacityGeneric(eng, craneId, standoffM = 4) {
    const s = eng.spec;
    if (!(s.fam === "OT" || s.fam === "FR")) return {
        relevant: !1,
        rows: [],
        notes: [],
        ok: !0
    };
    const ladder = [...CRANES].sort((a, b) => a.cap - b.cap),
        reqIdx = craneId === "auto" ? 0 : Math.max(0, ladder.findIndex((c) => c.id === craneId)),
        requested = ladder[reqIdx] || ladder[0],
        outHalfOf = (c) => (c.outrigger || 0) / 2,
        clears = (c) => eng.placed.every((p) => {
            const rad = outHalfOf(c) + standoffM + Math.max(0, (p.y + p.w / 2) / 1e3),
                cap = chartCapacityAt(c, rad);
            return cap > 0 && p.item.kg + RIGGING_ALLOWANCE_KG <= cap * CRANE_UTIL_LIMIT;
        }),
        picked = ladder.slice(reqIdx).find(clears),
        crane = picked || ladder[ladder.length - 1],
        switched = craneId !== "auto" && crane.id !== requested.id,
        noneClears = !picked,
        rows = [],
        notes = [];
    return switched ? notes.push(
        `EQUIPMENT SWITCHED - ${requested.name} cannot make every lift in this container at a ${standoffM.toFixed(1)} m standoff, so the plan has been re-issued on the ${crane.name}${noneClears ? ", which is the largest machine in the list and still does not clear every lift - see below" : " - the smallest machine in the list that clears all lifts inside the " + Math.round(CRANE_UTIL_LIMIT * 100) + "% working limit"}.`
    ) : craneId === "auto" && notes.push(
        `Equipment selected automatically: ${crane.name} is the smallest machine in the list that makes every lift in this container at a ${standoffM.toFixed(1)} m standoff, inside the ${Math.round(CRANE_UTIL_LIMIT * 100)}% working limit.`
    ), eng.placed.forEach((p) => {
        const acrossM = (p.y + p.w / 2) / 1e3,
            outHalf = (crane.outrigger || 0) / 2,
            radius = outHalf + standoffM + Math.max(0, acrossM),
            gross = p.item.kg + RIGGING_ALLOWANCE_KG,
            chartCap = chartCapacityAt(crane, radius),
            util = chartCap > 0 ? gross / chartCap : 1 / 0,
            safeCap = chartCap * CRANE_UTIL_LIMIT,
            ok = gross <= safeCap,
            upgrade = ok ? null : CRANES.find((c) => chartCapacityAt(c, radius) * CRANE_UTIL_LIMIT >= gross);
        rows.push({
            p,
            crane,
            radius,
            gross,
            chartCap,
            safeCap,
            util,
            ok,
            upgrade
        });
    }), rows.forEach((r) => {
        r.ok ? notes.push(
            `${r.p.item.name} #${r.p.n}: ${(r.gross / 1e3).toFixed(1)} t gross (unit + ${RIGGING_ALLOWANCE_KG} kg rigging) at a ${r.radius.toFixed(1)} m working radius. The ${r.crane.name} charts ${(r.chartCap / 1e3).toFixed(1)} t there, so the lift is at ${(r.util * 100).toFixed(0)}% of chart - inside the ${Math.round(CRANE_UTIL_LIMIT * 100)}% working limit.`
        ) : notes.push(
            r.chartCap <= 0 ? `HIGH-RISK LIFT - ${r.p.item.name} #${r.p.n}: a ${r.radius.toFixed(1)} m radius is beyond the ${r.crane.name} load chart entirely. ${r.upgrade ? `Use a ${r.upgrade.name}.` : "No crane in the list can reach this radius - reduce the standoff or use a different lifting method."}` : `HIGH-RISK LIFT - ${r.p.item.name} #${r.p.n}: ${(r.gross / 1e3).toFixed(1)} t gross at a ${r.radius.toFixed(1)} m radius is ${(r.util * 100).toFixed(0)}% of the ${r.crane.name} chart capacity of ${(r.chartCap / 1e3).toFixed(1)} t, over the ${Math.round(CRANE_UTIL_LIMIT * 100)}% working limit. ${r.upgrade ? `Upgrade to a ${r.upgrade.name}, which charts ${(chartCapacityAt(r.upgrade, r.radius) / 1e3).toFixed(1)} t at this radius.` : "No larger crane in the list covers this lift - reduce the working radius or split the load."}`
        );
    }), crane.cap >= 2e5 && notes.push(
        `${crane.name} is a heavy-lift class machine. Two things the load chart does not tell you and this app cannot check: ground bearing pressure under the outrigger pads or crawler tracks, which at this size routinely needs mats or steel plate and a survey of the standing area, and set-up - a lattice machine needs assembly space, counterweight transport and hours of rigging time before the first lift. Confirm both with the crane supplier before the plan is issued.`
    ), notes.push(
        `Working radius is measured from the slew centre and is the sum of three parts: ${((crane.outrigger || 0) / 2).toFixed(1)} m from the slew centre to the outrigger pads (${crane.outrigger} m full span), ${standoffM.toFixed(1)} m of clear standoff from the pads to the container side, and the unit's offset across the deck. The machine's own footprint is the largest single term, so a crane cannot be treated as a point at the container edge. If it must stand further back - quay furniture, other containers, soft ground - the radius grows and chart capacity falls sharply. Confirm the set-up position and the actual machine's chart on site.`
    ), {
        relevant: !0,
        crane,
        requested,
        switched,
        noneClears,
        standoffM,
        rows,
        notes,
        ok: rows.every((r) => r.ok)
    };
}
const ROLL_SKATE = 0.06,
    ROLL_PIPE = 0.03,
    WINCH_SF = 1.5,
    CSC_FLOOR_KG = 5460,
    CSC_FLOOR_CM2 = 284,
    TANDEM_INSET = 0.12,
    TANDEM_MIN_SPAN = 0.3,
    TANDEM_TARGET = 0.85,
    TANDEM_BODY_CLEAR = 400;

function tandemPlan(p, tA, tB, cgFrac) {
    const W = p.item.kg,
        span = Math.max(p.l, p.w),
        depth = Math.min(p.l, p.w),
        lc = depth / 2,
        capOf = (f) => Math.min(f.cap, f.cap * (FORK_AXLE_TO_FACE + f.lc) / (FORK_AXLE_TO_FACE + lc)),
        cA = capOf(tA),
        cB = capOf(tB),
        cg = span * (cgFrac == null ? 0.5 : cgFrac),
        inset = span * TANDEM_INSET,
        share = (xa, xb) => ({
            RA: W * (xb - cg) / (xb - xa),
            RB: W * (cg - xa) / (xb - xa)
        });
    let xA = inset,
        xB = span - inset,
        r = share(xA, xB),
        moved = null;
    const strongIsB = cB >= cA;
    if (r.RA > cA * TANDEM_TARGET || r.RB > cB * TANDEM_TARGET) {
        const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
        if (strongIsB) {
            const tgt = cA * TANDEM_TARGET,
                x = clamp((tgt * xA - W * cg) / (tgt - W), xA + span * TANDEM_MIN_SPAN, span - inset);
            Math.abs(x - xB) > 1 && (xB = x, moved = "B");
        } else {
            const tgt = cB * TANDEM_TARGET,
                x = clamp((W * cg - tgt * xB) / (W - tgt), inset, xB - span * TANDEM_MIN_SPAN);
            Math.abs(x - xA) > 1 && (xA = x, moved = "A");
        }
        r = share(xA, xB);
    }
    const needSpacing = (tA.width + tB.width) / 2 + TANDEM_BODY_CLEAR,
        stagger = xB - xA < needSpacing,
        okA = r.RA <= cA * FORK_UTIL_LIMIT,
        okB = r.RB <= cB * FORK_UTIL_LIMIT,
        ok = okA && okB,
        spanUsed = xB - xA;
    return {
        tA,
        tB,
        W,
        span,
        depth,
        lc,
        cgFrac: cgFrac == null ? 0.5 : cgFrac,
        cg,
        xA,
        xB,
        spanUsed,
        RA: r.RA,
        RB: r.RB,
        capA: cA,
        capB: cB,
        utilA: r.RA / cA,
        utilB: r.RB / cB,
        okA,
        okB,
        ok,
        moved,
        needSpacing,
        stagger,
        tooClose: spanUsed < span * TANDEM_MIN_SPAN
    };
}

function bestTandemPair(p, cgFrac) {
    const ld = [...FORKLIFTS].sort((a, b) => a.cap - b.cap);
    let best = null;
    for (let i = 0; i < ld.length; i++)
        for (let j = 0; j < ld.length; j++) {
            const pl = tandemPlan(p, ld[i], ld[j], cgFrac);
            if (!pl.ok || pl.tooClose) continue;
            const cost = ld[i].cap + ld[j].cap + (pl.stagger ? 1e6 : 0);
            (!best || cost < best.cost) && (best = {
                plan: pl,
                cost
            });
        }
    return best ? best.plan : null;
}

function loadingProcedure(eng, fk) {
    const sp = eng.spec,
        open = sp.fam === "FR" || sp.fam === "OT",
        deck = deckHeightFor(sp),
        dacc = deckAccess(sp, deck),
        heavy = eng.placed.slice().sort((a, b) => b.item.kg - a.item.kg)[0];
    if (!heavy) return null;
    const kg = heavy.item.kg,
        row = fk && fk.rows ? fk.rows.find((r) => r.p === heavy) : null,
        method = open ? "crane" : row ? row.method : "single",
        sideClear = Math.round((sp.W - heavy.w) / 2),
        doorClear = Math.round(((sp.doorW || sp.W) - heavy.w) / 2),
        headClear = Math.round((sp.doorH || sp.H) - heavy.h),
        pullSkate = Math.round(kg * ROLL_SKATE),
        pullPipe = Math.round(kg * ROLL_PIPE),
        winch = Math.round(pullSkate * WINCH_SF / 100) / 10,
        bearerCm2 = heavy.item.contactCm2 || 0,
        floorKg = bearerCm2 ? Math.round(kg / bearerCm2 * CSC_FLOOR_CM2) : null,
        floorOver = floorKg != null && floorKg > CSC_FLOOR_KG,
        spreadCm2 = floorOver ? Math.ceil(kg / CSC_FLOOR_KG * CSC_FLOOR_CM2) : null,
        lineKgf = Math.round(pullSkate * WINCH_SF),
        steps = [];
    return method === "crane" ? (steps.push(
        ["Set down and stabilise", `This ${sp.code} rides ${deck} mm above ground on a lowbed, so every hook height is measured from the ground: deck ${deck} mm + cargo height + sling height. Position it on level hardstand or a chassis with brakes applied and wheels chocked. Flatrack stanchions folded down or removed as the plan requires.`],
        ["Rig the unit", "Rig per the Crane & Rigging plan. Sling angle and leg loads are on that page - do not substitute shorter legs, which raises leg tension sharply."],
        ["Land it", "Land the unit onto timber bearers laid across the deck so the load spreads onto the cross-members, not onto the deck plate between them."],
        ["Secure", "Lash per the Securing plan before releasing the hook. Do not release until at least the lateral lashings are tensioned."]
    ), {
        method,
        steps,
        sideClear,
        doorClear,
        headClear,
        open: !0
    }) : method === "single" || method === "rotate" ? (steps.push(
        ["Position the container", `This ${sp.code} sits ${deck} mm above ground on its trailer, so a truck CANNOT simply drive in: ${dacc.why || "the floor is at running level."} Dock it at a platform level with the container floor, or ground it on level hardstand with an approach ramp. On a chassis: brakes on, wheels chocked, and support stands under the rear cross-member before any weight enters.`],
        ["Check the approach", `Door opening leaves ${doorClear} mm each side against this unit and ${headClear} mm overhead. Interior gives ${sideClear} mm each side once inside.${doorClear < 75 ? " That is a guided entry - set timber guides on the floor and walk the unit in." : ""}`],
        [method === "rotate" ? "Re-orient before entry" : "Pick up", method === "rotate" ? `This unit must be turned 90 deg BEFORE it enters. Turn it on the apron - there is no room to turn inside the container - so that the ${Math.round(row.entryFace)} mm face leads.` : `Enter forks fully under the unit. Load centre ${Math.round(row.lcActual)} mm, ${fk.truck.name} rates ${Math.round(row.capAt)} kg here.`],
        ["Drive in and place", `Reverse in or drive in as the layout allows, mast vertical, load low. The truck is ${fk.truck.width} mm wide in a ${sp.W} mm box - it cannot turn inside. Work from the nose backwards so the last unit is at the door.`],
        ["Land on bearers", `Set the unit down on timber bearers across the cross-members.${floorOver ? ` FLOOR OVERLOADED AS STATED: about ${floorKg.toLocaleString()} kg per ${CSC_FLOOR_CM2} cm2 against the ${CSC_FLOOR_KG.toLocaleString()} kg CSC limit - spread to at least ${spreadCm2.toLocaleString()} cm2 of bearer contact before landing it.` : floorKg ? ` Bearing works out at about ${floorKg.toLocaleString()} kg per ${CSC_FLOOR_CM2} cm2 against the ${CSC_FLOOR_KG.toLocaleString()} kg CSC limit.` : " Do not land steel directly on the plywood between cross-members."}`],
        ["Secure", "Lash per the Securing plan as each unit lands - not at the end. Once the next unit is in, the lashing points behind it are unreachable."]
    ), {
        method,
        steps,
        sideClear,
        doorClear,
        headClear
    }) : (steps.push(
        ["Tandem lift off the trailer", (() => {
            const ch = chooseTandem(heavy, null, null, "L");
            if (!ch) return "No pair of trucks in the list can take this unit in either arrangement. Use a crane.";
            if (ch.kind === "S") {
                const t2 = ch.plan;
                return `${ch.reason} ${t2.tA.name} at ${(t2.xA / 1e3).toFixed(2)} m and ${t2.tB.name} at ${(t2.xB / 1e3).toFixed(2)} m along that face - ${(t2.spanUsed / 1e3).toFixed(2)} m apart, carrying ${Math.round(t2.RA).toLocaleString()} kg and ${Math.round(t2.RB).toLocaleString()} kg at a ${Math.round(t2.lc)} mm load centre each.${t2.stagger ? ` These two need ${(t2.needSpacing / 1e3).toFixed(2)} m to stand abreast, so one must sit back.` : ""} The crate starts on a bed ${deck} mm above ground - travel low, raise only at the transfer.`;
            }
            const tp = ch.plan;
            return tp ? `${ch.reason} ${tp.tEnd.name} takes the end face and ${tp.tSide.name} takes the side face, standing ${(tp.pB / 1e3).toFixed(2)} m along the crate from that end. Shares are ${Math.round(tp.RA).toLocaleString()} kg on the end truck and ${Math.round(tp.RB).toLocaleString()} kg on the side truck. Their load centres are NOT the same number: the end truck reads ${Math.round(tp.lcEnd)} mm (half the crate length, because its forks run that way) and the side truck ${Math.round(tp.lcSide)} mm (half the width). The governing check is that the CG sits close to the line joining the two fork centroids - here ${Math.round(tp.off)} mm off against a ${Math.round(tp.tiltLimit)} mm limit. Move the side truck along the crate until that offset closes; if it will not close, the crate tilts about that line no matter how strong the trucks are. Note the working height: the crate starts on a bed ${deck} mm above ground, so both trucks lift from that level - travel with the load as low as the bed allows and only raise at the point of transfer.` : "No end-plus-side pair in the list can take this unit with the CG close enough to the support line. Use a crane.";
        })()],
        ["Position and stabilise the container", `Ground the ${sp.code} on level hardstand, or dock it so the floor is level with the loading platform. If it stays on the chassis: brakes on, wheels chocked, and trestles under the rear cross-member. ${Math.round(kg / 1e3)} t travelling to the nose shifts a large load onto the landing legs.`],
        ["Mount the unit on rollers", "Set the unit down from the tandem lift onto steel machine skates, or onto pipe rollers running on timber runners. Runners must span the container cross-members, not sit on bare plywood."],
        ["Which truck moves it in - and which must not", (() => {
            const pa = pushAnalysis(sp, heavy, FORKLIFTS, deck),
                fa = FORKLIFTS.map((f) => [f, floorAxleCheck(f, heavy.item.kg)]);
            return `${pa.deck.ok ? "" : `FIRST: ${pa.deck.why} Until that is done, no truck enters and nothing below applies. `}NO forklift may CARRY this unit into the container. The ISO 1496 floor is rated for a ${ISO_AXLE_KG.toLocaleString()} kg axle load, and a truck carrying ${Math.round(heavy.item.kg).toLocaleString()} kg puts ${Math.round(fa[0][1].axle).toLocaleString()}-${Math.round(fa[fa.length - 1][1].axle).toLocaleString()} kg through its front axle - every truck in the list is over. It must roll in, not be carried in. Pushing is a different matter: ${pa.pushSkate.toLocaleString()} kgf is needed on skates (${pa.pushPipe.toLocaleString()} kgf on pipe rollers), which is well within any of them, and ${pa.pushers.length ? pa.pushers.map((f) => f.name).join(" or ") + " can enter the box behind the unit to do it once the floor is at running level" : pa.deck.ok ? "no truck in the list fits behind it inside the box" : "no truck can enter at all while the box is up on the trailer"}. The pusher travels light - its own axle load is far below the limit.`;
        })()],
        ["Rig the pull", `Anchor the winch OUTSIDE the container, in line with its axis. Do NOT anchor to the container's own lashing rings: they are rated ${RING_SWL.closed} daN, the steady pull here is about ${lineKgf.toLocaleString()} kgf${lineKgf >= RING_SWL.closed ? " - already at or above that" : ", and a snatch or a jammed roller spikes it well past that in an instant"}. Run the line to a pulling eye or strop on the unit; use a snatch block at the nose only if it and its anchor are rated for the redirected load.`],
        ["Size the pull", `Rolling resistance is about ${pullSkate.toLocaleString()} kgf on skates or ${pullPipe.toLocaleString()} kgf on pipe rollers, for a ${(kg / 1e3).toFixed(1)} t unit. Add the gradient if you are pulling up a ramp - every 1 deg adds about ${Math.round(kg * 0.0175).toLocaleString()} kgf. Use a winch of at least ${winch.toFixed(1)} t line pull and rate the strop and shackles to match.`],
        ["Guide it in", `Door opening leaves ${doorClear} mm each side and ${headClear} mm overhead; the interior leaves ${sideClear} mm each side. Set timber guides on the floor and control skew with bars from the SIDE, never from in front. Nobody stands between the unit and the door frame while the line is under tension.`],
        ["Cascade the rollers", "Advance in short pulls. As the unit moves forward, take rollers from the rear and re-lay them at the front. Keep at least three rollers under load at all times and keep the pull axial - a skewed pull jams the unit against the side wall."],
        ["Land and de-roll", `At the final position, jack the unit, withdraw the skates or rollers, and land it on timber bearers laid across the cross-members.${floorOver ? ` FLOOR OVERLOADED AS STATED: the declared contact area gives about ${floorKg.toLocaleString()} kg per ${CSC_FLOOR_CM2} cm2 against the ${CSC_FLOOR_KG.toLocaleString()} kg CSC limit. Spread the load to at least ${spreadCm2.toLocaleString()} cm2 of bearer contact - longer or wider bearers, or a steel spreader plate - before landing it.` : floorKg ? ` Bearing works out at about ${floorKg.toLocaleString()} kg per ${CSC_FLOOR_CM2} cm2 against the ${CSC_FLOOR_KG.toLocaleString()} kg CSC limit.` : " Do not land steel directly on the plywood between cross-members."}`],
        ["Secure before the line comes off", `Fit and tension the lashings from the Securing plan while the winch line is still attached, then release. Per-lashing capacity is governed by the ${RING_SWL.closed / 1e3} t container ring, not by the chain - which is why the count is high.`],
        ["If any of this will not work", "Two alternatives beat forcing it: load the unit onto a flatrack or open-top and crane it in from above, or use a side-loading trailer. Both remove the door-clearance problem entirely."]
    ), {
        method: "roller",
        steps,
        sideClear,
        doorClear,
        headClear,
        pullSkate,
        pullPipe,
        winch
    });
}
const LOAD_METHODS = [{
        id: "auto",
        name: "Auto - app decides"
    },
    {
        id: "single",
        name: "Single forklift"
    },
    {
        id: "tandem",
        name: "Tandem forklift (2 trucks)"
    },
    {
        id: "roller",
        name: "Rollers + winch"
    },
    {
        id: "crane",
        name: "Crane"
    }
];

function methodFeasibility(eng, p, forced, tandemMode) {
    const sp = eng.spec,
        open = sp.fam === "FR" || sp.fam === "OT",
        deck = deckHeightFor(sp),
        kg = p.item.kg,
        capOf = (f, lc2) => Math.min(f.cap, f.cap * (FORK_AXLE_TO_FACE + f.lc) / (FORK_AXLE_TO_FACE + lc2)),
        lc = p.l / 2,
        entrants = FORKLIFTS.filter((f) => forkliftAccess(sp, f).ok),
        bestSingle = entrants.filter((f) => kg <= capOf(f, lc) * FORK_UTIL_LIMIT)[0] || null,
        biggest = entrants[entrants.length - 1] || null,
        tp = chooseTandem(p, null, null, tandemMode),
        dacc = deckAccess(sp, deck),
        out = {};
    out.single = bestSingle ? {
        ok: !0,
        truck: bestSingle,
        why: `${bestSingle.name} carries ${Math.round(kg).toLocaleString()} kg at a ${Math.round(lc)} mm load centre (${Math.round(capOf(bestSingle, lc)).toLocaleString()} kg rated there).`
    } : {
        ok: !1,
        why: `No single truck that fits this container can take ${Math.round(kg).toLocaleString()} kg at a ${Math.round(lc)} mm load centre. ${biggest ? `The largest that enters is the ${biggest.name}, rated ${Math.round(capOf(biggest, lc)).toLocaleString()} kg there - short by ${Math.round(kg - capOf(biggest, lc)).toLocaleString()} kg.` : "No truck in the list clears the door at all."}`
    }, out.tandem = tp ? {
        ok: !0,
        plan: tp,
        why: `${tp.kind === "L" ? `${tp.plan.tEnd.name} on the end face and ${tp.plan.tSide.name} on the side` : `${tp.plan.tA.name} and ${tp.plan.tB.name} on the same face`} - ${tp.kind === "L" ? `${Math.round(tp.plan.RA).toLocaleString()} / ${Math.round(tp.plan.RB).toLocaleString()}` : `${Math.round(tp.plan.RA).toLocaleString()} / ${Math.round(tp.plan.RB).toLocaleString()}`} kg. This marshals the unit on the apron; it is not how it enters the box.`
    } : {
        ok: !1,
        why: `No pair of trucks in the list can take ${Math.round(kg).toLocaleString()} kg in the selected arrangement within capacity and tilt limits.`
    }, out.roller = {
        ok: dacc.ok,
        why: `${Math.round(kg * ROLL_SKATE).toLocaleString()} kgf on skates or ${Math.round(kg * ROLL_PIPE).toLocaleString()} kgf on pipe rollers. ${dacc.ok ? `${entrants.length ? entrants.map((f) => f.name).join(" or ") + " can follow it in and push" : "no truck fits behind it inside the box"}.` : `Blocked until the floor is at running level: ${dacc.why}`}`
    }, out.crane = open ? {
        ok: !0,
        why: "Open equipment - the unit is lifted in from above. Radius, chart capacity and rigging are on the Crane & Rigging page."
    } : {
        ok: !1,
        why: `This is a closed ${sp.code}: there is no roof aperture, so nothing can be craned into it. Crane loading needs a flatrack or open-top. A crane can still place the unit onto the trailer or the apron.`
    };
    const sel = forced && forced !== "auto" ? forced : null;
    return {
        deck,
        dacc,
        options: out,
        selected: sel,
        selectedState: sel ? out[sel] : null
    };
}

function forkliftAccess(spec, truck) {
    const doorW = spec.doorW || spec.W,
        doorH = spec.doorH || spec.H,
        wFit = truck.width + 2 * FORK_SIDE_CLEAR <= doorW,
        hFit = truck.mast <= Math.min(doorH, spec.H),
        manoeuvre = spec.W - truck.width;
    return {
        ok: wFit && hFit,
        wFit,
        hFit,
        doorW,
        doorH,
        manoeuvre,
        tight: wFit && manoeuvre < 600,
        why: wFit ? hFit ? null : `its lowered mast is ${truck.mast} mm against a ${Math.min(doorH, spec.H)} mm door/interior height` : `it is ${truck.width} mm wide and the ${doorW} mm door leaves no working clearance`
    };
}

function forkliftMethod(eng, p, truck, capOf, forced) {
    const alongFork = p.l,
        entryFace = p.w,
        lcActual = alongFork / 2,
        capAt = capOf(truck, lcActual),
        kg = p.item.kg,
        util = kg / capAt,
        ok = kg <= capAt,
        turnable = p.item.turn !== !1,
        rotLc = p.w / 2,
        rotCap = capOf(truck, rotLc),
        rotHelps = rotCap > capAt + 1e-9 && kg <= rotCap,
        longUnit = alongFork > FORK_LONG_UNIT;
    let method = "single",
        advice = null;
    return forced && forced !== "auto" ? {
        p,
        truck,
        method: forced,
        forcedBy: "user",
        forcedOk: forced === "single" ? ok : forced === "rotate" ? rotHelps && turnable : !0,
        alongFork,
        entryFace,
        lcActual,
        capAt,
        util,
        ok: forced === "single" ? ok : !0,
        advice: null,
        longUnit,
        entry: "rear (through the door)"
    } : (ok || (rotHelps && turnable ? (method = "rotate", advice = `Turn the unit 90 deg in the stow so the ${Math.round(entryFace)} mm face points at the door. The load centre falls from ${Math.round(lcActual)} to ${Math.round(rotLc)} mm and the ${truck.name} then rates ${Math.round(rotCap)} kg against ${Math.round(kg)} kg. This is a change to the stow plan, not just to how the driver approaches.`) : (method = "tandem", advice = `${Math.round(kg)} kg at a ${Math.round(lcActual)} mm load centre is beyond the ${truck.name} (${Math.round(capAt)} kg)${turnable ? " and turning it does not help" : " and the unit may not be turned"}. Two trucks in tandem can marshal it on the apron - each sized for at least ${Math.round(kg * FORK_TANDEM_SHARE)} kg to allow for uneven sharing, matched class, one lead driver and a banksman - but tandem work is NOT possible inside the container: there is no room for two trucks in a ${eng.spec.W} mm wide box. To get it in, skid it on rollers with a winch, or move the unit to a flatrack or open-top and crane it.`)), ok && longUnit && (advice = `The unit is ${Math.round(alongFork)} mm deep along the forks against ${truck.fork} mm forks - the load overhangs the fork tips, so it must be supported on bearers or handled from a pallet that spans the forks.`), {
        p,
        truck,
        method,
        alongFork,
        entryFace,
        lcActual,
        capAt,
        util,
        ok,
        advice,
        longUnit,
        entry: "rear (through the door)"
    });
}

function forkliftCheck(eng, forkId) {
    const sp = eng.spec;
    if (sp.fam === "FR" || sp.fam === "OT")
        return {
            relevant: !1,
            rows: [],
            notes: [],
            fails: [],
            ok: !0
        };
    const fladder = [...FORKLIFTS].sort((a, b) => a.cap - b.cap),
        fReqIdx = forkId === "auto" ? 0 : Math.max(0, fladder.findIndex((f) => f.id === forkId)),
        fRequested = fladder[fReqIdx] || fladder[0],
        capOf = (f, lc) => Math.min(f.cap, f.cap * (FORK_AXLE_TO_FACE + f.lc) / (FORK_AXLE_TO_FACE + lc)),
        canEnter = (f) => forkliftAccess(sp, f).ok,
        fClears = (f) => canEnter(f) && eng.placed.every((p) => p.item.kg <= capOf(f, p.l / 2) * FORK_UTIL_LIMIT),
        fPicked = fladder.slice(fReqIdx).find(fClears),
        entrants = fladder.filter(canEnter),
        truck = fPicked || entrants[entrants.length - 1] || fladder[0],
        fSwitched = forkId !== "auto" && truck.id !== fRequested.id,
        fNoneClears = !fPicked,
        rows = [],
        notes = [];
    return fSwitched ? notes.push(
        `EQUIPMENT SWITCHED - the ${fRequested.name} cannot handle every unit in this container, so the plan has been re-issued on the ${truck.name}${fNoneClears ? ", which is the largest truck in the list and still does not cover every unit - see below" : ` - the smallest truck in the list that handles all of them within ${Math.round(FORK_UTIL_LIMIT * 100)}% of its derated capacity`}.`
    ) : forkId === "auto" && notes.push(
        `Equipment selected automatically: the ${truck.name} is the smallest truck in the list that handles every unit in this container at its actual load centre and stays within ${Math.round(FORK_UTIL_LIMIT * 100)}% of its derated capacity. A truck sized to exactly 100% is not selected - that leaves nothing for a ramp, a raised mast or a CG further forward than the geometry suggests.`
    ), (() => {
        const acc = forkliftAccess(sp, truck);
        acc.ok || notes.push(
            `ACCESS - the ${truck.name} cannot enter this ${sp.code}: ${acc.why}. No truck in the list both enters this container and handles the cargo, so the units below cannot be forklifted in. Skid them on rollers with a winch, or move to a flatrack / open-top and crane.`
        ), acc.ok && acc.tight && notes.push(
            `ACCESS - the ${truck.name} is ${truck.width} mm wide in a ${sp.W} mm box, leaving ${acc.manoeuvre} mm total side clearance. It can drive in and out but cannot turn inside: plan to reverse out of every run, and load from the door end inward.`
        ), notes.push(
            "Loading method: single truck, rear entry through the door. Truck dimensions assume container-spec low/free-lift masts; a standard yard truck of the same capacity is taller and may not clear the door. The forks run along the container axis, so the load centre is set by each unit's depth as stowed - not by its shortest face. Turning a unit to improve the load centre is a change to the stow plan."
        );
    })(), eng.placed.forEach((p) => {
        const m = forkliftMethod(eng, p, truck, capOf),
            overhang = Math.max(0, m.alongFork - truck.fork),
            lcState = m.lcActual < truck.lc - 1 ? "capped" : m.lcActual <= truck.lc + 1 ? "rated" : "degraded",
            derated = truck.cap * (FORK_AXLE_TO_FACE + truck.lc) / (FORK_AXLE_TO_FACE + m.lcActual),
            deratePct = derated < truck.cap ? (1 - derated / truck.cap) * 100 : 0,
            upgrade = m.ok ? null : fladder.find(
                (f) => forkliftAccess(sp, f).ok && p.item.kg <= capOf(f, m.lcActual)
            ) || null;
        rows.push({
            p,
            truck,
            lcActual: m.lcActual,
            overhang,
            capAt: m.capAt,
            util: m.util,
            ok: m.ok,
            upgrade,
            entryFace: m.entryFace,
            alongFork: m.alongFork,
            lcState,
            deratePct,
            method: m.method,
            entry: m.entry
        }), m.advice && notes.push(
            `${m.method === "single" ? "OVERHANG" : m.method === "rotate" ? "ROTATE 90 DEG" : "TWO-TRUCK / ROLLER"} - ${p.item.name} #${p.n}: ${m.advice}`
        );
    }), {
        relevant: !0,
        truck,
        requested: fRequested,
        switched: fSwitched,
        noneClears: fNoneClears,
        rows,
        notes,
        fails: rows.filter((r) => !r.ok),
        ok: rows.every((r) => r.ok)
    };
}

function pdfCraneEnvelope(doc, x0, y0, bw, bh, eng, craneId, standoffM, targetDeg) {
    const cc = craneCapacity(eng, craneId, standoffM);
    if (!cc.relevant || !cc.rows.length) return 0;
    const acc = craneAccess(eng, targetDeg),
        hv = cc.rows.reduce((a, b) => b.gross > a.gross ? b : a),
        rig = (acc.rows || []).find((r) => r.p === hv.p) || (acc.rows || [])[0],
        crane = cc.crane,
        chart = crane.chart,
        maxR = chart[chart.length - 1][0],
        maxCap = chart[0][1],
        padL = 16,
        gy = y0 + bh * 0.74,
        capH = bh * 0.6,
        X = (m) => x0 + padL + m / maxR * (bw - padL - 6),
        Y = (kg) => gy - kg / maxCap * capH,
        capAt = (m) => chartCapacityAt(crane, m),
        step = 0.7;
    for (let px = X(chart[0][0]); px < X(maxR); px += step) {
        const m = (px - x0 - padL) / (bw - padL - 6) * maxR,
            q = capAt(m);
        if (q <= 0) continue;
        const yTop = Y(q),
            ySafe = Y(q * CRANE_UTIL_LIMIT);
        doc.setFillColor(232, 176, 75), doc.rect(px, yTop, step + 0.25, ySafe - yTop, "F"), doc.setFillColor(163, 196, 174), doc.rect(px, ySafe, step + 0.25, gy - ySafe, "F");
    }
    const poly = (f, r2, g2, b2, wdt, dash) => {
        doc.setDrawColor(r2, g2, b2), doc.setLineWidth(wdt), dash ? doc.setLineDashPattern([1.4, 1], 0) : doc.setLineDashPattern([], 0);
        let prev = null;
        for (let m = chart[0][0]; m <= maxR + 1e-9; m += 0.25) {
            const q = capAt(m);
            if (q <= 0) break;
            const pt = [X(m), Y(q * f)];
            prev && doc.line(prev[0], prev[1], pt[0], pt[1]), prev = pt;
        }
        doc.setLineDashPattern([], 0);
    };
    poly(1, 179, 54, 43, 0.7, !1), poly(CRANE_UTIL_LIMIT, 46, 125, 79, 0.6, !0), doc.setFontSize(6), doc.setTextColor(90, 100, 114), doc.setDrawColor(154, 163, 174), doc.setLineWidth(0.2), chart.forEach(([r]) => {
        doc.line(X(r), gy, X(r), gy + 1.4), doc.text(`${r}m`, X(r), gy + 4, {
            align: "center"
        });
    }), [0.25, 0.5, 0.75, 1].forEach((f) => {
        doc.line(x0 + padL - 1.4, Y(maxCap * f), x0 + padL, Y(maxCap * f)), doc.text(`${Math.round(maxCap * f / 1e3)}t`, x0 + padL - 2, Y(maxCap * f) + 1, {
            align: "right"
        });
    }), doc.setDrawColor(58, 58, 58), doc.setLineWidth(0.8), doc.line(x0, gy, x0 + bw, gy);
    const outHalf = (crane.outrigger || 0) / 2,
        cxp = X(0),
        padX = X(outHalf);
    doc.setFillColor(27, 36, 48), doc.rect(cxp - 5, gy - 6, 10, 6, "F"), doc.setDrawColor(27, 36, 48), doc.setLineWidth(0.9), doc.line(cxp, gy - 2.2, padX, gy - 2.2), doc.setFillColor(57, 66, 79), doc.rect(padX - 1.6, gy - 2.2, 3.2, 2.2, "F"), doc.rect(cxp - 1.6, gy - 2.2, 3.2, 2.2, "F"), doc.setDrawColor(122, 27, 18), doc.setLineWidth(0.25), doc.setLineDashPattern([0.8, 0.7], 0), doc.line(cxp, gy - 8, cxp, gy - 2.2), doc.setLineDashPattern([], 0), doc.setFontSize(5.8), doc.setTextColor(90, 100, 114), doc.text("slew centre", cxp, gy - 8.6, {
        align: "center"
    }), doc.text(`outrigger half-span ${outHalf.toFixed(1)} m`, (cxp + padX) / 2, gy + 8.6, {
        align: "center"
    });
    const dx = X(outHalf + standoffM),
        dw = Math.max(3, X(outHalf + standoffM + eng.spec.W / 1e3) - dx);
    doc.setDrawColor(124, 140, 160), doc.setLineWidth(0.4), doc.setLineDashPattern([1.2, 0.9], 0), doc.rect(dx, gy - 5, dw, 5, "S"), doc.setLineDashPattern([], 0);
    const cgx = X(hv.radius),
        uw = Math.max(4, hv.p.w / 1e3 / maxR * (bw - padL - 6)),
        uh = 5;
    doc.setFillColor(232, 96, 10), doc.setDrawColor(138, 59, 6), doc.setLineWidth(0.4), doc.rect(cgx - uw / 2, gy - 5 - uh, uw, uh, "FD");
    const utop = gy - 5 - uh,
        hookY = Math.max(y0 + 4, utop - (rig ? rig.hookH / 1e3 / maxR * (bw - padL - 6) : 8)),
        boomDeg = Math.atan2(gy - 6 - hookY, cgx - cxp) * 180 / Math.PI;
    doc.setDrawColor(27, 36, 48), doc.setLineWidth(1.5), doc.line(cxp, gy - 6, cgx, hookY - 2), doc.setLineWidth(0.4), doc.line(cgx, hookY - 2, cgx, hookY), doc.circle(cgx, hookY, 0.7, "F");
    const flat = rig && rig.targetDeg <= SLING_MIN_DEG + 5;
    flat ? doc.setDrawColor(179, 54, 43) : doc.setDrawColor(46, 125, 79), doc.setLineWidth(0.6), doc.line(cgx, hookY, cgx - uw / 2, utop), doc.line(cgx, hookY, cgx + uw / 2, utop), doc.setFontSize(6.5), doc.setTextColor(27, 36, 48), doc.text(`boom ${boomDeg.toFixed(0)} deg`, (cxp + cgx) / 2 - 6, (gy - 6 + hookY) / 2 - 1), rig && (doc.setTextColor(flat ? 179 : 46, flat ? 54 : 125, flat ? 43 : 79), doc.text(`sling ${Math.round(rig.targetDeg)} deg${flat ? " - AT LIMIT" : ""}`, cgx + uw / 2 + 1.5, utop - 1), doc.setTextColor(58, 58, 58), doc.text(`hook ${(rig.hookH / 1e3).toFixed(1)} m`, cgx + 1.5, (hookY + utop) / 2));
    const cgy = gy - 5 - uh / 2;
    doc.setDrawColor(122, 27, 18), doc.setLineWidth(0.5), doc.line(cgx - 2, cgy, cgx + 2, cgy), doc.line(cgx, cgy - 2, cgx, cgy + 2), doc.circle(cgx, cgy, 1.4, "S"), doc.setFontSize(6.5), doc.setTextColor(122, 27, 18), doc.text("CG", cgx + 2, cgy - 2), doc.setDrawColor(90, 100, 114), doc.setLineWidth(0.35), doc.line(padX, gy + 4.6, dx, gy + 4.6), doc.line(padX, gy + 3.8, padX, gy + 5.4), doc.line(dx, gy + 3.8, dx, gy + 5.4), doc.setFontSize(5.8), doc.setTextColor(90, 100, 114), doc.text(`standoff ${standoffM.toFixed(1)} m`, (padX + dx) / 2, gy + 3.4, {
        align: "center"
    });
    const ry = gy + 11;
    doc.setDrawColor(122, 27, 18), doc.setLineWidth(0.7), doc.line(cxp, ry, cgx, ry), doc.setFillColor(122, 27, 18), doc.triangle(cgx, ry, cgx - 2, ry - 1, cgx - 2, ry + 1, "F"), doc.setLineWidth(0.2), doc.setLineDashPattern([1, 0.8], 0), doc.line(cxp, gy, cxp, ry), doc.line(cgx, cgy, cgx, ry), doc.setLineDashPattern([], 0), doc.setFontSize(7.5), doc.setFont("helvetica", "bold"), doc.setTextColor(122, 27, 18), doc.text(`working radius ${hv.radius.toFixed(1)} m`, (cxp + cgx) / 2, ry - 1.6, {
        align: "center"
    });
    const opY = Y(hv.gross),
        good = hv.ok;
    return good ? doc.setDrawColor(46, 125, 79) : doc.setDrawColor(179, 54, 43), doc.setLineWidth(0.6), doc.setLineDashPattern([1.2, 0.9], 0), doc.line(cgx, opY, cgx, gy), doc.setLineDashPattern([], 0), good ? doc.setFillColor(46, 125, 79) : doc.setFillColor(179, 54, 43), doc.circle(cgx, opY, 1.2, "F"), doc.setFontSize(7.5), doc.setTextColor(good ? 46 : 179, good ? 125 : 54, good ? 79 : 43), doc.text(`${(hv.gross / 1e3).toFixed(1)} t gross - ${(hv.util * 100).toFixed(0)}% of chart`, cgx + 2.5, opY - 1), good || doc.text(
        `HIGH-RISK LIFT${hv.upgrade ? ` - use ${hv.upgrade.name}` : " - no crane in list covers it"}`,
        cgx + 2.5,
        opY + 2.6
    ), doc.setFont("helvetica", "bold"), doc.setFontSize(6.5), doc.setTextColor(179, 54, 43), doc.text("Chart capacity", x0 + bw * 0.55, y0 + 4), doc.setTextColor(46, 125, 79), doc.text(`Safe working limit (${Math.round(CRANE_UTIL_LIMIT * 100)}%)`, x0 + bw * 0.55, y0 + 7.4), doc.setTextColor(90, 100, 114), doc.setFont("helvetica", "normal"), doc.text(
        `${crane.name}   -   radius = ${outHalf.toFixed(1)} m outrigger half-span + ${standoffM.toFixed(1)} m standoff + offset across deck`,
        x0,
        y0 + 4
    ), bh;
}

function pdfForkliftMoment(doc, x0, y0, bw, bh, r) {
    if (!r) return 0;
    const t = r.truck,
        tandem = r.method === "tandem",
        tp = tandem ? bestTandemPair(r.p, r.cgFrac) || tandemPlan(r.p, r.truck, r.truck, r.cgFrac) : null,
        bodyOf = (f) => 2200 + f.cap / 1e3 * 170,
        bad = !r.ok,
        col = bad ? [179, 54, 43] : [46, 125, 79],
        gy = y0 + bh * 0.72,
        DRAW_L = x0 + 2,
        DRAW_R = x0 + bw * 0.63,
        BODY = tandem ? bodyOf(tp.tA) : 2800,
        BODY2 = tandem ? bodyOf(tp.tB) : 0,
        along = Math.max(300, tandem ? tp.span : r.alongFork),
        realLen = BODY + FORK_AXLE_TO_FACE + along + (tandem ? FORK_AXLE_TO_FACE + BODY2 : 0),
        sc = Math.min(0.06, (DRAW_R - DRAW_L) / realLen),
        axleX = DRAW_L + BODY * sc,
        faceX = axleX + FORK_AXLE_TO_FACE * sc,
        lw = along * sc,
        loadR = faceX + lw,
        axle2X = loadR + FORK_AXLE_TO_FACE * sc;
    doc.setFillColor(bad ? 253 : 234, bad ? 236 : 244, bad ? 234 : 238), doc.setDrawColor(col[0], col[1], col[2]), doc.setLineWidth(0.5), doc.rect(x0, y0, bw, 7, "FD"), doc.setFont("helvetica", "bold"), doc.setFontSize(8.5), doc.setTextColor(col[0], col[1], col[2]), doc.text(
        tandem ? `TWO-TRUCK LIFT REQUIRED  -  ${(r.util * 100).toFixed(0)}% of one ${t.name}` : r.method === "rotate" ? `ROTATE 90 DEG IN THE STOW  -  ${(r.util * 100).toFixed(0)}% as currently stowed` : bad ? `FORKLIFT TIPPING HAZARD  -  ${(r.util * 100).toFixed(0)}% of derated capacity` : `${r.util >= 0.9 ? "WITHIN LIMIT BUT NO MARGIN" : "WITHIN LIMIT"}  -  ${(r.util * 100).toFixed(0)}% of derated capacity`,
        x0 + 2.5,
        y0 + 4.8
    ), doc.setDrawColor(58, 58, 58), doc.setLineWidth(0.8), doc.line(x0, gy, x0 + bw * 0.66, gy);
    const drawTruck = (ax, dir) => {
        const bodyW = BODY * sc,
            bodyX = dir > 0 ? ax - bodyW : ax;
        doc.setFillColor(27, 36, 48), doc.rect(bodyX, gy - 11, bodyW, 9, "F"), doc.setFillColor(57, 66, 79), doc.rect(dir > 0 ? bodyX : bodyX + bodyW * 0.45, gy - 13.5, bodyW * 0.55, 2.4, "F"), doc.circle(ax, gy - 1.8, 1.8, "F"), doc.circle(dir > 0 ? bodyX + bodyW * 0.12 : bodyX + bodyW * 0.88, gy - 1.6, 1.5, "F");
        const mx = ax + dir * FORK_AXLE_TO_FACE * sc;
        doc.setFillColor(27, 36, 48), doc.rect(dir > 0 ? mx - 0.9 : mx, gy - 24, 0.9, 22.2, "F"), doc.rect(dir > 0 ? mx : mx - t.fork * sc, gy - 1.8, t.fork * sc, 0.7, "F"), doc.setFillColor(179, 54, 43), doc.triangle(ax, gy - 3.6, ax - 1.7, gy - 1.2, ax + 1.7, gy - 1.2, "F"), doc.setFont("helvetica", "bold"), doc.setFontSize(6.5), doc.setTextColor(179, 54, 43), doc.text("FULCRUM (front axle)", ax, gy + 6.4, {
            align: "center"
        });
    };
    drawTruck(axleX, 1), tandem && drawTruck(axle2X, -1);
    const lh = Math.max(7, Math.min(18, r.p.h * sc * 0.6)),
        ly = gy - 1.8 - lh;
    bad ? doc.setFillColor(232, 96, 10) : doc.setFillColor(63, 143, 91), doc.setDrawColor(27, 36, 48), doc.setLineWidth(0.4), doc.rect(faceX, ly, lw, lh, "FD"), doc.setFontSize(7), doc.setTextColor(27, 36, 48), doc.setFont("helvetica", "bold"), doc.text(
        `${r.p.item.name} #${r.p.n}  -  ${Math.round(r.p.item.kg).toLocaleString()} kg over ${Math.round(along)} mm`,
        faceX + lw / 2,
        ly - 1.6, {
            align: "center"
        }
    );
    const cgx = tandem ? faceX + lw / 2 : faceX + r.lcActual * sc,
        cgy = ly + lh / 2;
    if (doc.setDrawColor(122, 27, 18), doc.setLineWidth(0.5), doc.line(cgx - 2, cgy, cgx + 2, cgy), doc.line(cgx, cgy - 2, cgx, cgy + 2), doc.circle(cgx, cgy, 1.5, "S"), tandem) {
        const share = r.p.item.kg / 2;
        [faceX + lw * 0.2, faceX + lw * 0.8].forEach((sx) => {
            doc.setDrawColor(46, 125, 79), doc.setLineWidth(1.1), doc.line(sx, cgy + 2, sx, cgy + 8), doc.setFillColor(46, 125, 79), doc.triangle(sx, cgy + 10, sx - 1.5, cgy + 7.6, sx + 1.5, cgy + 7.6, "F"), doc.setFontSize(7), doc.setTextColor(46, 125, 79), doc.text(`${Math.round(share).toLocaleString()} kg`, sx, cgy + 12.5, {
                align: "center"
            });
        }), doc.setFont("helvetica", "normal"), doc.setFontSize(6.2), doc.setTextColor(90, 100, 114), doc.text(
            `each truck rated >= ${Math.round(r.p.item.kg * FORK_TANDEM_SHARE).toLocaleString()} kg`,
            faceX + lw / 2,
            cgy + 15, {
                align: "center"
            }
        );
    } else {
        doc.setDrawColor(col[0], col[1], col[2]), doc.setLineWidth(1.1), doc.line(cgx, cgy + 2, cgx, cgy + 9), doc.setFillColor(col[0], col[1], col[2]), doc.triangle(cgx, cgy + 11, cgx - 1.5, cgy + 8.6, cgx + 1.5, cgy + 8.6, "F"), doc.setFontSize(7), doc.setTextColor(col[0], col[1], col[2]), doc.text(`${Math.round(r.p.item.kg).toLocaleString()} kg`, cgx + 2, cgy + 8);
        const dy = Math.max(y0 + 9, ly - 6);
        doc.setDrawColor(122, 27, 18), doc.setLineWidth(0.5), doc.line(faceX, dy, cgx, dy), doc.setFillColor(122, 27, 18), doc.triangle(cgx, dy, cgx - 1.6, dy - 0.9, cgx - 1.6, dy + 0.9, "F"), doc.setLineWidth(0.25), doc.line(faceX, dy - 1.4, faceX, dy + 1.4), doc.setFontSize(7), doc.setFont("helvetica", "bold"), doc.setTextColor(122, 27, 18), doc.text(`actual load centre ${Math.round(r.lcActual)} mm`, (faceX + cgx) / 2, dy - 1.8, {
            align: "center"
        });
        const rx = faceX + t.lc * sc,
            dy2 = dy + 3.4;
        doc.setDrawColor(46, 125, 79), doc.setLineWidth(0.45), doc.line(faceX, dy2, rx, dy2), doc.line(rx, dy2 - 1.2, rx, dy2 + 1.2), doc.setTextColor(46, 125, 79), doc.setFontSize(6.5), doc.text(`rated ${t.lc} mm`, (faceX + rx) / 2, dy2 + 3, {
            align: "center"
        });
    }
    doc.setFont("helvetica", "normal"), doc.setFontSize(6), doc.setTextColor(90, 100, 114), doc.text(`forks ${t.fork} mm${tandem ? " each" : ""}`, faceX + (tandem ? lw : t.fork * sc) / 2, gy + 3.4, {
        align: "center"
    });
    const gx0 = x0 + bw * 0.71,
        gy0 = y0 + 11,
        gw = bw * 0.26,
        gh = bh * 0.42,
        maxLC = Math.max(1600, r.lcActual * 1.35),
        CX = (lc) => gx0 + lc / maxLC * gw,
        CY = (kg) => gy0 + gh - kg / t.cap * gh,
        dcap = (lc) => Math.min(t.cap, t.cap * (FORK_AXLE_TO_FACE + t.lc) / (FORK_AXLE_TO_FACE + lc));
    doc.setFillColor(255, 255, 255), doc.setDrawColor(201, 194, 180), doc.setLineWidth(0.4), doc.rect(gx0 - 5, gy0 - 6, gw + 10, gh + 14, "FD"), doc.setFont("helvetica", "bold"), doc.setFontSize(6.5), doc.setTextColor(27, 36, 48), doc.text(`Capacity degradation - ${t.name}`, gx0 - 4, gy0 - 2.4), doc.setDrawColor(90, 100, 114), doc.setLineWidth(0.3), doc.line(gx0, gy0 + gh, gx0 + gw, gy0 + gh), doc.line(gx0, gy0, gx0, gy0 + gh), doc.setDrawColor(27, 36, 48), doc.setLineWidth(0.5);
    let pv = null;
    for (let lc = 200; lc <= maxLC; lc += 40) {
        const pt = [CX(lc), CY(dcap(lc))];
        pv && doc.line(pv[0], pv[1], pt[0], pt[1]), pv = pt;
    }
    return doc.setDrawColor(col[0], col[1], col[2]), doc.setLineWidth(0.4), doc.setLineDashPattern([1, 0.8], 0), doc.line(CX(r.lcActual), gy0, CX(r.lcActual), gy0 + gh), doc.setLineDashPattern([], 0), doc.setFillColor(col[0], col[1], col[2]), doc.circle(CX(r.lcActual), CY(Math.min(t.cap, r.capAt)), 1, "F"), doc.setFont("helvetica", "normal"), doc.setFontSize(5.8), doc.setTextColor(90, 100, 114), doc.text(`load centre (mm) - dot = ${Math.round(r.capAt).toLocaleString()} kg`, gx0 - 4, gy0 + gh + 4), r.advice && (doc.setFont("helvetica", "bold"), doc.setFontSize(7), doc.setTextColor(27, 36, 48), doc.splitTextToSize(r.advice.replace(/[^\x20-\x7E]/g, ""), bw).slice(0, 2).forEach((ln, i) => doc.text(ln, x0, y0 + bh - 4 + i * 3.6))), bh;
}

function modelGrid(model) {
    const c = model && model.chart;
    if (!c || c.kind === "curve") return null;
    if (c._grid) return c._grid;
    const g = {};
    return c.booms.forEach((b) => g[b] = {}), c.rows.forEach(([r, c0, vals]) => vals.forEach((v, i) => g[c.booms[c0 + i]][r] = v)), c._grid = g;
}

function curveCapAt(model, radiusM) {
    const c = model && model.chart && model.chart.curve;
    if (!c || !c.length || radiusM < c[0][0] - 1e-9 || radiusM > c[c.length - 1][0] + 1e-9) return null;
    for (let i = 0; i < c.length; i++) {
        if (Math.abs(c[i][0] - radiusM) < 1e-9) return c[i][1] * 1e3;
        if (c[i][0] > radiusM) {
            const [a, ca] = c[i - 1], [b, cb] = c[i];
            return (ca + (cb - ca) * (radiusM - a) / (b - a)) * 1e3;
        }
    }
    return null;
}

function modelCapAt(model, radiusM, boomM) {
    const g = modelGrid(model);
    if (!g || !g[boomM]) return null;
    const col = g[boomM],
        rs = Object.keys(col).map(Number).sort((a, b) => a - b);
    if (!rs.length || radiusM < rs[0] - 1e-9 || radiusM > rs[rs.length - 1] + 1e-9) return null;
    for (let i = 0; i < rs.length; i++) {
        if (Math.abs(rs[i] - radiusM) < 1e-9) return col[rs[i]] * 1e3;
        if (rs[i] > radiusM) {
            const a = rs[i - 1],
                b = rs[i];
            return (col[a] + (col[b] - col[a]) * (radiusM - a) / (b - a)) * 1e3;
        }
    }
    return null;
}

function modelBestCapAt(model, radiusM) {
    if (model && model.chart && model.chart.kind === "curve")
        return {
            cap: curveCapAt(model, radiusM),
            boom: null
        };
    const g = modelGrid(model);
    if (!g) return {
        cap: null,
        boom: null
    };
    let best = null,
        boom = null;
    return Object.keys(g).forEach((b) => {
        const v = modelCapAt(model, radiusM, +b);
        v != null && (best == null || v > best) && (best = v, boom = +b);
    }), {
        cap: best,
        boom
    };
}

function windDerate(windMs) {
    const v = Math.max(0, +windMs || 0);
    return v <= WIND_STD_MS ? {
        factor: 1,
        stop: !1,
        v
    } : {
        factor: Math.max(0.3, Math.pow(WIND_STD_MS / v, 2)),
        stop: v >= WIND_STOP_MS,
        v
    };
}

function varioBaseDerate(pct) {
    const f = Math.min(100, Math.max(30, +pct || 100)) / 100;
    return f >= 0.999 ? 1 : Math.max(0.45, Math.pow(f, 1.35));
}

function varioBallastFactor(mode) {
    return mode === "reduced" ? 0.88 : mode === "extended" ? 1.08 : 1;
}

function rigConfig(state) {
    const w = windDerate(state && state.windMs),
        vb = varioBaseDerate(state && state.varioBasePct),
        bal = varioBallastFactor(state && state.varioBallast),
        factor = w.factor * vb * bal;
    return {
        wind: w,
        varioBase: vb,
        varioBallast: bal,
        factor,
        parts: [
            `wind ${w.v.toFixed(1)} m/s x${w.factor.toFixed(2)}`,
            `VarioBase ${Math.round(state && state.varioBasePct || 100)}% x${vb.toFixed(2)}`,
            `VarioBallast ${state && state.varioBallast || "standard"} x${bal.toFixed(2)}`
        ]
    };
}

function craneEnvelopeSVG(eng, craneId, standoffM, targetDeg) {
    const cc = craneCapacity(eng, craneId, standoffM);
    if (!cc.relevant || !cc.rows.length) return null;
    const acc = craneAccess(eng, targetDeg),
        heaviest = cc.rows.reduce((a, b) => b.gross > a.gross ? b : a),
        rig = (acc.rows || []).find((r) => r.p === heaviest.p) || (acc.rows || [])[0],
        crane = cc.crane,
        chart = crane.chart,
        maxR = chart[chart.length - 1][0],
        maxCap = chart[0][1],
        W = 15e3,
        H = 9200,
        e = (v) => v.toFixed(1),
        gy = 7400,
        px = 1500,
        mPerPx = maxR / (W - px - 900),
        X = (m) => px + m / mPerPx,
        capH = 3400,
        Y = (kg) => gy - kg / maxCap * capH;
    let out = `<svg xmlns="http://www.w3.org/2000/svg" width="${e(W)}" height="${e(H)}" viewBox="0 0 ${e(W)} ${e(H)}" font-family="Arial, Helvetica, sans-serif">`;
    out += `<rect width="${e(W)}" height="${e(H)}" fill="#F7F4EC"/>`;
    let curveTop = "",
        curveSafe = "";
    for (let i = 0; i < chart.length; i++) {
        const [r, q] = chart[i];
        curveTop += `${i ? "L" : "M"}${e(X(r))} ${e(Y(q))} `, curveSafe += `${i ? "L" : "M"}${e(X(r))} ${e(Y(q * CRANE_UTIL_LIMIT))} `;
    }
    const areaSafe = curveSafe + `L${e(X(maxR))} ${e(gy)} L${e(X(chart[0][0]))} ${e(gy)} Z`,
        areaWarn = curveTop + `L${e(X(maxR))} ${e(gy)} L${e(X(chart[0][0]))} ${e(gy)} Z`;
    out += `<path d="${areaWarn}" fill="#E8B04B" fill-opacity="0.35"/>`, out += `<path d="${areaSafe}" fill="#3F8F5B" fill-opacity="0.30"/>`, out += `<path d="${curveTop}" fill="none" stroke="#B3362B" stroke-width="26"/>`, out += `<path d="${curveSafe}" fill="none" stroke="#2E7D4F" stroke-width="22" stroke-dasharray="90 60"/>`, out += `<text x="${e(X(maxR * 0.52))}" y="${e(Y(maxCap * 0.5))}" font-size="200" font-weight="700" fill="#B3362B">Chart capacity</text>`, out += `<text x="${e(X(maxR * 0.52))}" y="${e(Y(maxCap * 0.5) + 240)}" font-size="185" font-weight="700" fill="#2E7D4F">Safe working limit (${Math.round(CRANE_UTIL_LIMIT * 100)}%)</text>`, out += `<line x1="0" y1="${e(gy)}" x2="${e(W)}" y2="${e(gy)}" stroke="#3A3A3A" stroke-width="34"/>`, out += `<rect x="${e(px - 780)}" y="${e(gy - 900)}" width="1560" height="900" rx="70" fill="#1B2430"/>`, out += `<line x1="${e(px)}" y1="${e(gy - 190)}" x2="${e(X((crane.outrigger || 0) / 2))}" y2="${e(gy - 190)}" stroke="#1B2430" stroke-width="90"/>`, out += `<rect x="${e(X((crane.outrigger || 0) / 2) - 170)}" y="${e(gy - 240)}" width="340" height="240" fill="#4A5666"/>`, out += `<rect x="${e(px - 170)}" y="${e(gy - 240)}" width="340" height="240" fill="#4A5666"/>`, out += `<text x="${e((px + X((crane.outrigger || 0) / 2)) / 2)}" y="${e(gy + 620)}" text-anchor="middle" font-size="165" fill="#5A6472">outrigger half-span ${((crane.outrigger || 0) / 2).toFixed(1)} m</text>`, out += `<text x="${e(px)}" y="${e(gy + 340)}" text-anchor="middle" font-size="205" font-weight="700" fill="#1B2430">${crane.name}</text>`;
    const outHalfS = (crane.outrigger || 0) / 2,
        padXs = X(outHalfS),
        contX = X(outHalfS + standoffM),
        contW = eng.spec.W / 1e3 / mPerPx,
        contH = 900;
    out += `<rect x="${e(contX)}" y="${e(gy - contH)}" width="${e(contW)}" height="${e(contH)}" fill="none" stroke="#7C8CA0" stroke-width="26" stroke-dasharray="70 50"/>`, out += `<text x="${e(contX + contW / 2)}" y="${e(gy + 340)}" text-anchor="middle" font-size="190" fill="#5A6472">${eng.spec.code} deck</text>`;
    const cgX = X(heaviest.radius),
        unitW = Math.max(420, heaviest.p.w / 1e3 / mPerPx),
        unitH = 620;
    out += `<rect x="${e(cgX - unitW / 2)}" y="${e(gy - contH - unitH)}" width="${e(unitW)}" height="${e(unitH)}" fill="#E8600A" stroke="#8A3B06" stroke-width="22"/>`;
    const unitTop = gy - contH - unitH,
        hookY = rig ? unitTop - rig.hookH / 1e3 / mPerPx : unitTop - 1200,
        boomTopY = Math.min(hookY - 500, gy - capH - 500),
        boomAngle = Math.atan2(gy - 900 - boomTopY, cgX - px) * 180 / Math.PI;
    out += `<line x1="${e(px)}" y1="${e(gy - 900)}" x2="${e(cgX)}" y2="${e(boomTopY)}" stroke="#1B2430" stroke-width="60" stroke-linecap="round"/>`, out += `<line x1="${e(cgX)}" y1="${e(boomTopY)}" x2="${e(cgX)}" y2="${e(hookY)}" stroke="#1B2430" stroke-width="18"/>`, out += `<circle cx="${e(cgX)}" cy="${e(hookY)}" r="80" fill="#1B2430"/>`, out += `<text x="${e((px + cgX) / 2 - 300)}" y="${e((gy - 900 + boomTopY) / 2 - 120)}" font-size="185" font-weight="700" fill="#1B2430" transform="rotate(${e(-boomAngle)} ${e((px + cgX) / 2 - 300)} ${e((gy - 900 + boomTopY) / 2 - 120)})">boom ${e(boomAngle)} deg</text>`;
    const legFlat = rig && rig.targetDeg <= SLING_MIN_DEG + 5,
        legCol = legFlat ? "#B3362B" : "#2E7D4F";
    out += `<line x1="${e(cgX)}" y1="${e(hookY)}" x2="${e(cgX - unitW / 2)}" y2="${e(unitTop)}" stroke="${legCol}" stroke-width="26"/>`, out += `<line x1="${e(cgX)}" y1="${e(hookY)}" x2="${e(cgX + unitW / 2)}" y2="${e(unitTop)}" stroke="${legCol}" stroke-width="26"/>`, rig && (out += `<text x="${e(cgX + unitW / 2 + 160)}" y="${e(unitTop - 160)}" font-size="185" font-weight="700" fill="${legCol}">sling ${Math.round(rig.targetDeg)} deg${legFlat ? " - AT LIMIT" : ""}</text>`), rig && (out += `<text x="${e(cgX + 160)}" y="${e((hookY + unitTop) / 2)}" font-size="175" fill="#3A3A3A">hook ${(rig.hookH / 1e3).toFixed(1)} m</text>`);
    const cgY = gy - contH - unitH / 2;
    out += `<line x1="${e(cgX - 300)}" y1="${e(cgY)}" x2="${e(cgX + 300)}" y2="${e(cgY)}" stroke="#7A1B12" stroke-width="24"/>`, out += `<line x1="${e(cgX)}" y1="${e(cgY - 300)}" x2="${e(cgX)}" y2="${e(cgY + 300)}" stroke="#7A1B12" stroke-width="24"/>`, out += `<circle cx="${e(cgX)}" cy="${e(cgY)}" r="190" fill="none" stroke="#7A1B12" stroke-width="24"/>`, out += `<text x="${e(cgX + 260)}" y="${e(cgY - 260)}" font-size="190" font-weight="700" fill="#7A1B12">CG</text>`;
    const ry = gy + 760;
    out += `<line x1="${e(px)}" y1="${e(ry)}" x2="${e(cgX)}" y2="${e(ry)}" stroke="#7A1B12" stroke-width="30" marker-end="url(#ah)"/>`, out += `<line x1="${e(px)}" y1="${e(gy)}" x2="${e(px)}" y2="${e(ry + 130)}" stroke="#9AA3AE" stroke-width="16"/>`, out += `<line x1="${e(cgX)}" y1="${e(cgY)}" x2="${e(cgX)}" y2="${e(ry + 130)}" stroke="#9AA3AE" stroke-width="16" stroke-dasharray="60 50"/>`, out += `<text x="${e((px + cgX) / 2)}" y="${e(ry - 110)}" text-anchor="middle" font-size="215" font-weight="700" fill="#7A1B12">working radius ${heaviest.radius.toFixed(1)} m</text>`;
    const opY = Y(heaviest.gross),
        inSafe = heaviest.ok;
    out += `<line x1="${e(cgX)}" y1="${e(opY)}" x2="${e(cgX)}" y2="${e(gy)}" stroke="${inSafe ? "#2E7D4F" : "#B3362B"}" stroke-width="24" stroke-dasharray="80 55"/>`, out += `<circle cx="${e(cgX)}" cy="${e(opY)}" r="150" fill="${inSafe ? "#2E7D4F" : "#B3362B"}"/>`, out += `<text x="${e(cgX + 240)}" y="${e(opY - 90)}" font-size="200" font-weight="700" fill="${inSafe ? "#2E7D4F" : "#B3362B"}">${(heaviest.gross / 1e3).toFixed(1)} t gross - ${(heaviest.util * 100).toFixed(0)}% of chart</text>`, inSafe || (out += `<text x="${e(cgX + 240)}" y="${e(opY + 190)}" font-size="200" font-weight="700" fill="#B3362B">HIGH-RISK LIFT${heaviest.upgrade ? ` - use ${heaviest.upgrade.name}` : " - no crane in list covers it"}</text>`), out += `<text x="120" y="${e(gy - capH - 120)}" font-size="185" fill="#5A6472">capacity (t)</text>`;
    for (const [r, q] of chart)
        out += `<line x1="${e(X(r))}" y1="${e(gy)}" x2="${e(X(r))}" y2="${e(gy + 90)}" stroke="#9AA3AE" stroke-width="14"/><text x="${e(X(r))}" y="${e(gy + 300)}" text-anchor="middle" font-size="165" fill="#5A6472">${r}m</text>`;
    return out += '<defs><marker id="ah" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7A1B12"/></marker></defs>', out + "</svg>";
}
const DECK_CHASSIS = 1700,
    DECK_LOWBED = 1e3,
    DECK_STEP_MAX = 300,
    ISO_AXLE_KG = 5460,
    ISO_WHEEL_CM2 = 284,
    AXLE_TRUCK_SHARE = 0.4;

function deckHeightFor(spec, deckClosed, deckOpen) {
    return spec.fam === "FR" || spec.fam === "OT" ? deckOpen == null ? DECK_LOWBED : deckOpen : deckClosed == null ? DECK_CHASSIS : deckClosed;
}

function deckAccess(spec, deckMm) {
    const ok = deckMm <= DECK_STEP_MAX;
    return {
        deckMm,
        ok,
        why: ok ? null : `the floor stands ${deckMm} mm above ground, so no truck can drive into it. Ground the container, back it onto a dock level with the floor, or bridge with a rated dock leveller / ramp before any truck enters.`
    };
}

function floorAxleCheck(truck, loadKg) {
    const axle = loadKg + (truck.serv || truck.cap * 1.5) * AXLE_TRUCK_SHARE;
    return {
        axle,
        limit: ISO_AXLE_KG,
        ok: axle <= ISO_AXLE_KG,
        over: Math.max(0, axle - ISO_AXLE_KG)
    };
}

function pushAnalysis(spec, p, ladder, deckMm) {
    const da = deckAccess(spec, deckMm == null ? DECK_CHASSIS : deckMm),
        kg = p.item.kg,
        pushSkate = Math.round(kg * ROLL_SKATE),
        pushPipe = Math.round(kg * ROLL_PIPE),
        entrants = da.ok ? ladder.filter((f) => forkliftAccess(spec, f).ok) : [],
        behind = entrants.filter((f) => f.width + 2 * FORK_SIDE_CLEAR <= spec.W),
        carriers = entrants.filter((f) => floorAxleCheck(f, kg).ok && kg <= f.cap),
        pushers = behind.filter((f) => (f.serv || f.cap * 1.5) * 0.35 >= pushSkate),
        best = pushers[0] || null;
    return {
        kg,
        deck: da,
        pushSkate,
        pushPipe,
        entrants,
        carriers,
        pushers,
        best,
        canCarry: carriers.length > 0,
        reachMm: best ? Math.max(0, spec.L - p.l - (2200 + best.cap / 1e3 * 170)) : 0
    };
}

function tandemLPlan(p, tEnd, tSide, cgFracX, cgFracY) {
    const W = p.item.kg,
        L = p.l,
        Wd = p.w,
        cgx = L * (cgFracX == null ? 0.5 : cgFracX),
        cgy = Wd * (cgFracY == null ? 0.5 : cgFracY),
        penA = Math.min(tEnd.fork, L * 0.9),
        penB = Math.min(tSide.fork, Wd * 0.9),
        spreadA = Math.min(Wd * 0.6, 1e3),
        spreadB = Math.min(L * 0.6, 1e3),
        A = [penA / 2, Wd / 2],
        capOf = (f, lc) => Math.min(f.cap, f.cap * (FORK_AXLE_TO_FACE + f.lc) / (FORK_AXLE_TO_FACE + lc)),
        lcEnd = cgx,
        lcSide = cgy,
        capA = capOf(tEnd, lcEnd),
        capB = capOf(tSide, lcSide),
        at = (pB) => {
            const B = [pB, penB / 2],
                dx = B[0] - A[0],
                dy = B[1] - A[1],
                len = Math.hypot(dx, dy) || 1,
                ux = dx / len,
                uy = dy / len,
                sRaw = ((cgx - A[0]) * ux + (cgy - A[1]) * uy) / len,
                sc2 = Math.max(0, Math.min(1, sRaw)),
                off = Math.abs((cgx - A[0]) * uy - (cgy - A[1]) * ux);
            return {
                pB,
                B,
                s: sc2,
                RA: W * (1 - sc2),
                RB: W * sc2,
                off,
                len
            };
        };
    let best = null;
    for (let pB = spreadB / 2; pB <= L - spreadB / 2; pB += 25) {
        const r = at(pB),
            okA = r.RA <= capA * FORK_UTIL_LIMIT,
            okB = r.RB <= capB * FORK_UTIL_LIMIT;
        if (!okA || !okB) continue;
        const score = r.off;
        (!best || score < best.off) && (best = Object.assign({
            okA,
            okB
        }, r));
    }
    const fallback = best || Object.assign({
            okA: !1,
            okB: !1
        }, at(L * 0.75)),
        tiltLimit = Math.min(L, Wd) * 0.15;
    return {
        kind: "L",
        tEnd,
        tSide,
        W,
        L,
        Wd,
        cgx,
        cgy,
        penA,
        penB,
        spreadA,
        spreadB,
        A,
        B: fallback.B,
        pB: fallback.pB,
        RA: fallback.RA,
        RB: fallback.RB,
        capA,
        capB,
        lcEnd,
        lcSide,
        utilA: fallback.RA / capA,
        utilB: fallback.RB / capB,
        okA: fallback.RA <= capA,
        okB: fallback.RB <= capB,
        ok: best != null,
        off: fallback.off,
        tiltLimit,
        tiltOk: fallback.off <= tiltLimit
    };
}

function bestTandemLPair(p, cgFracX, cgFracY) {
    const ld = [...FORKLIFTS].sort((a, b) => a.cap - b.cap);
    let best = null;
    for (let i = 0; i < ld.length; i++)
        for (let j = 0; j < ld.length; j++) {
            const pl = tandemLPlan(p, ld[i], ld[j], cgFracX, cgFracY);
            if (!pl.ok || !pl.tiltOk) continue;
            const cost = ld[i].cap + ld[j].cap;
            (!best || cost < best.cost) && (best = {
                plan: pl,
                cost
            });
        }
    return best ? best.plan : null;
}

function chooseTandem(p, cgFracX, cgFracY, mode) {
    const Lp = bestTandemLPair(p, cgFracX, cgFracY),
        Sp = bestTandemPair(p, cgFracX),
        capL = Lp ? Lp.tEnd.cap + Lp.tSide.cap : null,
        capS = Sp ? Sp.tA.cap + Sp.tB.cap : null,
        lcEnd = p.l / 2,
        lcSide = p.w / 2,
        ratio = Math.max(p.l, p.w) / Math.min(p.l, p.w),
        m = mode || "L",
        pack = (kind, plan, reason) => ({
            kind,
            plan,
            other: kind === "L" ? Sp : Lp,
            reason,
            capL,
            capS
        });
    if (m === "L")
        return Lp ? pack(
            "L",
            Lp,
            `END + SIDE, as standing practice. ${Lp.tEnd.name} on the end face at a ${Math.round(lcEnd)} mm load centre, ${Lp.tSide.name} on the side face at ${Math.round(lcSide)} mm.${capS != null && capS < capL ? ` Note the cost of this arrangement: the end truck's forks run the length of the crate, so it works at ${Math.round(lcEnd)} mm and needs ${(capL / 1e3).toFixed(1)} t of combined capacity, against ${(capS / 1e3).toFixed(1)} t if both trucks went on the long side. On a crate this shape (${ratio.toFixed(2)}:1) that is the price of keeping the end position - decide it on access, not on this number.` : ""}`
        ) : pack(
            "S",
            Sp,
            `END + SIDE was requested but cannot be made to work on this crate: at ${Math.round(lcEnd)} mm the end truck carries almost nothing, and no pair in the list covers the rest within capacity and tilt limits. Falling back to both trucks on the long side.`
        );
    if (m === "S")
        return Sp ? pack(
            "S",
            Sp,
            `BOTH ON THE LONG SIDE, as requested. Both trucks work at a ${Math.round(lcSide)} mm load centre.${capL != null && capL < capS ? ` End+side would need less machine here (${(capL / 1e3).toFixed(1)} t against ${(capS / 1e3).toFixed(1)} t).` : ""} This needs both trucks to reach the same face - confirm the yard allows it.`
        ) : pack("L", Lp, "BOTH ON THE LONG SIDE was requested but no pair fits that face without colliding or overloading. Falling back to end + side.");
    if (Lp == null && Sp == null) return null;
    const useL = capS == null || capL != null && capL <= capS;
    return pack(
        useL ? "L" : "S",
        useL ? Lp : Sp,
        useL ? `END + SIDE chosen automatically. Crate ${Math.round(p.l)} x ${Math.round(p.w)} mm (${ratio.toFixed(2)}:1); end truck ${Math.round(lcEnd)} mm load centre against the side truck's ${Math.round(lcSide)} mm, ${(capL / 1e3).toFixed(1)} t combined${capS != null ? ` against ${(capS / 1e3).toFixed(1)} t for the long-side arrangement` : ""}.` : `BOTH ON THE LONG SIDE chosen automatically, on machine capacity alone: ${(capS / 1e3).toFixed(1)} t combined against ${(capL / 1e3).toFixed(1)} t for end+side, because the end truck would work at a ${Math.round(lcEnd)} mm load centre. If your yard only gives you the rear and one side, override this to end+side - the margin here is ${Math.abs((capL - capS) / 1e3).toFixed(1)} t and access should decide it, not capacity.`
    );
}

function tandemLSVG(tp, p) {
    if (!tp) return null;
    const W = 11500,
        H = 9200,
        e = (v) => v.toFixed(1),
        bodyOf = (f) => f.width * 1.65,
        padL = 2900,
        padR = 1100,
        padT = 1250,
        padB = 3100,
        sc = Math.min((W - padL - padR) / tp.L, (H - padT - padB) / tp.Wd),
        bodyEnd = Math.min(bodyOf(tp.tEnd) * sc, padL - 500),
        bodySide = Math.min(bodyOf(tp.tSide) * sc, padB - 1700),
        cw = tp.L * sc,
        cd = tp.Wd * sc,
        x0 = padL,
        y0 = padT,
        X = (mm) => x0 + mm * sc,
        Y = (mm) => y0 + mm * sc;
    let o = `<svg xmlns="http://www.w3.org/2000/svg" width="${e(W)}" height="${e(H)}" viewBox="0 0 ${e(W)} ${e(H)}" font-family="Arial, Helvetica, sans-serif">`;
    o += `<rect width="${e(W)}" height="${e(H)}" fill="#F7F4EC"/>`, o += '<text x="300" y="560" font-size="245" font-weight="700" fill="#1B2430">PLAN VIEW - one truck at the END, one at the SIDE</text>', o += `<text x="300" y="850" font-size="180" fill="#5A6472">${tp.tEnd.name} on the end face  +  ${tp.tSide.name} on the side face  -  ${Math.round(tp.W).toLocaleString()} kg  -  view from above</text>`, o += `<rect x="${e(X(-300))}" y="${e(Y(-260))}" width="${e(cw + 600 * sc)}" height="${e(cd + 520 * sc)}" fill="none" stroke="#B9B2A2" stroke-width="24" stroke-dasharray="110 85"/>`, o += `<rect x="${e(X(0))}" y="${e(Y(0))}" width="${e(cw)}" height="${e(cd)}" fill="#E8600A" fill-opacity="0.78" stroke="#1B2430" stroke-width="28"/>`, o += `<text x="${e(X(tp.L / 2))}" y="${e(Y(tp.Wd / 2) - 360)}" text-anchor="middle" font-size="205" font-weight="700" fill="#1B2430">${p.item.name} #${p.n}</text>`, o += `<text x="${e(X(tp.L / 2))}" y="${e(Y(tp.Wd / 2) + 520)}" text-anchor="middle" font-size="180" fill="#1B2430">${Math.round(tp.L)} x ${Math.round(tp.Wd)} mm</text>`, o += `<rect x="${e(X(0))}" y="${e(Y(tp.Wd / 2 - tp.spreadA / 2))}" width="${e(tp.penA * sc)}" height="${e(tp.spreadA * sc)}" fill="#1B2430" fill-opacity="0.16" stroke="#1B2430" stroke-width="14" stroke-dasharray="70 55"/>`, o += `<rect x="${e(X(tp.pB - tp.spreadB / 2))}" y="${e(Y(0))}" width="${e(tp.spreadB * sc)}" height="${e(tp.penB * sc)}" fill="#1B2430" fill-opacity="0.16" stroke="#1B2430" stroke-width="14" stroke-dasharray="70 55"/>`;
    const ax = X(tp.A[0]),
        ay = Y(tp.A[1]),
        bx = X(tp.B[0]),
        by = Y(tp.B[1]),
        gx = X(tp.cgx),
        gy2 = Y(tp.cgy);
    o += `<line x1="${e(ax)}" y1="${e(ay)}" x2="${e(bx)}" y2="${e(by)}" stroke="#2E7D4F" stroke-width="26" stroke-dasharray="120 80"/>`, o += `<circle cx="${e(ax)}" cy="${e(ay)}" r="110" fill="#2E7D4F"/><circle cx="${e(bx)}" cy="${e(by)}" r="110" fill="#2E7D4F"/>`, o += `<line x1="${e(gx - 250)}" y1="${e(gy2)}" x2="${e(gx + 250)}" y2="${e(gy2)}" stroke="#7A1B12" stroke-width="30"/>`, o += `<line x1="${e(gx)}" y1="${e(gy2 - 250)}" x2="${e(gx)}" y2="${e(gy2 + 250)}" stroke="#7A1B12" stroke-width="30"/>`, o += `<circle cx="${e(gx)}" cy="${e(gy2)}" r="180" fill="none" stroke="#7A1B12" stroke-width="30"/>`, o += `<text x="${e(gx + 250)}" y="${e(gy2 - 300)}" font-size="175" font-weight="700" fill="#7A1B12">CG</text>`;
    const tiltCol = tp.tiltOk ? "#2E7D4F" : "#B3362B";
    o += `<text x="${e((ax + bx) / 2)}" y="${e((ay + by) / 2 - 200)}" text-anchor="middle" font-size="170" font-weight="700" fill="${tiltCol}">support line - CG sits ${Math.round(tp.off)} mm off it (limit ${Math.round(tp.tiltLimit)})</text>`;
    {
        const bw = tp.tEnd.width * sc,
            bl = bodyEnd,
            cy = Y(tp.Wd / 2),
            col = tp.okA ? "#2E7D4F" : "#B3362B";
        o += `<rect x="${e(X(0) - 170 - bl)}" y="${e(cy - bw / 2)}" width="${e(bl)}" height="${e(bw)}" rx="70" fill="#1B2430"/>`, o += `<rect x="${e(X(0) - 170)}" y="${e(cy - bw / 2)}" width="130" height="${e(bw)}" fill="#1B2430"/>`, [-1, 1].forEach((sg) => {
            o += `<rect x="${e(X(0))}" y="${e(cy + sg * tp.spreadA * sc * 0.5 - 60)}" width="${e(tp.penA * sc)}" height="120" fill="#1B2430"/>`;
        }), o += `<text x="${e(X(0) - 170 - bl / 2)}" y="${e(cy - bw / 2 - 200)}" text-anchor="middle" font-size="195" font-weight="700" fill="#1B2430">${tp.tEnd.name}</text>`, o += `<text x="${e(X(0) - 170 - bl / 2)}" y="${e(cy + bw / 2 + 330)}" text-anchor="middle" font-size="215" font-weight="700" fill="${col}">${Math.round(tp.RA).toLocaleString()} kg</text>`, o += `<text x="${e(X(0) - 170 - bl / 2)}" y="${e(cy + bw / 2 + 560)}" text-anchor="middle" font-size="165" fill="${col}">${(tp.utilA * 100).toFixed(0)}% at LC ${Math.round(tp.lcEnd)} mm</text>`;
    } {
        const bw = tp.tSide.width * sc,
            bl = bodySide,
            cx = X(tp.pB),
            col = tp.okB ? "#2E7D4F" : "#B3362B",
            topY = Y(tp.Wd) + 170;
        o += `<rect x="${e(cx - bw / 2)}" y="${e(topY)}" width="${e(bw)}" height="130" fill="#1B2430"/>`, o += `<rect x="${e(cx - bw / 2)}" y="${e(topY + 130)}" width="${e(bw)}" height="${e(bl)}" rx="70" fill="#1B2430"/>`, [-1, 1].forEach((sg) => {
            o += `<rect x="${e(cx + sg * tp.spreadB * sc * 0.5 - 60)}" y="${e(Y(tp.Wd) - tp.penB * sc)}" width="120" height="${e(tp.penB * sc + 170)}" fill="#1B2430"/>`;
        }), o += `<text x="${e(cx)}" y="${e(topY + bl + 400)}" text-anchor="middle" font-size="195" font-weight="700" fill="#1B2430">${tp.tSide.name}</text>`, o += `<text x="${e(cx)}" y="${e(topY + bl + 640)}" text-anchor="middle" font-size="215" font-weight="700" fill="${col}">${Math.round(tp.RB).toLocaleString()} kg</text>`, o += `<text x="${e(cx)}" y="${e(topY + bl + 860)}" text-anchor="middle" font-size="165" fill="${col}">${(tp.utilB * 100).toFixed(0)}% at LC ${Math.round(tp.lcSide)} mm</text>`, o += `<line x1="${e(cx)}" y1="${e(Y(tp.Wd))}" x2="${e(cx)}" y2="${e(Y(tp.Wd) + 150)}" stroke="${col}" stroke-width="34"/>`, o += `<text x="${e(cx)}" y="${e(Y(tp.Wd) + 620)}" text-anchor="middle" font-size="165" fill="#5A6472">station ${(tp.pB / 1e3).toFixed(2)} m from the end</text>`;
    }
    return o += `<text x="300" y="${e(H - 200)}" font-size="175" font-weight="700" fill="${tiltCol}">${tp.tiltOk ? "The two fork centroids and the CG lie close to one line - the crate will lift level." : "WARNING: the CG is well off the line between the two fork centroids. The crate will try to tilt about that line - move the side truck along the crate until the offset closes."}</text>`, o += `<text x="300" y="${e(H - 440)}" font-size="165" fill="#5A6472">Each truck's load centre is measured along its OWN fork direction - they are not the same number. Truck widths to scale; body length schematic.</text>`, o + "</svg>";
}

function tandemPlanSVG(tp, p) {
    if (!tp) return null;
    const W = 11e3,
        H = 9600,
        e = (v) => v.toFixed(1),
        span = tp.span,
        depth = tp.depth,
        bodyOf = (f) => f.width * 1.65,
        bodyMax = Math.max(bodyOf(tp.tA), bodyOf(tp.tB)),
        stag = tp.stagger ? bodyMax * 0.55 : 0,
        L = 700,
        R = 10300,
        sc = Math.min((R - L) / span, 6100 / (depth + bodyMax + stag)),
        cw = span * sc,
        cd = depth * sc,
        cx0 = (W - cw) / 2,
        cy0 = 1250,
        cy1 = cy0 + cd,
        cgx = cx0 + tp.cg * sc,
        cgy = cy0 + cd / 2;
    let o = `<svg xmlns="http://www.w3.org/2000/svg" width="${e(W)}" height="${e(H)}" viewBox="0 0 ${e(W)} ${e(H)}" font-family="Arial, Helvetica, sans-serif">`;
    o += `<rect width="${e(W)}" height="${e(H)}" fill="#F7F4EC"/>`, o += `<text x="${e(cx0)}" y="640" font-size="235" font-weight="700" fill="#1B2430">PLAN VIEW - tandem lift, both trucks forking the same face</text>`, o += `<text x="${e(cx0)}" y="920" font-size="180" fill="#5A6472">${tp.tA.name} + ${tp.tB.name}  -  ${Math.round(tp.W).toLocaleString()} kg  -  view from above</text>`, o += `<rect x="${e(cx0 - 260)}" y="${e(cy0 - 300)}" width="${e(cw + 520)}" height="${e(cd + 420)}" rx="60" fill="none" stroke="#B9B2A2" stroke-width="26" stroke-dasharray="120 90"/>`, o += `<text x="${e(cx0 + cw + 300)}" y="${e(cy0 - 360)}" font-size="165" fill="#8A8578">trailer bed</text>`, o += `<rect x="${e(cx0)}" y="${e(cy0)}" width="${e(cw)}" height="${e(cd)}" fill="#E8600A" fill-opacity="0.8" stroke="#1B2430" stroke-width="28"/>`, o += `<text x="${e(cx0 + cw / 2)}" y="${e(cy0 + cd / 2 - 260)}" text-anchor="middle" font-size="200" font-weight="700" fill="#1B2430">${p.item.name} #${p.n}</text>`, o += `<text x="${e(cx0 + cw / 2)}" y="${e(cy0 + cd / 2 + 460)}" text-anchor="middle" font-size="180" fill="#1B2430">${Math.round(span)} x ${Math.round(depth)} mm</text>`, o += `<line x1="${e(cgx - 260)}" y1="${e(cgy)}" x2="${e(cgx + 260)}" y2="${e(cgy)}" stroke="#7A1B12" stroke-width="30"/>`, o += `<line x1="${e(cgx)}" y1="${e(cgy - 260)}" x2="${e(cgx)}" y2="${e(cgy + 260)}" stroke="#7A1B12" stroke-width="30"/>`, o += `<circle cx="${e(cgx)}" cy="${e(cgy)}" r="185" fill="none" stroke="#7A1B12" stroke-width="30"/>`, o += `<line x1="${e(cgx)}" y1="${e(cy0)}" x2="${e(cgx)}" y2="${e(cy1 + 1650)}" stroke="#7A1B12" stroke-width="18" stroke-dasharray="90 70"/>`, o += `<text x="${e(cgx + 220)}" y="${e(cy0 - 90)}" font-size="175" font-weight="700" fill="#7A1B12">CG at ${(tp.cgFrac * 100).toFixed(0)}% of span</text>`, [
        [tp.xA, tp.tA, tp.RA, tp.utilA, tp.okA, 0],
        [tp.xB, tp.tB, tp.RB, tp.utilB, tp.okB, stag]
    ].forEach(([xm, tk, R2, u, okk, back]) => {
        const cx = cx0 + xm * sc,
            bw = tk.width * sc,
            bl = bodyOf(tk) * sc,
            fk = Math.min(tk.fork, depth * 0.92) * sc,
            col = okk ? "#2E7D4F" : "#B3362B",
            fy0 = cy1 - fk,
            bodyY = cy1 + 170 + back;
        [-1, 1].forEach((sg) => {
            o += `<rect x="${e(cx + sg * bw * 0.26 - 60)}" y="${e(fy0)}" width="120" height="${e(fk + 170 + back)}" fill="#1B2430"/>`;
        }), o += `<rect x="${e(cx - bw / 2)}" y="${e(bodyY)}" width="${e(bw)}" height="130" fill="#1B2430"/>`, o += `<rect x="${e(cx - bw / 2)}" y="${e(bodyY + 130)}" width="${e(bw)}" height="${e(bl)}" rx="70" fill="#1B2430"/>`, o += `<rect x="${e(cx - bw * 0.34)}" y="${e(bodyY + bl * 0.42)}" width="${e(bw * 0.68)}" height="${e(bl * 0.3)}" rx="50" fill="#39424F"/>`, [0.2, 0.82].forEach(
            (f) => [-1, 1].forEach((sg) => {
                o += `<rect x="${e(cx + sg * (bw / 2) - (sg > 0 ? 130 : 0))}" y="${e(bodyY + 130 + bl * f)}" width="130" height="${e(bl * 0.16)}" rx="30" fill="#39424F"/>`;
            })
        ), o += `<text x="${e(cx)}" y="${e(bodyY + bl + 460)}" text-anchor="middle" font-size="195" font-weight="700" fill="#1B2430">${tk.name}</text>`, o += `<text x="${e(cx)}" y="${e(bodyY + bl + 700)}" text-anchor="middle" font-size="215" font-weight="700" fill="${col}">${Math.round(R2).toLocaleString()} kg</text>`, o += `<text x="${e(cx)}" y="${e(bodyY + bl + 920)}" text-anchor="middle" font-size="170" fill="${col}">${(u * 100).toFixed(0)}% of its capacity here</text>`, o += `<line x1="${e(cx)}" y1="${e(cy1)}" x2="${e(cx)}" y2="${e(cy1 + 150)}" stroke="${col}" stroke-width="34"/>`;
    });
    const ax = cx0 + tp.xA * sc,
        bx = cx0 + tp.xB * sc,
        dy = cy1 + 1450;
    o += `<line x1="${e(ax)}" y1="${e(dy)}" x2="${e(bx)}" y2="${e(dy)}" stroke="#1B2430" stroke-width="24" marker-start="url(#pl)" marker-end="url(#pr)"/>`, o += `<text x="${e((ax + bx) / 2)}" y="${e(dy - 120)}" text-anchor="middle" font-size="190" font-weight="700" fill="#1B2430">fork stations ${(tp.spanUsed / 1e3).toFixed(2)} m apart</text>`;
    const lx = cx0 + cw + 420;
    return o += `<line x1="${e(lx)}" y1="${e(cy1)}" x2="${e(lx)}" y2="${e(cgy)}" stroke="#2E7D4F" stroke-width="24" marker-end="url(#pu)"/>`, o += `<line x1="${e(cx0 + cw)}" y1="${e(cy1)}" x2="${e(lx + 160)}" y2="${e(cy1)}" stroke="#2E7D4F" stroke-width="16"/>`, o += `<line x1="${e(cgx)}" y1="${e(cgy)}" x2="${e(lx + 160)}" y2="${e(cgy)}" stroke="#2E7D4F" stroke-width="16" stroke-dasharray="70 60"/>`, o += `<text x="${e(lx + 240)}" y="${e((cy1 + cgy) / 2)}" font-size="180" font-weight="700" fill="#2E7D4F">load centre</text>`, o += `<text x="${e(lx + 240)}" y="${e((cy1 + cgy) / 2 + 230)}" font-size="180" font-weight="700" fill="#2E7D4F">${Math.round(tp.lc)} mm each</text>`, o += `<text x="${e(cx0)}" y="${e(H - 430)}" font-size="175" font-weight="700" fill="#1B2430">Both trucks approach this face together, forks level, lift on the lead driver's signal. The truck nearer the CG carries more - that is why the stations are not symmetric.</text>`, tp.stagger && (o += `<text x="${e(cx0)}" y="${e(H - 190)}" font-size="175" font-weight="700" fill="#B3362B">STAGGERED: the stations are ${(tp.spanUsed / 1e3).toFixed(2)} m apart but these two trucks need ${(tp.needSpacing / 1e3).toFixed(2)} m to stand abreast. One must sit back as drawn, or use a narrower pair.</text>`), o += `<text x="${e(cx0)}" y="${e(H - 660)}" font-size="160" fill="#8A8578">Truck symbols: width to scale, body length schematic.</text>`, o += '<defs><marker id="pl" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill="#1B2430"/></marker><marker id="pr" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#1B2430"/></marker><marker id="pu" markerWidth="7" markerHeight="7" refX="3.5" refY="6" orient="auto"><path d="M0,7 L3.5,0 L7,7 Z" fill="#2E7D4F"/></marker></defs>', o + "</svg>";
}

function forkliftMomentSVG(row) {
    if (!row) return null;
    const r = row,
        t = r.truck,
        tandem = r.method === "tandem",
        tp = tandem ? bestTandemPair(r.p, r.cgFrac) || tandemPlan(r.p, t, t, r.cgFrac) : null,
        bodyOf = (f) => 2200 + f.cap / 1e3 * 170,
        W = 13e3,
        H = 7600,
        e = (v) => v.toFixed(1),
        gy = 5600,
        DRAW_L = 400,
        DRAW_R = 8200,
        BODY = tandem ? bodyOf(tp.tA) : 2800,
        BODY2 = tandem ? bodyOf(tp.tB) : 0,
        along = Math.max(300, tandem ? tp.span : r.alongFork),
        realLen = BODY + FORK_AXLE_TO_FACE + along + (tandem ? FORK_AXLE_TO_FACE + BODY2 : 0),
        mmPx = Math.min(3.1, (DRAW_R - DRAW_L) / realLen),
        axleX = DRAW_L + BODY * mmPx,
        faceX = axleX + FORK_AXLE_TO_FACE * mmPx,
        lw = along * mmPx,
        loadR = faceX + lw,
        axle2X = loadR + FORK_AXLE_TO_FACE * mmPx,
        bad = !r.ok,
        col = bad ? "#B3362B" : "#2E7D4F",
        lh = Math.min(2400, Math.max(700, r.p.h * mmPx * 0.55)),
        loadY = gy - 260 - lh;
    let out = `<svg xmlns="http://www.w3.org/2000/svg" width="${e(W)}" height="${e(H)}" viewBox="0 0 ${e(W)} ${e(H)}" font-family="Arial, Helvetica, sans-serif">`;
    out += `<rect width="${e(W)}" height="${e(H)}" fill="#F7F4EC"/>`, out += `<line x1="0" y1="${e(gy)}" x2="${e(W)}" y2="${e(gy)}" stroke="#3A3A3A" stroke-width="34"/>`;
    const truck = (ax, dir, bodyMm, tk) => {
        const s2 = dir,
            bw2 = (bodyMm || BODY) * mmPx,
            bodyX = ax - (s2 > 0 ? bw2 : 0),
            tt = tk || t;
        let g = "";
        g += `<rect x="${e(bodyX)}" y="${e(gy - 1750)}" width="${e(bw2)}" height="1450" rx="90" fill="#1B2430"/>`, g += `<rect x="${e(bodyX + (s2 > 0 ? 0 : bw2 * 0.45))}" y="${e(gy - 2050)}" width="${e(bw2 * 0.55)}" height="330" rx="60" fill="#39424F"/>`, g += `<circle cx="${e(ax)}" cy="${e(gy - 300)}" r="300" fill="#39424F" stroke="#1B2430" stroke-width="40"/>`, g += `<circle cx="${e(bodyX + (s2 > 0 ? bw2 * 0.12 : bw2 * 0.88))}" cy="${e(gy - 250)}" r="250" fill="#39424F" stroke="#1B2430" stroke-width="40"/>`;
        const mx = ax + s2 * FORK_AXLE_TO_FACE * mmPx;
        return g += `<rect x="${e(mx - (s2 > 0 ? 130 : 0))}" y="${e(gy - 3400)}" width="130" height="3400" fill="#1B2430"/>`, g += `<rect x="${e(s2 > 0 ? mx : mx - tt.fork * mmPx)}" y="${e(gy - 260)}" width="${e(tt.fork * mmPx)}" height="110" fill="#1B2430"/>`, g += `<text x="${e(ax)}" y="${e(gy - 3600)}" text-anchor="middle" font-size="180" font-weight="700" fill="#1B2430">${tt.name}</text>`, g += `<path d="M${e(ax)} ${e(gy - 620)} L${e(ax - 260)} ${e(gy - 180)} L${e(ax + 260)} ${e(gy - 180)} Z" fill="#B3362B"/>`, g;
    };
    out += truck(axleX, 1, BODY, tandem ? tp.tA : t), tandem && (out += truck(axle2X, -1, BODY2, tp.tB)), out += `<text x="${e(axleX)}" y="${e(gy + 620)}" text-anchor="middle" font-size="185" font-weight="700" fill="#B3362B">FULCRUM (front axle)</text>`, tandem && (out += `<text x="${e(axle2X)}" y="${e(gy + 620)}" text-anchor="middle" font-size="185" font-weight="700" fill="#B3362B">FULCRUM (front axle)</text>`), out += `<rect x="${e(faceX)}" y="${e(loadY)}" width="${e(lw)}" height="${e(lh)}" fill="${bad ? "#E8600A" : "#3F8F5B"}" fill-opacity="0.85" stroke="#1B2430" stroke-width="24"/>`, out += `<text x="${e(faceX + lw / 2)}" y="${e(loadY - 150)}" text-anchor="middle" font-size="195" font-weight="700" fill="#1B2430">${r.p.item.name} #${r.p.n} - ${Math.round(r.p.item.kg).toLocaleString()} kg over ${Math.round(along)} mm</text>`;
    const cgX = tandem ? faceX + tp.cg * mmPx : faceX + r.lcActual * mmPx,
        cgY = loadY + lh / 2;
    if (out += `<line x1="${e(cgX - 300)}" y1="${e(cgY)}" x2="${e(cgX + 300)}" y2="${e(cgY)}" stroke="#7A1B12" stroke-width="26"/>`, out += `<line x1="${e(cgX)}" y1="${e(cgY - 300)}" x2="${e(cgX)}" y2="${e(cgY + 300)}" stroke="#7A1B12" stroke-width="26"/>`, out += `<circle cx="${e(cgX)}" cy="${e(cgY)}" r="200" fill="none" stroke="#7A1B12" stroke-width="26"/>`, tandem ? ([
            [faceX + tp.xA * mmPx, tp.RA, tp.utilA, tp.okA, tp.tA],
            [faceX + tp.xB * mmPx, tp.RB, tp.utilB, tp.okB, tp.tB]
        ].forEach(([sx, R, u, okk, tk]) => {
            const c2 = okk ? "#2E7D4F" : "#B3362B";
            out += `<line x1="${e(sx)}" y1="${e(cgY + 260)}" x2="${e(sx)}" y2="${e(cgY + 1350)}" stroke="${c2}" stroke-width="42" marker-end="url(#fv)"/>`, out += `<text x="${e(sx)}" y="${e(cgY + 1700)}" text-anchor="middle" font-size="190" font-weight="700" fill="${c2}">${Math.round(R).toLocaleString()} kg</text>`, out += `<text x="${e(sx)}" y="${e(cgY + 1930)}" text-anchor="middle" font-size="165" fill="${c2}">${(u * 100).toFixed(0)}% of ${Math.round((tk.cap / 1e3, Math.round(tk.cap / 1e3), tk.cap)).toLocaleString()} kg class</text>`;
        }), out += `<text x="${e(cgX)}" y="${e(loadY - 400)}" text-anchor="middle" font-size="175" fill="#7A1B12">CG at ${(tp.cgFrac * 100).toFixed(0)}% of span</text>`, out += `<text x="${e(faceX + lw / 2)}" y="${e(cgY + 2160)}" text-anchor="middle" font-size="165" fill="#5A6472">fork spacing ${(tp.spanUsed / 1e3).toFixed(2)} m  -  load centre ${Math.round(tp.lc)} mm each  -  same side, lift together</text>`) : (out += `<line x1="${e(cgX)}" y1="${e(cgY + 260)}" x2="${e(cgX)}" y2="${e(cgY + 1500)}" stroke="${col}" stroke-width="46" marker-end="url(#fv)"/>`, out += `<text x="${e(cgX + 260)}" y="${e(cgY + 1250)}" font-size="200" font-weight="700" fill="${col}">${Math.round(r.p.item.kg).toLocaleString()} kg</text>`), !tandem) {
        const dy = Math.max(900, loadY - 620);
        out += `<line x1="${e(faceX)}" y1="${e(dy)}" x2="${e(cgX)}" y2="${e(dy)}" stroke="#7A1B12" stroke-width="26" marker-end="url(#fh)"/>`, out += `<line x1="${e(faceX)}" y1="${e(dy - 200)}" x2="${e(faceX)}" y2="${e(dy + 200)}" stroke="#7A1B12" stroke-width="20"/>`, out += `<text x="${e((faceX + cgX) / 2)}" y="${e(dy - 130)}" text-anchor="middle" font-size="195" font-weight="700" fill="#7A1B12">actual load centre ${Math.round(r.lcActual)} mm</text>`;
        const ratedX = faceX + t.lc * mmPx,
            dy2 = dy + 560;
        out += `<line x1="${e(faceX)}" y1="${e(dy2)}" x2="${e(ratedX)}" y2="${e(dy2)}" stroke="#2E7D4F" stroke-width="24" marker-end="url(#fg)"/>`, out += `<line x1="${e(ratedX)}" y1="${e(dy2 - 180)}" x2="${e(ratedX)}" y2="${e(dy2 + 180)}" stroke="#2E7D4F" stroke-width="20"/>`, out += `<text x="${e((faceX + ratedX) / 2)}" y="${e(dy2 + 320)}" text-anchor="middle" font-size="180" font-weight="700" fill="#2E7D4F">rated ${t.lc} mm</text>`;
    }
    out += `<text x="${e(faceX + (tandem ? lw : t.fork * mmPx) / 2)}" y="${e(gy + 300)}" text-anchor="middle" font-size="175" fill="#5A6472">forks ${t.fork} mm${tandem ? " each" : ""}</text>`;
    const gx0 = 8900,
        gy0 = 1050,
        gw = 3600,
        gh = 2350,
        maxLC = Math.max(1600, r.lcActual * 1.35),
        CX = (lc) => gx0 + lc / maxLC * gw,
        CY = (kg) => gy0 + gh - kg / t.cap * gh;
    out += `<rect x="${e(gx0 - 260)}" y="${e(gy0 - 420)}" width="${e(gw + 900)}" height="${e(gh + 1050)}" rx="90" fill="#FFFFFF" stroke="#C9C2B4" stroke-width="20"/>`, out += `<text x="${e(gx0 - 80)}" y="${e(gy0 - 130)}" font-size="195" font-weight="700" fill="#1B2430">Capacity degradation - ${t.name}</text>`;
    let dc = "";
    for (let lc = 200; lc <= maxLC; lc += 50) {
        const cap = Math.min(t.cap, t.cap * (FORK_AXLE_TO_FACE + t.lc) / (FORK_AXLE_TO_FACE + lc));
        dc += `${dc ? "L" : "M"}${e(CX(lc))} ${e(CY(cap))} `;
    }
    out += `<path d="${dc}" fill="none" stroke="#1B2430" stroke-width="26"/>`, out += `<line x1="${e(gx0)}" y1="${e(gy0 + gh)}" x2="${e(gx0 + gw)}" y2="${e(gy0 + gh)}" stroke="#5A6472" stroke-width="18"/>`, out += `<line x1="${e(gx0)}" y1="${e(gy0)}" x2="${e(gx0)}" y2="${e(gy0 + gh)}" stroke="#5A6472" stroke-width="18"/>`, out += `<line x1="${e(CX(r.lcActual))}" y1="${e(gy0)}" x2="${e(CX(r.lcActual))}" y2="${e(gy0 + gh)}" stroke="${col}" stroke-width="20" stroke-dasharray="70 50"/>`, out += `<circle cx="${e(CX(r.lcActual))}" cy="${e(CY(Math.min(t.cap, r.capAt)))}" r="130" fill="${col}"/>`, out += `<text x="${e(gx0 - 80)}" y="${e(gy0 + gh + 330)}" font-size="165" fill="#5A6472">load centre (mm) - dot = ${Math.round(r.capAt).toLocaleString()} kg</text>`;
    const msg = tandem ? `TANDEM LIFT - ${tp.tA.name} + ${tp.tB.name}${tp.ok ? "" : " - OVERLOADED, see shares"}` : r.method === "rotate" ? `ROTATE 90 DEG IN THE STOW - ${(r.util * 100).toFixed(0)}% as currently stowed` : bad ? `FORKLIFT TIPPING HAZARD - ${(r.util * 100).toFixed(0)}% of derated capacity` : `${r.util >= 0.9 ? "WITHIN LIMIT BUT NO MARGIN" : "WITHIN LIMIT"} - ${(r.util * 100).toFixed(0)}% of derated capacity`;
    return out += `<rect x="260" y="260" width="${e(W - 4400)}" height="620" rx="90" fill="${bad ? "#FDECEA" : "#EAF4EE"}" stroke="${col}" stroke-width="26"/>`, out += `<text x="520" y="670" font-size="235" font-weight="700" fill="${col}">${msg}</text>`, tandem && (out += `<text x="520" y="${e(H - 200)}" font-size="180" font-weight="700" fill="#1B2430">Apron lift: both trucks fork the same side, lift and travel together at matched speed, one lead driver + banksman. Two trucks cannot work inside the container.</text>`), out += `<defs><marker id="fv" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M0,0 L6,0 L3,6 Z" fill="${tandem ? "#2E7D4F" : col}"/></marker><marker id="fh" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7A1B12"/></marker><marker id="fg" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2E7D4F"/></marker></defs>`, out + "</svg>";
}

function craneAccess(eng, targetDeg = SLING_TARGET_DEG) {
    const s = eng.spec;
    if (!(s.fam === "OT" || s.fam === "FR")) return {
        relevant: !1,
        ok: !0,
        notes: [],
        rows: []
    };
    const isOT = s.fam === "OT",
        order = loadingOrder(eng),
        notes = [],
        rows = [],
        tRad = targetDeg * Math.PI / 180,
        mRad = SLING_MIN_DEG * Math.PI / 180;
    return notes.push(
        isOT ? `Open-top loading: cargo goes in through the roof aperture, so roof bows and tarpaulin come off first and go back on after. Over-width is not possible in an ${s.code} - the side walls are fixed.` : `Flatrack loading: no roof structure or side walls to clear, but the end walls/stanchions stand ${(s.H / 1e3).toFixed(2)} m above the deck - keep sling legs clear of them.`
    ), notes.push(
        "Lifting points are taken at the unit corners assuming even weight distribution. If the real centre of gravity is off-centre the unit will hang out of level - shift the points toward the heavy side or use adjustable legs."
    ), order.forEach((p, idx) => {
        const blockers = order.slice(0, idx).filter(
                (q) => q.z + q.h > p.z + EPS && Math.min(p.x + p.l, q.x + q.l) - Math.max(p.x, q.x) > CONTACT_TOL && Math.min(p.y + p.w, q.y + q.w) - Math.max(p.y, q.y) > CONTACT_TOL
            ).length,
            kg = p.item.kg,
            halfDiag = Math.hypot(p.l, p.w) / 2,
            hookH = halfDiag * Math.tan(tRad),
            hookMinH = halfDiag * Math.tan(mRad),
            legLen = halfDiag / Math.cos(tRad),
            legTension = kg / (2 * Math.sin(tRad)),
            legTensionMin = kg / (2 * Math.sin(mRad)),
            overHeight = Math.max(0, p.z + p.h - s.H),
            overWidth = Math.max(0, p.w - s.W),
            totalLift = p.h + hookH,
            ok = !blockers;
        rows.push({
            p,
            blockers,
            kg,
            targetDeg,
            hookH,
            hookMinH,
            legLen,
            legTension,
            legTensionMin,
            overHeight,
            overWidth,
            totalLift,
            ok
        }), notes.push(
            `${p.item.name} #${p.n} (${(kg / 1e3).toFixed(1)} t): 4-leg sling, legs about ${(legLen / 1e3).toFixed(1)} m, hook at least ${(hookH / 1e3).toFixed(1)} m above the lifting points to hold ${targetDeg} deg. Each loaded leg then carries about ${Math.round(legTension)} kg. Total height from the unit base to the hook is about ${(totalLift / 1e3).toFixed(1)} m - check it against the crane and any gantry overhead.`
        ), notes.push(
            `${p.item.name} #${p.n}: do not let the legs flatten below ${SLING_MIN_DEG} deg - at that angle the hook must still be ${(hookMinH / 1e3).toFixed(1)} m up and each leg would carry about ${Math.round(legTensionMin)} kg, ${Math.round((legTensionMin / legTension - 1) * 100)}% more than at ${targetDeg} deg.`
        ), blockers && notes.push(
            `${p.item.name} #${p.n} cannot be craned straight down at its place in the sequence - ${blockers} unit(s) already loaded stand higher and overlap its footprint. Re-order it earlier or shift it clear.`
        ), overHeight > 0 && notes.push(
            isOT ? `${p.item.name} #${p.n} stands ${Math.round(overHeight)} mm above the top side rails - it must go in through the roof, the tarpaulin cannot be refitted, and the unit travels as out-of-gauge. Lift it clear of the corner posts.` : `${p.item.name} #${p.n} stands ${Math.round(overHeight)} mm above the flatrack end walls - no roof structure to clear, but it travels as out-of-gauge and the slings must clear the end stanchions.`
        ), overWidth > 0 && notes.push(
            `${p.item.name} #${p.n} overhangs the deck by ${Math.round(overWidth / 2)} mm each side. Sling legs dropped to the corners would bear on the overhanging edges - use a spreader beam so the legs stay vertical clear of the load.`
        );
    }), {
        relevant: !0,
        isOT,
        rows,
        notes,
        ok: rows.every((r) => r.ok)
    };
}

function securingNotes(eng, methodPref = "auto") {
    const s = eng.spec,
        notes = [];
    if (s.fam === "FR" || s.fam === "OT")
        return notes.push(
            "Bed the unit on cross-timbers / steel beams so its weight bears on the two outer main girders, not the deck boards (Maersk: heavy weights must not sit only on the wooden floor)."
        ), notes.push(
            "Place anti-slip mats / dunnage between metal cargo and the bottom rails \u2014 higher friction reduces the number of lashings required."
        ), eng.placed.forEach((p) => {
            const L = lashingFor(p, !0);
            notes.push(
                `${p.item.name} #${p.n} (${(p.item.kg / 1e3).toFixed(1)} t): ${L.total} \xD7 ${L.type} lashings to 5 t D-rings \u2014 ${L.across} across (cross-lashed), ${L.lengthwise} lengthwise, ${L.down} down. IMO rule: total MSL per side \u2265 unit weight.`
            );
        }), notes.push(
            "Over-width cargo must be stowed \u226530 cm from the flatrack ends (max 5.5 m on 20', 11.6 m on 40') or it can only load on deck."
        ), oogInfo(eng).forEach((o) => {
            notes.push(
                `${o.p.item.name} #${o.p.n} is OUT-OF-GAUGE \u2014 ${oogText(o)}. Arrange over-dimension permit; mark extremities; no stacking above.`
            );
        }), appendIntegrityNotes(eng, notes, methodPref);
    notes.push(
        "Stow with positive fit (no gaps) where possible; the container walls carry only large surface loads, not point loads.",
        ...(() => {
            const so = stackOrderCheck(eng),
                tops = so.columns.map((c) => Math.round(c.top));
            return so.columns.length < 2 ? [] : [
                `STACK ORDER - columns are loaded tallest first, from the nose: ${tops.join(" / ")} mm. Under a brake surge the load runs forward, so every column has cargo at least as tall ahead of it to bear against. The block sits tight to the front wall and the slack is left at the door end where it can be braced. This ordering can leave the load nose-heavy; correct that by where the container sits on the chassis, not by reordering the columns.`
            ].concat(so.warns);
        })()
    );
    const minX = Math.min(...eng.placed.map((p) => p.x)),
        maxX = Math.max(...eng.placed.map((p) => p.x + p.l)),
        gapAt = (gap, where) => {
            gap >= 40 && gap <= 300 ? notes.push(
                `Dunnage airbag for ${Math.round(gap)} mm ${where} gap (airbags take no moving-cargo load \u2014 fill only).`
            ) : gap > 300 && notes.push(
                `Timber bracing / shoring for ${(gap / 1e3).toFixed(1)} m ${where} void, braced against the corner posts.`
            );
        };
    gapAt(minX, "nose-end"), gapAt(s.L - maxX, "door-end");
    const floorB = eng.placed.filter((pp) => pp.z <= EPS).sort((a, b) => a.x - b.x),
        bandsB = [];
    floorB.forEach((pp) => {
        const last = bandsB[bandsB.length - 1];
        last && pp.x <= last.maxX + 20 ? last.maxX = Math.max(last.maxX, pp.x + pp.l) : bandsB.push({
            minX: pp.x,
            maxX: pp.x + pp.l
        });
    });
    for (let i = 1; i < bandsB.length; i++) gapAt(bandsB[i].minX - bandsB[i - 1].maxX, "between-block");
    const geo = securingGeometry(eng);
    let positiveFitCount = 0,
        lashedCount = 0;
    return geo.items.forEach((it) => {
        if (it.method === "positive-fit") {
            positiveFitCount++;
            return;
        }
        lashedCount++;
        const dirLabel = [],
            acrossN = it.lashings.filter((l) => l.dir === "across").length,
            lenN = it.lashings.filter((l) => l.dir === "length").length;
        acrossN && dirLabel.push(`${acrossN} across`), lenN && dirLabel.push(`${lenN} lengthwise (door-side)`), notes.push(
            `${it.p.item.name} #${it.p.n} [${it.method}]: ${it.lashings.length} \xD7 ${it.type} lashing${it.lashings.length !== 1 ? "s" : ""} to 1 t rings${dirLabel.length ? " \u2014 " + dirLabel.join(", ") : ""}. ${it.reason}`
        );
    }), positiveFitCount && notes.push(
        `${positiveFitCount} unit(s) secured by positive fit alone (no lashing gear) \u2014 blocked tight by walls/cargo. This is the cheapest, strongest securing.`
    ), appendIntegrityNotes(eng, notes, methodPref);
}
const volM3 = (eng) => eng.placed.reduce((a, p) => a + p.l * p.w * p.h, 0) / 1e9,
    effVol = (eng) => {
        const top = Math.max(eng.spec.H, ...eng.placed.map((p) => p.z + p.h));
        return eng.spec.L * eng.spec.W * top / 1e9;
    },
    CONTACT_TOL = 60,
    HEAVY_LASH_KG = 4e3;

function contactFaces(eng, p) {
    const s = eng.spec,
        touches = (a, b) => Math.abs(a - b) <= CONTACT_TOL;
    let nose = touches(p.x, 0),
        door = touches(p.x + p.l, s.L),
        left = touches(p.y, 0),
        right = touches(p.y + p.w, s.W);
    const overlapX = (q) => Math.min(p.x + p.l, q.x + q.l) - Math.max(p.x, q.x) > CONTACT_TOL,
        overlapY = (q) => Math.min(p.y + p.w, q.y + q.w) - Math.max(p.y, q.y) > CONTACT_TOL,
        sameZ = (q) => Math.abs(q.z - p.z) < p.h * 0.5;
    return eng.placed.forEach((q) => {
        q === p || !sameZ(q) || (overlapY(q) && touches(q.x + q.l, p.x) && (nose = !0), overlapY(q) && touches(p.x + p.l, q.x) && (door = !0), overlapX(q) && touches(q.y + q.w, p.y) && (left = !0), overlapX(q) && touches(p.y + p.w, q.y) && (right = !0));
    }), {
        nose,
        door,
        left,
        right
    };
}

function securingGeometry(eng) {
    const s = eng.spec,
        open = s.fam === "FR" || s.fam === "OT",
        items = [],
        bracing = [],
        bedding = [],
        railY0 = 60,
        railY1 = s.W - 60,
        RING_PITCH = 600,
        rings = [];
    for (let x = 150; x <= s.L - 150; x += RING_PITCH) rings.push([x, railY0]), rings.push([x, railY1]);
    const usedRings = /* @__PURE__ */ new Set(),
        nearestRing = (px, py, preferSide) => {
            let best = null,
                bestD = 1 / 0;
            return rings.forEach((r, idx) => {
                const sideOk = preferSide == null || (preferSide === 0 ? r[1] === railY0 : r[1] === railY1),
                    d = Math.hypot(r[0] - px, r[1] - py) + (usedRings.has(idx) ? 4e3 : 0) + (sideOk ? 0 : 2500);
                d < bestD && (bestD = d, best = idx);
            }), best != null && usedRings.add(best), best != null ? rings[best] : [px, py];
        };
    if (eng.placed.forEach((p) => {
            const heavy = p.item.kg,
                tall = p.h >= 1600,
                contact = contactFaces(eng, p),
                positiveFit = (contact.left ? 1 : 0) + (contact.right ? 1 : 0) + (contact.nose ? 1 : 0) + (contact.door ? 1 : 0) == 4 && heavy < HEAVY_LASH_KG && !tall,
                isHeavy = heavy >= HEAVY_LASH_KG,
                needsLash = open || isHeavy || tall || !p.item.stack || !positiveFit;
            if (!open && positiveFit) {
                items.push({
                    p,
                    lashings: [],
                    count: 0,
                    type: "-",
                    msl: 0,
                    across: 0,
                    lengthwise: 0,
                    down: 0,
                    method: "positive-fit",
                    reason: "Blocked by walls/cargo on all sides \u2014 secured by tight stow, no lashing needed."
                });
                return;
            }
            if (!needsLash) return;
            const L = lashingFor(p, open),
                railClampY = (yv) => Math.max(railY0, Math.min(railY1, yv)),
                cA = [p.x, railClampY(p.y)],
                cB = [p.x + p.l, railClampY(p.y)],
                cC = [p.x + p.l, railClampY(p.y + p.w)],
                cD = [p.x, railClampY(p.y + p.w)],
                lashings = [],
                cornerLash = (corner, side, dir) => {
                    const [ax, ay] = nearestRing(corner[0], side === 0 ? railY0 : railY1, side);
                    lashings.push({
                        from: [corner[0], corner[1]],
                        to: [ax, ay],
                        type: L.type,
                        dir
                    });
                },
                boostPairs = LASH_BOOST,
                lashLeft = !L.frictionSecuresLat && (open || isHeavy || !contact.left),
                lashRight = !L.frictionSecuresLat && (open || isHeavy || !contact.right),
                lashNose = open || isHeavy || !contact.nose,
                lashDoor = open || isHeavy || !contact.door;
            if (lashLeft && (cornerLash(cA, 0, "across"), cornerLash(cB, 0, "across")), lashRight && (cornerLash(cC, 1, "across"), cornerLash(cD, 1, "across")), tall && !lashLeft && !lashRight && (cornerLash(cA, 0, "across"), cornerLash(cC, 1, "across")), lashDoor && !contact.door) {
                const midY0 = railClampY(p.y),
                    midY1 = railClampY(p.y + p.w);
                lashings.push({
                    from: [p.x + p.l, midY0],
                    to: nearestRing(p.x + p.l + 300, railY0, 0),
                    type: L.type,
                    dir: "length"
                }), lashings.push({
                    from: [p.x + p.l, midY1],
                    to: nearestRing(p.x + p.l + 300, railY1, 1),
                    type: L.type,
                    dir: "length"
                });
            } else if (isHeavy || open) {
                const midY0 = railClampY(p.y);
                lashings.push({
                    from: [p.x + p.l, midY0],
                    to: nearestRing(p.x + p.l + 300, railY0, 0),
                    type: L.type,
                    dir: "length"
                });
            }
            for (let bi = 0; bi < boostPairs; bi++) {
                cornerLash(cA, 0, "across"), cornerLash(cC, 1, "across");
                const by0 = railClampY(p.y);
                lashings.push({
                    from: [p.x + p.l, by0],
                    to: nearestRing(p.x + p.l + 300, railY0, 0),
                    type: L.type,
                    dir: "length"
                });
            }
            const blockedList = [];
            contact.left && !open && blockedList.push("left wall/cargo"), contact.right && !open && blockedList.push("right wall/cargo"), contact.nose && !open && blockedList.push("front");
            let method, reason;
            open ? (method = "lashed (open equipment)", reason = `On ${eng.spec.fam}: bed on girders + direct-lash all directions to 5 t D-rings.`) : isHeavy ? (method = "blocked + lashed (heavy)", reason = `Heavy unit (${(heavy / 1e3).toFixed(1)} t) \u2014 positive-lashed on all axes even where blocked (walls carry surface load only).`) : blockedList.length ? (method = "blocked + lashed", reason = `Blocked by ${blockedList.join(", ")}; lashed on the free / door side${tall ? " + tipping restraint (tall unit)" : ""}.`) : (method = "lashed", reason = `Free-standing \u2014 cross-lashed to rings${tall ? " with tipping restraint" : ""}.`), items.push({
                p,
                lashings,
                count: lashings.length,
                type: L.type,
                msl: L.ringSWL,
                across: L.across,
                lengthwise: L.lengthwise,
                down: L.down,
                method,
                reason
            }), open && bedding.push({
                x: p.x,
                y: p.y,
                l: p.l,
                w: p.w
            });
        }), !open) {
        const floor = eng.placed.filter((pp) => pp.z <= EPS).sort((a, b) => a.x - b.x),
            addGap = (x0, gap, where) => {
                gap >= 40 && gap <= 300 ? bracing.push({
                    x: x0,
                    y: 0,
                    l: gap,
                    w: s.W,
                    kind: "airbag",
                    label: `Airbag ${Math.round(gap)}mm`
                }) : gap > 300 && bracing.push({
                    x: x0,
                    y: 0,
                    l: gap,
                    w: s.W,
                    kind: "void",
                    label: `Brace ${(gap / 1e3).toFixed(1)}m`
                });
            },
            minX = floor.length ? Math.min(...floor.map((pp) => pp.x)) : 0,
            maxX = floor.length ? Math.max(...floor.map((pp) => pp.x + pp.l)) : 0;
        addGap(0, minX, "nose"), addGap(maxX, s.L - maxX, "door");
        const bands = [];
        floor.forEach((pp) => {
            const last = bands[bands.length - 1];
            last && pp.x <= last.maxX + 20 ? last.maxX = Math.max(last.maxX, pp.x + pp.l) : bands.push({
                minX: pp.x,
                maxX: pp.x + pp.l
            });
        });
        for (let i = 1; i < bands.length; i++) {
            const gap = bands[i].minX - bands[i - 1].maxX;
            addGap(bands[i - 1].maxX, gap, "between");
        }
    }
    return {
        items,
        bracing,
        bedding,
        open
    };
}

function securingBOM(eng, methodPref) {
    const geo = securingGeometry(eng),
        s = eng.spec,
        open = geo.open,
        gear = {};
    let edgeProtectors = 0,
        antiSlip = 0;
    geo.items.forEach((it) => {
        if (!it.lashings.length) return;
        const mat = pickMaterial(it.p.item.kg, open, methodPref),
            qty = Math.max(it.lashings.length, it.count);
        gear[mat.name] || (gear[mat.name] = {
            qty: 0,
            lc: mat.lc,
            note: mat.note
        }), gear[mat.name].qty += qty, mat.unit === "strap" && (edgeProtectors += qty), (open || ANTI_SLIP) && (antiSlip += 2);
    });
    let timberBeams = 0,
        airbags = 0,
        beddingBeams = 0;
    return geo.bracing.forEach((b) => {
        b.kind === "airbag" ? airbags += 1 : timberBeams += Math.ceil(b.l / 1200) + 1;
    }), geo.bedding.forEach(() => {
        beddingBeams += 3;
    }), {
        gear,
        edgeProtectors,
        antiSlip,
        timberBeams,
        airbags,
        beddingBeams,
        positiveFit: geo.items.filter((i) => i.method === "positive-fit").length,
        lashedUnits: geo.items.filter((i) => i.lashings.length).length
    };
}

function oogInfo(eng) {
    const s = eng.spec,
        out = [];
    return eng.placed.forEach((p) => {
        const owL = Math.max(0, -p.y),
            owR = Math.max(0, p.y + p.w - s.W),
            oh = Math.max(0, p.z + p.h - s.H);
        (owL > 1 || owR > 1 || oh > 1) && out.push({
            p,
            owL,
            owR,
            oh
        });
    }), out;
}
const oogText = (o) => {
    const parts = [];
    return (o.owL > 1 || o.owR > 1) && parts.push(
        `OVER-WIDTH +${Math.round(o.owL)} mm left / +${Math.round(o.owR)} mm right (transport width ${(o.p.w / 1e3).toFixed(2)} m)`
    ), o.oh > 1 && parts.push(
        `OVER-HEIGHT +${Math.round(o.oh)} mm above walls (top at ${((o.p.z + o.p.h) / 1e3).toFixed(2)} m)`
    ), parts.join(" \xB7 ");
};

function imdgReport(eng) {
    const haz = eng.placed.filter((p) => p.item.haz),
        classes = [...new Set(haz.map((p) => p.item.haz))].sort(),
        conflicts = [],
        seen = /* @__PURE__ */ new Set();
    for (const a of haz)
        for (const b of haz) {
            if (a === b || a.item.haz === b.item.haz) continue;
            const key = [a.item.haz, b.item.haz].sort().join("|");
            if (seen.has(key)) continue;
            const sep = segPair(SEG_SEPARATED, a.item.haz, b.item.haz),
                away = segPair(SEG_AWAY, a.item.haz, b.item.haz);
            if (!sep && !away) continue;
            seen.add(key);
            const dist = Math.hypot(
                a.x + a.l / 2 - (b.x + b.l / 2),
                a.y + a.w / 2 - (b.y + b.w / 2)
            );
            conflicts.push({
                a: a.item.haz,
                b: b.item.haz,
                rule: sep ? "separated from" : "away from",
                hardStop: sep,
                dist,
                violated: sep || dist < 3e3
            });
        }
    const violations = conflicts.filter((c) => c.violated);
    return {
        classes,
        conflicts,
        violations,
        hardStop: violations.some((c) => c.hardStop),
        ok: !violations.length,
        notes: violations.map(
            (c) => `IMDG ${c.a} and IMDG ${c.b} are loaded in the same container but must be kept ${c.rule} each other${c.hardStop ? " - this combination must not be co-loaded" : ` (closest centres are ${(c.dist / 1e3).toFixed(1)} m apart, 3.0 m required)`}.`
        )
    };
}

function antiTipUnits(eng, methodPref) {
    const bal = securingBalance(eng, methodPref || "auto"),
        set = /* @__PURE__ */ new Set();
    return bal.rows.forEach((r) => r.tip < 1.25 && set.add(r.p.item.name + "#" + r.p.n)), set;
}

// ===== MANUAL ADJUST (v10.11) — edit a finished plan in place, no re-optimise ===
function cloneEng(eng, patch) {
    var c = Object.assign(Object.create(Object.getPrototypeOf(eng)), eng);
    return Object.assign(c, patch || {});
}
function ContainerNoInput(props) {
    var eng = props.eng, fleet = props.fleet, active = props.active, onFleet = props.onFleet;
    var st = React.useState(eng.containerNo || ""), val = st[0], setVal = st[1];
    React.useEffect(function () { setVal(eng.containerNo || ""); }, [active, eng]);
    function commit() {
        if ((eng.containerNo || "") === val) return;
        var ne = cloneEng(eng, { containerNo: val });
        var nf = fleet.slice(); nf[active] = ne; onFleet(nf);
    }
    return React.createElement("label", {
        style: { display: "inline-flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 700, color: "#1B2430", marginBottom: 12, flexWrap: "wrap" }
    },
        "Container No. (" + eng.spec.code + " #" + eng.index + ")",
        React.createElement("input", {
            value: val,
            onChange: function (ev) { setVal(ev.target.value); },
            onBlur: commit,
            onKeyDown: function (ev) { ev.key === "Enter" && (commit(), ev.target.blur && ev.target.blur()); },
            placeholder: "e.g. TCNU8755462",
            style: { padding: "8px 11px", border: "1px solid #C9C2B4", borderRadius: 5, fontSize: 14, fontFamily: "'IBM Plex Mono', ui-monospace, monospace", width: 260 }
        }),
        React.createElement("span", { style: { fontSize: 11, color: "#5A6472", fontWeight: 500 } }, "\u2192 shows on the Stow Map & PDF for your customer"));
}
function plForcePlace(eng, it, n, x, y, l, w, h) {
    var s = eng.support(x, y, 0, l, w);
    var best = { item: it, n: n, x: x, y: y, z: 0, l: l, w: w, h: h, stackLayer: 1, oog: h > eng.spec.H + EPS || w > eng.spec.W + EPS, sup: s.sup, areas: s.areas, borne: 0 };
    eng.placed.push(best); eng.weight += it.kg; eng.applyLoad(best.sup, best.areas, it.kg);
    var gap = isClosedStandard(eng.spec) ? SPACING_TOLERANCE : 0;
    eng.points.push([x + l + gap, y, 0], [x, y + w + gap, 0], [x, y, h]);
    eng.points = eng.points.filter(function (pt) { return !eng.overlaps(pt[0], pt[1], pt[2], 1, 1, 1); });
    eng.points.sort(function (a, b) { return a[2] - b[2] || a[0] - b[0] || a[1] - b[1]; });
}
function repackPinned(eng, P, end) {
    var spec = eng.spec, ne = new Engine(spec, eng.index);
    var uL = isClosedStandard(spec) ? Math.max(0, spec.L - DOOR_CLEARANCE) : spec.L;
    var px = end === "door" ? Math.max(0, uL - P.l) : 0;
    var py = Math.max(0, Math.min(P.y || 0, Math.max(0, spec.W - P.w)));
    plForcePlace(ne, P.item, P.n, px, py, P.l, P.w, P.h);
    var rest = eng.placed.filter(function (p) { return p !== P; })
        .map(function (p) { return { it: p.item, n: p.n, done: false }; })
        .sort(function (a, b) { return (b.it.L * b.it.W * b.it.H) - (a.it.L * a.it.W * a.it.H); });
    var progress = true;
    while (progress) {
        progress = false;
        for (var k = 0; k < rest.length; k++) {
            if (rest[k].done) continue;
            if (ne.tryPlace(rest[k].it, rest[k].n)) { rest[k].done = true; progress = true; }
        }
    }
    return ne.placed.length === eng.placed.length ? ne : null;
}
function repackAt(eng, P, x, y) {
    var spec = eng.spec, ne = new Engine(spec, eng.index);
    var uL = isClosedStandard(spec) ? Math.max(0, spec.L - DOOR_CLEARANCE) : spec.L;
    var px = Math.max(0, Math.min(Math.round(x), Math.max(0, uL - P.l)));
    var py = Math.max(0, Math.min(Math.round(y), Math.max(0, spec.W - P.w)));
    plForcePlace(ne, P.item, P.n, px, py, P.l, P.w, P.h);
    var rest = eng.placed.filter(function (p) { return p !== P; })
        .map(function (p) { return { it: p.item, n: p.n, done: false }; })
        .sort(function (a, b) { return (b.it.L * b.it.W * b.it.H) - (a.it.L * a.it.W * a.it.H); });
    var progress = true;
    while (progress) {
        progress = false;
        for (var k = 0; k < rest.length; k++) {
            if (rest[k].done) continue;
            if (ne.tryPlace(rest[k].it, rest[k].n)) { rest[k].done = true; progress = true; }
        }
    }
    return ne.placed.length === eng.placed.length ? ne : null;
}
function AdjustPanel(props) {
    var eng = props.eng, fleet = props.fleet, active = props.active, onFleet = props.onFleet;
    var st = React.useState(false), open = st[0], setOpen = st[1];
    var ss = React.useState(0), si = ss[0], setSi = ss[1];
    var ms = React.useState(""), msg = ms[0], setMsg = ms[1];
    var placed = eng.placed;
    if (!placed.length) return null;
    var idx = Math.min(si, placed.length - 1), p = placed[idx], spec = eng.spec;

    var warn = [];
    placed.forEach(function (a) {
        if (a.x + a.l > spec.L + 1 || a.y + a.w > spec.W + 1 || a.z + a.h > spec.H + 1)
            warn.push(a.item.name + " #" + a.n + " sticks out past the container wall");
    });
    for (var i = 0; i < placed.length; i++) for (var j = i + 1; j < placed.length; j++) {
        var a = placed[i], b = placed[j],
            ox = Math.max(0, Math.min(a.x + a.l, b.x + b.l) - Math.max(a.x, b.x)),
            oy = Math.max(0, Math.min(a.y + a.w, b.y + b.w) - Math.max(a.y, b.y)),
            oz = Math.max(0, Math.min(a.z + a.h, b.z + b.h) - Math.max(a.z, b.z));
        if (ox > 2 && oy > 2 && oz > 2) warn.push(a.item.name + " #" + a.n + " overlaps " + b.item.name + " #" + b.n);
    }
    if (spec.payload && eng.weight > spec.payload + 1)
        warn.push("Container is over payload by " + (eng.weight - spec.payload).toLocaleString() + " kg");

    var maxLayer = Math.max(1, Math.max.apply(null, placed.map(function (q) { return q.stackLayer || 1; })));

    function commitActive(newPlaced, extra) {
        var w = newPlaced.reduce(function (s, q) { return s + q.item.kg; }, 0);
        var ne = cloneEng(eng, Object.assign({ placed: newPlaced, weight: w }, extra || {}));
        var nf = fleet.slice(); nf[active] = ne; onFleet(nf);
    }
    function setField(field, val) {
        var np = placed.slice(); np[idx] = Object.assign({}, np[idx]); np[idx][field] = val; commitActive(np);
    }
    var usableL = isClosedStandard(spec) ? Math.max(0, spec.L - DOOR_CLEARANCE) : spec.L;
    function nudge(field, d) {
        var v = Math.round((p[field] || 0) + d);
        if (field === "x") v = Math.max(0, Math.min(v, usableL - p.l));
        if (field === "y") v = Math.max(0, Math.min(v, spec.W - p.w));
        setField(field, v);
    }
    function setNum(field, raw) {
        var v = Math.round(parseFloat(raw) || 0);
        if (field === "x") v = Math.max(0, Math.min(v, Math.max(0, usableL - p.l)));
        if (field === "y") v = Math.max(0, Math.min(v, Math.max(0, spec.W - p.w)));
        setField(field, v);
    }
    function setLayer(layer) {
        var np = placed.slice(); np[idx] = Object.assign({}, np[idx], { z: (layer - 1) * p.h, stackLayer: layer }); commitActive(np);
    }
    function rotate() {
        var nl = p.w, nw = p.l,
            nx = Math.max(0, Math.min(p.x, Math.max(0, spec.L - nl))),
            ny = Math.max(0, Math.min(p.y, Math.max(0, spec.W - nw))),
            np = placed.slice();
        np[idx] = Object.assign({}, np[idx], { l: nl, w: nw, x: nx, y: ny }); commitActive(np);
    }
    function sendEnd(end, ti) {
        ti = ti == null ? idx : ti;
        var ne = repackPinned(eng, placed[ti], end);
        if (!ne) { setMsg("Couldn't re-pack with that piece pinned to the " + end + " \u2014 not everything fit. Try moving it manually, or free up space."); return; }
        var nf = fleet.slice(); nf[active] = ne; onFleet(nf); setMsg(""); setSi(0);
    }
    function heaviestToEnd(end) { sendEnd(end, heaviestIdx); }
    var heaviestIdx = placed.reduce(function (m, q, i2) { return q.item.kg > placed[m].item.kg ? i2 : m; }, 0);
    function reseq(dir) {
        var order = (eng.manualOrder && eng.manualOrder.length === placed.length) ? eng.manualOrder.slice() : loadingOrder(eng);
        var oi = order.indexOf(p), oj = oi + dir;
        if (oi < 0 || oj < 0 || oj >= order.length) return;
        var t = order[oi]; order[oi] = order[oj]; order[oj] = t;
        commitActive(placed.slice(), { manualOrder: order });
    }
    function moveTo(ci) {
        if (ci === active || ci < 0 || ci >= fleet.length) return;
        var src = placed.slice(); src.splice(idx, 1);
        var tgt = fleet[ci], moved = Object.assign({}, p, { x: 0, y: 0, z: 0, stackLayer: 1 });
        var tp = tgt.placed.concat([moved]);
        var nf = fleet.slice();
        nf[active] = cloneEng(eng, { placed: src, weight: src.reduce(function (s, q) { return s + q.item.kg; }, 0), manualOrder: null });
        nf[ci] = cloneEng(tgt, { placed: tp, weight: tp.reduce(function (s, q) { return s + q.item.kg; }, 0), manualOrder: null });
        onFleet(nf); setSi(0);
    }

    var lbl = { fontSize: 11, color: "#5A6472", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" };
    var num = { width: 74, padding: "5px 6px", border: "1px solid #C9C2B4", borderRadius: 4, fontSize: 13, fontFamily: "'IBM Plex Mono', monospace" };
    var mini = { border: "1px solid #1B2430", background: "#F7F4EC", borderRadius: 4, padding: "4px 9px", fontSize: 13, fontWeight: 700, cursor: "pointer", color: "#1B2430" };
    var field = function (label, node) { return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3 } }, React.createElement("span", { style: lbl }, label), node); };

    var header = React.createElement("button", {
        onClick: function () { setOpen(function (v) { return !v; }); },
        style: { border: "1px solid #E8600A", background: open ? "#E8600A" : "transparent", color: open ? "#fff" : "#E8600A", borderRadius: 4, padding: "8px 14px", fontSize: 13, fontWeight: 700, letterSpacing: "0.03em", marginBottom: open ? 10 : 0 }
    }, (open ? "\u2715 Close manual adjust" : "\u270E Manual adjust") + "  \u2013  edit this plan by hand (no re-optimise)");

    if (!open) return React.createElement("div", { style: { marginBottom: 12 } }, header);

    var others = fleet.map(function (f, i) { return { i: i, f: f }; }).filter(function (o) { return o.i !== active; });

    return React.createElement("div", { style: { marginBottom: 12, border: "1px solid #E0DACB", borderRadius: 8, padding: 12, background: "#FBFAF6" } },
        header,
        warn.length
            ? React.createElement("ul", { style: { margin: "0 0 10px", padding: "8px 10px 8px 24px", background: "#FBEFD3", border: "1px solid #E3C879", borderRadius: 6, fontSize: 12, color: "#6B4E12" } },
                warn.slice(0, 8).map(function (m, k) { return React.createElement("li", { key: k }, m); }))
            : React.createElement("div", { style: { margin: "0 0 10px", padding: "6px 10px", background: "#E8F0E6", border: "1px solid #BcD3B8", borderRadius: 6, fontSize: 12, color: "#2E5A2A" } }, "No overlaps or overloads \u2014 layout is clean."),
        msg ? React.createElement("div", { style: { margin: "0 0 10px", padding: "8px 10px", background: "#FBE3E1", border: "1px solid #D98A82", borderRadius: 6, fontSize: 12, color: "#7A241C", fontWeight: 600 } }, msg) : null,
        React.createElement("div", { style: { marginBottom: 10 } },
            field("Package  \u2014  pick another here anytime", React.createElement("div", { style: { display: "flex", gap: 6, alignItems: "center" } },
                React.createElement("select", { value: idx, onChange: function (e) { setSi(+e.target.value); }, style: { flex: 1, padding: "6px", border: "1px solid #C9C2B4", borderRadius: 4, fontSize: 13 } },
                    placed.map(function (q, i2) { return React.createElement("option", { key: i2, value: i2 }, "#" + q.n + "  " + (q.item.name || "(no name)").slice(0, 40) + "  \u2014 L" + (q.stackLayer || 1) + "  \u2014 " + q.item.kg.toLocaleString() + " kg"); })),
                React.createElement("button", { onClick: function () { setSi(Math.max(0, idx - 1)); }, style: mini, title: "Previous package" }, "\u25C0"),
                React.createElement("button", { onClick: function () { setSi(Math.min(placed.length - 1, idx + 1)); }, style: mini, title: "Next package" }, "\u25B6"),
                React.createElement("button", { onClick: function () { setSi(heaviestIdx); }, style: mini, title: "Jump to the heaviest package in this container" }, "\u2696 heaviest")))),
        React.createElement("div", { style: { display: "flex", gap: 14, flexWrap: "wrap", alignItems: "flex-end", marginBottom: 12 } },
            field("Along length (mm)", React.createElement("div", { style: { display: "flex", gap: 4, alignItems: "center" } },
                React.createElement("button", { onClick: function () { nudge("x", -100); }, style: mini }, "\u25C0 nose"),
                React.createElement("input", { style: num, value: p.x, onChange: function (e) { setNum("x", e.target.value); } }),
                React.createElement("button", { onClick: function () { nudge("x", 100); }, style: mini }, "door \u25B6"))),
            field("Across width (mm)", React.createElement("div", { style: { display: "flex", gap: 4, alignItems: "center" } },
                React.createElement("button", { onClick: function () { nudge("y", -100); }, style: mini }, "\u25C0"),
                React.createElement("input", { style: num, value: p.y, onChange: function (e) { setNum("y", e.target.value); } }),
                React.createElement("button", { onClick: function () { nudge("y", 100); }, style: mini }, "\u25B6"))),
            field("Layer", React.createElement("select", { value: p.stackLayer || 1, onChange: function (e) { setLayer(+e.target.value); }, style: { padding: "5px 6px", border: "1px solid #C9C2B4", borderRadius: 4, fontSize: 13 } },
                Array.from({ length: maxLayer + 1 }, function (_, k) { return React.createElement("option", { key: k, value: k + 1 }, k === 0 ? "1 (floor)" : (k + 1)); }))), field("Rotate", React.createElement("button", { onClick: rotate, style: mini, title: "Turn 90\u00b0 \u2014 swap length & width" }, "\u27F3 90\u00b0"))),
        React.createElement("div", { style: { display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-end" } },
            field("Heaviest \u2192 end \u2014 re-pack (one click)", React.createElement("div", { style: { display: "flex", gap: 4 } },
                React.createElement("button", { onClick: function () { heaviestToEnd("nose"); }, style: mini, title: "Select the heaviest package and send it to the nose, sliding the rest" }, "\u2696 \u21E4 nose"),
                React.createElement("button", { onClick: function () { heaviestToEnd("door"); }, style: Object.assign({}, mini, { background: "#1B2430", color: "#fff", borderColor: "#1B2430" }), title: "Select the heaviest package and send it to the door, sliding the rest" }, "\u2696 door \u21E5"))),
            field("Send to end (re-packs this container)", React.createElement("div", { style: { display: "flex", gap: 4 } },
                React.createElement("button", { onClick: function () { sendEnd("nose"); }, style: mini, title: "Move this package to the nose; the others slide toward the door to make room" }, "\u21E4 to nose"),
                React.createElement("button", { onClick: function () { sendEnd("door"); }, style: mini, title: "Move this package to the door; the others slide toward the nose to make room" }, "to door \u21E5"))),
            field("Loading order", React.createElement("div", { style: { display: "flex", gap: 4 } },
                React.createElement("button", { onClick: function () { reseq(-1); }, style: mini, title: "Load this package earlier" }, "\u25B2 earlier"),
                React.createElement("button", { onClick: function () { reseq(1); }, style: mini, title: "Load this package later" }, "later \u25BC"))),
            others.length ? field("Move to container", React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } },
                others.map(function (o) { return React.createElement("button", { key: o.i, onClick: function () { moveTo(o.i); }, style: mini, title: "Move this package into " + o.f.spec.code + " #" + o.f.index }, "\u2192 " + o.f.spec.code + " #" + o.f.index); }))) : null),
        React.createElement("p", { style: { fontSize: 11, color: "#5A6472", margin: "10px 0 0" } },
            "Move / rotate / re-order / move-between-containers edit the plan in place (no re-pack). \u201cSend to end\u201d and \u201cHeaviest \u2192 end\u201d re-pack THIS container so the rest arrange cleanly around the pinned piece \u2014 other containers are untouched. 3D, top view, sequence and PDF follow all changes.")
    );
}
// ===== END MANUAL ADJUST =====================================================

function loadingOrder(eng) {
    if (eng.manualOrder && eng.manualOrder.length === eng.placed.length && eng.manualOrder.every((p) => eng.placed.indexOf(p) >= 0)) return eng.manualOrder.slice();
    const placed = eng.placed,
        supports = placed.map((p) => {
            if (p.z <= EPS) return [];
            const sup = [];
            return placed.forEach((q, j) => {
                if (q !== p && Math.abs(q.z + q.h - p.z) <= 2) {
                    const ox = Math.max(0, Math.min(p.x + p.l, q.x + q.l) - Math.max(p.x, q.x)),
                        oy = Math.max(0, Math.min(p.y + p.w, q.y + q.w) - Math.max(p.y, q.y));
                    ox * oy > 0 && sup.push(j);
                }
            }), sup;
        }),
        loaded = new Array(placed.length).fill(!1),
        order = [];
    for (let k = 0; k < placed.length; k++) {
        let best = -1;
        for (let i = 0; i < placed.length; i++) {
            if (loaded[i] || !supports[i].every((j) => loaded[j])) continue;
            if (best === -1) {
                best = i;
                continue;
            }
            const a = placed[i],
                b = placed[best],
                sameX = Math.abs(a.x - b.x) <= 1,
                sameXZ = sameX && Math.abs(a.z - b.z) <= 1;
            (a.x < b.x - 1 || sameX && a.z < b.z - 1 || sameXZ && a.y < b.y - 1) && (best = i);
        }
        if (best === -1) {
            for (let i = 0; i < placed.length; i++)
                if (!loaded[i]) {
                    best = i;
                    break;
                }
        }
        loaded[best] = !0, order.push(placed[best]);
    }
    return order;
}

function weightDistribution(eng) {
    var _a;
    const s = eng.spec,
        floorUnits = eng.placed.filter((p) => p.z <= 1e-6);
    if (!floorUnits.length) return {
        ok: !0,
        segments: [],
        warnings: [],
        restLenM: 0,
        permTonnes: 0,
        util: 0
    };
    const minX = Math.min(...floorUnits.map((p) => p.x)),
        restLenM = (Math.max(...floorUnits.map((p) => p.x + p.l)) - minX) / 1e3,
        totalKg = (_a = eng.weight) != null ? _a : eng.placed.reduce((a, p) => a + p.item.kg, 0),
        permTonnes = restingLimit(s, restLenM),
        util = totalKg / 1e3 / permTonnes * 100,
        warnings = [];
    let ok = !0;
    if (s.fam === "FR" || s.fam === "OT") {
        const halfPayloadT = s.payload / 2e3,
            overHalf = totalKg / 1e3 > halfPayloadT;
        if (util > 100.5) {
            ok = !1;
            let needLen = restLenM;
            for (let l = restLenM; l <= (sizeClass(s) === "40" ? 12 : 6); l += 0.1)
                if (totalKg / 1e3 <= restingLimit(s, l)) {
                    needLen = l;
                    break;
                }
            const perEnd = Math.ceil(Math.max(0, (needLen - restLenM) * 1e3) / 2);
            needLen > restLenM && perEnd <= BEDDING_MAX_EXTEND ? warnings.push(
                `Beam load exceeded: ${(totalKg / 1e3).toFixed(1)} t on a ${restLenM.toFixed(1)} m support length (limit ${permTonnes.toFixed(1)} t). Extend the resting length with cross-beams / longitudinal timbers to ~${needLen.toFixed(1)} m \u2014 max +1,000 mm each end. Cargo must bear on the two outer main beams.`
            ) : warnings.push(
                `Beam load exceeded: ${(totalKg / 1e3).toFixed(1)} t on ${restLenM.toFixed(1)} m (limit ${permTonnes.toFixed(1)} t). Even with beam extension this platform class is insufficient \u2014 use a higher-rated flat rack or a longer unit.`
            );
        } else
            overHalf && warnings.push(
                `Load is ${(totalKg / 1e3).toFixed(1)} t (over half the ${(s.payload / 1e3).toFixed(1)} t payload): weight must be spread over the resting length on the two main beams \u2014 do not concentrate on a short span.`
            );
        const cgx = eng.placed.reduce((a, p) => a + p.item.kg * (p.x + p.l / 2), 0) / totalKg;
        return Math.abs(cgx - s.L / 2) / s.L > 0.1 && warnings.push(
            `Load not centred on the platform (CG ${((cgx - s.L / 2) / 1e3).toFixed(2)} m off centre) \u2014 re-position so both main beams share the weight and the unit lifts level.`
        ), {
            ok,
            restLenM,
            permTonnes,
            util,
            open: !0,
            halfPayloadT,
            warnings
        };
    }
    if (util > 100.5) {
        ok = !1;
        let needLen = restLenM;
        for (let l = restLenM; l <= (sizeClass(s) === "40" ? 12 : 6); l += 0.1)
            if (totalKg / 1e3 <= restingLimit(s, l)) {
                needLen = l;
                break;
            }
        const perEnd = Math.ceil(Math.max(0, (needLen - restLenM) * 1e3) / 2);
        perEnd <= BEDDING_MAX_EXTEND ? warnings.push(
            `Line load exceeded: ${(totalKg / 1e3).toFixed(1)} t on ${restLenM.toFixed(1)} m resting length (limit ${permTonnes.toFixed(1)} t). Add floor bedding (timber/steel beams) to extend resting length to ~${needLen.toFixed(1)} m \u2014 about ${perEnd} mm each end.`
        ) : warnings.push(
            `Line load exceeded: ${(totalKg / 1e3).toFixed(1)} t on ${restLenM.toFixed(1)} m (limit ${permTonnes.toFixed(1)} t). Bedding alone is insufficient (needs >${BEDDING_MAX_EXTEND} mm/end) \u2014 use a longer/stronger container or redistribute.`
        );
    }
    return eng.placed.forEach((p) => {
        if (p.item.kg > 0.3 * s.payload) {
            const contactM = p.l / 1e3,
                permForItem = restingLimit(s, contactM);
            p.item.kg / 1e3 > permForItem + 0.05 && warnings.push(
                `${p.item.name} #${p.n} is a heavy unit (${(p.item.kg / 1e3).toFixed(1)} t, >30% payload) resting on only ${contactM.toFixed(1)} m \u2014 needs bedding to spread the load.`
            );
        }
    }), {
        ok,
        restLenM,
        permTonnes,
        util,
        floorType: s.floor,
        open: !1,
        warnings
    };
}
const zoneOf = (p, s) => {
    const cx = (p.x + p.l / 2) / s.L;
    return cx < 1 / 3 ? "Nose" : cx < 2 / 3 ? "Mid" : "Door";
};
var PL_DICT = {
    name: [
        "description",
        "desc",
        "cargo",
        "commodity",
        "goods",
        "item",
        "name",
        "product",
        "case mark",
        "marks",
        "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
        "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",
        "\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",
        "\u0E0A\u0E37\u0E48\u0E2D",
        "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
        "\u54C1\u540D",
        "\u5546\u54C1",
        "\u540D\u79F0",
        "\u54C1\u76EE"
    ],
    qty: [
        "qty",
        "q'ty",
        "quantity",
        "pcs",
        "pc",
        "pieces",
        "piece",
        "number of pieces",
        "number of",
        "packages",
        "package qty",
        "cases",
        "case",
        "ctn",
        "ctns",
        "carton",
        "cartons",
        "boxes",
        "nos",
        "bundles",
        "\u0E08\u0E33\u0E19\u0E27\u0E19",
        "\u0E08\u0E4D\u0E32\u0E19\u0E27\u0E19",
        "\u6570\u91CF",
        "\u500B\u6570",
        "\u7BB1\u6570"
    ],
    length: ["length", "long", "len", "l", "\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27", "\u0E22\u0E32\u0E27", "\u9577\u3055", "\u9577", "\u7E26"],
    width: ["width", "wide", "w", "\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07", "\u0E01\u0E27\u0E49\u0E32\u0E07", "\u5E45", "\u5DEB", "\u6A2A"],
    height: ["height", "high", "ht", "h", "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07", "\u0E2A\u0E39\u0E07", "\u9AD8\u3055", "\u9AD8"],
    dim: ["dimension", "dimensions", "size", "measurement", "measurements", "meas", "dim", "l*w*h", "lxwxh", "l x w x h", "lwh", "\u0E02\u0E19\u0E32\u0E14", "\u5BF8\u6CD5", "\u30B5\u30A4\u30BA"],
    weight: ["weight", "wt", "kgs", "kg", "gross weight", "gross", "gw", "gross wt", "\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01", "\u91CD\u91CF", "\u91CD\u3055", "\u7DCF\u91CD\u91CF"],
    netwt: ["net weight", "net wt", "nett weight", "nett", "net", "nw", "\u0E19\u0E49\u0E33\u0E2B\u0E19\u0E31\u0E01\u0E2A\u0E38\u0E17\u0E18\u0E34", "\u7D14\u91CD\u91CF", "\u7D14"],
    pkg: ["package", "pkg", "pkg type", "package type", "packing", "wooden case", "crate", "pallet", "skid", "type of package", "\u0E2B\u0E35\u0E1A\u0E2B\u0E48\u0E2D", "\u68B1\u5305", "\u8377\u59FF"]
};

function plNorm(s) {
    return String(s == null ? "" : s).toLowerCase().replace(/[()\uff08\uff09\[\]:\uff1a.\uff0e\u00b7]/g, " ").replace(/\s+/g, " ").trim();
}

function plLetters(s) {
    return plNorm(s).replace(/[^a-z\u0e00-\u0e7f\u3040-\u309f\u30a0-\u30ff\u4e00-\u9fff]/g, "");
}

function plHeaderScores(cell) {
    var c = plNorm(cell),
        out = {};
    if (!c) return out;
    var toks = c.split(" ");
    for (var f in PL_DICT) {
        for (var best = 0, list = PL_DICT[f], i = 0; i < list.length; i++) {
            var k = plNorm(list[i]),
                sc = 0;
            k.length === 1 ? plLetters(cell) === k ? sc = 70 : toks.indexOf(k) >= 0 && (sc = 45) : c === k ? sc = 100 : toks.indexOf(k) >= 0 ? sc = 80 : k.length >= 3 && c.indexOf(k) >= 0 && (sc = 60), sc > best && (best = sc);
        }
        best && (out[f] = best);
    }
    var isNet = /(^|\s)(net|nett|n w|nw)(\s|$)|\u0e2a\u0e38\u0e17\u0e18\u0e34|\u7d14/.test(c),
        isGross = /(^|\s)(gross|g w|gw)(\s|$)|\u7dcf/.test(c);
    return (out.weight || out.netwt) && (isNet ? (out.netwt = Math.max(out.netwt || 0, 90), delete out.weight, delete out.width) : isGross && (out.weight = Math.max(out.weight || 0, 90), delete out.netwt, delete out.width)), out;
}

function plNum(v) {
    if (typeof v == "number") return v;
    var m = String(v).replace(/,/g, "").match(/-?\d+(?:\.\d+)?/);
    return m ? parseFloat(m[0]) : null;
}
var PL_DIMRE = /(\d+(?:[.,]\d+)?)\s*[x\u00d7*\u2715\u2573]\s*(\d+(?:[.,]\d+)?)\s*[x\u00d7*\u2715\u2573]\s*(\d+(?:[.,]\d+)?)/i;

function plNumericFrac(r) {
    var v = (r || []).filter(function(x) {
        return String(x == null ? "" : x).trim() !== "";
    });
    return v.length ? v.filter(function(x) {
        return /^[\d.,]+$/.test(String(x).trim());
    }).length / v.length : 0;
}

function plRowHeaderScore(r) {
    for (var n = 0, rr = r || [], i = 0; i < rr.length; i++)
        Object.keys(plHeaderScores(rr[i])).length && n++;
    return n;
}

function plFindHeaderBand(rows) {
    for (var best = {
            i: 0,
            s: -1
        }, scan = Math.min(rows.length, 25), i = 0; i < scan; i++) {
        var s = plRowHeaderScore(rows[i]);
        s > best.s && (best = {
            i,
            s
        });
    }
    for (var start = best.i, end = best.i; start - 1 >= 0 && plRowHeaderScore(rows[start - 1]) >= 2 && plNumericFrac(rows[start - 1]) < 0.4;) start--;
    for (; end + 1 < rows.length && plRowHeaderScore(rows[end + 1]) >= 2 && plNumericFrac(rows[end + 1]) < 0.4;) end++;
    return {
        start,
        end
    };
}

function plMergeBand(rows, start, end) {
    var ncol = 0,
        r;
    for (r = start; r <= end; r++) ncol = Math.max(ncol, (rows[r] || []).length);
    for (var h = [], c = 0; c < ncol; c++) {
        var parts = [];
        for (r = start; r <= end; r++) {
            var v = (rows[r] || [])[c];
            v && String(v).trim() && parts.push(String(v).trim());
        }
        h[c] = parts.join(" ");
    }
    return h;
}

function plUnitFromHeader(header) {
    var blob = header.map(plNorm).join(" "),
        len = null,
        wt = null;
    return /\bmm\b|\u0e21\u0e21|\u30df\u30ea/.test(blob) ? len = "mm" : /\bcm\b|\u0e0b\u0e21|\u30bb\u30f3\u30c1/.test(blob) ? len = "cm" : /(^|\s)m(\s|$)|\u0e40\u0e21\u0e15\u0e23|\u30e1\u30fc\u30c8\u30eb/.test(blob) && (len = "m"), /\b(mt|ton|tonne|\u0e15\u0e31\u0e19|\u30c8\u30f3)\b/.test(blob) ? wt = "t" : /\b(kgs?|\u0e01\u0e01|\u30ad\u30ed)\b/.test(blob) && (wt = "kg"), {
        len,
        wt
    };
}

function plInferLenUnit(vals) {
    var nums = vals.filter(function(v) {
        return typeof v == "number" && v > 0;
    }).sort(function(a, b) {
        return a - b;
    });
    if (!nums.length) return null;
    var med = nums[Math.floor(nums.length / 2)];
    return med < 30 ? "m" : med < 400 ? "cm" : "mm";
}

function plDataFit(colVals, field) {
    var v = colVals.filter(function(x) {
        return String(x == null ? "" : x).trim() !== "";
    });
    if (!v.length) return 0;

    function frac(pred) {
        return v.filter(pred).length / v.length;
    }
    var isNum = function(x) {
            return /^-?[\d.,]+$/.test(String(x).trim());
        },
        isPos = function(x) {
            var n = plNum(x);
            return n != null && n > 0;
        },
        hasLet = function(x) {
            return /[a-z\u0e00-\u0e7f\u3040-\u309f\u30a0-\u30ff\u4e00-\u9fff]/i.test(String(x));
        };
    switch (field) {
        case "qty":
            return frac(isPos) > 0.8 && frac(hasLet) < 0.2 ? 25 : frac(isNum) > 0.8 ? 5 : -30;
        case "length":
        case "width":
        case "height":
        case "weight":
        case "netwt":
            return frac(isPos) > 0.8 ? 20 : -30;
        case "name":
            return frac(hasLet) > 0.6 ? 20 : -20;
        case "dim":
            return frac(function(x) {
                return PL_DIMRE.test(String(x));
            }) > 0.5 ? 30 : -10;
        case "pkg":
            return frac(hasLet) > 0.6 ? 12 : -5;
        default:
            return 0;
    }
}

function plDetect(rows) {
    var flags = [],
        band = plFindHeaderBand(rows),
        header = plMergeBand(rows, band.start, band.end),
        ncol = 0,
        i;
    for (i = 0; i < rows.length; i++) ncol = Math.max(ncol, (rows[i] || []).length);
    for (var body = rows.slice(band.end + 1).filter(function(r) {
            return r.some(function(x) {
                return String(x == null ? "" : x).trim() !== "";
            });
        }), colVals = function(c2) {
            return body.map(function(r) {
                return r[c2];
            });
        }, singular = ["name", "qty", "length", "width", "height", "dim", "weight", "netwt", "pkg"], cand = [], c = 0; c < ncol; c++)
        for (var hs = plHeaderScores(header[c]), si = 0; si < singular.length; si++) {
            var fld = singular[si],
                h = hs[fld] || 0;
            h && cand.push({
                c,
                f: fld,
                score: h + plDataFit(colVals(c), fld)
            });
        }
    cand.sort(function(a, b) {
        return b.score - a.score;
    });
    var map = {},
        usedCol = {};
    cand.forEach(function(x) {
        x.score < 30 || map[x.f] != null || usedCol[x.c] || (map[x.f] = x.c, usedCol[x.c] = 1);
    }), map.weight == null && map.netwt != null ? (map.weight = map.netwt, flags.push("Only NET/nett weight found \u2014 using it; GROSS is what you lift, please confirm.")) : map.weight != null && map.netwt != null && flags.push("Both gross & net weight columns present \u2014 using GROSS.");
    var units = plUnitFromHeader(header),
        cargo = [],
        groupName = "";
    body.forEach(function(r) {
        var c0 = plNorm(r[0]),
            cAll = r.map(plNorm).join(" ");
        if (!(/^total/.test(c0) || /total \d+ (pallet|piece|case|ctn|carton|box)/.test(cAll) || /\u0e23\u0e27\u0e21|\u5408\u8a08|\u5c0f\u8a08/.test(cAll))) {
            var L = map.length != null ? plNum(r[map.length]) : null,
                W = map.width != null ? plNum(r[map.width]) : null,
                H = map.height != null ? plNum(r[map.height]) : null,
                src = "cols";
            if ((L == null || W == null || H == null) && map.dim != null) {
                var m = String(r[map.dim] || "").match(PL_DIMRE);
                m && (L = parseFloat(m[1].replace(",", ".")), W = parseFloat(m[2].replace(",", ".")), H = parseFloat(m[3].replace(",", ".")), src = "dim-cell");
            }
            if ((L == null || W == null || H == null) && map.name != null) {
                var m2 = String(r[map.name] || "").match(PL_DIMRE);
                m2 && (L = parseFloat(m2[1].replace(",", ".")), W = parseFloat(m2[2].replace(",", ".")), H = parseFloat(m2[3].replace(",", ".")), src = "in-name");
            }
            if (L == null && W == null && H == null) {
                var t = r.find(function(x) {
                    return /[a-z\u0e00-\u0e7f\u3040-\u309f\u30a0-\u30ff\u4e00-\u9fff]/i.test(String(x)) && String(x).trim().length > 6;
                });
                t && !/^total/i.test(plNorm(t)) && (groupName = String(t).trim());
                return;
            }
            var nm = map.name != null ? String(r[map.name] == null ? "" : r[map.name]).trim() : "";
            (!nm || /^\d+(\.\d+)?$/.test(nm)) && (nm = groupName || nm), cargo.push({
                name: nm,
                qty: map.qty != null && plNum(r[map.qty]) || 1,
                L,
                W,
                H,
                kg: map.weight != null ? plNum(r[map.weight]) : null,
                pkg: map.pkg != null ? String(r[map.pkg] == null ? "" : r[map.pkg]).trim() : "",
                dimSource: src,
                stack: !1
            });
        }
    });
    var lenUnit = units.len,
        lenGuessed = !1;
    lenUnit || (lenUnit = plInferLenUnit(cargo.reduce(function(a, c2) {
        return a.concat([c2.L, c2.W, c2.H]);
    }, [])), lenUnit && (lenGuessed = !0, flags.push('Length unit not stated \u2014 GUESSED "' + lenUnit + '" from the value sizes. CONFIRM before use.')));
    var wtUnit = units.wt || "kg";
    return !units.wt && map.weight != null && flags.push('Weight unit not stated \u2014 assumed "kg". Confirm.'), ["length", "width", "height"].forEach(function(f) {
        map[f] != null && plLetters(header[map[f]]).length <= 1 && flags.push('Column "' + header[map[f]] + '" matched ' + f + " by a single letter \u2014 low confidence, please verify.");
    }), {
        headerRow: band.start,
        header,
        map,
        band,
        units: {
            len: lenUnit || "mm",
            lenGuessed,
            wt: wtUnit
        },
        cargo,
        flags
    };
}
var PL_REC_DIM = /(\d+(?:[.,]\d+)?)\s*[x\u00d7*]\s*(\d+(?:[.,]\d+)?)\s*[x\u00d7*]\s*(\d+(?:[.,]\d+)?)\s*(cm|mm|m)?/i,
    PL_REC_WT = /([\d,]+(?:\.\d+)?)\s*kg\s*\/\s*([\d,]+(?:\.\d+)?)\s*kg/i,
    PL_REC_WT1 = /([\d,]+(?:\.\d+)?)\s*kg\b/i,
    PL_REC_QTY = /(\d+)\s*(?:pc\(s\)|pcs|piece|pieces|set\(s\)|sets?|units?|nos)\b/i,
    PL_REC_PKG = /(wooden\s+skid|wooden\s+case|wooden\s+euro|wooden\s+box|wooden\s+pallet|pallet|crate|case|skid|carton|drum|bundle)/i;

function plCleanName(s) {
    return String(s || "").replace(/No\.\s*[A-Z]{2,}\d+/g, " ").replace(/\d+'?\s*(?:hc|gp|rf|ot)?\s*container/ig, " ").replace(/exclusive\s+containertara/ig, " ").replace(/seal\s*:\s*\S+/ig, " ").replace(/atotech[^\n]*/ig, " ").replace(/[\u4e00-\u9fff\u3040-\u30ff]/g, " ").replace(/\bno\.\s*\d+\b/ig, " ").replace(/\bpc\(s\)|\bset\(s\)|\(s\)/ig, " ").replace(/[|]+/g, " ").replace(/\s{2,}/g, " ").trim();
}

function plExtractRecords(rows) {
    var lines = rows.map(function(r) {
            return r.filter(function(c) {
                return String(c).trim() !== "";
            }).join("  ").trim();
        }).filter(function(s) {
            return s;
        }),
        recs = [],
        cur = null;
    lines.forEach(function(ln) {
        var isPkgNo = /(^|\s)No\.\s*\d{1,3}(\s|$)/.test(ln) && !/container/i.test(ln);
        isPkgNo ? (cur && recs.push(cur), cur = {
            lines: [ln]
        }) : cur && cur.lines.push(ln);
    }), cur && recs.push(cur);
    var cargo = [],
        unitSeen = null;
    recs.forEach(function(rec) {
        var text = rec.lines.join("  "),
            dm = text.match(PL_REC_DIM);
        if (dm) {
            var unit = (dm[4] || "").toLowerCase();
            unit && !unitSeen && (unitSeen = unit);
            var L = parseFloat(dm[1].replace(/,/g, "")),
                W = parseFloat(dm[2].replace(/,/g, "")),
                H = parseFloat(dm[3].replace(/,/g, "")),
                wm = text.match(PL_REC_WT),
                kg = null;
            if (wm) kg = parseFloat(wm[1].replace(/,/g, ""));
            else {
                var w1 = text.match(PL_REC_WT1);
                w1 && (kg = parseFloat(w1[1].replace(/,/g, "")));
            }
            var qm = text.match(PL_REC_QTY),
                qty = qm ? parseInt(qm[1], 10) : 1,
                pm = text.match(PL_REC_PKG),
                pkg = pm ? pm[1] : "",
                name = "",
                idx = text.search(PL_REC_DIM);
            if (idx >= 0) {
                var after = text.slice(idx + dm[0].length).replace(PL_REC_WT, "  ").trim();
                name = plCleanName(after.split(/\s{2,}|\bNo\.\s*\d/i)[0]);
            }
            for (var i = 1; i < rec.lines.length; i++) {
                var l = rec.lines[i];
                if (!PL_REC_DIM.test(l) && /[a-z]/i.test(l) && !/\bkg\b|container|seal|atotech|^\s*no\./i.test(l)) {
                    var extra = plCleanName(l);
                    extra && name.indexOf(extra) < 0 && (name = (name + " " + extra).trim());
                }
            }
            L > 0 && W > 0 && H > 0 && cargo.push({
                name,
                qty: Math.max(1, qty),
                L,
                W,
                H,
                kg,
                pkg,
                dimSource: "record",
                stack: !1
            });
        }
    });
    var lenUnit = unitSeen || plInferLenUnit(cargo.reduce(function(a, c) {
            return a.concat([c.L, c.W, c.H]);
        }, [])) || "mm",
        flags = ["Read from a block-style packing list \u2014 please verify each row, and add the correct package weight if any are blank."];
    return {
        header: [],
        map: {},
        cargo,
        units: {
            len: lenUnit,
            lenGuessed: !unitSeen,
            wt: "kg"
        },
        flags,
        mode: "records"
    };
}

function plDetectAny(rows) {
    var grid = plDetect(rows),
        rec = plExtractRecords(rows);
    return rec.cargo.length > grid.cargo.length ? rec : grid;
}

function parsePackingList(wb) {
    var best = null;
    return wb.SheetNames.forEach(function(nm) {
        var rows = XLSX.utils.sheet_to_json(wb.Sheets[nm], {
            header: 1,
            defval: "",
            blankrows: !1
        });
        if (rows.length) {
            var d = plDetectAny(rows);
            d.sheetName = nm, (!best || d.cargo.length > best.cargo.length) && (best = d);
        }
    }), best || {
        cargo: [],
        flags: ["No readable sheet found."],
        units: {
            len: "mm",
            wt: "kg"
        },
        map: {},
        header: [],
        sheetName: ""
    };
}

function plEnsurePdfWorker() {
    if (typeof pdfjsLib == "undefined") return !1;
    if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
        var el = document.getElementById("pdfjs-worker");
        el && el.textContent && (pdfjsLib.GlobalWorkerOptions.workerSrc = URL.createObjectURL(new Blob([el.textContent], {
            type: "application/javascript"
        })));
    }
    return !0;
}

function plItemsToRows(items, yTol, xGap, topDown) {
    yTol = yTol || 3, xGap = xGap || 18;
    var valid = items.filter(function(t) {
        return String(t.str).trim() !== "";
    });
    if (!valid.length) return [];
    var sorted = valid.slice().sort(function(a, b) {
            return topDown ? a.y - b.y : b.y - a.y;
        }),
        rows = [],
        cur = null;
    sorted.forEach(function(it) {
        (!cur || Math.abs(it.y - cur.y) > yTol) && (cur = {
            y: it.y,
            cells: []
        }, rows.push(cur)), cur.cells.push(it);
    });
    var xs = valid.map(function(t) {
            return t.x;
        }).sort(function(a, b) {
            return a - b;
        }),
        bounds = [],
        prev = xs[0];
    xs.forEach(function(x) {
        x - prev > xGap && bounds.push((prev + x) / 2), prev = x;
    });

    function colOf(x) {
        for (var i = 0; i < bounds.length && x > bounds[i];) i++;
        return i;
    }
    return rows.map(function(r) {
        var arr = [];
        r.cells.sort(function(a, b) {
            return a.x - b.x;
        }).forEach(function(c) {
            var ci = colOf(c.x);
            arr[ci] = (arr[ci] ? arr[ci] + " " : "") + String(c.str).trim();
        });
        for (var i = 0; i < arr.length; i++) arr[i] == null && (arr[i] = "");
        return arr;
    });
}
var PL_OCR_WORKER = null;

function plB64Bytes(id) {
    for (var el = document.getElementById(id), b64 = el ? el.textContent.trim() : "", bin = atob(b64), a = new Uint8Array(bin.length), i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i);
    return a;
}

function plInitOcr(onProgress) {
    return PL_OCR_WORKER || (PL_OCR_WORKER = (async function() {
        var workerURL = URL.createObjectURL(new Blob([plB64Bytes("tess-worker-b64")], {
                type: "application/javascript"
            })),
            coreURL = URL.createObjectURL(new Blob([plB64Bytes("tess-corejs-b64")], {
                type: "application/javascript"
            })),
            wasmBytes = plB64Bytes("tess-wasm-b64"),
            engBytes = plB64Bytes("tess-eng-b64");
        if (!window.__plOcrFetch) {
            var _f = window.fetch ? window.fetch.bind(window) : null;
            window.fetch = function(u, o) {
                var s = typeof u == "string" ? u : u && u.url || "";
                return /tesseract-core.*\.wasm$/i.test(s) ? Promise.resolve(new Response(wasmBytes, {
                    headers: {
                        "Content-Type": "application/wasm"
                    }
                })) : /\.traineddata(\.gz)?$/i.test(s) ? Promise.resolve(new Response(engBytes, {
                    headers: {
                        "Content-Type": "application/octet-stream"
                    }
                })) : _f ? _f(u, o) : Promise.reject(new Error("offline: " + s));
            }, window.__plOcrFetch = !0;
        }
        return await Tesseract.createWorker("eng", 1, {
            workerPath: workerURL,
            corePath: coreURL,
            langPath: ".",
            gzip: !1,
            workerBlobURL: !1,
            logger: onProgress || function() {}
        });
    })(), PL_OCR_WORKER);
}
async function parsePackingListImage(file, onProgress) {
    var worker = await plInitOcr(onProgress),
        res = await worker.recognize(file, {}, {
            blocks: !0
        }),
        words = [];
    (res.data.blocks || []).forEach(function(b) {
        (b.paragraphs || []).forEach(function(p) {
            (p.lines || []).forEach(function(l) {
                (l.words || []).forEach(function(w) {
                    var bb = w.bbox;
                    words.push({
                        str: w.text,
                        x: bb.x0,
                        y: (bb.y0 + bb.y1) / 2,
                        h: bb.y1 - bb.y0
                    });
                });
            });
        });
    });
    var hs = words.map(function(w) {
            return w.h;
        }).sort(function(a, b) {
            return a - b;
        }),
        mh = hs.length ? hs[Math.floor(hs.length / 2)] : 16,
        rows = plItemsToRows(words, Math.max(6, mh * 0.6), Math.max(20, mh * 1.8), !0),
        d = plDetectAny(rows);
    return d.sheetName = "Image OCR (English)", d.isOcr = !0, d;
}
async function parsePackingListPdf(buf) {
    plEnsurePdfWorker();
    for (var doc = await pdfjsLib.getDocument({
            data: new Uint8Array(buf),
            isEvalSupported: !1
        }).promise, all = [], p = 1; p <= doc.numPages; p++) {
        var page = await doc.getPage(p),
            tc = await page.getTextContent(),
            items = tc.items.map(function(i) {
                return {
                    str: i.str,
                    x: i.transform[4],
                    y: i.transform[5]
                };
            });
        all = all.concat(plItemsToRows(items));
    }
    var d = plDetectAny(all);
    return d.sheetName = "PDF (" + doc.numPages + " page" + (doc.numPages > 1 ? "s" : "") + ")", d.isPdf = !0, d;
}
var PL_LEN_FACTOR = {
        mm: 1,
        cm: 10,
        m: 1e3
    },
    PL_WT_FACTOR = {
        kg: 1,
        t: 1e3
    };

function PackingListModal(props) {
    var data = props.data,
        btn2 = props.btn,
        st = React.useState(function() {
            return data.cargo.map(function(c) {
                return {
                    name: c.name,
                    qty: c.qty == null ? 1 : c.qty,
                    L: c.L == null ? "" : c.L,
                    W: c.W == null ? "" : c.W,
                    H: c.H == null ? "" : c.H,
                    kg: c.kg == null ? "" : c.kg,
                    pkg: c.pkg || "",
                    stack: !!c.stack,
                    use: !0
                };
            });
        }),
        rows = st[0],
        setRows = st[1],
        lu = React.useState(data.units.len || "mm"),
        lenUnit = lu[0],
        setLenUnit = lu[1],
        wu = React.useState(data.units.wt || "kg"),
        wtUnit = wu[0],
        setWtUnit = wu[1];

    function setCell(i, field, val) {
        setRows(function(prev) {
            var n = prev.slice();
            return n[i] = Object.assign({}, n[i]), n[i][field] = val, n;
        });
    }
    var mapNames = Object.keys(data.map || {}).filter(function(f) {
        return f !== "netwt";
    }).map(function(f) {
        return f + ' \u2190 "' + data.header[data.map[f]] + '"';
    }).join("   ");

    function apply() {
        var lf = PL_LEN_FACTOR[lenUnit] || 1,
            wf = PL_WT_FACTOR[wtUnit] || 1,
            out = [],
            base = Date.now();
        rows.forEach(function(r, i) {
            if (r.use) {
                var L = Math.round((parseFloat(r.L) || 0) * lf),
                    W = Math.round((parseFloat(r.W) || 0) * lf),
                    H = Math.round((parseFloat(r.H) || 0) * lf),
                    kg = Math.round((parseFloat(r.kg) || 0) * wf),
                    qty = Math.max(1, parseInt(r.qty, 10) || 1);
                r.name && L > 0 && W > 0 && H > 0 && kg > 0 && out.push({
                    id: base + i,
                    name: String(r.name).trim(),
                    pkg: String(r.pkg || "").trim(),
                    L,
                    W,
                    H,
                    kg,
                    qty,
                    stack: !!r.stack,
                    turn: !0,
                    maxLayers: r.stack ? 3 : 1,
                    maxStackKg: 0,
                    contactCm2: 0,
                    temp: !1,
                    haz: "",
                    drop: 1
                });
            }
        }), props.onApply(out);
    }
    var usable = rows.filter(function(r) {
            return r.use && r.name && parseFloat(r.L) > 0 && parseFloat(r.W) > 0 && parseFloat(r.H) > 0 && parseFloat(r.kg) > 0;
        }).length,
        th2 = function(t) {
            return React.createElement("th", {
                style: {
                    textAlign: "left",
                    padding: "4px 6px",
                    fontSize: 11,
                    color: "#5A6472",
                    borderBottom: "1px solid #C9C2B4",
                    whiteSpace: "nowrap"
                }
            }, t);
        },
        inp2 = function(i, f, w) {
            return React.createElement("input", {
                value: rows[i][f],
                onChange: function(e) {
                    setCell(i, f, e.target.value);
                },
                style: {
                    width: w || 60,
                    padding: "3px 4px",
                    border: "1px solid #C9C2B4",
                    borderRadius: 4,
                    fontSize: 12,
                    fontFamily: "inherit"
                }
            });
        },
        sel = function(val, set, opts) {
            return React.createElement("select", {
                value: val,
                onChange: function(e) {
                    set(e.target.value);
                },
                style: {
                    padding: "3px 6px",
                    border: "1px solid #C9C2B4",
                    borderRadius: 4,
                    fontSize: 12
                }
            }, opts.map(function(o) {
                return React.createElement("option", {
                    key: o,
                    value: o
                }, o);
            }));
        };
    return React.createElement(
        "div", {
            style: {
                position: "fixed",
                inset: 0,
                background: "rgba(20,24,30,0.55)",
                zIndex: 9999,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                overflow: "auto",
                padding: "24px 12px"
            }
        },
        React.createElement(
            "section", {
                style: {
                    background: "#F7F4EC",
                    borderRadius: 12,
                    maxWidth: 960,
                    width: "100%",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                    padding: 18
                }
            },
            React.createElement(
                "div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6
                    }
                },
                React.createElement("h2", {
                    style: {
                        margin: 0,
                        fontSize: 18,
                        color: "#1B2430"
                    }
                }, "Review packing list \u2014 confirm before import"),
                React.createElement("button", {
                    onClick: props.onCancel,
                    style: Object.assign({}, btn2, {
                        padding: "2px 10px"
                    })
                }, "\xD7")
            ),
            React.createElement(
                "div", {
                    style: {
                        fontSize: 12,
                        color: "#5A6472",
                        marginBottom: 8
                    }
                },
                'Sheet "' + (data.sheetName || "?") + '"  \xB7  detected: ' + (mapNames || "nothing")
            ),
            data.isOcr ? React.createElement("div", {
                style: {
                    margin: "0 0 10px",
                    padding: "10px 12px",
                    background: "#FBE3E1",
                    border: "1px solid #D98A82",
                    borderRadius: 8,
                    fontSize: 12.5,
                    color: "#7A241C",
                    fontWeight: 600
                }
            }, "\u26A0 Read from an image by OCR. OCR can misread digits \u2014 a 1200 can become 200. Check EVERY dimension and weight against the original before importing.") : null,
            data.flags && data.flags.length ? React.createElement(
                "ul", {
                    style: {
                        margin: "0 0 10px",
                        padding: "8px 10px 8px 26px",
                        background: "#FBEFD3",
                        border: "1px solid #E3C879",
                        borderRadius: 8,
                        fontSize: 12,
                        color: "#6B4E12"
                    }
                },
                data.flags.map(function(f, i) {
                    return React.createElement("li", {
                        key: i
                    }, f);
                })
            ) : null,
            React.createElement(
                "div", {
                    style: {
                        display: "flex",
                        gap: 16,
                        alignItems: "center",
                        marginBottom: 10,
                        flexWrap: "wrap"
                    }
                },
                React.createElement("label", {
                    style: {
                        fontSize: 12,
                        color: "#1B2430"
                    }
                }, "Length unit  ", sel(lenUnit, setLenUnit, ["mm", "cm", "m"])),
                React.createElement("label", {
                    style: {
                        fontSize: 12,
                        color: "#1B2430"
                    }
                }, "Weight unit  ", sel(wtUnit, setWtUnit, ["kg", "t"])),
                React.createElement("span", {
                    style: {
                        fontSize: 12,
                        color: "#5A6472"
                    }
                }, "All dimensions convert to mm, weight to kg on import.")
            ),
            React.createElement(
                "div", {
                    style: {
                        maxHeight: "46vh",
                        overflow: "auto",
                        border: "1px solid #C9C2B4",
                        borderRadius: 8
                    }
                },
                React.createElement(
                    "table", {
                        style: {
                            borderCollapse: "collapse",
                            width: "100%",
                            background: "#FFFFFF"
                        }
                    },
                    React.createElement("thead", null, React.createElement(
                        "tr",
                        null,
                        th2("Use"),
                        th2("Cargo name"),
                        th2("Qty"),
                        th2("L"),
                        th2("W"),
                        th2("H"),
                        th2("Weight"),
                        th2("Package"),
                        th2("Stack?")
                    )),
                    React.createElement("tbody", null, rows.map(function(r, i) {
                        return React.createElement(
                            "tr", {
                                key: i,
                                style: {
                                    background: r.use ? "#FFFFFF" : "#F0EDE4"
                                }
                            },
                            React.createElement("td", {
                                style: {
                                    padding: "3px 6px"
                                }
                            }, React.createElement("input", {
                                type: "checkbox",
                                checked: r.use,
                                onChange: function(e) {
                                    setCell(i, "use", e.target.checked);
                                }
                            })),
                            React.createElement("td", {
                                style: {
                                    padding: "3px 6px"
                                }
                            }, inp2(i, "name", 180)),
                            React.createElement("td", {
                                style: {
                                    padding: "3px 6px"
                                }
                            }, inp2(i, "qty", 42)),
                            React.createElement("td", {
                                style: {
                                    padding: "3px 6px"
                                }
                            }, inp2(i, "L", 64)),
                            React.createElement("td", {
                                style: {
                                    padding: "3px 6px"
                                }
                            }, inp2(i, "W", 64)),
                            React.createElement("td", {
                                style: {
                                    padding: "3px 6px"
                                }
                            }, inp2(i, "H", 64)),
                            React.createElement("td", {
                                style: {
                                    padding: "3px 6px"
                                }
                            }, inp2(i, "kg", 72)),
                            React.createElement("td", {
                                style: {
                                    padding: "3px 6px"
                                }
                            }, inp2(i, "pkg", 110)),
                            React.createElement("td", {
                                style: {
                                    padding: "3px 6px",
                                    textAlign: "center"
                                }
                            }, React.createElement("input", {
                                type: "checkbox",
                                checked: r.stack,
                                onChange: function(e) {
                                    setCell(i, "stack", e.target.checked);
                                }
                            }))
                        );
                    }))
                )
            ),
            React.createElement(
                "p", {
                    style: {
                        fontSize: 11,
                        color: "#5A6472",
                        margin: "8px 0 12px"
                    }
                },
                "Rows with a missing name or any zero dimension/weight are skipped. \u201CStack?\u201D is off by default \u2014 tick it only if that piece may be stacked; top-load limits stay 0 (no assumed crush capacity) until you set them on the item."
            ),
            React.createElement(
                "div", {
                    style: {
                        display: "flex",
                        gap: 10,
                        justifyContent: "flex-end"
                    }
                },
                React.createElement("button", {
                    onClick: props.onCancel,
                    style: btn2
                }, "Cancel"),
                React.createElement("button", {
                    onClick: apply,
                    disabled: !usable,
                    style: Object.assign({}, btn2, {
                        background: usable ? "#1B2430" : "#9AA3AE",
                        color: "#FFF",
                        opacity: usable ? 1 : 0.7
                    })
                }, "Add " + usable + " items to plan")
            )
        )
    );
}

function parseWorkbook(wb) {
    const name = wb.SheetNames.find((n) => /manifest|cargo/i.test(n)) || wb.SheetNames[0],
        rows = XLSX.utils.sheet_to_json(wb.Sheets[name], {
            defval: ""
        }),
        yn = (v) => /^(y|yes|true|1)$/i.test(String(v).trim()),
        pick = (r, keys) => {
            for (const k of Object.keys(r)) {
                const lk = k.toLowerCase();
                if (keys.some((t) => lk.includes(t))) return r[k];
            }
            return "";
        };
    return rows.map((r, i) => ({
        id: Date.now() + i,
        name: String(pick(r, ["name", "item", "description"])).trim(),
        pkg: String(pick(r, ["package type", "package", "pkg type", "type"]) || "").trim(),
        L: +pick(r, ["length"]) || 0,
        W: +pick(r, ["width"]) || 0,
        H: +pick(r, ["height"]) || 0,
        kg: +pick(r, ["weight"]) || 0,
        qty: Math.max(1, +pick(r, ["quantity", "qty"]) || 1),
        stack: yn(pick(r, ["stack"])),
        turn: pick(r, ["rotate", "turn"]) === "" ? !0 : yn(pick(r, ["rotate", "turn"])),
        maxLayers: Math.max(
            1,
            +pick(r, ["max layers", "layers", "maxlayer"]) || (yn(pick(r, ["stack"])) ? 3 : 1)
        ),
        maxStackKg: Math.max(0, +pick(r, ["top load", "max top", "stack load", "maxstack"]) || 0),
        contactCm2: Math.max(0, +pick(r, ["contact area", "contact cm", "bearing area"]) || 0),
        temp: yn(pick(r, ["reefer", "temp"])),
        haz: String(pick(r, ["imdg", "hazard"])).trim(),
        drop: Math.max(1, +pick(r, ["drop"]) || 1)
    })).filter((it) => it.name && it.L > 0 && it.W > 0 && it.H > 0 && it.kg > 0);
}

function downloadJSON(obj, filename) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
            type: "application/json"
        }),
        url = URL.createObjectURL(blob),
        a = document.createElement("a");
    a.href = url, a.download = filename, document.body.appendChild(a), a.click(), document.body.removeChild(a), setTimeout(() => URL.revokeObjectURL(url), 1e3);
}

function serializeFleet(result) {
    if (!result || !result.fleet) return null;
    function safe(v) { try { return v == null ? null : JSON.parse(JSON.stringify(v)); } catch (_) { return null; } }
    return {
        fleet: result.fleet.map(function (e) {
            return {
                specCode: e.spec.code, index: e.index, weight: e.weight, containerNo: e.containerNo || "",
                manualOrderIdx: e.manualOrder ? e.manualOrder.map(function (p) { return e.placed.indexOf(p); }) : null,
                placed: e.placed.map(function (p) {
                    return { item: p.item, n: p.n, x: p.x, y: p.y, z: p.z, l: p.l, w: p.w, h: p.h, stackLayer: p.stackLayer, oog: p.oog, drop: p.drop, pieceNo: p.pieceNo };
                })
            };
        }),
        notices: safe(result.notices), groups: safe(result.groups), errors: safe(result.errors)
    };
}
function deserializeFleet(saved) {
    if (!saved || !Array.isArray(saved.fleet)) return null;
    var fleet = saved.fleet.map(function (se) {
        var spec = SPECS.find(function (s) { return s.code === se.specCode; });
        if (!spec) return null;
        var e = new Engine(spec, se.index);
        e.containerNo = se.containerNo || "";
        e.placed = (se.placed || []).map(function (p) { return Object.assign({}, p, { sup: [], areas: [], borne: 0 }); });
        e.weight = typeof se.weight === "number" ? se.weight : e.placed.reduce(function (a, p) { return a + (p.item ? p.item.kg : 0); }, 0);
        if (se.manualOrderIdx) e.manualOrder = se.manualOrderIdx.map(function (i) { return e.placed[i]; }).filter(Boolean);
        return e;
    }).filter(Boolean);
    if (!fleet.length) return null;
    return { fleet: fleet, notices: saved.notices || [], groups: saved.groups || [], errors: saved.errors || null };
}

function exportScenario(state) {
    const d = /* @__PURE__ */ new Date(),
        stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}-${String(d.getHours()).padStart(2, "0")}${String(d.getMinutes()).padStart(2, "0")}`;
    downloadJSON(
        Object.assign({
            app: "STOWAGE",
            version: APP_VERSION,
            saved: d.toISOString()
        }, state),
        `stowage-plan-${stamp}.json`
    );
}

function importScenario(text) {
    const d = JSON.parse(text);
    if (!d || d.app !== "STOWAGE" || !Array.isArray(d.items))
        throw new Error("Not a STOWAGE plan file");
    return d;
}

function downloadBlankTemplate() {
    const wb = XLSX.utils.book_new(),
        headers = [
            "Item Name",
            "Length (mm)",
            "Width (mm)",
            "Height (mm)",
            "Weight per Unit (kg)",
            "Quantity",
            "Stackable (Y/N)",
            "Max Layers",
            "Max Top Load (kg)",
            "Contact Area (cm2)",
            "Rotate (Y/N)",
            "Reefer (Y/N)",
            "IMDG Class",
            "Drop Stop",
            "Package Type"
        ],
        rows = [
            headers,
            ["(example) Steel pallet", 1200, 1e3, 1200, 800, 10, "Y", 2, 1600, "", "Y", "N", "", 1, "P/L"]
        ];
    for (let i = 0; i < 40; i++) rows.push(new Array(headers.length).fill(""));
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws["!cols"] = [{
            wch: 24
        },
        {
            wch: 12
        },
        {
            wch: 11
        },
        {
            wch: 12
        },
        {
            wch: 18
        },
        {
            wch: 9
        },
        {
            wch: 14
        },
        {
            wch: 11
        },
        {
            wch: 18
        },
        {
            wch: 18
        },
        {
            wch: 11
        },
        {
            wch: 11
        },
        {
            wch: 11
        },
        {
            wch: 10
        },
        {
            wch: 13
        }
    ], XLSX.utils.book_append_sheet(wb, ws, "Cargo Manifest");
    const ins = [
            ["STOWAGE \u2014 Blank Import Template"],
            [],
            ["How to use"],
            [
                "1. Fill one row per cargo line item under the headers in 'Cargo Manifest'. Delete the grey example row."
            ],
            ["2. Keep the header row (row 1) exactly as provided."],
            ["3. In the app, press 'Import Excel' and select this file, then 'Optimize load'."],
            [],
            ["Columns"],
            ["Item Name \u2014 description shown in plans."],
            ["Length / Width / Height (mm) \u2014 outer size of one unit."],
            ["Weight per Unit (kg) \u2014 gross weight of one unit incl. packaging."],
            ["Quantity \u2014 number of identical units."],
            ["Stackable (Y/N) \u2014 Y if other cargo may be placed on top."],
            ["Max Layers \u2014 max layers this item may form when stacked (e.g. 2). Ignored if not stackable."],
            [
                "Max Top Load (kg) \u2014 how much weight this item can carry on top of it. Blank = no limit, layer count only."
            ],
            [
                "Contact Area (cm2) \u2014 real area touching the floor (feet, skids, saddles). Blank = full base area."
            ],
            ["Rotate (Y/N) \u2014 Y if the unit may be turned 90 degrees on the floor."],
            ["Reefer (Y/N) \u2014 Y if it needs a temperature-controlled container."],
            ["IMDG Class \u2014 dangerous goods class (2.1, 3, 4.1, 5.1, 8, 9). Blank for general cargo."],
            ["Drop Stop \u2014 delivery order. 1 = first delivery (loaded last, nearest the door)."]
        ],
        wi = XLSX.utils.aoa_to_sheet(ins);
    wi["!cols"] = [{
        wch: 100
    }], XLSX.utils.book_append_sheet(wb, wi, "Instructions"), XLSX.writeFile(wb, "cargo-manifest-template.xlsx");
}

function exportPlan(items, fleet) {
    const wb = XLSX.utils.book_new(),
        summary = [
            ["STOWAGE \u2014 Container Load Plan"],
            ["Generated", /* @__PURE__ */ ( /* @__PURE__ */ new Date()).toLocaleString()],
            [],
            [
                "Container",
                "Type",
                "Units",
                "Cargo weight (kg)",
                "Gross incl. tare (kg)",
                "Volume used (m3)",
                "Volume %",
                "Weight %",
                "CG long offset %",
                "CG lat offset %",
                "CG height %",
                "Block shift (m)",
                "Freight (USD)",
                "Handling (USD)",
                "Box subtotal (USD)"
            ]
        ];
    fleet.forEach((b) => {
        const r = cgReport(b),
            rt = rateOf(b.spec.code);
        summary.push([
            `${b.spec.code} #${b.index}`,
            b.spec.code,
            b.placed.length,
            Math.round(b.weight),
            Math.round(b.weight + b.spec.tare),
            +volM3(b).toFixed(2),
            +(volM3(b) / effVol(b) * 100).toFixed(1),
            +(b.weight / b.spec.payload * 100).toFixed(1),
            +r.offL.toFixed(1),
            +r.offW.toFixed(1),
            +r.hPct.toFixed(0),
            +(b.shift / 1e3).toFixed(2),
            rt.freight,
            rt.handling,
            boxCost(b.spec)
        ]);
    });
    const totalKg = fleet.reduce((a, b) => a + b.weight, 0),
        totalFreight = fleet.reduce((a, b) => a + rateOf(b.spec.code).freight, 0),
        totalHandling = fleet.reduce((a, b) => a + rateOf(b.spec.code).handling, 0);
    summary.push(
        [],
        ["Total cargo weight (kg)", Math.round(totalKg)],
        ["Total containers", fleet.length],
        ["Total units", fleet.reduce((a, b) => a + b.placed.length, 0)],
        [],
        ["Total freight (USD)", totalFreight],
        ["Total handling (USD)", totalHandling],
        ["GRAND TOTAL (USD)", totalFreight + totalHandling]
    );
    const ws = XLSX.utils.aoa_to_sheet(summary);
    ws["!cols"] = [{
            wch: 14
        },
        {
            wch: 8
        },
        {
            wch: 7
        },
        {
            wch: 17
        },
        {
            wch: 19
        },
        {
            wch: 16
        },
        {
            wch: 10
        },
        {
            wch: 10
        },
        {
            wch: 16
        },
        {
            wch: 15
        },
        {
            wch: 12
        },
        {
            wch: 14
        },
        {
            wch: 14
        },
        {
            wch: 15
        },
        {
            wch: 17
        }
    ], XLSX.utils.book_append_sheet(wb, ws, "Summary"), fleet.forEach((b) => {
        const steps = [...b.placed].sort((a, q) => a.x - q.x || a.z - q.z || a.y - q.y);
        let running = 0;
        const rows = [
            [
                "Step",
                "Item",
                "Unit",
                "Zone",
                "Layer",
                "X (m)",
                "Y (m)",
                "Z (m)",
                "Oriented L (mm)",
                "W (mm)",
                "H (mm)",
                "Weight (kg)",
                "Running total (kg)",
                "Drop stop",
                "IMDG",
                "OOG"
            ]
        ];
        steps.forEach((p, i) => {
            running += p.item.kg, rows.push([
                i + 1,
                p.item.name,
                p.n,
                zoneOf(p, b.spec),
                p.z <= EPS ? "Floor" : "Stacked",
                +(p.x / 1e3).toFixed(2),
                +(p.y / 1e3).toFixed(2),
                +(p.z / 1e3).toFixed(2),
                p.l,
                p.w,
                p.h,
                p.item.kg,
                running,
                p.item.drop,
                p.item.haz || "",
                (() => {
                    const o = {
                        p,
                        owL: Math.max(0, -p.y),
                        owR: Math.max(0, p.y + p.w - b.spec.W),
                        oh: Math.max(0, p.z + p.h - b.spec.H)
                    };
                    return o.owL > 1 || o.owR > 1 || o.oh > 1 ? oogText(o) : "";
                })()
            ]);
        });
        const wsc = XLSX.utils.aoa_to_sheet(rows);
        wsc["!cols"] = rows[0].map((h, i) => ({
            wch: i === 1 ? 22 : Math.max(8, String(h).length + 2)
        })), XLSX.utils.book_append_sheet(wb, wsc, `${b.spec.code}-${b.index}`.slice(0, 31));
    });
    const man = [
        [
            "Item Name",
            "Length (mm)",
            "Width (mm)",
            "Height (mm)",
            "Weight per Unit (kg)",
            "Quantity",
            "Stackable (Y/N)",
            "Max Layers",
            "Max Top Load (kg)",
            "Contact Area (cm2)",
            "Rotate (Y/N)",
            "Reefer (Y/N)",
            "IMDG Class",
            "Drop Stop",
            "Package Type"
        ]
    ];
    items.forEach(
        (it) => man.push([
            it.name,
            it.L,
            it.W,
            it.H,
            it.kg,
            it.qty,
            it.stack ? "Y" : "N",
            it.maxLayers || 1,
            +it.maxStackKg || "",
            +it.contactCm2 || "",
            it.turn === !1 ? "N" : "Y",
            it.temp ? "Y" : "N",
            it.haz,
            it.drop,
            it.pkg || ""
        ])
    );
    const wsm = XLSX.utils.aoa_to_sheet(man);
    wsm["!cols"] = man[0].map((h) => ({
        wch: String(h).length + 4
    })), XLSX.utils.book_append_sheet(wb, wsm, "Cargo Manifest"), XLSX.writeFile(wb, `stow-plan-${/* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
}
const SKU_COLORS = ["#E8600A", "#3E7CB1", "#5B9E6F", "#C9A227", "#8B6BB1", "#C4574E", "#4FA3A5", "#A0763B"];

function render3DImage(eng, w = 1100, h = 720, fmt = "image/png", q = 0.85, antiTip = null) {
    const canvas = document.createElement("canvas");
    canvas.width = w, canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#141A22", ctx.fillRect(0, 0, w, h);
    const S = eng.spec,
        L = S.L,
        WD = S.W,
        topZ = Math.max(S.H, ...eng.placed.map((p) => p.z + p.h)),
        COS = Math.cos(Math.PI / 6),
        SIN = Math.sin(Math.PI / 6),
        proj = (x, y, z) => ({
            X: (x - y) * COS,
            Y: (x + y) * SIN - z
        }),
        corners = [];
    for (const x of [0, L])
        for (const y of [0, WD])
            for (const z of [0, topZ]) corners.push(proj(x, y, z));
    const xs = corners.map((c) => c.X),
        ys = corners.map((c) => c.Y),
        minX = Math.min(...xs),
        maxX = Math.max(...xs),
        minY = Math.min(...ys),
        maxY = Math.max(...ys),
        pad = 70,
        labelPad = 34,
        scale = Math.min((w - 2 * pad) / (maxX - minX), (h - 2 * pad - labelPad) / (maxY - minY)),
        ox = (w - (minX + maxX) * scale) / 2,
        oy = (h + labelPad - (minY + maxY) * scale) / 2,
        P = (x, y, z) => {
            const p = proj(x, y, z);
            return {
                X: ox + p.X * scale,
                Y: oy + p.Y * scale
            };
        },
        shade = (hex, f) => {
            const n = parseInt(hex.slice(1), 16),
                r = Math.min(255, (n >> 16 & 255) * f) | 0,
                g = Math.min(255, (n >> 8 & 255) * f) | 0,
                b = Math.min(255, (n & 255) * f) | 0;
            return `rgb(${r},${g},${b})`;
        },
        quad = (pts, fill, stroke, lw) => {
            ctx.beginPath(), pts.forEach((p, i) => i ? ctx.lineTo(p.X, p.Y) : ctx.moveTo(p.X, p.Y)), ctx.closePath(), fill && (ctx.fillStyle = fill, ctx.fill()), stroke && (ctx.strokeStyle = stroke, ctx.lineWidth = lw || 1, ctx.stroke());
        },
        cuboid = (x, y, z, dx, dy, dz, base) => {
            const c = [
                P(x, y, z),
                P(x + dx, y, z),
                P(x + dx, y + dy, z),
                P(x, y + dy, z),
                P(x, y, z + dz),
                P(x + dx, y, z + dz),
                P(x + dx, y + dy, z + dz),
                P(x, y + dy, z + dz)
            ];
            quad([c[3], c[2], c[6], c[7]], shade(base, 0.78), "#0E141B", 1), quad([c[1], c[2], c[6], c[5]], shade(base, 0.62), "#0E141B", 1), quad([c[4], c[5], c[6], c[7]], shade(base, 1.15), "#0E141B", 1);
        };
    quad([P(0, 0, 0), P(L, 0, 0), P(L, WD, 0), P(0, WD, 0)], "#212A36", "#3A4656", 1);
    const skuIds = [...new Set(eng.placed.map((p) => p.item.id))];
    [...eng.placed].sort((a, b) => a.x + a.y + a.z * 0.5 - (b.x + b.y + b.z * 0.5)).forEach((p) => {
        const color = SKU_COLORS[skuIds.indexOf(p.item.id) % SKU_COLORS.length];
        if (cuboid(p.x, p.y, p.z, p.l, p.w, p.h, color), antiTip && antiTip.has(p.item.name + "#" + p.n)) {
            const zb = p.z + p.h * 0.8,
                band = [P(p.x, p.y, zb), P(p.x + p.l, p.y, zb), P(p.x + p.l, p.y + p.w, zb), P(p.x, p.y + p.w, zb)];
            ctx.setLineDash([9, 6]), quad(band, null, "#FFD34D", 3), ctx.setLineDash([]), ctx.fillStyle = "#FFD34D", ctx.font = "bold 13px Arial", ctx.textAlign = "center";
            const lp = P(p.x + p.l / 2, p.y + p.w / 2, p.z + p.h + 90);
            ctx.fillText("ANTI-TIP", lp.X, lp.Y), ctx.textAlign = "left";
        }
    });
    const cc = [
        P(0, 0, 0),
        P(L, 0, 0),
        P(L, WD, 0),
        P(0, WD, 0),
        P(0, 0, S.H),
        P(L, 0, S.H),
        P(L, WD, S.H),
        P(0, WD, S.H)
    ];
    ctx.strokeStyle = "#7C8CA0", ctx.lineWidth = 1.3, [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7]
    ].forEach(([a, b]) => {
        ctx.beginPath(), ctx.moveTo(cc[a].X, cc[a].Y), ctx.lineTo(cc[b].X, cc[b].Y), ctx.stroke();
    }), quad([P(L, 0, 0), P(L, WD, 0), P(L, WD, S.H), P(L, 0, S.H)], null, "#E8600A", 3), ctx.font = "bold 22px Arial", ctx.textAlign = "center", ctx.fillStyle = "#E8600A";
    const dl = P(L, WD / 2, S.H);
    ctx.fillText("DOOR", dl.X, dl.Y - 14), ctx.fillStyle = "#8A96A8";
    const nl = P(0, WD / 2, S.H);
    return ctx.fillText("NOSE", nl.X, nl.Y - 14), ctx.fillStyle = "#6B7C93", ctx.font = "15px Arial", ctx.textAlign = "left", ctx.fillText(
        `Interior ${(L / 1e3).toFixed(2)} \xD7 ${(WD / 1e3).toFixed(2)} \xD7 ${(S.H / 1e3).toFixed(2)} m (L\xD7W\xD7H)`,
        16,
        h - 14
    ), canvas.toDataURL(fmt, q);
}

function topViewSVGString(eng, stepIndex, cg, layerFilter, securing) {
    const s = eng.spec,
        pad = 420,
        skuIds = [...new Set(eng.placed.map((p) => p.item.id))],
        vbW = s.L + 2 * pad + 700,
        vbH = s.W + 2 * pad + 300,
        esc = (n) => n.toFixed(1);
    let boxes = "";
    const inLayer = (p) => (p.stackLayer || 1) === layerFilter,
        above = (p) => (p.stackLayer || 1) > layerFilter;
    (layerFilter ? [...eng.placed].sort((a, b) => a.stackLayer - b.stackLayer) : [...eng.placed].sort((a, b) => a.z - b.z)).forEach((p) => {
        if (layerFilter && !inLayer(p) && !above(p)) return;
        const color = SKU_COLORS[skuIds.indexOf(p.item.id) % SKU_COLORS.length],
            step = stepIndex.get(p),
            fs = Math.min(Math.min(p.l, p.w) * 0.42, 340);
        if (layerFilter && above(p)) {
            boxes += `<rect x="${esc(p.x)}" y="${esc(p.y)}" width="${esc(p.l)}" height="${esc(p.w)}" fill="none" stroke="#B9B2A0" stroke-width="8" stroke-dasharray="50 40"/>`;
            return;
        }
        const opacity = layerFilter ? 0.9 : p.z > EPS ? 0.55 : 0.85;
        boxes += `<rect x="${esc(p.x)}" y="${esc(p.y)}" width="${esc(p.l)}" height="${esc(p.w)}" fill="${color}" fill-opacity="${opacity}" stroke="#1B2430" stroke-width="12"/>`, !layerFilter && p.z > EPS && (boxes += `<rect x="${esc(p.x + 40)}" y="${esc(p.y + 40)}" width="${esc(p.l - 80)}" height="${esc(p.w - 80)}" fill="none" stroke="#1B2430" stroke-width="8" stroke-dasharray="40 40"/>`), boxes += `<text x="${esc(p.x + p.l / 2)}" y="${esc(p.y + p.w / 2)}" text-anchor="middle" dominant-baseline="central" font-size="${fs}" font-weight="700" fill="#FFFFFF" stroke="#1B2430" stroke-width="6" font-family="Arial">${step}</text>`;
    });
    const minY = Math.min(0, ...eng.placed.map((p) => p.y)),
        maxYW = Math.max(s.W, ...eng.placed.map((p) => p.y + p.w));
    let oog = "";
    return eng.placed.forEach((p) => {
        const over = p.z + p.h - s.H;
        over > 1 && (oog += `<rect x="${esc(p.x)}" y="${esc(p.y)}" width="${esc(p.l)}" height="${esc(p.w)}" fill="none" stroke="#B3362B" stroke-width="26" stroke-dasharray="120 70"/><text x="${esc(p.x + p.l / 2)}" y="${esc(p.y + p.w / 2 + 250)}" text-anchor="middle" font-size="190" font-weight="700" fill="#B3362B" font-family="Arial">OVER-HEIGHT +${over.toFixed(0)} mm</text>`);
    }), -minY > 1 && (oog += `<line x1="0" y1="${esc(minY)}" x2="${esc(s.L)}" y2="${esc(minY)}" stroke="#B3362B" stroke-width="14" stroke-dasharray="90 60"/><text x="${esc(s.L / 2)}" y="${esc(minY - 120)}" text-anchor="middle" font-size="260" font-weight="700" fill="#B3362B" font-family="Arial">OVER-WIDTH +${(-minY).toFixed(0)} mm</text>`), maxYW - s.W > 1 && (oog += `<line x1="0" y1="${esc(maxYW)}" x2="${esc(s.L)}" y2="${esc(maxYW)}" stroke="#B3362B" stroke-width="14" stroke-dasharray="90 60"/><text x="${esc(s.L / 2)}" y="${esc(maxYW + 300)}" text-anchor="middle" font-size="260" font-weight="700" fill="#B3362B" font-family="Arial">OVER-WIDTH +${(maxYW - s.W).toFixed(0)} mm</text>`), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-pad} ${-pad} ${vbW} ${vbH}" width="${vbW}" height="${vbH}">
    <rect x="${-pad}" y="${-pad}" width="${vbW}" height="${vbH}" fill="#F7F4EC"/>
    <rect x="0" y="0" width="${esc(s.L)}" height="${esc(s.W)}" fill="#FFFFFF" stroke="#1B2430" stroke-width="24"/>
    <line x1="${esc(s.L / 2)}" y1="0" x2="${esc(s.L / 2)}" y2="${esc(s.W)}" stroke="#B9B2A0" stroke-width="10" stroke-dasharray="60 60"/>
    ${boxes}${oog}
    <line x1="${esc(cg[0] - 260)}" y1="${esc(cg[1])}" x2="${esc(cg[0] + 260)}" y2="${esc(cg[1])}" stroke="#B3362B" stroke-width="22"/>
    <line x1="${esc(cg[0])}" y1="${esc(cg[1] - 260)}" x2="${esc(cg[0])}" y2="${esc(cg[1] + 260)}" stroke="#B3362B" stroke-width="22"/>
    <circle cx="${esc(cg[0])}" cy="${esc(cg[1])}" r="130" fill="none" stroke="#B3362B" stroke-width="22"/>
    <text x="${esc(cg[0])}" y="${esc(cg[1] - 320)}" text-anchor="middle" font-size="260" font-weight="700" fill="#B3362B" font-family="Arial">CG</text>
    <rect x="${esc(s.L)}" y="-40" width="70" height="${esc(s.W + 80)}" fill="#E8600A"/>
    <text x="${esc(s.L + 330)}" y="${esc(s.W / 2)}" text-anchor="middle" dominant-baseline="central" font-size="300" font-weight="700" fill="#E8600A" font-family="Arial" transform="rotate(90 ${esc(s.L + 330)} ${esc(s.W / 2)})">DOOR</text>
    <text x="-200" y="${esc(s.W / 2)}" text-anchor="middle" dominant-baseline="central" font-size="300" font-weight="700" fill="#7A8494" font-family="Arial" transform="rotate(-90 -200 ${esc(s.W / 2)})">NOSE</text>
    <line x1="0" y1="${esc(s.W + 190)}" x2="${esc(s.L)}" y2="${esc(s.W + 190)}" stroke="#7A8494" stroke-width="12"/>
    <line x1="0" y1="${esc(s.W + 150)}" x2="0" y2="${esc(s.W + 230)}" stroke="#7A8494" stroke-width="12"/>
    <line x1="${esc(s.L)}" y1="${esc(s.W + 150)}" x2="${esc(s.L)}" y2="${esc(s.W + 230)}" stroke="#7A8494" stroke-width="12"/>
    <text x="${esc(s.L / 2)}" y="${esc(s.W + 420)}" text-anchor="middle" font-size="230" fill="#5A6472" font-family="Arial">${(s.L / 1e3).toFixed(2)} m</text>
    <line x1="${esc(s.L + 170)}" y1="0" x2="${esc(s.L + 170)}" y2="${esc(s.W)}" stroke="#7A8494" stroke-width="12"/>
    <line x1="${esc(s.L + 130)}" y1="0" x2="${esc(s.L + 210)}" y2="0" stroke="#7A8494" stroke-width="12"/>
    <line x1="${esc(s.L + 130)}" y1="${esc(s.W)}" x2="${esc(s.L + 210)}" y2="${esc(s.W)}" stroke="#7A8494" stroke-width="12"/>
    <text x="${esc(s.L + 340)}" y="${esc(s.W / 2)}" text-anchor="middle" font-size="230" fill="#5A6472" font-family="Arial" transform="rotate(90 ${esc(s.L + 340)} ${esc(s.W / 2)})">${(s.W / 1e3).toFixed(2)} m</text>
    ${securing ? securingSVGOverlay(eng, esc) : ""}
  </svg>`;
}

function securingSVGOverlay(eng, esc) {
    const geo = securingGeometry(eng);
    let out = "";
    return geo.bracing.forEach((b) => {
        const col = b.kind === "airbag" ? "#3E7CB1" : "#8A5D12";
        out += `<rect x="${esc(b.x)}" y="${esc(b.y)}" width="${esc(b.l)}" height="${esc(b.w)}" fill="${col}" fill-opacity="0.16" stroke="${col}" stroke-width="10" stroke-dasharray="60 40"/>`, out += `<text x="${esc(b.x + b.l / 2)}" y="${esc(b.w / 2)}" text-anchor="middle" dominant-baseline="central" font-size="190" font-weight="700" fill="${col}" font-family="Arial">${b.label}</text>`;
    }), geo.bedding.forEach((bd) => {
        [0.2, 0.5, 0.8].forEach((f) => {
            out += `<rect x="${esc(bd.x + bd.l * f - 40)}" y="${esc(bd.y - 60)}" width="80" height="${esc(bd.w + 120)}" fill="#A0763B" fill-opacity="0.55" stroke="#6B490E" stroke-width="8"/>`;
        });
    }), geo.items.forEach((it) => {
        it.lashings.forEach((ln) => {
            const col = ln.dir === "across" ? "#B3362B" : ln.dir === "length" ? "#2C5B85" : "#C9A227",
                dash = ln.dir === "length" ? 'stroke-dasharray="70 40"' : "";
            out += `<line x1="${esc(ln.from[0])}" y1="${esc(ln.from[1])}" x2="${esc(ln.to[0])}" y2="${esc(ln.to[1])}" stroke="${col}" stroke-width="14" ${dash} opacity="0.85"/>`, out += `<circle cx="${esc(ln.to[0])}" cy="${esc(ln.to[1])}" r="70" fill="#1B2430" stroke="#F2EFE7" stroke-width="10"/>`;
        });
        const bx = it.p.x + it.p.l / 2,
            by = it.p.y + it.p.w / 2;
        it.method === "positive-fit" ? (out += `<rect x="${esc(bx - 190)}" y="${esc(by - 100)}" width="380" height="180" rx="30" fill="#2E7D4F" opacity="0.85"/>`, out += `<text x="${esc(bx)}" y="${esc(by - 10)}" text-anchor="middle" dominant-baseline="central" font-size="130" font-weight="700" fill="#F2EFE7" font-family="Arial">FIT</text>`) : (out += `<rect x="${esc(bx - 190)}" y="${esc(by - 130)}" width="380" height="200" rx="30" fill="#1B2430" opacity="0.82"/>`, out += `<text x="${esc(bx)}" y="${esc(by - 30)}" text-anchor="middle" dominant-baseline="central" font-size="150" font-weight="700" fill="#F2EFE7" font-family="Arial">${it.count}x</text>`, out += `<text x="${esc(bx)}" y="${esc(by + 130)}" text-anchor="middle" dominant-baseline="central" font-size="120" font-weight="600" fill="${it.type === "chain" ? "#F2A99F" : "#A9C9E5"}" font-family="Arial">${it.type}</text>`);
    }), out;
}

function svgToPng(svgStr, scale = 2) {
    return new Promise((resolve) => {
        const m = svgStr.match(/width="(\d+(?:\.\d+)?)" height="(\d+(?:\.\d+)?)"/),
            w = Math.round(+m[1] * 0.06 * scale),
            h = Math.round(+m[2] * 0.06 * scale),
            img = new Image(),
            blob = new Blob([svgStr], {
                type: "image/svg+xml;charset=utf-8"
            }),
            url = URL.createObjectURL(blob);
        img.onload = () => {
            const c = document.createElement("canvas");
            c.width = w, c.height = h;
            const ctx = c.getContext("2d", {
                alpha: !1
            });
            ctx.fillStyle = "#F7F4EC", ctx.fillRect(0, 0, w, h), ctx.drawImage(img, 0, 0, w, h), URL.revokeObjectURL(url), resolve({
                url: c.toDataURL("image/png"),
                w,
                h
            });
        }, img.onerror = () => {
            URL.revokeObjectURL(url), resolve(null);
        }, img.src = url;
    });
}
async function exportLoaderPDF(fleet, lashMethod = "auto", craneId = "auto", forkId = "auto", craneStandoff = 4, ltmModel = "", coreOnly = false, planData = null) {
    const JsPDF = window.jspdf && window.jspdf.jsPDF || window.jsPDF,
        doc2 = new JsPDF({
            orientation: "landscape",
            unit: "mm",
            format: "a4",
            compress: !0
        }),
        PW = 297,
        PH = 210,
        M = 12,
        dateStr = /* @__PURE__ */ ( /* @__PURE__ */ new Date()).toLocaleString();
    for (let ci = 0; ci < fleet.length; ci++) {
        const eng = fleet[ci],
            ordered = loadingOrder(eng),
            stepIndex = new Map(ordered.map((p, i) => [p, i + 1]));
        let cgx = 0,
            cgy = 0;
        eng.placed.forEach((p) => {
            cgx += p.item.kg * (p.x + p.l / 2), cgy += p.item.kg * (p.y + p.w / 2);
        });
        const cg = [cgx / eng.weight, cgy / eng.weight];
        ci > 0 && doc2.addPage(), doc2.setFillColor(20, 26, 34), doc2.rect(0, 0, PW, 16, "F"), doc2.setTextColor(242, 239, 231), doc2.setFont("helvetica", "bold"), doc2.setFontSize(13), doc2.text(`Loading Plan  -  ${eng.spec.code} #${eng.index}`, M, 11), doc2.setFont("helvetica", "normal"), doc2.setFontSize(8), doc2.setTextColor(160, 170, 185), doc2.text(
            `Container ${ci + 1} of ${fleet.length}   -   ${dateStr}   -   by Suthiwas Kongsorn  v${APP_VERSION} (Early Access)`,
            PW - M,
            11, {
                align: "right"
            }
        ), doc2.setTextColor(40, 40, 40), doc2.setFont("helvetica", "bold"), doc2.setFontSize(11), doc2.text("3D Stow Plan  (orange frame = door)", M, 24);
        const CV_W = 1500,
            CV_H = 780,
            cvRatio = CV_W / CV_H,
            box3dW = PW - 2 * M,
            box3dH = 108;
        try {
            const img3d = render3DImage(eng, CV_W, CV_H, "image/jpeg", 0.85, antiTipUnits(eng, lashMethod));
            let dw = box3dW,
                dh = dw / cvRatio;
            dh > box3dH && (dh = box3dH, dw = dh * cvRatio);
            const dx = M + (box3dW - dw) / 2;
            doc2.addImage(img3d, "JPEG", dx, 27, dw, dh);
        } catch (e) {}
        const used3dH = Math.min(box3dH, box3dW / cvRatio),
            maxLayer = Math.max(1, ...eng.placed.map((p) => p.stackLayer || 1)),
            tvTop = 27 + used3dH + 10;
        doc2.setTextColor(40, 40, 40), doc2.setFont("helvetica", "bold"), doc2.setFontSize(11), doc2.text(
            `Top View by Layer  -  numbers = loading step  (${maxLayer} layer${maxLayer > 1 ? "s" : ""})`,
            M,
            tvTop
        );
        const perRow = Math.min(maxLayer, maxLayer <= 1 ? 1 : maxLayer <= 2 ? 2 : 3),
            cellW = (PW - 2 * M - (perRow - 1) * 6) / perRow,
            availH = PH - (tvTop + 6) - 6,
            rowsNeeded = Math.ceil(maxLayer / perRow),
            cellH = Math.min((availH - (rowsNeeded - 1) * 8) / rowsNeeded, cellW * 0.45);
        for (let L = 1; L <= maxLayer; L++) {
            const svgL = topViewSVGString(eng, stepIndex, cg, L),
                pngL = await svgToPng(svgL, 2.5),
                col = (L - 1) % perRow,
                rowN = Math.floor((L - 1) / perRow),
                cx = M + col * (cellW + 6),
                cy = tvTop + 6 + rowN * (cellH + 8);
            if (doc2.setFont("helvetica", "bold"), doc2.setFontSize(8.5), doc2.setTextColor(60, 60, 60), doc2.text(L === 1 ? "Floor layer" : `Layer ${L}`, cx, cy), pngL) {
                const ratio = pngL.w / pngL.h;
                let dw = cellW,
                    dh = dw / ratio;
                dh > cellH && (dh = cellH, dw = dh * ratio), doc2.addImage(pngL.url, "PNG", cx, cy + 2, dw, dh);
            }
        }
        if (eng.placed.length) {
            const ss = stackingSummary(eng);
            doc2.addPage(), doc2.setFillColor(20, 26, 34), doc2.rect(0, 0, PW, 16, "F"), doc2.setTextColor(242, 239, 231), doc2.setFont("helvetica", "bold"), doc2.setFontSize(13), doc2.text(`Stow Map  -  ${eng.spec.code} #${eng.index}`, M, 10.5), doc2.setFontSize(8), doc2.setTextColor(190, 190, 190), doc2.text(
                `${eng.placed.length} piece${eng.placed.length === 1 ? "" : "s"}  -  ${ss.stacked.length} pre-stacked column${ss.stacked.length === 1 ? "" : "s"}  -  ${ss.totalKg.toLocaleString()} kg`,
                PW - M,
                10.5, {
                    align: "right"
                }
            );
            let sy2 = 24;
            {
                const stowPng = await svgToPng(stowMapSVG(eng), 2.6);
                if (stowPng) {
                    const availW = PW - 2 * M, ratio = stowPng.w / stowPng.h;
                    let dh = Math.min(142, PH - sy2 - 40), dw = dh * ratio;
                    if (dw > availW) { dw = availW; dh = dw / ratio; }
                    doc2.addImage(stowPng.url, "PNG", M, sy2, dw, dh), sy2 = sy2 + dh + 8;
                } else sy2 = sy2 + 12;
            }
            if (!ss.stacked.length)
                doc2.setFont("helvetica", "normal"), doc2.setFontSize(9), doc2.setTextColor(90, 100, 114), doc2.text("No pre-stacking required - every piece in this container stands on its own.", M, sy2);
            else {
                doc2.setFont("helvetica", "bold"), doc2.setFontSize(10), doc2.setTextColor(40, 40, 40), doc2.text("Build these columns before loading  (bottom piece first)", M, sy2), sy2 += 5, doc2.setFont("helvetica", "normal"), doc2.setFontSize(8), doc2.setTextColor(90, 100, 114), doc2.splitTextToSize(ss.note.replace(/[^\x20-\x7E]/g, "-"), PW - 2 * M).forEach((ln) => (doc2.text(ln, M, sy2), sy2 += 3.8)), sy2 += 3;
                const sc = [
                    ["Load", M],
                    ["Col", M + 14],
                    ["Zone", M + 26],
                    ["Side", M + 40],
                    ["1st piece (floor)", M + 60],
                    ["2nd piece", M + 108],
                    ["3rd piece", M + 152],
                    ["Height", M + 200],
                    ["Weight", M + 224]
                ];
                doc2.setFont("helvetica", "bold"), doc2.setFontSize(8), doc2.setTextColor(40, 40, 40), sc.forEach(([t, x]) => doc2.text(t, x, sy2)), doc2.setDrawColor(120, 120, 120), doc2.setLineWidth(0.3), doc2.line(M, sy2 + 1.6, PW - M, sy2 + 1.6), sy2 += 6, doc2.setFont("helvetica", "normal"), ss.columns.forEach((c) => {
                    sy2 > PH - 14 && (doc2.addPage(), sy2 = 18);
                    const t = (k) => c.tiers[k] ? `${c.tiers[k].label}  ${c.tiers[k].kg} kg` : "-",
                        cells = [
                            String(c.seq),
                            c.id,
                            c.zone,
                            c.side,
                            t(0),
                            t(1),
                            t(2),
                            `${c.height} mm`,
                            `${c.kg.toLocaleString()} kg`
                        ];
                    doc2.setTextColor(60, 60, 60), cells.forEach((v, k) => doc2.text(String(v).replace(/[^\x20-\x7E]/g, "-"), sc[k][1], sy2)), doc2.setDrawColor(225, 222, 214), doc2.setLineWidth(0.2), doc2.line(M, sy2 + 1.4, PW - M, sy2 + 1.4), sy2 += 5.2;
                }), sy2 += 4, sy2 > PH - 30 && (doc2.addPage(), sy2 = 18), doc2.setFont("helvetica", "bold"), doc2.setFontSize(10), doc2.setTextColor(40, 40, 40), doc2.text("Build instructions, in order", M, sy2), sy2 += 6, ss.columns.forEach((c) => {
                    const lines = doc2.splitTextToSize(c.words.replace(/[^\x20-\x7E]/g, "-"), PW - 2 * M - 12);
                    sy2 + lines.length * 4 > PH - 12 && (doc2.addPage(), sy2 = 18), doc2.setFillColor(27, 36, 48), doc2.circle(M + 3, sy2 - 1.2, 3, "F"), doc2.setFont("helvetica", "bold"), doc2.setFontSize(7.5), doc2.setTextColor(255, 255, 255), doc2.text(String(c.seq), M + 3, sy2 + 0.2, {
                        align: "center"
                    }), doc2.setFont("helvetica", "normal"), doc2.setFontSize(8.5), doc2.setTextColor(50, 50, 50), lines.forEach((ln, k) => (doc2.text(ln, M + 9, sy2 + k * 4), lines.length - 1, 0)), sy2 += lines.length * 4 + 2.4;
                }), ss.columns.some((c) => c.tiers.length > 3) && (sy2 += 2, doc2.setFont("helvetica", "bold"), doc2.setFontSize(8), doc2.setTextColor(179, 54, 43), doc2.text("Columns with more than three tiers are listed in full below:", M, sy2), sy2 += 5, doc2.setFont("helvetica", "normal"), doc2.setTextColor(60, 60, 60), ss.columns.filter((c) => c.tiers.length > 3).forEach((c) => {
                    doc2.splitTextToSize(
                        `Column ${c.id}: ${c.tiers.map((x) => `${x.label} (${x.kg} kg)`).join(" -> ")}`,
                        PW - 2 * M
                    ).forEach((ln) => {
                        sy2 > PH - 12 && (doc2.addPage(), sy2 = 18), doc2.text(ln.replace(/[^\x20-\x7E]/g, "-"), M, sy2), sy2 += 3.8;
                    });
                }));
            }
        }
        doc2.addPage(), doc2.setFillColor(20, 26, 34), doc2.rect(0, 0, PW, 16, "F"), doc2.setTextColor(242, 239, 231), doc2.setFont("helvetica", "bold"), doc2.setFontSize(13), doc2.text(`Loading Plan  -  ${eng.spec.code} #${eng.index}`, M, 11), doc2.setFont("helvetica", "normal"), doc2.setFontSize(8), doc2.setTextColor(160, 170, 185), doc2.text(`Container ${ci + 1} of ${fleet.length}  -  loading sequence`, PW - M, 11, {
            align: "right"
        });
        let y = 24;
        doc2.setFont("helvetica", "bold"), doc2.setFontSize(10), doc2.setTextColor(40, 40, 40), doc2.text("Loading sequence  (load from nose to door, bottom layer first)", M, y), y += 5;
        const cols = [
            ["#", M, 8],
            ["Item", M + 10, 62],
            ["Zone", M + 74, 16],
            ["Layer", M + 92, 16],
            ["Pos x/y/z (m)", M + 110, 34],
            ["LxWxH (mm)", M + 146, 34],
            ["kg", M + 182, 16],
            ["Cum kg", M + 200, 18],
            ["Drop", M + 220, 12]
        ];
        doc2.setFillColor(230, 226, 219), doc2.rect(M, y - 3.5, PW - 2 * M, 5.5, "F"), doc2.setFontSize(7.5), cols.forEach(([t, x]) => doc2.text(t, x, y)), y += 5, doc2.setFont("helvetica", "normal"), doc2.setFontSize(7);
        let run = 0;
        for (const p of ordered) {
            run += p.item.kg, y > PH - 8 && (doc2.addPage(), y = 16);
            const zone = (() => {
                    const c = (p.x + p.l / 2) / eng.spec.L;
                    return c < 1 / 3 ? "Nose" : c < 2 / 3 ? "Mid" : "Door";
                })(),
                row = [
                    stepIndex.get(p),
                    `${p.item.name} #${p.n}${p.item.haz ? ` (IMDG ${p.item.haz})` : ""}`,
                    zone,
                    p.z <= EPS ? "Floor" : "Stacked",
                    `${(p.x / 1e3).toFixed(2)}/${(p.y / 1e3).toFixed(2)}/${(p.z / 1e3).toFixed(2)}`,
                    `${p.l}x${p.w}x${p.h}`,
                    p.item.kg.toLocaleString(),
                    run.toLocaleString(),
                    p.item.drop
                ];
            cols.forEach(([t, x, wid], k) => {
                let str = String(row[k]);
                if (wid && doc2.getTextWidth(str) > wid) {
                    for (; str.length > 4 && doc2.getTextWidth(str + "\u2026") > wid;) str = str.slice(0, -1);
                    str += "\u2026";
                }
                doc2.text(str, x, y);
            }), y += 4.2;
        }
        if (coreOnly) continue;
        doc2.addPage(), doc2.setFillColor(20, 26, 34), doc2.rect(0, 0, PW, 16, "F"), doc2.setTextColor(242, 239, 231), doc2.setFont("helvetica", "bold"), doc2.setFontSize(13), doc2.text(`Securing Plan  -  ${eng.spec.code} #${eng.index}`, M, 11), doc2.setFont("helvetica", "normal"), doc2.setFontSize(8), doc2.setTextColor(160, 170, 185), doc2.text(`Container ${ci + 1} of ${fleet.length}  -  lashing & bracing`, PW - M, 11, {
            align: "right"
        }), doc2.setTextColor(40, 40, 40), doc2.setFont("helvetica", "bold"), doc2.setFontSize(11), doc2.text("Securing Layout  (red = chain, blue dashed = web, dots = anchor points)", M, 24);
        const secSvg = topViewSVGString(eng, stepIndex, cg, null, !0),
            secPng = await svgToPng(secSvg, 2.6);
        let secBottom = 30;
        if (secPng) {
            const ratio = secPng.w / secPng.h;
            let dw = PW - 2 * M,
                dh = dw / ratio;
            const cap = 96;
            dh > cap && (dh = cap, dw = dh * ratio);
            const dx = M + (PW - 2 * M - dw) / 2;
            doc2.addImage(secPng.url, "PNG", dx, 28, dw, dh), secBottom = 28 + dh + 8;
        }
        doc2.setFont("helvetica", "bold"), doc2.setFontSize(10), doc2.setTextColor(40, 40, 40);
        const bom = securingBOM(eng, lashMethod);
        doc2.setFont("helvetica", "bold"), doc2.setFontSize(10), doc2.setTextColor(40, 40, 40), doc2.text("Equipment list", M, secBottom);
        let by = secBottom + 6;
        doc2.setFont("helvetica", "normal"), doc2.setFontSize(8.5), doc2.setTextColor(50, 50, 50);
        const bomLines = [];
        Object.entries(bom.gear).forEach(([name, g]) => bomLines.push(`${g.qty}x ${name} (LC ${g.lc} daN)`)), bom.timberBeams && bomLines.push(`${bom.timberBeams}x timber bracing beams (~1.2 m)`), bom.beddingBeams && bomLines.push(`${bom.beddingBeams}x bedding cross-timbers (100x100 mm)`), bom.airbags && bomLines.push(`${bom.airbags}x dunnage airbags`), bom.antiSlip && bomLines.push(`${bom.antiSlip}x anti-slip mats`), bom.edgeProtectors && bomLines.push(`${bom.edgeProtectors}x edge protectors`), bom.positiveFit && bomLines.push(`${bom.positiveFit}x unit(s) secured by tight stow (no lashing gear)`), bomLines.length || bomLines.push("Tight stow \u2014 no dedicated securing equipment required."), bomLines.forEach((ln) => {
            by > PH - 10 && (doc2.addPage(), by = 16), doc2.text("- " + ln.replace(/[^\x20-\x7E]/g, ""), M, by), by += 4.6;
        });
        const secBottom2 = by + 4;
        doc2.setFont("helvetica", "bold"), doc2.setFontSize(10), doc2.setTextColor(40, 40, 40), doc2.text("Securing steps", M, secBottom2);
        let sy = secBottom2 + 6;
        doc2.setFont("helvetica", "normal"), doc2.setFontSize(8.5), doc2.setTextColor(50, 50, 50), securingNotes(eng, lashMethod).forEach((note) => {
            sy > PH - 10 && (doc2.addPage(), sy = 16);
            const ascii = ("- " + note).replace(/×/g, "x").replace(/·/g, "-").replace(/°/g, " deg").replace(/[–—]/g, "-").replace(/[""]/g, '"').replace(/['']/g, "'").replace(/≥/g, ">=").replace(/≤/g, "<=").replace(/→/g, "to").replace(/√/g, "sqrt").replace(/[^\x20-\x7E]/g, "");
            doc2.splitTextToSize(ascii, PW - 2 * M).forEach((ln) => {
                doc2.text(ln, M, sy), sy += 4.6;
            }), sy += 1.5;
        });
        const fk = forkliftCheck(eng, forkId);
        if (fk.relevant && fk.rows.length) {
            const focus = fk.fails.length ? fk.fails.reduce((a, b) => b.util > a.util ? b : a) : fk.rows.reduce((a, b) => b.util > a.util ? b : a);
            {
                doc2.addPage(), doc2.setFillColor(27, 36, 48), doc2.rect(0, 0, PW, 16, "F"), doc2.setTextColor(255, 255, 255), doc2.setFont("helvetica", "bold"), doc2.setFontSize(13), doc2.text(`Forklift Handling  -  ${eng.spec.code} #${eng.index}`, M, 10.5), doc2.setFontSize(8), doc2.setTextColor(190, 190, 190), doc2.text(
                    `${fk.truck.name} rated ${Math.round(fk.truck.cap).toLocaleString()} kg @ ${fk.truck.lc} mm  -  rear entry, ${fk.truck.width} mm wide / ${fk.truck.mast} mm mast${fk.switched ? ` (switched from ${fk.requested.name})` : ""}`,
                    PW - M,
                    10.5, {
                        align: "right"
                    }
                );
                let fy = 22;
                fk.switched && (doc2.setFillColor(fk.noneClears ? 253 : 255, fk.noneClears ? 236 : 246, fk.noneClears ? 234 : 229), doc2.setDrawColor(fk.noneClears ? 179 : 161, fk.noneClears ? 54 : 92, fk.noneClears ? 43 : 0), doc2.setLineWidth(0.5), doc2.rect(M, fy, PW - 2 * M, 7, "FD"), doc2.setFont("helvetica", "bold"), doc2.setFontSize(8.5), doc2.setTextColor(fk.noneClears ? 179 : 161, fk.noneClears ? 54 : 92, fk.noneClears ? 43 : 0), doc2.text(
                    `EQUIPMENT SWITCHED:  ${fk.requested.name}  ->  ${fk.truck.name}${fk.noneClears ? "  (largest available - still short, see below)" : ""}`,
                    M + 2.5,
                    fy + 4.8
                ), fy += 10);
                const fdrawn = focus.method === "tandem" ? 0 : pdfForkliftMoment(doc2, M, fy, PW - 2 * M, 92, focus);
                {
                    const lp = loadingProcedure(eng, fk);
                    if (lp) {
                        doc2.addPage(), doc2.setFillColor(27, 36, 48), doc2.rect(0, 0, PW, 16, "F"), doc2.setTextColor(255, 255, 255), doc2.setFont("helvetica", "bold"), doc2.setFontSize(13), doc2.text(`Loading Method Statement  -  ${eng.spec.code} #${eng.index}`, M, 10.5), doc2.setFontSize(8), doc2.setTextColor(190, 190, 190), doc2.text(
                            lp.method === "roller" ? "Rollers + winch  -  the two-truck lift marshals only" : lp.method === "rotate" ? "Single truck  -  unit turned before entry" : "Single truck  -  rear entry through the door",
                            PW - M,
                            10.5, {
                                align: "right"
                            }
                        );
                        let my = 26;
                        lp.steps.forEach(([h, b], i) => {
                            const body = doc2.splitTextToSize(b.replace(/[^\x20-\x7E]/g, "-"), PW - 2 * M - 10);
                            my + 6 + body.length * 3.6 > PH - 12 && (doc2.addPage(), my = 20), doc2.setFillColor(27, 36, 48), doc2.circle(M + 2.6, my - 1.2, 2.6, "F"), doc2.setFont("helvetica", "bold"), doc2.setFontSize(7), doc2.setTextColor(255, 255, 255), doc2.text(String(i + 1), M + 2.6, my + 0.1, {
                                align: "center"
                            }), doc2.setFontSize(9), doc2.setTextColor(27, 36, 48), doc2.text(h, M + 8, my), my += 4.4, doc2.setFont("helvetica", "normal"), doc2.setFontSize(8), doc2.setTextColor(60, 60, 60), body.forEach((ln) => (doc2.text(ln, M + 8, my), my += 3.6)), my += 3;
                        });
                    }
                }
                fy += (fdrawn || 0) + 8, doc2.setFont("helvetica", "normal"), doc2.setLineWidth(0.2), doc2.setLineDashPattern([], 0), doc2.setFont("helvetica", "bold"), doc2.setFontSize(9.5), doc2.setTextColor(40, 40, 40), doc2.text("Handling schedule  -  heaviest units", M, fy), fy += 6;
                const fcols = [
                    ["Unit", M],
                    ["Weight", M + 78],
                    ["Load centre", M + 104],
                    ["Cap @ LC", M + 128],
                    ["Along forks", M + 158],
                    ["Utilisation", M + 186],
                    ["Verdict", M + 212]
                ];
                doc2.setFontSize(8), fcols.forEach(([t, x]) => doc2.text(t, x, fy)), doc2.setDrawColor(180, 180, 180), doc2.line(M, fy + 1.5, PW - M, fy + 1.5), fy += 6, doc2.setFont("helvetica", "normal"), doc2.setTextColor(60, 60, 60), [...fk.rows].sort((a, b) => b.util - a.util).slice(0, 10).forEach((r) => {
                    fy > PH - 14 && (doc2.addPage(), fy = 16), [
                        `${r.p.item.name} #${r.p.n}`.slice(0, 34),
                        `${Math.round(r.p.item.kg).toLocaleString()} kg`,
                        `${Math.round(r.lcActual)} mm`,
                        `${Math.round(r.capAt).toLocaleString()} kg`,
                        `${Math.round(r.alongFork)} mm`,
                        `${(r.util * 100).toFixed(0)}%`,
                        r.method === "rotate" ? "ROTATE 90 DEG" : r.method === "tandem" ? "2-TRUCK / ROLLER" : r.ok ? r.util >= 0.9 ? "Single - no margin" : r.lcState === "degraded" ? `Single (derated ${r.deratePct.toFixed(0)}%)` : "Single" : "TIPPING HAZARD"
                    ].forEach((c, i) => doc2.text(c, fcols[i][1], fy)), fy += 5.2;
                }), fk.notes.length && (fy += 4, doc2.setFont("helvetica", "bold"), doc2.setFontSize(9.5), doc2.setTextColor(40, 40, 40), doc2.text("Handling notes", M, fy), fy += 6, doc2.setFont("helvetica", "normal"), doc2.setFontSize(8.5), doc2.setTextColor(50, 50, 50)), fk.notes.forEach((note) => {
                    fy > PH - 10 && (doc2.addPage(), fy = 16);
                    const ascii = ("- " + note).replace(/×/g, "x").replace(/°/g, " deg").replace(/[–—]/g, "-").replace(/≥/g, ">=").replace(/[^\x20-\x7E]/g, "");
                    doc2.splitTextToSize(ascii, PW - 2 * M).forEach((ln) => {
                        doc2.text(ln, M, fy), fy += 4.6;
                    }), fy += 1.5;
                });
            }
        }
        const crane = craneAccess(eng, SLING_TARGET_DEG);
        if (crane.relevant) {
            doc2.addPage(), doc2.setFillColor(27, 36, 48), doc2.rect(0, 0, PW, 16, "F"), doc2.setTextColor(255, 255, 255), doc2.setFont("helvetica", "bold"), doc2.setFontSize(13), doc2.text(`Crane & Rigging Plan  -  ${eng.spec.code} #${eng.index}`, M, 10.5), doc2.setFontSize(8), doc2.setTextColor(190, 190, 190), doc2.text(
                `${crane.isOT ? "Open top - load through the roof aperture" : "Flatrack - open top and sides"}   -   slings sized at ${SLING_TARGET_DEG} deg`,
                PW - M,
                10.5, {
                    align: "right"
                }
            );
            let cy = 26;
            {
                doc2.setFont("helvetica", "bold"), doc2.setFontSize(9.5), doc2.setTextColor(40, 40, 40), doc2.text("Lifting envelope  -  boom radius against the load chart", M, cy), cy += 4;
                const ccHead = craneCapacity(eng, craneId, craneStandoff, LTM_FLEET.find((m) => m.id === ltmModel) || null);
                ccHead.relevant && ccHead.switched && (doc2.setFillColor(ccHead.noneClears ? 253 : 255, ccHead.noneClears ? 236 : 246, ccHead.noneClears ? 234 : 229), doc2.setDrawColor(ccHead.noneClears ? 179 : 161, ccHead.noneClears ? 54 : 92, ccHead.noneClears ? 43 : 0), doc2.setLineWidth(0.5), doc2.rect(M, cy, PW - 2 * M, 7, "FD"), doc2.setFont("helvetica", "bold"), doc2.setFontSize(8.5), doc2.setTextColor(ccHead.noneClears ? 179 : 161, ccHead.noneClears ? 54 : 92, ccHead.noneClears ? 43 : 0), doc2.text(
                    `EQUIPMENT SWITCHED:  ${ccHead.requested.name}  ->  ${ccHead.crane.name}${ccHead.noneClears ? "  (largest available - still short, see below)" : ""}`,
                    M + 2.5,
                    cy + 4.8
                ), cy += 10);
                const drawn = pdfCraneEnvelope(doc2, M, cy, PW - 2 * M, 88, eng, craneId, craneStandoff, SLING_TARGET_DEG);
                cy += (drawn || 0) + 8, doc2.setFont("helvetica", "normal"), doc2.setLineWidth(0.2), doc2.setLineDashPattern([], 0);
            } {
                const cc2 = craneCapacity(eng, craneId, craneStandoff, LTM_FLEET.find((m) => m.id === ltmModel) || null),
                    lm = cc2.relevant ? loadMatrix(
                        cc2.crane,
                        cc2.rows.reduce((a, b) => b.gross > a.gross ? b : a).radius,
                        cc2.rows.reduce((a, b) => b.gross > a.gross ? b : a).gross
                    ) : null;
                if (lm) {
                    cy > PH - 60 && (doc2.addPage(), cy = 16), doc2.setFont("helvetica", "bold"), doc2.setFontSize(9.5), doc2.setTextColor(40, 40, 40), doc2.text("Load matrix  -  working radius against boom length", M, cy), cy += 4.5, doc2.setFont("helvetica", "normal"), doc2.setFontSize(7), doc2.setTextColor(90, 100, 114), doc2.text(
                        `${lm.crane.name}   |   boom: ${lm.crane.boomState}   |   slew: ${lm.crane.slew}   |   counterweight: ${lm.crane.cw} t   |   capacities in tonnes`,
                        M,
                        cy
                    ), cy += 3.6, doc2.setFillColor(255, 246, 229), doc2.setDrawColor(161, 92, 0), doc2.setLineWidth(0.4), doc2.rect(M, cy, PW - 2 * M, 5.6, "FD"), doc2.setFont("helvetica", "bold"), doc2.setFontSize(7.2), doc2.setTextColor(161, 92, 0), doc2.text(
                        "REPRESENTATIVE CLASS DATA - NOT A MANUFACTURER LOAD CHART. Verify against the actual machine's chart before the lift.",
                        M + 2,
                        cy + 3.8
                    ), cy += 8.5;
                    const colW = Math.min(24, (PW - 2 * M - 26) / lm.booms.length),
                        x0m = M + 26,
                        rowH = 5;
                    doc2.setFont("helvetica", "bold"), doc2.setFontSize(7), doc2.setTextColor(40, 40, 40), doc2.text("Radius", M, cy + 3.4), lm.booms.forEach(
                        (L, i) => doc2.text(`${L} m`, x0m + i * colW + colW / 2, cy + 3.4, {
                            align: "center"
                        })
                    ), doc2.setDrawColor(120, 120, 120), doc2.setLineWidth(0.3), doc2.line(M, cy + 4.6, x0m + lm.booms.length * colW, cy + 4.6), cy += 5.6, doc2.setFont("helvetica", "normal"), lm.rows.forEach((row) => {
                        cy > PH - 26 && (doc2.addPage(), cy = 16, doc2.setFont("helvetica", "normal"), doc2.setFontSize(7)), doc2.setTextColor(40, 40, 40), doc2.text(`${row.r} m`, M, cy + 3.4), row.cells.forEach((cell, i) => {
                            const cx = x0m + i * colW,
                                isActive = row.r === lm.activeRow && cell.L === lm.activeBoom;
                            if (cell.cap == null) {
                                doc2.setTextColor(175, 175, 175), doc2.text("-", cx + colW / 2, cy + 3.4, {
                                    align: "center"
                                });
                                return;
                            }
                            isActive ? (doc2.setFillColor(cell.ok ? 226 : 253, cell.ok ? 240 : 236, cell.ok ? 231 : 234), doc2.setDrawColor(cell.ok ? 46 : 179, cell.ok ? 125 : 54, cell.ok ? 79 : 43), doc2.setLineWidth(0.8), doc2.rect(cx + 0.6, cy - 0.4, colW - 1.2, rowH, "FD"), doc2.setFont("helvetica", "bold"), doc2.setTextColor(cell.ok ? 46 : 179, cell.ok ? 125 : 54, cell.ok ? 79 : 43)) : doc2.setTextColor(70, 70, 70), doc2.text((cell.cap / 1e3).toFixed(1), cx + colW / 2, cy + 3.4, {
                                align: "center"
                            }), isActive && doc2.setFont("helvetica", "normal");
                        }), cy += rowH;
                    }), cy += 4;
                    const dedW = 118;
                    cy > PH - 30 && (doc2.addPage(), cy = 16), doc2.setDrawColor(120, 120, 120), doc2.setLineWidth(0.4), doc2.setFillColor(248, 246, 240), doc2.rect(M, cy, dedW, 24, "FD"), doc2.setFont("helvetica", "bold"), doc2.setFontSize(8), doc2.setTextColor(40, 40, 40), doc2.text("Net safe working load", M + 3, cy + 5), doc2.setFont("helvetica", "normal"), doc2.setFontSize(7.5);
                    const lines = [
                        [lm.partial ? `Chart capacity at ${lm.activeRow} m (best boom)` : `Chart capacity at ${lm.activeRow} m / ${lm.activeBoom} m boom`, lm.activeCap == null ? "-" : `${(lm.activeCap / 1e3).toFixed(1)} t`],
                        [`Working limit (${Math.round(CRANE_UTIL_LIMIT * 100)}%)`, lm.activeCap == null ? "-" : `${(lm.activeCap * CRANE_UTIL_LIMIT / 1e3).toFixed(1)} t`],
                        ["less rigging (hook block, slings, shackles)", `- ${(RIGGING_ALLOWANCE_KG / 1e3).toFixed(1)} t`],
                        ["= Net safe working load", lm.net == null ? "-" : `${(lm.net / 1e3).toFixed(1)} t`]
                    ];
                    let ly = cy + 9.5;
                    lines.forEach(([a, b], i) => {
                        i === lines.length - 1 && (doc2.setDrawColor(120, 120, 120), doc2.line(M + 3, ly - 3, M + dedW - 3, ly - 3), doc2.setFont("helvetica", "bold")), doc2.setTextColor(60, 60, 60), doc2.text(a, M + 3, ly), doc2.text(b, M + dedW - 3, ly, {
                            align: "right"
                        }), ly += 4.6;
                    });
                    const unitT = lm.grossKg / 1e3,
                        pass = lm.net != null && unitT <= lm.net;
                    doc2.setFont("helvetica", "bold"), doc2.setFontSize(8), doc2.setTextColor(pass ? 46 : 179, pass ? 125 : 54, pass ? 79 : 43), doc2.text(
                        `Heaviest lift ${unitT.toFixed(1)} t  ->  ${pass ? "within net SWL" : "EXCEEDS net SWL"}`,
                        M + dedW + 6,
                        cy + 12
                    ), cy += 30;
                }
            }
            doc2.setFont("helvetica", "bold"), doc2.setFontSize(9.5), doc2.setTextColor(40, 40, 40), doc2.text("Rigging schedule", M, cy), cy += 6;
            const cols2 = [
                ["Unit", M],
                ["Weight", M + 78],
                ["Leg length", M + 104],
                ["Hook height", M + 134],
                ["Load per leg", M + 168],
                ["At 45 deg", M + 202],
                ["Lift height", M + 236]
            ];
            doc2.setFontSize(8), cols2.forEach(([t, x]) => doc2.text(t, x, cy)), doc2.setDrawColor(180, 180, 180), doc2.line(M, cy + 1.5, PW - M, cy + 1.5), cy += 6, doc2.setFont("helvetica", "normal"), doc2.setTextColor(60, 60, 60), crane.rows.forEach((r) => {
                cy > PH - 14 && (doc2.addPage(), cy = 16), [
                    `${r.p.item.name} #${r.p.n}`.slice(0, 34),
                    `${(r.kg / 1e3).toFixed(1)} t`,
                    `${(r.legLen / 1e3).toFixed(1)} m`,
                    `${(r.hookH / 1e3).toFixed(1)} m`,
                    `${Math.round(r.legTension).toLocaleString()} kg`,
                    `${Math.round(r.legTensionMin).toLocaleString()} kg`,
                    `${(r.totalLift / 1e3).toFixed(1)} m`
                ].forEach((c, i) => doc2.text(c, cols2[i][1], cy)), cy += 5.2;
            });
            const cc = craneCapacity(eng, craneId);
            cy += 5, doc2.setFont("helvetica", "bold"), doc2.setFontSize(9.5), doc2.setTextColor(40, 40, 40), doc2.text(`Crane capacity - ${cc.crane.name}`, M, cy), cy += 6, doc2.setFontSize(8), [
                ["Unit", M],
                ["Gross lift", M + 78],
                ["Radius", M + 104],
                ["Chart cap", M + 134],
                [`Safe (${Math.round(CRANE_UTIL_LIMIT * 100)}%)`, M + 168],
                ["Utilisation", M + 202],
                ["Verdict", M + 236]
            ].forEach(([t, x]) => doc2.text(t, x, cy)), doc2.setDrawColor(180, 180, 180), doc2.line(M, cy + 1.5, PW - M, cy + 1.5), cy += 6, doc2.setFont("helvetica", "normal"), cc.rows.forEach((r) => {
                cy > PH - 14 && (doc2.addPage(), cy = 16), r.ok ? doc2.setTextColor(60, 60, 60) : doc2.setTextColor(179, 38, 30), [
                    `${r.p.item.name} #${r.p.n}`.slice(0, 34),
                    `${(r.gross / 1e3).toFixed(1)} t`,
                    `${r.radius.toFixed(1)} m`,
                    `${(r.chartCap / 1e3).toFixed(1)} t`,
                    `${(r.safeCap / 1e3).toFixed(1)} t`,
                    `${(r.util * 100).toFixed(0)}%`,
                    r.ok ? "OK" : "HIGH RISK"
                ].forEach((c, i) => doc2.text(c, [M, M + 78, M + 104, M + 134, M + 168, M + 202, M + 236][i], cy)), cy += 5.2;
            }), cy += 4, doc2.setFont("helvetica", "bold"), doc2.setFontSize(9.5), doc2.setTextColor(40, 40, 40), doc2.text("Rigging notes", M, cy), cy += 6, doc2.setFont("helvetica", "normal"), doc2.setFontSize(8.5), doc2.setTextColor(50, 50, 50), [...crane.notes, ...cc.notes].forEach((note) => {
                cy > PH - 10 && (doc2.addPage(), cy = 16);
                const ascii = ("- " + note).replace(/×/g, "x").replace(/°/g, " deg").replace(/[–—]/g, "-").replace(/≥/g, ">=").replace(/[^\x20-\x7E]/g, "");
                doc2.splitTextToSize(ascii, PW - 2 * M).forEach((ln) => {
                    doc2.text(ln, M, cy), cy += 4.6;
                }), cy += 1.5;
            });
        }
    }
    const _fn = `${coreOnly ? "stow-plan-core" : "loading-plan"}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.pdf`;
    if (planData) {
        try {
            const _b64 = btoa(unescape(encodeURIComponent(JSON.stringify(planData)))),
                _combined = new Blob([doc2.output("blob"), "\n%%STOWAGE_PLAN_V1\n" + _b64 + "\n%%STOWAGE_END\n"], { type: "application/pdf" }),
                _u = URL.createObjectURL(_combined), _a = document.createElement("a");
            _a.href = _u, _a.download = _fn, document.body.appendChild(_a), _a.click(), document.body.removeChild(_a), setTimeout(() => URL.revokeObjectURL(_u), 1e3);
        } catch (_e) { doc2.save(_fn); }
    } else doc2.save(_fn);
}

function ContainerView({
    eng,
    highlight,
    securing,
    securingItem
}) {
    const mountRef = useRef(null),
        stateRef = useRef({
            theta: -0.9,
            phi: 1.15,
            radius: 0
        });
    return useEffect(() => {
        const mount = mountRef.current;
        if (!mount || !eng) return;
        const wpx = mount.clientWidth,
            hpx = 360,
            scene = new THREE.Scene();
        scene.background = new THREE.Color("#141A22");
        const S = eng.spec,
            L = S.L / 1e3,
            W = S.W / 1e3,
            topZ = Math.max(S.H, ...eng.placed.map((p) => p.z + p.h)) / 1e3;
        stateRef.current.radius = Math.max(L, 6) * 1.35;
        const camera = new THREE.PerspectiveCamera(45, wpx / hpx, 0.1, 200),
            renderer = new THREE.WebGLRenderer({
                antialias: !0,
                preserveDrawingBuffer: !0
            });
        renderer.setSize(wpx, hpx), renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), mount.appendChild(renderer.domElement), scene.add(new THREE.AmbientLight(16777215, 0.65));
        const dir = new THREE.DirectionalLight(16777215, 0.7);
        dir.position.set(6, 10, 8), scene.add(dir);
        const grid = new THREE.GridHelper(30, 30, 2765890, 1976114);
        grid.position.y = -0.01, scene.add(grid);
        const shellMat = new THREE.LineBasicMaterial({
            color: 7044243
        });
        if (S.fam === "FR") {
            const deckEdge = new THREE.LineSegments(
                new THREE.EdgesGeometry(new THREE.PlaneGeometry(L, W)),
                shellMat
            );
            deckEdge.rotation.x = -Math.PI / 2, deckEdge.position.set(L / 2, 0.02, W / 2), scene.add(deckEdge), [0, L].forEach((xx) => {
                const wall = new THREE.LineSegments(
                    new THREE.EdgesGeometry(new THREE.PlaneGeometry(W, S.H / 1e3)),
                    shellMat
                );
                wall.rotation.y = Math.PI / 2, wall.position.set(xx, S.H / 2e3, W / 2), scene.add(wall);
            });
        } else {
            const shell = new THREE.LineSegments(
                new THREE.EdgesGeometry(new THREE.BoxGeometry(L, S.H / 1e3, W)),
                shellMat
            );
            shell.position.set(L / 2, S.H / 2e3, W / 2), scene.add(shell);
        }
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(L, W),
            new THREE.MeshLambertMaterial({
                color: 2305080,
                side: THREE.DoubleSide
            })
        );
        floor.rotation.x = -Math.PI / 2, floor.position.set(L / 2, 1e-3, W / 2), scene.add(floor);
        const door = new THREE.LineSegments(
            new THREE.EdgesGeometry(new THREE.PlaneGeometry(W, S.H / 1e3)),
            new THREE.LineBasicMaterial({
                color: 15228938
            })
        );
        door.rotation.y = Math.PI / 2, door.position.set(L + 0.02, S.H / 2e3, W / 2), scene.add(door);
        const skuIds = [...new Set(eng.placed.map((p) => p.item.id))];
        if (eng.placed.forEach((p) => {
                const color = SKU_COLORS[skuIds.indexOf(p.item.id) % SKU_COLORS.length],
                    g = new THREE.BoxGeometry(p.l / 1e3 - 0.02, p.h / 1e3 - 0.02, p.w / 1e3 - 0.02),
                    dim = !(highlight == null || highlight === p.item.id),
                    mesh = new THREE.Mesh(
                        g,
                        new THREE.MeshLambertMaterial({
                            color,
                            transparent: !0,
                            opacity: dim ? 0.12 : 0.92
                        })
                    );
                mesh.position.set((p.x + p.l / 2) / 1e3, (p.z + p.h / 2) / 1e3, (p.y + p.w / 2) / 1e3), scene.add(mesh);
                const edge = new THREE.LineSegments(
                    new THREE.EdgesGeometry(g),
                    new THREE.LineBasicMaterial({
                        color: 922651,
                        transparent: !0,
                        opacity: dim ? 0.08 : 0.7
                    })
                );
                edge.position.copy(mesh.position), scene.add(edge);
            }), securing) {
            const geo = securingGeometry(eng),
                M2 = 1e3;
            geo.items.filter((it) => !securingItem || it.p.item.id === securingItem).forEach((it) => {
                const topZm = (it.p.z + it.p.h) / M2;
                it.lashings.forEach((ln) => {
                    const fx = ln.from[0] / M2,
                        fz = ln.from[1] / M2,
                        ax = ln.to[0] / M2,
                        az = ln.to[1] / M2,
                        col = ln.dir === "across" ? 11744811 : ln.dir === "length" ? 2907013 : 13214247,
                        pts = [new THREE.Vector3(fx, topZm * 0.8, fz), new THREE.Vector3(ax, 0.02, az)],
                        lg = new THREE.BufferGeometry().setFromPoints(pts);
                    scene.add(new THREE.Line(lg, new THREE.LineBasicMaterial({
                        color: col
                    })));
                    const am = new THREE.Mesh(
                        new THREE.BoxGeometry(0.08, 0.04, 0.08),
                        new THREE.MeshLambertMaterial({
                            color: 1778736
                        })
                    );
                    am.position.set(ax, 0.02, az), scene.add(am);
                });
            }), geo.bedding.forEach((bd) => {
                [0.2, 0.5, 0.8].forEach((f) => {
                    const tb = new THREE.Mesh(
                        new THREE.BoxGeometry(0.08, 0.06, (bd.w + 120) / M2),
                        new THREE.MeshLambertMaterial({
                            color: 10516027
                        })
                    );
                    tb.position.set((bd.x + bd.l * f) / M2, 0.03, (bd.y + bd.w / 2) / M2), scene.add(tb);
                });
            });
        }
        const target = new THREE.Vector3(L / 2, topZ / 2.5, W / 2);
        let raf;
        const render = () => {
            const {
                theta,
                phi,
                radius
            } = stateRef.current;
            camera.position.set(
                target.x + radius * Math.sin(phi) * Math.cos(theta),
                target.y + radius * Math.cos(phi),
                target.z + radius * Math.sin(phi) * Math.sin(theta)
            ), camera.lookAt(target), renderer.render(scene, camera), raf = requestAnimationFrame(render);
        };
        render();
        let dragging = !1,
            lx = 0,
            ly = 0;
        const down = (e) => {
                dragging = !0, lx = e.clientX, ly = e.clientY;
            },
            move = (e) => {
                dragging && (stateRef.current.theta -= (e.clientX - lx) * 8e-3, stateRef.current.phi = Math.min(
                    1.5,
                    Math.max(0.25, stateRef.current.phi - (e.clientY - ly) * 6e-3)
                ), lx = e.clientX, ly = e.clientY);
            },
            up = () => {
                dragging = !1;
            },
            wheel = (e) => {
                e.preventDefault(), stateRef.current.radius = Math.min(60, Math.max(3, stateRef.current.radius + e.deltaY * 0.01));
            },
            el = renderer.domElement;
        return el.style.cursor = "grab", el.style.touchAction = "none", el.addEventListener("pointerdown", down), window.addEventListener("pointermove", move), window.addEventListener("pointerup", up), el.addEventListener("wheel", wheel, {
            passive: !1
        }), () => {
            cancelAnimationFrame(raf), el.removeEventListener("pointerdown", down), window.removeEventListener("pointermove", move), window.removeEventListener("pointerup", up), el.removeEventListener("wheel", wheel), renderer.dispose(), mount.removeChild(el);
        };
    }, [eng, highlight, securing, securingItem]), /* @__PURE__ */ React.createElement("div", {
        ref: mountRef,
        style: {
            width: "100%",
            height: 360,
            borderRadius: 6,
            overflow: "hidden"
        }
    });
}

function TopView({
    eng,
    highlight,
    setHighlight,
    stepIndex,
    cg,
    layer,
    securing,
    securingItem,
    onMovePiece
}) {
    const s = eng.spec,
        pad = 420 + Math.max(0, ...eng.placed.map((p) => Math.max(-p.y, p.y + p.w - s.W))),
        skuIds = [...new Set(eng.placed.map((p) => p.item.id))],
        floorFirst = [...eng.placed].sort((a, b) => a.z - b.z),
        showAll = !layer,
        secGeo = securing ? securingGeometry(eng) : null;
    const svgRef = React.useRef(null);
    const dstate = React.useState(null), drag = dstate[0], setDrag = dstate[1];
    function toMM(e) {
        const svg = svgRef.current; if (!svg || !svg.getScreenCTM) return null;
        const m = svg.getScreenCTM(); if (!m) return null;
        const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
        const q = pt.matrixTransform(m.inverse()); return { x: q.x, y: q.y };
    }
    function startDrag(e, p) {
        if (!onMovePiece) { setHighlight(highlight === p.item.id ? null : p.item.id); return; }
        const mm = toMM(e); e.preventDefault && e.preventDefault();
        try { e.target.setPointerCapture && e.target.setPointerCapture(e.pointerId); } catch (_) {}
        setDrag({ p: p, offx: mm ? mm.x - p.x : 0, offy: mm ? mm.y - p.y : 0, gx: p.x, gy: p.y, moved: false });
    }
    function moveDrag(e) {
        if (!drag) return; const mm = toMM(e); if (!mm) return;
        setDrag((d) => d ? Object.assign({}, d, { gx: mm.x - d.offx, gy: mm.y - d.offy, moved: d.moved || Math.abs(mm.x - d.offx - d.p.x) > 80 || Math.abs(mm.y - d.offy - d.p.y) > 80 }) : d);
    }
    function endDrag() {
        if (!drag) return; const d = drag; setDrag(null);
        d.moved && onMovePiece ? onMovePiece(d.p, d.gx, d.gy) : setHighlight(highlight === d.p.item.id ? null : d.p.item.id);
    }
    return /* @__PURE__ */ React.createElement(
        "svg", {
            width: "100%",
            ref: svgRef,
            onPointerMove: moveDrag,
            onPointerUp: endDrag,
            onPointerLeave: endDrag,
            viewBox: `${-pad} ${-pad} ${s.L + 2 * pad + 700} ${s.W + 2 * pad + 300}`,
            style: {
                display: "block",
                background: "#F7F4EC",
                borderRadius: 6,
                border: "1px solid #D8D3C6",
                touchAction: "none",
                cursor: drag ? "grabbing" : "default"
            }
        },
        /* @__PURE__ */
        React.createElement("rect", {
            x: 0,
            y: 0,
            width: s.L,
            height: s.W,
            fill: "#FFFFFF",
            stroke: "#1B2430",
            strokeWidth: 24
        }),
        /* @__PURE__ */
        React.createElement("line", {
            x1: s.L / 2,
            y1: 0,
            x2: s.L / 2,
            y2: s.W,
            stroke: "#B9B2A0",
            strokeWidth: 10,
            strokeDasharray: "60 60"
        }),
        floorFirst.map((p, i) => {
            const pLayer = p.stackLayer || 1;
            if (!showAll && pLayer < layer) return null;
            const isGhost = !showAll && pLayer > layer,
                color = SKU_COLORS[skuIds.indexOf(p.item.id) % SKU_COLORS.length],
                dim = !(highlight == null || highlight === p.item.id),
                step = stepIndex.get(p),
                fs = Math.min(Math.min(p.l, p.w) * 0.42, 340);
            return isGhost ? /* @__PURE__ */ React.createElement("rect", {
                key: i,
                x: p.x,
                y: p.y,
                width: p.l,
                height: p.w,
                fill: "none",
                stroke: "#B9B2A0",
                strokeWidth: 8,
                strokeDasharray: "50 40",
                opacity: 0.6
            }) : /* @__PURE__ */ React.createElement(
                "g", {
                    key: i,
                    style: {
                        cursor: onMovePiece ? "grab" : "pointer"
                    },
                    opacity: dim ? 0.18 : 1,
                    onPointerDown: (e) => startDrag(e, p)
                },
                /* @__PURE__ */
                React.createElement("rect", {
                    x: p.x,
                    y: p.y,
                    width: p.l,
                    height: p.w,
                    fill: color,
                    fillOpacity: showAll && p.z > EPS ? 0.55 : 0.85,
                    stroke: "#1B2430",
                    strokeWidth: 12
                }),
                showAll && p.z > EPS && /* @__PURE__ */ React.createElement("rect", {
                    x: p.x + 40,
                    y: p.y + 40,
                    width: p.l - 80,
                    height: p.w - 80,
                    fill: "none",
                    stroke: "#1B2430",
                    strokeWidth: 8,
                    strokeDasharray: "40 40"
                }),
                /* @__PURE__ */
                React.createElement(
                    "text", {
                        x: p.x + p.l / 2,
                        y: p.y + p.w / 2,
                        textAnchor: "middle",
                        dominantBaseline: "central",
                        fontSize: fs,
                        fontWeight: 700,
                        fill: "#FFFFFF",
                        stroke: "#1B2430",
                        strokeWidth: 6,
                        fontFamily: "'Barlow Condensed', sans-serif"
                    },
                    step
                )
            );
        }),
        drag && drag.moved && /* @__PURE__ */ React.createElement("rect", {
            x: drag.gx, y: drag.gy, width: drag.p.l, height: drag.p.w,
            fill: "#E8600A", fillOpacity: 0.22, stroke: "#E8600A", strokeWidth: 24, strokeDasharray: "70 45", pointerEvents: "none"
        }),
        /* @__PURE__ */
        React.createElement(
            "g",
            null,
            /* @__PURE__ */
            React.createElement("line", {
                x1: cg[0] - 260,
                y1: cg[1],
                x2: cg[0] + 260,
                y2: cg[1],
                stroke: "#B3362B",
                strokeWidth: 22
            }),
            /* @__PURE__ */
            React.createElement("line", {
                x1: cg[0],
                y1: cg[1] - 260,
                x2: cg[0],
                y2: cg[1] + 260,
                stroke: "#B3362B",
                strokeWidth: 22
            }),
            /* @__PURE__ */
            React.createElement("circle", {
                cx: cg[0],
                cy: cg[1],
                r: 130,
                fill: "none",
                stroke: "#B3362B",
                strokeWidth: 22
            }),
            /* @__PURE__ */
            React.createElement(
                "text", {
                    x: cg[0],
                    y: cg[1] - 320,
                    textAnchor: "middle",
                    fontSize: 260,
                    fontWeight: 700,
                    fill: "#B3362B",
                    fontFamily: "'Barlow Condensed', sans-serif"
                },
                "CG"
            )
        ),
        (() => {
            const minY = Math.min(0, ...eng.placed.map((p) => p.y)),
                maxYW = Math.max(s.W, ...eng.placed.map((p) => p.y + p.w)),
                ovT = -minY,
                ovB = maxYW - s.W,
                ann = [];
            return ovT > 1 && ann.push(
                /* @__PURE__ */
                React.createElement(
                    "g", {
                        key: "t"
                    },
                    /* @__PURE__ */
                    React.createElement("line", {
                        x1: 0,
                        y1: minY,
                        x2: s.L,
                        y2: minY,
                        stroke: "#B3362B",
                        strokeWidth: 14,
                        strokeDasharray: "90 60"
                    }),
                    /* @__PURE__ */
                    React.createElement(
                        "text", {
                            x: s.L / 2,
                            y: minY - 120,
                            textAnchor: "middle",
                            fontSize: 260,
                            fontWeight: 700,
                            fill: "#B3362B",
                            fontFamily: "'Barlow Condensed', sans-serif"
                        },
                        "OVER-WIDTH +",
                        ovT.toFixed(0),
                        " mm"
                    )
                )
            ), ovB > 1 && ann.push(
                /* @__PURE__ */
                React.createElement(
                    "g", {
                        key: "b"
                    },
                    /* @__PURE__ */
                    React.createElement("line", {
                        x1: 0,
                        y1: maxYW,
                        x2: s.L,
                        y2: maxYW,
                        stroke: "#B3362B",
                        strokeWidth: 14,
                        strokeDasharray: "90 60"
                    }),
                    /* @__PURE__ */
                    React.createElement(
                        "text", {
                            x: s.L / 2,
                            y: maxYW + 300,
                            textAnchor: "middle",
                            fontSize: 260,
                            fontWeight: 700,
                            fill: "#B3362B",
                            fontFamily: "'Barlow Condensed', sans-serif"
                        },
                        "OVER-WIDTH +",
                        ovB.toFixed(0),
                        " mm"
                    )
                )
            ), ann;
        })(),
        /* @__PURE__ */
        React.createElement("rect", {
            x: s.L,
            y: -40,
            width: 70,
            height: s.W + 80,
            fill: "#E8600A"
        }),
        /* @__PURE__ */
        React.createElement(
            "text", {
                x: s.L + 330,
                y: s.W / 2,
                textAnchor: "middle",
                dominantBaseline: "central",
                fontSize: 300,
                fontWeight: 700,
                fill: "#E8600A",
                fontFamily: "'Barlow Condensed', sans-serif",
                transform: `rotate(90 ${s.L + 330} ${s.W / 2})`
            },
            "DOOR"
        ),
        /* @__PURE__ */
        React.createElement(
            "text", {
                x: -200,
                y: s.W / 2,
                textAnchor: "middle",
                dominantBaseline: "central",
                fontSize: 300,
                fontWeight: 700,
                fill: "#7A8494",
                fontFamily: "'Barlow Condensed', sans-serif",
                transform: `rotate(-90 -200 ${s.W / 2})`
            },
            "NOSE"
        ),
        /* @__PURE__ */
        React.createElement("line", {
            x1: 0,
            y1: s.W + 200,
            x2: s.L,
            y2: s.W + 200,
            stroke: "#7A8494",
            strokeWidth: 12
        }),
        /* @__PURE__ */
        React.createElement(
            "text", {
                x: s.L / 2,
                y: s.W + 460,
                textAnchor: "middle",
                fontSize: 240,
                fill: "#7A8494",
                fontFamily: "'IBM Plex Mono', monospace"
            },
            (s.L / 1e3).toFixed(2),
            " m"
        ),
        secGeo && /* @__PURE__ */ React.createElement(
            "g",
            null,
            secGeo.bracing.map(
                (b, i) => /* @__PURE__ */ React.createElement(
                    "g", {
                        key: `br${i}`
                    },
                    /* @__PURE__ */
                    React.createElement("rect", {
                        x: b.x,
                        y: b.y,
                        width: b.l,
                        height: b.w,
                        fill: b.kind === "airbag" ? "#3E7CB1" : "#8A5D12",
                        fillOpacity: 0.18,
                        stroke: b.kind === "airbag" ? "#3E7CB1" : "#8A5D12",
                        strokeWidth: 10,
                        strokeDasharray: "60 40"
                    }),
                    /* @__PURE__ */
                    React.createElement(
                        "text", {
                            x: b.x + b.l / 2,
                            y: b.w / 2,
                            textAnchor: "middle",
                            dominantBaseline: "central",
                            fontSize: 200,
                            fontWeight: 700,
                            fill: b.kind === "airbag" ? "#2C5B85" : "#6B490E",
                            fontFamily: "'Barlow Condensed', sans-serif"
                        },
                        b.label
                    )
                )
            ),
            secGeo.bedding.map(
                (bd, i) => /* @__PURE__ */ React.createElement(
                    "g", {
                        key: `bd${i}`
                    },
                    [0.2, 0.5, 0.8].map(
                        (f, k) => /* @__PURE__ */ React.createElement("rect", {
                            key: k,
                            x: bd.x + bd.l * f - 40,
                            y: bd.y - 60,
                            width: 80,
                            height: bd.w + 120,
                            fill: "#A0763B",
                            fillOpacity: 0.55,
                            stroke: "#6B490E",
                            strokeWidth: 8
                        })
                    )
                )
            ),
            secGeo.items.filter((it) => !securingItem || it.p.item.id === securingItem).map(
                (it, i) => /* @__PURE__ */ React.createElement(
                    "g", {
                        key: `ls${i}`
                    },
                    it.lashings.map((ln, k) => {
                        const dcol = ln.dir === "across" ? "#B3362B" : ln.dir === "length" ? "#2C5B85" : "#C9A227";
                        return /* @__PURE__ */ React.createElement(
                            "g", {
                                key: k
                            },
                            /* @__PURE__ */
                            React.createElement("line", {
                                x1: ln.from[0],
                                y1: ln.from[1],
                                x2: ln.to[0],
                                y2: ln.to[1],
                                stroke: dcol,
                                strokeWidth: 14,
                                strokeDasharray: ln.dir === "length" ? "70 40" : "none",
                                opacity: 0.85
                            }),
                            /* @__PURE__ */
                            React.createElement("circle", {
                                cx: ln.to[0],
                                cy: ln.to[1],
                                r: 70,
                                fill: "#1B2430",
                                stroke: "#F2EFE7",
                                strokeWidth: 10
                            })
                        );
                    }),
                    /* @__PURE__ */
                    React.createElement(
                        "g",
                        null,
                        /* @__PURE__ */
                        React.createElement("rect", {
                            x: it.p.x + it.p.l / 2 - 190,
                            y: it.p.y + it.p.w / 2 - 130,
                            width: 380,
                            height: 200,
                            rx: 30,
                            fill: it.method === "positive-fit" ? "#2E7D4F" : "#1B2430",
                            opacity: 0.85
                        }),
                        it.method === "positive-fit" ? /* @__PURE__ */ React.createElement(
                            "text", {
                                x: it.p.x + it.p.l / 2,
                                y: it.p.y + it.p.w / 2,
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                fontSize: 130,
                                fontWeight: 700,
                                fill: "#F2EFE7",
                                fontFamily: "'Barlow Condensed', sans-serif"
                            },
                            "FIT"
                        ) : /* @__PURE__ */ React.createElement(
                            React.Fragment,
                            null,
                            /* @__PURE__ */
                            React.createElement(
                                "text", {
                                    x: it.p.x + it.p.l / 2,
                                    y: it.p.y + it.p.w / 2 - 30,
                                    textAnchor: "middle",
                                    dominantBaseline: "central",
                                    fontSize: 150,
                                    fontWeight: 700,
                                    fill: "#F2EFE7",
                                    fontFamily: "'Barlow Condensed', sans-serif"
                                },
                                it.count,
                                "x"
                            ),
                            /* @__PURE__ */
                            React.createElement(
                                "text", {
                                    x: it.p.x + it.p.l / 2,
                                    y: it.p.y + it.p.w / 2 + 130,
                                    textAnchor: "middle",
                                    dominantBaseline: "central",
                                    fontSize: 120,
                                    fontWeight: 600,
                                    fill: it.type === "chain" ? "#F2A99F" : "#A9C9E5",
                                    fontFamily: "'Barlow Condensed', sans-serif"
                                },
                                it.type
                            )
                        )
                    )
                )
            )
        )
    );
}
const stripe = {
    background: "repeating-linear-gradient(90deg,#1B2430 0 14px,#222E3D 14px 28px)"
};

function Bar({
    pct,
    color
}) {
    return /* @__PURE__ */ React.createElement(
        "div", {
            style: {
                background: "#E4E0D5",
                height: 10,
                borderRadius: 2,
                overflow: "hidden"
            }
        },
        /* @__PURE__ */
        React.createElement("div", {
            style: {
                width: `${Math.min(pct, 100)}%`,
                height: "100%",
                background: color,
                transition: "width .5s"
            }
        })
    );
}
const th = {
        textAlign: "left",
        padding: "7px 8px",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#7A8494",
        fontWeight: 600,
        whiteSpace: "nowrap"
    },
    td = {
        padding: "4px 6px",
        whiteSpace: "nowrap"
    },
    inp = {
        width: "100%",
        boxSizing: "border-box",
        border: "1px solid #D8D3C6",
        borderRadius: 3,
        padding: "5px 6px",
        fontSize: 13,
        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
        background: "#FDFCF9",
        color: "#1B2430"
    },
    btn = {
        border: "1px solid #1B2430",
        background: "transparent",
        borderRadius: 4,
        padding: "8px 14px",
        fontSize: 13,
        fontWeight: 600,
        color: "#1B2430"
    },
    h3s = {
        margin: "0 0 8px",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 18,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.06em"
    },
    card = {
        background: "#FFFFFF",
        border: "1px solid #D8D3C6",
        borderRadius: 8,
        padding: 14
    };

function App() {
    const [items, setItems] = useState(DEMO_CARGO), [result, setResult] = useState(null), [active, setActive] = useState(0), [highlight, setHighlight] = useState(null), [busy, setBusy] = useState(!1), [importMsg, setImportMsg] = useState(""), [overrides, setOverrides] = useState({}), [patterns, setPatterns] = useState({}), [axle, setAxle] = useState({
        B: "",
        rearMax: "",
        frontMax: ""
    }), [showRates, setShowRates] = useState(!1), [floorType, setFloorType] = useState("wooden"), [spacing, setSpacing] = useState(0), [doorClear, setDoorClear] = useState(282), [autoStack, setAutoStack] = useState(!1), [autoRepack, setAutoRepack] = useState(!0), [viewLayer, setViewLayer] = useState(0), [showSecuring, setShowSecuring] = useState(!1), [securingItem, setSecuringItem] = useState(null), [lashMethod, setLashMethod] = useState("auto"), [lashBoost, setLashBoost] = useState(0), [antiSlip, setAntiSlip] = useState(!1), [craneId, setCraneId] = useState("auto"), [craneStandoff, setCraneStandoff] = useState(4), [ltmModel, setLtmModel] = useState(""), [boomCfg, setBoomCfg] = useState("T"), [windMs, setWindMs] = useState(0), [varioBasePct, setVarioBasePct] = useState(100), [varioBallast, setVarioBallast] = useState("standard"), [tandemMode, setTandemMode] = useState("L"), [loadMethod, setLoadMethod] = useState("auto"), [forkId, setForkId] = useState("auto"), [pdfBusy, setPdfBusy] = useState(!1), [rateVer, setRateVer] = useState(0), [rates, setRates] = useState(
        () => Object.fromEntries(SPECS.map((s) => [s.code, {
            freight: s.freight,
            handling: s.handling
        }]))
    ), fileRef = useRef(null), planRef = useRef(null), plRef = useRef(null), [plData, setPlData] = useState(null), update = (id, field, val) => setItems(
        (prev) => prev.map((it) => it.id === id ? __spreadProps(__spreadValues({}, it), {
            [field]: val
        }) : it)
    ), applyStackToAll = () => setItems((prev) => prev.length ? prev.map((it) => __spreadProps3(__spreadValues3({}, it), {
        stack: prev[0].stack
    })) : prev), applyLayersToAll = () => setItems((prev) => prev.length ? prev.map((it) => __spreadProps3(__spreadValues3({}, it), {
        maxLayers: Math.max(1, +prev[0].maxLayers || 1)
    })) : prev), applyRotateToAll = () => setItems((prev) => prev.length ? prev.map((it) => __spreadProps3(__spreadValues3({}, it), {
        turn: prev[0].turn
    })) : prev), applyDropToAll = () => setItems((prev) => prev.length ? prev.map((it) => __spreadProps3(__spreadValues3({}, it), {
        drop: prev[0].drop
    })) : prev), addRow = () => setItems((prev) => [
        ...prev,
        {
            id: Date.now(),
            name: "New item",
            pkg: "",
            L: 1200,
            W: 1e3,
            H: 1e3,
            kg: 500,
            qty: 1,
            stack: !0,
            turn: !0,
            maxLayers: 3,
            haz: "",
            temp: !1,
            drop: 1
        }
    ]), removeRow = (id) => setItems((prev) => prev.filter((it) => it.id !== id)), runWith = (ov, pat) => {
        setBusy(!0), setTimeout(() => {
            Object.entries(rates).forEach(([code, r]) => {
                RATES[code] = {
                    freight: +r.freight || 0,
                    handling: +r.handling || 0
                };
            }), SPECS.forEach((s) => {
                ["GP", "HC", "OT"].includes(s.fam) && (s.floor = floorType);
            }), SPACING_TOLERANCE = Math.max(0, +spacing || 0), DOOR_CLEARANCE = Math.max(0, +doorClear || 0), AUTO_STACK = !!autoStack;
            const clean = items.map(
                    (it) => __spreadProps(__spreadValues({}, it), {
                        L: +it.L || 1,
                        W: +it.W || 1,
                        H: +it.H || 1,
                        kg: +it.kg || 1,
                        qty: Math.max(1, +it.qty || 1),
                        drop: +it.drop || 1,
                        maxLayers: it.stack ? Math.max(1, +it.maxLayers || 1) : 1,
                        maxStackKg: it.stack ? Math.max(0, +it.maxStackKg || 0) : 0,
                        contactCm2: Math.max(0, +it.contactCm2 || 0)
                    })
                ),
                axleCfg = +axle.B > 0 ? {
                    B: +axle.B,
                    rearMax: +axle.rearMax || 1e9,
                    frontMax: +axle.frontMax || 1e9
                } : null;
            setResult(optimise(clean, ov, pat || patterns, axleCfg)), setActive(0), setHighlight(null), setViewLayer(0), setBusy(!1);
        }, 30);
    }, updateRate = (code, field, val) => setRates(
        (prev) => __spreadProps(__spreadValues({}, prev), {
            [code]: __spreadProps(__spreadValues({}, prev[code]), {
                [field]: val
            })
        })
    ), run = () => {
        setOverrides({}), setPatterns({}), runWith({}, {});
    }, applyOverride = (group, code) => {
        const ov = __spreadValues({}, overrides);
        code ? ov[group] = code : delete ov[group], setOverrides(ov), runWith(ov);
    }, buildScenario = () => ({
        items,
        overrides,
        patterns,
        axle,
        floorType,
        spacing,
        lashMethod,
        lashBoost,
        antiSlip,
        craneId,
        craneStandoff,
        tandemMode,
        loadMethod,
        ltmModel,
        boomCfg,
        windMs,
        varioBasePct,
        varioBallast,
        forkId,
        rates,
        doorClear,
        layout: serializeFleet(result)
    }), savePlan = () => exportScenario(buildScenario()), onLoadPlan = async (e) => {
        var _b;
        const f = (_b = e.target.files) == null ? void 0 : _b[0];
        if (f)
            try {
                let d;
                if (/\.pdf$/i.test(f.name)) {
                    const _buf = new Uint8Array(await f.arrayBuffer());
                    let _s = "";
                    for (let _i = 0; _i < _buf.length; _i++) _s += String.fromCharCode(_buf[_i]);
                    const _m = _s.match(/%%STOWAGE_PLAN_V1\s+([A-Za-z0-9+/=\s]+?)\s+%%STOWAGE_END/);
                    if (!_m) { setImportMsg("That PDF has no saved plan inside it \u2014 only stow-plan PDFs exported by this version (v10.18+) carry the plan and can be resumed."); e.target.value = ""; return; }
                    d = JSON.parse(decodeURIComponent(escape(atob(_m[1].replace(/\s/g, "")))));
                    if (!d || d.app !== "STOWAGE") throw new Error("bad");
                } else {
                    d = importScenario(await f.text());
                }
                setItems(d.items), setOverrides(d.overrides || {}), setPatterns(d.patterns || {}), setAxle(d.axle || {
                    B: "",
                    rearMax: "",
                    frontMax: ""
                }), d.floorType && setFloorType(d.floorType), setSpacing(d.spacing || 0), d.lashMethod && setLashMethod(d.lashMethod), setLashBoost(d.lashBoost || 0), setAntiSlip(!!d.antiSlip), d.craneId && setCraneId(d.craneId), d.craneStandoff && setCraneStandoff(d.craneStandoff), d.tandemMode && setTandemMode(d.tandemMode), d.loadMethod && setLoadMethod(d.loadMethod), d.ltmModel !== void 0 && setLtmModel(d.ltmModel), d.boomCfg && setBoomCfg(d.boomCfg), d.windMs !== void 0 && setWindMs(d.windMs), d.varioBasePct && setVarioBasePct(d.varioBasePct), d.varioBallast && setVarioBallast(d.varioBallast), d.forkId && setForkId(d.forkId), d.rates && setRates(d.rates), d.doorClear !== void 0 && setDoorClear(d.doorClear), (() => {
                    const _rf = deserializeFleet(d.layout);
                    _rf ? (setResult(_rf), setActive(0), setHighlight(null), setViewLayer(0), setImportMsg(`Resumed plan from ${f.name} \u2014 your manual layout is preserved (saved ${d.saved ? new Date(d.saved).toLocaleString() : "?"}, v${d.version || "?"}).`)) : (setResult(null), setImportMsg(`Loaded inputs from ${f.name} (saved ${d.saved ? new Date(d.saved).toLocaleString() : "?"}). Press Optimize load.`));
                })();
            } catch (err) {
                setImportMsg("Could not read that plan file \u2014 it must be a .json saved by STOWAGE.");
            } finally {
                e.target.value = "";
            }
    }, onImport = async (e) => {
        var _a;
        const file = (_a = e.target.files) == null ? void 0 : _a[0];
        if (file)
            try {
                const buf = await file.arrayBuffer(),
                    wb = XLSX.read(buf, {
                        type: "array"
                    }),
                    imported = parseWorkbook(wb);
                if (!imported.length) {
                    setImportMsg("No valid cargo rows found \u2014 check the template column headers.");
                    return;
                }
                setItems(imported), setResult(null), setImportMsg(`Imported ${imported.length} item lines from ${file.name}. Press Optimize load.`);
            } catch (e2) {
                setImportMsg("Could not read the file \u2014 please use the .xlsx template.");
            } finally {
                e.target.value = "";
            }
    }, fleet = (result == null ? void 0 : result.fleet) || [], eng = fleet[active], analysis = useMemo(() => eng ? cgReport(eng) : null, [eng]), wdist = useMemo(() => eng ? weightDistribution(eng) : null, [eng]), applyPhys = () => {
        ANTI_SLIP = antiSlip, FRICTION = antiSlip ? FRICTION_MAT : FRICTION_BASE, LASH_BOOST = lashBoost, FORK_ID = forkId;
    }, securing = useMemo(
        () => (applyPhys(), eng ? securingNotes(eng, lashMethod) : []),
        [eng, lashMethod, lashBoost, antiSlip, forkId]
    ), balAlert = useMemo(
        () => (applyPhys(), eng ? securingBalance(eng, lashMethod) : null),
        [eng, lashMethod, lashBoost, antiSlip]
    ), cgFix = useMemo(() => eng ? cgSuggestion(eng) : null, [eng]), craneCap = useMemo(
        () => eng ? craneCapacity(eng, craneId, craneStandoff, LTM_FLEET.find((m) => m.id === ltmModel) || null) : null,
        [eng, craneId, craneStandoff, ltmModel]
    ), forkCheck = useMemo(() => eng ? forkliftCheck(eng, forkId) : null, [eng, forkId]), imdgAlert = useMemo(() => eng ? imdgReport(eng) : null, [eng]), setupSummary = useMemo(() => {
        const counts = {};
        return fleet.forEach((b) => {
            counts[b.spec.code] = (counts[b.spec.code] || 0) + 1;
        }), Object.entries(counts).map(([c, n]) => `${n} \xD7 ${c}`).join("  +  ");
    }, [fleet]), totalCost = fleet.reduce((a, b) => a + boxCost(b.spec), 0), totalCargoKg = fleet.reduce((a, b) => a + b.weight, 0), totalVol = fleet.reduce((a, b) => a + volM3(b), 0), avgFill = fleet.length ? fleet.reduce((a, b) => a + volM3(b) / effVol(b) * 100, 0) / fleet.length : 0, totalUnits = fleet.reduce((a, b) => a + b.placed.length, 0), loadSteps = useMemo(() => eng ? loadingOrder(eng) : [], [eng]), stepIndex = useMemo(() => new Map(loadSteps.map((p, i) => [p, i + 1])), [loadSteps]), skuIds = eng ? [...new Set(eng.placed.map((p) => p.item.id))] : [];
    return /* @__PURE__ */ React.createElement(
        "div", {
            style: {
                minHeight: "100vh",
                background: "#EDEAE2",
                color: "#1B2430",
                fontFamily: "'Archivo', system-ui, sans-serif"
            }
        },
        /* @__PURE__ */
        React.createElement(
            "style",
            null,
            `
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Archivo:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        input:focus, select:focus { outline: 2px solid #E8600A; outline-offset: 0; }
        button { cursor: pointer; }
        @media (max-width: 900px) { .cols { grid-template-columns: 1fr !important; } }
      `
        ),
        /* @__PURE__ */
        React.createElement(
            "header", {
                style: __spreadProps(__spreadValues({}, stripe), {
                    padding: "0 0 4px 0"
                })
            },
            /* @__PURE__ */
            React.createElement(
                "div", {
                    style: {
                        background: "#141A22",
                        padding: "18px 24px"
                    }
                },
                /* @__PURE__ */
                React.createElement(
                    "div", {
                        style: {
                            display: "flex",
                            alignItems: "baseline",
                            gap: 12,
                            flexWrap: "wrap"
                        }
                    },
                    /* @__PURE__ */
                    React.createElement(
                        "h1", {
                            style: {
                                margin: 0,
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 700,
                                fontSize: 30,
                                letterSpacing: "0.04em",
                                color: "#F2EFE7",
                                textTransform: "uppercase"
                            }
                        },
                        "Stowage",
                        /* @__PURE__ */
                        React.createElement("span", {
                            style: {
                                color: "#E8600A"
                            }
                        }, "\xB7"),
                        "Container load planner"
                    ),
                    /* @__PURE__ */
                    React.createElement(
                        "span", {
                            style: {
                                fontSize: 11,
                                fontFamily: "'IBM Plex Mono', monospace",
                                color: "#F2EFE7",
                                background: "#3E7CB1",
                                borderRadius: 3,
                                padding: "2px 8px",
                                fontWeight: 600
                            }
                        },
                        "v",
                        APP_VERSION
                    ),
                    /* @__PURE__ */
                    React.createElement(
                        "span", {
                            style: {
                                fontSize: 10,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                fontWeight: 700,
                                color: "#141A22",
                                background: "#E8600A",
                                borderRadius: 3,
                                padding: "3px 8px"
                            }
                        },
                        "Early Access"
                    )
                ),
                /* @__PURE__ */
                React.createElement(
                    "div", {
                        style: {
                            marginTop: 6,
                            display: "flex",
                            alignItems: "baseline",
                            gap: 16,
                            flexWrap: "wrap"
                        }
                    },
                    /* @__PURE__ */
                    React.createElement(
                        "span", {
                            style: {
                                fontSize: 12,
                                color: "#8A96A8",
                                fontFamily: "'IBM Plex Mono', monospace"
                            }
                        },
                        "fleet selection \xB7 3D packing \xB7 CG auto-balance \xB7 top view \xB7 Excel I/O"
                    ),
                    /* @__PURE__ */
                    React.createElement(
                        "span", {
                            style: {
                                fontSize: 12,
                                color: "#C7CEDA",
                                fontFamily: "'IBM Plex Mono', monospace"
                            }
                        },
                        "Developed by Suthiwas Kongsorn"
                    )
                )
            )
        ),
        /* @__PURE__ */
        React.createElement(
            "main", {
                style: {
                    maxWidth: 1240,
                    margin: "0 auto",
                    padding: "20px 16px 60px"
                }
            },
            /* @__PURE__ */
            React.createElement(
                "section", {
                    style: __spreadProps(__spreadValues({}, card), {
                        marginBottom: 20
                    })
                },
                /* @__PURE__ */
                React.createElement(
                    "div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 8,
                            flexWrap: "wrap",
                            gap: 8
                        }
                    },
                    /* @__PURE__ */
                    React.createElement(
                        "h2", {
                            style: __spreadProps(__spreadValues({}, h3s), {
                                fontSize: 20,
                                margin: 0
                            })
                        },
                        "Cargo manifest"
                    ),
                    /* @__PURE__ */
                    React.createElement(
                        "div", {
                            style: {
                                display: "flex",
                                gap: 8,
                                flexWrap: "wrap"
                            }
                        },
                        /* @__PURE__ */
                        React.createElement("input", {
                            ref: fileRef,
                            type: "file",
                            accept: ".xlsx,.xls,.csv",
                            onChange: onImport,
                            style: {
                                display: "none"
                            }
                        }),
                        /* @__PURE__ */
                        React.createElement(
                            "button", {
                                onClick: () => {
                                    var _a;
                                    return (_a = fileRef.current) == null ? void 0 : _a.click();
                                },
                                style: btn
                            },
                            "\u2B06 Import Excel"
                        ),
                        /* @__PURE__ */
                        React.createElement("input", {
                            ref: plRef,
                            type: "file",
                            accept: ".xlsx,.xls,.csv,.pdf,.png,.jpg,.jpeg,.webp,.bmp,.tiff",
                            onChange: async (e) => {
                                var _f = e.target.files && e.target.files[0];
                                if (_f)
                                    try {
                                        const isPdf = /\.pdf$/i.test(_f.name),
                                            isImg = /\.(png|jpe?g|webp|bmp|gif|tiff?)$/i.test(_f.name);
                                        let d;
                                        isImg ? (setImportMsg("Reading image with OCR \u2014 this can take 10\u201330 seconds, please wait\u2026"), d = await parsePackingListImage(_f)) : isPdf ? d = await parsePackingListPdf(await _f.arrayBuffer()) : d = parsePackingList(XLSX.read(await _f.arrayBuffer(), {
                                            type: "array"
                                        })), d.cargo.length ? (d.fileName = _f.name, setImportMsg(""), setPlData(d)) : setImportMsg(isImg ? "OCR could not find cargo rows in that image \u2014 try a sharper, straight-on photo, or type them in." : isPdf ? "No cargo rows detected in that PDF \u2014 if it is a scanned image, save it as .png/.jpg so it goes through OCR." : "No cargo rows detected in that packing list \u2014 check it has a header row with dimensions.");
                                    } catch (err) {
                                        setImportMsg("Could not read that file \u2014 supported: .xlsx, .xls, .csv, .pdf, images (.png/.jpg)");
                                    } finally {
                                        e.target.value = "";
                                    }
                            },
                            style: {
                                display: "none"
                            }
                        }),
                        /* @__PURE__ */
                        React.createElement("button", {
                            onClick: () => {
                                var _p = plRef.current;
                                return _p ? _p.click() : void 0;
                            },
                            style: btn,
                            title: "Read any customer packing list (Excel, CSV, text PDF, or a photo/scan via OCR) and auto-detect the columns"
                        }, "\u{1F4C4} Read packing list"),
                        /* @__PURE__ */
                        React.createElement(
                            "button", {
                                onClick: downloadBlankTemplate,
                                style: btn
                            },
                            "\u2B07 Blank template"
                        ),
                        /* @__PURE__ */
                        React.createElement("input", {
                            ref: planRef,
                            type: "file",
                            accept: ".json,.pdf",
                            onChange: onLoadPlan,
                            style: {
                                display: "none"
                            }
                        }),
                        /* @__PURE__ */
                        React.createElement(
                            "button", {
                                onClick: savePlan,
                                style: btn,
                                title: "Save the whole manifest and settings as a .json file"
                            },
                            "\u{1F4BE} Save plan"
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "button", {
                                onClick: () => {
                                    var _b;
                                    return (_b = planRef.current) == null ? void 0 : _b.click();
                                },
                                style: btn,
                                title: "Reopen a saved .json plan"
                            },
                            "\u{1F4C2} Load plan"
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "button", {
                                onClick: () => setShowRates((v) => !v),
                                style: btn
                            },
                            "\u{1F4B2} Cost rates"
                        ),
                        /* @__PURE__ */
                        React.createElement("button", {
                            onClick: addRow,
                            style: btn
                        }, "+ Add item"),
                        /* @__PURE__ */
                        React.createElement("button", {
                            onClick: () => {
                                window.confirm("Clear all cargo from the list? This cannot be undone \u2014 save the plan first if you need it.") && (setItems([]), setResult(null), setImportMsg("List cleared. Add items, or import a new packing list."));
                            },
                            style: Object.assign({}, btn, {
                                color: "#B3362B",
                                borderColor: "#B3362B"
                            }),
                            title: "Remove every cargo item so you can start a new shipment"
                        }, "\u{1F5D1} Clear list"),
                        /* @__PURE__ */
                        React.createElement("label", {
                            style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#5A6472", fontWeight: 600 },
                            title: "Length left free at the door on closed containers (real-world clearance). 282 mm keeps a 40' load to 11,750 mm. Applies on Optimize load."
                        },
                            "Door clearance",
                            /* @__PURE__ */
                            React.createElement("input", {
                                type: "number",
                                min: "0",
                                value: doorClear,
                                onChange: (e) => setDoorClear(e.target.value),
                                style: { width: 64, padding: "6px", border: "1px solid #C9C2B4", borderRadius: 4, fontSize: 13, fontFamily: "inherit" }
                            }),
                            "mm"),
                        /* @__PURE__ */
                        React.createElement("label", {
                            style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: autoStack ? "#1B2430" : "#5A6472", cursor: "pointer" },
                            title: "ON: the optimiser may stack any cargo to pack tighter — always heaviest on the bottom, a lighter piece never carries a heavier one, and a stack never exceeds the container height. OFF (default): only pieces you ticked Stack are stacked. Note: stacking assumes the lower piece can bear the weight above it — set Top load kg on fragile items, and verify on site."
                        },
                            React.createElement("input", { type: "checkbox", checked: autoStack, onChange: (e) => setAutoStack(e.target.checked) }),
                            "Auto-stack cargo"),
                        /* @__PURE__ */
                        React.createElement(
                            "button", {
                                onClick: run,
                                disabled: busy,
                                style: __spreadProps(__spreadValues({}, btn), {
                                    border: "none",
                                    background: "#E8600A",
                                    color: "#fff",
                                    padding: "8px 20px",
                                    fontSize: 14
                                })
                            },
                            busy ? "Optimizing\u2026" : "Optimize load"
                        )
                    )
                ),
                importMsg && /* @__PURE__ */ React.createElement(
                    "div", {
                        style: {
                            background: "#EEF4EA",
                            border: "1px solid #5B9E6F",
                            color: "#2E5A3C",
                            borderRadius: 4,
                            padding: "8px 12px",
                            marginBottom: 10,
                            fontSize: 13
                        }
                    },
                    importMsg
                ),
                /* @__PURE__ */
                React.createElement(
                    "div", {
                        style: {
                            overflowX: "auto",
                            overflowY: "auto",
                            maxHeight: "56vh",
                            border: "1px solid #E0DACB",
                            borderRadius: 6
                        }
                    },
                    /* @__PURE__ */
                    React.createElement(
                        "table", {
                            style: {
                                borderCollapse: "collapse",
                                width: "100%",
                                minWidth: 860
                            }
                        },
                        /* @__PURE__ */
                        React.createElement(
                            "thead", {
                                style: {
                                    position: "sticky",
                                    top: 0,
                                    zIndex: 2,
                                    background: "#EDEAE2"
                                }
                            },
                            /* @__PURE__ */
                            React.createElement(
                                "tr", {
                                    style: {
                                        borderBottom: "2px solid #1B2430"
                                    }
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "datalist", {
                                        id: "pkgtypes"
                                    },
                                    ...[
                                        ["P/L", "Pallet"],
                                        ["W/C", "Wooden case"],
                                        ["CRT", "Crate"],
                                        ["SKD", "Skid"],
                                        ["CTN", "Carton"],
                                        ["BDL", "Bundle"],
                                        ["DRM", "Drum"],
                                        ["RL", "Reel / coil"],
                                        ["BAG", "Bag"]
                                    ].map(
                                        ([v, lbl]) => /* @__PURE__ */ React.createElement("option", {
                                            key: v,
                                            value: v
                                        }, lbl)
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "Item"),
                                /* @__PURE__ */
                                React.createElement(
                                    "th", {
                                        style: th,
                                        title: "Packaging type - P/L pallet, W/C wooden case, CRT crate, SKD skid, CTN carton, BDL bundle, DRM drum. Printed on the stow map and counted in the summary."
                                    },
                                    "Pkg"
                                ),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "L mm"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "W mm"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "H mm"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "kg/unit"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "Qty"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, /* @__PURE__ */ React.createElement("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: 0
                                    }
                                }, "Stack", /* @__PURE__ */ React.createElement("button", {
                                    onClick: applyStackToAll,
                                    style: {
                                        fontSize: 9,
                                        padding: "1px 4px",
                                        border: "1px solid #B9B2A2",
                                        borderRadius: 4,
                                        background: "#FFFFFF",
                                        cursor: "pointer",
                                        whiteSpace: "nowrap",
                                        marginTop: 2
                                    },
                                    title: "Set every row\u2019s Stack to match the first row"
                                }, "\u2193 all"))),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, /* @__PURE__ */ React.createElement("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: 0
                                    }
                                }, "Max layers", /* @__PURE__ */ React.createElement("button", {
                                    onClick: applyLayersToAll,
                                    style: {
                                        fontSize: 9,
                                        padding: "1px 4px",
                                        border: "1px solid #B9B2A2",
                                        borderRadius: 4,
                                        background: "#FFFFFF",
                                        cursor: "pointer",
                                        whiteSpace: "nowrap",
                                        marginTop: 2
                                    },
                                    title: "Set every row\u2019s Max layers to match the first row"
                                }, "\u2193 all"))),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "Top load kg"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "Contact cm\xB2"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, /* @__PURE__ */ React.createElement("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: 0
                                    }
                                }, "Rotate", /* @__PURE__ */ React.createElement("button", {
                                    onClick: applyRotateToAll,
                                    style: {
                                        fontSize: 9,
                                        padding: "1px 4px",
                                        border: "1px solid #B9B2A2",
                                        borderRadius: 4,
                                        background: "#FFFFFF",
                                        cursor: "pointer",
                                        whiteSpace: "nowrap",
                                        marginTop: 2
                                    },
                                    title: "Set every row\u2019s Rotate to match the first row"
                                }, "\u2193 all"))),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "Reefer"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "IMDG"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, /* @__PURE__ */ React.createElement("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: 0
                                    }
                                }, "Drop stop", /* @__PURE__ */ React.createElement("button", {
                                    onClick: applyDropToAll,
                                    style: {
                                        fontSize: 9,
                                        padding: "1px 4px",
                                        border: "1px solid #B9B2A2",
                                        borderRadius: 4,
                                        background: "#FFFFFF",
                                        cursor: "pointer",
                                        whiteSpace: "nowrap",
                                        marginTop: 2
                                    },
                                    title: "Set every row\u2019s Drop stop to match the first row"
                                }, "\u2193 all"))),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                })
                            )
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "tbody",
                            null,
                            items.map(
                                (it) => /* @__PURE__ */ React.createElement(
                                    "tr", {
                                        key: it.id,
                                        style: {
                                            borderBottom: "1px solid #EAE6DB"
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                minWidth: 150,
                                                width: 210,
                                                maxWidth: 260,
                                                whiteSpace: "normal",
                                                verticalAlign: "top"
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("textarea", {
                                            style: __spreadProps(__spreadValues({}, inp), {
                                                whiteSpace: "pre-wrap",
                                                wordBreak: "break-word",
                                                overflow: "hidden",
                                                resize: "vertical",
                                                lineHeight: 1.3,
                                                minHeight: 26
                                            }),
                                            rows: Math.min(4, Math.max(1, Math.ceil((it.name ? String(it.name).length : 0) / 22))),
                                            value: it.name,
                                            onChange: (e) => update(it.id, "name", e.target.value),
                                            onInput: (e) => {
                                                e.target.style.height = "auto", e.target.style.height = e.target.scrollHeight + "px";
                                            }
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 80
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            list: "pkgtypes",
                                            placeholder: "P/L",
                                            value: it.pkg || "",
                                            onChange: (e) => update(it.id, "pkg", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 92
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            value: it.L,
                                            onChange: (e) => update(it.id, "L", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 92
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            value: it.W,
                                            onChange: (e) => update(it.id, "W", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 92
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            value: it.H,
                                            onChange: (e) => update(it.id, "H", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 100
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            value: it.kg,
                                            onChange: (e) => update(it.id, "kg", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 72
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            value: it.qty,
                                            onChange: (e) => update(it.id, "qty", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                textAlign: "center"
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            type: "checkbox",
                                            checked: it.stack,
                                            onChange: (e) => update(it.id, "stack", e.target.checked)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 80
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            min: "1",
                                            value: it.maxLayers || 1,
                                            disabled: !it.stack,
                                            onChange: (e) => update(it.id, "maxLayers", Math.max(1, +e.target.value || 1))
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 92
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            min: "0",
                                            placeholder: "\u2014",
                                            title: "Maximum weight this item can carry on top. Blank = no limit (layer count only).",
                                            value: it.maxStackKg == null ? "" : it.maxStackKg,
                                            disabled: !it.stack,
                                            onChange: (e) => update(it.id, "maxStackKg", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 92
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            min: "0",
                                            placeholder: "full base",
                                            title: "Real contact area with the floor in cm2 (feet, skids, saddles). Blank = full footprint.",
                                            value: it.contactCm2 == null ? "" : it.contactCm2,
                                            onChange: (e) => update(it.id, "contactCm2", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                textAlign: "center"
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            type: "checkbox",
                                            checked: it.turn !== !1,
                                            onChange: (e) => update(it.id, "turn", e.target.checked)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                textAlign: "center"
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            type: "checkbox",
                                            checked: it.temp,
                                            onChange: (e) => update(it.id, "temp", e.target.checked)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 70
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement(
                                            "select", {
                                                style: inp,
                                                value: it.haz,
                                                onChange: (e) => update(it.id, "haz", e.target.value)
                                            },
                                            /* @__PURE__ */
                                            React.createElement("option", {
                                                value: ""
                                            }, "\u2014"),
                                            ["2.1", "3", "4.1", "5.1", "8", "9"].map(
                                                (c) => /* @__PURE__ */ React.createElement("option", {
                                                    key: c,
                                                    value: c
                                                }, c)
                                            )
                                        )
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 72
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            min: "1",
                                            value: it.drop,
                                            onChange: (e) => update(it.id, "drop", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: td
                                        },
                                        /* @__PURE__ */
                                        React.createElement(
                                            "button", {
                                                onClick: () => removeRow(it.id),
                                                "aria-label": `Remove ${it.name}`,
                                                style: {
                                                    border: "none",
                                                    background: "transparent",
                                                    color: "#B3362B",
                                                    fontSize: 16,
                                                    fontWeight: 700
                                                }
                                            },
                                            "\xD7"
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                /* @__PURE__ */
                React.createElement(
                    "p", {
                        style: {
                            margin: "8px 2px 0",
                            fontSize: 12,
                            color: "#7A8494"
                        }
                    },
                    "Upright-only rotation. Drop stop 1 = first delivery (loaded last, at the door). Use the Excel template for bulk import \u2014 same columns as this table."
                )
            ),
            plData && /* @__PURE__ */ React.createElement(PackingListModal, {
                data: plData,
                btn,
                onCancel: () => setPlData(null),
                onApply: (newItems) => {
                    setItems((prev) => [...prev, ...newItems]), setResult(null), setPlData(null), setImportMsg(`Added ${newItems.length} item lines from ${plData.fileName || "packing list"}. Press Optimize load.`);
                }
            }),
            showRates && /* @__PURE__ */ React.createElement(
                "section", {
                    style: __spreadProps(__spreadValues({}, card), {
                        marginBottom: 20
                    })
                },
                /* @__PURE__ */
                React.createElement(
                    "div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 6,
                            flexWrap: "wrap",
                            gap: 8
                        }
                    },
                    /* @__PURE__ */
                    React.createElement(
                        "h2", {
                            style: __spreadProps(__spreadValues({}, h3s), {
                                fontSize: 20,
                                margin: 0
                            })
                        },
                        "Cost rates (USD per container)"
                    ),
                    /* @__PURE__ */
                    React.createElement(
                        "div", {
                            style: {
                                display: "flex",
                                gap: 10,
                                alignItems: "center",
                                flexWrap: "wrap"
                            }
                        },
                        /* @__PURE__ */
                        React.createElement(
                            "label", {
                                style: {
                                    fontSize: 13,
                                    color: "#5A6472"
                                }
                            },
                            "Container floor:",
                            " ",
                            /* @__PURE__ */
                            React.createElement(
                                "select", {
                                    value: floorType,
                                    onChange: (e) => setFloorType(e.target.value),
                                    style: __spreadProps(__spreadValues({}, inp), {
                                        width: 130,
                                        display: "inline-block"
                                    })
                                },
                                /* @__PURE__ */
                                React.createElement("option", {
                                    value: "wooden"
                                }, "Wooden"),
                                /* @__PURE__ */
                                React.createElement("option", {
                                    value: "steel"
                                }, "Steel")
                            )
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "label", {
                                style: {
                                    fontSize: 13,
                                    color: "#5A6472"
                                }
                            },
                            "Forklift spacing (mm):",
                            " ",
                            /* @__PURE__ */
                            React.createElement("input", {
                                type: "number",
                                min: "0",
                                step: "10",
                                value: spacing,
                                onChange: (e) => setSpacing(e.target.value),
                                style: __spreadProps(__spreadValues({}, inp), {
                                    width: 90,
                                    display: "inline-block"
                                })
                            })
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "span", {
                                style: {
                                    fontSize: 12,
                                    color: "#7A8494",
                                    width: "100%",
                                    marginTop: 4
                                }
                            },
                            "Axle distribution (for Offset pattern) \u2014 wheelbase & legal axle limits:"
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "label", {
                                style: {
                                    fontSize: 13,
                                    color: "#5A6472"
                                }
                            },
                            "Wheelbase (m):",
                            " ",
                            /* @__PURE__ */
                            React.createElement("input", {
                                type: "number",
                                min: "0",
                                step: "0.1",
                                value: axle.B,
                                onChange: (e) => setAxle(__spreadProps(__spreadValues({}, axle), {
                                    B: e.target.value
                                })),
                                style: __spreadProps(__spreadValues({}, inp), {
                                    width: 80,
                                    display: "inline-block"
                                })
                            })
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "label", {
                                style: {
                                    fontSize: 13,
                                    color: "#5A6472"
                                }
                            },
                            "Rear axle max (kg):",
                            " ",
                            /* @__PURE__ */
                            React.createElement("input", {
                                type: "number",
                                min: "0",
                                step: "500",
                                value: axle.rearMax,
                                onChange: (e) => setAxle(__spreadProps(__spreadValues({}, axle), {
                                    rearMax: e.target.value
                                })),
                                style: __spreadProps(__spreadValues({}, inp), {
                                    width: 100,
                                    display: "inline-block"
                                })
                            })
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "button", {
                                onClick: () => {
                                    const def = Object.fromEntries(
                                        SPECS.map((s) => [s.code, {
                                            freight: s.freight,
                                            handling: s.handling
                                        }])
                                    );
                                    setRates(def);
                                },
                                style: btn
                            },
                            "Reset to defaults"
                        )
                    )
                ),
                /* @__PURE__ */
                React.createElement(
                    "p", {
                        style: {
                            margin: "0 0 10px",
                            fontSize: 12,
                            color: "#7A8494"
                        }
                    },
                    "Total per container = Freight + Handling (THC + documentation). Handling is charged per box regardless of fill \u2014 this is what makes consolidation worthwhile. Enter your KWE/carrier rates; the optimizer minimizes total USD, so selection follows your real costs. Press Optimize load to apply."
                ),
                /* @__PURE__ */
                React.createElement(
                    "div", {
                        style: {
                            overflowX: "auto"
                        }
                    },
                    /* @__PURE__ */
                    React.createElement(
                        "table", {
                            style: {
                                borderCollapse: "collapse",
                                width: "100%",
                                minWidth: 620
                            }
                        },
                        /* @__PURE__ */
                        React.createElement(
                            "thead",
                            null,
                            /* @__PURE__ */
                            React.createElement(
                                "tr", {
                                    style: {
                                        borderBottom: "2px solid #1B2430"
                                    }
                                },
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "Container"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "Type"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "Freight (USD)"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "Handling (USD)"),
                                /* @__PURE__ */
                                React.createElement("th", {
                                    style: th
                                }, "Total (USD)")
                            )
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "tbody",
                            null,
                            SPECS.map((s) => {
                                const r = rates[s.code],
                                    total = (+r.freight || 0) + (+r.handling || 0),
                                    famName = {
                                        GP: "Dry",
                                        HC: "High cube",
                                        RF: "Reefer",
                                        OT: "Open top",
                                        FR: "Flat rack"
                                    } [s.fam];
                                return /* @__PURE__ */ React.createElement(
                                    "tr", {
                                        key: s.code,
                                        style: {
                                            borderBottom: "1px solid #EAE6DB"
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                fontWeight: 600,
                                                fontFamily: "'IBM Plex Mono', monospace"
                                            })
                                        },
                                        s.code
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                color: "#7A8494"
                                            })
                                        },
                                        famName
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 140
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            value: r.freight,
                                            onChange: (e) => updateRate(s.code, "freight", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                width: 140
                                            })
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            style: inp,
                                            type: "number",
                                            value: r.handling,
                                            onChange: (e) => updateRate(s.code, "handling", e.target.value)
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "td", {
                                            style: __spreadProps(__spreadValues({}, td), {
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                fontWeight: 600
                                            })
                                        },
                                        "$",
                                        total.toLocaleString()
                                    )
                                );
                            })
                        )
                    )
                )
            ),
            result && result.errors.map(
                (e, i) => /* @__PURE__ */ React.createElement(
                    "div", {
                        key: i,
                        style: {
                            background: "#FBEDEB",
                            border: "1px solid #B3362B",
                            color: "#7A241D",
                            borderRadius: 6,
                            padding: "10px 14px",
                            marginBottom: 14,
                            fontSize: 13
                        }
                    },
                    e
                )
            ),
            fleet.length > 0 && /* @__PURE__ */ React.createElement(
                React.Fragment,
                null,
                /* @__PURE__ */
                React.createElement(
                    "section", {
                        style: {
                            background: "#141A22",
                            color: "#F2EFE7",
                            borderRadius: 8,
                            padding: "16px 20px",
                            marginBottom: 20
                        }
                    },
                    /* @__PURE__ */
                    React.createElement(
                        "div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: 12
                            }
                        },
                        /* @__PURE__ */
                        React.createElement(
                            "div",
                            null,
                            /* @__PURE__ */
                            React.createElement(
                                "div", {
                                    style: {
                                        fontSize: 11,
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "#8A96A8",
                                        marginBottom: 4
                                    }
                                },
                                "Recommended setup"
                            ),
                            /* @__PURE__ */
                            React.createElement(
                                "div", {
                                    style: {
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontSize: 28,
                                        fontWeight: 700
                                    }
                                },
                                setupSummary
                            )
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "div", {
                                style: {
                                    display: "flex",
                                    gap: 8,
                                    flexWrap: "wrap"
                                }
                            },
                            /* @__PURE__ */
                            React.createElement(
                                "button", {
                                    onClick: () => exportPlan(items, fleet),
                                    style: {
                                        border: "1.5px solid #E8600A",
                                        background: "transparent",
                                        color: "#E8600A",
                                        borderRadius: 4,
                                        padding: "10px 18px",
                                        fontSize: 14,
                                        fontWeight: 700,
                                        letterSpacing: "0.03em"
                                    }
                                },
                                "\u2B07 Excel plan"
                            ),
                            /* @__PURE__ */
                            React.createElement(
                                "button", {
                                    onClick: () => {
                                        setPdfBusy(!0), (applyPhys(), exportLoaderPDF(fleet, lashMethod, craneId, forkId, craneStandoff, ltmModel, !1, buildScenario())).catch(() => {}).finally(() => setPdfBusy(!1));
                                    },
                                    disabled: pdfBusy,
                                    style: {
                                        border: "1.5px solid #E8600A",
                                        background: "#E8600A",
                                        color: "#fff",
                                        borderRadius: 4,
                                        padding: "10px 18px",
                                        fontSize: 14,
                                        fontWeight: 700,
                                        letterSpacing: "0.03em"
                                    }
                                },
                                pdfBusy ? "Building PDF\u2026" : "\u2B07 Loader PDF (3D + top view)"
                            ),
                            /* @__PURE__ */
                            React.createElement(
                                "button", {
                                    onClick: () => {
                                        setPdfBusy(!0), (applyPhys(), exportLoaderPDF(fleet, lashMethod, craneId, forkId, craneStandoff, ltmModel, !0, buildScenario())).catch(() => {}).finally(() => setPdfBusy(!1));
                                    },
                                    disabled: pdfBusy,
                                    title: "Core stow only: 3D stow plan, top view by layer, and stow map with cargo detail & loading sequence",
                                    style: {
                                        border: "1.5px solid #E8600A",
                                        background: "transparent",
                                        color: "#E8600A",
                                        borderRadius: 4,
                                        padding: "10px 18px",
                                        fontSize: 14,
                                        fontWeight: 700,
                                        letterSpacing: "0.03em"
                                    }
                                },
                                pdfBusy ? "Building PDF\u2026" : "\u2B07 Core PDF (stow only)"
                            )
                        )
                    ),
                    /* @__PURE__ */
                    React.createElement(
                        "div", {
                            style: {
                                display: "flex",
                                gap: 28,
                                marginTop: 14,
                                flexWrap: "wrap",
                                fontFamily: "'IBM Plex Mono', monospace"
                            }
                        },
                        [
                            ["Total cargo weight", `${totalCargoKg.toLocaleString()} kg`],
                            ["Total volume", `${totalVol.toFixed(1)} m\xB3`],
                            ["Avg fill", `${avgFill.toFixed(0)}%`],
                            ["Units", `${totalUnits}`],
                            ["Containers", `${fleet.length}`],
                            ["Total cost", `$${totalCost.toLocaleString()}`]
                        ].map(
                            ([k, v]) => /* @__PURE__ */ React.createElement(
                                "div", {
                                    key: k
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            fontSize: 10,
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            color: "#8A96A8"
                                        }
                                    },
                                    k
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            fontSize: 18,
                                            color: "#E8600A",
                                            fontWeight: 600
                                        }
                                    },
                                    v
                                )
                            )
                        )
                    )
                ),
                result.notices && result.notices.map(
                    (n, i) => /* @__PURE__ */ React.createElement(
                        "div", {
                            key: i,
                            style: {
                                borderRadius: 6,
                                padding: "10px 14px",
                                marginBottom: 10,
                                fontSize: 13,
                                background: n.type === "accepted" ? "#EEF4EA" : "#FBEDEB",
                                border: `1px solid ${n.type === "accepted" ? "#5B9E6F" : "#B3362B"}`,
                                color: n.type === "accepted" ? "#2E5A3C" : "#7A241D"
                            }
                        },
                        /* @__PURE__ */
                        React.createElement(
                            "strong",
                            null,
                            n.type === "accepted" ? "Override accepted" : "Override declined",
                            " \u2014 ",
                            GROUP_LABEL[n.group],
                            " \u2192 ",
                            n.code,
                            "."
                        ),
                        n.type === "declined" && " Keeping the recommended choice.",
                        /* @__PURE__ */
                        React.createElement(
                            "ul", {
                                style: {
                                    margin: "6px 0 0",
                                    paddingLeft: 18
                                }
                            },
                            n.reasons.map((r, k) => /* @__PURE__ */ React.createElement("li", {
                                key: k
                            }, r))
                        )
                    )
                ),
                result.groups && Object.entries(result.groups).some(([, g]) => g.length > 0) && /* @__PURE__ */ React.createElement(
                    "section", {
                        style: __spreadProps(__spreadValues({}, card), {
                            marginBottom: 20
                        })
                    },
                    /* @__PURE__ */
                    React.createElement(
                        "h3", {
                            style: __spreadProps(__spreadValues({}, h3s), {
                                marginBottom: 4
                            })
                        },
                        "Manual container override"
                    ),
                    /* @__PURE__ */
                    React.createElement(
                        "p", {
                            style: {
                                margin: "0 0 10px",
                                fontSize: 12,
                                color: "#7A8494"
                            }
                        },
                        "Force a container type per cargo group. The planner re-plans into your choice, or declines with a reason and keeps its recommendation. Useful when your real handling costs differ from the defaults (e.g. Open Top cheaper than Flat Rack)."
                    ),
                    /* @__PURE__ */
                    React.createElement(
                        "div", {
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 14
                            }
                        },
                        Object.entries(result.groups).filter(([, g]) => g.length > 0).map(([gname, gitems]) => {
                            const used = [...new Set(fleet.filter((b) => b.group === gname).map((b) => b.spec.code))],
                                opts = candidatesFor(gname, gitems);
                            return /* @__PURE__ */ React.createElement(
                                "div", {
                                    key: gname,
                                    style: {
                                        minWidth: 230,
                                        flex: "1 1 230px",
                                        border: "1px solid #EAE6DB",
                                        borderRadius: 6,
                                        padding: "10px 12px"
                                    }
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            fontSize: 12,
                                            fontWeight: 600,
                                            marginBottom: 2
                                        }
                                    },
                                    GROUP_LABEL[gname]
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            fontSize: 11,
                                            color: "#7A8494",
                                            marginBottom: 8
                                        }
                                    },
                                    gitems.length,
                                    " item line",
                                    gitems.length > 1 ? "s" : "",
                                    " \xB7 currently ",
                                    used.join(" + ") || "\u2014"
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "select", {
                                        value: overrides[gname] || "",
                                        onChange: (e) => applyOverride(gname, e.target.value),
                                        style: __spreadProps(__spreadValues({}, inp), {
                                            width: "100%"
                                        })
                                    },
                                    /* @__PURE__ */
                                    React.createElement("option", {
                                        value: ""
                                    }, "Auto (recommended)"),
                                    opts.map(
                                        (s) => /* @__PURE__ */ React.createElement(
                                            "option", {
                                                key: s.code,
                                                value: s.code
                                            },
                                            "Force ",
                                            s.code,
                                            " ($",
                                            boxCost(s).toLocaleString(),
                                            ")"
                                        )
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            fontSize: 11,
                                            color: "#7A8494",
                                            margin: "8px 0 3px"
                                        }
                                    },
                                    "Floor pattern"
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "select", {
                                        value: patterns[gname] || "auto",
                                        onChange: (e) => {
                                            const pv = __spreadValues({}, patterns);
                                            e.target.value === "auto" ? delete pv[gname] : pv[gname] = e.target.value, setPatterns(pv), runWith(overrides, pv);
                                        },
                                        style: __spreadProps(__spreadValues({}, inp), {
                                            width: "100%"
                                        })
                                    },
                                    /* @__PURE__ */
                                    React.createElement("option", {
                                        value: "auto"
                                    }, "Auto packing"),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "option", {
                                            value: "honeycomb"
                                        },
                                        "Honeycomb (cylinders)"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "option", {
                                            value: "pinwheel"
                                        },
                                        "Pinwheel (rectangular)"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "option", {
                                            value: "offset"
                                        },
                                        "Offset (axle / obstruction)"
                                    )
                                )
                            );
                        })
                    )
                ),
                /* @__PURE__ */
                React.createElement(
                    "div", {
                        style: {
                            display: "flex",
                            gap: 6,
                            flexWrap: "wrap",
                            marginBottom: 12
                        }
                    },
                    fleet.map(
                        (b, i) => /* @__PURE__ */ React.createElement(
                            "button", {
                                key: i,
                                onClick: () => {
                                    setActive(i), setHighlight(null), setViewLayer(0);
                                },
                                style: {
                                    padding: "8px 16px",
                                    borderRadius: 4,
                                    fontWeight: 600,
                                    fontSize: 13,
                                    fontFamily: "'IBM Plex Mono', monospace",
                                    border: i === active ? "2px solid #E8600A" : "1px solid #C9C3B4",
                                    background: i === active ? "#1B2430" : "#F7F4EC",
                                    color: i === active ? "#F2EFE7" : "#1B2430"
                                }
                            },
                            b.spec.code,
                            " #",
                            b.index
                        )
                    )
                ),
                eng && /* @__PURE__ */ React.createElement(
                    React.Fragment,
                    null,
                    /* @__PURE__ */
                    React.createElement(ContainerNoInput, {
                        eng: eng,
                        fleet: fleet,
                        active: active,
                        onFleet: (nf) => setResult((r) => Object.assign({}, r, { fleet: nf }))
                    }),
                    /* @__PURE__ */
                    React.createElement(AdjustPanel, {
                        eng: eng,
                        fleet: fleet,
                        active: active,
                        onFleet: (nf) => setResult((r) => Object.assign({}, r, { fleet: nf }))
                    }),
                    /* @__PURE__ */
                    React.createElement(
                        "div", {
                            className: "cols",
                            style: {
                                display: "grid",
                                gridTemplateColumns: "1.4fr 1fr",
                                gap: 16
                            }
                        },
                        /* @__PURE__ */
                        React.createElement(
                            "div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 16
                                }
                            },
                            /* @__PURE__ */
                            React.createElement(
                                "section", {
                                    style: card
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "baseline",
                                            marginBottom: 8,
                                            flexWrap: "wrap"
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "h3", {
                                            style: __spreadProps(__spreadValues({}, h3s), {
                                                margin: 0
                                            })
                                        },
                                        "3D stow plan \u2014 ",
                                        eng.spec.code,
                                        " #",
                                        eng.index
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "span", {
                                            style: {
                                                fontSize: 11,
                                                color: "#7A8494"
                                            }
                                        },
                                        "drag to rotate \xB7 scroll to zoom \xB7 orange frame = door"
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement(ContainerView, {
                                    eng,
                                    highlight,
                                    securing: showSecuring,
                                    securingItem
                                })
                            ),
                            /* @__PURE__ */
                            React.createElement(
                                "section", {
                                    style: card
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "baseline",
                                            marginBottom: 8,
                                            flexWrap: "wrap"
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "h3", {
                                            style: __spreadProps(__spreadValues({}, h3s), {
                                                margin: 0
                                            })
                                        },
                                        "Top view \u2014 loading sequence"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "span", {
                                            style: {
                                                fontSize: 11,
                                                color: "#7A8494"
                                            }
                                        },
                                        "numbers = loading step \xB7 faint dashed = unit stacked above \xB7 tap a box to highlight"
                                    )
                                ),
                                (() => {
                                    const maxL = Math.max(1, ...eng.placed.map((p) => p.stackLayer || 1));
                                    return maxL < 2 ? null : /* @__PURE__ */ React.createElement(
                                        "div", {
                                            style: {
                                                display: "flex",
                                                gap: 6,
                                                marginBottom: 8,
                                                flexWrap: "wrap"
                                            }
                                        },
                                        /* @__PURE__ */
                                        React.createElement(
                                            "button", {
                                                onClick: () => setViewLayer(0),
                                                style: {
                                                    padding: "4px 12px",
                                                    borderRadius: 4,
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    border: viewLayer === 0 ? "1.5px solid #E8600A" : "1px solid #D8D3C6",
                                                    background: viewLayer === 0 ? "#1B2430" : "#fff",
                                                    color: viewLayer === 0 ? "#F2EFE7" : "#1B2430"
                                                }
                                            },
                                            "All layers"
                                        ),
                                        Array.from({
                                            length: maxL
                                        }, (_, k) => k + 1).map(
                                            (L) => /* @__PURE__ */ React.createElement(
                                                "button", {
                                                    key: L,
                                                    onClick: () => setViewLayer(L),
                                                    style: {
                                                        padding: "4px 12px",
                                                        borderRadius: 4,
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        border: viewLayer === L ? "1.5px solid #E8600A" : "1px solid #D8D3C6",
                                                        background: viewLayer === L ? "#1B2430" : "#fff",
                                                        color: viewLayer === L ? "#F2EFE7" : "#1B2430"
                                                    }
                                                },
                                                L === 1 ? "Floor" : `Layer ${L}`
                                            )
                                        )
                                    );
                                })(),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            display: "flex",
                                            gap: 8,
                                            marginBottom: 8,
                                            flexWrap: "wrap",
                                            alignItems: "center"
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "button", {
                                            onClick: () => {
                                                setShowSecuring((v) => !v), setSecuringItem(null);
                                            },
                                            style: {
                                                padding: "4px 14px",
                                                borderRadius: 4,
                                                fontSize: 12,
                                                fontWeight: 700,
                                                border: showSecuring ? "1.5px solid #B3362B" : "1px solid #D8D3C6",
                                                background: showSecuring ? "#B3362B" : "#fff",
                                                color: showSecuring ? "#fff" : "#1B2430"
                                            }
                                        },
                                        showSecuring ? "\u2713 Securing plan" : "Show securing plan"
                                    ),
                                    showSecuring && (() => {
                                        const secItems = securingGeometry(eng).items;
                                        return secItems.length <= 1 ? null : /* @__PURE__ */ React.createElement(
                                            "select", {
                                                value: securingItem || "",
                                                onChange: (e) => setSecuringItem(e.target.value ? +e.target.value : null),
                                                style: __spreadProps(__spreadValues({}, inp), {
                                                    width: 200,
                                                    display: "inline-block"
                                                })
                                            },
                                            /* @__PURE__ */
                                            React.createElement(
                                                "option", {
                                                    value: ""
                                                },
                                                "All items (",
                                                secItems.length,
                                                ")"
                                            ),
                                            [...new Map(secItems.map((it) => [it.p.item.id, it.p.item])).values()].map(
                                                (it) => /* @__PURE__ */ React.createElement(
                                                    "option", {
                                                        key: it.id,
                                                        value: it.id
                                                    },
                                                    it.name
                                                )
                                            )
                                        );
                                    })(),
                                    showSecuring && /* @__PURE__ */ React.createElement(
                                        "span", {
                                            style: {
                                                fontSize: 11,
                                                color: "#7A8494"
                                            }
                                        },
                                        "green FIT = tight-stow (no lashing) \xB7 red = across \xB7 blue = door-side \xB7 \u25CF = ring \xB7 brown = bedding"
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement("div", {
                                    style: { display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", margin: "0 0 6px" }
                                },
                                    React.createElement("span", { style: { fontSize: 12, color: "#5A6472", fontWeight: 600 } }, "\uD83D\uDDB1 Drag a box to move it \u00b7 click to highlight its type"),
                                    React.createElement("label", {
                                        style: { fontSize: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 5, cursor: "pointer", color: autoRepack ? "#1B2430" : "#B3362B" },
                                        title: "ON: dropping a box re-packs the whole container around it. OFF: the box stays exactly where you drop it and nothing else moves (manual placement)."
                                    },
                                        React.createElement("input", { type: "checkbox", checked: autoRepack, onChange: (e) => setAutoRepack(e.target.checked) }),
                                        autoRepack ? "Auto re-pack on drop" : "Manual move only (no re-pack)")),
                                /* @__PURE__ */
                                React.createElement(TopView, {
                                    eng,
                                    highlight,
                                    setHighlight,
                                    stepIndex,
                                    cg: analysis.cg,
                                    layer: viewLayer || void 0,
                                    securing: showSecuring,
                                    securingItem,
                                    onMovePiece: (piece, x, y) => {
                                        if (autoRepack) {
                                            const ne = repackAt(eng, piece, x, y);
                                            if (ne) { const nf = fleet.slice(); nf[active] = ne; setResult((r) => Object.assign({}, r, { fleet: nf })); }
                                        } else {
                                            const uL = isClosedStandard(eng.spec) ? Math.max(0, eng.spec.L - DOOR_CLEARANCE) : eng.spec.L,
                                                nx = Math.max(0, Math.min(Math.round(x), Math.max(0, uL - piece.l))),
                                                ny = Math.max(0, Math.min(Math.round(y), Math.max(0, eng.spec.W - piece.w))),
                                                np = eng.placed.map((p) => p === piece ? Object.assign({}, p, { x: nx, y: ny }) : p),
                                                ne = cloneEng(eng, { placed: np }),
                                                nf = fleet.slice();
                                            nf[active] = ne; setResult((r) => Object.assign({}, r, { fleet: nf }));
                                        }
                                    }
                                }),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 8,
                                            marginTop: 10
                                        }
                                    },
                                    skuIds.map((id, i) => {
                                        const it = eng.placed.find((p) => p.item.id === id).item,
                                            on = highlight === id;
                                        return /* @__PURE__ */ React.createElement(
                                            "button", {
                                                key: id,
                                                onClick: () => setHighlight(on ? null : id),
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    border: on ? "1.5px solid #1B2430" : "1px solid #D8D3C6",
                                                    background: on ? "#F7F4EC" : "#fff",
                                                    borderRadius: 4,
                                                    padding: "4px 10px",
                                                    fontSize: 12
                                                }
                                            },
                                            /* @__PURE__ */
                                            React.createElement("span", {
                                                style: {
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 2,
                                                    background: SKU_COLORS[i % SKU_COLORS.length]
                                                }
                                            }),
                                            it.name,
                                            it.haz ? ` \xB7 IMDG ${it.haz}` : ""
                                        );
                                    })
                                )
                            )
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 16
                                }
                            },
                            /* @__PURE__ */
                            React.createElement(
                                "section", {
                                    style: card
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "h3", {
                                        style: h3s
                                    },
                                    "Utilization & weight",
                                    eng.pattern && /* @__PURE__ */ React.createElement(
                                        "span", {
                                            style: {
                                                fontSize: 11,
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                marginLeft: 8,
                                                padding: "2px 8px",
                                                borderRadius: 3,
                                                background: "#EAF0F6",
                                                color: "#2C5B85",
                                                fontWeight: 600
                                            }
                                        },
                                        eng.pattern,
                                        " pattern"
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            fontSize: 13,
                                            marginBottom: 4,
                                            display: "flex",
                                            justifyContent: "space-between"
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "span",
                                        null,
                                        "Volume \u2014 ",
                                        volM3(eng).toFixed(1),
                                        " / ",
                                        effVol(eng).toFixed(1),
                                        " m\xB3"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "strong", {
                                            style: {
                                                fontFamily: "'IBM Plex Mono', monospace"
                                            }
                                        },
                                        (volM3(eng) / effVol(eng) * 100).toFixed(1),
                                        "%"
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement(Bar, {
                                    pct: volM3(eng) / effVol(eng) * 100,
                                    color: "#3E7CB1"
                                }),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            fontSize: 13,
                                            margin: "10px 0 4px",
                                            display: "flex",
                                            justifyContent: "space-between"
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "span",
                                        null,
                                        "Payload \u2014 ",
                                        eng.weight.toLocaleString(),
                                        " / ",
                                        eng.spec.payload.toLocaleString(),
                                        " kg"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "strong", {
                                            style: {
                                                fontFamily: "'IBM Plex Mono', monospace"
                                            }
                                        },
                                        (eng.weight / eng.spec.payload * 100).toFixed(1),
                                        "%"
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement(Bar, {
                                    pct: eng.weight / eng.spec.payload * 100,
                                    color: "#E8600A"
                                }),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            marginTop: 12,
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            fontSize: 13,
                                            lineHeight: 1.9,
                                            borderTop: "1px solid #EAE6DB",
                                            paddingTop: 8
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "Cargo weight\xA0\xA0",
                                        eng.weight.toLocaleString(),
                                        " kg"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "Container tare\xA0",
                                        eng.spec.tare.toLocaleString(),
                                        " kg"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        /* @__PURE__ */
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Gross weight\xA0\xA0",
                                            (eng.weight + eng.spec.tare).toLocaleString(),
                                            " kg"
                                        )
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            marginTop: 10,
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            fontSize: 13,
                                            lineHeight: 1.9,
                                            borderTop: "1px solid #EAE6DB",
                                            paddingTop: 8
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "Freight\xA0\xA0\xA0\xA0\xA0$",
                                        rateOf(eng.spec.code).freight.toLocaleString()
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "Handling\xA0\xA0$",
                                        rateOf(eng.spec.code).handling.toLocaleString(),
                                        " ",
                                        /* @__PURE__ */
                                        React.createElement(
                                            "span", {
                                                style: {
                                                    color: "#7A8494"
                                                }
                                            },
                                            "(THC + doc)"
                                        )
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        /* @__PURE__ */
                                        React.createElement(
                                            "strong",
                                            null,
                                            "Box total\xA0\xA0$",
                                            boxCost(eng.spec).toLocaleString()
                                        )
                                    )
                                )
                            ),
                            /* @__PURE__ */
                            React.createElement(
                                "section", {
                                    style: card
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "h3", {
                                        style: h3s
                                    },
                                    "Center of gravity",
                                    " ",
                                    /* @__PURE__ */
                                    React.createElement(
                                        "span", {
                                            style: {
                                                fontSize: 12,
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                padding: "2px 8px",
                                                borderRadius: 3,
                                                background: analysis.ok ? "#E3F0E7" : "#FBF3E2",
                                                color: analysis.ok ? "#2E7D4F" : "#8A5D12",
                                                verticalAlign: "middle"
                                            }
                                        },
                                        analysis.ok ? "PASS" : "CHECK"
                                    )
                                ),
                                eng.placed.length > 1 && /* @__PURE__ */ React.createElement(
                                    "div", {
                                        style: {
                                            marginBottom: 8,
                                            fontSize: 12.5,
                                            color: "#2E5A3C",
                                            background: "#EEF4EA",
                                            borderRadius: 4,
                                            padding: "7px 10px"
                                        }
                                    },
                                    "Balanced for CG and fill: heavy rows re-sequenced toward mid-container to center the weight while keeping the load densely packed",
                                    Math.abs(eng.shift) > 10 ? `. A ${(Math.abs(eng.shift) / 1e3).toFixed(2)} m ${eng.shift > 0 ? "door" : "nose"}-side gap remains because reordering alone could not fully center the CG \u2014 brace it per the securing plan` : " with no wasted length",
                                    "."
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            fontSize: 13,
                                            lineHeight: 1.9
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "CG\xA0\xA0(",
                                        (analysis.cg[0] / 1e3).toFixed(2),
                                        ", ",
                                        (analysis.cg[1] / 1e3).toFixed(2),
                                        ", ",
                                        (analysis.cg[2] / 1e3).toFixed(2),
                                        ") m"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "Longitudinal ",
                                        analysis.offL >= 0 ? "+" : "",
                                        analysis.offL.toFixed(1),
                                        "% (limit \xB110%)"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "Lateral ",
                                        analysis.offW >= 0 ? "+" : "",
                                        analysis.offW.toFixed(1),
                                        "% (limit \xB15%)"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "CG height ",
                                        analysis.hPct.toFixed(0),
                                        "% of inner height (limit 50%)"
                                    )
                                ),
                                analysis.warns.map(
                                    (w, i) => /* @__PURE__ */ React.createElement(
                                        "div", {
                                            key: i,
                                            style: {
                                                marginTop: 8,
                                                fontSize: 12.5,
                                                color: "#8A5D12",
                                                background: "#FBF3E2",
                                                borderRadius: 4,
                                                padding: "7px 10px"
                                            }
                                        },
                                        w
                                    )
                                )
                            ),
                            wdist && wdist.restLenM > 0 && /* @__PURE__ */ React.createElement(
                                "section", {
                                    style: __spreadProps(__spreadValues({}, card), {
                                        border: wdist.ok ? "1px solid #D8D3C6" : "1.5px solid #B3362B"
                                    })
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "h3", {
                                        style: h3s
                                    },
                                    "Weight distribution",
                                    " ",
                                    /* @__PURE__ */
                                    React.createElement(
                                        "span", {
                                            style: {
                                                fontSize: 12,
                                                fontFamily: "'IBM Plex Mono', monospace",
                                                padding: "2px 8px",
                                                borderRadius: 3,
                                                background: wdist.ok ? "#E3F0E7" : "#FBEDEB",
                                                color: wdist.ok ? "#2E7D4F" : "#B3362B",
                                                verticalAlign: "middle"
                                            }
                                        },
                                        wdist.ok ? "PASS" : "OVERLOAD"
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            fontFamily: "'IBM Plex Mono', monospace",
                                            fontSize: 13,
                                            lineHeight: 1.9
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "Resting length\xA0",
                                        wdist.restLenM.toFixed(1),
                                        " m (",
                                        eng.spec.floor || "n/a",
                                        " floor)"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "Line-load limit\xA0",
                                        wdist.permTonnes.toFixed(1),
                                        " t at this length"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div",
                                        null,
                                        "Actual load\xA0\xA0\xA0\xA0",
                                        (eng.weight / 1e3).toFixed(1),
                                        " t (",
                                        wdist.util.toFixed(0),
                                        "% of limit)"
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            marginTop: 6
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div", {
                                            style: {
                                                background: "#E4E0D5",
                                                height: 10,
                                                borderRadius: 2,
                                                overflow: "hidden"
                                            }
                                        },
                                        /* @__PURE__ */
                                        React.createElement("div", {
                                            style: {
                                                width: `${Math.min(wdist.util, 100)}%`,
                                                height: "100%",
                                                background: wdist.util > 100 ? "#B3362B" : "#5B9E6F"
                                            }
                                        })
                                    )
                                ),
                                wdist.warnings.map(
                                    (w, i) => /* @__PURE__ */ React.createElement(
                                        "div", {
                                            key: i,
                                            style: {
                                                marginTop: 8,
                                                fontSize: 12.5,
                                                color: "#7A241D",
                                                background: "#FBEDEB",
                                                borderRadius: 4,
                                                padding: "7px 10px"
                                            }
                                        },
                                        w
                                    )
                                ),
                                eng.spec.floor && /* @__PURE__ */ React.createElement(
                                    "div", {
                                        style: {
                                            marginTop: 8,
                                            fontSize: 12,
                                            color: "#5A6472"
                                        }
                                    },
                                    "Based on ",
                                    eng.spec.floor,
                                    " floor. Steel floors carry higher line loads \u2014 set the floor type in the Cost rates / settings panel and re-optimize."
                                )
                            ),
                            /* @__PURE__ */
                            React.createElement(
                                "section", {
                                    style: __spreadProps(__spreadValues({}, card), {
                                        border: "1.5px solid #E8600A"
                                    })
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "h3", {
                                        style: __spreadProps(__spreadValues({}, h3s), {
                                            color: "#B3362B"
                                        })
                                    },
                                    "Out-of-gauge (OOG)"
                                ),
                                oogInfo(eng).map(
                                    (o, i) => /* @__PURE__ */ React.createElement(
                                        "div", {
                                            key: i,
                                            style: {
                                                fontSize: 12.5,
                                                padding: "5px 0",
                                                lineHeight: 1.6
                                            }
                                        },
                                        /* @__PURE__ */
                                        React.createElement("strong", null, o.p.item.name, " #", o.p.n),
                                        " \u2014 ",
                                        oogText(o)
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            marginTop: 6,
                                            fontSize: 12,
                                            color: "#7A8494"
                                        }
                                    },
                                    "Equal side overhang is enforced for lashing symmetry. Over-dimension permit required for road leg."
                                )
                            ),
                            ")}",
                            /* @__PURE__ */
                            React.createElement(
                                "section", {
                                    style: card
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            flexWrap: "wrap",
                                            gap: 8
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "h3", {
                                            style: __spreadProps(__spreadValues({}, h3s), {
                                                margin: 0
                                            })
                                        },
                                        "Securing plan"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: antiSlip ? "#2E7D4F" : "#5A6472",
                                                fontWeight: antiSlip ? 700 : 400,
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 6,
                                                marginRight: 14
                                            },
                                            title: "Rubber anti-slip mats under every unit. Recalculates the CTU balance at friction 0.6 instead of 0.3."
                                        },
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            type: "checkbox",
                                            checked: antiSlip,
                                            onChange: (e) => setAntiSlip(e.target.checked)
                                        }),
                                        `Apply anti-slip mats (friction ${antiSlip ? FRICTION_MAT : FRICTION_BASE})`
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: "#5A6472",
                                                marginRight: 14
                                            }
                                        },
                                        "Crane:",
                                        /* @__PURE__ */
                                        React.createElement(
                                            "select", {
                                                value: craneId,
                                                onChange: (e) => setCraneId(e.target.value),
                                                style: {
                                                    marginLeft: 5,
                                                    fontSize: 12,
                                                    padding: "2px 4px"
                                                }
                                            },
                                            [
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "option", {
                                                        key: "auto",
                                                        value: "auto"
                                                    },
                                                    "Auto - smallest that clears"
                                                ),
                                                ...CRANES.map(
                                                    (c) => /* @__PURE__ */ React.createElement("option", {
                                                        key: c.id,
                                                        value: c.id
                                                    }, `${c.name} (min)`)
                                                )
                                            ]
                                        )
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: "#5A6472",
                                                marginRight: 14
                                            }
                                        },
                                        "Model:",
                                        /* @__PURE__ */
                                        React.createElement(
                                            "select", {
                                                value: ltmModel,
                                                onChange: (e) => setLtmModel(e.target.value),
                                                style: {
                                                    marginLeft: 5,
                                                    fontSize: 12,
                                                    padding: "2px 4px"
                                                }
                                            },
                                            /* @__PURE__ */
                                            React.createElement("option", {
                                                value: ""
                                            }, "Generic class"),
                                            ...LTM_FLEET.map(
                                                (m) => /* @__PURE__ */ React.createElement(
                                                    "option", {
                                                        key: m.id,
                                                        value: m.id
                                                    },
                                                    `${m.name}${m.verified ? "" : " - chart not loaded"}`
                                                )
                                            )
                                        )
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: "#5A6472",
                                                marginRight: 14
                                            }
                                        },
                                        "Boom:",
                                        /* @__PURE__ */
                                        React.createElement(
                                            "select", {
                                                value: boomCfg,
                                                onChange: (e) => setBoomCfg(e.target.value),
                                                style: {
                                                    marginLeft: 5,
                                                    fontSize: 12,
                                                    padding: "2px 4px"
                                                }
                                            },
                                            ...BOOM_CONFIGS.map(
                                                (b) => /* @__PURE__ */ React.createElement("option", {
                                                    key: b.id,
                                                    value: b.id
                                                }, b.name)
                                            )
                                        )
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: "#5A6472",
                                                marginRight: 14
                                            },
                                            title: "Standard charts assume max 9 m/s. Above that capacity is derated; at 13.8 m/s work normally stops."
                                        },
                                        `Wind ${(+windMs).toFixed(1)} m/s:`,
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            type: "range",
                                            min: "0",
                                            max: "18",
                                            step: "0.5",
                                            value: windMs,
                                            onChange: (e) => setWindMs(+e.target.value),
                                            style: {
                                                marginLeft: 5,
                                                verticalAlign: "middle",
                                                width: 90
                                            }
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: "#5A6472",
                                                marginRight: 14
                                            },
                                            title: "VarioBase Plus - outrigger extension actually achieved on site."
                                        },
                                        `VarioBase ${varioBasePct}%:`,
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            type: "range",
                                            min: "30",
                                            max: "100",
                                            step: "5",
                                            value: varioBasePct,
                                            onChange: (e) => setVarioBasePct(+e.target.value),
                                            style: {
                                                marginLeft: 5,
                                                verticalAlign: "middle",
                                                width: 90
                                            }
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: "#5A6472",
                                                marginRight: 14
                                            },
                                            title: "How two forklifts stand when a unit needs a tandem lift. End+side is the 90 degree arrangement; long side puts both trucks on the same face. Decide it on which faces you can actually reach in the yard."
                                        },
                                        "Method:",
                                        /* @__PURE__ */
                                        React.createElement(
                                            "select", {
                                                value: loadMethod,
                                                onChange: (e) => setLoadMethod(e.target.value),
                                                style: {
                                                    marginLeft: 5,
                                                    marginRight: 14,
                                                    fontSize: 12,
                                                    padding: "2px 4px"
                                                }
                                            },
                                            ...LOAD_METHODS.map(
                                                (m) => /* @__PURE__ */ React.createElement("option", {
                                                    key: m.id,
                                                    value: m.id
                                                }, m.name)
                                            )
                                        ),
                                        "Tandem:",
                                        /* @__PURE__ */
                                        React.createElement(
                                            "select", {
                                                value: tandemMode,
                                                onChange: (e) => setTandemMode(e.target.value),
                                                style: {
                                                    marginLeft: 5,
                                                    fontSize: 12,
                                                    padding: "2px 4px"
                                                }
                                            },
                                            /* @__PURE__ */
                                            React.createElement("option", {
                                                value: "L"
                                            }, "End + side (90 deg)"),
                                            /* @__PURE__ */
                                            React.createElement("option", {
                                                value: "S"
                                            }, "Both on long side"),
                                            /* @__PURE__ */
                                            React.createElement("option", {
                                                value: "auto"
                                            }, "Auto - least machine")
                                        )
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: "#5A6472",
                                                marginRight: 14
                                            }
                                        },
                                        "VarioBallast:",
                                        /* @__PURE__ */
                                        React.createElement(
                                            "select", {
                                                value: varioBallast,
                                                onChange: (e) => setVarioBallast(e.target.value),
                                                style: {
                                                    marginLeft: 5,
                                                    fontSize: 12,
                                                    padding: "2px 4px"
                                                }
                                            },
                                            /* @__PURE__ */
                                            React.createElement("option", {
                                                value: "reduced"
                                            }, "Reduced radius"),
                                            /* @__PURE__ */
                                            React.createElement("option", {
                                                value: "standard"
                                            }, "Standard"),
                                            /* @__PURE__ */
                                            React.createElement("option", {
                                                value: "extended"
                                            }, "Extended radius")
                                        )
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: "#5A6472",
                                                marginRight: 14
                                            },
                                            title: "How far the crane must stand clear of the container side. Quay furniture, stacked boxes or soft ground push this out and capacity falls sharply."
                                        },
                                        `Standoff ${(+craneStandoff).toFixed(1)} m:`,
                                        /* @__PURE__ */
                                        React.createElement("input", {
                                            type: "range",
                                            min: "2",
                                            max: "24",
                                            step: "0.5",
                                            value: craneStandoff,
                                            onChange: (e) => setCraneStandoff(+e.target.value),
                                            style: {
                                                marginLeft: 5,
                                                verticalAlign: "middle",
                                                width: 110
                                            }
                                        })
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: "#5A6472",
                                                marginRight: 14
                                            }
                                        },
                                        "Forklift:",
                                        /* @__PURE__ */
                                        React.createElement(
                                            "select", {
                                                value: forkId,
                                                onChange: (e) => setForkId(e.target.value),
                                                style: {
                                                    marginLeft: 5,
                                                    fontSize: 12,
                                                    padding: "2px 4px"
                                                }
                                            },
                                            [
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "option", {
                                                        key: "auto",
                                                        value: "auto"
                                                    },
                                                    "Auto - smallest that clears"
                                                )
                                            ].concat(
                                                FORKLIFTS.map(
                                                    (f) => /* @__PURE__ */ React.createElement("option", {
                                                        key: f.id,
                                                        value: f.id
                                                    }, `${f.name} (min)`)
                                                )
                                            )
                                        )
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "label", {
                                            style: {
                                                fontSize: 12,
                                                color: "#5A6472"
                                            }
                                        },
                                        "Lashing method:",
                                        " ",
                                        /* @__PURE__ */
                                        React.createElement(
                                            "select", {
                                                value: lashMethod,
                                                onChange: (e) => setLashMethod(e.target.value),
                                                style: __spreadProps(__spreadValues({}, inp), {
                                                    width: 150,
                                                    display: "inline-block"
                                                })
                                            },
                                            /* @__PURE__ */
                                            React.createElement(
                                                "option", {
                                                    value: "auto"
                                                },
                                                "Auto (by weight)"
                                            ),
                                            /* @__PURE__ */
                                            React.createElement("option", {
                                                value: "web"
                                            }, "Web straps"),
                                            /* @__PURE__ */
                                            React.createElement("option", {
                                                value: "chain"
                                            }, "Chain lashing")
                                        )
                                    )
                                ),
                                (() => {
                                    const bom = securingBOM(eng, lashMethod),
                                        gearRows = Object.entries(bom.gear),
                                        dun = [];
                                    return bom.timberBeams && dun.push([`${bom.timberBeams}`, "Timber bracing beams (~1.2 m)"]), bom.beddingBeams && dun.push([`${bom.beddingBeams}`, "Bedding cross-timbers (100x100 mm)"]), bom.airbags && dun.push([`${bom.airbags}`, "Dunnage airbags"]), bom.antiSlip && dun.push([`${bom.antiSlip}`, "Anti-slip mats (rubber)"]), bom.edgeProtectors && dun.push([`${bom.edgeProtectors}`, "Edge protectors (for straps)"]), !gearRows.length && !dun.length ? null : /* @__PURE__ */ React.createElement(
                                        "div", {
                                            style: {
                                                margin: "10px 0",
                                                padding: "10px 12px",
                                                background: "#F4F1E8",
                                                borderRadius: 6,
                                                border: "1px solid #E4E0D5"
                                            }
                                        },
                                        /* @__PURE__ */
                                        React.createElement(
                                            "div", {
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    color: "#5A6472",
                                                    textTransform: "uppercase",
                                                    letterSpacing: 0.5,
                                                    marginBottom: 6
                                                }
                                            },
                                            "Equipment list (bill of materials)"
                                        ),
                                        /* @__PURE__ */
                                        React.createElement(
                                            "table", {
                                                style: {
                                                    width: "100%",
                                                    fontFamily: "'IBM Plex Mono', monospace",
                                                    fontSize: 12.5,
                                                    borderCollapse: "collapse"
                                                }
                                            },
                                            /* @__PURE__ */
                                            React.createElement(
                                                "tbody",
                                                null,
                                                gearRows.map(
                                                    ([name, g], i) => /* @__PURE__ */ React.createElement(
                                                        "tr", {
                                                            key: `g${i}`
                                                        },
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "td", {
                                                                style: {
                                                                    padding: "3px 8px",
                                                                    fontWeight: 700,
                                                                    width: 44,
                                                                    color: "#2C5B85"
                                                                }
                                                            },
                                                            g.qty,
                                                            "x"
                                                        ),
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "td", {
                                                                style: {
                                                                    padding: "3px 8px"
                                                                }
                                                            },
                                                            name,
                                                            " ",
                                                            /* @__PURE__ */
                                                            React.createElement(
                                                                "span", {
                                                                    style: {
                                                                        color: "#7A8494"
                                                                    }
                                                                },
                                                                "\xB7 LC ",
                                                                g.lc,
                                                                " daN"
                                                            )
                                                        )
                                                    )
                                                ),
                                                dun.map(
                                                    ([q, label], i) => /* @__PURE__ */ React.createElement(
                                                        "tr", {
                                                            key: `d${i}`
                                                        },
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "td", {
                                                                style: {
                                                                    padding: "3px 8px",
                                                                    fontWeight: 700,
                                                                    width: 44,
                                                                    color: "#8A5D12"
                                                                }
                                                            },
                                                            q,
                                                            "x"
                                                        ),
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "td", {
                                                                style: {
                                                                    padding: "3px 8px"
                                                                }
                                                            },
                                                            label
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        bom.positiveFit > 0 && /* @__PURE__ */ React.createElement(
                                            "div", {
                                                style: {
                                                    marginTop: 6,
                                                    fontSize: 12,
                                                    color: "#2E7D4F",
                                                    fontWeight: 600
                                                }
                                            },
                                            "\u2713 ",
                                            bom.positiveFit,
                                            " unit(s) need no lashing \u2014 secured by tight stow (positive fit)."
                                        )
                                    );
                                })(),
                                (() => {
                                    const env = eng ? craneEnvelopeSVG(eng, craneId, craneStandoff, SLING_TARGET_DEG) : null,
                                        fkFocus = forkCheck && forkCheck.relevant && forkCheck.rows.length ? (forkCheck.fails.length ? forkCheck.fails : forkCheck.rows).reduce(
                                            (a, b) => b.util > a.util ? b : a
                                        ) : null,
                                        fkMeth = fkFocus && loadMethod !== "auto" ? forkliftMethod(
                                            eng,
                                            fkFocus.p,
                                            fkFocus.truck,
                                            (f, l2) => Math.min(f.cap, f.cap * (FORK_AXLE_TO_FACE + f.lc) / (FORK_AXLE_TO_FACE + l2)),
                                            loadMethod
                                        ) : fkFocus,
                                        fkFeas = fkFocus ? methodFeasibility(eng, fkFocus.p, loadMethod, tandemMode) : null,
                                        fkSvg = fkMeth && fkMeth.method === "single" ? forkliftMomentSVG(fkMeth) : null,
                                        fkChoice = fkMeth && fkMeth.method === "tandem" ? chooseTandem(fkMeth.p, null, null, tandemMode) : null,
                                        fkPlanSvg = fkChoice ? fkChoice.kind === "L" ? tandemLSVG(fkChoice.plan, fkMeth.p) : tandemPlanSVG(fkChoice.plan, fkMeth.p) : null;
                                    return !env && !fkSvg && !fkPlanSvg && !fkFeas ? null : /* @__PURE__ */ React.createElement(
                                        "div", {
                                            style: {
                                                marginBottom: 14
                                            }
                                        },
                                        /* @__PURE__ */
                                        React.createElement(
                                            "div", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: 13.5,
                                                    marginBottom: 6,
                                                    color: "#1B2430"
                                                }
                                            },
                                            env ? "Lifting envelope" : "Forklift fulcrum & tipping moment"
                                        ),
                                        env && /* @__PURE__ */ React.createElement("div", {
                                            style: {
                                                border: "1px solid #DCD5C6",
                                                borderRadius: 8,
                                                overflow: "hidden",
                                                marginBottom: 10
                                            },
                                            dangerouslySetInnerHTML: {
                                                __html: env
                                            }
                                        }),
                                        env && (() => {
                                            const model = LTM_FLEET.find((m) => m.id === ltmModel);
                                            if (model && !model.verified)
                                                return /* @__PURE__ */ React.createElement(
                                                    "div", {
                                                        style: {
                                                            border: "2px solid #B3261E",
                                                            background: "#FDECEA",
                                                            borderRadius: 8,
                                                            padding: 12,
                                                            marginBottom: 12
                                                        }
                                                    },
                                                    /* @__PURE__ */
                                                    React.createElement(
                                                        "div", {
                                                            style: {
                                                                fontWeight: 700,
                                                                fontSize: 13.5,
                                                                marginBottom: 5,
                                                                color: "#B3261E"
                                                            }
                                                        },
                                                        `No verified load chart for ${model.name}`
                                                    ),
                                                    /* @__PURE__ */
                                                    React.createElement(
                                                        "div", {
                                                            style: {
                                                                fontSize: 12.5,
                                                                marginBottom: 6
                                                            }
                                                        },
                                                        `Configuration on file: ${model.axles} axles, max telescopic boom ${model.maxTBoom} m, max counterweight ${model.maxCw} t, ${model.control}. No capacity matrix has been loaded for this machine, so the app will not produce a lift verdict against its name.`
                                                    ),
                                                    /* @__PURE__ */
                                                    React.createElement(
                                                        "div", {
                                                            style: {
                                                                fontSize: 12.5
                                                            }
                                                        },
                                                        'Load the verified chart, or switch Model back to "Generic class" to plan against the representative class curve.'
                                                    )
                                                );
                                            const cc2 = craneCapacity(eng, craneId, craneStandoff, model || null);
                                            if (!cc2.relevant || !cc2.rows.length) return null;
                                            const derate = rigConfig({
                                                    windMs,
                                                    varioBasePct,
                                                    varioBallast
                                                }),
                                                hv = cc2.rows.reduce((a, b) => b.gross > a.gross ? b : a),
                                                lm = loadMatrix(cc2.crane, hv.radius, hv.gross, derate.factor),
                                                th2 = {
                                                    padding: "4px 6px",
                                                    fontSize: 11.5,
                                                    fontWeight: 700,
                                                    background: "#1B2430",
                                                    color: "#fff",
                                                    textAlign: "center"
                                                },
                                                td2 = {
                                                    padding: "3px 6px",
                                                    fontSize: 11.5,
                                                    textAlign: "center",
                                                    borderBottom: "1px solid #EAE6DB"
                                                };
                                            return /* @__PURE__ */ React.createElement(
                                                "div", {
                                                    style: {
                                                        marginBottom: 12
                                                    }
                                                },
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            fontWeight: 700,
                                                            fontSize: 12.5,
                                                            marginBottom: 3
                                                        }
                                                    },
                                                    "Load matrix - working radius x boom length (t)"
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: "#5A6472",
                                                            marginBottom: 4
                                                        }
                                                    },
                                                    `${lm.crane.name}  |  ${(BOOM_CONFIGS.find((b) => b.id === boomCfg) || {}).name}  |  slew: ${lm.crane.slew}  |  counterweight: ${lm.crane.cw} t`
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            fontSize: 11,
                                                            fontWeight: 700,
                                                            color: "#A15C00",
                                                            background: "#FFF6E5",
                                                            border: "1px solid #A15C00",
                                                            borderRadius: 5,
                                                            padding: "4px 7px",
                                                            marginBottom: 6
                                                        }
                                                    },
                                                    lm.verified ? `VERIFIED MANUFACTURER CHART - ${lm.crane.verifiedModel.chart.source} (${lm.crane.verifiedModel.chart.config}, ${lm.crane.verifiedModel.chart.standard}). Hook block weight must be deducted from the figures below.` : "REPRESENTATIVE CLASS DATA - NOT A MANUFACTURER LOAD CHART. Verify against the actual machine's chart before the lift."
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: derate.wind.stop ? "#B3261E" : "#5A6472",
                                                            marginBottom: 5,
                                                            fontWeight: derate.wind.stop ? 700 : 400
                                                        }
                                                    },
                                                    derate.wind.stop ? `WIND STOP - ${derate.wind.v.toFixed(1)} m/s is at or above the ${WIND_STOP_MS} m/s limit at which lifting normally ceases.` : `Applied derating: ${derate.parts.join("  |  ")}  =  x${derate.factor.toFixed(2)} on every cell below.`
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            overflowX: "auto"
                                                        }
                                                    },
                                                    /* @__PURE__ */
                                                    React.createElement(
                                                        "table", {
                                                            style: {
                                                                borderCollapse: "collapse",
                                                                width: "100%"
                                                            }
                                                        },
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "thead",
                                                            null,
                                                            /* @__PURE__ */
                                                            React.createElement(
                                                                "tr",
                                                                null,
                                                                /* @__PURE__ */
                                                                React.createElement("th", {
                                                                    style: th2
                                                                }, "Radius"),
                                                                ...lm.booms.map(
                                                                    (L) => /* @__PURE__ */ React.createElement("th", {
                                                                        key: L,
                                                                        style: th2
                                                                    }, `${L} m`)
                                                                )
                                                            )
                                                        ),
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "tbody",
                                                            null,
                                                            ...lm.rows.map(
                                                                (row) => /* @__PURE__ */ React.createElement(
                                                                    "tr", {
                                                                        key: row.r
                                                                    },
                                                                    /* @__PURE__ */
                                                                    React.createElement(
                                                                        "td", {
                                                                            style: __spreadProps(__spreadValues({}, td2), {
                                                                                fontWeight: 700
                                                                            })
                                                                        },
                                                                        `${row.r} m`
                                                                    ),
                                                                    ...row.cells.map((cell) => {
                                                                        const active2 = row.r === lm.activeRow && cell.L === lm.activeBoom;
                                                                        return /* @__PURE__ */ React.createElement(
                                                                            "td", {
                                                                                key: cell.L,
                                                                                style: __spreadProps(__spreadValues({}, td2), {
                                                                                    background: active2 ? cell.ok ? "#E2F0E7" : "#FDECEA" : "transparent",
                                                                                    border: active2 ? `2px solid ${cell.ok ? "#2E7D4F" : "#B3261E"}` : void 0,
                                                                                    fontWeight: active2 ? 700 : 400,
                                                                                    color: cell.cap == null ? "#B4B4B4" : active2 ? cell.ok ? "#2E7D4F" : "#B3261E" : "#3A3A3A"
                                                                                })
                                                                            },
                                                                            cell.cap == null ? "-" : (cell.cap / 1e3).toFixed(1)
                                                                        );
                                                                    })
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            marginTop: 8,
                                                            border: "1px solid #C9C2B4",
                                                            borderRadius: 6,
                                                            padding: "7px 10px",
                                                            background: "#F8F6F0",
                                                            fontSize: 11.5,
                                                            maxWidth: 420
                                                        }
                                                    },
                                                    /* @__PURE__ */
                                                    React.createElement(
                                                        "div", {
                                                            style: {
                                                                fontWeight: 700,
                                                                marginBottom: 4
                                                            }
                                                        },
                                                        "Net safe working load"
                                                    ),
                                                    ...[
                                                        [`Chart capacity at ${lm.activeRow} m / ${lm.activeBoom} m boom`, lm.activeCap == null ? "-" : `${(lm.activeCap / 1e3).toFixed(1)} t`],
                                                        [`Working limit (${Math.round(CRANE_UTIL_LIMIT * 100)}%)`, lm.activeCap == null ? "-" : `${(lm.activeCap * CRANE_UTIL_LIMIT / 1e3).toFixed(1)} t`],
                                                        ["less rigging (hook block, slings, shackles)", `- ${(RIGGING_ALLOWANCE_KG / 1e3).toFixed(1)} t`]
                                                    ].map(
                                                        ([a, b], i) => /* @__PURE__ */ React.createElement(
                                                            "div", {
                                                                key: i,
                                                                style: {
                                                                    display: "flex",
                                                                    justifyContent: "space-between"
                                                                }
                                                            },
                                                            /* @__PURE__ */
                                                            React.createElement("span", null, a),
                                                            /* @__PURE__ */
                                                            React.createElement("span", null, b)
                                                        )
                                                    ),
                                                    /* @__PURE__ */
                                                    React.createElement(
                                                        "div", {
                                                            style: {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                fontWeight: 700,
                                                                borderTop: "1px solid #C9C2B4",
                                                                marginTop: 4,
                                                                paddingTop: 4
                                                            }
                                                        },
                                                        /* @__PURE__ */
                                                        React.createElement("span", null, "= Net safe working load"),
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "span",
                                                            null,
                                                            lm.net == null ? "-" : `${(lm.net / 1e3).toFixed(1)} t`
                                                        )
                                                    ),
                                                    /* @__PURE__ */
                                                    React.createElement(
                                                        "div", {
                                                            style: {
                                                                marginTop: 5,
                                                                fontWeight: 700,
                                                                color: lm.net != null && lm.grossKg / 1e3 <= lm.net / 1e3 ? "#2E7D4F" : "#B3261E"
                                                            }
                                                        },
                                                        `Heaviest lift ${(lm.grossKg / 1e3).toFixed(1)} t - ${lm.net != null && lm.grossKg <= lm.net ? "within net SWL" : "EXCEEDS net SWL"}`
                                                    )
                                                )
                                            );
                                        })(),
                                        (() => {
                                            if (!eng.placed.length) return null;
                                            const map = stowMapSVG(eng);
                                            return map ? /* @__PURE__ */ React.createElement(
                                                "div", {
                                                    style: {
                                                        marginTop: 16
                                                    }
                                                },
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            fontWeight: 700,
                                                            fontSize: 13.5,
                                                            marginBottom: 4
                                                        }
                                                    },
                                                    "Stow map - cargo numbers by position"
                                                ),
                                                /* @__PURE__ */
                                                React.createElement("div", {
                                                    style: {
                                                        border: "1px solid #DCD5C6",
                                                        borderRadius: 8,
                                                        overflow: "hidden",
                                                        maxWidth: 560,
                                                        background: "#fff"
                                                    },
                                                    dangerouslySetInnerHTML: {
                                                        __html: map
                                                    }
                                                })
                                            ) : null;
                                        })(),
                                        (() => {
                                            const ss = stackingSummary(eng);
                                            if (!ss.stacked.length) return null;
                                            const th2 = {
                                                    padding: "4px 7px",
                                                    fontSize: 11.5,
                                                    fontWeight: 700,
                                                    background: "#1B2430",
                                                    color: "#fff",
                                                    textAlign: "left",
                                                    whiteSpace: "nowrap"
                                                },
                                                td2 = {
                                                    padding: "3px 7px",
                                                    fontSize: 11.5,
                                                    borderBottom: "1px solid #EAE6DB",
                                                    whiteSpace: "nowrap"
                                                },
                                                maxT = Math.max(...ss.columns.map((c) => c.tiers.length));
                                            return /* @__PURE__ */ React.createElement(
                                                "div", {
                                                    style: {
                                                        marginTop: 16
                                                    }
                                                },
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            fontWeight: 700,
                                                            fontSize: 13.5,
                                                            marginBottom: 3
                                                        }
                                                    },
                                                    "Stacking summary - build these columns before loading"
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            fontSize: 11.5,
                                                            color: "#5A6472",
                                                            marginBottom: 7,
                                                            lineHeight: 1.45
                                                        }
                                                    },
                                                    ss.note
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            overflowX: "auto"
                                                        }
                                                    },
                                                    /* @__PURE__ */
                                                    React.createElement(
                                                        "table", {
                                                            style: {
                                                                borderCollapse: "collapse",
                                                                width: "100%"
                                                            }
                                                        },
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "thead",
                                                            null,
                                                            /* @__PURE__ */
                                                            React.createElement(
                                                                "tr",
                                                                null,
                                                                ...["Load", "Col", "Zone", "Side"].map(
                                                                    (h) => /* @__PURE__ */ React.createElement("th", {
                                                                        key: h,
                                                                        style: th2
                                                                    }, h)
                                                                ),
                                                                ...Array.from({
                                                                        length: maxT
                                                                    },
                                                                    (_, k2) => /* @__PURE__ */ React.createElement(
                                                                        "th", {
                                                                            key: "t" + k2,
                                                                            style: th2
                                                                        },
                                                                        k2 === 0 ? "Tier 1 (bottom)" : `Tier ${k2 + 1}`
                                                                    )
                                                                ),
                                                                ...["Height", "Weight"].map(
                                                                    (h) => /* @__PURE__ */ React.createElement("th", {
                                                                        key: h,
                                                                        style: th2
                                                                    }, h)
                                                                )
                                                            )
                                                        ),
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "tbody",
                                                            null,
                                                            ...ss.columns.map(
                                                                (c) => /* @__PURE__ */ React.createElement(
                                                                    "tr", {
                                                                        key: c.id + c.seq
                                                                    },
                                                                    /* @__PURE__ */
                                                                    React.createElement("td", {
                                                                        style: __spreadProps(__spreadValues({}, td2), {
                                                                            fontWeight: 700
                                                                        })
                                                                    }, c.seq),
                                                                    /* @__PURE__ */
                                                                    React.createElement("td", {
                                                                        style: __spreadProps(__spreadValues({}, td2), {
                                                                            fontWeight: 700
                                                                        })
                                                                    }, c.id),
                                                                    /* @__PURE__ */
                                                                    React.createElement("td", {
                                                                        style: td2
                                                                    }, c.zone),
                                                                    /* @__PURE__ */
                                                                    React.createElement("td", {
                                                                        style: td2
                                                                    }, c.side),
                                                                    ...Array.from({
                                                                            length: maxT
                                                                        },
                                                                        (_, k2) => /* @__PURE__ */ React.createElement(
                                                                            "td", {
                                                                                key: "c" + k2,
                                                                                style: __spreadProps(__spreadValues({}, td2), {
                                                                                    whiteSpace: "normal",
                                                                                    wordBreak: "break-word",
                                                                                    minWidth: 150,
                                                                                    maxWidth: 240,
                                                                                    verticalAlign: "top"
                                                                                })
                                                                            },
                                                                            c.tiers[k2] ? `${c.tiers[k2].label} - ${c.tiers[k2].kg.toLocaleString()} kg` : "-"
                                                                        )
                                                                    ),
                                                                    /* @__PURE__ */
                                                                    React.createElement("td", {
                                                                        style: td2
                                                                    }, `${c.height} mm`),
                                                                    /* @__PURE__ */
                                                                    React.createElement("td", {
                                                                        style: __spreadProps(__spreadValues({}, td2), {
                                                                            fontWeight: 700
                                                                        })
                                                                    }, `${c.kg.toLocaleString()} kg`)
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            );
                                        })(),
                                        (() => {
                                            const lp = forkCheck && forkCheck.relevant ? loadingProcedure(eng, forkCheck) : null;
                                            return lp ? /* @__PURE__ */ React.createElement(
                                                "div", {
                                                    style: {
                                                        border: "1px solid #C9C2B4",
                                                        borderRadius: 8,
                                                        padding: "10px 12px",
                                                        background: "#F8F6F0",
                                                        marginBottom: 12
                                                    }
                                                },
                                                /* @__PURE__ */
                                                React.createElement("div", {
                                                    style: {
                                                        fontWeight: 700,
                                                        fontSize: 13,
                                                        marginBottom: 2
                                                    }
                                                }, "Loading method statement - how this cargo goes into the container"),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            fontSize: 11.5,
                                                            color: "#5A6472",
                                                            marginBottom: 7
                                                        }
                                                    },
                                                    lp.method === "roller" ? "Rollers and winch - the two-truck lift marshals it outside; it cannot be driven in." : lp.method === "crane" ? "Crane onto open equipment." : lp.method === "rotate" ? "Single truck, but the unit must be turned before entry." : "Single truck, rear entry through the door."
                                                ),
                                                ...lp.steps.map(
                                                    ([h, b], i) => /* @__PURE__ */ React.createElement(
                                                        "div", {
                                                            key: i,
                                                            style: {
                                                                display: "flex",
                                                                gap: 8,
                                                                marginBottom: 6
                                                            }
                                                        },
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "div", {
                                                                style: {
                                                                    minWidth: 20,
                                                                    height: 20,
                                                                    borderRadius: 10,
                                                                    background: "#1B2430",
                                                                    color: "#fff",
                                                                    fontSize: 11,
                                                                    fontWeight: 700,
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center"
                                                                }
                                                            },
                                                            i + 1
                                                        ),
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "div",
                                                            null,
                                                            /* @__PURE__ */
                                                            React.createElement("div", {
                                                                style: {
                                                                    fontWeight: 700,
                                                                    fontSize: 12
                                                                }
                                                            }, h),
                                                            /* @__PURE__ */
                                                            React.createElement("div", {
                                                                style: {
                                                                    fontSize: 11.5,
                                                                    lineHeight: 1.45
                                                                }
                                                            }, b)
                                                        )
                                                    )
                                                )
                                            ) : null;
                                        })(),
                                        fkSvg && /* @__PURE__ */ React.createElement(
                                            "div",
                                            null,
                                            env && /* @__PURE__ */ React.createElement(
                                                "div", {
                                                    style: {
                                                        fontWeight: 700,
                                                        fontSize: 13.5,
                                                        margin: "10px 0 6px",
                                                        color: "#1B2430"
                                                    }
                                                },
                                                "Forklift fulcrum & tipping moment"
                                            ),
                                            /* @__PURE__ */
                                            React.createElement("div", {
                                                style: {
                                                    border: "1px solid #DCD5C6",
                                                    borderRadius: 8,
                                                    overflow: "hidden"
                                                },
                                                dangerouslySetInnerHTML: {
                                                    __html: fkSvg
                                                }
                                            })
                                        ),
                                        fkPlanSvg && /* @__PURE__ */ React.createElement(
                                            "div",
                                            null,
                                            /* @__PURE__ */
                                            React.createElement(
                                                "div", {
                                                    style: {
                                                        fontWeight: 700,
                                                        fontSize: 13.5,
                                                        margin: "10px 0 6px",
                                                        color: "#1B2430"
                                                    }
                                                },
                                                "Forklift positioning - tandem lift"
                                            ),
                                            /* @__PURE__ */
                                            React.createElement("div", {
                                                style: {
                                                    border: "1px solid #DCD5C6",
                                                    borderRadius: 8,
                                                    overflow: "hidden"
                                                },
                                                dangerouslySetInnerHTML: {
                                                    __html: fkPlanSvg
                                                }
                                            }),
                                            fkFeas && /* @__PURE__ */ React.createElement(
                                                "div", {
                                                    style: {
                                                        border: `2px solid ${fkFeas.selectedState ? fkFeas.selectedState.ok ? "#2E7D4F" : "#B3362B" : "#9FB6C6"}`,
                                                        background: fkFeas.selectedState ? fkFeas.selectedState.ok ? "#EAF4EE" : "#FDECEA" : "#EAF1F6",
                                                        borderRadius: 8,
                                                        padding: "9px 12px",
                                                        marginTop: 10
                                                    }
                                                },
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "div", {
                                                        style: {
                                                            fontWeight: 700,
                                                            fontSize: 12.5,
                                                            marginBottom: 4
                                                        }
                                                    },
                                                    fkFeas.selected ? `${(LOAD_METHODS.find((m) => m.id === fkFeas.selected) || {}).name} - ${fkFeas.selectedState.ok ? "feasible" : "NOT FEASIBLE for this unit"}` : "Loading method - all options for this unit"
                                                ),
                                                fkFeas.selected && /* @__PURE__ */ React.createElement(
                                                    "div", {
                                                        style: {
                                                            fontSize: 11.5,
                                                            lineHeight: 1.45,
                                                            marginBottom: 6
                                                        }
                                                    },
                                                    fkFeas.selectedState.why
                                                ),
                                                ...LOAD_METHODS.filter((m) => m.id !== "auto").map(
                                                    (m) => /* @__PURE__ */ React.createElement(
                                                        "div", {
                                                            key: m.id,
                                                            style: {
                                                                display: "flex",
                                                                gap: 8,
                                                                fontSize: 11.5,
                                                                lineHeight: 1.4,
                                                                padding: "2px 0",
                                                                opacity: fkFeas.selected && fkFeas.selected !== m.id ? 0.62 : 1
                                                            }
                                                        },
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "span", {
                                                                style: {
                                                                    minWidth: 15,
                                                                    fontWeight: 700,
                                                                    color: fkFeas.options[m.id].ok ? "#2E7D4F" : "#B3362B"
                                                                }
                                                            },
                                                            fkFeas.options[m.id].ok ? "\u2713" : "\u2715"
                                                        ),
                                                        /* @__PURE__ */
                                                        React.createElement(
                                                            "span",
                                                            null,
                                                            /* @__PURE__ */
                                                            React.createElement("b", null, m.name + ": "),
                                                            fkFeas.options[m.id].why
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        fkChoice && /* @__PURE__ */ React.createElement(
                                            "div", {
                                                style: {
                                                    fontSize: 11.5,
                                                    lineHeight: 1.45,
                                                    background: "#EAF1F6",
                                                    border: "1px solid #9FB6C6",
                                                    borderRadius: 6,
                                                    padding: "7px 10px",
                                                    marginTop: 8
                                                }
                                            },
                                            /* @__PURE__ */
                                            React.createElement("span", {
                                                style: {
                                                    fontWeight: 700
                                                }
                                            }, "Why this arrangement: "),
                                            fkChoice.reason
                                        )
                                    );
                                })(),
                                cgFix && cgFix.need ? /* @__PURE__ */ React.createElement(
                                    "div", {
                                        style: {
                                            border: "2px solid #B3362B",
                                            background: "#FDECEA",
                                            borderRadius: 8,
                                            padding: 12,
                                            marginBottom: 12
                                        }
                                    },
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div", {
                                            style: {
                                                fontWeight: 700,
                                                fontSize: 13.5,
                                                marginBottom: 6,
                                                color: "#B3362B"
                                            }
                                        },
                                        "Centre of gravity outside tolerance"
                                    ),
                                    /* @__PURE__ */
                                    React.createElement(
                                        "div", {
                                            style: {
                                                fontSize: 12.5
                                            }
                                        },
                                        cgFix.text
                                    )
                                ) : null,
                                (() => {
                                    const bad = balAlert ? balAlert.warns.length : 0,
                                        imBad = imdgAlert && !imdgAlert.ok,
                                        btn2 = {
                                            border: "none",
                                            borderRadius: 6,
                                            padding: "7px 12px",
                                            fontSize: 12.5,
                                            fontWeight: 700,
                                            cursor: "pointer",
                                            color: "#fff"
                                        };
                                    return !bad && !imBad ? null : /* @__PURE__ */ React.createElement(
                                        "div", {
                                            style: {
                                                border: "2px solid " + (imBad ? "#B3261E" : "#A15C00"),
                                                background: imBad ? "#FDECEA" : "#FFF6E5",
                                                borderRadius: 8,
                                                padding: 12,
                                                marginBottom: 12
                                            }
                                        },
                                        /* @__PURE__ */
                                        React.createElement(
                                            "div", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: 13.5,
                                                    marginBottom: 6,
                                                    color: imBad ? "#B3261E" : "#A15C00"
                                                }
                                            },
                                            imBad ? (imdgAlert.hardStop ? "IMDG HARD STOP - " : "IMDG conflict - ") + imdgAlert.violations.length + " segregation issue(s)" : "Securing action required - " + bad + " unit(s) below safety factor"
                                        ),
                                        imBad && /* @__PURE__ */ React.createElement(
                                            "div", {
                                                style: {
                                                    fontSize: 12.5,
                                                    marginBottom: 8
                                                }
                                            },
                                            imdgAlert.notes.join(" ")
                                        ),
                                        bad > 0 && /* @__PURE__ */ React.createElement(
                                            "div", {
                                                style: {
                                                    fontSize: 12.5,
                                                    marginBottom: 8
                                                }
                                            },
                                            "Add lashings or increase lashing capacity.",
                                            lashBoost > 0 ? ` (currently +${lashBoost} lashing pair(s) added)` : ""
                                        ),
                                        bad > 0 && /* @__PURE__ */ React.createElement(
                                            "div", {
                                                style: {
                                                    display: "flex",
                                                    gap: 8,
                                                    flexWrap: "wrap"
                                                }
                                            },
                                            /* @__PURE__ */
                                            React.createElement(
                                                "button", {
                                                    onClick: () => setLashBoost((b) => b + 1),
                                                    style: __spreadProps(__spreadValues({}, btn2), {
                                                        background: "#E8600A"
                                                    })
                                                },
                                                "+ Add lashings"
                                            ),
                                            /* @__PURE__ */
                                            React.createElement(
                                                "button", {
                                                    onClick: () => setLashMethod("chain"),
                                                    style: __spreadProps(__spreadValues({}, btn2), {
                                                        background: "#1B2430"
                                                    })
                                                },
                                                "Increase lashing capacity (chain)"
                                            ),
                                            lashBoost > 0 && /* @__PURE__ */ React.createElement(
                                                "button", {
                                                    onClick: () => setLashBoost(0),
                                                    style: __spreadProps(__spreadValues({}, btn2), {
                                                        background: "#7A8494"
                                                    })
                                                },
                                                "Reset"
                                            )
                                        )
                                    );
                                })(),
                                securing.length ? securing.map(
                                    (n, i) => /* @__PURE__ */ React.createElement(
                                        "div", {
                                            key: i,
                                            style: {
                                                fontSize: 12.5,
                                                padding: "5px 0",
                                                borderBottom: i < securing.length - 1 ? "1px solid #EAE6DB" : "none",
                                                color: /^(STACK LOAD|FLOOR LOAD) - /.test(n) ? "#B3261E" : /^SECURING BALANCE - /.test(n) ? "#A15C00" : void 0,
                                                fontWeight: /^(STACK LOAD|FLOOR LOAD|SECURING BALANCE) - /.test(n) ? 600 : void 0
                                            }
                                        },
                                        n
                                    )
                                ) : /* @__PURE__ */ React.createElement(
                                    "div", {
                                        style: {
                                            fontSize: 12.5,
                                            color: "#7A8494"
                                        }
                                    },
                                    "No dedicated securing required \u2014 tight stow."
                                )
                            )
                        )
                    ),
                    /* @__PURE__ */
                    React.createElement(
                        "section", {
                            style: __spreadProps(__spreadValues({}, card), {
                                marginTop: 16
                            })
                        },
                        /* @__PURE__ */
                        React.createElement(
                            "h3", {
                                style: h3s
                            },
                            "Loading sequence \u2014 ",
                            eng.spec.code,
                            " #",
                            eng.index,
                            " ",
                            /* @__PURE__ */
                            React.createElement(
                                "span", {
                                    style: {
                                        fontSize: 12,
                                        color: "#7A8494",
                                        fontWeight: 400,
                                        textTransform: "none"
                                    }
                                },
                                "(nose \u2192 door, bottom layer first \u2014 step numbers match the top view)"
                            )
                        ),
                        /* @__PURE__ */
                        React.createElement(
                            "div", {
                                style: {
                                    overflowX: "auto"
                                }
                            },
                            /* @__PURE__ */
                            React.createElement(
                                "table", {
                                    style: {
                                        borderCollapse: "collapse",
                                        width: "100%",
                                        minWidth: 760,
                                        fontFamily: "'IBM Plex Mono', monospace",
                                        fontSize: 12.5
                                    }
                                },
                                /* @__PURE__ */
                                React.createElement(
                                    "thead",
                                    null,
                                    /* @__PURE__ */
                                    React.createElement(
                                        "tr", {
                                            style: {
                                                borderBottom: "2px solid #1B2430"
                                            }
                                        },
                                        /* @__PURE__ */
                                        React.createElement("th", {
                                            style: th
                                        }, "Step"),
                                        /* @__PURE__ */
                                        React.createElement("th", {
                                            style: th
                                        }, "Item"),
                                        /* @__PURE__ */
                                        React.createElement("th", {
                                            style: th
                                        }, "Zone"),
                                        /* @__PURE__ */
                                        React.createElement("th", {
                                            style: th
                                        }, "Layer"),
                                        /* @__PURE__ */
                                        React.createElement("th", {
                                            style: th
                                        }, "Position x\xB7y\xB7z (m)"),
                                        /* @__PURE__ */
                                        React.createElement("th", {
                                            style: th
                                        }, "Oriented L\xD7W\xD7H (mm)"),
                                        /* @__PURE__ */
                                        React.createElement("th", {
                                            style: th
                                        }, "kg"),
                                        /* @__PURE__ */
                                        React.createElement("th", {
                                            style: th
                                        }, "Running kg"),
                                        /* @__PURE__ */
                                        React.createElement("th", {
                                            style: th
                                        }, "Drop")
                                    )
                                ),
                                /* @__PURE__ */
                                React.createElement(
                                    "tbody",
                                    null,
                                    (() => {
                                        let run2 = 0;
                                        return loadSteps.map(
                                            (p, i) => (run2 += p.item.kg, /* @__PURE__ */ React.createElement(
                                                "tr", {
                                                    key: i,
                                                    style: {
                                                        borderBottom: "1px solid #EAE6DB",
                                                        background: highlight === p.item.id ? "#FBF3E2" : "transparent"
                                                    }
                                                },
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "td", {
                                                        style: __spreadProps(__spreadValues({}, td), {
                                                            fontWeight: 700
                                                        })
                                                    },
                                                    i + 1
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "td", {
                                                        style: td
                                                    },
                                                    p.item.name,
                                                    " #",
                                                    p.n,
                                                    p.item.haz ? ` \xB7 IMDG ${p.item.haz}` : ""
                                                ),
                                                /* @__PURE__ */
                                                React.createElement("td", {
                                                    style: td
                                                }, zoneOf(p, eng.spec)),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "td", {
                                                        style: td
                                                    },
                                                    p.z <= EPS ? "Floor" : "Stacked"
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "td", {
                                                        style: td
                                                    },
                                                    (p.x / 1e3).toFixed(2),
                                                    " \xB7 ",
                                                    (p.y / 1e3).toFixed(2),
                                                    " \xB7 ",
                                                    (p.z / 1e3).toFixed(2)
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "td", {
                                                        style: td
                                                    },
                                                    p.l,
                                                    " \xD7 ",
                                                    p.w,
                                                    " \xD7 ",
                                                    p.h
                                                ),
                                                /* @__PURE__ */
                                                React.createElement(
                                                    "td", {
                                                        style: td
                                                    },
                                                    p.item.kg.toLocaleString()
                                                ),
                                                /* @__PURE__ */
                                                React.createElement("td", {
                                                    style: td
                                                }, run2.toLocaleString()),
                                                /* @__PURE__ */
                                                React.createElement("td", {
                                                    style: td
                                                }, p.item.drop)
                                            ))
                                        );
                                    })()
                                )
                            )
                        )
                    )
                )
            ),
            !result && /* @__PURE__ */ React.createElement(
                "div", {
                    style: {
                        textAlign: "center",
                        padding: "40px 20px",
                        color: "#7A8494",
                        fontSize: 14
                    }
                },
                "Edit the manifest above or import the Excel template, then press ",
                /* @__PURE__ */
                React.createElement("strong", null, "Optimize load"),
                " to select containers and generate the stow plan."
            )
        ),
        /* @__PURE__ */
        React.createElement(
            "footer", {
                style: {
                    borderTop: "1px solid #D8D3C6",
                    padding: "18px 24px 30px",
                    textAlign: "center"
                }
            },
            /* @__PURE__ */
            React.createElement(
                "div", {
                    style: {
                        fontSize: 12.5,
                        color: "#5A6472",
                        fontFamily: "'IBM Plex Mono', monospace"
                    }
                },
                "Developed by Suthiwas Kongsorn \xB7 Version ",
                APP_VERSION
            ),
            /* @__PURE__ */
            React.createElement(
                "div", {
                    style: {
                        fontSize: 11.5,
                        color: "#8A5D12",
                        background: "#FBF3E2",
                        display: "inline-block",
                        borderRadius: 4,
                        padding: "6px 12px",
                        marginTop: 8
                    }
                },
                "Early access \u2014 results are decision support only. Verify container selection, weight, CG, and lashing against carrier and CTU Code requirements before shipping."
            )
        )
    );
}
const {
    useState,
    useEffect,
    useRef,
    useMemo
} = React;
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));