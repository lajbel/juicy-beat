import { k } from "../../main";
import { use } from "../../util/use";
import { RenderOpt, createRender } from "./obj_render";

export interface SpriteObjOpt<T = any> extends RenderOpt<T> {
    sprite?: string;
}

export function createSprite<T>(userOpt?: SpriteObjOpt<T>) {
    const opt = Object.assign({
        sprite: "bean",
    }, userOpt);

    const baseObj = createRender(opt);
    const newObj = use(baseObj, [
        k.sprite(opt.sprite),
    ]);

    return newObj;
}
