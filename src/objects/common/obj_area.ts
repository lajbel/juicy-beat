import type * as Kaboom from "kaboom";
import { k } from "../..";
import { use } from "../../util/use";
import { createObj, createOptions, ObjOpt } from "./obj_base";

export type AreaOpt<T> = {
    size?: Kaboom.Vec2;
};

export function applyAreaComponents<T>(
    obj: Kaboom.GameObj<T>,
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
