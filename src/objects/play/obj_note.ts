import { Anchor, AreaComp, GameObj, Vec2 } from "kaplay";
import { k } from "../../engine.js";
import { NoteType, Rail } from "../../types.js";
import { use } from "../../util/use";
import { createArea } from "../common/obj_area.js";
import type { ObjOpt } from "../common/obj_base.js";
import { createSprite } from "../common/obj_sprite.js";

const directionByRail = (rail: Rail) => {
    return {
        "0": k.RIGHT,
        "1": k.DOWN,
        "2": k.LEFT,
    }[rail];
};

const valuesByRail = (rail: Rail) => {
    return {
        "0": {
            anchor: "right",
            dir: k.vec2(-50, 0),
        },
        "1": {
            anchor: "bot",
            dir: k.vec2(0, -50),
        },
        "2": {
            anchor: "left",
            dir: k.vec2(50, 0),
        },
    }[rail];
};

const NOTE_RANK = [
    "active",
    "hit",
    "miss",
    "destroy",
];

export function noteComp(type: NoteType, index: number, rail: Rail) {
    return {
        id: "note",
        type,
        index,
        rail,
    };
}

export interface NoteBaseOpt<T> extends ObjOpt<T> {
    type?: NoteType;
    index?: number;
    rail?: Rail;
}

export function createNoteBase<T>(userOpt?: NoteBaseOpt<T>) {
    const opt = Object.assign({
        type: "single",
        index: 0,
        rail: 0,
        size: k.vec2(63, 63),
        tags: ["note"],
    }, userOpt);

    const obj = createArea(opt);

    const newObj = use(obj, [
        k.state("active", NOTE_RANK),
        k.opacity(1),
        {
            type: opt.type,
            index: opt.index,
            rail: opt.rail,
        },
    ]);

    return newObj;
}

export function createSingleNote(userOpt?: NoteBaseOpt<any>) {
    const opt = Object.assign({
        type: "single",
        index: 0,
        rail: 0,
    }, userOpt);

    const baseNote = createNoteBase(opt);

    const baseNoteSprite = baseNote.add(createSprite({
        sprite: "note_single",
        anchor: k.vec2(0, 0.28),
    }));

    const newBaseNote = use(baseNote, [{
        noteSprite: baseNoteSprite,
    }]);

    newBaseNote.onStateEnter("hit", () => {
        k.play("slice", { loop: false, volume: 0.5 });
        newBaseNote.noteSprite.play("hit", { loop: false });
        newBaseNote.enterState("miss");
    });

    newBaseNote.onStateEnter("miss", () => {
        newBaseNote.enterState("destroy");
    });

    newBaseNote.onStateEnter("destroy", () => {
        newBaseNote.unuse("move");
        newBaseNote.use(k.lifespan(0.2));
        newBaseNote.noteSprite.use(k.lifespan(0.1, { fade: 0.1 }));
    });

    return newBaseNote;
}

export function createSliderNote(index: number, rail: Rail) {
}

export function addSubNote(note: GameObj) {
}

export function noteSliderObj(
    rail: Rail,
    vel: number,
    pos: Vec2,
    index: number,
) {
    const slider = k.make([
        k.pos(pos),
        k.layer("note"),
        k.move(directionByRail(rail), vel),
        k.opacity(1),
        k.anchor(valuesByRail(rail).anchor as Anchor),
        k.area({ shape: new k.Rect(k.vec2(0), 0, 0) }),
        k.state("active", NOTE_RANK),
        noteComp("slider", index, rail),
        {
            subNotes: new Array<GameObj>(),
            subNotesCount: 0,
            isCreationFinished: false,
            isRemovingSubNote: false,
            removedSubNotes: 0,
            addSubNote() {
                const posStart = this.subNotesCount === 0
                    ? this.pos.add(
                        valuesByRail(rail).dir.scale(this.subNotesCount),
                    )
                    : this.subNotes[this.subNotesCount - 1].pos.add(
                        valuesByRail(rail).dir.scale(1),
                    );

                const subnote = k.add([
                    k.pos(posStart),
                    k.layer("note"),
                    k.anchor(k.vec2(0, 0.28)),
                    k.sprite("note_slider"),
                    k.area(),
                    k.move(directionByRail(rail), vel),
                    k.opacity(1),
                    k.state("active", NOTE_RANK),
                    "subnote",
                    {
                        rail,
                    },
                ]);

                subnote.onStateEnter("hit", () => {
                    k.play("slice", { loop: false, volume: 0.5 });
                    subnote.unuse("move");
                    subnote.play("cut", { loop: false });
                    subnote.enterState("destroy");
                });

                subnote.onStateEnter("miss", () => {
                    subnote.use(k.move(k.DOWN, 100));
                    subnote.enterState("destroy");
                });

                subnote.onStateEnter("destroy", () => {
                    this.trigger("subnote_destroy", subnote);
                    subnote.use(k.lifespan(0.1, { fade: 0.1 }));
                });

                subnote.onStateUpdate("destroy", () => {
                    if (rail === 0) {
                        if (
                            this.subNotes?.[this.removedSubNotes]?.pos?.x
                                >= this?.pos?.x
                        ) {
                            this.isRemovingSubNote = false;
                        }
                    }
                    if (rail === 1) {
                        if (
                            this.subNotes?.[this.removedSubNotes]?.pos?.y
                                >= this?.pos?.y
                        ) {
                            this.isRemovingSubNote = false;
                        }
                    }
                    if (rail === 2) {
                        if (
                            this.subNotes?.[this.removedSubNotes]?.pos?.x
                                <= this?.pos?.x
                        ) {
                            this.isRemovingSubNote = false;
                        }
                    }
                });

                this.updateArea();
                this.subNotesCount++;
                this.subNotes.push(subnote);
            },
            updateArea() {
                if (rail === 0) {
                    this.use(
                        k.area({
                            shape: new k.Rect(
                                k.vec2(30, 0),
                                50 * (this.subNotes.length),
                                63,
                            ),
                        }),
                    );
                }
                if (rail === 1) {
                    this.use(
                        k.area({
                            shape: new k.Rect(
                                k.vec2(0, 30),
                                63,
                                50 * (this.subNotes.length),
                            ),
                        }),
                    );
                }
                if (rail === 2) {
                    this.use(
                        k.area({
                            shape: new k.Rect(
                                k.vec2(-30, 0),
                                50 * (this.subNotes.length),
                                63,
                            ),
                        }),
                    );
                }
            },
            end() {
                this.isCreationFinished = true;
            },
        },
    ]);

    slider.onStateEnter("active", () => {
        const addLoop = k.loop(50 / vel, () => {
            if (slider.isCreationFinished) return addLoop.cancel();
            slider.addSubNote();
        });
    });

    slider.onStateEnter("hit", () => {
        slider.unuse("move");
    });

    slider.onStateUpdate("hit", () => {
        if (slider.isRemovingSubNote) return;
        slider.subNotes[slider.removedSubNotes]?.enterState("hit");
        slider.isRemovingSubNote = true;
        slider.removedSubNotes++;
    });

    slider.onStateEnter("destroy", () => {
        slider.end();
        slider.destroy();
        k.get("subnote").forEach((subnote) => {
            subnote.enterState("destroy");
        });
    });

    slider.onStateEnter("miss", () => {
        slider.end();
        slider.destroy();
        k.get("subnote").forEach((subnote) => {
            subnote.enterState("miss");
        });
    });

    return slider;
}
