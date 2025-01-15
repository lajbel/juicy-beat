import type * as kaplay from "kaplay";
import { k } from "../../engine.js";
import { use } from "../../util/use.js";
import { createOptions, ObjOpt } from "./obj_base.js";
import { createRender, RenderOpt } from "./obj_render.js";

export type BackgroundObjOpt<T> = {
    size?: kaplay.Vec2;
};

export function applyBackgroundComponents<T>(
    obj: kaplay.GameObj<T>,
    opt: Required<BackgroundObjOpt<T>>,
) {
    const newObj = use(obj, [
        k.rect(opt.size.x, opt.size.y),
    ]);
    return newObj;
}

export function createBackground<T>(
    userOpt?: BackgroundObjOpt<T> & RenderOpt<T> & ObjOpt<T>,
) {
    const opt = createOptions({
        pos: k.center(),
        size: k.vec2(k.width(), k.height()),
    }, userOpt);

    return applyBackgroundComponents(createRender(opt), opt);
}
