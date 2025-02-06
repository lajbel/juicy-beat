import type * as KA from "kaplay";
import { TJAParser } from "tja";
import { gameData, k } from "./engine.js";
import type { SongCourse } from "./types.js";

export function waitMs(ms: number, action: () => void) {
    const msToSec = ms / 1000;
    k.wait(msToSec, action);
}

export function loopMs(ms: number, action: () => void) {
    const msToSec = ms / 1000;
    k.loop(msToSec, action);
}

export function doubleTween<V extends KA.LerpValue>(
    from: V,
    to: V,
    duration: number,
    setValue: (value: V) => void,
    easeFunc?: (t: number) => number,
) {
    k.tween(from, to, duration, (value) => {
        setValue(value);
    }, easeFunc).onEnd(() => {
        k.tween(to, from, duration, (value) => {
            setValue(value);
        }, easeFunc);
    });
}

export function padlZero(str: string, len: number) {
    return str.padStart(len, "0");
}

export function complexAdd<T extends KA.Comp, T2>(
    obj: KA.GameObj<T2>,
    parent: KA.GameObj | null,
    comps?: KA.CompList<T>,
): KA.GameObj<T2> {
    let parentObj = parent ?? k;
    const newObj = parentObj.add(obj);

    if (comps) {
        for (const component of comps) {
            newObj.use(component);
        }
    }

    return newObj;
}

const parseSong = async (
    tja: string,
    remote = false,
    customSound?: string,
) => {
    try {
        const song = TJAParser.parse(tja);
        const commands = song.courses[0]?.singleCourse
            .getCommands();

        const soungCourses: SongCourse[] = [];

        song.courses.forEach((course) => {
            soungCourses.push({
                difficulty: course.stars,
                chart: course.singleCourse.getCommands(),
            });
        });

        if (!song.wave) throw new Error("No sound file found");
        if (!song.title) throw new Error("No title found");
        if (!song.subtitle) throw new Error("No subtitle found");
        //         if (!song.genre) throw new Error("No genre found");
        if (!song.bpm) throw new Error("No BPM found");

        let soundPath;

        if (customSound) {
            soundPath = customSound;
        } else if (remote) {
            soundPath = song.wave;
        } else {
            soundPath = `sounds/music/${song.wave}`;
        }

        await k.loadSound(song.wave.slice(0, -3), soundPath);

        const songData = {
            title: song.title,
            subtitle: song.subtitle,
            genre: song.genre,
            bpm: song.bpm ?? 120,
            offset: song.offset,
            demoStart: song.demoStart,
            chart: commands,
            sound: song.wave.slice(0, -3),
            courses: soungCourses,
        };

        gameData.songs.push(songData);

        console.log(`TJA loaded ${song.title}`);

        return songData;
    } catch (e) {
        throw new Error("Error parsing TJA file " + e);
    }
};

export function loadTJA(
    tjaPath: string,
    remote?: boolean,
    customSong?: {
        songBase64: string;
        songTJA: string;
    },
) {
    return k.load(
        new Promise((resolve, reject) => {
            if (customSong) {
                parseSong(
                    customSong.songTJA,
                    remote,
                    customSong.songBase64,
                ).then((song) => {
                    resolve(song);
                }).catch((e) => {
                    reject(e);
                });
            } else {
                fetch(tjaPath).then((response) => {
                    return response.text();
                }).then((r) => {
                    parseSong(r, remote).then((song) => {
                        resolve(song);
                    }).catch((e) => {
                        reject(e);
                    });
                });
            }
        }),
    );
}
