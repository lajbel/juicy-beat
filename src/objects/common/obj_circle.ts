import type * as Kaboom from "kaboom";
import { k } from "../../main";
import { use } from "../../util/use"
import { RenderOpt, createRender } from "./obj_render";
import { ObjOpt, createOptions } from "./obj_base";

export type CircleObjOpt<T> = {
    radius?: number;
}

export function applyCircleComponents<T>(obj: Kaboom.GameObj<T>, opt: Required<CircleObjOpt<T>>) {
    const newObj = use(obj, [
        k.circle(opt.radius),
    ]);
    return newObj;
}

export function createCircle<T>(userOpt?: CircleObjOpt<T> & RenderOpt<T> & ObjOpt<T>) {
    const opt = createOptions({
        radius: 20,
    }, userOpt);

    return applyCircleComponents(createRender(opt), opt);
}