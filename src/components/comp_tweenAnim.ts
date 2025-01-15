import type { LerpValue } from "kaplay";
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
    return {
        id: "tweenAnim",
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
                        this[animKey] = v;
                    },
                    k.easings.easeInOutCubic,
                );
            }
        },
    };
}
