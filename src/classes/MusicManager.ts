import type { KEventController } from "kaplay";
import type {
    BPMChangeCommand,
    Command,
    DelayCommand,
    EndCommand,
    GoGoEndCommand,
    GoGoStartCommand,
    MeasureCommand,
    Note,
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
    private _curNote = 0;
    private _measure = 0;
    bpm: number;
    private _notesMap: NoteBeat[] = [];

    song: Song;
    currentMeasure = 0;

    constructor(song: Song) {
        this.song = song;
        this.bpm = song.bpm ?? 120;
        this._measure = DEF_MEASURE;
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
     * When a new note appear
     */
    onNote(action: (note: NoteBeat) => any) {
        this._events.on("note", action);
    }

    /**
     * When a new beat starts
     */
    onBeat(action: (b: number, nextBeatTime: number) => void) {
        this._events.on("beat", action);
    }

    getMsPerMeasure(bpm?: number) {
        return 60000 * this._measure * 4 / (bpm ?? this.bpm);
    }

    getMsPerBeat(bpm?: number) {
        return 60000 / (bpm ?? this.bpm);
    }

    /**
     * Start the song reproduction
     */
    start() {
        const musicOffset = this.song.offset >= 0 ? this.song.offset : 0;
        const notesOffset = this.song.offset < 0 ? -this.song.offset : 0;

        // wait for song audio to start...
        this._startSongWait = k.wait(musicOffset + timeForHit(), () => {
            this._events.trigger("start_song");
        });

        // wait for notes offset...
        this._startNotesWait = k.wait(notesOffset, () => {
            this._events.trigger("start_notes");
            this.parseNotes();

            console.log(
                "[song setup] notes on this song:",
                this._notesMap.length,
            );

            const nextMeasure = () => {
                this._events.trigger(
                    "measure",
                    this._curMeasure,
                    this.getMsPerMeasure(),
                );
            };

            const nextBeat = () => {
                this._events.trigger(
                    "beat",
                    this._curBeat,
                    this.getMsPerBeat(),
                );
                this._curBeat++;
            };

            const nextNote = () => {
                const note = this._notesMap[this._curNote];

                console.log(
                    "[song loop] triggering note",
                    note.type,
                    this._curNote,
                );

                this._events.trigger("note", note);

                if (note.type == "BPM_CHANGE") {
                    this.bpm = note.value;
                    console.log("[song loop] BPM changed to", this.bpm);
                }

                this._curNote++;
            };

            // #region Song Loop
            k.onUpdate(() => {
                if (this._ended) return;

                this._curTime += k.dt() * 1000;

                if (this._curTime >= this.getMsPerBeat() * this._curBeat) {
                    nextBeat();
                }

                if (
                    this._curTime >= this.getMsPerMeasure() * this._curMeasure
                ) {
                    nextMeasure();
                }

                if (this._curTime >= this._notesMap?.[this._curNote]?.timeMs) {
                    nextNote();
                }
            });
            // #endregion
        });
    }

    /**
     * Parse the TJA notes
     */
    parseNotes(): NoteBeat[] {
        const notes: NoteBeat[] = [];
        const chartCommands = this.song.chart;
        let parseMeasure = 0;
        let parseBpm = this.song.bpm ?? 120;
        let parseTime = 0;

        notes.push({
            timeMs: 0,
            type: "BPM_CHANGE",
            value: parseBpm,
        });

        chartCommands.forEach((cmd) => {
            if (isNoteSequenceCmd(cmd)) {
                let notesWithoutEnd = cmd.notes.filter(note =>
                    !note.isMeasureEnd
                );

                let noteMs =
                    this.getMsPerMeasure(parseBpm) / notesWithoutEnd.length
                    - 1;

                cmd.notes.forEach((note, i) => {
                    if (note.isMeasureEnd) {
                        parseTime += this.getMsPerMeasure(parseBpm);
                        parseMeasure++;

                        return;
                    }

                    notes.push({
                        timeMs: parseTime + noteMs * i,
                        type: note.noteType,
                    });
                });
            }

            if (isBPMChangeCmd(cmd)) {
                notes.push({
                    timeMs: this.getMsPerMeasure(parseBpm) * parseMeasure,
                    type: "BPM_CHANGE",
                    value: cmd.value,
                });

                console.log("[notes parsing]", "bpm changed to", cmd.value);

                parseBpm = cmd.value;
            }
        });

        this._notesMap = notes;
        return notes;
    }
}

// #region Types
type NoteBeat = {
    timeMs: number;
    type: string;
    value?: number;
};

// #endregion

// #region Assert Functions
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
