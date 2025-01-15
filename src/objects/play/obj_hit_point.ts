import type { GameObj, Vec2 } from "kaplay";
import { k } from "../../engine.js";
import { createObj, createOptions, ObjOpt } from "../common/obj_base.js";

const HIT_POINT_SIZE = 60;

export function createHitPoint<T>(userOpt?: ObjOpt) {
    const opt = createOptions({
        pos: k.vec2(0),
    });

    const hitPoint = createObj({
        pos: opt.pos,
    });
}

const STARS_GOTO = [
    k.vec2(-100, 0),
    k.vec2(0, -100),
    k.vec2(100, 0),
];

export const hitPointObj = (pos: Vec2) => {
    const noteHitPoint = k.make([
        k.pos(pos),
        k.z(50),
        k.anchor("center"),
        k.circle(20),
        k.color(k.BLACK),
        k.opacity(0.1),
        k.area({
            shape: new k.Rect(k.vec2(0), HIT_POINT_SIZE, HIT_POINT_SIZE),
        }),
        {
            greatHit(this: GameObj) {
                for (let i = 0; i < 3; i++) {
                    const hitParticle = this.add([
                        k.pos(0),
                        k.anchor("center"),
                        k.scale(0.5),
                        k.sprite("star"),
                        k.opacity(1),
                        k.lifespan(0.1, { fade: 0.1 }),
                    ]);

                    k.tween(k.Vec2.ZERO, STARS_GOTO[i], 0.2, (v) => {
                        hitParticle.pos = v;
                    });
                }
            },
        },
    ]);

    return noteHitPoint;
};
