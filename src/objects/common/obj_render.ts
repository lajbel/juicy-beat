import type * as kaplay from "kaplay";
import { k } from "../../engine";
import { use } from "../../util/use";
import { createObj, createOptions, ObjOpt } from "./obj_base";

export type RenderOpt<T> = {
    color?: string;
    opacity?: number;
    scale?: kaplay.Vec2;
};

export function applyRenderComponents<T>(
    obj: kaplay.GameObj<T>,
    opt: Required<RenderOpt<T>>,
) {
    const newObj = use(obj, [
        k.color(k.Color.fromHex(opt.color)),
        k.opacity(opt.opacity),
        k.scale(opt.scale),
    ]);

    return newObj;
}

export function createRender<T>(userOpt?: RenderOpt<T> & ObjOpt<T>) {
    const opt = createOptions({
        color: "#ffffff",
        opacity: 1,
        scale: k.vec2(1),
    }, userOpt);

    return applyRenderComponents(createObj(opt), opt);
}
