import type { AudioPlay, AudioPlayOpt } from "kaboom";
import { k } from "../main";

export class SceneState {
    name: string = "";
    backgroundMusic: AudioPlay | null = null;
    saveData?: () => any;

    constructor(name: string, saveData?: () => any) {
        this.name = name;
        this.saveData = saveData;

        // Save layers
        k.layers([
            "background",
            "note",
            "player",
            "sword",
            "default",
            "ui",
        ], "default");
    }

    saveSceneData() {
        if(this.saveData) k.setData(`scene.${this.name}`, this.saveData());
    }

    setBackgroundMusic(music: string, options: AudioPlayOpt) {
        if (this.backgroundMusic) this.backgroundMusic.stop();

        this.backgroundMusic = k.play(music, options);
    }

    changeScene(scene: string, ...args: any[]) {
        this.saveSceneData();
        this.backgroundMusic?.stop();
        const newSceneData = k.getData(`scene.${scene}`) || {};
        k.go(scene, newSceneData, ...args);
    }
}