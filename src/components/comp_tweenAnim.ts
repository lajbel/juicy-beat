import type { LerpValue, Vec2 } from "kaplay";
import { k } from "../engine";

type AnimValues = {
    pos?: { x: number; y: number };
    angle?: number;
};

type Animation = {
    [key: string]: {
        "start": AnimValues;
        "end": AnimValues;
    };
};

export function tweenAnim(anim: Animation, time: number = 0.1) {
    let originalPos: Vec2;

    return {
        id: "tweenAnim",
        add() {
            originalPos = this.pos;
        },
        playTAnim(animName: string) {
            const animEntry = anim[animName];
            const animKeys = Object.keys(
                animEntry.start,
            ) as (keyof AnimValues)[];

            for (const animKey of animKeys) {
                k.tween(
                    animEntry.start[animKey] as LerpValue,
                    animEntry.end[animKey] as LerpValue,
                    time,
                    (v) => {
                        if (animKey === "pos") {
                            this["pos"] = originalPos.add(v as Vec2);
                        } else {
                            this[animKey] = v;
                        }
                    },
                    k.easings.easeInOutCubic,
                );
            }
        },
    };
}
