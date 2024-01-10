import { k, gameData } from "../../main";
import { createSprite, SpriteObjOpt } from "../common";

export function createPlayer(opt?: SpriteObjOpt) {
    const config = Object.assign({
        sprite: gameData.player.skin,
    }, opt);

    return createSprite(config);
}
