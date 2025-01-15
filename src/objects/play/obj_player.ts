import { gameData } from "../../engine.js";
import { createOptions, type ObjOpt } from "../common/obj_base.js";
import type { RenderOpt } from "../common/obj_render.js";
import { createSprite, type SpriteObjOpt } from "../common/obj_sprite.js";

export function createPlayer<T>(
    userOpt?: SpriteObjOpt<T> & RenderOpt<T> & ObjOpt<T>,
) {
    const opt = createOptions({
        sprite: gameData.player.skin,
    }, userOpt);

    return createSprite(opt);
}
