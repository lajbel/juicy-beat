import { k } from "../engine";

export const swordAnimation = () => {
    return {
        "0first": {
            "start": {
                pos: k.vec2(-50, 0),
                angle: -20,
            },
            "end": {
                pos: k.vec2(-30, 20),
                angle: -94,
            },
        },
        "0second": {
            "start": {
                pos: k.vec2(-70, 0),
                angle: 0,
            },
            "end": {
                pos: k.vec2(5, 20),
                angle: -120,
            },
        },
        "1first": {
            "start": {
                pos: k.vec2(-10, 0),
                angle: -43,
            },
            "end": {
                pos: k.vec2(10, -60),
                angle: 43,
            },
        },
        "1second": {
            "start": {
                pos: k.vec2(-10, 0),
                angle: 43,
            },
            "end": {
                pos: k.vec2(10, -60),
                angle: -43,
            },
        },
        "2first": {
            "start": {
                pos: k.vec2(50, 0),
                angle: 20,
            },
            "end": {
                pos: k.vec2(30, 20),
                angle: 94,
            },
        },
        "2second": {
            "start": {
                pos: k.vec2(70, 0),
                angle: 0,
            },
            "end": {
                pos: k.vec2(-5, 20),
                angle: 120,
            },
        },
    };
};
