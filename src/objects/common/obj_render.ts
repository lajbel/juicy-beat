import type * as Kaboom from "kaboom";
import { k } from "../../main";
import { ObjOpt, createObj } from "./obj_base";
import { use } from "../../util/use";

export interface RenderOpt<T = any> extends ObjOpt<T> {
    color?: string;
    opacity?: number;
    scale?: Kaboom.Vec2;
}

export function createRender<T>(userOpt?: ObjOpt<T>) {
    const opt = Object.assign({
        color: "#ffffff",
        opacity: 1,
        scale: k.vec2(1),
    }, userOpt);

    const obj = createObj(opt);
    console.log(opt.color);
    const newObj = use(obj, [
        k.color(k.Color.fromHex(opt.color)),
        k.opacity(opt.opacity),
        k.scale(opt.scale),
    ]);

    return newObj;
}