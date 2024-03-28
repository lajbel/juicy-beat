import type * as Kaboom from "kaboom";
import { k } from "../..";
import { use } from "../../util/use";
import { createOptions, ObjOpt } from "./obj_base";
import { createRender, RenderOpt } from "./obj_render";

export type BackgroundObjOpt<T> = {
    size?: Kaboom.Vec2;
};

export function applyBackgroundComponents<T>(
    obj: Kaboom.GameObj<T>,
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
