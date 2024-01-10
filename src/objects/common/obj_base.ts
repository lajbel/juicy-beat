import type * as Kaboom from "kaboom";
import { k } from "../../main";

export interface ObjOpt {
    pos?: Kaboom.Vec2;
    anchor?: Kaboom.Anchor;
}

export function createObj(opt?: ObjOpt) {
    const config = Object.assign({
        pos: k.vec2(0, 0),
        anchor: "center",
    }, opt);

    const obj = k.make([
        k.pos(config.pos),
        k.anchor(config.anchor),
    ]);

    return obj;
}