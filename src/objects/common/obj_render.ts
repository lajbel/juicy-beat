import type * as Kaboom from "kaboom";
import { k } from "../../main";
import { ObjOpt, createObj } from "./obj_base";
import { use } from "../../util/use";

export interface RenderOpt extends ObjOpt {
    color?: string;
    opacity?: number;
    scale?: Kaboom.Vec2;
}

export function createRender(opt?: ObjOpt) {
    const config = Object.assign({
        color: "#ffffff",
        opacity: 1,
        scale: k.vec2(1),
    }, opt);

    const obj = createObj(config);
    const newObj = use(obj, [
        k.color(k.Color.fromHex(config.color)),
        k.opacity(config.opacity),
        k.scale(config.scale),
    ]);

    return obj as typeof newObj;
}