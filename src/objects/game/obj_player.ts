import { gameData } from "../../main";
import { createOptions, createSprite, ObjOpt, RenderOpt, SpriteObjOpt } from "../common";

export function createPlayer<T>(userOpt?: SpriteObjOpt<T> & RenderOpt<T> & ObjOpt<T>) {
    const opt = createOptions({
        sprite: gameData.player.skin,
    }, userOpt);

    return createSprite(opt);
}
