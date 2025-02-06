import { Anchor, AreaComp, GameObj, type KEventController, Vec2 } from "kaplay";
import { k } from "../../engine.js";
import { HITPOINTS } from "../../scenes/scene_game.js";
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

const ANCHORDIR_BY_RAIL: {
    anchor: Vec2;
    dir: Vec2;
}[] = [
    {
        anchor: k.RIGHT,
        dir: k.vec2(-1, 0),
    },
    {
        anchor: k.DOWN,
        dir: k.vec2(0, 1),
    },
    {
        anchor: k.LEFT,
        dir: k.vec2(1, 0),
    },
];

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

// #region Note component
export function note(type: NoteType, index: number, rail: Rail) {
    const hitPoint = HITPOINTS[rail];

    return {
        id: "note",
        type,
        index,
        rail,
        note_movementSpeed: 1,
        note_moveDir: ANCHORDIR_BY_RAIL[rail],
        note_autoMode: false,
        getHitpointDist() {
            return this.pos.dist(hitPoint);
        },
        isLate() {
            if (rail == 0 && this.pos.x < hitPoint.x) return true;
            else if (rail == 1 && this.pos.y < hitPoint.y) return true;
            else if (rail == 2 && this.pos.x > hitPoint.x) return true;
            else return false;
        },
        isEarly() {
            if (rail == 0 && this.pos.x < hitPoint.x) return false;
            else if (rail == 1 && this.pos.y < hitPoint.y) return false;
            else if (rail == 2 && this.pos.x > hitPoint.x) return false;
            else return true;
        },
        update() {
            if (this.note_autoMode) {
                const hitPoint = HITPOINTS[rail];

                if (hitPoint.dist(this.pos) <= 3 && this.state == "active") {
                    this.enterState("hit");
                }
            }
        },
    };
}
// #endregion

const NOTE_STATES = [
    "active",
    "hit",
    "miss",
    "destroy",
];

// #region Single Note (Apples)
const NOTE_AREA = new k.Rect(k.vec2(0), 63, 63);
export type SingleGameObj = ReturnType<typeof addSingle>;

export function addSingle(rail: Rail, index: number) {
    // Note base
    const singleNote = k.add([
        note("single", index, rail),
        k.pos(),
        k.anchor("center"),
        k.state("active", NOTE_STATES),
        {
            note_sprite: null as GameObj,
            note_hitPoint: null as GameObj<AreaComp>,
        },
    ]);

    // The real single note is only an area object
    const noteHitPoint = singleNote.add([
        k.area({
            shape: NOTE_AREA,
        }),
        k.anchor("center"),
    ]);
    singleNote.note_hitPoint = noteHitPoint;

    // Note sprite
    const noteSprite = singleNote.add([
        k.sprite("note_single"),
        k.anchor(k.vec2(0, 0.28)),
        k.opacity(1),
        k.pos(),
    ]);
    singleNote.note_sprite = noteSprite;

    // Note states
    singleNote.onStateEnter("hit", () => {
        k.play("slice", { loop: false, volume: 0.5, speed: 2 });
        noteSprite.play("hit", { loop: false });
        singleNote.enterState("miss");
    });

    singleNote.onStateEnter("miss", () => {
        singleNote.enterState("destroy");
    });

    singleNote.onStateEnter("destroy", () => {
        singleNote.unuse("move");
        noteSprite.use(k.lifespan(0.1, { fade: 0.1 }));
    });

    noteSprite.onDestroy(() => {
        singleNote.destroy();
    });

    return singleNote;
}
// #endregion

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
        k.state("active", NOTE_STATES),
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

export enum SLIDER_PART {
    START,
    MEDIUM,
    END,
}

export function noteSliderObj(
    rail: Rail,
    vel: number,
    pos: Vec2,
    index: number,
) {
    let subNotesLoop: KEventController;

    const slider = k.make([
        k.pos(pos),
        k.layer("note"),
        k.move(directionByRail(rail), vel),
        k.opacity(1),
        k.anchor(valuesByRail(rail).anchor as Anchor),
        k.area({ shape: new k.Rect(k.vec2(0), 0, 0) }),
        k.state("active", NOTE_STATES),
        note("slider", index, rail),
        {
            subNotes: new Array<GameObj>(),
            subNotesCount: 0,
            isActive: false,
            isCreationFinished: false,
            isRemovingSubNote: false,
            removedSubNotes: 0,
            /** The type of the subnotes currently being created */
            subnoteType: 0 as SLIDER_PART,
            /** If we are in the last note */
            isFirstNote: true,
            isLastNote: false,
            start() {
                subNotesLoop = k.loop(50 / vel, () => {
                    if (this.isFirstNote) {
                        this.subNoteType = 0;
                        this.isFirstNote = false;
                    } else if (this.isLastNote) {
                        this.subNoteType = 2;
                    } else {
                        this.subNoteType = 1;
                    }

                    this.addSubNote(this.subNoteType);
                    if (this.isLastNote) subNotesLoop.cancel();
                });
            },
            end() {
                this.isLastNote = true;
            },
            fail() {
                subNotesLoop.cancel();
                this.subNotes.forEach((sn) => {
                    sn.use(k.lifespan(0.1, { fade: 0.1 }));
                    sn.unuse("move");
                });
            },
            addSubNote(type: SLIDER_PART = 1) {
                const posStart = this.subNotesCount === 0
                    ? this.pos.add(
                        valuesByRail(rail).dir.scale(this.subNotesCount),
                    )
                    : this.subNotes[this.subNotesCount - 1].pos.add(
                        valuesByRail(rail).dir.scale(1),
                    );

                const subnote = k.add([
                    k.pos(posStart),
                    k.anchor(k.vec2(0, 0.28)),
                    k.sprite("note_slider", {
                        frame: type,
                    }),
                    k.rotate(90 * rail),
                    k.area(),
                    k.move(directionByRail(rail), vel),
                    k.opacity(1),
                    k.state("active", NOTE_STATES),
                    "subnote",
                    {
                        rail,
                    },
                ]);

                subnote.onStateEnter("hit", () => {
                    subnote.unuse("move");
                    subnote.enterState("destroy");
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
        },
    ]);

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
