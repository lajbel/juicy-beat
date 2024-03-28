import type * as Kaboom from "kaboom";
import { k } from "../../main";
import { use } from "../../util/use";
import { createOptions, ObjOpt } from "./obj_base";
import { createRender, RenderOpt } from "./obj_render";

export type SpriteObjOpt<T> = {
    sprite?: string;
};

export function applySpriteComponents<T>(
    obj: Kaboom.GameObj<T>,
    opt: Required<SpriteObjOpt<T>>,
) {
    const newObj = use(obj, [
        k.sprite(opt.sprite),
    ]);
    return newObj;
}

export function createSprite<T>(
    userOpt?: SpriteObjOpt<T> & RenderOpt<T> & ObjOpt<T>,
) {
    const opt = createOptions({
        sprite: "bean",
    }, userOpt);

    return applySpriteComponents(createRender(opt), opt);
}
