import type * as kaplay from "kaplay";
import { k } from "../../engine.js";
import { use } from "../../util/use.js";
import { createObj, createOptions, ObjOpt } from "./obj_base.js";

export type AreaOpt<T> = {
    size?: kaplay.Vec2;
};

export function applyAreaComponents<T>(
    obj: kaplay.GameObj<T>,
    opt: Required<AreaOpt<T>>,
) {
    const newObj = use(obj, [
        k.area({
            shape: new k.Rect(k.vec2(0), opt.size.x, opt.size.y),
        }),
    ]);

    return newObj;
}

export function createArea<T>(userOpt?: AreaOpt<T> & ObjOpt<T>) {
    const opt = createOptions({
        size: k.vec2(0),
    }, userOpt);

    return applyAreaComponents(createObj(opt), opt);
}
