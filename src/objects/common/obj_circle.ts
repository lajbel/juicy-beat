import type * as kaplay from "kaplay";
import { k } from "../../engine";
import { use } from "../../util/use";
import { createOptions, ObjOpt } from "./obj_base";
import { createRender, RenderOpt } from "./obj_render";

export type CircleObjOpt<T> = {
    radius?: number;
};

export function applyCircleComponents<T>(
    obj: kaplay.GameObj<T>,
    opt: Required<CircleObjOpt<T>>,
) {
    const newObj = use(obj, [
        k.circle(opt.radius),
    ]);
    return newObj;
}

export function createCircle<T>(
    userOpt?: CircleObjOpt<T> & RenderOpt<T> & ObjOpt<T>,
) {
    const opt = createOptions({
        radius: 20,
    }, userOpt);

    return applyCircleComponents(createRender(opt), opt);
}
