import { k, gameData } from "../../main";
import { createObj, createSprite, SpriteObjOpt } from "../common";

export function createPlayer<T>(opt?: SpriteObjOpt<T>) {
    const config = Object.assign({
        sprite: gameData.player.skin,
    }, opt);

    return createSprite(config);
}
