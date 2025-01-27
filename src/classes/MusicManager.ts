import type { KEventController } from "kaplay";
import type {
    BPMChangeCommand,
    Command,
    DelayCommand,
    EndCommand,
    GoGoEndCommand,
    GoGoStartCommand,
    MeasureCommand,
    NoteSequence,
    ScrollCommand,
    StartCommand,
} from "tja";
import {
    DEF_MEASURE,
    DEF_SCROLL_SPEED,
    HITPOINT_DISTANCE,
    NOTES_SPEED,
} from "../config.js";
import { k } from "../engine.js";
import { type Song } from "../types.js";

/**
 * @returns The time for a note reaching their hitpoint
 */
const timeForHit = () => {
    return ((k.width() / 2) - HITPOINT_DISTANCE)
        / (NOTES_SPEED * DEF_SCROLL_SPEED);
};

export class MusicManager {
    private _events = new k.KEventHandler();
    private _startSongWait: KEventController;
    private _startNotesWait: KEventController;
    private _ended = false;
    /** Current time in miliseconds */
    private _curTime = 0;
    private _curBeat = 0;
    private _curMeasure = 0;
    song: Song;
    currentMeasure = 0;

    constructor(song: Song) {
        this.song = song;
    }

    set currentBeat(beat: number) {
    }

    /**
     * When song stars
     */
    onStartMusic(action: () => any) {
        this._events.on("start_song", action);
    }

    /**
     * When notes start appearing
     */
    onStartNotes(action: () => any) {
        this._events.on("start_notes", action);
    }

    /**
     * When a new measure time starts
     */
    onMeasure(action: (M: number, nextMTime: number) => any) {
        this._events.on("measure", action);
    }

    /**
     * When a new beat starts
     */
    onBeat(action: (b: number, nextBeatTime: number) => void) {
        this._events.on("beat", action);
    }

    /**
     * Start the song reproduction
     */
    start() {
        const chartCommands = this.song.chart;
        const musicOffset = this.song.offset >= 0 ? this.song.offset : 0;
        const notesOffset = this.song.offset < 0 ? -this.song.offset : 0;
        const measure = DEF_MEASURE;
        let bpm = this.song.bpm;

        const msPerMeasure = () => {
            return 60000 * measure * 4 / bpm;
        };

        const msPerBeat = () => {
            return 60000 / bpm;
        };

        this._startSongWait = k.wait(musicOffset + timeForHit(), () => {
            this._events.trigger("start_song");
        });

        this._startNotesWait = k.wait(notesOffset, () => {
            this._events.trigger("start_notes");

            // current progress in tja
            let lineIndex = 0;

            const nextMeasure = () => {
                let measureNotes = [];
                let measureEnded = false;

                this._events.trigger(
                    "measure",
                    this._curMeasure,
                    msPerMeasure(),
                );

                const executeCommands = () => {
                    const cmd = chartCommands[lineIndex];

                    if (isStartCmd(cmd)) {
                        measureEnded = true;
                    }

                    if (isNoteSequenceCmd(cmd)) {
                        cmd.notes.map((note) => {
                            measureNotes.push(note);

                            if (note.isMeasureEnd) {
                                measureEnded = true;
                            }
                        });
                    }

                    if (isBPMChangeCmd(cmd)) {
                        bpm = cmd.value;
                        console.debug("BPM changed to", bpm);
                    }

                    if (isEndCmd(cmd)) {
                        this._ended = true;
                        measureEnded = true;
                    }

                    lineIndex++;

                    if (measureEnded) {
                        this._curMeasure++;
                    } else {
                        return executeCommands();
                    }
                };

                executeCommands();
            };

            const nextBeat = () => {
                this._events.trigger("beat", this._curBeat, msPerBeat());
                this._curBeat++;
            };

            k.onUpdate(() => {
                if (this._ended) return;

                this._curTime += k.dt() * 1000;

                if (this._curTime >= msPerBeat() * this._curBeat) {
                    nextBeat();
                }

                if (this._curTime >= msPerMeasure() * this._curMeasure) {
                    nextMeasure();
                }
            });
        });
    }

    /**
     * Parse the TJA notes by time for appepar
     */
    parseTJA(): NoteBeat[] {
        const notes: NoteBeat[] = [];
        const chartCommands = this.song.chart;
        let curBpm = this.song.bpm;

        chartCommands.forEach((cmd) => {
            if (isBPMChangeCmd(cmd)) {
                curBpm = cmd.value;
            }
            if (isNoteSequenceCmd(cmd)) {
            }
        });

        return notes;
    }
}

// #region Types
type NoteBeat = {
    timeMs: number;
    type: string;
};

// #endregion

// #region Assertiosn
export function isStartCmd(cmd: Command): cmd is StartCommand {
    return cmd.commandType === "START";
}
export function isBPMChangeCmd(cmd: Command): cmd is BPMChangeCommand {
    return cmd.commandType === "BPMCHANGE";
}
export function isEndCmd(cmd: Command): cmd is EndCommand {
    return cmd.commandType === "END";
}
export function isMeasureCommand(cmd: Command): cmd is MeasureCommand {
    return cmd.commandType === "MEASURE";
}
export function isGoGoEndCommand(cmd: Command): cmd is GoGoEndCommand {
    return cmd.commandType === "GOGOEND";
}
export function isGoGoStartCommand(cmd: Command): cmd is GoGoStartCommand {
    return cmd.commandType === "GOGOSTART";
}
export function isScrollCommand(cmd: Command): cmd is ScrollCommand {
    return cmd.commandType === "SCROLL";
}
export function isDelayCommand(cmd: Command): cmd is DelayCommand {
    return cmd.commandType === "DELAY";
}
export function isNoteSequenceCmd(cmd: Command): cmd is NoteSequence {
    return cmd.commandType === "__NOTESEQUENCE";
}
// #endregion
