import { SceneState } from "../classes/SceneState.js";
import { gameData, k } from "../engine.js";
import { loadTJA } from "../util.js";

function convertToBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = (error) => console.error("Error: ", error);
}

k.scene("debug_song", () => {
    const sceneState = new SceneState("demo_song", () => ({}));

    const statusText = k.add([
        k.text("Upload .ogg audio"),
    ]);
    let curInput;
    let oggFile: string;
    let tjaFile: string;

    const oggInput = document.createElement("input");
    oggInput.type = "file";
    oggInput.accept = ".ogg";

    oggInput.addEventListener("change", (e) => {
        const file = oggInput.files[0];

        statusText.text = "Uploading...";

        convertToBase64(file, (r) => {
            statusText.text = "Upload .tja file";
            curInput = tjaInput;
            oggFile = r;
        });
    });

    const tjaInput = document.createElement("input");
    tjaInput.type = "file";
    tjaInput.accept = ".tja";

    tjaInput.addEventListener("change", (e) => {
        const file = tjaInput.files[0];
        statusText.text = "Wait some seconds...";

        file.text().then((r) => {
            tjaFile = r;

            loadTJA(tjaFile, false, {
                songBase64: oggFile,
                songTJA: tjaFile,
            }).then((song) => {
                sceneState.changeScene(
                    "game",
                    song,
                    {
                        auto: true,
                    },
                );
            });
        });
    });

    curInput = oggInput;

    k.onMouseDown(() => {
        curInput.click();
    });
});
