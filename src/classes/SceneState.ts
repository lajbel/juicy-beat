import type { AudioPlay, AudioPlayOpt } from "kaplay";
import { k } from "../engine";

export class SceneState {
    name: string = "";
    backgroundMusic: AudioPlay | null = null;
    saveData?: () => any;

    constructor(name: string, saveData?: () => any) {
        this.name = name;
        this.saveData = saveData;
    }

    saveSceneData() {
        if (this.saveData) k.setData(`scene.${this.name}`, this.saveData());
    }

    setBackgroundMusic(music: string, opt?: AudioPlayOpt) {
        if (this.backgroundMusic) this.backgroundMusic.stop();

        this.backgroundMusic = k.play(music, opt);
    }

    changeScene(scene: string, ...args: any[]) {
        this.saveSceneData();
        this.backgroundMusic?.stop();
        const newSceneData = k.getData(`scene.${scene}`) || {};
        k.go(scene, newSceneData, ...args);
    }
}
