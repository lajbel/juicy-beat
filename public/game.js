(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/common/regex.js
  var require_regex = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/common/regex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NOTE_REGEX = exports.AUTHOR_REGEX = exports.LINE_REGEX = exports.PIPE_REGEX = exports.ESCAPED_COMMA_REGEX = exports.SPACE_REGEX = void 0;
      exports.SPACE_REGEX = /\s+/g;
      exports.ESCAPED_COMMA_REGEX = /\\,/g;
      exports.PIPE_REGEX = /\|/g;
      exports.LINE_REGEX = /\r?\n/g;
      exports.AUTHOR_REGEX = /(.+)\s*<(.+)>/g;
      exports.NOTE_REGEX = /[a-zA-Z0-9]/g;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/common/MetadataProperty.js
  var require_MetadataProperty = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/common/MetadataProperty.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CourseMetadataProperty = exports.SongMetadataProperty = void 0;
      var SongMetadataProperty;
      (function(SongMetadataProperty2) {
        SongMetadataProperty2["Title"] = "TITLE";
        SongMetadataProperty2["TitleEN"] = "TITLEEN";
        SongMetadataProperty2["TitleJA"] = "TITLEJA";
        SongMetadataProperty2["TitleCN"] = "TITLECN";
        SongMetadataProperty2["TitleTW"] = "TITLETW";
        SongMetadataProperty2["TitleKO"] = "TITLEKO";
        SongMetadataProperty2["Subtitle"] = "SUBTITLE";
        SongMetadataProperty2["SubtitleEN"] = "SUBTITLEEN";
        SongMetadataProperty2["SubtitleJA"] = "SUBTITLEJA";
        SongMetadataProperty2["SubtitleCN"] = "SUBTITLECN";
        SongMetadataProperty2["SubtitleTW"] = "SUBTITLETW";
        SongMetadataProperty2["SubtitleKO"] = "SUBTITLEKO";
        SongMetadataProperty2["BPM"] = "BPM";
        SongMetadataProperty2["Wave"] = "WAVE";
        SongMetadataProperty2["Offset"] = "OFFSET";
        SongMetadataProperty2["DemoStart"] = "DEMOSTART";
        SongMetadataProperty2["Genre"] = "GENRE";
        SongMetadataProperty2["ScoreMode"] = "SCOREMODE";
        SongMetadataProperty2["Maker"] = "MAKER";
        SongMetadataProperty2["Lyrics"] = "LYRICS";
        SongMetadataProperty2["SongVol"] = "SONGVOL";
        SongMetadataProperty2["SEVol"] = "SEVOL";
        SongMetadataProperty2["Side"] = "SIDE";
        SongMetadataProperty2["Life"] = "LIFE";
        SongMetadataProperty2["Game"] = "GAME";
        SongMetadataProperty2["HeadScroll"] = "HEADSCROLL";
        SongMetadataProperty2["BGImage"] = "BGIMAGE";
        SongMetadataProperty2["BGMovie"] = "BGMOVIE";
        SongMetadataProperty2["MovieOffset"] = "MOVIEOFFSET";
      })(SongMetadataProperty = exports.SongMetadataProperty || (exports.SongMetadataProperty = {}));
      var CourseMetadataProperty;
      (function(CourseMetadataProperty2) {
        CourseMetadataProperty2["Course"] = "COURSE";
        CourseMetadataProperty2["Level"] = "LEVEL";
        CourseMetadataProperty2["Balloon"] = "BALLOON";
        CourseMetadataProperty2["ScoreInit"] = "SCOREINIT";
        CourseMetadataProperty2["ScoreDiff"] = "SCOREDIFF";
        CourseMetadataProperty2["BalloonNor"] = "BALLOONNOR";
        CourseMetadataProperty2["BalloonExp"] = "BALLOONEXP";
        CourseMetadataProperty2["BalloonMas"] = "BALLOONMAS";
        CourseMetadataProperty2["Style"] = "STYLE";
        CourseMetadataProperty2["Exam1"] = "EXAM1";
        CourseMetadataProperty2["Exam2"] = "EXAM2";
        CourseMetadataProperty2["Exam3"] = "EXAM3";
        CourseMetadataProperty2["GaugeIncr"] = "GAUGEINCR";
        CourseMetadataProperty2["Total"] = "TOTAL";
        CourseMetadataProperty2["HiddenBranch"] = "HIDDENBRANCH";
      })(CourseMetadataProperty = exports.CourseMetadataProperty || (exports.CourseMetadataProperty = {}));
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/utils/StringBuilder.js
  var require_StringBuilder = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/utils/StringBuilder.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StringBuilder = void 0;
      var StringBuilder = class {
        constructor() {
          this._strings = [];
          this._separator = "";
        }
        withSeparator(separator) {
          this._separator = separator;
          return this;
        }
        append(value) {
          this._strings.push(value);
          return this;
        }
        toString() {
          return this._strings.join(this._separator);
        }
      };
      exports.StringBuilder = StringBuilder;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/lib/CommandType.js
  var require_CommandType = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/lib/CommandType.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CommandType = void 0;
      var CommandType;
      (function(CommandType2) {
        CommandType2["Start"] = "START";
        CommandType2["End"] = "END";
        CommandType2["Measure"] = "MEASURE";
        CommandType2["BPMChange"] = "BPMCHANGE";
        CommandType2["Delay"] = "DELAY";
        CommandType2["Scroll"] = "SCROLL";
        CommandType2["GoGoStart"] = "GOGOSTART";
        CommandType2["GoGoEnd"] = "GOGOEND";
        CommandType2["BarLineOff"] = "BARLINEOFF";
        CommandType2["BarLineOn"] = "BARLINEON";
        CommandType2["BranchStart"] = "BRANCHSTART";
        CommandType2["BranchEnd"] = "BRANCHEND";
        CommandType2["Section"] = "SECTION";
        CommandType2["Lyric"] = "LYRIC";
        CommandType2["LevelHold"] = "LEVELHOLD";
        CommandType2["BMScroll"] = "BMSCROLL";
        CommandType2["HBScroll"] = "HBSCROLL";
        CommandType2["SENoteChange"] = "SENOTECHANGE";
        CommandType2["NextSong"] = "NEXTSONG";
        CommandType2["Direction"] = "DIRECTION";
        CommandType2["Sudden"] = "SUDDEN";
        CommandType2["JPosScroll"] = "JSPOSSCROLL";
        CommandType2["BranchMarker"] = "__BRANCHMARKER";
        CommandType2["NoteSequence"] = "__NOTESEQUENCE";
      })(CommandType = exports.CommandType || (exports.CommandType = {}));
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/common/Player.js
  var require_Player = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/common/Player.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Player = void 0;
      var Player;
      (function(Player2) {
        Player2[Player2["Player1"] = 0] = "Player1";
        Player2[Player2["Player2"] = 1] = "Player2";
      })(Player = exports.Player || (exports.Player = {}));
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/lib/BranchType.js
  var require_BranchType = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/lib/BranchType.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BranchType = void 0;
      var BranchType;
      (function(BranchType2) {
        BranchType2["Normal"] = "N";
        BranchType2["Advanced"] = "E";
        BranchType2["Master"] = "M";
      })(BranchType = exports.BranchType || (exports.BranchType = {}));
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/lib/NoteType.js
  var require_NoteType = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/lib/NoteType.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NoteType = void 0;
      var NoteType;
      (function(NoteType2) {
        NoteType2["Blank"] = "0";
        NoteType2["Don"] = "1";
        NoteType2["Ka"] = "2";
        NoteType2["DON"] = "3";
        NoteType2["KA"] = "4";
        NoteType2["Drumroll"] = "5";
        NoteType2["DRUMROLL"] = "6";
        NoteType2["Balloon"] = "7";
        NoteType2["DrumrollEnd"] = "8";
        NoteType2["Kusudama"] = "9";
        NoteType2["MultiDon"] = "A";
        NoteType2["MultiKa"] = "B";
        NoteType2["ADLIB"] = "F";
        NoteType2["MeasureEnd"] = ",";
      })(NoteType = exports.NoteType || (exports.NoteType = {}));
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/Style.js
  var require_Style = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/Style.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Style = void 0;
      var Style = class _Style {
        constructor(id, name) {
          this._id = id;
          this._name = name;
        }
        static fromId(id, strict = true) {
          const style = _Style._values.find((s2) => s2._id === id);
          if (style) {
            return style;
          }
          if (strict) {
            throw new Error(`Invalid style id: ${id}`);
          }
        }
        static fromName(name, strict = true) {
          const style = _Style._values.find((s2) => s2._name === name);
          if (style) {
            return style;
          }
          if (strict) {
            throw new Error(`Invalid style name: ${name}`);
          }
        }
        static fromRaw(raw, strict = true) {
          const parsedValue = parseInt(raw, 10);
          return isNaN(parsedValue) ? _Style.fromName(raw, strict) : _Style.fromId(parsedValue, strict);
        }
        toString() {
          return this._name;
        }
      };
      exports.Style = Style;
      Style.Single = new Style(1, "Single");
      Style.Double = new Style(2, "Double");
      Style.Couple = new Style(2, "Couple");
      Style._values = [Style.Single, Style.Double, Style.Couple];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/CourseVariant.js
  var require_CourseVariant = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/CourseVariant.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CourseVariant = void 0;
      var StringBuilder_1 = require_StringBuilder();
      var BranchType_1 = require_BranchType();
      var CommandType_1 = require_CommandType();
      var MetadataProperty_1 = require_MetadataProperty();
      var Player_1 = require_Player();
      var NoteType_1 = require_NoteType();
      var Style_1 = require_Style();
      var CourseVariant = class {
        constructor() {
          this.scoreInit = 390;
          this.scoreDiff = 100;
          this._singleCommands = [];
          this._player1Commands = [];
          this._player2Commands = [];
          this.balloonCounts = [];
          this.branchBalloonCounts = {
            [BranchType_1.BranchType.Normal]: [],
            [BranchType_1.BranchType.Advanced]: [],
            [BranchType_1.BranchType.Master]: []
          };
          this.style = Style_1.Style.Single;
          this.hiddenBranches = false;
          this.gauges = [
            null,
            null,
            null
          ];
          this.hasBranches = false;
          this.hasBalloonNotes = false;
          this.hasDrumroll = false;
          this._currentBalloonNoteIndex = 0;
          this._currentBranchType = null;
        }
        /**
         * Returns the command buffer. When the course variant has the Single style,
         * the command buffer for the single variant will be returned. Otherwise, the
         * command buffer for the specified player will be returned, or the first
         * player's command buffer if no player is specified.
         *
         * @param player - An optional player to get the command buffer for when the
         * course variant has the Double style. If not provided, P1 commands will be
         * returned.
         * @returns An array of commands and note sequences.
         */
        getCommands(player) {
          if (this.style === Style_1.Style.Single) {
            return this._singleCommands;
          }
          switch (player) {
            case Player_1.Player.Player1:
            case void 0:
              return this._player1Commands;
            case Player_1.Player.Player2:
              return this._player2Commands;
          }
        }
        /**
         * Converts the course variant into TJA format.
         * @returns - A string that will correspond to a single course variant in a
         * TJA file.
         */
        toString() {
          const builder = new StringBuilder_1.StringBuilder().withSeparator("\n").append(`${MetadataProperty_1.CourseMetadataProperty.Style}:${this.style}`).append(`${MetadataProperty_1.CourseMetadataProperty.ScoreInit}:${this.scoreInit}`).append(`${MetadataProperty_1.CourseMetadataProperty.ScoreDiff}:${this.scoreDiff}`);
          if (this.balloonCounts.length > 0) {
            builder.append(`${MetadataProperty_1.CourseMetadataProperty.Balloon}:${this.balloonCounts.join(",")}`);
          }
          if (this.branchBalloonCounts[BranchType_1.BranchType.Normal].length > 0) {
            builder.append(`${MetadataProperty_1.CourseMetadataProperty.BalloonNor}:${this.branchBalloonCounts[BranchType_1.BranchType.Normal].join(",")}`);
          }
          if (this.branchBalloonCounts[BranchType_1.BranchType.Advanced].length > 0) {
            builder.append(`${MetadataProperty_1.CourseMetadataProperty.BalloonExp}:${this.branchBalloonCounts[BranchType_1.BranchType.Advanced].join(",")}`);
          }
          if (this.branchBalloonCounts[BranchType_1.BranchType.Master].length > 0) {
            builder.append(`${MetadataProperty_1.CourseMetadataProperty.BalloonMas}:${this.branchBalloonCounts[BranchType_1.BranchType.Advanced].join(",")}`);
          }
          if (this.hiddenBranches) {
            builder.append(`${MetadataProperty_1.CourseMetadataProperty.HiddenBranch}:1`);
          }
          if (this.gauges[0]) {
            builder.append(`${MetadataProperty_1.CourseMetadataProperty.Exam1}:${this.gauges[0].toString()}`);
          }
          if (this.gauges[1]) {
            builder.append(`${MetadataProperty_1.CourseMetadataProperty.Exam2}:${this.gauges[1].toString()}`);
          }
          if (this.gauges[2]) {
            builder.append(`${MetadataProperty_1.CourseMetadataProperty.Exam3}:${this.gauges[2].toString()}`);
          }
          if (this.gaugeIncrementMethod) {
            builder.append(`${MetadataProperty_1.CourseMetadataProperty.GaugeIncr}:${this.gaugeIncrementMethod}`);
          }
          if (this.gaugeTotal) {
            builder.append(`${MetadataProperty_1.CourseMetadataProperty.Total}:${this.gaugeTotal}`);
          }
          builder.append("\n");
          this._singleCommands.forEach((command) => {
            builder.append(command.toString());
          });
          this._player1Commands.forEach((command) => {
            builder.append(command.toString());
          });
          this._player2Commands.forEach((command) => {
            builder.append(command.toString());
          });
          return builder.toString();
        }
        /**
         * Add a command to the command buffer.
         * @param command - The command object to add.
         */
        addCommand(command, player) {
          if (this.style === Style_1.Style.Single) {
            this._singleCommands.push(command);
          } else {
            switch (player) {
              case Player_1.Player.Player1:
                this._player1Commands.push(command);
                break;
              case Player_1.Player.Player2:
                this._player2Commands.push(command);
                break;
            }
          }
          this.postProcessCommand(command);
        }
        /**
         * Checks whether all command buffers are empty. This is useful for filtering
         * out course variants that aren't actually part of the TJA file.
         * @returns True if all command buffers are empty, false otherwise.
         */
        isEmpty() {
          return this._singleCommands.length === 0 && this._player1Commands.length === 0 && this._player2Commands.length === 0;
        }
        /**
         * Sets the gauge at a given index to the provided gauge data.
         * @param index - The index to set.
         * @param gauge - The gauge data.
         */
        setGauge(index, gauge) {
          this.gauges[index] = gauge;
        }
        postProcessCommand(command) {
          if (command.commandType === CommandType_1.CommandType.BranchStart) {
            this.hasBranches = true;
            return;
          }
          if (command.commandType === CommandType_1.CommandType.BranchMarker) {
            this._currentBranchType = command.branchType;
            this._currentBalloonNoteIndex = 0;
            return;
          }
          if (command.commandType === CommandType_1.CommandType.NoteSequence) {
            for (const note of command.notes) {
              this.postProcessNote(note);
            }
            return;
          }
        }
        postProcessNote(note) {
          if (note.noteType === NoteType_1.NoteType.Balloon || note.noteType === NoteType_1.NoteType.Kusudama) {
            return this.postProcessBalloonNote(note);
          }
          if (note.noteType === NoteType_1.NoteType.Drumroll || note.noteType === NoteType_1.NoteType.DRUMROLL) {
            this.hasDrumroll = true;
            return;
          }
        }
        postProcessBalloonNote(note) {
          this.hasBalloonNotes = true;
          let counts = this.balloonCounts;
          if (this._currentBranchType) {
            counts = this.branchBalloonCounts[this._currentBranchType];
          }
          note.count = this.getBalloonCount(counts, this._currentBalloonNoteIndex);
        }
        getBalloonCount(source, index) {
          if (index >= source.length) {
            return 0;
          }
          return source[index];
        }
      };
      exports.CourseVariant = CourseVariant;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/Difficulty.js
  var require_Difficulty = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/Difficulty.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Difficulty = void 0;
      var Difficulty = class _Difficulty {
        constructor(id, name) {
          this._id = id;
          this._name = name;
        }
        static fromId(id, strict = true) {
          const difficulty = _Difficulty._values.find((d) => d._id === id);
          if (difficulty) {
            return difficulty;
          }
          if (strict) {
            throw new Error(`Invalid difficulty id: ${id}`);
          }
        }
        static fromName(name, strict = true) {
          const difficulty = _Difficulty._values.find((d) => d._name.toLowerCase() === name.toLowerCase());
          if (difficulty) {
            return difficulty;
          }
          if (strict) {
            throw new Error(`Invalid difficulty name: ${name}`);
          }
        }
        static fromRaw(raw, strict = true) {
          const parsedValue = parseInt(raw, 10);
          return isNaN(parsedValue) ? _Difficulty.fromName(raw, strict) : _Difficulty.fromId(parsedValue, strict);
        }
        toString() {
          return this._name;
        }
      };
      exports.Difficulty = Difficulty;
      Difficulty.Easy = new Difficulty(0, "Easy");
      Difficulty.Normal = new Difficulty(1, "Normal");
      Difficulty.Hard = new Difficulty(2, "Hard");
      Difficulty.Oni = new Difficulty(3, "Oni");
      Difficulty.Edit = new Difficulty(4, "Edit");
      Difficulty.Ura = new Difficulty(4, "Ura");
      Difficulty.InnerOni = new Difficulty(4, "InnerOni");
      Difficulty.Tower = new Difficulty(5, "Tower");
      Difficulty.Dan = new Difficulty(6, "Dan");
      Difficulty._values = [
        Difficulty.Easy,
        Difficulty.Normal,
        Difficulty.Hard,
        Difficulty.Oni,
        Difficulty.Edit,
        Difficulty.Ura,
        Difficulty.InnerOni,
        Difficulty.Tower,
        Difficulty.Dan
      ];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/Course.js
  var require_Course = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/Course.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Course = void 0;
      var StringBuilder_1 = require_StringBuilder();
      var CommandType_1 = require_CommandType();
      var MetadataProperty_1 = require_MetadataProperty();
      var Player_1 = require_Player();
      var CourseVariant_1 = require_CourseVariant();
      var Difficulty_1 = require_Difficulty();
      var Style_1 = require_Style();
      var Course = class {
        constructor() {
          this.difficulty = Difficulty_1.Difficulty.Oni;
          this.stars = 10;
          this.singleCourse = new CourseVariant_1.CourseVariant();
          this.doubleCourse = new CourseVariant_1.CourseVariant();
          this._activeCourseStyle = Style_1.Style.Single;
          this._activePlayer = Player_1.Player.Player1;
        }
        /**
         * Returns the currently selected course variant. It is determined by the
         * active course style.
         */
        get activeCourse() {
          return this._activeCourseStyle === Style_1.Style.Single ? this.singleCourse : this.doubleCourse;
        }
        /**
         * Sets the active course style. The `activeCourse` getter will return the
         * course variant based on this style value.
         */
        set activeCourseStyle(style) {
          this._activeCourseStyle = style;
        }
        /**
         * Add a command to the command buffer of the active course variant.
         * @param command - The command object to add.
         */
        addCommand(command) {
          if (command.commandType === CommandType_1.CommandType.Start) {
            const startCommand = command;
            if (startCommand.player) {
              this._activePlayer = startCommand.player;
            }
          }
          this.activeCourse.addCommand(command, this._activePlayer);
        }
        /**
         * Sets the gauge at a given index to the provided gauge data on the active
         * course variant.
         * @param index - The index to set.
         * @param gauge - The gauge data.
         */
        setGauge(index, gauge) {
          this.activeCourse.setGauge(index, gauge);
        }
        /**
         * Converts the course data into TJA format.
         * @returns - A string that will correspond to a single course in a TJA file.
         */
        toString() {
          const builder = new StringBuilder_1.StringBuilder().withSeparator("\n").append(`${MetadataProperty_1.CourseMetadataProperty.Course}:${this.difficulty}`).append(`${MetadataProperty_1.CourseMetadataProperty.Level}:${this.stars}`).append("\n");
          if (!this.singleCourse.isEmpty()) {
            builder.append(this.singleCourse.toString()).append("\n");
          }
          if (!this.doubleCourse.isEmpty()) {
            builder.append(this.doubleCourse.toString()).append("\n");
          }
          return builder.toString();
        }
      };
      exports.Course = Course;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/song/lib/Game.js
  var require_Game = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/song/lib/Game.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Game = void 0;
      var Game = class _Game {
        constructor(name) {
          this._name = name;
        }
        static fromName(name, strict = true) {
          const item = _Game._values.find((it2) => it2._name === name);
          if (item) {
            return item;
          }
          if (strict) {
            throw new Error(`Invalid game: ${name}`);
          }
        }
        static fromRaw(raw, strict = true) {
          return _Game.fromName(raw, strict);
        }
        toString() {
          return this._name;
        }
      };
      exports.Game = Game;
      Game.Taiko = new Game("Taiko");
      Game.Jube = new Game("Jube");
      Game._values = [Game.Taiko, Game.Jube];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/song/lib/ScoreMode.js
  var require_ScoreMode = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/song/lib/ScoreMode.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ScoreMode = void 0;
      var ScoreMode = class _ScoreMode {
        constructor(id) {
          this._id = id;
        }
        static fromId(id, strict = true) {
          const item = _ScoreMode._values.find((it2) => it2._id === id);
          if (item) {
            return item;
          }
          if (strict) {
            throw new Error(`Invalid score mode id: ${id}`);
          }
        }
        static fromRaw(raw, strict = true) {
          const parsedValue = parseInt(raw, 10);
          return _ScoreMode.fromId(parsedValue, strict);
        }
        toString() {
          return this._id;
        }
      };
      exports.ScoreMode = ScoreMode;
      ScoreMode.AC_1_TO_AC_7 = new ScoreMode(0);
      ScoreMode.AC_8_TO_AC_14 = new ScoreMode(1);
      ScoreMode.AC_0 = new ScoreMode(2);
      ScoreMode._values = [
        ScoreMode.AC_1_TO_AC_7,
        ScoreMode.AC_8_TO_AC_14,
        ScoreMode.AC_0
      ];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/song/lib/Side.js
  var require_Side = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/song/lib/Side.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Side = void 0;
      var Side = class _Side {
        constructor(id) {
          this._id = id;
        }
        static fromId(id, strict = true) {
          const item = _Side._values.find((it2) => it2._id === id);
          if (item) {
            return item;
          }
          if (strict) {
            throw new Error(`Invalid side id: ${id}`);
          }
        }
        static fromRaw(raw, strict = true) {
          const parsedValue = parseInt(raw, 10);
          return _Side.fromId(parsedValue, strict);
        }
        toString() {
          return this._id;
        }
      };
      exports.Side = Side;
      Side.Normal = new Side(1);
      Side.Ex = new Side(2);
      Side.Both = new Side(3);
      Side._values = [Side.Normal, Side.Ex, Side.Both];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/song/Song.js
  var require_Song = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/song/Song.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Song = void 0;
      var StringBuilder_1 = require_StringBuilder();
      var MetadataProperty_1 = require_MetadataProperty();
      var Game_1 = require_Game();
      var ScoreMode_1 = require_ScoreMode();
      var Side_1 = require_Side();
      var Song = class {
        constructor() {
          this.title = "untitled";
          this.localizedTitle = {};
          this.localizedSubtitle = {};
          this.bpm = 120;
          this.offset = 0;
          this.demoStart = 0;
          this.scoreMode = ScoreMode_1.ScoreMode.AC_1_TO_AC_7;
          this.songVolume = 100;
          this.soundEffectVolume = 100;
          this.side = Side_1.Side.Both;
          this.life = 0;
          this.game = Game_1.Game.Taiko;
          this.courses = [];
        }
        /**
         * Adds a course to the song data.
         *
         * @param course - The course object to add.
         */
        addCourse(course) {
          this.courses.push(course);
        }
        /**
         * Converts the song data into TJA format.
         * @returns - A string that will correspond to a TJA file.
         */
        toString() {
          const builder = new StringBuilder_1.StringBuilder().withSeparator("\n").append(`${MetadataProperty_1.SongMetadataProperty.Title}:${this.title}`);
          if (this.localizedTitle.ja) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.TitleJA}:${this.localizedTitle.ja}`);
          }
          if (this.localizedTitle.en) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.TitleEN}:${this.localizedTitle.en}`);
          }
          if (this.localizedTitle.cn) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.TitleCN}:${this.localizedTitle.cn}`);
          }
          if (this.localizedTitle.tw) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.TitleTW}:${this.localizedTitle.tw}`);
          }
          if (this.localizedTitle.ko) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.TitleKO}:${this.localizedTitle.ko}`);
          }
          if (this.subtitle) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.Subtitle}:${this.subtitle}`);
          }
          if (this.localizedSubtitle.ja) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.SubtitleJA}:${this.localizedSubtitle.ja}`);
          }
          if (this.localizedSubtitle.en) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.SubtitleEN}:${this.localizedSubtitle.en}`);
          }
          if (this.localizedSubtitle.cn) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.SubtitleCN}:${this.localizedSubtitle.cn}`);
          }
          if (this.localizedSubtitle.tw) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.SubtitleTW}:${this.localizedSubtitle.tw}`);
          }
          if (this.localizedSubtitle.ko) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.SubtitleKO}:${this.localizedSubtitle.ko}`);
          }
          builder.append(`${MetadataProperty_1.SongMetadataProperty.BPM}:${this.bpm}`);
          if (this.wave) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.Wave}:${this.wave}`);
          }
          builder.append(`${MetadataProperty_1.SongMetadataProperty.Offset}:${this.offset}`).append(`${MetadataProperty_1.SongMetadataProperty.DemoStart}:${this.demoStart}`);
          if (this.genre) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.Genre}:${this.genre}`);
          }
          builder.append(`${MetadataProperty_1.SongMetadataProperty.ScoreMode}:${this.scoreMode}`);
          if (this.maker) {
            if (this.maker.url) {
              builder.append(`${MetadataProperty_1.SongMetadataProperty.Maker}:${this.maker.name} <${this.maker.url}>`);
            } else {
              builder.append(`${MetadataProperty_1.SongMetadataProperty.Maker}:${this.maker.name}`);
            }
          }
          if (this.lyricsFilePath) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.Lyrics}:${this.lyricsFilePath}`);
          }
          builder.append(`${MetadataProperty_1.SongMetadataProperty.SongVol}:${this.songVolume}`).append(`${MetadataProperty_1.SongMetadataProperty.SEVol}:${this.soundEffectVolume}`).append(`${MetadataProperty_1.SongMetadataProperty.Side}:${this.side}`).append(`${MetadataProperty_1.SongMetadataProperty.Life}:${this.life}`).append(`${MetadataProperty_1.SongMetadataProperty.Game}:${this.game}`);
          if (this.headScroll) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.HeadScroll}:${this.headScroll}`);
          }
          if (this.backgroundImagePath) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.BGImage}:${this.backgroundImagePath}`);
          }
          if (this.backgroundMoviePath) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.BGMovie}:${this.backgroundMoviePath}`);
          }
          if (this.movieOffset) {
            builder.append(`${MetadataProperty_1.SongMetadataProperty.MovieOffset}:${this.movieOffset}`);
          }
          builder.append("\n");
          this.courses.forEach((course) => {
            builder.append(course.toString());
          });
          builder.append("\n");
          return builder.toString();
        }
      };
      exports.Song = Song;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/utils/Queue.js
  var require_Queue = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/utils/Queue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Queue = void 0;
      var Queue = class _Queue {
        constructor() {
          this._queue = [];
        }
        get isEmpty() {
          return this._queue.length === 0;
        }
        enqueue(item) {
          this._queue.push(item);
        }
        dequeue() {
          return this._queue.shift();
        }
        peek() {
          if (this._queue.length !== 0) {
            return this._queue[0];
          }
        }
        clear() {
          this._queue = [];
        }
        static fromArray(arr) {
          const queue = new _Queue();
          for (const item of arr) {
            queue.enqueue(item);
          }
          return queue;
        }
      };
      exports.Queue = Queue;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/Command.js
  var require_Command = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/Command.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Command = void 0;
      var Command = class {
        constructor(commandType) {
          this.commandType = commandType;
        }
        toString() {
          return `#${this.commandType}`;
        }
      };
      exports.Command = Command;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/StartCommand.js
  var require_StartCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/StartCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StartCommand = void 0;
      var Player_1 = require_Player();
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var StartCommand = class _StartCommand extends Command_1.Command {
        constructor(player) {
          super(CommandType_1.CommandType.Start);
          this.player = player;
        }
        static parse(args) {
          const command = new _StartCommand();
          if (args.length > 0) {
            const player = args[0].toUpperCase();
            switch (player) {
              case "P1":
                command.player = Player_1.Player.Player1;
                break;
              case "P2":
                command.player = Player_1.Player.Player2;
                break;
            }
          }
          return command;
        }
        toString() {
          let playerString;
          switch (this.player) {
            case Player_1.Player.Player1:
              playerString = "P1";
              break;
            case Player_1.Player.Player2:
              playerString = "P2";
              break;
          }
          if (playerString) {
            return `${super.toString()} ${playerString}`;
          } else {
            return super.toString();
          }
        }
      };
      exports.StartCommand = StartCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/EndCommand.js
  var require_EndCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/EndCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.EndCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var EndCommand = class _EndCommand extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.End);
        }
        static parse(_args) {
          return new _EndCommand();
        }
      };
      exports.EndCommand = EndCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/MeasureValue.js
  var require_MeasureValue = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/MeasureValue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MeasureValue = void 0;
      var MeasureValue = class {
        constructor(numerator, denominator) {
          this.numerator = numerator;
          this.denominator = denominator;
        }
        toString() {
          return `${this.numerator}/${this.denominator}`;
        }
        /**
         * Get the measure value as a floating point number.
         */
        get fraction() {
          return this.numerator / this.denominator;
        }
      };
      exports.MeasureValue = MeasureValue;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/MeasureCommand.js
  var require_MeasureCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/MeasureCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MeasureCommand = void 0;
      var MeasureValue_1 = require_MeasureValue();
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var MeasureCommand = class _MeasureCommand extends Command_1.Command {
        constructor(value) {
          super(CommandType_1.CommandType.Measure);
          this.value = value;
        }
        static parse(args) {
          if (args.length === 0) {
            return void 0;
          }
          const value = args[0].split("/").map((v2) => parseInt(v2.trim(), 10)).filter((v2) => !isNaN(v2));
          if (value.length !== 2) {
            return void 0;
          }
          const measureValue = new MeasureValue_1.MeasureValue(value[0], value[1]);
          return new _MeasureCommand(measureValue);
        }
        toString() {
          return `${super.toString()} ${this.value.toString()}`;
        }
      };
      exports.MeasureCommand = MeasureCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BPMChangeCommand.js
  var require_BPMChangeCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BPMChangeCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BPMChangeCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var BPMChangeCommand = class _BPMChangeCommand extends Command_1.Command {
        constructor(value) {
          super(CommandType_1.CommandType.BPMChange);
          this.value = value;
        }
        static parse(args) {
          if (args.length === 0) {
            return void 0;
          }
          const value = parseInt(args[0], 10);
          if (isNaN(value)) {
            return void 0;
          }
          return new _BPMChangeCommand(value);
        }
        toString() {
          return `${super.toString()} ${this.value}`;
        }
      };
      exports.BPMChangeCommand = BPMChangeCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/DelayCommand.js
  var require_DelayCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/DelayCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DelayCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var DelayCommand = class _DelayCommand extends Command_1.Command {
        constructor(value) {
          super(CommandType_1.CommandType.Delay);
          this.value = value;
        }
        static parse(args) {
          if (args.length === 0) {
            return void 0;
          }
          const value = parseFloat(args[0]);
          if (isNaN(value)) {
            return void 0;
          }
          return new _DelayCommand(value);
        }
        toString() {
          return `${super.toString()} ${this.value}`;
        }
      };
      exports.DelayCommand = DelayCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/ScrollCommand.js
  var require_ScrollCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/ScrollCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ScrollCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var ScrollCommand = class _ScrollCommand extends Command_1.Command {
        constructor(value) {
          super(CommandType_1.CommandType.Scroll);
          this.value = value;
        }
        static parse(args) {
          if (args.length === 0) {
            return void 0;
          }
          const value = parseFloat(args[0]);
          if (isNaN(value)) {
            return void 0;
          }
          return new _ScrollCommand(value);
        }
        toString() {
          return `${super.toString()} ${this.value}`;
        }
      };
      exports.ScrollCommand = ScrollCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/GoGoStartCommand.js
  var require_GoGoStartCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/GoGoStartCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.GoGoStartCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var GoGoStartCommand = class _GoGoStartCommand extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.GoGoStart);
        }
        static parse(_args) {
          return new _GoGoStartCommand();
        }
      };
      exports.GoGoStartCommand = GoGoStartCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/GoGoEndCommand.js
  var require_GoGoEndCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/GoGoEndCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.GoGoEndCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var GoGoEndCommand = class _GoGoEndCommand extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.GoGoEnd);
        }
        static parse(_args) {
          return new _GoGoEndCommand();
        }
      };
      exports.GoGoEndCommand = GoGoEndCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BarLineOffCommand.js
  var require_BarLineOffCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BarLineOffCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BarLineOffCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var BarLineOffCommand = class _BarLineOffCommand extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.BarLineOff);
        }
        static parse(_args) {
          return new _BarLineOffCommand();
        }
      };
      exports.BarLineOffCommand = BarLineOffCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BarLineOnCommand.js
  var require_BarLineOnCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BarLineOnCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BarLineOnCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var BarLineOnCommand = class _BarLineOnCommand extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.BarLineOn);
        }
        static parse(_args) {
          return new _BarLineOnCommand();
        }
      };
      exports.BarLineOnCommand = BarLineOnCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/lib/BranchRequirementType.js
  var require_BranchRequirementType = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/lib/BranchRequirementType.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BranchRequirementType = void 0;
      var BranchRequirementType = class _BranchRequirementType {
        constructor(id) {
          this._id = id;
        }
        static fromId(id, strict = true) {
          if (id === "r") {
            return _BranchRequirementType.Drumroll;
          }
          return _BranchRequirementType.Accuracy;
        }
        static fromRaw(raw, strict = true) {
          return _BranchRequirementType.fromId(raw, strict);
        }
        toString() {
          return this._id;
        }
      };
      exports.BranchRequirementType = BranchRequirementType;
      BranchRequirementType.Drumroll = new BranchRequirementType("r");
      BranchRequirementType.Accuracy = new BranchRequirementType("p");
      BranchRequirementType._values = [
        BranchRequirementType.Drumroll,
        BranchRequirementType.Accuracy
      ];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BranchStartCommand.js
  var require_BranchStartCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BranchStartCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BranchStartCommand = void 0;
      var Command_1 = require_Command();
      var BranchRequirementType_1 = require_BranchRequirementType();
      var CommandType_1 = require_CommandType();
      var BranchStartCommand = class _BranchStartCommand extends Command_1.Command {
        constructor(requirementType, advancedRequirement, masterRequirement) {
          super(CommandType_1.CommandType.BranchStart);
          this.requirementType = requirementType;
          this.advancedRequirement = advancedRequirement;
          this.masterRequirement = masterRequirement;
        }
        static parse(args, strict) {
          if (args.length === 0) {
            return void 0;
          }
          const components = args[0].split(",");
          if (components.length !== 3) {
            return void 0;
          }
          const requirementType = BranchRequirementType_1.BranchRequirementType.fromRaw(components[0], strict);
          if (!requirementType) {
            return void 0;
          }
          const advancedRequirement = parseInt(components[1], 10);
          if (isNaN(advancedRequirement)) {
            return void 0;
          }
          const masterRequirement = parseInt(components[2], 10);
          if (isNaN(masterRequirement)) {
            return void 0;
          }
          return new _BranchStartCommand(requirementType, advancedRequirement, masterRequirement);
        }
        toString() {
          return `${super.toString()} ${this.requirementType},${this.advancedRequirement},${this.masterRequirement}`;
        }
      };
      exports.BranchStartCommand = BranchStartCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BranchEndCommand.js
  var require_BranchEndCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BranchEndCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BranchEndCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var BranchEndCommand = class _BranchEndCommand extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.BranchEnd);
        }
        static parse(_args) {
          return new _BranchEndCommand();
        }
      };
      exports.BranchEndCommand = BranchEndCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/SectionCommand.js
  var require_SectionCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/SectionCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SectionCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var SectionCommand = class _SectionCommand extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.Section);
        }
        static parse(_args) {
          return new _SectionCommand();
        }
      };
      exports.SectionCommand = SectionCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/LyricCommand.js
  var require_LyricCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/LyricCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LyricCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var LyricCommand = class _LyricCommand extends Command_1.Command {
        constructor(line) {
          super(CommandType_1.CommandType.Lyric);
          this.line = line;
        }
        static parse(args) {
          return new _LyricCommand(args.join(" "));
        }
        toString() {
          return `${super.toString()} ${this.line}`;
        }
      };
      exports.LyricCommand = LyricCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/LevelHoldCommand.js
  var require_LevelHoldCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/LevelHoldCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LevelHoldCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var LevelHoldCommand = class _LevelHoldCommand extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.LevelHold);
        }
        static parse(_args) {
          return new _LevelHoldCommand();
        }
      };
      exports.LevelHoldCommand = LevelHoldCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BMScrollCommand.js
  var require_BMScrollCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BMScrollCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BMScrollCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var BMScrollCommand = class _BMScrollCommand extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.BMScroll);
        }
        static parse(_args) {
          return new _BMScrollCommand();
        }
      };
      exports.BMScrollCommand = BMScrollCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/HBScrollCommand.js
  var require_HBScrollCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/HBScrollCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.HBScrollCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var HBScrollCommand = class _HBScrollCommand extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.HBScroll);
        }
        static parse(_args) {
          return new _HBScrollCommand();
        }
      };
      exports.HBScrollCommand = HBScrollCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/NextSongCommand.js
  var require_NextSongCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/NextSongCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NextSongCommand = void 0;
      var regex_1 = require_regex();
      var Course_1 = require_Course();
      var Difficulty_1 = require_Difficulty();
      var Song_1 = require_Song();
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var NextSongCommand = class _NextSongCommand extends Command_1.Command {
        constructor(song) {
          super(CommandType_1.CommandType.BMScroll);
          this.song = song;
        }
        static parse(args) {
          if (args.length === 0) {
            return void 0;
          }
          const components = args[0].replace(regex_1.ESCAPED_COMMA_REGEX, "|").split(",").map((c2) => c2.replace(regex_1.PIPE_REGEX, ","));
          if (components.length < 6) {
            return void 0;
          }
          const song = new Song_1.Song();
          song.title = components[0];
          song.subtitle = components[1];
          song.genre = components[2];
          song.wave = components[3];
          const course = new Course_1.Course();
          course.difficulty = Difficulty_1.Difficulty.Dan;
          course.activeCourse.scoreInit = parseInt(components[4], 10);
          course.activeCourse.scoreDiff = parseInt(components[5], 10);
          song.addCourse(course);
          return new _NextSongCommand(song);
        }
        toString() {
          const songData = [
            this.song.title,
            this.song.subtitle,
            this.song.genre,
            this.song.wave,
            this.song.courses[0].activeCourse.scoreInit,
            this.song.courses[0].activeCourse.scoreDiff
          ].join(",");
          return `${super.toString()} ${songData}`;
        }
      };
      exports.NextSongCommand = NextSongCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/common/ScrollDirection.js
  var require_ScrollDirection = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/common/ScrollDirection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ScrollDirection = void 0;
      var ScrollDirection = class _ScrollDirection {
        constructor(id) {
          this._id = id;
        }
        static fromId(id, strict = true) {
          const item = _ScrollDirection._values.find((it2) => it2._id === id);
          if (item) {
            return item;
          }
          if (strict) {
            throw new Error(`Invalid ScrollDirection id: ${id}`);
          }
        }
        toString() {
          return this._id;
        }
        static fromRaw(raw, strict = true) {
          const parsedValue = parseInt(raw, 10);
          return _ScrollDirection.fromId(parsedValue, strict);
        }
      };
      exports.ScrollDirection = ScrollDirection;
      ScrollDirection.FromRight = new ScrollDirection(0);
      ScrollDirection.FromAbove = new ScrollDirection(1);
      ScrollDirection.FromBelow = new ScrollDirection(2);
      ScrollDirection.FromTopRight = new ScrollDirection(3);
      ScrollDirection.FromBottomRight = new ScrollDirection(4);
      ScrollDirection.FromLeft = new ScrollDirection(5);
      ScrollDirection.FromTopLeft = new ScrollDirection(6);
      ScrollDirection.FromBottomLeft = new ScrollDirection(7);
      ScrollDirection._values = [
        ScrollDirection.FromRight,
        ScrollDirection.FromAbove,
        ScrollDirection.FromBelow,
        ScrollDirection.FromTopRight,
        ScrollDirection.FromBottomRight,
        ScrollDirection.FromLeft,
        ScrollDirection.FromTopLeft,
        ScrollDirection.FromBottomLeft
      ];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/DirectionCommand.js
  var require_DirectionCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/DirectionCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DirectionCommand = void 0;
      var ScrollDirection_1 = require_ScrollDirection();
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var DirectionCommand = class _DirectionCommand extends Command_1.Command {
        constructor(direction) {
          super(CommandType_1.CommandType.Direction);
          this.direction = direction;
        }
        static parse(args, strict) {
          if (args.length === 0) {
            return void 0;
          }
          const direction = ScrollDirection_1.ScrollDirection.fromRaw(args[0], strict);
          if (!direction) {
            return void 0;
          }
          return new _DirectionCommand(direction);
        }
        toString() {
          return `${super.toString()} ${this.direction}`;
        }
      };
      exports.DirectionCommand = DirectionCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/SuddenCommand.js
  var require_SuddenCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/SuddenCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SuddenCommand = void 0;
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var SuddenCommand = class _SuddenCommand extends Command_1.Command {
        constructor(appearanceTime, movementWaitTime) {
          super(CommandType_1.CommandType.Sudden);
          this.appearanceTime = appearanceTime;
          this.movementWaitTime = movementWaitTime;
        }
        static parse(args) {
          if (args.length !== 2) {
            return void 0;
          }
          const appearanceTime = parseFloat(args[0]);
          if (isNaN(appearanceTime)) {
            return void 0;
          }
          const movementWaitTime = parseFloat(args[1]);
          if (isNaN(movementWaitTime)) {
            return void 0;
          }
          return new _SuddenCommand(appearanceTime, movementWaitTime);
        }
        toString() {
          return `${super.toString()} ${this.appearanceTime} ${this.movementWaitTime}`;
        }
      };
      exports.SuddenCommand = SuddenCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/common/JPosScrollDirection.js
  var require_JPosScrollDirection = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/common/JPosScrollDirection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.JPosScrollDirection = void 0;
      var JPosScrollDirection = class _JPosScrollDirection {
        constructor(id) {
          this._id = id;
        }
        static fromId(id, strict = true) {
          const item = _JPosScrollDirection._values.find((it2) => it2._id === id);
          if (item) {
            return item;
          }
          if (strict) {
            throw new Error(`Invalid JPosScrollDirection id: ${id}`);
          }
        }
        static fromRaw(raw, strict = true) {
          const parsedValue = parseInt(raw, 10);
          return _JPosScrollDirection.fromId(parsedValue, strict);
        }
        toString() {
          return this._id;
        }
      };
      exports.JPosScrollDirection = JPosScrollDirection;
      JPosScrollDirection.Left = new JPosScrollDirection(0);
      JPosScrollDirection.Right = new JPosScrollDirection(1);
      JPosScrollDirection._values = [
        JPosScrollDirection.Left,
        JPosScrollDirection.Right
      ];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/JPosScrollCommand.js
  var require_JPosScrollCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/JPosScrollCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.JPosScrollCommand = void 0;
      var JPosScrollDirection_1 = require_JPosScrollDirection();
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var JPosScrollCommand = class _JPosScrollCommand extends Command_1.Command {
        constructor(time, distance, direction) {
          super(CommandType_1.CommandType.JPosScroll);
          this.time = time;
          this.distance = distance;
          this.direction = direction;
        }
        static parse(args) {
          if (args.length !== 3) {
            return void 0;
          }
          const time = parseFloat(args[0]);
          if (isNaN(time)) {
            return void 0;
          }
          const distance = parseFloat(args[1]);
          if (isNaN(distance)) {
            return void 0;
          }
          const direction = JPosScrollDirection_1.JPosScrollDirection.fromRaw(args[2]);
          if (!direction) {
            return void 0;
          }
          return new _JPosScrollCommand(time, distance, direction);
        }
        toString() {
          return `${super.toString()} ${this.time} ${this.distance} ${this.direction}`;
        }
      };
      exports.JPosScrollCommand = JPosScrollCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BranchMarkerCommand.js
  var require_BranchMarkerCommand = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/BranchMarkerCommand.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MasterBranchMarkerCommand = exports.AdvancedBranchMarkerCommand = exports.NormalBranchMarkerCommand = exports.BranchMarkerCommand = void 0;
      var Command_1 = require_Command();
      var BranchType_1 = require_BranchType();
      var CommandType_1 = require_CommandType();
      var BranchMarkerCommand = class extends Command_1.Command {
        constructor(branchType) {
          super(CommandType_1.CommandType.BranchMarker);
          this.branchType = branchType;
        }
        static parse(branchType) {
          switch (branchType) {
            case BranchType_1.BranchType.Normal:
              return new NormalBranchMarkerCommand();
            case BranchType_1.BranchType.Advanced:
              return new AdvancedBranchMarkerCommand();
            case BranchType_1.BranchType.Master:
              return new MasterBranchMarkerCommand();
          }
        }
        toString() {
          return `#${this.branchType.toString()}`;
        }
      };
      exports.BranchMarkerCommand = BranchMarkerCommand;
      var NormalBranchMarkerCommand = class extends BranchMarkerCommand {
        constructor() {
          super(BranchType_1.BranchType.Normal);
        }
      };
      exports.NormalBranchMarkerCommand = NormalBranchMarkerCommand;
      var AdvancedBranchMarkerCommand = class extends BranchMarkerCommand {
        constructor() {
          super(BranchType_1.BranchType.Advanced);
        }
      };
      exports.AdvancedBranchMarkerCommand = AdvancedBranchMarkerCommand;
      var MasterBranchMarkerCommand = class extends BranchMarkerCommand {
        constructor() {
          super(BranchType_1.BranchType.Master);
        }
      };
      exports.MasterBranchMarkerCommand = MasterBranchMarkerCommand;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/Note.js
  var require_Note = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/Note.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Note = void 0;
      var NoteType_1 = require_NoteType();
      var Note = class {
        constructor(noteType) {
          this.noteType = noteType;
        }
        get isBlank() {
          return this.noteType === NoteType_1.NoteType.Blank;
        }
        get isDon() {
          return this.noteType === NoteType_1.NoteType.Don;
        }
        get isKa() {
          return this.noteType === NoteType_1.NoteType.Ka;
        }
        get isBigDon() {
          return this.noteType === NoteType_1.NoteType.DON;
        }
        get isBigKa() {
          return this.noteType === NoteType_1.NoteType.KA;
        }
        get isDrumroll() {
          return this.noteType === NoteType_1.NoteType.Drumroll;
        }
        get isBigDrumroll() {
          return this.noteType === NoteType_1.NoteType.DRUMROLL;
        }
        get isBalloon() {
          return this.noteType === NoteType_1.NoteType.Balloon;
        }
        get isEndOfDrumroll() {
          return this.noteType === NoteType_1.NoteType.DrumrollEnd;
        }
        get isKusudama() {
          return this.noteType === NoteType_1.NoteType.Kusudama;
        }
        get isMultiDon() {
          return this.noteType === NoteType_1.NoteType.MultiDon;
        }
        get isMultiKa() {
          return this.noteType === NoteType_1.NoteType.MultiKa;
        }
        get isADLIB() {
          return this.noteType === NoteType_1.NoteType.ADLIB;
        }
        get isMeasureEnd() {
          return this.noteType === NoteType_1.NoteType.MeasureEnd;
        }
        toString() {
          return this.noteType.toString();
        }
      };
      exports.Note = Note;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/BlankNote.js
  var require_BlankNote = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/BlankNote.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BlankNote = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var BlankNote = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.Blank);
        }
      };
      exports.BlankNote = BlankNote;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/Don.js
  var require_Don = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/Don.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Don = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var Don = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.Don);
        }
      };
      exports.Don = Don;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/Ka.js
  var require_Ka = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/Ka.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Ka = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var Ka2 = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.Ka);
        }
      };
      exports.Ka = Ka2;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/BigDon.js
  var require_BigDon = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/BigDon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BigDon = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var BigDon = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.DON);
        }
      };
      exports.BigDon = BigDon;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/BigKa.js
  var require_BigKa = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/BigKa.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BigKa = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var BigKa = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.KA);
        }
      };
      exports.BigKa = BigKa;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/Drumroll.js
  var require_Drumroll = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/Drumroll.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Drumroll = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var Drumroll = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.Drumroll);
        }
      };
      exports.Drumroll = Drumroll;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/BigDrumroll.js
  var require_BigDrumroll = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/BigDrumroll.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BigDrumroll = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var BigDrumroll = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.DRUMROLL);
        }
      };
      exports.BigDrumroll = BigDrumroll;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/lib/CountableDrumrollNote.js
  var require_CountableDrumrollNote = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/lib/CountableDrumrollNote.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CountableDrumrollNote = void 0;
      var Note_1 = require_Note();
      var CountableDrumrollNote = class extends Note_1.Note {
        constructor() {
          super(...arguments);
          this._count = 0;
        }
        get count() {
          return this._count;
        }
        set count(count) {
          this._count = count;
        }
      };
      exports.CountableDrumrollNote = CountableDrumrollNote;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/Balloon.js
  var require_Balloon = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/Balloon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Balloon = void 0;
      var NoteType_1 = require_NoteType();
      var CountableDrumrollNote_1 = require_CountableDrumrollNote();
      var Balloon = class extends CountableDrumrollNote_1.CountableDrumrollNote {
        constructor() {
          super(NoteType_1.NoteType.Balloon);
        }
      };
      exports.Balloon = Balloon;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/DrumrollEnd.js
  var require_DrumrollEnd = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/DrumrollEnd.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DrumrollEnd = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var DrumrollEnd = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.DrumrollEnd);
        }
      };
      exports.DrumrollEnd = DrumrollEnd;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/Kusudama.js
  var require_Kusudama = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/Kusudama.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Kusudama = void 0;
      var NoteType_1 = require_NoteType();
      var CountableDrumrollNote_1 = require_CountableDrumrollNote();
      var Kusudama = class extends CountableDrumrollNote_1.CountableDrumrollNote {
        constructor() {
          super(NoteType_1.NoteType.Kusudama);
        }
      };
      exports.Kusudama = Kusudama;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/MultiDon.js
  var require_MultiDon = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/MultiDon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MultiDon = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var MultiDon = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.MultiDon);
        }
      };
      exports.MultiDon = MultiDon;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/MultiKa.js
  var require_MultiKa = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/MultiKa.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MultiKa = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var MultiKa = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.MultiKa);
        }
      };
      exports.MultiKa = MultiKa;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/ADLIB.js
  var require_ADLIB = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/ADLIB.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ADLIB = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var ADLIB = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.ADLIB);
        }
      };
      exports.ADLIB = ADLIB;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/MeasureEnd.js
  var require_MeasureEnd = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/MeasureEnd.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MeasureEnd = void 0;
      var Note_1 = require_Note();
      var NoteType_1 = require_NoteType();
      var MeasureEnd = class extends Note_1.Note {
        constructor() {
          super(NoteType_1.NoteType.MeasureEnd);
        }
      };
      exports.MeasureEnd = MeasureEnd;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/index.js
  var require_types = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/types/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MeasureEnd = exports.ADLIB = exports.MultiKa = exports.MultiDon = exports.Kusudama = exports.DrumrollEnd = exports.Balloon = exports.BigDrumroll = exports.Drumroll = exports.BigKa = exports.BigDon = exports.Ka = exports.Don = exports.BlankNote = void 0;
      var BlankNote_1 = require_BlankNote();
      Object.defineProperty(exports, "BlankNote", { enumerable: true, get: function() {
        return BlankNote_1.BlankNote;
      } });
      var Don_1 = require_Don();
      Object.defineProperty(exports, "Don", { enumerable: true, get: function() {
        return Don_1.Don;
      } });
      var Ka_1 = require_Ka();
      Object.defineProperty(exports, "Ka", { enumerable: true, get: function() {
        return Ka_1.Ka;
      } });
      var BigDon_1 = require_BigDon();
      Object.defineProperty(exports, "BigDon", { enumerable: true, get: function() {
        return BigDon_1.BigDon;
      } });
      var BigKa_1 = require_BigKa();
      Object.defineProperty(exports, "BigKa", { enumerable: true, get: function() {
        return BigKa_1.BigKa;
      } });
      var Drumroll_1 = require_Drumroll();
      Object.defineProperty(exports, "Drumroll", { enumerable: true, get: function() {
        return Drumroll_1.Drumroll;
      } });
      var BigDrumroll_1 = require_BigDrumroll();
      Object.defineProperty(exports, "BigDrumroll", { enumerable: true, get: function() {
        return BigDrumroll_1.BigDrumroll;
      } });
      var Balloon_1 = require_Balloon();
      Object.defineProperty(exports, "Balloon", { enumerable: true, get: function() {
        return Balloon_1.Balloon;
      } });
      var DrumrollEnd_1 = require_DrumrollEnd();
      Object.defineProperty(exports, "DrumrollEnd", { enumerable: true, get: function() {
        return DrumrollEnd_1.DrumrollEnd;
      } });
      var Kusudama_1 = require_Kusudama();
      Object.defineProperty(exports, "Kusudama", { enumerable: true, get: function() {
        return Kusudama_1.Kusudama;
      } });
      var MultiDon_1 = require_MultiDon();
      Object.defineProperty(exports, "MultiDon", { enumerable: true, get: function() {
        return MultiDon_1.MultiDon;
      } });
      var MultiKa_1 = require_MultiKa();
      Object.defineProperty(exports, "MultiKa", { enumerable: true, get: function() {
        return MultiKa_1.MultiKa;
      } });
      var ADLIB_1 = require_ADLIB();
      Object.defineProperty(exports, "ADLIB", { enumerable: true, get: function() {
        return ADLIB_1.ADLIB;
      } });
      var MeasureEnd_1 = require_MeasureEnd();
      Object.defineProperty(exports, "MeasureEnd", { enumerable: true, get: function() {
        return MeasureEnd_1.MeasureEnd;
      } });
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/NoteFactory.js
  var require_NoteFactory = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/note/NoteFactory.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NoteFactory = void 0;
      var NoteType_1 = require_NoteType();
      var types_1 = require_types();
      var regex_1 = require_regex();
      var NoteFactory = class {
        static fromCourseValue(raw, strict = true) {
          switch (raw) {
            case NoteType_1.NoteType.Blank:
              return new types_1.BlankNote();
            case NoteType_1.NoteType.Don:
              return new types_1.Don();
            case NoteType_1.NoteType.Ka:
              return new types_1.Ka();
            case NoteType_1.NoteType.DON:
              return new types_1.BigDon();
            case NoteType_1.NoteType.KA:
              return new types_1.BigKa();
            case NoteType_1.NoteType.Drumroll:
              return new types_1.Drumroll();
            case NoteType_1.NoteType.DRUMROLL:
              return new types_1.BigDrumroll();
            case NoteType_1.NoteType.Balloon:
              return new types_1.Balloon();
            case NoteType_1.NoteType.DrumrollEnd:
              return new types_1.DrumrollEnd();
            case NoteType_1.NoteType.Kusudama:
              return new types_1.Kusudama();
            case NoteType_1.NoteType.MultiDon:
              return new types_1.MultiDon();
            case NoteType_1.NoteType.MultiKa:
              return new types_1.MultiKa();
            case NoteType_1.NoteType.ADLIB:
              return new types_1.MultiKa();
            case NoteType_1.NoteType.MeasureEnd:
              return new types_1.MeasureEnd();
          }
          if (raw.match(regex_1.NOTE_REGEX)) {
            return new types_1.BlankNote();
          }
          if (strict) {
            throw new TypeError(`Unsupported note type: ${raw}`);
          }
        }
      };
      exports.NoteFactory = NoteFactory;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/NoteSequence.js
  var require_NoteSequence = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/NoteSequence.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NoteSequence = void 0;
      var regex_1 = require_regex();
      var NoteFactory_1 = require_NoteFactory();
      var Command_1 = require_Command();
      var CommandType_1 = require_CommandType();
      var NoteSequence = class _NoteSequence extends Command_1.Command {
        constructor() {
          super(CommandType_1.CommandType.NoteSequence);
          this.notes = [];
        }
        addNote(note) {
          this.notes.push(note);
        }
        static parse(args, strict = true) {
          const command = new _NoteSequence();
          const rawNotes = args.join("").replace(regex_1.SPACE_REGEX, "").split("");
          rawNotes.forEach((rawNote) => {
            const note = NoteFactory_1.NoteFactory.fromCourseValue(rawNote, strict);
            if (note) {
              command.addNote(note);
            }
          });
          return command;
        }
        toString() {
          return this.notes.join("");
        }
      };
      exports.NoteSequence = NoteSequence;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/index.js
  var require_types2 = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/types/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NoteSequence = exports.MasterBranchMarkerCommand = exports.AdvancedBranchMarkerCommand = exports.NormalBranchMarkerCommand = exports.BranchMarkerCommand = exports.JPosScrollCommand = exports.SuddenCommand = exports.DirectionCommand = exports.NextSongCommand = exports.HBScrollCommand = exports.BMScrollCommand = exports.LevelHoldCommand = exports.LyricCommand = exports.SectionCommand = exports.BranchEndCommand = exports.BranchStartCommand = exports.BarLineOnCommand = exports.BarLineOffCommand = exports.GoGoEndCommand = exports.GoGoStartCommand = exports.ScrollCommand = exports.DelayCommand = exports.BPMChangeCommand = exports.MeasureCommand = exports.EndCommand = exports.StartCommand = void 0;
      var StartCommand_1 = require_StartCommand();
      Object.defineProperty(exports, "StartCommand", { enumerable: true, get: function() {
        return StartCommand_1.StartCommand;
      } });
      var EndCommand_1 = require_EndCommand();
      Object.defineProperty(exports, "EndCommand", { enumerable: true, get: function() {
        return EndCommand_1.EndCommand;
      } });
      var MeasureCommand_1 = require_MeasureCommand();
      Object.defineProperty(exports, "MeasureCommand", { enumerable: true, get: function() {
        return MeasureCommand_1.MeasureCommand;
      } });
      var BPMChangeCommand_1 = require_BPMChangeCommand();
      Object.defineProperty(exports, "BPMChangeCommand", { enumerable: true, get: function() {
        return BPMChangeCommand_1.BPMChangeCommand;
      } });
      var DelayCommand_1 = require_DelayCommand();
      Object.defineProperty(exports, "DelayCommand", { enumerable: true, get: function() {
        return DelayCommand_1.DelayCommand;
      } });
      var ScrollCommand_1 = require_ScrollCommand();
      Object.defineProperty(exports, "ScrollCommand", { enumerable: true, get: function() {
        return ScrollCommand_1.ScrollCommand;
      } });
      var GoGoStartCommand_1 = require_GoGoStartCommand();
      Object.defineProperty(exports, "GoGoStartCommand", { enumerable: true, get: function() {
        return GoGoStartCommand_1.GoGoStartCommand;
      } });
      var GoGoEndCommand_1 = require_GoGoEndCommand();
      Object.defineProperty(exports, "GoGoEndCommand", { enumerable: true, get: function() {
        return GoGoEndCommand_1.GoGoEndCommand;
      } });
      var BarLineOffCommand_1 = require_BarLineOffCommand();
      Object.defineProperty(exports, "BarLineOffCommand", { enumerable: true, get: function() {
        return BarLineOffCommand_1.BarLineOffCommand;
      } });
      var BarLineOnCommand_1 = require_BarLineOnCommand();
      Object.defineProperty(exports, "BarLineOnCommand", { enumerable: true, get: function() {
        return BarLineOnCommand_1.BarLineOnCommand;
      } });
      var BranchStartCommand_1 = require_BranchStartCommand();
      Object.defineProperty(exports, "BranchStartCommand", { enumerable: true, get: function() {
        return BranchStartCommand_1.BranchStartCommand;
      } });
      var BranchEndCommand_1 = require_BranchEndCommand();
      Object.defineProperty(exports, "BranchEndCommand", { enumerable: true, get: function() {
        return BranchEndCommand_1.BranchEndCommand;
      } });
      var SectionCommand_1 = require_SectionCommand();
      Object.defineProperty(exports, "SectionCommand", { enumerable: true, get: function() {
        return SectionCommand_1.SectionCommand;
      } });
      var LyricCommand_1 = require_LyricCommand();
      Object.defineProperty(exports, "LyricCommand", { enumerable: true, get: function() {
        return LyricCommand_1.LyricCommand;
      } });
      var LevelHoldCommand_1 = require_LevelHoldCommand();
      Object.defineProperty(exports, "LevelHoldCommand", { enumerable: true, get: function() {
        return LevelHoldCommand_1.LevelHoldCommand;
      } });
      var BMScrollCommand_1 = require_BMScrollCommand();
      Object.defineProperty(exports, "BMScrollCommand", { enumerable: true, get: function() {
        return BMScrollCommand_1.BMScrollCommand;
      } });
      var HBScrollCommand_1 = require_HBScrollCommand();
      Object.defineProperty(exports, "HBScrollCommand", { enumerable: true, get: function() {
        return HBScrollCommand_1.HBScrollCommand;
      } });
      var NextSongCommand_1 = require_NextSongCommand();
      Object.defineProperty(exports, "NextSongCommand", { enumerable: true, get: function() {
        return NextSongCommand_1.NextSongCommand;
      } });
      var DirectionCommand_1 = require_DirectionCommand();
      Object.defineProperty(exports, "DirectionCommand", { enumerable: true, get: function() {
        return DirectionCommand_1.DirectionCommand;
      } });
      var SuddenCommand_1 = require_SuddenCommand();
      Object.defineProperty(exports, "SuddenCommand", { enumerable: true, get: function() {
        return SuddenCommand_1.SuddenCommand;
      } });
      var JPosScrollCommand_1 = require_JPosScrollCommand();
      Object.defineProperty(exports, "JPosScrollCommand", { enumerable: true, get: function() {
        return JPosScrollCommand_1.JPosScrollCommand;
      } });
      var BranchMarkerCommand_1 = require_BranchMarkerCommand();
      Object.defineProperty(exports, "BranchMarkerCommand", { enumerable: true, get: function() {
        return BranchMarkerCommand_1.BranchMarkerCommand;
      } });
      Object.defineProperty(exports, "NormalBranchMarkerCommand", { enumerable: true, get: function() {
        return BranchMarkerCommand_1.NormalBranchMarkerCommand;
      } });
      Object.defineProperty(exports, "AdvancedBranchMarkerCommand", { enumerable: true, get: function() {
        return BranchMarkerCommand_1.AdvancedBranchMarkerCommand;
      } });
      Object.defineProperty(exports, "MasterBranchMarkerCommand", { enumerable: true, get: function() {
        return BranchMarkerCommand_1.MasterBranchMarkerCommand;
      } });
      var NoteSequence_1 = require_NoteSequence();
      Object.defineProperty(exports, "NoteSequence", { enumerable: true, get: function() {
        return NoteSequence_1.NoteSequence;
      } });
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/lib/commandClassMap.js
  var require_commandClassMap = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/lib/commandClassMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.commandClassMap = void 0;
      var CommandType_1 = require_CommandType();
      var types_1 = require_types2();
      exports.commandClassMap = {
        [CommandType_1.CommandType.NoteSequence]: types_1.NoteSequence,
        [CommandType_1.CommandType.Start]: types_1.StartCommand,
        [CommandType_1.CommandType.End]: types_1.EndCommand,
        [CommandType_1.CommandType.Measure]: types_1.MeasureCommand,
        [CommandType_1.CommandType.BPMChange]: types_1.BPMChangeCommand,
        [CommandType_1.CommandType.Delay]: types_1.DelayCommand,
        [CommandType_1.CommandType.Scroll]: types_1.ScrollCommand,
        [CommandType_1.CommandType.GoGoStart]: types_1.GoGoStartCommand,
        [CommandType_1.CommandType.GoGoEnd]: types_1.GoGoEndCommand,
        [CommandType_1.CommandType.BarLineOff]: types_1.BarLineOffCommand,
        [CommandType_1.CommandType.BarLineOn]: types_1.BarLineOnCommand,
        [CommandType_1.CommandType.BranchStart]: types_1.BranchStartCommand,
        [CommandType_1.CommandType.BranchEnd]: types_1.BranchEndCommand,
        [CommandType_1.CommandType.Section]: types_1.SectionCommand,
        [CommandType_1.CommandType.Lyric]: types_1.LyricCommand,
        [CommandType_1.CommandType.LevelHold]: types_1.LevelHoldCommand,
        [CommandType_1.CommandType.BMScroll]: types_1.BMScrollCommand,
        [CommandType_1.CommandType.HBScroll]: types_1.HBScrollCommand,
        [CommandType_1.CommandType.NextSong]: types_1.NextSongCommand,
        [CommandType_1.CommandType.Direction]: types_1.DirectionCommand,
        [CommandType_1.CommandType.Sudden]: types_1.SuddenCommand,
        "N": types_1.BranchMarkerCommand,
        "E": types_1.BranchMarkerCommand,
        "M": types_1.BranchMarkerCommand
      };
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/CommandFactory.js
  var require_CommandFactory = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/command/CommandFactory.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CommandFactory = void 0;
      var regex_1 = require_regex();
      var commandClassMap_1 = require_commandClassMap();
      var types_1 = require_types2();
      var CommandFactory = class {
        static fromLine(line, canParseNotes, strict = true) {
          line = line.trim();
          if (line.length === 0) {
            return void 0;
          }
          if (!line.startsWith("#") && canParseNotes) {
            return types_1.NoteSequence.parse([line], strict);
          }
          const components = line.split(regex_1.SPACE_REGEX);
          const command = components[0].substring(1);
          const args = components.slice(1);
          if (!Object.keys(commandClassMap_1.commandClassMap).includes(command)) {
            return void 0;
          }
          const commandClass = commandClassMap_1.commandClassMap[command];
          if (commandClass === types_1.BranchMarkerCommand) {
            return commandClass.parse(command);
          } else {
            return commandClass.parse(args, strict);
          }
        }
      };
      exports.CommandFactory = CommandFactory;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/DojoGaugeCondition.js
  var require_DojoGaugeCondition = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/DojoGaugeCondition.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DojoGaugeCondition = void 0;
      var DojoGaugeCondition = class _DojoGaugeCondition {
        constructor(id) {
          this._id = id;
        }
        static fromId(id, strict = true) {
          const item = _DojoGaugeCondition._values.find((it2) => it2._id === id);
          if (item) {
            return item;
          }
          if (strict) {
            throw new Error(`Invalid DojoGaugeCondition id: ${id}`);
          }
        }
        static fromRaw(raw, strict = true) {
          return _DojoGaugeCondition.fromId(raw, strict);
        }
        toString() {
          return this._id;
        }
      };
      exports.DojoGaugeCondition = DojoGaugeCondition;
      DojoGaugeCondition.Percentage = new DojoGaugeCondition("g");
      DojoGaugeCondition.GoodAmount = new DojoGaugeCondition("jp");
      DojoGaugeCondition.OKAmount = new DojoGaugeCondition("jg");
      DojoGaugeCondition.BadAmount = new DojoGaugeCondition("jb");
      DojoGaugeCondition.Score = new DojoGaugeCondition("s");
      DojoGaugeCondition.Drumroll = new DojoGaugeCondition("r");
      DojoGaugeCondition.CorrectHits = new DojoGaugeCondition("h");
      DojoGaugeCondition.MaxCombo = new DojoGaugeCondition("c");
      DojoGaugeCondition._values = [
        DojoGaugeCondition.Percentage,
        DojoGaugeCondition.GoodAmount,
        DojoGaugeCondition.OKAmount,
        DojoGaugeCondition.BadAmount,
        DojoGaugeCondition.Score,
        DojoGaugeCondition.Drumroll,
        DojoGaugeCondition.CorrectHits,
        DojoGaugeCondition.MaxCombo
      ];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/DojoGaugeScope.js
  var require_DojoGaugeScope = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/DojoGaugeScope.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DojoGaugeScope = void 0;
      var DojoGaugeScope = class _DojoGaugeScope {
        constructor(id) {
          this._id = id;
        }
        static fromId(id, strict = true) {
          const item = _DojoGaugeScope._values.find((it2) => it2._id === id);
          if (item) {
            return item;
          }
          if (strict) {
            throw new Error(`Invalid gauge scope id: ${id}`);
          }
        }
        static fromRaw(raw, strict = true) {
          return _DojoGaugeScope.fromId(raw, strict);
        }
        toString() {
          return this._id;
        }
      };
      exports.DojoGaugeScope = DojoGaugeScope;
      DojoGaugeScope.GreaterThan = new DojoGaugeScope("m");
      DojoGaugeScope.LessThan = new DojoGaugeScope("l");
      DojoGaugeScope._values = [
        DojoGaugeScope.GreaterThan,
        DojoGaugeScope.LessThan
      ];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/DojoGauge.js
  var require_DojoGauge = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/DojoGauge.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DojoGauge = void 0;
      var DojoGaugeCondition_1 = require_DojoGaugeCondition();
      var DojoGaugeScope_1 = require_DojoGaugeScope();
      var DojoGauge = class _DojoGauge {
        constructor(condition, redClearRequirement, goldClearRequirement, scope) {
          this.condition = condition;
          this.redClearRequirement = redClearRequirement;
          this.goldClearRequirement = goldClearRequirement;
          this.scope = scope;
        }
        static parse(raw, strict = true) {
          const components = raw.split(",").map((c2) => c2.trim());
          if (components.length !== 4) {
            if (strict) {
              throw new Error(`Invalid gauge value: ${raw}`);
            }
            return void 0;
          }
          const condition = DojoGaugeCondition_1.DojoGaugeCondition.fromRaw(components[0]);
          const redClearRequirement = parseInt(components[1], 10);
          const goldClearRequirement = parseInt(components[2], 10);
          const scope = DojoGaugeScope_1.DojoGaugeScope.fromRaw(components[3]);
          if (!condition || isNaN(redClearRequirement) || isNaN(goldClearRequirement) || !scope) {
            if (strict) {
              throw new Error(`Invalid gauge value: ${raw}`);
            }
          }
          return new _DojoGauge(condition, redClearRequirement, goldClearRequirement, scope);
        }
        toString() {
          return `${this.condition},${this.redClearRequirement},${this.goldClearRequirement},${this.scope}`;
        }
      };
      exports.DojoGauge = DojoGauge;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/DojoGaugeIncrementMethod.js
  var require_DojoGaugeIncrementMethod = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/DojoGaugeIncrementMethod.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DojoGaugeIncrementMethod = void 0;
      var DojoGaugeIncrementMethod = class _DojoGaugeIncrementMethod {
        constructor(id) {
          this._name = id;
        }
        static fromName(name, strict = true) {
          const item = _DojoGaugeIncrementMethod._values.find((it2) => it2._name === name);
          if (item) {
            return item;
          }
          if (strict) {
            throw new Error(`Invalid gauge increment method: ${name}`);
          }
        }
        static fromRaw(raw, strict = true) {
          return _DojoGaugeIncrementMethod.fromName(raw, strict);
        }
        toString() {
          return this._name;
        }
      };
      exports.DojoGaugeIncrementMethod = DojoGaugeIncrementMethod;
      DojoGaugeIncrementMethod.Normal = new DojoGaugeIncrementMethod("Normal");
      DojoGaugeIncrementMethod.Floor = new DojoGaugeIncrementMethod("Floor");
      DojoGaugeIncrementMethod.Round = new DojoGaugeIncrementMethod("Round");
      DojoGaugeIncrementMethod.Notfix = new DojoGaugeIncrementMethod("Notfix");
      DojoGaugeIncrementMethod.Ceiling = new DojoGaugeIncrementMethod("Ceiling");
      DojoGaugeIncrementMethod._values = [
        DojoGaugeIncrementMethod.Normal,
        DojoGaugeIncrementMethod.Floor,
        DojoGaugeIncrementMethod.Round,
        DojoGaugeIncrementMethod.Notfix,
        DojoGaugeIncrementMethod.Ceiling
      ];
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/DojoGaugeTotal.js
  var require_DojoGaugeTotal = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/models/course/lib/DojoGaugeTotal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DojoGaugeTotal = void 0;
      var DojoGaugeTotal = class extends Number {
        /**
         * If this is true, it is impossible to get a full gauge.
         */
        get isImpossible() {
          return this < 100;
        }
        /**
         * If this is true, all notes are required to be hit perfectly.
         */
        get areAllNotesRequired() {
          return this === 100;
        }
        /**
         * If this is true, it is easier to fill the gauge.
         */
        get isEasier() {
          return this > 100;
        }
      };
      exports.DojoGaugeTotal = DojoGaugeTotal;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/Parser.js
  var require_Parser = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/Parser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TJAParser = void 0;
      var regex_1 = require_regex();
      var MetadataProperty_1 = require_MetadataProperty();
      var Course_1 = require_Course();
      var Game_1 = require_Game();
      var ScoreMode_1 = require_ScoreMode();
      var Side_1 = require_Side();
      var Song_1 = require_Song();
      var Queue_1 = require_Queue();
      var CommandType_1 = require_CommandType();
      var Difficulty_1 = require_Difficulty();
      var CommandFactory_1 = require_CommandFactory();
      var BranchType_1 = require_BranchType();
      var Style_1 = require_Style();
      var DojoGauge_1 = require_DojoGauge();
      var DojoGaugeIncrementMethod_1 = require_DojoGaugeIncrementMethod();
      var DojoGaugeTotal_1 = require_DojoGaugeTotal();
      var TJAParser2 = class _TJAParser {
        /**
         * Takes in the contents of a TJA file, parses it line-by-line, and returns a
         * Song object. Throws if `strict` is set to `true`.
         *
         * @param raw - The contents of the TJA file.
         * @param strict - Whether the parser should throw errors on invalid data.
         * @returns - A Song object containing data about a chart file.
         */
        static parse(raw, strict = true) {
          const lines = raw.split(regex_1.LINE_REGEX).map((l) => l.trim().split("//")[0]);
          const queue = Queue_1.Queue.fromArray(lines);
          const song = new Song_1.Song();
          let isParsingCourseData = false;
          let canParseNotes = false;
          while (!queue.isEmpty) {
            const line = queue.dequeue();
            if (line === void 0 || line.length === 0) {
              continue;
            }
            const params = _TJAParser.parseParameter(line);
            if (params) {
              const [key, value] = params;
              if (value.length === 0) {
                continue;
              }
              canParseNotes = false;
              if (key === MetadataProperty_1.CourseMetadataProperty.Course) {
                isParsingCourseData = true;
                song.courses.push(new Course_1.Course());
              }
              if (!isParsingCourseData) {
                _TJAParser.setSongData(song, key, value, strict);
                continue;
              }
              const course2 = song.courses[song.courses.length - 1];
              if (typeof course2 === "undefined") {
                continue;
              }
              _TJAParser.setCourseData(course2, key, value, strict);
              continue;
            }
            const course = song.courses[song.courses.length - 1];
            if (typeof course === "undefined") {
              continue;
            }
            const command = _TJAParser.parseCourseCommand(course, line, canParseNotes, strict);
            if (command && command.commandType === CommandType_1.CommandType.Start) {
              canParseNotes = true;
            }
          }
          return song;
        }
        /**
         * Wrapper method for `Song#toString()` which can be used to stringify a Song
         * data object (similar to JSON's stringify method).
         *
         * @param song - The Song object to stringify.
         * @returns The TJA-compatible representation of the Song object.
         */
        static stringify(song) {
          return song.toString();
        }
        static setSongData(song, key, value, strict) {
          if (key === MetadataProperty_1.SongMetadataProperty.Title) {
            song.title = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.TitleEN) {
            song.localizedTitle.en = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.TitleJA) {
            song.localizedTitle.ja = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.TitleCN) {
            song.localizedTitle.cn = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.TitleTW) {
            song.localizedTitle.tw = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.TitleKO) {
            song.localizedTitle.ko = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.Subtitle) {
            song.subtitle = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.SubtitleEN) {
            song.localizedSubtitle.en = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.SubtitleJA) {
            song.localizedSubtitle.ja = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.SubtitleCN) {
            song.localizedSubtitle.cn = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.SubtitleTW) {
            song.localizedSubtitle.tw = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.SubtitleKO) {
            song.localizedSubtitle.ko = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.BPM) {
            const bpm = parseFloat(value);
            if (!isNaN(bpm)) {
              song.bpm = bpm;
            } else if (strict) {
              throw new TypeError(`Invalid BPM value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.Wave) {
            song.wave = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.Offset) {
            const offset = parseFloat(value);
            if (!isNaN(offset)) {
              song.offset = offset;
            } else if (strict) {
              throw new TypeError(`Invalid offset value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.DemoStart) {
            const demoStart = parseFloat(value);
            if (!isNaN(demoStart)) {
              song.demoStart = demoStart;
            } else if (strict) {
              throw new TypeError(`Invalid demo start value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.Genre) {
            song.genre = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.ScoreMode) {
            const mode = ScoreMode_1.ScoreMode.fromRaw(value, strict);
            if (mode) {
              song.scoreMode = mode;
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.Maker) {
            const data = regex_1.AUTHOR_REGEX.exec(value);
            if (data !== null) {
              song.maker = {
                name: data[1],
                url: data[2]
              };
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.Lyrics) {
            song.lyricsFilePath = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.SongVol) {
            const volume = parseInt(value, 10);
            if (!isNaN(volume)) {
              song.songVolume = volume;
            } else if (strict) {
              throw new TypeError(`Invalid song volume value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.SEVol) {
            const volume = parseInt(value, 10);
            if (!isNaN(volume)) {
              song.soundEffectVolume = volume;
            } else if (strict) {
              throw new TypeError(`Invalid sound effect volume value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.Side) {
            const side = Side_1.Side.fromRaw(value, strict);
            if (side) {
              song.side = side;
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.Life) {
            const life = parseInt(value, 10);
            if (!isNaN(life)) {
              song.life = life;
            } else if (strict) {
              throw new TypeError(`Invalid life value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.Game) {
            const game = Game_1.Game.fromRaw(value, strict);
            if (game) {
              song.game = game;
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.HeadScroll) {
            const headScroll = parseInt(value, 10);
            if (!isNaN(headScroll)) {
              song.headScroll = headScroll;
            } else if (strict) {
              throw new TypeError(`Invalid head scroll value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.BGImage) {
            song.backgroundImagePath = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.BGMovie) {
            song.backgroundMoviePath = value;
            return;
          }
          if (key === MetadataProperty_1.SongMetadataProperty.MovieOffset) {
            const movieOffset = parseInt(value, 10);
            if (!isNaN(movieOffset)) {
              song.movieOffset = movieOffset;
            } else if (strict) {
              throw new TypeError(`Invalid movie offset value: ${value}`);
            }
            return;
          }
        }
        static setCourseData(course, key, value, strict) {
          if (key === MetadataProperty_1.CourseMetadataProperty.Course) {
            const difficulty = Difficulty_1.Difficulty.fromRaw(value, strict);
            if (difficulty) {
              course.difficulty = difficulty;
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.Level) {
            const level = parseInt(value, 10);
            if (!isNaN(level)) {
              course.stars = level;
            } else if (strict) {
              throw new TypeError(`Invalid course level value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.ScoreInit) {
            const scoreInit = parseInt(value, 10);
            if (!isNaN(scoreInit)) {
              course.activeCourse.scoreInit = scoreInit;
            } else if (strict) {
              throw new TypeError(`Invalid course score init value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.ScoreDiff) {
            const scoreDiff = parseInt(value, 10);
            if (!isNaN(scoreDiff)) {
              course.activeCourse.scoreDiff = scoreDiff;
            } else if (strict) {
              throw new TypeError(`Invalid course score diff value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.Balloon) {
            const counts = value.split(",").filter((c2) => c2.trim().length > 0).map((c2) => parseInt(c2.trim(), 10));
            const filteredCounts = counts.filter((c2) => !isNaN(c2));
            if (filteredCounts.length === counts.length) {
              course.activeCourse.balloonCounts = filteredCounts;
            } else if (strict) {
              throw new TypeError(`Invalid course balloon value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.BalloonNor) {
            const counts = value.split(",").map((c2) => parseInt(c2.trim(), 10));
            const filteredCounts = counts.filter((c2) => !isNaN(c2));
            if (filteredCounts.length === counts.length) {
              course.activeCourse.branchBalloonCounts[BranchType_1.BranchType.Normal] = filteredCounts;
            } else if (strict) {
              throw new TypeError(`Invalid course balloon (normal) value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.BalloonExp) {
            const counts = value.split(",").map((c2) => parseInt(c2.trim(), 10));
            const filteredCounts = counts.filter((c2) => !isNaN(c2));
            if (filteredCounts.length === counts.length) {
              course.activeCourse.branchBalloonCounts[BranchType_1.BranchType.Advanced] = filteredCounts;
            } else if (strict) {
              throw new TypeError(`Invalid course balloon (advanced) value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.BalloonMas) {
            const counts = value.split(",").map((c2) => parseInt(c2.trim(), 10));
            const filteredCounts = counts.filter((c2) => !isNaN(c2));
            if (filteredCounts.length === counts.length) {
              course.activeCourse.branchBalloonCounts[BranchType_1.BranchType.Master] = filteredCounts;
            } else if (strict) {
              throw new TypeError(`Invalid course balloon (master) value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.Style) {
            const style = Style_1.Style.fromRaw(value, strict);
            if (style) {
              course.activeCourseStyle = style;
              course.activeCourse.style = style;
            }
            return;
          }
          if ([
            MetadataProperty_1.CourseMetadataProperty.Exam1,
            MetadataProperty_1.CourseMetadataProperty.Exam2,
            MetadataProperty_1.CourseMetadataProperty.Exam3
          ].includes(key)) {
            const index = parseInt(key.slice(-1), 10) - 1;
            const gauge = DojoGauge_1.DojoGauge.parse(value, strict);
            if (gauge) {
              course.setGauge(index, gauge);
            } else if (strict) {
              throw new TypeError(`Invalid gauge data: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.GaugeIncr) {
            const gaugeIncrementMethod = DojoGaugeIncrementMethod_1.DojoGaugeIncrementMethod.fromRaw(value, strict);
            if (gaugeIncrementMethod) {
              course.activeCourse.gaugeIncrementMethod = gaugeIncrementMethod;
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.Total) {
            const rawTotal = parseInt(value, 10);
            if (!isNaN(rawTotal)) {
              const total = new DojoGaugeTotal_1.DojoGaugeTotal(rawTotal);
              course.activeCourse.gaugeTotal = total;
            } else if (strict) {
              throw new TypeError(`Invalid gauge total value: ${value}`);
            }
            return;
          }
          if (key === MetadataProperty_1.CourseMetadataProperty.HiddenBranch && value === "1") {
            course.activeCourse.hiddenBranches = true;
            return;
          }
        }
        static parseCourseCommand(course, line, canParseNotes, strict) {
          const command = CommandFactory_1.CommandFactory.fromLine(line, canParseNotes, strict);
          if (typeof command !== "undefined") {
            course.addCommand(command);
            return command;
          }
        }
        static parseParameter(line) {
          const components = line.split(":").map((c2) => c2.trim());
          if (components.length < 2) {
            return void 0;
          }
          const key = components[0];
          const value = components.slice(1).join(":");
          return [key, value];
        }
      };
      exports.TJAParser = TJAParser2;
    }
  });

  // node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/tja@0.1.3/node_modules/tja/dist/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        var desc = Object.getOwnPropertyDescriptor(m, k2);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k2];
          } };
        }
        Object.defineProperty(o, k22, desc);
      } : function(o, m, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o[k22] = m[k2];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TJAParser = exports.Song = exports.Side = exports.ScoreMode = exports.Game = exports.Note = exports.CountableDrumrollNote = exports.NoteType = exports.DojoGauge = exports.CourseVariant = exports.Course = exports.DojoGaugeScope = exports.DojoGaugeCondition = exports.DojoGaugeTotal = exports.DojoGaugeIncrementMethod = exports.Style = exports.MeasureValue = exports.Difficulty = exports.ScrollDirection = exports.Player = exports.JPosScrollDirection = exports.Command = exports.CommandType = exports.BranchType = exports.BranchRequirementType = void 0;
      var Parser_1 = require_Parser();
      Object.defineProperty(exports, "TJAParser", { enumerable: true, get: function() {
        return Parser_1.TJAParser;
      } });
      var BranchRequirementType_1 = require_BranchRequirementType();
      Object.defineProperty(exports, "BranchRequirementType", { enumerable: true, get: function() {
        return BranchRequirementType_1.BranchRequirementType;
      } });
      var BranchType_1 = require_BranchType();
      Object.defineProperty(exports, "BranchType", { enumerable: true, get: function() {
        return BranchType_1.BranchType;
      } });
      var CommandType_1 = require_CommandType();
      Object.defineProperty(exports, "CommandType", { enumerable: true, get: function() {
        return CommandType_1.CommandType;
      } });
      __exportStar(require_types2(), exports);
      var Command_1 = require_Command();
      Object.defineProperty(exports, "Command", { enumerable: true, get: function() {
        return Command_1.Command;
      } });
      var JPosScrollDirection_1 = require_JPosScrollDirection();
      Object.defineProperty(exports, "JPosScrollDirection", { enumerable: true, get: function() {
        return JPosScrollDirection_1.JPosScrollDirection;
      } });
      var Player_1 = require_Player();
      Object.defineProperty(exports, "Player", { enumerable: true, get: function() {
        return Player_1.Player;
      } });
      var ScrollDirection_1 = require_ScrollDirection();
      Object.defineProperty(exports, "ScrollDirection", { enumerable: true, get: function() {
        return ScrollDirection_1.ScrollDirection;
      } });
      var Difficulty_1 = require_Difficulty();
      Object.defineProperty(exports, "Difficulty", { enumerable: true, get: function() {
        return Difficulty_1.Difficulty;
      } });
      var MeasureValue_1 = require_MeasureValue();
      Object.defineProperty(exports, "MeasureValue", { enumerable: true, get: function() {
        return MeasureValue_1.MeasureValue;
      } });
      var Style_1 = require_Style();
      Object.defineProperty(exports, "Style", { enumerable: true, get: function() {
        return Style_1.Style;
      } });
      var DojoGaugeIncrementMethod_1 = require_DojoGaugeIncrementMethod();
      Object.defineProperty(exports, "DojoGaugeIncrementMethod", { enumerable: true, get: function() {
        return DojoGaugeIncrementMethod_1.DojoGaugeIncrementMethod;
      } });
      var DojoGaugeTotal_1 = require_DojoGaugeTotal();
      Object.defineProperty(exports, "DojoGaugeTotal", { enumerable: true, get: function() {
        return DojoGaugeTotal_1.DojoGaugeTotal;
      } });
      var DojoGaugeCondition_1 = require_DojoGaugeCondition();
      Object.defineProperty(exports, "DojoGaugeCondition", { enumerable: true, get: function() {
        return DojoGaugeCondition_1.DojoGaugeCondition;
      } });
      var DojoGaugeScope_1 = require_DojoGaugeScope();
      Object.defineProperty(exports, "DojoGaugeScope", { enumerable: true, get: function() {
        return DojoGaugeScope_1.DojoGaugeScope;
      } });
      var Course_1 = require_Course();
      Object.defineProperty(exports, "Course", { enumerable: true, get: function() {
        return Course_1.Course;
      } });
      var CourseVariant_1 = require_CourseVariant();
      Object.defineProperty(exports, "CourseVariant", { enumerable: true, get: function() {
        return CourseVariant_1.CourseVariant;
      } });
      var DojoGauge_1 = require_DojoGauge();
      Object.defineProperty(exports, "DojoGauge", { enumerable: true, get: function() {
        return DojoGauge_1.DojoGauge;
      } });
      var NoteType_1 = require_NoteType();
      Object.defineProperty(exports, "NoteType", { enumerable: true, get: function() {
        return NoteType_1.NoteType;
      } });
      var CountableDrumrollNote_1 = require_CountableDrumrollNote();
      Object.defineProperty(exports, "CountableDrumrollNote", { enumerable: true, get: function() {
        return CountableDrumrollNote_1.CountableDrumrollNote;
      } });
      __exportStar(require_types(), exports);
      var Note_1 = require_Note();
      Object.defineProperty(exports, "Note", { enumerable: true, get: function() {
        return Note_1.Note;
      } });
      var Game_1 = require_Game();
      Object.defineProperty(exports, "Game", { enumerable: true, get: function() {
        return Game_1.Game;
      } });
      var ScoreMode_1 = require_ScoreMode();
      Object.defineProperty(exports, "ScoreMode", { enumerable: true, get: function() {
        return ScoreMode_1.ScoreMode;
      } });
      var Side_1 = require_Side();
      Object.defineProperty(exports, "Side", { enumerable: true, get: function() {
        return Side_1.Side;
      } });
      var Song_1 = require_Song();
      Object.defineProperty(exports, "Song", { enumerable: true, get: function() {
        return Song_1.Song;
      } });
      exports.default = Parser_1.TJAParser;
    }
  });

  // node_modules/.pnpm/kaboom-extra@0.1.1/node_modules/kaboom-extra/dist/kaboom-extra.mjs
  var u = Object.defineProperty;
  var n = (o, e) => u(o, "name", { value: e, configurable: true });
  function a(o) {
    let e = [], r = "", i = o.add;
    return { layers(t18, s2) {
      e = t18, r = s2 ?? t18[0];
    }, layer(t18) {
      return { id: "layer", add() {
        if (e.indexOf(t18) == -1)
          throw new Error(`no layer "${t18}"`);
        let s2 = e.indexOf(t18);
        this.z = s2 * 1e3 + (this.userZ ?? 0);
      }, inspect() {
        return t18;
      } };
    }, z(t18) {
      return { id: "z", userZ: t18 };
    }, add(t18) {
      if (e.length == 0)
        return i(t18);
      let s2 = i(t18);
      return s2.use(this.layer(r)), s2;
    } };
  }
  n(a, "layerPlugin");
  function y(o) {
    return { areKeysPressed(e) {
      for (let r of e)
        if (o.isKeyPressed(r))
          return true;
      return false;
    }, areKeysDown(e) {
      for (let r of e)
        if (o.isKeyDown(r))
          return true;
      return false;
    }, areKeysReleased(e) {
      for (let r of e)
        if (o.isKeyReleased(r))
          return true;
      return false;
    }, onKeysPressed(e, r) {
      return o.onUpdate(() => {
        this.areKeysPressed(e) && r();
      });
    }, onKeysDown(e, r) {
      return o.onUpdate(() => {
        this.areKeysDown(e) && r();
      });
    }, onKeysReleased(e, r) {
      return o.onUpdate(() => {
        this.areKeysReleased(e) && r();
      });
    } };
  }
  n(y, "moreKeysPlugin");

  // node_modules/.pnpm/kaplay@3001.0.9/node_modules/kaplay/dist/kaplay.mjs
  var tu = Object.defineProperty;
  var s = (t18, e) => tu(t18, "name", { value: e, configurable: true });
  var Eo = (() => {
    for (var t18 = new Uint8Array(128), e = 0; e < 64; e++)
      t18[e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e * 4 - 205] = e;
    return (n2) => {
      for (var r = n2.length, o = new Uint8Array((r - (n2[r - 1] == "=") - (n2[r - 2] == "=")) * 3 / 4 | 0), i = 0, a2 = 0; i < r; ) {
        var l = t18[n2.charCodeAt(i++)], u2 = t18[n2.charCodeAt(i++)], m = t18[n2.charCodeAt(i++)], d = t18[n2.charCodeAt(i++)];
        o[a2++] = l << 2 | u2 >> 4, o[a2++] = u2 << 4 | m >> 2, o[a2++] = m << 6 | d;
      }
      return o;
    };
  })();
  var K = class t {
    static {
      s(this, "Color");
    }
    r = 255;
    g = 255;
    b = 255;
    constructor(e, n2, r) {
      this.r = Se(e, 0, 255), this.g = Se(n2, 0, 255), this.b = Se(r, 0, 255);
    }
    static fromArray(e) {
      return new t(e[0], e[1], e[2]);
    }
    static fromHex(e) {
      if (typeof e == "number")
        return new t(e >> 16 & 255, e >> 8 & 255, e >> 0 & 255);
      if (typeof e == "string") {
        let n2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        if (!n2)
          throw new Error("Invalid hex color format");
        return new t(parseInt(n2[1], 16), parseInt(n2[2], 16), parseInt(n2[3], 16));
      } else
        throw new Error("Invalid hex color format");
    }
    static fromHSL(e, n2, r) {
      if (n2 == 0)
        return new t(255 * r, 255 * r, 255 * r);
      let o = s((d, C, p) => (p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? d + (C - d) * 6 * p : p < 1 / 2 ? C : p < 2 / 3 ? d + (C - d) * (2 / 3 - p) * 6 : d), "hue2rgb"), i = r < 0.5 ? r * (1 + n2) : r + n2 - r * n2, a2 = 2 * r - i, l = o(a2, i, e + 1 / 3), u2 = o(a2, i, e), m = o(a2, i, e - 1 / 3);
      return new t(Math.round(l * 255), Math.round(u2 * 255), Math.round(m * 255));
    }
    static RED = new t(255, 0, 0);
    static GREEN = new t(0, 255, 0);
    static BLUE = new t(0, 0, 255);
    static YELLOW = new t(255, 255, 0);
    static MAGENTA = new t(255, 0, 255);
    static CYAN = new t(0, 255, 255);
    static WHITE = new t(255, 255, 255);
    static BLACK = new t(0, 0, 0);
    clone() {
      return new t(this.r, this.g, this.b);
    }
    lighten(e) {
      return new t(this.r + e, this.g + e, this.b + e);
    }
    darken(e) {
      return this.lighten(-e);
    }
    invert() {
      return new t(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(e) {
      return new t(this.r * e.r / 255, this.g * e.g / 255, this.b * e.b / 255);
    }
    lerp(e, n2) {
      return new t(fe(this.r, e.r, n2), fe(this.g, e.g, n2), fe(this.b, e.b, n2));
    }
    toHSL() {
      let e = this.r / 255, n2 = this.g / 255, r = this.b / 255, o = Math.max(e, n2, r), i = Math.min(e, n2, r), a2 = (o + i) / 2, l = a2, u2 = a2;
      if (o == i)
        a2 = l = 0;
      else {
        let m = o - i;
        switch (l = u2 > 0.5 ? m / (2 - o - i) : m / (o + i), o) {
          case e:
            a2 = (n2 - r) / m + (n2 < r ? 6 : 0);
            break;
          case n2:
            a2 = (r - e) / m + 2;
            break;
          case r:
            a2 = (e - n2) / m + 4;
            break;
        }
        a2 /= 6;
      }
      return [a2, l, u2];
    }
    eq(e) {
      return this.r === e.r && this.g === e.g && this.b === e.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
    toArray() {
      return [this.r, this.g, this.b];
    }
  };
  function I(...t18) {
    if (t18.length === 0)
      return new K(255, 255, 255);
    if (t18.length === 1) {
      if (t18[0] instanceof K)
        return t18[0].clone();
      if (typeof t18[0] == "string")
        return K.fromHex(t18[0]);
      if (Array.isArray(t18[0]) && t18[0].length === 3)
        return K.fromArray(t18[0]);
    } else if (t18.length === 2) {
      if (t18[0] instanceof K)
        return t18[0].clone();
    } else if (t18.length === 3 || t18.length === 4)
      return new K(t18[0], t18[1], t18[2]);
    throw new Error("Invalid color arguments");
  }
  s(I, "rgb");
  var To = s((t18, e, n2) => K.fromHSL(t18, e, n2), "hsl2rgb");
  function ue(t18) {
    return t18 * Math.PI / 180;
  }
  s(ue, "deg2rad");
  function lt(t18) {
    return t18 * 180 / Math.PI;
  }
  s(lt, "rad2deg");
  function Se(t18, e, n2) {
    return e > n2 ? Se(t18, n2, e) : Math.min(Math.max(t18, e), n2);
  }
  s(Se, "clamp");
  function fe(t18, e, n2) {
    if (typeof t18 == "number" && typeof e == "number")
      return t18 + (e - t18) * n2;
    if (t18 instanceof E && e instanceof E)
      return t18.lerp(e, n2);
    if (t18 instanceof K && e instanceof K)
      return t18.lerp(e, n2);
    throw new Error(`Bad value for lerp(): ${t18}, ${e}. Only number, Vec2 and Color is supported.`);
  }
  s(fe, "lerp");
  function Ve(t18, e, n2, r, o) {
    return r + (t18 - e) / (n2 - e) * (o - r);
  }
  s(Ve, "map");
  function So(t18, e, n2, r, o) {
    return Se(Ve(t18, e, n2, r, o), r, o);
  }
  s(So, "mapc");
  var E = class t2 {
    static {
      s(this, "Vec2");
    }
    x = 0;
    y = 0;
    constructor(e = 0, n2 = e) {
      this.x = e, this.y = n2;
    }
    static fromAngle(e) {
      let n2 = ue(e);
      return new t2(Math.cos(n2), Math.sin(n2));
    }
    static fromArray(e) {
      return new t2(e[0], e[1]);
    }
    static ZERO = new t2(0, 0);
    static ONE = new t2(1, 1);
    static LEFT = new t2(-1, 0);
    static RIGHT = new t2(1, 0);
    static UP = new t2(0, -1);
    static DOWN = new t2(0, 1);
    clone() {
      return new t2(this.x, this.y);
    }
    add(...e) {
      let n2 = v(...e);
      return new t2(this.x + n2.x, this.y + n2.y);
    }
    sub(...e) {
      let n2 = v(...e);
      return new t2(this.x - n2.x, this.y - n2.y);
    }
    scale(...e) {
      let n2 = v(...e);
      return new t2(this.x * n2.x, this.y * n2.y);
    }
    dist(...e) {
      let n2 = v(...e);
      return this.sub(n2).len();
    }
    sdist(...e) {
      let n2 = v(...e);
      return this.sub(n2).slen();
    }
    static sdist(e, n2) {
      let r = e.x - n2.x, o = e.y - n2.y;
      return r * r + o * o;
    }
    len() {
      return Math.sqrt(this.dot(this));
    }
    slen() {
      return this.dot(this);
    }
    unit() {
      let e = this.len();
      return e === 0 ? new t2(0) : this.scale(1 / e);
    }
    normal() {
      return new t2(this.y, -this.x);
    }
    reflect(e) {
      return this.sub(e.scale(2 * this.dot(e)));
    }
    project(e) {
      return e.scale(e.dot(this) / e.len());
    }
    reject(e) {
      return this.sub(this.project(e));
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    static dot(e, n2) {
      return e.x * e.x + e.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    static cross(e, n2) {
      return e.x * n2.y - e.y * n2.x;
    }
    angle(...e) {
      let n2 = v(...e);
      return lt(Math.atan2(this.y - n2.y, this.x - n2.x));
    }
    angleBetween(...e) {
      let n2 = v(...e);
      return lt(Math.atan2(this.cross(n2), this.dot(n2)));
    }
    lerp(e, n2) {
      return new t2(fe(this.x, e.x, n2), fe(this.y, e.y, n2));
    }
    slerp(e, n2) {
      let r = this.dot(e), o = this.cross(e), i = Math.atan2(o, r);
      return this.scale(Math.sin((1 - n2) * i)).add(e.scale(Math.sin(n2 * i))).scale(1 / o);
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(e) {
      return new t2(Number(this.x.toFixed(e)), Number(this.y.toFixed(e)));
    }
    transform(e) {
      return e.multVec2(this);
    }
    eq(e) {
      return this.x === e.x && this.y === e.y;
    }
    bbox() {
      return new $(this, 0, 0);
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
    toArray() {
      return [this.x, this.y];
    }
  };
  function v(...t18) {
    if (t18.length === 1) {
      if (t18[0] instanceof E)
        return new E(t18[0].x, t18[0].y);
      if (Array.isArray(t18[0]) && t18[0].length === 2)
        return new E(...t18[0]);
    }
    return new E(...t18);
  }
  s(v, "vec2");
  var z = class t3 {
    static {
      s(this, "Quad");
    }
    x = 0;
    y = 0;
    w = 1;
    h = 1;
    constructor(e, n2, r, o) {
      this.x = e, this.y = n2, this.w = r, this.h = o;
    }
    scale(e) {
      return new t3(this.x + this.w * e.x, this.y + this.h * e.y, this.w * e.w, this.h * e.h);
    }
    pos() {
      return new E(this.x, this.y);
    }
    clone() {
      return new t3(this.x, this.y, this.w, this.h);
    }
    eq(e) {
      return this.x === e.x && this.y === e.y && this.w === e.w && this.h === e.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  };
  function me(t18, e, n2, r) {
    return new z(t18, e, n2, r);
  }
  s(me, "quad");
  var Dt = class t4 {
    static {
      s(this, "Mat2");
    }
    a;
    b;
    c;
    d;
    constructor(e, n2, r, o) {
      this.a = e, this.b = n2, this.c = r, this.d = o;
    }
    mul(e) {
      return new t4(this.a * e.a + this.b * e.c, this.a * e.b + this.b * e.d, this.c * e.a + this.d * e.c, this.c * e.b + this.d * e.d);
    }
    transform(e) {
      return v(this.a * e.x + this.b * e.y, this.c * e.x + this.d * e.y);
    }
    get inverse() {
      let e = this.det;
      return new t4(this.d / e, -this.b / e, -this.c / e, this.a / e);
    }
    get transpose() {
      return new t4(this.a, this.c, this.b, this.d);
    }
    get eigenvalues() {
      let e = this.trace / 2, n2 = this.det, r = e + Math.sqrt(e * e - n2), o = e - Math.sqrt(e * e - n2);
      return [r, o];
    }
    eigenvectors(e, n2) {
      return this.c != 0 ? [[e - this.d, this.c], [n2 - this.d, this.c]] : this.b != 0 ? [[this.b, e - this.a], [this.b, n2 - this.a]] : Math.abs(this.transform(v(1, 0)).x - e) < Number.EPSILON ? [[1, 0], [0, 1]] : [[0, 1], [1, 0]];
    }
    get det() {
      return this.a * this.d - this.b * this.c;
    }
    get trace() {
      return this.a + this.d;
    }
    static rotation(e) {
      let n2 = Math.cos(e), r = Math.sin(e);
      return new t4(n2, r, -r, n2);
    }
    static scale(e, n2) {
      return new t4(e, 0, 0, n2);
    }
  };
  var bt = class t5 {
    static {
      s(this, "Mat3");
    }
    m11;
    m12;
    m13;
    m21;
    m22;
    m23;
    m31;
    m32;
    m33;
    constructor(e, n2, r, o, i, a2, l, u2, m) {
      this.m11 = e, this.m12 = n2, this.m13 = r, this.m21 = o, this.m22 = i, this.m23 = a2, this.m31 = l, this.m32 = u2, this.m33 = m;
    }
    static fromMat2(e) {
      return new t5(e.a, e.b, 0, e.c, e.d, 0, 0, 0, 1);
    }
    toMat2() {
      return new Dt(this.m11, this.m12, this.m21, this.m22);
    }
    mul(e) {
      return new t5(this.m11 * e.m11 + this.m12 * e.m21 + this.m13 * e.m31, this.m11 * e.m12 + this.m12 * e.m22 + this.m13 * e.m32, this.m11 * e.m13 + this.m12 * e.m23 + this.m13 * e.m33, this.m21 * e.m11 + this.m22 * e.m21 + this.m23 * e.m31, this.m21 * e.m12 + this.m22 * e.m22 + this.m23 * e.m32, this.m21 * e.m13 + this.m22 * e.m23 + this.m23 * e.m33, this.m31 * e.m11 + this.m32 * e.m21 + this.m33 * e.m31, this.m31 * e.m12 + this.m32 * e.m22 + this.m33 * e.m32, this.m31 * e.m13 + this.m32 * e.m23 + this.m33 * e.m33);
    }
    get det() {
      return this.m11 * this.m22 * this.m33 + this.m12 * this.m23 * this.m31 + this.m13 * this.m21 * this.m32 - this.m13 * this.m22 * this.m31 - this.m12 * this.m21 * this.m33 - this.m11 * this.m23 * this.m32;
    }
    rotate(e) {
      let n2 = Math.cos(e), r = Math.sin(e), o = this.m11, i = this.m12;
      return this.m11 = n2 * this.m11 + r * this.m21, this.m12 = n2 * this.m12 + r * this.m22, this.m21 = n2 * this.m21 - r * o, this.m22 = n2 * this.m22 - r * i, this;
    }
    scale(e, n2) {
      return this.m11 *= e, this.m12 *= e, this.m21 *= n2, this.m22 *= n2, this;
    }
    get inverse() {
      let e = this.det;
      return new t5((this.m22 * this.m33 - this.m23 * this.m32) / e, (this.m13 * this.m32 - this.m12 * this.m33) / e, (this.m12 * this.m23 - this.m13 * this.m22) / e, (this.m23 * this.m31 - this.m21 * this.m33) / e, (this.m11 * this.m33 - this.m13 * this.m31) / e, (this.m13 * this.m21 - this.m11 * this.m23) / e, (this.m21 * this.m32 - this.m22 * this.m31) / e, (this.m12 * this.m31 - this.m11 * this.m32) / e, (this.m11 * this.m22 - this.m12 * this.m21) / e);
    }
    get transpose() {
      return new t5(this.m11, this.m21, this.m31, this.m12, this.m22, this.m32, this.m13, this.m23, this.m33);
    }
  };
  var he = class t6 {
    static {
      s(this, "Mat4");
    }
    m = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    constructor(e) {
      e && (this.m = e);
    }
    static translate(e) {
      return new t6([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e.x, e.y, 0, 1]);
    }
    static scale(e) {
      return new t6([e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(e) {
      e = ue(-e);
      let n2 = Math.cos(e), r = Math.sin(e);
      return new t6([1, 0, 0, 0, 0, n2, -r, 0, 0, r, n2, 0, 0, 0, 0, 1]);
    }
    static rotateY(e) {
      e = ue(-e);
      let n2 = Math.cos(e), r = Math.sin(e);
      return new t6([n2, 0, r, 0, 0, 1, 0, 0, -r, 0, n2, 0, 0, 0, 0, 1]);
    }
    static rotateZ(e) {
      e = ue(-e);
      let n2 = Math.cos(e), r = Math.sin(e);
      return new t6([n2, -r, 0, 0, r, n2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(e) {
      return this.m[12] += this.m[0] * e.x + this.m[4] * e.y, this.m[13] += this.m[1] * e.x + this.m[5] * e.y, this.m[14] += this.m[2] * e.x + this.m[6] * e.y, this.m[15] += this.m[3] * e.x + this.m[7] * e.y, this;
    }
    scale(e) {
      return this.m[0] *= e.x, this.m[4] *= e.y, this.m[1] *= e.x, this.m[5] *= e.y, this.m[2] *= e.x, this.m[6] *= e.y, this.m[3] *= e.x, this.m[7] *= e.y, this;
    }
    rotate(e) {
      e = ue(-e);
      let n2 = Math.cos(e), r = Math.sin(e), o = this.m[0], i = this.m[1], a2 = this.m[4], l = this.m[5];
      return this.m[0] = o * n2 + i * r, this.m[1] = -o * r + i * n2, this.m[4] = a2 * n2 + l * r, this.m[5] = -a2 * r + l * n2, this;
    }
    mult(e) {
      let n2 = [];
      for (let r = 0; r < 4; r++)
        for (let o = 0; o < 4; o++)
          n2[r * 4 + o] = this.m[0 * 4 + o] * e.m[r * 4 + 0] + this.m[1 * 4 + o] * e.m[r * 4 + 1] + this.m[2 * 4 + o] * e.m[r * 4 + 2] + this.m[3 * 4 + o] * e.m[r * 4 + 3];
      return new t6(n2);
    }
    multVec2(e) {
      return new E(e.x * this.m[0] + e.y * this.m[4] + this.m[12], e.x * this.m[1] + e.y * this.m[5] + this.m[13]);
    }
    getTranslation() {
      return new E(this.m[12], this.m[13]);
    }
    getScale() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = this.m[0] * this.m[5] - this.m[1] * this.m[4], n2 = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new E(n2, e / n2);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = this.m[0] * this.m[5] - this.m[1] * this.m[4], n2 = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new E(e / n2, n2);
      } else
        return new E(0, 0);
    }
    getRotation() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return lt(this.m[1] > 0 ? Math.acos(this.m[0] / e) : -Math.acos(this.m[0] / e));
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return lt(Math.PI / 2 - (this.m[5] > 0 ? Math.acos(-this.m[4] / e) : -Math.acos(this.m[4] / e)));
      } else
        return 0;
    }
    getSkew() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new E(Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e), 0);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new E(0, Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e));
      } else
        return new E(0, 0);
    }
    invert() {
      let e = [], n2 = this.m[10] * this.m[15] - this.m[14] * this.m[11], r = this.m[9] * this.m[15] - this.m[13] * this.m[11], o = this.m[9] * this.m[14] - this.m[13] * this.m[10], i = this.m[8] * this.m[15] - this.m[12] * this.m[11], a2 = this.m[8] * this.m[14] - this.m[12] * this.m[10], l = this.m[8] * this.m[13] - this.m[12] * this.m[9], u2 = this.m[6] * this.m[15] - this.m[14] * this.m[7], m = this.m[5] * this.m[15] - this.m[13] * this.m[7], d = this.m[5] * this.m[14] - this.m[13] * this.m[6], C = this.m[4] * this.m[15] - this.m[12] * this.m[7], p = this.m[4] * this.m[14] - this.m[12] * this.m[6], b = this.m[5] * this.m[15] - this.m[13] * this.m[7], f = this.m[4] * this.m[13] - this.m[12] * this.m[5], O = this.m[6] * this.m[11] - this.m[10] * this.m[7], g = this.m[5] * this.m[11] - this.m[9] * this.m[7], y2 = this.m[5] * this.m[10] - this.m[9] * this.m[6], V = this.m[4] * this.m[11] - this.m[8] * this.m[7], A = this.m[4] * this.m[10] - this.m[8] * this.m[6], D = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      e[0] = this.m[5] * n2 - this.m[6] * r + this.m[7] * o, e[4] = -(this.m[4] * n2 - this.m[6] * i + this.m[7] * a2), e[8] = this.m[4] * r - this.m[5] * i + this.m[7] * l, e[12] = -(this.m[4] * o - this.m[5] * a2 + this.m[6] * l), e[1] = -(this.m[1] * n2 - this.m[2] * r + this.m[3] * o), e[5] = this.m[0] * n2 - this.m[2] * i + this.m[3] * a2, e[9] = -(this.m[0] * r - this.m[1] * i + this.m[3] * l), e[13] = this.m[0] * o - this.m[1] * a2 + this.m[2] * l, e[2] = this.m[1] * u2 - this.m[2] * m + this.m[3] * d, e[6] = -(this.m[0] * u2 - this.m[2] * C + this.m[3] * p), e[10] = this.m[0] * b - this.m[1] * C + this.m[3] * f, e[14] = -(this.m[0] * d - this.m[1] * p + this.m[2] * f), e[3] = -(this.m[1] * O - this.m[2] * g + this.m[3] * y2), e[7] = this.m[0] * O - this.m[2] * V + this.m[3] * A, e[11] = -(this.m[0] * g - this.m[1] * V + this.m[3] * D), e[15] = this.m[0] * y2 - this.m[1] * A + this.m[2] * D;
      let G = this.m[0] * e[0] + this.m[1] * e[4] + this.m[2] * e[8] + this.m[3] * e[12];
      for (let x = 0; x < 4; x++)
        for (let w = 0; w < 4; w++)
          e[x * 4 + w] *= 1 / G;
      return new t6(e);
    }
    clone() {
      return new t6([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  };
  function Sn(t18, e, n2, r = (o) => -Math.cos(o)) {
    return t18 + (r(n2) + 1) / 2 * (e - t18);
  }
  s(Sn, "wave");
  var nu = 1103515245;
  var ru = 12345;
  var Ao = 2147483648;
  var Xt = class {
    static {
      s(this, "RNG");
    }
    seed;
    constructor(e) {
      this.seed = e;
    }
    gen() {
      return this.seed = (nu * this.seed + ru) % Ao, this.seed / Ao;
    }
    genNumber(e, n2) {
      return e + this.gen() * (n2 - e);
    }
    genVec2(e, n2) {
      return new E(this.genNumber(e.x, n2.x), this.genNumber(e.y, n2.y));
    }
    genColor(e, n2) {
      return new K(this.genNumber(e.r, n2.r), this.genNumber(e.g, n2.g), this.genNumber(e.b, n2.b));
    }
    genAny(...e) {
      if (e.length === 0)
        return this.gen();
      if (e.length === 1) {
        if (typeof e[0] == "number")
          return this.genNumber(0, e[0]);
        if (e[0] instanceof E)
          return this.genVec2(v(0, 0), e[0]);
        if (e[0] instanceof K)
          return this.genColor(I(0, 0, 0), e[0]);
      } else if (e.length === 2) {
        if (typeof e[0] == "number" && typeof e[1] == "number")
          return this.genNumber(e[0], e[1]);
        if (e[0] instanceof E && e[1] instanceof E)
          return this.genVec2(e[0], e[1]);
        if (e[0] instanceof K && e[1] instanceof K)
          return this.genColor(e[0], e[1]);
      }
      throw new Error("More than 2 arguments not supported");
    }
  };
  var Cr = new Xt(Date.now());
  function Vo(t18) {
    return t18 != null && (Cr.seed = t18), Cr.seed;
  }
  s(Vo, "randSeed");
  function ge(...t18) {
    return Cr.genAny(...t18);
  }
  s(ge, "rand");
  function wr(...t18) {
    return Math.floor(ge(...t18.length > 0 ? t18 : [2]));
  }
  s(wr, "randi");
  function Po(t18) {
    return ge() <= t18;
  }
  s(Po, "chance");
  function Or(t18) {
    for (let e = t18.length - 1; e > 0; e--) {
      let n2 = Math.floor(Math.random() * (e + 1));
      [t18[e], t18[n2]] = [t18[n2], t18[e]];
    }
    return t18;
  }
  s(Or, "shuffle");
  function Go(t18, e) {
    return t18.length <= e ? t18.slice() : Or(t18.slice()).slice(0, e);
  }
  s(Go, "chooseMultiple");
  function Mo(t18) {
    return t18[wr(t18.length)];
  }
  s(Mo, "choose");
  function Er(t18, e) {
    return t18.pos.x + t18.width > e.pos.x && t18.pos.x < e.pos.x + e.width && t18.pos.y + t18.height > e.pos.y && t18.pos.y < e.pos.y + e.height;
  }
  s(Er, "testRectRect");
  function ou(t18, e) {
    if (t18.p1.x === t18.p2.x && t18.p1.y === t18.p2.y || e.p1.x === e.p2.x && e.p1.y === e.p2.y)
      return null;
    let n2 = (e.p2.y - e.p1.y) * (t18.p2.x - t18.p1.x) - (e.p2.x - e.p1.x) * (t18.p2.y - t18.p1.y);
    if (n2 === 0)
      return null;
    let r = ((e.p2.x - e.p1.x) * (t18.p1.y - e.p1.y) - (e.p2.y - e.p1.y) * (t18.p1.x - e.p1.x)) / n2, o = ((t18.p2.x - t18.p1.x) * (t18.p1.y - e.p1.y) - (t18.p2.y - t18.p1.y) * (t18.p1.x - e.p1.x)) / n2;
    return r < 0 || r > 1 || o < 0 || o > 1 ? null : r;
  }
  s(ou, "testLineLineT");
  function Vn(t18, e) {
    let n2 = ou(t18, e);
    return n2 ? v(t18.p1.x + n2 * (t18.p2.x - t18.p1.x), t18.p1.y + n2 * (t18.p2.y - t18.p1.y)) : null;
  }
  s(Vn, "testLineLine");
  function Pn(t18, e) {
    let n2 = e.p2.sub(e.p1), r = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY;
    if (n2.x != 0) {
      let i = (t18.pos.x - e.p1.x) / n2.x, a2 = (t18.pos.x + t18.width - e.p1.x) / n2.x;
      r = Math.max(r, Math.min(i, a2)), o = Math.min(o, Math.max(i, a2));
    }
    if (n2.y != 0) {
      let i = (t18.pos.y - e.p1.y) / n2.y, a2 = (t18.pos.y + t18.height - e.p1.y) / n2.y;
      r = Math.max(r, Math.min(i, a2)), o = Math.min(o, Math.max(i, a2));
    }
    return o >= r && o >= 0 && r <= 1;
  }
  s(Pn, "testRectLine");
  function Bt(t18, e) {
    return e.x > t18.pos.x && e.x < t18.pos.x + t18.width && e.y > t18.pos.y && e.y < t18.pos.y + t18.height;
  }
  s(Bt, "testRectPoint");
  function Ro(t18, e) {
    let n2 = Math.max(t18.pos.x, Math.min(e.center.x, t18.pos.x + t18.width)), r = Math.max(t18.pos.y, Math.min(e.center.y, t18.pos.y + t18.height));
    return v(n2, r).sdist(e.center) <= e.radius * e.radius;
  }
  s(Ro, "testRectCircle");
  function Do(t18, e) {
    return Bo(e, new ye(t18.points()));
  }
  s(Do, "testRectPolygon");
  function Gn(t18, e) {
    let n2 = e.sub(t18.p1), r = t18.p2.sub(t18.p1);
    if (Math.abs(n2.cross(r)) > Number.EPSILON)
      return false;
    let o = n2.dot(r) / r.dot(r);
    return o >= 0 && o <= 1;
  }
  s(Gn, "testLinePoint");
  function Ft(t18, e) {
    let n2 = t18.p2.sub(t18.p1), r = n2.dot(n2), o = t18.p1.sub(e.center), i = 2 * n2.dot(o), a2 = o.dot(o) - e.radius * e.radius, l = i * i - 4 * r * a2;
    if (r <= Number.EPSILON || l < 0)
      return false;
    if (l == 0) {
      let u2 = -i / (2 * r);
      if (u2 >= 0 && u2 <= 1)
        return true;
    } else {
      let u2 = (-i + Math.sqrt(l)) / (2 * r), m = (-i - Math.sqrt(l)) / (2 * r);
      if (u2 >= 0 && u2 <= 1 || m >= 0 && m <= 1)
        return true;
    }
    return Mn(e, t18.p1);
  }
  s(Ft, "testLineCircle");
  function Tr(t18, e) {
    if (et(e, t18.p1) || et(e, t18.p2))
      return true;
    for (let n2 = 0; n2 < e.pts.length; n2++) {
      let r = e.pts[n2], o = e.pts[(n2 + 1) % e.pts.length];
      if (Vn(t18, new Te(r, o)))
        return true;
    }
    return false;
  }
  s(Tr, "testLinePolygon");
  function Mn(t18, e) {
    return t18.center.sdist(e) < t18.radius * t18.radius;
  }
  s(Mn, "testCirclePoint");
  function su(t18, e) {
    return t18.center.sdist(e.center) < (t18.radius + e.radius) * (t18.radius + e.radius);
  }
  s(su, "testCircleCircle");
  function Qt(t18, e) {
    let n2 = e.pts[e.pts.length - 1];
    for (let r of e.pts) {
      if (Ft(new Te(n2, r), t18))
        return true;
      n2 = r;
    }
    return Mn(t18, e.pts[0]) ? true : et(e, t18.center);
  }
  s(Qt, "testCirclePolygon");
  function Bo(t18, e) {
    for (let n2 = 0; n2 < t18.pts.length; n2++)
      if (Tr(new Te(t18.pts[n2], t18.pts[(n2 + 1) % t18.pts.length]), e))
        return true;
    return !!(t18.pts.some((n2) => et(e, n2)) || e.pts.some((n2) => et(t18, n2)));
  }
  s(Bo, "testPolygonPolygon");
  function et(t18, e) {
    let n2 = false, r = t18.pts;
    for (let o = 0, i = r.length - 1; o < r.length; i = o++)
      r[o].y > e.y != r[i].y > e.y && e.x < (r[i].x - r[o].x) * (e.y - r[o].y) / (r[i].y - r[o].y) + r[o].x && (n2 = !n2);
    return n2;
  }
  s(et, "testPolygonPoint");
  function Ar(t18, e) {
    e = e.sub(t18.center);
    let n2 = ue(t18.angle), r = Math.cos(n2), o = Math.sin(n2), i = e.x * r + e.y * o, a2 = -e.x * o + e.y * r;
    return i * i / (t18.radiusX * t18.radiusX) + a2 * a2 / (t18.radiusY * t18.radiusY) < 1;
  }
  s(Ar, "testEllipsePoint");
  function Tn(t18, e) {
    let n2 = e.center.sub(t18.center), r = ue(t18.angle), o = Math.cos(r), i = Math.sin(r), a2 = n2.x * o + n2.y * i, l = -n2.x * i + n2.y * o;
    return Ar(new ke(v(), t18.radiusX + e.radius, t18.radiusY + e.radius, 0), v(a2, l));
  }
  s(Tn, "testEllipseCircle");
  function Fo(t18, e) {
    let n2 = t18.toMat2().inverse;
    return e = new Te(n2.transform(e.p1.sub(t18.center)), n2.transform(e.p2.sub(t18.center))), Ft(e, new we(v(), 1));
  }
  s(Fo, "testEllipseLine");
  function iu(t18, e) {
    if (t18.radiusX === t18.radiusY)
      return Tn(e, new we(t18.center, t18.radiusX));
    if (e.radiusX === e.radiusY)
      return Tn(t18, new we(e.center, e.radiusX));
    let n2 = new bt(1 / t18.radiusX ** 2, 0, 0, 0, 1 / t18.radiusY ** 2, 0, 0, 0, -1), r = new bt(1 / e.radiusX ** 2, 0, 0, 0, 1 / e.radiusY ** 2, 0, 0, 0, -1), o = t18.center.x, i = t18.center.y, a2 = e.center.x, l = e.center.y, u2 = ue(t18.angle), m = ue(e.angle), d = new bt(Math.cos(u2), -Math.sin(u2), o, Math.sin(u2), Math.cos(u2), i, 0, 0, 1), C = new bt(Math.cos(m), -Math.sin(m), a2, Math.sin(m), Math.cos(m), l, 0, 0, 1), p = d.inverse, b = C.inverse, f = p.transpose.mul(n2).mul(p), O = b.transpose.mul(r).mul(b), g = f.m11, y2 = f.m12, V = f.m13, A = f.m21, D = f.m22, G = f.m23, x = f.m31, w = f.m32, S = f.m33, M = O.m11, R = O.m12, F = O.m13, j = O.m21, H = O.m22, q = O.m23, W = O.m31, N = O.m32, k2 = O.m33, Z = g * D * S - g * G * w - y2 * A * S + y2 * G * x + V * A * w - V * D * x, X = (g * D * k2 - g * G * N - g * w * q + g * S * H - y2 * A * k2 + y2 * G * W + y2 * x * q - y2 * S * j + V * A * N - V * D * W - V * x * H + V * w * j + A * w * F - A * S * R - D * x * F + D * S * M + G * x * R - G * w * M) / Z, ee = (g * H * k2 - g * q * N - y2 * j * k2 + y2 * q * W + V * j * N - V * H * W - A * R * k2 + A * F * N + D * M * k2 - D * F * W - G * M * N + G * R * W + x * R * q - x * F * H - w * M * q + w * F * j + S * M * H - S * R * j) / Z, Ee = (M * H * k2 - M * q * N - R * j * k2 + R * q * W + F * j * N - F * H * W) / Z;
    if (X >= 0) {
      let _ = -3 * ee + X ** 2, gt = 3 * X * Ee + ee * X ** 2 - 4 * ee ** 2, Gt = -27 * Ee ** 2 + 18 * Ee * X * ee + X ** 2 * ee ** 2 - 4 * X ** 3 * Ee - 4 * ee ** 3;
      return !(_ > 0 && gt < 0 && Gt > 0);
    } else {
      let _ = -3 * ee + X ** 2, gt = -27 * Ee ** 2 + 18 * Ee * X * ee + X ** 2 * ee ** 2 - 4 * X ** 3 * Ee - 4 * ee ** 3;
      return !(_ > 0 && gt > 0);
    }
  }
  s(iu, "testEllipseEllipse");
  function Lo(t18, e) {
    return Sr(t18, new ye(e.points()));
  }
  s(Lo, "testEllipseRect");
  function Sr(t18, e) {
    let n2 = t18.toMat2().inverse;
    return e = new ye(e.pts.map((r) => n2.transform(r.sub(t18.center)))), Qt(new we(v(), 1), e);
  }
  s(Sr, "testEllipsePolygon");
  function au(t18, e) {
    return t18.x === e.x && t18.y === e.y;
  }
  s(au, "testPointPoint");
  function uu(t18, e) {
    return e instanceof E ? au(e, t18.pt) : e instanceof we ? Mn(e, t18.pt) : e instanceof Te ? Gn(e, t18.pt) : e instanceof $ ? Bt(e, t18.pt) : e instanceof ye ? et(e, t18.pt) : e instanceof ke ? Ar(e, t18.pt) : false;
  }
  s(uu, "testPointShape");
  function cu(t18, e) {
    return e instanceof E ? Gn(t18, e) : e instanceof we ? Ft(t18, e) : e instanceof Te ? Vn(t18, e) != null : e instanceof $ ? Pn(e, t18) : e instanceof ye ? Tr(t18, e) : e instanceof ke ? Fo(e, t18) : false;
  }
  s(cu, "testLineShape");
  function lu(t18, e) {
    return e instanceof E ? Mn(t18, e) : e instanceof we ? su(t18, e) : e instanceof Te ? Ft(e, t18) : e instanceof $ ? Ro(e, t18) : e instanceof ye ? Qt(t18, e) : e instanceof ke ? Tn(e, t18) : false;
  }
  s(lu, "testCircleShape");
  function mu(t18, e) {
    return e instanceof E ? Bt(t18, e) : e instanceof we ? Ro(t18, e) : e instanceof Te ? Pn(t18, e) : e instanceof $ ? Er(t18, e) : e instanceof ye ? Do(t18, e) : e instanceof ke ? Lo(e, t18) : false;
  }
  s(mu, "testRectShape");
  function pu(t18, e) {
    return e instanceof E ? et(t18, e) : e instanceof we ? Qt(e, t18) : e instanceof Te ? Tr(e, t18) : e instanceof $ ? Do(e, t18) : e instanceof ye ? Bo(e, t18) : e instanceof ke ? Sr(e, t18) : false;
  }
  s(pu, "testPolygonShape");
  function du(t18, e) {
    return e instanceof E ? Ar(t18, e) : e instanceof we ? Tn(t18, e) : e instanceof Te ? Fo(t18, e) : e instanceof $ ? Lo(t18, e) : e instanceof ye ? Sr(t18, e) : e instanceof ke ? iu(e, t18) : false;
  }
  s(du, "testEllipseShape");
  function jo(t18, e, n2) {
    let r = t18, o = n2.p1, i = n2.p2, a2 = e, l = i.sub(o), u2 = a2.cross(l);
    if (Math.abs(u2) < Number.EPSILON)
      return null;
    let m = o.sub(r), d = m.cross(l) / u2;
    if (d <= 0 || d >= 1)
      return null;
    let C = m.cross(a2) / u2;
    if (C <= 0 || C >= 1)
      return null;
    let p = l.normal().unit();
    return e.dot(p) > 0 && (p.x *= -1, p.y *= -1), { point: r.add(a2.scale(d)), normal: p, fraction: d };
  }
  s(jo, "raycastLine");
  function fu(t18, e, n2) {
    let r = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY, i;
    if (t18.x != 0) {
      let a2 = (n2.pos.x - t18.x) / e.x, l = (n2.pos.x + n2.width - t18.x) / e.x;
      i = v(-Math.sign(e.x), 0), r = Math.max(r, Math.min(a2, l)), o = Math.min(o, Math.max(a2, l));
    }
    if (t18.y != 0) {
      let a2 = (n2.pos.y - t18.y) / e.y, l = (n2.pos.y + n2.height - t18.y) / e.y;
      Math.min(a2, l) > r && (i = v(0, -Math.sign(e.y))), r = Math.max(r, Math.min(a2, l)), o = Math.min(o, Math.max(a2, l));
    }
    return o >= r && r >= 0 && r <= 1 ? { point: t18.add(e.scale(r)), normal: i, fraction: r } : null;
  }
  s(fu, "raycastRect");
  function Ko(t18, e, n2) {
    let r = t18, o = n2.center, i = e, a2 = i.dot(i), l = r.sub(o), u2 = 2 * i.dot(l), m = l.dot(l) - n2.radius * n2.radius, d = u2 * u2 - 4 * a2 * m;
    if (a2 <= Number.EPSILON || d < 0)
      return null;
    if (d == 0) {
      let C = -u2 / (2 * a2);
      if (C >= 0 && C <= 1) {
        let p = r.add(i.scale(C));
        return { point: p, normal: p.sub(o), fraction: C };
      }
    } else {
      let C = (-u2 + Math.sqrt(d)) / (2 * a2), p = (-u2 - Math.sqrt(d)) / (2 * a2), b = null;
      if (C >= 0 && C <= 1 && (b = C), p >= 0 && p <= 1 && (b = Math.min(p, b ?? p)), b != null) {
        let f = r.add(i.scale(b));
        return { point: f, normal: f.sub(o).unit(), fraction: b };
      }
    }
    return null;
  }
  s(Ko, "raycastCircle");
  function hu(t18, e, n2) {
    let r = n2.pts, o = null, i = r[r.length - 1];
    for (let a2 = 0; a2 < r.length; a2++) {
      let l = r[a2], u2 = jo(t18, e, new Te(i, l));
      u2 && (!o || o.fraction > u2.fraction) && (o = u2), i = l;
    }
    return o;
  }
  s(hu, "raycastPolygon");
  function gu(t18, e, n2) {
    let r = n2.toMat2(), o = r.inverse, i = o.transform(t18.sub(n2.center)), a2 = o.transform(e), l = Ko(i, a2, new we(v(), 1));
    if (l) {
      let u2 = Dt.rotation(ue(-n2.angle)), d = Dt.scale(n2.radiusX, n2.radiusY).transform(l.point), C = r.transform(l.point).add(n2.center), p = C.dist(t18) / e.len();
      return { point: C, normal: u2.transform(v(n2.radiusY ** 2 * d.x, n2.radiusX ** 2 * d.y)).unit(), fraction: p };
    }
    return l;
  }
  s(gu, "raycastEllipse");
  function Io(t18, e, n2, r = 64) {
    let o = t18, i = e.len(), a2 = e.scale(1 / i), l = 0, u2 = v(Math.floor(t18.x), Math.floor(t18.y)), m = v(a2.x > 0 ? 1 : -1, a2.y > 0 ? 1 : -1), d = v(Math.abs(1 / a2.x), Math.abs(1 / a2.y)), C = v(m.x > 0 ? u2.x + 1 - t18.x : t18.x - u2.x, m.y > 0 ? u2.y + 1 - t18.y : t18.y - u2.y), p = v(d.x < 1 / 0 ? d.x * C.x : 1 / 0, d.y < 1 / 0 ? d.y * C.y : 1 / 0), b = -1;
    for (; l <= r; ) {
      let f = n2(u2);
      if (f === true)
        return { point: o.add(a2.scale(l)), normal: v(b === 0 ? -m.x : 0, b === 1 ? -m.y : 0), fraction: l / i, gridPos: u2 };
      if (f)
        return f;
      p.x < p.y ? (u2.x += m.x, l = p.x, p.x += d.x, b = 0) : (u2.y += m.y, l = p.y, p.y += d.y, b = 1);
    }
    return null;
  }
  s(Io, "raycastGrid");
  var An = class t7 {
    static {
      s(this, "Point");
    }
    pt;
    constructor(e) {
      this.pt = e.clone();
    }
    transform(e) {
      return new t7(e.multVec2(this.pt));
    }
    bbox() {
      return new $(this.pt, 0, 0);
    }
    area() {
      return 0;
    }
    clone() {
      return new t7(this.pt);
    }
    collides(e) {
      return uu(this, e);
    }
    contains(e) {
      return this.pt.eq(e);
    }
    raycast(e, n2) {
      return null;
    }
    random() {
      return this.pt.clone();
    }
  };
  var Te = class t8 {
    static {
      s(this, "Line");
    }
    p1;
    p2;
    constructor(e, n2) {
      this.p1 = e.clone(), this.p2 = n2.clone();
    }
    transform(e) {
      return new t8(e.multVec2(this.p1), e.multVec2(this.p2));
    }
    bbox() {
      return $.fromPoints(this.p1, this.p2);
    }
    area() {
      return this.p1.dist(this.p2);
    }
    clone() {
      return new t8(this.p1, this.p2);
    }
    collides(e) {
      return cu(this, e);
    }
    contains(e) {
      return this.collides(e);
    }
    raycast(e, n2) {
      return jo(e, n2, this);
    }
    random() {
      return this.p1.add(this.p2.sub(this.p1).scale(ge(1)));
    }
  };
  var $ = class t9 {
    static {
      s(this, "Rect");
    }
    pos;
    width;
    height;
    constructor(e, n2, r) {
      this.pos = e.clone(), this.width = n2, this.height = r;
    }
    static fromPoints(e, n2) {
      return new t9(e.clone(), n2.x - e.x, n2.y - e.y);
    }
    center() {
      return new E(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(e) {
      return new ye(this.points().map((n2) => e.multVec2(n2)));
    }
    bbox() {
      return this.clone();
    }
    area() {
      return this.width * this.height;
    }
    clone() {
      return new t9(this.pos.clone(), this.width, this.height);
    }
    distToPoint(e) {
      return Math.sqrt(this.sdistToPoint(e));
    }
    sdistToPoint(e) {
      let n2 = this.pos, r = this.pos.add(this.width, this.height), o = Math.max(n2.x - e.x, 0, e.x - r.x), i = Math.max(n2.y - e.y, 0, e.y - r.y);
      return o * o + i * i;
    }
    collides(e) {
      return mu(this, e);
    }
    contains(e) {
      return this.collides(e);
    }
    raycast(e, n2) {
      return fu(e, n2, this);
    }
    random() {
      return this.pos.add(ge(this.width), ge(this.height));
    }
  };
  var we = class t10 {
    static {
      s(this, "Circle");
    }
    center;
    radius;
    constructor(e, n2) {
      this.center = e.clone(), this.radius = n2;
    }
    transform(e) {
      return new ke(this.center, this.radius, this.radius).transform(e);
    }
    bbox() {
      return $.fromPoints(this.center.sub(v(this.radius)), this.center.add(v(this.radius)));
    }
    area() {
      return this.radius * this.radius * Math.PI;
    }
    clone() {
      return new t10(this.center, this.radius);
    }
    collides(e) {
      return lu(this, e);
    }
    contains(e) {
      return this.collides(e);
    }
    raycast(e, n2) {
      return Ko(e, n2, this);
    }
    random() {
      return this.center.add(E.fromAngle(ge(360)).scale(ge(this.radius)));
    }
  };
  var ke = class t11 {
    static {
      s(this, "Ellipse");
    }
    center;
    radiusX;
    radiusY;
    angle;
    constructor(e, n2, r, o = 0) {
      this.center = e.clone(), this.radiusX = n2, this.radiusY = r, this.angle = o;
    }
    static fromMat2(e) {
      let n2 = e.inverse, r = n2.transpose.mul(n2), [o, i] = r.eigenvalues, [a2, l] = r.eigenvectors(o, i), [u2, m] = [1 / Math.sqrt(o), 1 / Math.sqrt(i)];
      return u2 > m ? new t11(v(), u2, m, lt(Math.atan2(-a2[1], a2[0]))) : new t11(v(), m, u2, lt(Math.atan2(-l[1], l[0])));
    }
    toMat2() {
      let e = ue(this.angle), n2 = Math.cos(e), r = Math.sin(e);
      return new Dt(n2 * this.radiusX, -r * this.radiusY, r * this.radiusX, n2 * this.radiusY);
    }
    transform(e) {
      if (this.angle == 0 && e.getRotation() == 0)
        return new t11(e.multVec2(this.center), e.m[0] * this.radiusX, e.m[5] * this.radiusY);
      {
        let n2 = this.toMat2(), r = e.getRotation(), o = e.getScale();
        n2 = bt.fromMat2(n2).scale(o.x, o.y).rotate(r).toMat2();
        let a2 = t11.fromMat2(n2);
        return a2.center = e.multVec2(this.center), a2;
      }
    }
    bbox() {
      if (this.angle == 0)
        return $.fromPoints(this.center.sub(v(this.radiusX, this.radiusY)), this.center.add(v(this.radiusX, this.radiusY)));
      {
        let e = ue(this.angle), n2 = Math.cos(e), r = Math.sin(e), o = this.radiusX * n2, i = this.radiusX * r, a2 = this.radiusY * r, l = this.radiusY * n2, u2 = Math.sqrt(o * o + a2 * a2), m = Math.sqrt(i * i + l * l);
        return $.fromPoints(this.center.sub(v(u2, m)), this.center.add(v(u2, m)));
      }
    }
    area() {
      return this.radiusX * this.radiusY * Math.PI;
    }
    clone() {
      return new t11(this.center, this.radiusX, this.radiusY, this.angle);
    }
    collides(e) {
      return du(this, e);
    }
    contains(e) {
      e = e.sub(this.center);
      let n2 = ue(this.angle), r = Math.cos(n2), o = Math.sin(n2), i = e.x * r + e.y * o, a2 = -e.x * o + e.y * r;
      return i * i / (this.radiusX * this.radiusX) + a2 * a2 / (this.radiusY * this.radiusY) < 1;
    }
    raycast(e, n2) {
      return gu(e, n2, this);
    }
    random() {
      return this.center;
    }
  };
  function bu(t18, e, n2, r) {
    let o = e.sub(t18), i = r.sub(n2), a2 = o.cross(i);
    return a2 < 1e-5 && a2 > -1e-5 || (a2 = n2.sub(t18).cross(i) / a2, a2 < 0 || a2 > 1) ? null : t18.add(o.scale(a2));
  }
  s(bu, "segmentLineIntersection");
  var ye = class t12 {
    static {
      s(this, "Polygon");
    }
    pts;
    constructor(e) {
      if (e.length < 3)
        throw new Error("Polygons should have at least 3 vertices");
      this.pts = e;
    }
    transform(e) {
      return new t12(this.pts.map((n2) => e.multVec2(n2)));
    }
    bbox() {
      let e = v(Number.MAX_VALUE), n2 = v(-Number.MAX_VALUE);
      for (let r of this.pts)
        e.x = Math.min(e.x, r.x), n2.x = Math.max(n2.x, r.x), e.y = Math.min(e.y, r.y), n2.y = Math.max(n2.y, r.y);
      return $.fromPoints(e, n2);
    }
    area() {
      let e = 0, n2 = this.pts.length;
      for (let r = 0; r < n2; r++) {
        let o = this.pts[r], i = this.pts[(r + 1) % n2];
        e += o.x * i.y * 0.5, e -= i.x * o.y * 0.5;
      }
      return Math.abs(e);
    }
    clone() {
      return new t12(this.pts.map((e) => e.clone()));
    }
    collides(e) {
      return pu(this, e);
    }
    contains(e) {
      return this.collides(e);
    }
    raycast(e, n2) {
      return hu(e, n2, this);
    }
    random() {
      return v();
    }
    cut(e, n2) {
      let r = new Te(e, n2), o = [], i = [], a2 = n2.sub(e), l = this.pts[this.pts.length - 1], u2 = l.sub(e), m = a2.cross(u2) > 0;
      return this.pts.forEach((d) => {
        u2 = d.sub(e);
        let C = a2.cross(u2) > 0;
        if (m != C) {
          let p = bu(l, d, e, n2);
          o.push(p), i.push(p), m = C;
        }
        (C ? o : i).push(d), l = d;
      }), [o.length ? new t12(o) : null, i.length ? new t12(i) : null];
    }
  };
  function ko(t18, e, n2, r) {
    let o = r * r, i = 1 - r, a2 = i * i;
    return t18.scale(a2).add(e.scale(2 * i * r)).add(n2.scale(o));
  }
  s(ko, "evaluateQuadratic");
  function _o(t18, e, n2, r) {
    let o = 1 - r;
    return e.sub(t18).scale(2 * o).add(n2.sub(e).scale(2 * r));
  }
  s(_o, "evaluateQuadraticFirstDerivative");
  function No(t18, e, n2, r) {
    return n2.sub(e.scale(2)).add(t18).scale(2);
  }
  s(No, "evaluateQuadraticSecondDerivative");
  function Jt(t18, e, n2, r, o) {
    let i = o * o, a2 = i * o, l = 1 - o, u2 = l * l, m = u2 * l;
    return t18.scale(m).add(e.scale(3 * u2 * o)).add(n2.scale(3 * l * i)).add(r.scale(a2));
  }
  s(Jt, "evaluateBezier");
  function Uo(t18, e, n2, r, o) {
    let i = o * o, a2 = 1 - o, l = a2 * a2;
    return e.sub(t18).scale(3 * l).add(n2.sub(e).scale(6 * a2 * o)).add(r.sub(n2).scale(3 * i));
  }
  s(Uo, "evaluateBezierFirstDerivative");
  function Ho(t18, e, n2, r, o) {
    let i = 1 - o;
    return n2.sub(e.scale(2)).add(t18).scale(6 * i).add(r.sub(n2.scale(2)).add(e).scale(6 * o));
  }
  s(Ho, "evaluateBezierSecondDerivative");
  function qo(t18, e, n2, r, o) {
    let i = 0.5 * (((-o + 2) * o - 1) * o), a2 = 0.5 * ((3 * o - 5) * o * o + 2), l = 0.5 * (((-3 * o + 4) * o + 1) * o), u2 = 0.5 * ((o - 1) * o * o);
    return t18.scale(i).add(e.scale(a2)).add(n2.scale(l)).add(r.scale(u2));
  }
  s(qo, "evaluateCatmullRom");
  function zo(t18, e, n2, r, o) {
    let i = 0.5 * ((-3 * o + 4) * o - 1), a2 = 0.5 * ((9 * o - 10) * o), l = 0.5 * ((-9 * o + 8) * o + 1), u2 = 0.5 * ((3 * o - 2) * o);
    return t18.scale(i).add(e.scale(a2)).add(n2.scale(l)).add(r.scale(u2));
  }
  s(zo, "evaluateCatmullRomFirstDerivative");
  function Yo(t18) {
    let e = Vr(t18), n2 = e(1);
    return (r) => {
      let o = r * n2, i = e(o, true);
      return t18(i);
    };
  }
  s(Yo, "normalizedCurve");
  function Vr(t18, e = 10, n2 = 10) {
    let r = [0], o = [0], a2 = 1 / (e - 1) / n2, l = 0, u2 = t18(0), m = 0;
    for (let d = 1; d < e; d++) {
      for (let C = 0; C < n2; C++) {
        m += a2;
        let p = t18(m), b = p.dist(u2);
        l += b, u2 = p;
      }
      r[d] = l, o[d] = m;
    }
    return o[e - 1] = 1, (d, C = false) => {
      if (C) {
        let p = d;
        if (p <= 0)
          return 0;
        if (p >= l)
          return 1;
        let b = 0;
        for (; r[b + 1] < p; )
          b++;
        let f = o[b], O = o[b + 1], g = r[b], y2 = r[b + 1], V = (p - g) / (y2 - g);
        return f + (O - f) * V;
      } else {
        if (d <= 0)
          return 0;
        if (d >= 1)
          return r[e - 1];
        let p = 0;
        for (; o[p + 1] < d; )
          p++;
        let b = o[p], f = o[p + 1], O = r[p], g = r[p + 1], y2 = (d - b) / (f - b);
        return O + (g - O) * y2;
      }
    };
  }
  s(Vr, "curveLengthApproximation");
  function Lt(t18, e, n2, r) {
    let o = 2 * t18 + e - 2 * r + n2, i = -3 * t18 + 3 * r - 2 * e - n2, a2 = e, l = t18;
    return (u2) => {
      let m = u2 * u2, d = m * u2;
      return o * d + i * m + a2 * u2 + l;
    };
  }
  s(Lt, "hermite");
  function Pr(t18, e, n2, r, o, i = Lt) {
    let a2 = i(e.x, (1 - o) * (n2.x - t18.x), (1 - o) * (r.x - e.x), n2.x), l = i(e.y, (1 - o) * (n2.y - t18.y), (1 - o) * (r.y - e.y), n2.y);
    return (u2) => new E(a2(u2), l(u2));
  }
  s(Pr, "cardinal");
  function jt(t18, e, n2, r, o = Lt) {
    return Pr(t18, e, n2, r, 0.5, o);
  }
  s(jt, "catmullRom");
  function Wo(t18, e, n2, r, o = Lt) {
    return jt(r.add(t18.sub(e).scale(6)), t18, r, t18.add(r.sub(n2).scale(6)), o);
  }
  s(Wo, "bezier");
  function $o(t18, e, n2, r, o, i, a2, l = Lt) {
    let u2 = l(e.x, 0.5 * (1 - o) * (1 + a2) * (1 + i) * (e.x - t18.x) + 0.5 * (1 - o) * (1 - a2) * (1 - i) * (n2.x - e.x), 0.5 * (1 - o) * (1 + a2) * (1 - i) * (n2.x - e.x) + 0.5 * (1 - o) * (1 - a2) * (1 + i) * (r.x - n2.x), n2.x), m = l(e.y, 0.5 * (1 - o) * (1 + a2) * (1 + i) * (e.y - t18.y) + 0.5 * (1 - o) * (1 - a2) * (1 - i) * (n2.y - e.y), 0.5 * (1 - o) * (1 + a2) * (1 - i) * (n2.y - e.y) + 0.5 * (1 - o) * (1 - a2) * (1 + i) * (r.y - n2.y), n2.y);
    return (d) => new E(u2(d), m(d));
  }
  s($o, "kochanekBartels");
  function Xo(t18, e, n2, r) {
    let o = 2 * t18 + e - 2 * r + n2, i = -3 * t18 + 3 * r - 2 * e + n2, a2 = e;
    return (l) => {
      let u2 = l * l;
      return 3 * o * u2 + 2 * i * l + a2;
    };
  }
  s(Xo, "hermiteFirstDerivative");
  function Wt(t18) {
    return 0 <= t18 && t18 <= 1;
  }
  s(Wt, "inZeroOneDomain");
  function xr(t18, e) {
    return Math.abs(t18 - e) <= Number.EPSILON;
  }
  s(xr, "approximately");
  function $t(t18) {
    return t18 < 0 ? -Math.pow(-t18, 1 / 3) : Math.pow(t18, 1 / 3);
  }
  s($t, "cubeRoot");
  function yu(t18, e, n2, r) {
    let o = 3 * t18 - 6 * e + 3 * n2, i = -3 * t18 + 3 * e, a2 = t18, l = -t18 + 3 * e - 3 * n2 + r;
    if (xr(l, 0)) {
      if (xr(o, 0))
        return xr(i, 0) ? [] : [-a2 / i].filter(Wt);
      let y2 = Math.sqrt(i * i - 4 * o * a2), V = 2 * o;
      return [(y2 - i) / V, (-i - y2) / V].filter(Wt);
    }
    o /= l, i /= l, a2 /= l;
    let u2 = (3 * i - o * o) / 3, m = u2 / 3, d = (2 * o * o * o - 9 * o * i + 27 * a2) / 27, C = d / 2, p = C * C + m * m * m;
    if (p < 0) {
      let y2 = -u2 / 3, V = y2 * y2 * y2, A = Math.sqrt(V), D = -d / (2 * A), G = D < -1 ? -1 : D > 1 ? 1 : D, x = Math.acos(G), S = 2 * $t(A), M = S * Math.cos(x / 3) - o / 3, R = S * Math.cos((x + 2 * Math.PI) / 3) - o / 3, F = S * Math.cos((x + 4 * Math.PI) / 3) - o / 3;
      return [M, R, F].filter(Wt);
    }
    if (p === 0) {
      let y2 = C < 0 ? $t(-C) : -$t(C), V = 2 * y2 - o / 3, A = -y2 - o / 3;
      return [V, A].filter(Wt);
    }
    let b = Math.sqrt(p), f = $t(b - C), O = $t(b + C);
    return [f - O - o / 3].filter(Wt);
  }
  s(yu, "getCubicRoots");
  function xu(t18, e, n2, r, o) {
    let i = yu(t18.x - o, e.x - o, n2.x - o, r.x - o);
    return i.length > 0 ? Jt(t18, e, n2, r, i[0]).y : NaN;
  }
  s(xu, "cubicBezierYforX");
  function Qo(t18) {
    if (!t18 || t18.length == 0)
      throw new Error("Need at least one point for easingLinear.");
    let e = t18.length;
    return (n2) => {
      if (n2 <= 0 || t18.length == 1 || n2 <= t18[0].x)
        return t18[0].y;
      for (let r = 0; r < e; r++)
        if (t18[r].x >= n2)
          return Ve(n2, t18[r - 1].x, t18[r].x, t18[r - 1].y, t18[r].y);
      return t18[t18.length - 1].y;
    };
  }
  s(Qo, "easingLinear");
  function Jo(t18, e) {
    return (n2) => xu(v(0, 0), t18, e, v(1, 1), n2);
  }
  s(Jo, "easingCubicBezier");
  function Zo(t18, e = "jump-end") {
    let n2 = 1 / t18, r = e == "jump-start" || e == "jump-both", o = e == "jump-end" || e == "jump-both", i = 1 / (t18 + (o ? 1 : 0)), a2 = r ? i : 0;
    return (l) => {
      let u2 = Math.floor(l / n2);
      return a2 + u2 * i;
    };
  }
  s(Zo, "easingSteps");
  function es(t18, e) {
    let n2 = Number.MAX_VALUE, r = { normal: v(0), distance: 0 };
    for (let o of [t18, e])
      for (let i = 0; i < o.pts.length; i++) {
        let a2 = o.pts[i], u2 = o.pts[(i + 1) % o.pts.length].sub(a2).normal().unit(), m = Number.MAX_VALUE, d = -Number.MAX_VALUE;
        for (let f = 0; f < t18.pts.length; f++) {
          let O = t18.pts[f].dot(u2);
          m = Math.min(m, O), d = Math.max(d, O);
        }
        let C = Number.MAX_VALUE, p = -Number.MAX_VALUE;
        for (let f = 0; f < e.pts.length; f++) {
          let O = e.pts[f].dot(u2);
          C = Math.min(C, O), p = Math.max(p, O);
        }
        let b = Math.min(d, p) - Math.max(m, C);
        if (b < 0)
          return null;
        if (b < Math.abs(n2)) {
          let f = p - m, O = C - d;
          n2 = Math.abs(f) < Math.abs(O) ? f : O, r.normal = u2, r.distance = n2;
        }
      }
    return r;
  }
  s(es, "sat");
  function ts(t18, e, n2) {
    return (e.x - t18.x) * (n2.y - t18.y) - (e.y - t18.y) * (n2.x - t18.x) >= 0;
  }
  s(ts, "isOrientedCcw");
  function vu(t18) {
    let e = 0, n2 = t18[t18.length - 1];
    for (let r = 0; r < t18.length; r++)
      e += (t18[r].x - n2.x) * (t18[r].y + n2.y), n2 = t18[r];
    return e < 0;
  }
  s(vu, "isOrientedCcwPolygon");
  function vr(t18, e, n2, r) {
    let o = r.x - n2.x, i = r.y - n2.y, a2 = o * (t18.y - n2.y) - i * (t18.x - n2.x), l = o * (e.y - n2.y) - i * (e.x - n2.x);
    return a2 * l >= 0;
  }
  s(vr, "onSameSide");
  function Cu(t18, e, n2, r) {
    return vr(t18, e, n2, r) && vr(t18, n2, e, r) && vr(t18, r, e, n2);
  }
  s(Cu, "pointInTriangle");
  function wu(t18, e, n2, r) {
    for (let o of t18)
      if (o !== e && o !== n2 && o !== r && Cu(o, e, n2, r))
        return true;
    return false;
  }
  s(wu, "someInTriangle");
  function Ou(t18, e, n2, r) {
    return ts(t18, e, n2) && !wu(r, t18, e, n2);
  }
  s(Ou, "isEar");
  function Rn(t18) {
    if (t18.length < 3)
      return [];
    if (t18.length == 3)
      return [t18];
    let e = [], n2 = [], r = 0;
    for (let C = 0; C < t18.length; C++) {
      let p = t18[r], b = t18[C];
      (b.x < p.x || b.x == p.x && b.y < p.y) && (r = r), e[C] = C + 1, n2[C] = C - 1;
    }
    e[e.length - 1] = 0, n2[0] = n2.length - 1, vu(t18) || ([e, n2] = [n2, e]);
    let o = [];
    for (let C = 0; C < t18.length; ++C)
      ts(t18[n2[C]], t18[C], t18[e[C]]) || o.push(t18[C]);
    let i = [], a2 = t18.length, l = 1, u2 = 0, m, d;
    for (; a2 > 3; ) {
      m = e[l], d = n2[l];
      let C = t18[d], p = t18[l], b = t18[m];
      if (Ou(C, p, b, o))
        i.push([C, p, b]), e[d] = m, n2[m] = d, o.splice(o.indexOf(p), 1), --a2, u2 = 0;
      else if (++u2 > a2)
        return [];
      l = m;
    }
    return m = e[l], d = n2[l], i.push([t18[d], t18[l], t18[m]]), i;
  }
  s(Rn, "triangulate");
  function ns(t18) {
    if (t18.length < 3)
      return false;
    let e = t18.length - 2, n2 = t18.length - 1, r = 0, o = t18[n2].sub(t18[e]), i = t18[r].sub(t18[n2]), a2 = o.cross(i);
    for (; r + 1 < t18.length; )
      if (e = n2, n2 = r, r++, o = t18[n2].sub(t18[e]), i = t18[r].sub(t18[n2]), o.cross(i) * a2 < 0)
        return false;
    return true;
  }
  s(ns, "isConvex");
  var Dn = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var mt = "topleft";
  var rs = "monospace";
  var yt = "monospace";
  var Zt = "linear";
  var en = [{ name: "a_pos", size: 2 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var Eu = en.reduce((t18, e) => t18 + e.size, 0);
  var os = 2048;
  var ss = os * 4 * Eu;
  var is = os * 6;
  var as = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var us = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	vec4 texColor = texture2D(u_tex, v_uv);
	return vec4((v_color.rgb * texColor.rgb), texColor.a) * v_color.a;
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var tn = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var nn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var cs = /* @__PURE__ */ new Set(["id", "require"]);
  var ls = /* @__PURE__ */ new Set(["add", "fixedUpdate", "update", "draw", "destroy", "inspect", "drawInspect"]);
  var ms = 200;
  var ps = 640;
  var ds = 65536;
  var Bn = Symbol.for("kaplay.cancel");
  var rn = class extends Map {
    static {
      s(this, "Registry");
    }
    lastID = 0;
    push(e) {
      let n2 = this.lastID;
      return this.set(n2, e), this.lastID++, n2;
    }
    pushd(e) {
      let n2 = this.push(e);
      return () => this.delete(n2);
    }
  };
  var _e = class t13 {
    static {
      s(this, "KEventController");
    }
    paused = false;
    cancel;
    constructor(e) {
      this.cancel = e;
    }
    static join(e) {
      let n2 = new t13(() => e.forEach((r) => r.cancel()));
      return Object.defineProperty(n2, "paused", { get: s(() => e[0].paused, "get"), set: s((r) => e.forEach((o) => o.paused = r), "set") }), n2.paused = false, n2;
    }
    static replace(e, n2) {
      return e.cancel = () => n2.cancel(), n2.paused = e.paused, Object.defineProperty(e, "paused", { get: s(() => n2.paused, "get"), set: s((r) => n2.paused = r, "set") }), e;
    }
  };
  var oe = class {
    static {
      s(this, "KEvent");
    }
    cancellers = /* @__PURE__ */ new WeakMap();
    handlers = new rn();
    add(e) {
      function n2(...i) {
        if (!o.paused)
          return e(...i);
      }
      s(n2, "handler");
      let r = this.handlers.pushd(n2), o = new _e(r);
      return this.cancellers.set(n2, r), o;
    }
    addOnce(e) {
      let n2 = this.add((...r) => {
        n2.cancel(), e(...r);
      });
      return n2;
    }
    next() {
      return new Promise((e) => this.addOnce(e));
    }
    trigger(...e) {
      this.handlers.forEach((n2) => {
        let r = n2(...e), o;
        r === Bn && (o = this.cancellers.get(n2)) && o();
      });
    }
    numListeners() {
      return this.handlers.size;
    }
    clear() {
      this.handlers.clear();
    }
  };
  var Ye = class {
    static {
      s(this, "KEventHandler");
    }
    handlers = {};
    registers = {};
    on(e, n2) {
      return this.handlers[e] || (this.handlers[e] = new oe()), this.handlers[e].add(n2);
    }
    onOnce(e, n2) {
      let r = this.on(e, (...o) => {
        r.cancel(), n2(...o);
      });
      return r;
    }
    next(e) {
      return new Promise((n2) => {
        this.onOnce(e, (...r) => n2(r[0]));
      });
    }
    trigger(e, ...n2) {
      this.handlers[e] && this.handlers[e].trigger(...n2);
    }
    remove(e) {
      delete this.handlers[e];
    }
    clear() {
      this.handlers = {};
    }
    numListeners(e) {
      return this.handlers[e]?.numListeners() ?? 0;
    }
  };
  var fs = s((t18) => t18[0] instanceof K, "arrayIsColor");
  var hs = s((t18) => t18[0] instanceof E, "arrayIsVec2");
  var gs = s((t18) => typeof t18[0] == "number", "arrayIsNumber");
  var Kt = class {
    static {
      s(this, "BinaryHeap");
    }
    _items;
    _compareFn;
    constructor(e = (n2, r) => n2 < r) {
      this._compareFn = e, this._items = [];
    }
    insert(e) {
      this._items.push(e), this.moveUp(this._items.length - 1);
    }
    remove() {
      if (this._items.length === 0)
        return null;
      let e = this._items[0], n2 = this._items.pop();
      return this._items.length !== 0 && (this._items[0] = n2, this.moveDown(0)), e;
    }
    clear() {
      this._items.splice(0, this._items.length);
    }
    moveUp(e) {
      for (; e > 0; ) {
        let n2 = Math.floor((e - 1) / 2);
        if (!this._compareFn(this._items[e], this._items[n2]) && this._items[e] >= this._items[n2])
          break;
        this.swap(e, n2), e = n2;
      }
    }
    moveDown(e) {
      for (; e < Math.floor(this._items.length / 2); ) {
        let n2 = 2 * e + 1;
        if (n2 < this._items.length - 1 && !this._compareFn(this._items[n2], this._items[n2 + 1]) && ++n2, this._compareFn(this._items[e], this._items[n2]))
          break;
        this.swap(e, n2), e = n2;
      }
    }
    swap(e, n2) {
      [this._items[e], this._items[n2]] = [this._items[n2], this._items[e]];
    }
    get length() {
      return this._items.length;
    }
  };
  function Tu(t18) {
    let e = window.atob(t18), n2 = e.length, r = new Uint8Array(n2);
    for (let o = 0; o < n2; o++)
      r[o] = e.charCodeAt(o);
    return r.buffer;
  }
  s(Tu, "base64ToArrayBuffer");
  function bs(t18) {
    return Tu(t18.split(",")[1]);
  }
  s(bs, "dataURLToArrayBuffer");
  function Fn(t18, e) {
    let n2 = document.createElement("a");
    n2.href = e, n2.download = t18, n2.click();
  }
  s(Fn, "download");
  function Gr(t18, e) {
    Fn(t18, "data:text/plain;charset=utf-8," + e);
  }
  s(Gr, "downloadText");
  function ys(t18, e) {
    Gr(t18, JSON.stringify(e));
  }
  s(ys, "downloadJSON");
  function Mr(t18, e) {
    let n2 = URL.createObjectURL(e);
    Fn(t18, n2), URL.revokeObjectURL(n2);
  }
  s(Mr, "downloadBlob");
  var Ln = s((t18) => t18.match(/^data:\w+\/\w+;base64,.+/), "isDataURL");
  var xs = s((t18) => t18.split(".").slice(0, -1).join("."), "getFileName");
  function jn(t18, e) {
    if (t18 === e)
      return true;
    let n2 = typeof t18, r = typeof e;
    if (n2 !== r)
      return false;
    if (n2 === "object" && r === "object" && t18 !== null && e !== null) {
      if (Array.isArray(t18) !== Array.isArray(e))
        return false;
      let o = Object.keys(t18), i = Object.keys(e);
      if (o.length !== i.length)
        return false;
      for (let a2 of o) {
        let l = t18[a2], u2 = e[a2];
        if (!jn(l, u2))
          return false;
      }
      return true;
    }
    return false;
  }
  s(jn, "deepEq");
  var vs = /* @__PURE__ */ new Set();
  var Cs = s((t18) => t18 instanceof Error ? t18.message : String(t18), "getErrorMessage");
  function Au(t18) {
    vs.has(t18) || (vs.add(t18), console.warn(t18));
  }
  s(Au, "warn");
  function tt(t18, e) {
    Au(`${t18} is deprecated. Use ${e} instead.`);
  }
  s(tt, "deprecateMsg");
  function on(t18, e) {
    return Number(t18.toFixed(e));
  }
  s(on, "toFixed");
  function re(t18, e) {
    return (...n2) => {
      let r = n2.length;
      if (r === t18.length)
        return t18(...n2);
      if (r === e.length)
        return e(...n2);
    };
  }
  s(re, "overload2");
  var Su = Object.freeze([776, 2359, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520]);
  function Os(t18) {
    if (typeof t18 != "string")
      throw new TypeError("string cannot be undefined or null");
    let e = [], n2 = 0, r = 0;
    for (; n2 < t18.length; ) {
      if (r += Vu(n2 + r, t18), Fu(t18[n2 + r]) && r++, Ru(t18[n2 + r]) && r++, Du(t18[n2 + r]) && r++, Lu(t18[n2 + r])) {
        r++;
        continue;
      }
      e.push(t18.substring(n2, n2 + r)), n2 += r, r = 0;
    }
    return e;
  }
  s(Os, "runes");
  function Vu(t18, e) {
    let n2 = e[t18];
    if (!Pu(n2) || t18 === e.length - 1)
      return 1;
    let r = n2 + e[t18 + 1], o = e.substring(t18 + 2, t18 + 5);
    return ws(r) && ws(o) ? 4 : Gu(r) && Bu(o) ? e.slice(t18).indexOf(String.fromCodePoint(917631)) + 2 : Mu(o) ? 4 : 2;
  }
  s(Vu, "nextUnits");
  function Pu(t18) {
    return t18 && xt(t18[0].charCodeAt(0), 55296, 56319);
  }
  s(Pu, "isFirstOfSurrogatePair");
  function ws(t18) {
    return xt(Rr(t18), 127462, 127487);
  }
  s(ws, "isRegionalIndicator");
  function Gu(t18) {
    return xt(Rr(t18), 127988, 127988);
  }
  s(Gu, "isSubdivisionFlag");
  function Mu(t18) {
    return xt(Rr(t18), 127995, 127999);
  }
  s(Mu, "isFitzpatrickModifier");
  function Ru(t18) {
    return typeof t18 == "string" && xt(t18.charCodeAt(0), 65024, 65039);
  }
  s(Ru, "isVariationSelector");
  function Du(t18) {
    return typeof t18 == "string" && xt(t18.charCodeAt(0), 8400, 8447);
  }
  s(Du, "isDiacriticalMark");
  function Bu(t18) {
    let e = t18.codePointAt(0);
    return typeof t18 == "string" && typeof e == "number" && xt(e, 917504, 917631);
  }
  s(Bu, "isSupplementarySpecialpurposePlane");
  function Fu(t18) {
    return typeof t18 == "string" && Su.includes(t18.charCodeAt(0));
  }
  s(Fu, "isGrapheme");
  function Lu(t18) {
    return typeof t18 == "string" && t18.charCodeAt(0) === 8205;
  }
  s(Lu, "isZeroWidthJoiner");
  function Rr(t18) {
    let e = t18.charCodeAt(0) - 55296, n2 = t18.charCodeAt(1) - 56320;
    return (e << 10) + n2 + 65536;
  }
  s(Rr, "codePointFromSurrogatePair");
  function xt(t18, e, n2) {
    return t18 >= e && t18 <= n2;
  }
  s(xt, "betweenInclusive");
  var Be = s((t18, e) => Array.isArray(t18) ? t18?.includes(e) : t18 === e, "isEqOrIncludes");
  var We = s((t18, e) => Array.isArray(e) ? e.some((n2) => t18.has(n2)) : t18.has(e), "setHasOrIncludes");
  var sn = s((t18, e, n2) => {
    t18.has(e) ? t18.get(e)?.push(n2) : t18.set(e, [n2]);
  }, "mapAddOrPush");
  var Es = /* @__PURE__ */ (() => {
    let t18 = 0;
    return () => t18++;
  })();
  var Ts = { "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "select", "10": "lstick", "16": "start" }, sticks: { left: { x: 0, y: 1 } } }, "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "start", "10": "lstick", "16": "select" }, sticks: { left: { x: 0, y: 1 } } }, "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, default: { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } } };
  var As = s(() => pt.lastInputDevice, "getLastInputDeviceType");
  var Ss = s(() => {
    let t18 = pt.buttons;
    for (let e in t18) {
      let n2 = t18[e].keyboard && [t18[e].keyboard].flat(), r = t18[e].keyboardCode && [t18[e].keyboardCode].flat(), o = t18[e].gamepad && [t18[e].gamepad].flat(), i = t18[e].mouse && [t18[e].mouse].flat();
      n2 && n2.forEach((a2) => {
        sn(pt.buttonsByKey, a2, e);
      }), r && r.forEach((a2) => {
        sn(pt.buttonsByKeyCode, a2, e);
      }), o && o.forEach((a2) => {
        sn(pt.buttonsByGamepad, a2, e);
      }), i && i.forEach((a2) => {
        sn(pt.buttonsByMouse, a2, e);
      });
    }
  }, "parseButtonBindings");
  var vt = class {
    static {
      s(this, "ButtonState");
    }
    pressed = /* @__PURE__ */ new Set([]);
    pressedRepeat = /* @__PURE__ */ new Set([]);
    released = /* @__PURE__ */ new Set([]);
    down = /* @__PURE__ */ new Set([]);
    update() {
      this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(e) {
      this.pressed.add(e), this.pressedRepeat.add(e), this.down.add(e);
    }
    pressRepeat(e) {
      this.pressedRepeat.add(e);
    }
    release(e) {
      this.down.delete(e), this.pressed.delete(e), this.released.add(e);
    }
  };
  var Dr = class {
    static {
      s(this, "GamepadState");
    }
    buttonState = new vt();
    stickState = /* @__PURE__ */ new Map();
  };
  var Br = class {
    static {
      s(this, "FPSCounter");
    }
    dts = [];
    timer = 0;
    fps = 0;
    tick(e) {
      this.dts.push(e), this.timer += e, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((n2, r) => n2 + r) / this.dts.length)), this.dts = []);
    }
  };
  var pt;
  var Vs = Ts;
  var Ku = s((t18) => {
    let e = t18.buttons ?? {};
    return { canvas: t18.canvas, buttons: e, buttonsByKey: /* @__PURE__ */ new Map(), buttonsByMouse: /* @__PURE__ */ new Map(), buttonsByGamepad: /* @__PURE__ */ new Map(), buttonsByKeyCode: /* @__PURE__ */ new Map(), loopID: null, stopped: false, dt: 0, fixedDt: 1 / 50, restDt: 0, time: 0, realTime: 0, fpsCounter: new Br(), timeScale: 1, skipTime: false, isHidden: false, numFrames: 0, mousePos: new E(0), mouseDeltaPos: new E(0), keyState: new vt(), mouseState: new vt(), mergedGamepadState: new Dr(), gamepadStates: /* @__PURE__ */ new Map(), lastInputDevice: null, buttonState: new vt(), gamepads: [], charInputted: [], isMouseMoved: false, lastWidth: t18.canvas.offsetWidth, lastHeight: t18.canvas.offsetHeight, events: new Ye() };
  }, "initAppState");
  var Ps = s((t18) => {
    if (!t18.canvas)
      throw new Error("Please provide a canvas");
    let e = Ku(t18);
    pt = e, Ss();
    function n2() {
      return e.dt * e.timeScale;
    }
    s(n2, "dt");
    function r() {
      return e.fixedDt * e.timeScale;
    }
    s(r, "fixedDt");
    function o() {
      return e.restDt * e.timeScale;
    }
    s(o, "restDt");
    function i() {
      return e.isHidden;
    }
    s(i, "isHidden");
    function a2() {
      return e.time;
    }
    s(a2, "time");
    function l() {
      return e.fpsCounter.fps;
    }
    s(l, "fps");
    function u2() {
      return e.numFrames;
    }
    s(u2, "numFrames");
    function m() {
      return e.canvas.toDataURL();
    }
    s(m, "screenshot");
    function d(h) {
      e.canvas.style.cursor = h;
    }
    s(d, "setCursor");
    function C() {
      return e.canvas.style.cursor;
    }
    s(C, "getCursor");
    function p(h) {
      if (h)
        try {
          let T = e.canvas.requestPointerLock();
          T.catch && T.catch((P) => console.error(P));
        } catch (T) {
          console.error(T);
        }
      else
        document.exitPointerLock();
    }
    s(p, "setCursorLocked");
    function b() {
      return !!document.pointerLockElement;
    }
    s(b, "isCursorLocked");
    function f(h) {
      h.requestFullscreen ? h.requestFullscreen() : h.webkitRequestFullscreen && h.webkitRequestFullscreen();
    }
    s(f, "enterFullscreen");
    function O() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    s(O, "exitFullscreen");
    function g(h = true) {
      h ? f(e.canvas) : O();
    }
    s(g, "setFullscreen");
    function y2() {
      return document.fullscreenElement === e.canvas || document.webkitFullscreenElement === e.canvas;
    }
    s(y2, "isFullscreen");
    function V() {
      e.stopped = true;
      let h = Object.entries(Re), T = Object.entries(br), P = Object.entries(En);
      for (let [B, ne] of h)
        e.canvas.removeEventListener(B, ne);
      for (let [B, ne] of T)
        document.removeEventListener(B, ne);
      for (let [B, ne] of P)
        window.removeEventListener(B, ne);
      Oo.disconnect();
    }
    s(V, "quit");
    function A(h, T) {
      e.loopID !== null && cancelAnimationFrame(e.loopID);
      let P = 0, B = 0, ne = s((Ae) => {
        if (e.stopped)
          return;
        if (document.visibilityState !== "visible") {
          e.loopID = requestAnimationFrame(ne);
          return;
        }
        let ie = Ae / 1e3, Ze = Math.min(ie - e.realTime, 0.25), Rt = t18.maxFPS ? 1 / t18.maxFPS : 0;
        if (e.realTime = ie, B += Ze, B > Rt) {
          if (!e.skipTime) {
            for (P += B, e.dt = e.fixedDt, e.restDt = 0; P > e.fixedDt; )
              P -= e.fixedDt, P < e.fixedDt && (e.restDt = P), h();
            e.restDt = P, e.dt = B, e.time += n2(), e.fpsCounter.tick(e.dt);
          }
          B = 0, e.skipTime = false, e.numFrames++, T(On, Qa);
        }
        e.loopID = requestAnimationFrame(ne);
      }, "frame");
      ne(0);
    }
    s(A, "run");
    function D() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    s(D, "isTouchscreen");
    function G() {
      return e.mousePos.clone();
    }
    s(G, "mousePos");
    function x() {
      return e.mouseDeltaPos.clone();
    }
    s(x, "mouseDeltaPos");
    function w(h = "left") {
      return e.mouseState.pressed.has(h);
    }
    s(w, "isMousePressed");
    function S(h = "left") {
      return e.mouseState.down.has(h);
    }
    s(S, "isMouseDown");
    function M(h = "left") {
      return e.mouseState.released.has(h);
    }
    s(M, "isMouseReleased");
    function R() {
      return e.isMouseMoved;
    }
    s(R, "isMouseMoved");
    function F(h) {
      return h === void 0 ? e.keyState.pressed.size > 0 : We(e.keyState.pressed, h);
    }
    s(F, "isKeyPressed");
    function j(h) {
      return h === void 0 ? e.keyState.pressedRepeat.size > 0 : We(e.keyState.pressedRepeat, h);
    }
    s(j, "isKeyPressedRepeat");
    function H(h) {
      return h === void 0 ? e.keyState.down.size > 0 : We(e.keyState.down, h);
    }
    s(H, "isKeyDown");
    function q(h) {
      return h === void 0 ? e.keyState.released.size > 0 : We(e.keyState.released, h);
    }
    s(q, "isKeyReleased");
    function W(h) {
      return h === void 0 ? e.mergedGamepadState.buttonState.pressed.size > 0 : We(e.mergedGamepadState.buttonState.pressed, h);
    }
    s(W, "isGamepadButtonPressed");
    function N(h) {
      return h === void 0 ? e.mergedGamepadState.buttonState.down.size > 0 : We(e.mergedGamepadState.buttonState.down, h);
    }
    s(N, "isGamepadButtonDown");
    function k2(h) {
      return h === void 0 ? e.mergedGamepadState.buttonState.released.size > 0 : We(e.mergedGamepadState.buttonState.released, h);
    }
    s(k2, "isGamepadButtonReleased");
    function Z(h) {
      return h === void 0 ? e.buttonState.pressed.size > 0 : We(e.buttonState.pressed, h);
    }
    s(Z, "isButtonPressed");
    function X(h) {
      return h === void 0 ? e.buttonState.down.size > 0 : We(e.buttonState.down, h);
    }
    s(X, "isButtonDown");
    function ee(h) {
      return h === void 0 ? e.buttonState.released.size > 0 : We(e.buttonState.released, h);
    }
    s(ee, "isButtonReleased");
    function Ee(h) {
      return e.buttons?.[h];
    }
    s(Ee, "getButton");
    function _(h, T) {
      e.buttons[h] = { ...e.buttons[h], ...T };
    }
    s(_, "setButton");
    function gt(h) {
      e.buttonState.press(h), e.events.trigger("buttonPress", h);
    }
    s(gt, "pressButton");
    function Gt(h) {
      e.buttonState.release(h), e.events.trigger("buttonRelease", h);
    }
    s(Gt, "releaseButton");
    function Ht(h) {
      return e.events.on("resize", h);
    }
    s(Ht, "onResize");
    let xn = re((h) => e.events.on("keyDown", h), (h, T) => e.events.on("keyDown", (P) => Be(h, P) && T(P))), vn = re((h) => e.events.on("keyPress", (T) => h(T)), (h, T) => e.events.on("keyPress", (P) => Be(h, P) && T(P))), mr = re((h) => e.events.on("keyPressRepeat", h), (h, T) => e.events.on("keyPressRepeat", (P) => Be(h, P) && T(P))), pr = re((h) => e.events.on("keyRelease", h), (h, T) => e.events.on("keyRelease", (P) => Be(h, P) && T(P))), Mt = re((h) => e.events.on("mouseDown", (T) => h(T)), (h, T) => e.events.on("mouseDown", (P) => Be(h, P) && T(P))), Xe = re((h) => e.events.on("mousePress", (T) => h(T)), (h, T) => e.events.on("mousePress", (P) => Be(h, P) && T(P))), Cn = re((h) => e.events.on("mouseRelease", (T) => h(T)), (h, T) => e.events.on("mouseRelease", (P) => P === h && T(P)));
    function L(h) {
      return e.events.on("mouseMove", () => h(G(), x()));
    }
    s(L, "onMouseMove");
    function U(h) {
      return e.events.on("charInput", h);
    }
    s(U, "onCharInput");
    function Y(h) {
      return e.events.on("touchStart", h);
    }
    s(Y, "onTouchStart");
    function se(h) {
      return e.events.on("touchMove", h);
    }
    s(se, "onTouchMove");
    function xe(h) {
      return e.events.on("touchEnd", h);
    }
    s(xe, "onTouchEnd");
    function J(h) {
      return e.events.on("scroll", h);
    }
    s(J, "onScroll");
    function Ce(h) {
      return e.events.on("hide", h);
    }
    s(Ce, "onHide");
    function qt(h) {
      return e.events.on("show", h);
    }
    s(qt, "onShow");
    let ut = re((h) => e.events.on("gamepadButtonPress", (T, P) => h(T, P)), (h, T) => e.events.on("gamepadButtonPress", (P, B) => Be(h, P) && T(P, B))), dr = re((h) => e.events.on("gamepadButtonDown", (T, P) => h(T, P)), (h, T) => e.events.on("gamepadButtonDown", (P, B) => Be(h, P) && T(P, B))), fr = re((h) => e.events.on("gamepadButtonRelease", (T, P) => h(T, P)), (h, T) => e.events.on("gamepadButtonRelease", (P, B) => Be(h, P) && T(P, B)));
    function hr(h, T) {
      return e.events.on("gamepadStick", (P, B, ne) => P === h && T(B, ne));
    }
    s(hr, "onGamepadStick");
    function gr(h) {
      e.events.on("gamepadConnect", h);
    }
    s(gr, "onGamepadConnect");
    function wn(h) {
      e.events.on("gamepadDisconnect", h);
    }
    s(wn, "onGamepadDisconnect");
    function Qe(h) {
      return e.mergedGamepadState.stickState.get(h) || new E(0);
    }
    s(Qe, "getGamepadStick");
    function ct() {
      return [...e.charInputted];
    }
    s(ct, "charInputted");
    function zt() {
      return [...e.gamepads];
    }
    s(zt, "getGamepads");
    let Ie = re((h) => e.events.on("buttonPress", (T) => h(T)), (h, T) => e.events.on("buttonPress", (P) => Be(h, P) && T(P))), Yt = re((h) => e.events.on("buttonDown", (T) => h(T)), (h, T) => e.events.on("buttonDown", (P) => Be(h, P) && T(P))), Je = re((h) => e.events.on("buttonRelease", (T) => h(T)), (h, T) => e.events.on("buttonRelease", (P) => Be(h, P) && T(P)));
    function On() {
      e.events.trigger("input"), e.keyState.down.forEach((h) => e.events.trigger("keyDown", h)), e.mouseState.down.forEach((h) => e.events.trigger("mouseDown", h)), e.buttonState.down.forEach((h) => {
        e.events.trigger("buttonDown", h);
      }), Za();
    }
    s(On, "processInput");
    function Qa() {
      e.keyState.update(), e.mouseState.update(), e.buttonState.update(), e.mergedGamepadState.buttonState.update(), e.mergedGamepadState.stickState.forEach((h, T) => {
        e.mergedGamepadState.stickState.set(T, new E(0));
      }), e.charInputted = [], e.isMouseMoved = false, e.mouseDeltaPos = new E(0), e.gamepadStates.forEach((h) => {
        h.buttonState.update(), h.stickState.forEach((T, P) => {
          h.stickState.set(P, new E(0));
        });
      });
    }
    s(Qa, "resetInput");
    function xo(h) {
      let T = { index: h.index, isPressed: s((P) => e.gamepadStates.get(h.index)?.buttonState.pressed.has(P) || false, "isPressed"), isDown: s((P) => e.gamepadStates.get(h.index)?.buttonState.down.has(P) || false, "isDown"), isReleased: s((P) => e.gamepadStates.get(h.index)?.buttonState.released.has(P) || false, "isReleased"), getStick: s((P) => e.gamepadStates.get(h.index)?.stickState.get(P) || v(), "getStick") };
      return e.gamepads.push(T), e.gamepadStates.set(h.index, { buttonState: new vt(), stickState: /* @__PURE__ */ new Map([["left", new E(0)], ["right", new E(0)]]) }), T;
    }
    s(xo, "registerGamepad");
    function Ja(h) {
      e.gamepads = e.gamepads.filter((T) => T.index !== h.index), e.gamepadStates.delete(h.index);
    }
    s(Ja, "removeGamepad");
    function Za() {
      for (let h of navigator.getGamepads())
        h && !e.gamepadStates.has(h.index) && xo(h);
      for (let h of e.gamepads) {
        let T = navigator.getGamepads()[h.index];
        if (!T)
          continue;
        let B = (t18.gamepads ?? {})[T.id] || Vs[T.id] || Vs.default, ne = e.gamepadStates.get(h.index);
        if (ne) {
          for (let Ae = 0; Ae < T.buttons.length; Ae++) {
            let ie = B.buttons[Ae], Ze = T.buttons[Ae], Rt = e.buttonsByGamepad.has(ie);
            if (Ze.pressed) {
              if (ne.buttonState.down.has(ie)) {
                e.events.trigger("gamepadButtonDown", ie, h);
                continue;
              }
              e.lastInputDevice = "gamepad", Rt && e.buttonsByGamepad.get(ie)?.forEach((De) => {
                e.buttonState.press(De), e.events.trigger("buttonPress", De);
              }), e.mergedGamepadState.buttonState.press(ie), ne.buttonState.press(ie), e.events.trigger("gamepadButtonPress", ie, h);
            } else
              ne.buttonState.down.has(ie) && (Rt && e.buttonsByGamepad.get(ie)?.forEach((De) => {
                e.buttonState.release(De), e.events.trigger("buttonRelease", De);
              }), e.mergedGamepadState.buttonState.release(ie), ne.buttonState.release(ie), e.events.trigger("gamepadButtonRelease", ie, h));
          }
          for (let Ae in B.sticks) {
            let ie = B.sticks[Ae];
            if (!ie)
              continue;
            let Ze = new E(T.axes[ie.x], T.axes[ie.y]);
            ne.stickState.set(Ae, Ze), e.mergedGamepadState.stickState.set(Ae, Ze), e.events.trigger("gamepadStick", Ae, Ze, h);
          }
        }
      }
    }
    s(Za, "processGamepad");
    let Re = {}, br = {}, En = {}, vo = t18.pixelDensity || 1;
    Re.mousemove = (h) => {
      let T = new E(h.offsetX, h.offsetY), P = new E(h.movementX, h.movementY);
      if (y2()) {
        let B = e.canvas.width / vo, ne = e.canvas.height / vo, Ae = window.innerWidth, ie = window.innerHeight, Ze = Ae / ie, Rt = B / ne;
        if (Ze > Rt) {
          let De = ie / ne, yr = (Ae - B * De) / 2;
          T.x = Ve(h.offsetX - yr, 0, B * De, 0, B), T.y = Ve(h.offsetY, 0, ne * De, 0, ne);
        } else {
          let De = Ae / B, yr = (ie - ne * De) / 2;
          T.x = Ve(h.offsetX, 0, B * De, 0, B), T.y = Ve(h.offsetY - yr, 0, ne * De, 0, ne);
        }
      }
      e.events.onOnce("input", () => {
        e.isMouseMoved = true, e.mousePos = T, e.mouseDeltaPos = P, e.events.trigger("mouseMove");
      });
    };
    let Co = ["left", "middle", "right", "back", "forward"];
    Re.mousedown = (h) => {
      e.events.onOnce("input", () => {
        let T = Co[h.button];
        T && (e.lastInputDevice = "mouse", e.buttonsByMouse.has(T) && e.buttonsByMouse.get(T)?.forEach((P) => {
          e.buttonState.press(P), e.events.trigger("buttonPress", P);
        }), e.mouseState.press(T), e.events.trigger("mousePress", T));
      });
    }, Re.mouseup = (h) => {
      e.events.onOnce("input", () => {
        let T = Co[h.button];
        T && (e.buttonsByMouse.has(T) && e.buttonsByMouse.get(T)?.forEach((P) => {
          e.buttonState.release(P), e.events.trigger("buttonRelease", P);
        }), e.mouseState.release(T), e.events.trigger("mouseRelease", T));
      });
    };
    let eu = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]), wo = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
    Re.keydown = (h) => {
      eu.has(h.key) && h.preventDefault(), e.events.onOnce("input", () => {
        let T = wo[h.key] || h.key.toLowerCase(), P = h.code;
        if (T === void 0)
          throw new Error(`Unknown key: ${h.key}`);
        T.length === 1 ? (e.events.trigger("charInput", T), e.charInputted.push(T)) : T === "space" && (e.events.trigger("charInput", " "), e.charInputted.push(" ")), h.repeat ? (e.keyState.pressRepeat(T), e.events.trigger("keyPressRepeat", T)) : (e.lastInputDevice = "keyboard", e.buttonsByKey.has(T) && e.buttonsByKey.get(T)?.forEach((B) => {
          e.buttonState.press(B), e.events.trigger("buttonPress", B);
        }), e.buttonsByKeyCode.has(P) && e.buttonsByKeyCode.get(P)?.forEach((B) => {
          e.buttonState.press(B), e.events.trigger("buttonPress", B);
        }), e.keyState.press(T), e.events.trigger("keyPressRepeat", T), e.events.trigger("keyPress", T));
      });
    }, Re.keyup = (h) => {
      e.events.onOnce("input", () => {
        let T = wo[h.key] || h.key.toLowerCase(), P = h.code;
        e.buttonsByKey.has(T) && e.buttonsByKey.get(T)?.forEach((B) => {
          e.buttonState.release(B), e.events.trigger("buttonRelease", B);
        }), e.buttonsByKeyCode.has(P) && e.buttonsByKeyCode.get(P)?.forEach((B) => {
          e.buttonState.release(B), e.events.trigger("buttonRelease", B);
        }), e.keyState.release(T), e.events.trigger("keyRelease", T);
      });
    }, Re.touchstart = (h) => {
      h.preventDefault(), e.events.onOnce("input", () => {
        let T = [...h.changedTouches], P = e.canvas.getBoundingClientRect();
        t18.touchToMouse !== false && (e.mousePos = new E(T[0].clientX - P.x, T[0].clientY - P.y), e.lastInputDevice = "mouse", e.buttonsByMouse.has("left") && e.buttonsByMouse.get("left")?.forEach((B) => {
          e.buttonState.press(B), e.events.trigger("buttonPress", B);
        }), e.mouseState.press("left"), e.events.trigger("mousePress", "left")), T.forEach((B) => {
          e.events.trigger("touchStart", new E(B.clientX - P.x, B.clientY - P.y), B);
        });
      });
    }, Re.touchmove = (h) => {
      h.preventDefault(), e.events.onOnce("input", () => {
        let T = [...h.changedTouches], P = e.canvas.getBoundingClientRect();
        if (t18.touchToMouse !== false) {
          let B = e.mousePos;
          e.mousePos = new E(T[0].clientX - P.x, T[0].clientY - P.y), e.mouseDeltaPos = e.mousePos.sub(B), e.events.trigger("mouseMove");
        }
        T.forEach((B) => {
          e.events.trigger("touchMove", new E(B.clientX - P.x, B.clientY - P.y), B);
        });
      });
    }, Re.touchend = (h) => {
      e.events.onOnce("input", () => {
        let T = [...h.changedTouches], P = e.canvas.getBoundingClientRect();
        t18.touchToMouse !== false && (e.mousePos = new E(T[0].clientX - P.x, T[0].clientY - P.y), e.mouseDeltaPos = new E(0, 0), e.buttonsByMouse.has("left") && e.buttonsByMouse.get("left")?.forEach((B) => {
          e.buttonState.release(B), e.events.trigger("buttonRelease", B);
        }), e.mouseState.release("left"), e.events.trigger("mouseRelease", "left")), T.forEach((B) => {
          e.events.trigger("touchEnd", new E(B.clientX - P.x, B.clientY - P.y), B);
        });
      });
    }, Re.touchcancel = (h) => {
      e.events.onOnce("input", () => {
        let T = [...h.changedTouches], P = e.canvas.getBoundingClientRect();
        t18.touchToMouse !== false && (e.mousePos = new E(T[0].clientX - P.x, T[0].clientY - P.y), e.mouseState.release("left"), e.events.trigger("mouseRelease", "left")), T.forEach((B) => {
          e.events.trigger("touchEnd", new E(B.clientX - P.x, B.clientY - P.y), B);
        });
      });
    }, Re.wheel = (h) => {
      h.preventDefault(), e.events.onOnce("input", () => {
        e.events.trigger("scroll", new E(h.deltaX, h.deltaY));
      });
    }, Re.contextmenu = (h) => h.preventDefault(), br.visibilitychange = () => {
      document.visibilityState === "visible" ? (e.skipTime = true, e.isHidden = false, e.events.trigger("show")) : (e.isHidden = true, e.events.trigger("hide"));
    }, En.gamepadconnected = (h) => {
      let T = xo(h.gamepad);
      e.events.onOnce("input", () => {
        e.events.trigger("gamepadConnect", T);
      });
    }, En.gamepaddisconnected = (h) => {
      let T = zt().filter((P) => P.index === h.gamepad.index)[0];
      Ja(h.gamepad), e.events.onOnce("input", () => {
        e.events.trigger("gamepadDisconnect", T);
      });
    };
    for (let [h, T] of Object.entries(Re))
      e.canvas.addEventListener(h, T);
    for (let [h, T] of Object.entries(br))
      document.addEventListener(h, T);
    for (let [h, T] of Object.entries(En))
      window.addEventListener(h, T);
    let Oo = new ResizeObserver((h) => {
      for (let T of h)
        if (T.target === e.canvas) {
          if (e.lastWidth === e.canvas.offsetWidth && e.lastHeight === e.canvas.offsetHeight)
            return;
          e.lastWidth = e.canvas.offsetWidth, e.lastHeight = e.canvas.offsetHeight, e.events.onOnce("input", () => {
            e.events.trigger("resize");
          });
        }
    });
    return Oo.observe(e.canvas), { state: e, dt: n2, fixedDt: r, restDt: o, time: a2, run: A, canvas: e.canvas, fps: l, numFrames: u2, quit: V, isHidden: i, setFullscreen: g, isFullscreen: y2, setCursor: d, screenshot: m, getGamepads: zt, getCursor: C, setCursorLocked: p, isCursorLocked: b, isTouchscreen: D, mousePos: G, mouseDeltaPos: x, isKeyDown: H, isKeyPressed: F, isKeyPressedRepeat: j, isKeyReleased: q, isMouseDown: S, isMousePressed: w, isMouseReleased: M, isMouseMoved: R, isGamepadButtonPressed: W, isGamepadButtonDown: N, isGamepadButtonReleased: k2, getGamepadStick: Qe, isButtonPressed: Z, isButtonDown: X, isButtonReleased: ee, setButton: _, getButton: Ee, pressButton: gt, releaseButton: Gt, charInputted: ct, onResize: Ht, onKeyDown: xn, onKeyPress: vn, onKeyPressRepeat: mr, onKeyRelease: pr, onMouseDown: Mt, onMousePress: Xe, onMouseRelease: Cn, onMouseMove: L, onCharInput: U, onTouchStart: Y, onTouchMove: se, onTouchEnd: xe, onScroll: J, onHide: Ce, onShow: qt, onGamepadButtonDown: dr, onGamepadButtonPress: ut, onGamepadButtonRelease: fr, onGamepadStick: hr, onGamepadConnect: gr, onGamepadDisconnect: wn, onButtonPress: Ie, onButtonDown: Yt, onButtonRelease: Je, getLastInputDeviceType: As, events: e.events };
  }, "initApp");
  function te() {
    return c.app.dt();
  }
  s(te, "dt");
  function an() {
    return c.app.fixedDt();
  }
  s(an, "fixedDt");
  function un() {
    return c.app.restDt();
  }
  s(un, "restDt");
  var Iu = new E(-1, -1);
  var ku = new E(0, -1);
  var _u = new E(1, -1);
  var Nu = new E(-1, 0);
  var Uu = new E(0, 0);
  var Hu = new E(1, 0);
  var qu = new E(-1, 1);
  var zu = new E(0, 1);
  var Yu = new E(1, 1);
  function Ne(t18) {
    switch (t18) {
      case "topleft":
        return Iu;
      case "top":
        return ku;
      case "topright":
        return _u;
      case "left":
        return Nu;
      case "center":
        return Uu;
      case "right":
        return Hu;
      case "botleft":
        return qu;
      case "bot":
        return zu;
      case "botright":
        return Yu;
      default:
        return t18;
    }
  }
  s(Ne, "anchorPt");
  function Gs(t18) {
    switch (t18) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  s(Gs, "alignPt");
  function Ms(t18) {
    return t18.createBuffer(1, 1, 44100);
  }
  s(Ms, "createEmptyAudioBuffer");
  var Kn = 2.5949095;
  var Rs = 1.70158 + 1;
  var Ds = 2 * Math.PI / 3;
  var Bs = 2 * Math.PI / 4.5;
  var In = { linear: s((t18) => t18, "linear"), easeInSine: s((t18) => 1 - Math.cos(t18 * Math.PI / 2), "easeInSine"), easeOutSine: s((t18) => Math.sin(t18 * Math.PI / 2), "easeOutSine"), easeInOutSine: s((t18) => -(Math.cos(Math.PI * t18) - 1) / 2, "easeInOutSine"), easeInQuad: s((t18) => t18 * t18, "easeInQuad"), easeOutQuad: s((t18) => 1 - (1 - t18) * (1 - t18), "easeOutQuad"), easeInOutQuad: s((t18) => t18 < 0.5 ? 2 * t18 * t18 : 1 - Math.pow(-2 * t18 + 2, 2) / 2, "easeInOutQuad"), easeInCubic: s((t18) => t18 * t18 * t18, "easeInCubic"), easeOutCubic: s((t18) => 1 - Math.pow(1 - t18, 3), "easeOutCubic"), easeInOutCubic: s((t18) => t18 < 0.5 ? 4 * t18 * t18 * t18 : 1 - Math.pow(-2 * t18 + 2, 3) / 2, "easeInOutCubic"), easeInQuart: s((t18) => t18 * t18 * t18 * t18, "easeInQuart"), easeOutQuart: s((t18) => 1 - Math.pow(1 - t18, 4), "easeOutQuart"), easeInOutQuart: s((t18) => t18 < 0.5 ? 8 * t18 * t18 * t18 * t18 : 1 - Math.pow(-2 * t18 + 2, 4) / 2, "easeInOutQuart"), easeInQuint: s((t18) => t18 * t18 * t18 * t18 * t18, "easeInQuint"), easeOutQuint: s((t18) => 1 - Math.pow(1 - t18, 5), "easeOutQuint"), easeInOutQuint: s((t18) => t18 < 0.5 ? 16 * t18 * t18 * t18 * t18 * t18 : 1 - Math.pow(-2 * t18 + 2, 5) / 2, "easeInOutQuint"), easeInExpo: s((t18) => t18 === 0 ? 0 : Math.pow(2, 10 * t18 - 10), "easeInExpo"), easeOutExpo: s((t18) => t18 === 1 ? 1 : 1 - Math.pow(2, -10 * t18), "easeOutExpo"), easeInOutExpo: s((t18) => t18 === 0 ? 0 : t18 === 1 ? 1 : t18 < 0.5 ? Math.pow(2, 20 * t18 - 10) / 2 : (2 - Math.pow(2, -20 * t18 + 10)) / 2, "easeInOutExpo"), easeInCirc: s((t18) => 1 - Math.sqrt(1 - Math.pow(t18, 2)), "easeInCirc"), easeOutCirc: s((t18) => Math.sqrt(1 - Math.pow(t18 - 1, 2)), "easeOutCirc"), easeInOutCirc: s((t18) => t18 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t18, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t18 + 2, 2)) + 1) / 2, "easeInOutCirc"), easeInBack: s((t18) => Rs * t18 * t18 * t18 - 1.70158 * t18 * t18, "easeInBack"), easeOutBack: s((t18) => 1 + Rs * Math.pow(t18 - 1, 3) + 1.70158 * Math.pow(t18 - 1, 2), "easeOutBack"), easeInOutBack: s((t18) => t18 < 0.5 ? Math.pow(2 * t18, 2) * ((Kn + 1) * 2 * t18 - Kn) / 2 : (Math.pow(2 * t18 - 2, 2) * ((Kn + 1) * (t18 * 2 - 2) + Kn) + 2) / 2, "easeInOutBack"), easeInElastic: s((t18) => t18 === 0 ? 0 : t18 === 1 ? 1 : -Math.pow(2, 10 * t18 - 10) * Math.sin((t18 * 10 - 10.75) * Ds), "easeInElastic"), easeOutElastic: s((t18) => t18 === 0 ? 0 : t18 === 1 ? 1 : Math.pow(2, -10 * t18) * Math.sin((t18 * 10 - 0.75) * Ds) + 1, "easeOutElastic"), easeInOutElastic: s((t18) => t18 === 0 ? 0 : t18 === 1 ? 1 : t18 < 0.5 ? -(Math.pow(2, 20 * t18 - 10) * Math.sin((20 * t18 - 11.125) * Bs)) / 2 : Math.pow(2, -20 * t18 + 10) * Math.sin((20 * t18 - 11.125) * Bs) / 2 + 1, "easeInOutElastic"), easeInBounce: s((t18) => 1 - In.easeOutBounce(1 - t18), "easeInBounce"), easeOutBounce: s((t18) => t18 < 1 / 2.75 ? 7.5625 * t18 * t18 : t18 < 2 / 2.75 ? 7.5625 * (t18 -= 1.5 / 2.75) * t18 + 0.75 : t18 < 2.5 / 2.75 ? 7.5625 * (t18 -= 2.25 / 2.75) * t18 + 0.9375 : 7.5625 * (t18 -= 2.625 / 2.75) * t18 + 0.984375, "easeOutBounce"), easeInOutBounce: s((t18) => t18 < 0.5 ? (1 - In.easeOutBounce(1 - 2 * t18)) / 2 : (1 + In.easeOutBounce(2 * t18 - 1)) / 2, "easeInOutBounce") };
  var nt = In;
  function Wu(t18, e, n2) {
    let r = [], o = e;
    for (r.push(o); o !== t18; ) {
      if (o = n2.get(o), o == null)
        return null;
      r.push(o);
    }
    return r.reverse();
  }
  s(Wu, "buildPath");
  function Fr(t18, e, n2) {
    let r = new Kt((a2, l) => a2.cost < l.cost);
    r.insert({ cost: 0, node: e });
    let o = /* @__PURE__ */ new Map();
    o.set(e, e);
    let i = /* @__PURE__ */ new Map();
    for (i.set(e, 0); r.length !== 0; ) {
      let a2 = r.remove()?.node;
      if (a2 === n2)
        break;
      let l = t18.getNeighbours(a2);
      for (let u2 of l) {
        let m = (i.get(a2) || 0) + t18.getCost(a2, u2) + t18.getHeuristic(u2, n2);
        (!i.has(u2) || m < i.get(u2)) && (i.set(u2, m), r.insert({ cost: m, node: u2 }), o.set(u2, a2));
      }
    }
    return Wu(e, n2, o);
  }
  s(Fr, "aStarSearch");
  var Lr = class {
    static {
      s(this, "NavEdge");
    }
    a;
    b;
    polygon;
    constructor(e, n2, r) {
      this.a = e, this.b = n2, this.polygon = new WeakRef(r);
    }
    isLeft(e, n2) {
      return (this.b.x - this.a.x) * (n2 - this.a.y) - (e - this.a.x) * (this.b.y - this.a.y);
    }
    get middle() {
      return this.a.add(this.b).scale(0.5);
    }
  };
  var jr = class {
    static {
      s(this, "NavPolygon");
    }
    _edges;
    _centroid;
    _id;
    constructor(e) {
      this._id = e;
    }
    get id() {
      return this._id;
    }
    set edges(e) {
      this._edges = e;
      let n2 = 0, r = 0, o = 0;
      for (let i of this._edges) {
        i.polygon = new WeakRef(this);
        let a2 = i.a.x * i.b.y - i.a.y * i.b.x;
        n2 += (i.a.x + i.b.x) * a2, r += (i.a.y + i.b.y) * a2, o += a2;
      }
      o /= 2, this._centroid = v(n2 / (6 * o), r / (6 * o));
    }
    get edges() {
      return this._edges;
    }
    get centroid() {
      return this._centroid;
    }
    contains(e) {
      let n2 = false;
      for (let r of this.edges)
        r.b.y > e.y != r.a.y > e.y && e.x < (r.a.x - r.b.x) * (e.y - r.b.y) / (r.a.y - r.b.y) + r.b.x && (n2 = !n2);
      return n2;
    }
  };
  var kn = class {
    static {
      s(this, "NavMesh");
    }
    _polygons;
    _pointCache;
    _edgeCache;
    constructor() {
      this._polygons = [], this._pointCache = {}, this._edgeCache = {};
    }
    _addPoint(e) {
      let n2 = this._pointCache[`${e.x}_${e.y}`];
      return n2 || (n2 = e.clone(), this._pointCache[`${e.x}_${e.y}`] = n2, n2);
    }
    _addEdge(e) {
      let n2 = `${e.a.x}_${e.a.y}-${e.b.x}_${e.b.y}`;
      return this._edgeCache[n2] = e, e;
    }
    _findEdge(e, n2) {
      let r = `${e.x}_${e.y}-${n2.x}_${n2.y}`;
      return this._edgeCache[r];
    }
    _findCommonEdge(e, n2) {
      for (let r of e.edges) {
        let o = this._findEdge(r.b, r.a);
        if (o && o.polygon.deref().id === n2.id)
          return o;
      }
      return null;
    }
    addPolygon(e) {
      let n2 = new jr(this._polygons.length), r = e.map((o, i) => new Lr(o, e[(i + 1) % e.length], n2));
      n2.edges = r, this._polygons.push(n2);
      for (let o of n2.edges)
        this._addEdge(o);
      return n2;
    }
    addRect(e, n2) {
      let r = this._addPoint(e), o = this._addPoint(e.add(n2.x, 0)), i = this._addPoint(e.add(n2)), a2 = this._addPoint(e.add(0, n2.y));
      return this.addPolygon([r, o, i, a2]);
    }
    _getLocation(e) {
      for (let n2 of this._polygons)
        if (n2.contains(e))
          return n2;
      return null;
    }
    getNeighbours(e) {
      let n2 = [];
      for (let r of this._polygons[e].edges) {
        let o = this._findEdge(r.b, r.a);
        if (o) {
          let i = o.polygon.deref();
          i && n2.push(i.id);
        }
      }
      return n2;
    }
    getCost(e, n2) {
      return 1;
    }
    getHeuristic(e, n2) {
      let r = this._polygons[e], o = this._polygons[n2], i = r.centroid.x - o.centroid.x, a2 = r.centroid.y - o.centroid.y;
      return Math.sqrt(i * i + a2 * a2);
    }
    getPath(e, n2) {
      return e === void 0 || n2 === void 0 ? [] : e === n2 ? [e, n2] : Fr(this, e, n2);
    }
    getWaypointPath(e, n2, r) {
      let o = r?.type || "centroids", i = this._getLocation(e), a2 = this._getLocation(n2);
      if (i === void 0 || a2 === void 0)
        return [];
      let l = this.getPath(i.id, a2.id);
      if (!l)
        return [];
      if (o === "edges") {
        let u2 = [];
        for (let m = 1; m < l.length; m++) {
          let d = this._polygons[l[m - 1]], C = this._polygons[l[m]], p = this._findCommonEdge(d, C);
          u2.push(p.middle.add(C.centroid.sub(p.middle).unit().scale(4)));
        }
        return [e, ...u2, n2];
      } else
        return [e, ...l.slice(1, -1).map((u2) => this._polygons[u2].centroid), n2];
    }
  };
  function dt(t18) {
    let e = new he();
    return t18.pos && e.translate(t18.pos), t18.scale && e.scale(t18.scale), t18.angle && e.rotate(t18.angle), t18.parent ? e.mult(t18.parent.transform) : e;
  }
  s(dt, "calcTransform");
  function Fs(t18) {
    return new E(t18.x / ae() * 2 - 1, -t18.y / ce() * 2 + 1);
  }
  s(Fs, "screen2ndc");
  function Ct(t18, e, n2, r, o, i = 1) {
    r = ue(r % 360), o = ue(o % 360), o <= r && (o += Math.PI * 2);
    let a2 = [], l = Math.ceil((o - r) / ue(8) * i), u2 = (o - r) / l, m = v(Math.cos(r), Math.sin(r)), d = v(Math.cos(u2), Math.sin(u2));
    for (let C = 0; C <= l; C++)
      a2.push(t18.add(e * m.x, n2 * m.y)), m = v(m.x * d.x - m.y * d.y, m.x * d.y + m.y * d.x);
    return a2;
  }
  s(Ct, "getArcPts");
  function Ls(...t18) {
    let e = I(...t18), n2 = t18[3] ?? 1;
    c.gfx.bgColor = e, c.gfx.bgAlpha = n2, c.gfx.ggl.gl.clearColor(e.r / 255, e.g / 255, e.b / 255, n2);
  }
  s(Ls, "setBackground");
  function js() {
    return c.gfx.bgColor?.clone?.() ?? null;
  }
  s(js, "getBackground");
  function Q(...t18) {
    if (t18[0] === void 0)
      return;
    let e = v(...t18);
    e.x === 0 && e.y === 0 || c.gfx.transform.translate(e);
  }
  s(Q, "pushTranslate");
  function be() {
    c.gfx.transformStack.push(c.gfx.transform.clone());
  }
  s(be, "pushTransform");
  function Ks(t18) {
    c.gfx.transform = t18.clone();
  }
  s(Ks, "pushMatrix");
  function rt(...t18) {
    if (t18[0] === void 0)
      return;
    let e = v(...t18);
    e.x === 1 && e.y === 1 || c.gfx.transform.scale(e);
  }
  s(rt, "pushScale");
  function $e(t18) {
    t18 && c.gfx.transform.rotate(t18);
  }
  s($e, "pushRotate");
  function pe() {
    c.gfx.transformStack.length > 0 && (c.gfx.transform = c.gfx.transformStack.pop());
  }
  s(pe, "popTransform");
  function Oe() {
    c.gfx.renderer.flush();
  }
  s(Oe, "flush");
  function ae() {
    return c.gfx.width;
  }
  s(ae, "width");
  function ce() {
    return c.gfx.height;
  }
  s(ce, "height");
  function _n() {
    return (c.gfx.viewport.width + c.gfx.viewport.height) / (c.gfx.width + c.gfx.height);
  }
  s(_n, "getViewportScale");
  function Is(t18) {
    return new E(t18.x * c.gfx.viewport.width / c.gfx.width, t18.y * c.gfx.viewport.height / c.gfx.height);
  }
  s(Is, "contentToView");
  function $u(t18) {
    return new E((t18.x - c.gfx.viewport.x) * ae() / c.gfx.viewport.width, (t18.y - c.gfx.viewport.y) * ce() / c.gfx.viewport.height);
  }
  s($u, "windowToContent");
  function Nn() {
    return $u(c.app.mousePos());
  }
  s(Nn, "mousePos");
  function wt() {
    return v(ae() / 2, ce() / 2);
  }
  s(wt, "center");
  var cn = class {
    static {
      s(this, "TexPacker");
    }
    lastTextureId = 0;
    textures = [];
    bigTextures = [];
    texturesPosition = /* @__PURE__ */ new Map();
    canvas;
    c2d;
    x = 0;
    y = 0;
    curHeight = 0;
    gfx;
    padding;
    constructor(e, n2, r, o) {
      this.gfx = e, this.canvas = document.createElement("canvas"), this.canvas.width = n2, this.canvas.height = r, this.textures = [Pe.fromImage(e, this.canvas)], this.bigTextures = [], this.padding = o;
      let i = this.canvas.getContext("2d");
      if (!i)
        throw new Error("Failed to get 2d context");
      this.c2d = i;
    }
    add(e) {
      let n2 = e.width + this.padding * 2, r = e.height + this.padding * 2;
      if (n2 > this.canvas.width || r > this.canvas.height) {
        let a2 = Pe.fromImage(this.gfx, e);
        return this.bigTextures.push(a2), [a2, new z(0, 0, 1, 1), 0];
      }
      this.x + n2 > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + r > this.canvas.height && (this.c2d.clearRect(0, 0, this.canvas.width, this.canvas.height), this.textures.push(Pe.fromImage(this.gfx, this.canvas)), this.x = 0, this.y = 0, this.curHeight = 0);
      let o = this.textures[this.textures.length - 1], i = new E(this.x + this.padding, this.y + this.padding);
      return this.x += n2, r > this.curHeight && (this.curHeight = r), e instanceof ImageData ? this.c2d.putImageData(e, i.x, i.y) : this.c2d.drawImage(e, i.x, i.y), o.update(this.canvas), this.texturesPosition.set(this.lastTextureId, { position: i, size: new E(e.width, e.height), texture: o }), this.lastTextureId++, [o, new z(i.x / this.canvas.width, i.y / this.canvas.height, e.width / this.canvas.width, e.height / this.canvas.height), this.lastTextureId - 1];
    }
    free() {
      for (let e of this.textures)
        e.free();
      for (let e of this.bigTextures)
        e.free();
    }
  };
  function de(t18) {
    return typeof t18 != "string" || Ln(t18) ? t18 : c.assets.urlPrefix + t18;
  }
  s(de, "fixURL");
  var le = class t14 {
    static {
      s(this, "Asset");
    }
    loaded = false;
    data = null;
    error = null;
    onLoadEvents = new oe();
    onErrorEvents = new oe();
    onFinishEvents = new oe();
    constructor(e) {
      e.then((n2) => {
        this.loaded = true, this.data = n2, this.onLoadEvents.trigger(n2);
      }).catch((n2) => {
        if (this.error = n2, this.onErrorEvents.numListeners() > 0)
          this.onErrorEvents.trigger(n2);
        else
          throw n2;
      }).finally(() => {
        this.onFinishEvents.trigger(), this.loaded = true;
      });
    }
    static loaded(e) {
      let n2 = new t14(Promise.resolve(e));
      return n2.data = e, n2.loaded = true, n2;
    }
    onLoad(e) {
      return this.loaded && this.data ? e(this.data) : this.onLoadEvents.add(e), this;
    }
    onError(e) {
      return this.loaded && this.error ? e(this.error) : this.onErrorEvents.add(e), this;
    }
    onFinish(e) {
      return this.loaded ? e() : this.onFinishEvents.add(e), this;
    }
    then(e) {
      return this.onLoad(e);
    }
    catch(e) {
      return this.onError(e);
    }
    finally(e) {
      return this.onFinish(e);
    }
  };
  var ft = class {
    static {
      s(this, "AssetBucket");
    }
    assets = /* @__PURE__ */ new Map();
    lastUID = 0;
    add(e, n2) {
      let r = e ?? this.lastUID++ + "", o = new le(n2);
      return this.assets.set(r, o), o;
    }
    addLoaded(e, n2) {
      let r = e ?? this.lastUID++ + "", o = le.loaded(n2);
      return this.assets.set(r, o), o;
    }
    get(e) {
      return this.assets.get(e);
    }
    progress() {
      if (this.assets.size === 0)
        return 1;
      let e = 0;
      return this.assets.forEach((n2) => {
        n2.loaded && e++;
      }), e / this.assets.size;
    }
    getFailedAssets() {
      return Array.from(this.assets.keys()).filter((e) => this.assets.get(e).error !== null).map((e) => [e, this.assets.get(e)]);
    }
  };
  function kr(t18) {
    return fetch(t18).then((e) => {
      if (!e.ok)
        throw new Error(`Failed to fetch "${t18}"`);
      return e;
    });
  }
  s(kr, "fetchURL");
  function Ot(t18) {
    return kr(t18).then((e) => e.json());
  }
  s(Ot, "fetchJSON");
  function ks(t18) {
    return kr(t18).then((e) => e.text());
  }
  s(ks, "fetchText");
  function _s(t18) {
    return kr(t18).then((e) => e.arrayBuffer());
  }
  s(_s, "fetchArrayBuffer");
  function Ns(t18) {
    return t18 !== void 0 && (c.assets.urlPrefix = t18), c.assets.urlPrefix;
  }
  s(Ns, "loadRoot");
  function Us(t18, e) {
    return c.assets.custom.add(t18, Ot(de(e)));
  }
  s(Us, "loadJSON");
  function Et(t18) {
    let e = new Image();
    return e.crossOrigin = "anonymous", e.src = t18, new Promise((n2, r) => {
      e.onload = () => n2(e), e.onerror = () => r(new Error(`Failed to load image from "${t18}"`));
    });
  }
  s(Et, "loadImg");
  function Fe() {
    let t18 = [c.assets.sprites, c.assets.sounds, c.assets.shaders, c.assets.fonts, c.assets.bitmapFonts, c.assets.custom];
    return t18.reduce((e, n2) => e + n2.progress(), 0) / t18.length;
  }
  s(Fe, "loadProgress");
  function Un() {
    return [c.assets.sprites, c.assets.sounds, c.assets.shaders, c.assets.fonts, c.assets.bitmapFonts, c.assets.custom].reduce((e, n2) => e.concat(n2.getFailedAssets()), []);
  }
  s(Un, "getFailedAssets");
  function Hs(t18) {
    return c.assets.custom.get(t18) ?? null;
  }
  s(Hs, "getAsset");
  function ln(t18) {
    return c.assets.custom.add(null, t18);
  }
  s(ln, "load");
  var qs = s((t18, e) => ({ urlPrefix: "", sprites: new ft(), fonts: new ft(), bitmapFonts: new ft(), sounds: new ft(), shaders: new ft(), custom: new ft(), music: {}, packer: new cn(t18, 2048, 2048, e), loaded: false }), "initAssets");
  var zs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var Le = class t15 {
    static {
      s(this, "SpriteData");
    }
    tex;
    frames = [new z(0, 0, 1, 1)];
    anims = {};
    slice9 = null;
    constructor(e, n2, r = {}, o = null) {
      this.tex = e, n2 && (this.frames = n2), this.anims = r, this.slice9 = o;
    }
    get width() {
      return this.tex.width * this.frames[0].w;
    }
    get height() {
      return this.tex.height * this.frames[0].h;
    }
    static from(e, n2 = {}) {
      return typeof e == "string" ? t15.fromURL(e, n2) : Promise.resolve(t15.fromImage(e, n2));
    }
    static fromImage(e, n2 = {}) {
      let [r, o] = c.assets.packer.add(e), i = n2.frames ? n2.frames.map((a2) => new z(o.x + a2.x * o.w, o.y + a2.y * o.h, a2.w * o.w, a2.h * o.h)) : Nr(n2.sliceX || 1, n2.sliceY || 1, o.x, o.y, o.w, o.h);
      return new t15(r, i, n2.anims, n2.slice9);
    }
    static fromURL(e, n2 = {}) {
      return Et(e).then((r) => t15.fromImage(r, n2));
    }
  };
  function It(t18) {
    if (typeof t18 == "string") {
      let e = _r(t18);
      if (e)
        return e;
      if (Fe() < 1)
        return null;
      throw new Error(`Sprite not found: ${t18}`);
    } else {
      if (t18 instanceof Le)
        return le.loaded(t18);
      if (t18 instanceof le)
        return t18;
      throw new Error(`Invalid sprite: ${t18}`);
    }
  }
  s(It, "resolveSprite");
  function _r(t18) {
    return c.assets.sprites.get(t18) ?? null;
  }
  s(_r, "getSprite");
  function Tt(t18, e, n2 = { sliceX: 1, sliceY: 1, anims: {} }) {
    return e = de(e), Array.isArray(e) ? e.some((r) => typeof r == "string") ? c.assets.sprites.add(t18, Promise.all(e.map((r) => typeof r == "string" ? Et(r) : Promise.resolve(r))).then((r) => Ys(r, n2))) : c.assets.sprites.addLoaded(t18, Ys(e, n2)) : typeof e == "string" ? c.assets.sprites.add(t18, Le.from(e, n2)) : c.assets.sprites.addLoaded(t18, Le.fromImage(e, n2));
  }
  s(Tt, "loadSprite");
  function Nr(t18 = 1, e = 1, n2 = 0, r = 0, o = 1, i = 1) {
    let a2 = [], l = o / t18, u2 = i / e;
    for (let m = 0; m < e; m++)
      for (let d = 0; d < t18; d++)
        a2.push(new z(n2 + d * l, r + m * u2, l, u2));
    return a2;
  }
  s(Nr, "slice");
  function Ys(t18, e = {}) {
    let n2 = document.createElement("canvas"), r = t18[0].width, o = t18[0].height;
    n2.width = r * t18.length, n2.height = o;
    let i = n2.getContext("2d");
    if (!i)
      throw new Error("Failed to create canvas context");
    t18.forEach((l, u2) => {
      l instanceof ImageData ? i.putImageData(l, u2 * r, 0) : i.drawImage(l, u2 * r, 0);
    });
    let a2 = i.getImageData(0, 0, t18.length * r, o);
    return Le.fromImage(a2, { ...e, sliceX: t18.length, sliceY: 1 });
  }
  s(Ys, "createSpriteSheet");
  function Ws(t18 = "bean") {
    return Tt(t18, zs);
  }
  s(Ws, "loadBean");
  function $s(t18, e, n2) {
    e = de(e), n2 = de(n2), typeof e == "string" && !n2 && (n2 = xs(e) + ".json");
    let r = typeof n2 == "string" ? Ot(n2) : Promise.resolve(n2);
    return c.assets.sprites.add(t18, r.then((o) => {
      let i = o.meta.size, a2 = o.frames.map((u2) => new z(u2.frame.x / i.w, u2.frame.y / i.h, u2.frame.w / i.w, u2.frame.h / i.h)), l = {};
      for (let u2 of o.meta.frameTags)
        u2.from === u2.to ? l[u2.name] = u2.from : l[u2.name] = { from: u2.from, to: u2.to, speed: 10, loop: true, pingpong: u2.direction === "pingpong" };
      return Le.from(e, { frames: a2, anims: l });
    }));
  }
  s($s, "loadAseprite");
  var At = class {
    static {
      s(this, "FontData");
    }
    fontface;
    filter = Zt;
    outline = null;
    size = 64;
    constructor(e, n2 = {}) {
      if (this.fontface = e, this.filter = n2.filter ?? Zt, this.size = n2.size ?? 64, this.size > 256)
        throw new Error(`Max font size: ${256}`);
      n2.outline && (this.outline = { width: 1, color: I(0, 0, 0) }, typeof n2.outline == "number" ? this.outline.width = n2.outline : typeof n2.outline == "object" && (n2.outline.width && (this.outline.width = n2.outline.width), n2.outline.color && (this.outline.color = n2.outline.color)));
    }
  };
  function Ur(t18) {
    if (!t18)
      return Ur(c.globalOpt.font ?? rs);
    if (typeof t18 == "string") {
      let e = Hn(t18), n2 = Hr(t18);
      if (e)
        return e.data ?? e;
      if (n2)
        return n2.data ?? n2;
      if (document.fonts.check(`${64}px ${t18}`))
        return t18;
      if (Fe() < 1)
        return null;
      throw new Error(`Font not found: ${t18}`);
    } else if (t18 instanceof le)
      return t18.data ? t18.data : t18;
    return t18;
  }
  s(Ur, "resolveFont");
  function Hr(t18) {
    return c.assets.fonts.get(t18) ?? null;
  }
  s(Hr, "getFont");
  function Xs(t18, e, n2 = {}) {
    let r = de(e), o = new FontFace(t18, typeof e == "string" ? `url(${r})` : r);
    return document.fonts.add(o), c.assets.fonts.add(t18, o.load().catch((i) => {
      throw new Error(`Failed to load font from "${r}": ${i}`);
    }).then((i) => new At(i, n2)));
  }
  s(Xs, "loadFont");
  function Qs(t18, e, n2, r) {
    let o = t18.width / e, i = {}, a2 = r.split("").entries();
    for (let [l, u2] of a2)
      i[u2] = new z(l % o * e, Math.floor(l / o) * n2, e, n2);
    return { tex: t18, map: i, size: n2 };
  }
  s(Qs, "makeFont");
  function Hn(t18) {
    return c.assets.bitmapFonts.get(t18) ?? null;
  }
  s(Hn, "getBitmapFont");
  function Js(t18, e, n2, r, o = {}) {
    let i = de(e);
    return c.assets.bitmapFonts.add(t18, Et(i).then((a2) => Qs(Pe.fromImage(c.gfx.ggl, a2, o), n2, r, o.chars ?? Dn)));
  }
  s(Js, "loadBitmapFont");
  function Zs(t18, e) {
    return e = de(e), c.assets.sprites.add(t18, new Promise(async (n2) => {
      let r = typeof e == "string" ? await Ot(e) : e, o = await Promise.all(r.frames.map(Et)), i = document.createElement("canvas");
      i.width = r.width, i.height = r.height * r.frames.length;
      let a2 = i.getContext("2d");
      if (!a2)
        throw new Error("Failed to create canvas context");
      o.forEach((u2, m) => {
        a2.drawImage(u2, 0, m * r.height);
      });
      let l = await Tt(null, i, { sliceY: r.frames.length, anims: r.anims });
      n2(l);
    }));
  }
  s(Zs, "loadPedit");
  var qr = class {
    static {
      s(this, "Shader");
    }
    ctx;
    glProgram;
    constructor(e, n2, r, o) {
      this.ctx = e, e.onDestroy(() => this.free());
      let i = e.gl, a2 = i.createShader(i.VERTEX_SHADER), l = i.createShader(i.FRAGMENT_SHADER);
      if (!a2 || !l)
        throw new Error("Failed to create shader");
      i.shaderSource(a2, n2), i.shaderSource(l, r), i.compileShader(a2), i.compileShader(l);
      let u2 = i.createProgram();
      if (this.glProgram = u2, i.attachShader(u2, a2), i.attachShader(u2, l), o.forEach((m, d) => i.bindAttribLocation(u2, d, m)), i.linkProgram(u2), !i.getProgramParameter(u2, i.LINK_STATUS)) {
        let m = i.getShaderInfoLog(a2);
        if (m)
          throw new Error("VERTEX SHADER " + m);
        let d = i.getShaderInfoLog(l);
        if (d)
          throw new Error("FRAGMENT SHADER " + d);
      }
      i.deleteShader(a2), i.deleteShader(l);
    }
    bind() {
      this.ctx.pushProgram(this.glProgram);
    }
    unbind() {
      this.ctx.popProgram();
    }
    send(e) {
      let n2 = this.ctx.gl;
      for (let r in e) {
        let o = e[r], i = n2.getUniformLocation(this.glProgram, r);
        if (typeof o == "number")
          n2.uniform1f(i, o);
        else if (o instanceof he)
          n2.uniformMatrix4fv(i, false, new Float32Array(o.m));
        else if (o instanceof K)
          n2.uniform3f(i, o.r, o.g, o.b);
        else if (o instanceof E)
          n2.uniform2f(i, o.x, o.y);
        else if (Array.isArray(o)) {
          let a2 = o[0];
          gs(o) ? n2.uniform1fv(i, o) : hs(o) ? n2.uniform2fv(i, o.map((l) => [l.x, l.y]).flat()) : fs(o) && n2.uniform3fv(i, o.map((l) => [l.r, l.g, l.b]).flat());
        } else
          throw new Error("Unsupported uniform data type");
      }
    }
    free() {
      this.ctx.gl.deleteProgram(this.glProgram);
    }
  };
  function qn(t18, e = tn, n2 = nn) {
    let r = as.replace("{{user}}", e ?? tn), o = us.replace("{{user}}", n2 ?? nn);
    try {
      return new qr(t18, r, o, en.map((i) => i.name));
    } catch (i) {
      let l = /(?<type>^\w+) SHADER ERROR: 0:(?<line>\d+): (?<msg>.+)/, u2 = Cs(i).match(l);
      if (!u2?.groups)
        throw i;
      let m = Number(u2.groups.line) - 14, d = u2.groups.msg.trim(), C = u2.groups.type.toLowerCase();
      throw new Error(`${C} shader line ${m}: ${d}`);
    }
  }
  s(qn, "makeShader");
  function ei(t18) {
    if (!t18)
      return c.gfx.defShader;
    if (typeof t18 == "string") {
      let e = zr(t18);
      if (e)
        return e.data ?? e;
      if (Fe() < 1)
        return null;
      throw new Error(`Shader not found: ${t18}`);
    } else if (t18 instanceof le)
      return t18.data ? t18.data : t18;
    return t18;
  }
  s(ei, "resolveShader");
  function zr(t18) {
    return c.assets.shaders.get(t18) ?? null;
  }
  s(zr, "getShader");
  function ti(t18, e, n2) {
    return c.assets.shaders.addLoaded(t18, qn(c.gfx.ggl, e, n2));
  }
  s(ti, "loadShader");
  function ni(t18, e, n2) {
    e = de(e), n2 = de(n2);
    let r = s((i) => i ? ks(i) : Promise.resolve(null), "resolveUrl"), o = Promise.all([r(e), r(n2)]).then(([i, a2]) => qn(c.gfx.ggl, i, a2));
    return c.assets.shaders.add(t18, o);
  }
  s(ni, "loadShaderURL");
  var ot = class t16 {
    static {
      s(this, "SoundData");
    }
    buf;
    constructor(e) {
      this.buf = e;
    }
    static fromArrayBuffer(e) {
      return new Promise((n2, r) => c.audio.ctx.decodeAudioData(e, n2, r)).then((n2) => new t16(n2));
    }
    static fromURL(e) {
      return Ln(e) ? t16.fromArrayBuffer(bs(e)) : _s(e).then((n2) => t16.fromArrayBuffer(n2));
    }
  };
  function ri(t18) {
    if (typeof t18 == "string") {
      let e = Yr(t18);
      if (e)
        return e;
      if (Fe() < 1)
        return null;
      throw new Error(`Sound not found: ${t18}`);
    } else {
      if (t18 instanceof ot)
        return le.loaded(t18);
      if (t18 instanceof le)
        return t18;
      throw new Error(`Invalid sound: ${t18}`);
    }
  }
  s(ri, "resolveSound");
  function Yr(t18) {
    return c.assets.sounds.get(t18) ?? null;
  }
  s(Yr, "getSound");
  function oi(t18, e) {
    return e = de(e), c.assets.sounds.add(t18, typeof e == "string" ? ot.fromURL(e) : ot.fromArrayBuffer(e));
  }
  s(oi, "loadSound");
  function si(t18, e) {
    let n2 = de(e), r = new Audio(n2);
    return r.preload = "auto", c.assets.music[t18] = n2;
  }
  s(si, "loadMusic");
  function Wr(t18, e) {
    return t18 = de(t18), typeof e == "string" ? ln(new Promise((n2, r) => {
      Ot(e).then((o) => {
        Wr(t18, o).then(n2).catch(r);
      });
    })) : ln(Le.from(t18).then((n2) => {
      let r = {};
      for (let o in e) {
        let i = e[o], a2 = n2.frames[0], l = 2048 * a2.w, u2 = 2048 * a2.h, m = i.frames ? i.frames.map((C) => new z(a2.x + (i.x + C.x) / l * a2.w, a2.y + (i.y + C.y) / u2 * a2.h, C.w / l * a2.w, C.h / u2 * a2.h)) : Nr(i.sliceX || 1, i.sliceY || 1, a2.x + i.x / l * a2.w, a2.y + i.y / u2 * a2.h, i.width / l * a2.w, i.height / u2 * a2.h), d = new Le(n2.tex, m, i.anims);
        c.assets.sprites.addLoaded(o, d), r[o] = d;
      }
      return r;
    }));
  }
  s(Wr, "loadSpriteAtlas");
  function je(t18, e, n2 = false, r, o, i = {}) {
    let a2 = r ?? c.gfx.defTex, l = o ?? c.gfx.defShader, u2 = ei(l);
    if (!u2 || u2 instanceof le)
      return;
    let m = c.gfx.fixed || n2 ? c.gfx.transform : c.game.cam.transform.mult(c.gfx.transform), d = [];
    for (let C of t18) {
      let p = Fs(m.multVec2(C.pos));
      d.push(p.x, p.y, C.uv.x, C.uv.y, C.color.r / 255, C.color.g / 255, C.color.b / 255, C.opacity);
    }
    c.gfx.renderer.push(c.gfx.ggl.gl.TRIANGLES, d, e, u2, a2, i);
  }
  s(je, "drawRaw");
  function Ge(t18) {
    if (!t18.pts)
      throw new Error('drawPolygon() requires property "pts".');
    let e = t18.pts.length;
    if (!(e < 3)) {
      if (be(), Q(t18.pos), rt(t18.scale), $e(t18.angle), Q(t18.offset), t18.fill !== false) {
        let n2 = t18.color ?? K.WHITE, r = t18.pts.map((i, a2) => ({ pos: new E(i.x, i.y), uv: t18.uv ? t18.uv[a2] : new E(0, 0), color: t18.colors && t18.colors[a2] ? t18.colors[a2].mult(n2) : n2, opacity: t18.opacity ?? 1 })), o;
        t18.triangulate ? o = Rn(t18.pts).map((a2) => a2.map((l) => t18.pts.indexOf(l))).flat() : o = [...Array(e - 2).keys()].map((i) => [0, i + 1, i + 2]).flat(), je(r, t18.indices ?? o, t18.fixed, t18.uv ? t18.tex : c.gfx.defTex, t18.shader, t18.uniform ?? void 0);
      }
      t18.outline && kt({ pts: [...t18.pts, t18.pts[0]], radius: t18.radius, width: t18.outline.width, color: t18.outline.color, join: t18.outline.join, uniform: t18.uniform, fixed: t18.fixed, opacity: t18.opacity ?? t18.outline.opacity }), pe();
    }
  }
  s(Ge, "drawPolygon");
  function zn(t18) {
    if (t18.radiusX === void 0 || t18.radiusY === void 0)
      throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
    if (t18.radiusX === 0 || t18.radiusY === 0)
      return;
    let e = t18.start ?? 0, n2 = t18.end ?? 360, r = Ne(t18.anchor ?? "center").scale(new E(-t18.radiusX, -t18.radiusY)), o = Ct(r, t18.radiusX, t18.radiusY, e, n2, t18.resolution);
    o.unshift(r);
    let i = Object.assign({}, t18, { pts: o, radius: 0, ...t18.gradient ? { colors: [t18.gradient[0], ...Array(o.length - 1).fill(t18.gradient[1])] } : {} });
    if (n2 - e >= 360 && t18.outline) {
      t18.fill !== false && Ge(Object.assign({}, i, { outline: null })), Ge(Object.assign({}, i, { pts: o.slice(1), fill: false }));
      return;
    }
    Ge(i);
  }
  s(zn, "drawEllipse");
  function Ue(t18) {
    if (typeof t18.radius != "number")
      throw new Error('drawCircle() requires property "radius".');
    t18.radius !== 0 && zn(Object.assign({}, t18, { radiusX: t18.radius, radiusY: t18.radius, angle: 0 }));
  }
  s(Ue, "drawCircle");
  function _t(t18) {
    let { p1: e, p2: n2 } = t18;
    if (!e || !n2)
      throw new Error('drawLine() requires properties "p1" and "p2".');
    let r = t18.width || 1, o = n2.sub(e).unit().normal().scale(r * 0.5), i = [e.sub(o), e.add(o), n2.add(o), n2.sub(o)].map((a2) => ({ pos: new E(a2.x, a2.y), uv: new E(0), color: t18.color ?? K.WHITE, opacity: t18.opacity ?? 1 }));
    je(i, [0, 1, 3, 1, 2, 3], t18.fixed, c.gfx.defTex, t18.shader, t18.uniform ?? void 0);
  }
  s(_t, "drawLine");
  function Qu(t18) {
    let e = t18.pts, n2 = [], r = (t18.width || 1) * 0.5, o = e[0] === e[e.length - 1] || e[0].eq(e[e.length - 1]), i = t18.pos || v(0, 0), a2;
    o ? a2 = e[0].sub(e[e.length - 2]) : a2 = e[1].sub(e[0]);
    let l = a2.len(), u2 = a2.normal().scale(-r / l), m, d = e[0];
    if (!o)
      switch (t18.cap) {
        case "square": {
          let f = a2.scale(-r / l);
          n2.push(d.add(f).add(u2)), n2.push(d.add(f).sub(u2));
          break;
        }
        case "round": {
          let f = Math.max(r, 10), O = Math.PI / f, g = u2.scale(-1), y2 = Math.cos(O), V = Math.sin(O);
          for (let A = 0; A < f; A++)
            n2.push(d), n2.push(d.sub(g)), g = v(g.x * y2 - g.y * V, g.x * V + g.y * y2);
        }
      }
    for (let f = 1; f < e.length; f++) {
      if (d === e[f] || d.eq(e[f]))
        continue;
      m = d, d = e[f];
      let O = d.sub(m), g = O.len(), y2 = O.normal().scale(-r / g), V = a2.cross(O);
      if (Math.abs(V) / (l * g) < 0.05) {
        n2.push(m.add(u2)), n2.push(m.sub(u2)), a2.dot(O) < 0 && (n2.push(m.sub(u2)), n2.push(m.add(u2))), a2 = O, l = g, u2 = y2;
        continue;
      }
      let A = y2.sub(u2).cross(O) / V, D = u2.add(a2.scale(A));
      V > 0 ? (n2.push(m.add(D)), n2.push(m.sub(u2)), n2.push(m.add(D)), n2.push(m.sub(y2))) : (n2.push(m.add(u2)), n2.push(m.sub(D)), n2.push(m.add(y2)), n2.push(m.sub(D))), a2 = O, l = g, u2 = y2;
    }
    if (!o)
      switch (n2.push(d.add(u2)), n2.push(d.sub(u2)), t18.cap) {
        case "square": {
          let f = a2.scale(r / l);
          n2.push(d.add(f).add(u2)), n2.push(d.add(f).sub(u2));
          break;
        }
        case "round": {
          let f = Math.max(r, 10), O = Math.PI / f, g = u2.scale(1), y2 = Math.cos(O), V = Math.sin(O);
          for (let A = 0; A < f; A++)
            g = v(g.x * y2 - g.y * V, g.x * V + g.y * y2), n2.push(d), n2.push(d.sub(g));
        }
      }
    if (n2.length < 4)
      return;
    let C = n2.map((f) => ({ pos: i.add(f), uv: v(), color: t18.color || K.WHITE, opacity: t18.opacity ?? 1 })), p = [], b = 0;
    for (let f = 0; f < n2.length - 2; f += 2)
      p[b++] = f + 1, p[b++] = f, p[b++] = f + 2, p[b++] = f + 2, p[b++] = f + 3, p[b++] = f + 1;
    o && (p[b++] = n2.length - 1, p[b++] = n2.length - 2, p[b++] = 0, p[b++] = 0, p[b++] = 1, p[b++] = n2.length - 1), je(C, p, t18.fixed, c.gfx.defTex, t18.shader, t18.uniform ?? void 0);
  }
  s(Qu, "_drawLinesBevel");
  function Ju(t18) {
    let e = t18.pts, n2 = [], r = (t18.width || 1) * 0.5, o = e[0] === e[e.length - 1] || e[0].eq(e[e.length - 1]), i = t18.pos || v(0, 0), a2;
    o ? a2 = e[0].sub(e[e.length - 2]) : a2 = e[1].sub(e[0]);
    let l = a2.len(), u2 = a2.normal().scale(-r / l), m, d = e[0];
    if (!o)
      switch (t18.cap) {
        case "square": {
          let f = a2.scale(-r / l);
          n2.push(d.add(f).add(u2)), n2.push(d.add(f).sub(u2));
          break;
        }
        case "round": {
          let f = Math.max(r, 10), O = Math.PI / f, g = u2.scale(-1), y2 = Math.cos(O), V = Math.sin(O);
          for (let A = 0; A < f; A++)
            n2.push(d), n2.push(d.sub(g)), g = v(g.x * y2 - g.y * V, g.x * V + g.y * y2);
        }
      }
    for (let f = 1; f < e.length; f++) {
      if (d === e[f] || d.eq(e[f]))
        continue;
      m = d, d = e[f];
      let O = d.sub(m), g = O.len(), y2 = O.normal().scale(-r / g), V = a2.cross(O);
      if (Math.abs(V) / (l * g) < 0.05) {
        n2.push(m.add(u2)), n2.push(m.sub(u2)), a2.dot(O) < 0 && (n2.push(m.sub(u2)), n2.push(m.add(u2))), a2 = O, l = g, u2 = y2;
        continue;
      }
      let A = y2.sub(u2).cross(O) / V, D = u2.add(a2.scale(A));
      if (V > 0) {
        let G = m.add(D), x = Math.max(r, 10), w = ue(u2.angleBetween(y2) / x), S = u2, M = Math.cos(w), R = Math.sin(w);
        for (let F = 0; F < x; F++)
          n2.push(G), n2.push(m.sub(S)), S = v(S.x * M - S.y * R, S.x * R + S.y * M);
      } else {
        let G = m.sub(D), x = Math.max(r, 10), w = ue(u2.angleBetween(y2) / x), S = u2, M = Math.cos(w), R = Math.sin(w);
        for (let F = 0; F < x; F++)
          n2.push(m.add(S)), n2.push(G), S = v(S.x * M - S.y * R, S.x * R + S.y * M);
      }
      a2 = O, l = g, u2 = y2;
    }
    if (!o)
      switch (n2.push(d.add(u2)), n2.push(d.sub(u2)), t18.cap) {
        case "square": {
          let f = a2.scale(r / l);
          n2.push(d.add(f).add(u2)), n2.push(d.add(f).sub(u2));
          break;
        }
        case "round": {
          let f = Math.max(r, 10), O = Math.PI / f, g = u2.scale(1), y2 = Math.cos(O), V = Math.sin(O);
          for (let A = 0; A < f; A++)
            g = v(g.x * y2 - g.y * V, g.x * V + g.y * y2), n2.push(d), n2.push(d.sub(g));
        }
      }
    if (n2.length < 4)
      return;
    let C = n2.map((f) => ({ pos: i.add(f), uv: v(), color: t18.color || K.WHITE, opacity: t18.opacity ?? 1 })), p = [], b = 0;
    for (let f = 0; f < n2.length - 2; f += 2)
      p[b++] = f + 1, p[b++] = f, p[b++] = f + 2, p[b++] = f + 2, p[b++] = f + 3, p[b++] = f + 1;
    o && (p[b++] = n2.length - 1, p[b++] = n2.length - 2, p[b++] = 0, p[b++] = 0, p[b++] = 1, p[b++] = n2.length - 1), je(C, p, t18.fixed, c.gfx.defTex, t18.shader, t18.uniform ?? void 0);
  }
  s(Ju, "_drawLinesRound");
  function Zu(t18) {
    let e = t18.pts, n2 = [], r = (t18.width || 1) * 0.5, o = e[0] === e[e.length - 1] || e[0].eq(e[e.length - 1]), i = t18.pos || v(0, 0), a2;
    o ? a2 = e[0].sub(e[e.length - 2]) : a2 = e[1].sub(e[0]);
    let l = a2.len(), u2 = a2.normal().scale(-r / l), m, d = e[0];
    if (!o)
      switch (t18.cap) {
        case "square": {
          let f = a2.scale(-r / l);
          n2.push(d.add(f).add(u2)), n2.push(d.add(f).sub(u2));
          break;
        }
        case "round": {
          let f = Math.max(r, 10), O = Math.PI / f, g = u2.scale(-1), y2 = Math.cos(O), V = Math.sin(O);
          for (let A = 0; A < f; A++)
            n2.push(d), n2.push(d.sub(g)), g = v(g.x * y2 - g.y * V, g.x * V + g.y * y2);
        }
      }
    for (let f = 1; f < e.length; f++) {
      if (d === e[f] || d.eq(e[f]))
        continue;
      m = d, d = e[f];
      let O = d.sub(m), g = O.len(), y2 = O.normal().scale(-r / g), V = a2.cross(O);
      if (Math.abs(V) / (l * g) < 0.05) {
        n2.push(m.add(u2)), n2.push(m.sub(u2)), a2.dot(O) < 0 && (n2.push(m.sub(u2)), n2.push(m.add(u2))), a2 = O, l = g, u2 = y2;
        continue;
      }
      let A = y2.sub(u2).cross(O) / V, D = u2.add(a2.scale(A));
      n2.push(m.add(D)), n2.push(m.sub(D)), a2 = O, l = g, u2 = y2;
    }
    if (!o)
      switch (n2.push(d.add(u2)), n2.push(d.sub(u2)), t18.cap) {
        case "square": {
          let f = a2.scale(r / l);
          n2.push(d.add(f).add(u2)), n2.push(d.add(f).sub(u2));
          break;
        }
        case "round": {
          let f = Math.max(r, 10), O = Math.PI / f, g = u2.scale(1), y2 = Math.cos(O), V = Math.sin(O);
          for (let A = 0; A < f; A++)
            g = v(g.x * y2 - g.y * V, g.x * V + g.y * y2), n2.push(d), n2.push(d.sub(g));
        }
      }
    if (n2.length < 4)
      return;
    let C = n2.map((f) => ({ pos: i.add(f), uv: v(), color: t18.color || K.WHITE, opacity: t18.opacity ?? 1 })), p = [], b = 0;
    for (let f = 0; f < n2.length - 2; f += 2)
      p[b++] = f + 1, p[b++] = f, p[b++] = f + 2, p[b++] = f + 2, p[b++] = f + 3, p[b++] = f + 1;
    o && (p[b++] = n2.length - 1, p[b++] = n2.length - 2, p[b++] = 0, p[b++] = 0, p[b++] = 1, p[b++] = n2.length - 1), je(C, p, t18.fixed, c.gfx.defTex, t18.shader, t18.uniform ?? void 0);
  }
  s(Zu, "_drawLinesMiter");
  function kt(t18) {
    let e = t18.pts, n2 = t18.width ?? 1;
    if (!e)
      throw new Error('drawLines() requires property "pts".');
    if (!(e.length < 2)) {
      if (e.length > 2)
        switch (t18.join) {
          case "bevel":
            return Qu(t18);
          case "round":
            return Ju(t18);
          case "miter":
            return Zu(t18);
        }
      if (t18.radius && e.length >= 3) {
        _t(Object.assign({}, t18, { p1: e[0], p2: e[1] }));
        for (let r = 1; r < e.length - 2; r++) {
          let o = e[r], i = e[r + 1];
          _t(Object.assign({}, t18, { p1: o, p2: i }));
        }
        _t(Object.assign({}, t18, { p1: e[e.length - 2], p2: e[e.length - 1] }));
      } else
        for (let r = 0; r < e.length - 1; r++)
          _t(Object.assign({}, t18, { p1: e[r], p2: e[r + 1] })), t18.join !== "none" && Ue(Object.assign({}, t18, { pos: e[r], radius: n2 / 2 }));
    }
  }
  s(kt, "drawLines");
  function Yn(t18, e) {
    let n2 = e.segments ?? 16, r = [];
    for (let o = 0; o <= n2; o++)
      r.push(t18(o / n2));
    kt({ pts: r, width: e.width || 1, pos: e.pos, color: e.color, opacity: e.opacity });
  }
  s(Yn, "drawCurve");
  function ii(t18) {
    Yn((e) => Jt(t18.pt1, t18.pt2, t18.pt3, t18.pt4, e), t18);
  }
  s(ii, "drawBezier");
  var Pe = class t17 {
    static {
      s(this, "Texture");
    }
    ctx;
    src = null;
    glTex;
    width;
    height;
    constructor(e, n2, r, o = {}) {
      this.ctx = e;
      let i = e.gl, a2 = e.gl.createTexture();
      if (!a2)
        throw new Error("Failed to create texture");
      this.glTex = a2, e.onDestroy(() => this.free()), this.width = n2, this.height = r;
      let l = { linear: i.LINEAR, nearest: i.NEAREST }[o.filter ?? e.opts.texFilter ?? "nearest"], u2 = { repeat: i.REPEAT, clampToEdge: i.CLAMP_TO_EDGE }[o.wrap ?? "clampToEdge"];
      this.bind(), n2 && r && i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, n2, r, 0, i.RGBA, i.UNSIGNED_BYTE, null), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, l), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, l), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, u2), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, u2), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true), this.unbind();
    }
    static fromImage(e, n2, r = {}) {
      let o = new t17(e, n2.width, n2.height, r);
      return o.update(n2), o.src = n2, o;
    }
    update(e, n2 = 0, r = 0) {
      let o = this.ctx.gl;
      this.bind(), o.texSubImage2D(o.TEXTURE_2D, 0, n2, r, o.RGBA, o.UNSIGNED_BYTE, e), this.unbind();
    }
    bind() {
      this.ctx.pushTexture2D(this.glTex);
    }
    unbind() {
      this.ctx.popTexture2D();
    }
    free() {
      this.ctx.gl.deleteTexture(this.glTex);
    }
  };
  var st = class {
    static {
      s(this, "FrameBuffer");
    }
    ctx;
    tex;
    glFramebuffer;
    glRenderbuffer;
    constructor(e, n2, r, o = {}) {
      this.ctx = e;
      let i = e.gl;
      e.onDestroy(() => this.free()), this.tex = new Pe(e, n2, r, o);
      let a2 = i.createFramebuffer(), l = i.createRenderbuffer();
      if (!a2 || !l)
        throw new Error("Failed to create framebuffer");
      this.glFramebuffer = a2, this.glRenderbuffer = l, this.bind(), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, n2, r), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, this.tex.glTex, 0), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, this.glRenderbuffer), this.unbind();
    }
    get width() {
      return this.tex.width;
    }
    get height() {
      return this.tex.height;
    }
    toImageData() {
      let e = this.ctx.gl, n2 = new Uint8ClampedArray(this.width * this.height * 4);
      this.bind(), e.readPixels(0, 0, this.width, this.height, e.RGBA, e.UNSIGNED_BYTE, n2), this.unbind();
      let r = this.width * 4, o = new Uint8Array(r);
      for (let i = 0; i < (this.height / 2 | 0); i++) {
        let a2 = i * r, l = (this.height - i - 1) * r;
        o.set(n2.subarray(a2, a2 + r)), n2.copyWithin(a2, l, l + r), n2.set(o, l);
      }
      return new ImageData(n2, this.width, this.height);
    }
    toDataURL() {
      let e = document.createElement("canvas"), n2 = e.getContext("2d");
      if (e.width = this.width, e.height = this.height, !n2)
        throw new Error("Failed to get 2d context");
      return n2.putImageData(this.toImageData(), 0, 0), e.toDataURL();
    }
    clear() {
      let e = this.ctx.gl;
      e.clear(e.COLOR_BUFFER_BIT);
    }
    draw(e) {
      this.bind(), e(), this.unbind();
    }
    bind() {
      this.ctx.pushFramebuffer(this.glFramebuffer), this.ctx.pushRenderbuffer(this.glRenderbuffer), this.ctx.pushViewport({ x: 0, y: 0, w: this.width, h: this.height });
    }
    unbind() {
      this.ctx.popFramebuffer(), this.ctx.popRenderbuffer(), this.ctx.popViewport();
    }
    free() {
      let e = this.ctx.gl;
      e.deleteFramebuffer(this.glFramebuffer), e.deleteRenderbuffer(this.glRenderbuffer), this.tex.free();
    }
  };
  var Wn = class {
    static {
      s(this, "BatchRenderer");
    }
    ctx;
    glVBuf;
    glIBuf;
    vqueue = [];
    iqueue = [];
    stride;
    maxVertices;
    maxIndices;
    vertexFormat;
    numDraws = 0;
    curPrimitive = null;
    curTex = null;
    curShader = null;
    curUniform = {};
    constructor(e, n2, r, o) {
      let i = e.gl;
      this.vertexFormat = n2, this.ctx = e, this.stride = n2.reduce((l, u2) => l + u2.size, 0), this.maxVertices = r, this.maxIndices = o;
      let a2 = i.createBuffer();
      if (!a2)
        throw new Error("Failed to create vertex buffer");
      this.glVBuf = a2, e.pushArrayBuffer(this.glVBuf), i.bufferData(i.ARRAY_BUFFER, r * 4, i.DYNAMIC_DRAW), e.popArrayBuffer(), this.glIBuf = i.createBuffer(), e.pushElementArrayBuffer(this.glIBuf), i.bufferData(i.ELEMENT_ARRAY_BUFFER, o * 4, i.DYNAMIC_DRAW), e.popElementArrayBuffer();
    }
    push(e, n2, r, o, i = null, a2 = {}) {
      (e !== this.curPrimitive || i !== this.curTex || o !== this.curShader || !jn(this.curUniform, a2) || this.vqueue.length + n2.length * this.stride > this.maxVertices || this.iqueue.length + r.length > this.maxIndices) && this.flush();
      let l = this.vqueue.length / this.stride;
      for (let u2 of n2)
        this.vqueue.push(u2);
      for (let u2 of r)
        this.iqueue.push(u2 + l);
      this.curPrimitive = e, this.curShader = o, this.curTex = i, this.curUniform = a2;
    }
    flush() {
      if (!this.curPrimitive || !this.curShader || this.vqueue.length === 0 || this.iqueue.length === 0)
        return;
      let e = this.ctx.gl;
      this.ctx.pushArrayBuffer(this.glVBuf), e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(this.vqueue)), this.ctx.pushElementArrayBuffer(this.glIBuf), e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(this.iqueue)), this.ctx.setVertexFormat(this.vertexFormat), this.curShader.bind(), this.curShader.send(this.curUniform), this.curTex?.bind(), e.drawElements(this.curPrimitive, this.iqueue.length, e.UNSIGNED_SHORT, 0), this.curTex?.unbind(), this.curShader.unbind(), this.ctx.popArrayBuffer(), this.ctx.popElementArrayBuffer(), this.vqueue = [], this.iqueue = [], this.numDraws++;
    }
    free() {
      let e = this.ctx.gl;
      e.deleteBuffer(this.glVBuf), e.deleteBuffer(this.glIBuf);
    }
  };
  function St(t18) {
    let e = [], n2 = s((i) => {
      e.push(i), t18(i);
    }, "push"), r = s(() => {
      e.pop(), t18(o() ?? null);
    }, "pop"), o = s(() => e[e.length - 1], "cur");
    return [n2, r, o];
  }
  s(St, "genStack");
  function ai(t18, e = {}) {
    let n2 = [];
    function r(G) {
      n2.push(G);
    }
    s(r, "onDestroy");
    function o() {
      n2.forEach((x) => x());
      let G = t18.getExtension("WEBGL_lose_context");
      G && G.loseContext();
    }
    s(o, "destroy");
    let i = null;
    function a2(G) {
      if (jn(G, i))
        return;
      i = G;
      let x = G.reduce((w, S) => w + S.size, 0);
      G.reduce((w, S, M) => (t18.vertexAttribPointer(M, S.size, t18.FLOAT, false, x * 4, w), t18.enableVertexAttribArray(M), w + S.size * 4), 0);
    }
    s(a2, "setVertexFormat");
    let [l, u2] = St((G) => t18.bindTexture(t18.TEXTURE_2D, G)), [m, d] = St((G) => t18.bindBuffer(t18.ARRAY_BUFFER, G)), [C, p] = St((G) => t18.bindBuffer(t18.ELEMENT_ARRAY_BUFFER, G)), [b, f] = St((G) => t18.bindFramebuffer(t18.FRAMEBUFFER, G)), [O, g] = St((G) => t18.bindRenderbuffer(t18.RENDERBUFFER, G)), [y2, V] = St((G) => {
      if (!G)
        return;
      let { x, y: w, w: S, h: M } = G;
      t18.viewport(x, w, S, M);
    }), [A, D] = St((G) => t18.useProgram(G));
    return y2({ x: 0, y: 0, w: t18.drawingBufferWidth, h: t18.drawingBufferHeight }), { gl: t18, opts: e, onDestroy: r, destroy: o, pushTexture2D: l, popTexture2D: u2, pushArrayBuffer: m, popArrayBuffer: d, pushElementArrayBuffer: C, popElementArrayBuffer: p, pushFramebuffer: b, popFramebuffer: f, pushRenderbuffer: O, popRenderbuffer: g, pushViewport: y2, popViewport: V, pushProgram: A, popProgram: D, setVertexFormat: a2 };
  }
  s(ai, "initGfx");
  var $r = {};
  function li(t18, e) {
    if (e.override) {
      Object.assign(t18, e);
      return;
    }
    e.pos && (t18.pos = t18.pos.add(e.pos)), e.scale && (t18.scale = t18.scale.scale(v(e.scale))), e.angle && (t18.angle += e.angle), e.color && t18.ch.length === 1 && (t18.color = t18.color.mult(e.color)), e.opacity != null && (t18.opacity *= e.opacity);
  }
  s(li, "applyCharTransform");
  function $n(t18) {
    let e = {}, n2 = "", r = [], o = String(t18), i = s((a2) => {
      r.length > 0 && (e[n2.length] = r.slice()), n2 += a2;
    }, "emit");
    for (; o !== ""; ) {
      if (o[0] === "\\") {
        if (o.length === 1)
          throw new Error("Styled text error: \\ at end of string");
        i(o[1]), o = o.slice(2);
        continue;
      }
      if (o[0] === "[") {
        let a2 = /^\[(\/)?(\w+?)\]/.exec(o);
        if (!a2) {
          i(o[0]), o = o.slice(1);
          continue;
        }
        let [l, u2, m] = a2;
        if (u2 !== void 0) {
          let d = r.pop();
          if (d !== m)
            throw d !== void 0 ? new Error(`Styled text error: mismatched tags. Expected [/${d}], got [/${m}]`) : new Error(`Styled text error: stray end tag [/${m}]`);
        } else
          r.push(m);
        o = o.slice(l.length);
        continue;
      }
      i(o[0]), o = o.slice(1);
    }
    if (r.length > 0)
      throw new Error(`Styled text error: unclosed tags ${r}`);
    return { charStyleMap: e, text: n2 };
  }
  s($n, "compileStyledText");
  function He(t18) {
    if (t18.text === void 0)
      throw new Error('formatText() requires property "text".');
    let e = Ur(t18.font);
    if (!t18.text || t18.text === "" || e instanceof le || !e)
      return { width: 0, height: 0, chars: [], opt: t18, renderedText: "" };
    let { charStyleMap: n2, text: r } = $n(t18.text + ""), o = Os(r);
    if (e instanceof At || typeof e == "string") {
      let A = e instanceof At ? e.fontface.family : e, D = e instanceof At ? { outline: e.outline, filter: e.filter } : { outline: null, filter: Zt }, G = $r[A] ?? { font: { tex: new Pe(c.gfx.ggl, 2048, 2048, { filter: D.filter }), map: {}, size: 64 }, cursor: new E(0), maxHeight: 0, outline: D.outline };
      $r[A] || ($r[A] = G), e = G.font;
      for (let x of o)
        if (!G.font.map[x]) {
          let w = c.fontCacheC2d;
          if (!w)
            throw new Error("fontCacheC2d is not defined.");
          if (!c.fontCacheCanvas)
            throw new Error("fontCacheCanvas is not defined.");
          w.clearRect(0, 0, c.fontCacheCanvas.width, c.fontCacheCanvas.height), w.font = `${e.size}px ${A}`, w.textBaseline = "top", w.textAlign = "left", w.fillStyle = "#ffffff";
          let S = w.measureText(x), M = Math.ceil(S.width);
          if (!M)
            continue;
          let R = Math.ceil(Math.abs(S.actualBoundingBoxAscent)) + Math.ceil(Math.abs(S.actualBoundingBoxDescent));
          G.outline && G.outline.width && G.outline.color && (w.lineJoin = "round", w.lineWidth = G.outline.width * 2, w.strokeStyle = G.outline.color.toHex(), w.strokeText(x, G.outline.width, G.outline.width), M += G.outline.width * 2, R += G.outline.width * 3), w.fillText(x, G.outline?.width ?? 0, G.outline?.width ?? 0);
          let F = w.getImageData(0, 0, M, R);
          if (G.cursor.x + M > 2048 && (G.cursor.x = 0, G.cursor.y += G.maxHeight, G.maxHeight = 0, G.cursor.y > 2048))
            throw new Error("Font atlas exceeds character limit");
          e.tex.update(F, G.cursor.x, G.cursor.y), e.map[x] = new z(G.cursor.x, G.cursor.y, M, R), G.cursor.x += M + 1, G.maxHeight = Math.max(G.maxHeight, R);
        }
    }
    let i = t18.size || e.size, a2 = v(t18.scale ?? 1).scale(i / e.size), l = t18.lineSpacing ?? 0, u2 = t18.letterSpacing ?? 0, m = 0, d = 0, C = 0, p = [], b = [], f = 0, O = null, g = 0, y2;
    for (; f < o.length; ) {
      let A = o[f];
      if (A === `
`)
        C += i + l, p.push({ width: m - u2, chars: b }), O = null, g = 0, m = 0, b = [], y2 = void 0;
      else {
        let D = e.map[A];
        if (D) {
          let G = D.w * a2.x;
          t18.width && m + G > t18.width && (C += i + l, O != null && (f -= b.length - O, A = o[f], D = e.map[A], G = D.w * a2.x, b = b.slice(0, O - 1), m = g), O = null, g = 0, p.push({ width: m - u2, chars: b }), m = y2 ?? 0, b = []), b.push({ tex: e.tex, width: D.w, height: D.h, quad: new z(D.x / e.tex.width, D.y / e.tex.height, D.w / e.tex.width, D.h / e.tex.height), ch: A, pos: new E(m, C), opacity: t18.opacity ?? 1, color: t18.color ?? K.WHITE, scale: v(a2), angle: 0 }), A === " " && (O = b.length, g = m), t18.indentAll && y2 === void 0 && /\S/.test(A) && (y2 = m), m += G, d = Math.max(d, m), m += u2;
        }
      }
      f++;
    }
    p.push({ width: m - u2, chars: b }), C += i, t18.width && (d = t18.width);
    let V = [];
    for (let A = 0; A < p.length; A++) {
      let D = (d - p[A].width) * Gs(t18.align ?? "left");
      for (let G of p[A].chars) {
        let x = e.map[G.ch], w = V.length + A;
        if (G.pos = G.pos.add(D, 0).add(x.w * a2.x * 0.5, x.h * a2.y * 0.5), t18.transform) {
          let S = typeof t18.transform == "function" ? t18.transform(w, G.ch) : t18.transform;
          S && li(G, S);
        }
        if (n2[w]) {
          let S = n2[w];
          for (let M of S) {
            let R = t18.styles?.[M], F = typeof R == "function" ? R(w, G.ch) : R;
            F && li(G, F);
          }
        }
        V.push(G);
      }
    }
    return { width: d, height: C, chars: V, opt: t18, renderedText: r };
  }
  s(He, "formatText");
  function it(t18) {
    if (t18.width === void 0 || t18.height === void 0)
      throw new Error('drawUVQuad() requires property "width" and "height".');
    if (t18.width <= 0 || t18.height <= 0)
      return;
    let e = t18.width, n2 = t18.height, o = Ne(t18.anchor || mt).scale(new E(e, n2).scale(-0.5)), i = t18.quad || new z(0, 0, 1, 1), a2 = t18.color || I(255, 255, 255), l = t18.opacity ?? 1, u2 = t18.tex ? 0.1 / t18.tex.width : 0, m = t18.tex ? 0.1 / t18.tex.height : 0, d = i.x + u2, C = i.y + m, p = i.w - u2 * 2, b = i.h - m * 2;
    be(), Q(t18.pos), $e(t18.angle), rt(t18.scale), Q(o), je([{ pos: new E(-e / 2, n2 / 2), uv: new E(t18.flipX ? d + p : d, t18.flipY ? C : C + b), color: a2, opacity: l }, { pos: new E(-e / 2, -n2 / 2), uv: new E(t18.flipX ? d + p : d, t18.flipY ? C + b : C), color: a2, opacity: l }, { pos: new E(e / 2, -n2 / 2), uv: new E(t18.flipX ? d : d + p, t18.flipY ? C + b : C), color: a2, opacity: l }, { pos: new E(e / 2, n2 / 2), uv: new E(t18.flipX ? d : d + p, t18.flipY ? C : C + b), color: a2, opacity: l }], [0, 1, 3, 1, 2, 3], t18.fixed, t18.tex, t18.shader, t18.uniform ?? void 0), pe();
  }
  s(it, "drawUVQuad");
  function qe(t18) {
    be(), Q(t18.opt.pos), $e(t18.opt.angle), Q(Ne(t18.opt.anchor ?? "topleft").add(1, 1).scale(t18.width, t18.height).scale(-0.5)), t18.chars.forEach((e) => {
      it({ tex: e.tex, width: e.width, height: e.height, pos: e.pos, scale: e.scale, angle: e.angle, color: e.color, opacity: e.opacity, quad: e.quad, anchor: "center", uniform: t18.opt.uniform, shader: t18.opt.shader, fixed: t18.opt.fixed });
    }), pe();
  }
  s(qe, "drawFormattedText");
  function ve(t18) {
    if (t18.width === void 0 || t18.height === void 0)
      throw new Error('drawRect() requires property "width" and "height".');
    if (t18.width <= 0 || t18.height <= 0)
      return;
    let e = t18.width, n2 = t18.height, o = Ne(t18.anchor || mt).add(1, 1).scale(new E(e, n2).scale(-0.5)), i = [new E(0, 0), new E(e, 0), new E(e, n2), new E(0, n2)];
    if (t18.radius) {
      let a2 = Math.min(e, n2) / 2, l = Array.isArray(t18.radius) ? t18.radius.map((u2) => Math.min(a2, u2)) : new Array(4).fill(Math.min(a2, t18.radius));
      i = [new E(l[0], 0), ...l[1] ? Ct(new E(e - l[1], l[1]), l[1], l[1], 270, 360) : [v(e, 0)], ...l[2] ? Ct(new E(e - l[2], n2 - l[2]), l[2], l[2], 0, 90) : [v(e, n2)], ...l[3] ? Ct(new E(l[3], n2 - l[3]), l[3], l[3], 90, 180) : [v(0, n2)], ...l[0] ? Ct(new E(l[0], l[0]), l[0], l[0], 180, 270) : []];
    }
    Ge(Object.assign({}, t18, { offset: o, pts: i, ...t18.gradient ? { colors: t18.horizontal ? [t18.gradient[0], t18.gradient[1], t18.gradient[1], t18.gradient[0]] : [t18.gradient[0], t18.gradient[0], t18.gradient[1], t18.gradient[1]] } : {} }));
  }
  s(ve, "drawRect");
  function ze(t18) {
    Oe();
    let e = c.gfx.width, n2 = c.gfx.height;
    c.gfx.width = c.gfx.viewport.width, c.gfx.height = c.gfx.viewport.height, t18(), Oe(), c.gfx.width = e, c.gfx.height = n2;
  }
  s(ze, "drawUnscaled");
  function Xr(t18, e) {
    ze(() => {
      let n2 = v(8);
      be(), Q(t18);
      let r = He({ text: e, font: yt, size: 16, pos: n2, color: I(255, 255, 255), fixed: true }), o = r.width + n2.x * 2, i = r.height + n2.x * 2;
      t18.x + o >= ae() && Q(v(-o, 0)), t18.y + i >= ce() && Q(v(0, -i)), ve({ width: o, height: i, color: I(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), qe(r), pe();
    });
  }
  s(Xr, "drawInspectText");
  function Xn(t18) {
    if (!t18.p1 || !t18.p2 || !t18.p3)
      throw new Error('drawTriangle() requires properties "p1", "p2" and "p3".');
    return Ge(Object.assign({}, t18, { pts: [t18.p1, t18.p2, t18.p3] }));
  }
  s(Xn, "drawTriangle");
  function pi() {
    if (c.debug.inspect) {
      let t18 = null;
      for (let e of c.game.root.get("*", { recursive: true }))
        if (e.c("area") && e.isHovering()) {
          t18 = e;
          break;
        }
      if (c.game.root.drawInspect(), t18) {
        let e = [], n2 = t18.inspect();
        for (let r in n2)
          n2[r] ? e.push(`${n2[r]}`) : e.push(`${r}`);
        Xr(Is(Nn()), e.join(`
`));
      }
      Xr(v(8), `FPS: ${c.debug.fps()}`);
    }
    c.debug.paused && ze(() => {
      be(), Q(ae(), 0), Q(-8, 8);
      let t18 = 32;
      ve({ width: t18, height: t18, anchor: "topright", color: I(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
      for (let e = 1; e <= 2; e++)
        ve({ width: 4, height: t18 * 0.6, anchor: "center", pos: v(-t18 / 3 * e, t18 * 0.5), color: I(255, 255, 255), radius: 2, fixed: true });
      pe();
    }), c.debug.timeScale !== 1 && ze(() => {
      be(), Q(ae(), ce()), Q(-8, -8);
      let t18 = 8, e = He({ text: c.debug.timeScale.toFixed(1), font: yt, size: 16, color: I(255, 255, 255), pos: v(-t18), anchor: "botright", fixed: true });
      ve({ width: e.width + t18 * 2 + t18 * 4, height: e.height + t18 * 2, anchor: "botright", color: I(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
      for (let n2 = 0; n2 < 2; n2++) {
        let r = c.debug.timeScale < 1;
        Xn({ p1: v(-e.width - t18 * (r ? 2 : 3.5), -t18), p2: v(-e.width - t18 * (r ? 2 : 3.5), -t18 - e.height), p3: v(-e.width - t18 * (r ? 3.5 : 2), -t18 - e.height / 2), pos: v(-n2 * t18 * 1 + (r ? -t18 * 0.5 : 0), 0), color: I(255, 255, 255), fixed: true });
      }
      qe(e), pe();
    }), c.debug.curRecording && ze(() => {
      be(), Q(0, ce()), Q(24, -24), Ue({ radius: 12, color: I(255, 0, 0), opacity: Sn(0, 1, c.app.time() * 4), fixed: true }), pe();
    }), c.debug.showLog && c.game.logs.length > 0 && ze(() => {
      be(), Q(0, ce()), Q(8, -8);
      let t18 = 8, e = [];
      for (let r of c.game.logs) {
        let o = "", i = r.msg instanceof Error ? "error" : "info";
        o += `[time]${r.time.toFixed(2)}[/time]`, o += " ", o += `[${i}]${Qr(r.msg)}[/${i}]`, e.push(o);
      }
      c.game.logs = c.game.logs.filter((r) => c.app.time() - r.time < (c.globalOpt.logTime || 4));
      let n2 = He({ text: e.join(`
`), font: yt, pos: v(t18, -t18), anchor: "botleft", size: 16, width: ae() * 0.6, lineSpacing: t18 / 2, fixed: true, styles: { time: { color: I(127, 127, 127) }, info: { color: I(255, 255, 255) }, error: { color: I(255, 0, 127) } } });
      ve({ width: n2.width + t18 * 2, height: n2.height + t18 * 2, anchor: "botleft", color: I(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), qe(n2), pe();
    });
  }
  s(pi, "drawDebug");
  function Qr(t18, e = false, n2 = /* @__PURE__ */ new Set()) {
    if (n2.has(t18))
      return "<recursive>";
    var r = "", o;
    return e && typeof t18 == "string" && (t18 = JSON.stringify(t18)), Array.isArray(t18) && (r = ["[", t18.map((i) => Qr(i, true, n2.union(/* @__PURE__ */ new Set([t18])))).join(", "), "]"].join(""), t18 = r), t18 === null ? "null" : (typeof t18 == "object" && t18.toString === Object.prototype.toString && (t18.constructor !== Object && (r += t18.constructor.name + " "), r += ["{", (o = Object.getOwnPropertyNames(t18).map((i) => `${/^\w+$/.test(i) ? i : JSON.stringify(i)}: ${Qr(t18[i], true, n2.union(/* @__PURE__ */ new Set([t18])))}`).join(", ")) ? ` ${o} ` : "", "}"].join(""), t18 = r), String(t18).replaceAll(/(?<!\\)\[/g, "\\["));
  }
  s(Qr, "prettyDebug");
  function di() {
    let t18 = c.game.cam, e = E.fromAngle(ge(0, 360)).scale(t18.shake);
    t18.shake = fe(t18.shake, 0, 5 * te()), t18.transform = new he().translate(wt()).scale(t18.scale).rotate(t18.angle).translate((t18.pos ?? wt()).scale(-1).add(e)), c.game.root.draw(), Oe();
  }
  s(di, "drawFrame");
  function fi() {
    let t18 = Fe();
    c.game.events.numListeners("loading") > 0 ? c.game.events.trigger("loading", t18) : ze(() => {
      let e = ae() / 2, n2 = 24, r = v(ae() / 2, ce() / 2).sub(v(e / 2, n2 / 2));
      ve({ pos: v(0), width: ae(), height: ce(), color: I(0, 0, 0) }), ve({ pos: r, width: e, height: n2, fill: false, outline: { width: 4 } }), ve({ pos: r, width: e * t18, height: n2 });
    });
  }
  s(fi, "drawLoadScreen");
  function Qn(t18, e, n2) {
    let r = c.gfx.ggl.gl;
    Oe(), r.clear(r.STENCIL_BUFFER_BIT), r.enable(r.STENCIL_TEST), r.stencilFunc(r.NEVER, 1, 255), r.stencilOp(r.REPLACE, r.REPLACE, r.REPLACE), e(), Oe(), r.stencilFunc(n2, 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), t18(), Oe(), r.disable(r.STENCIL_TEST);
  }
  s(Qn, "drawStenciled");
  function hi(t18, e) {
    let n2 = c.gfx.ggl.gl;
    Qn(t18, e, n2.EQUAL);
  }
  s(hi, "drawMasked");
  function Vt(t18) {
    if (!t18.tex)
      throw new Error('drawTexture() requires property "tex".');
    let e = t18.quad ?? new z(0, 0, 1, 1), n2 = t18.tex.width * e.w, r = t18.tex.height * e.h, o = new E(1);
    if (t18.tiled) {
      let i = Ne(t18.anchor || mt), a2 = (t18.pos?.x || 0) - (i.x + 1) * 0.5 * (t18.width || n2), l = (t18.pos?.y || 0) - (i.y + 1) * 0.5 * (t18.height || r), u2 = (t18.width || n2) / n2, m = (t18.height || r) / r, d = Math.floor(u2), C = Math.floor(m), p = u2 - d, b = m - C, f = (d + p ? 1 : 0) * (C + b ? 1 : 0), O = new Array(f * 6), g = new Array(f * 4), y2 = 0, V = s((A, D, G, x, w) => {
        O[y2 * 6 + 0] = y2 * 4 + 0, O[y2 * 6 + 1] = y2 * 4 + 1, O[y2 * 6 + 2] = y2 * 4 + 3, O[y2 * 6 + 3] = y2 * 4 + 1, O[y2 * 6 + 4] = y2 * 4 + 2, O[y2 * 6 + 5] = y2 * 4 + 3, g[y2 * 4 + 0] = { pos: new E(A - i.x, D - i.y), uv: new E(w.x, w.y), color: t18.color || K.WHITE, opacity: t18.opacity || 1 }, g[y2 * 4 + 1] = { pos: new E(A + G - i.x, D - i.y), uv: new E(w.x + w.w, w.y), color: t18.color || K.WHITE, opacity: t18.opacity || 1 }, g[y2 * 4 + 2] = { pos: new E(A + G - i.x, D + x - i.y), uv: new E(w.x + w.w, w.y + w.h), color: t18.color || K.WHITE, opacity: t18.opacity || 1 }, g[y2 * 4 + 3] = { pos: new E(A - i.x, D + x - i.y), uv: new E(w.x, w.y + w.h), color: t18.color || K.WHITE, opacity: t18.opacity || 1 }, y2++;
      }, "addQuad");
      for (let A = 0; A < C; A++) {
        for (let D = 0; D < d; D++)
          V(D * n2, A * r, n2, r, e);
        p && V(d * n2, A * r, n2 * p, r, new z(e.x, e.y, e.w * p, e.h));
      }
      if (b) {
        for (let A = 0; A < d; A++)
          V(A * n2, C * r, n2, r * b, new z(e.x, e.y, e.w, e.h * b));
        p && V(d * n2, C * r, n2 * p, r * b, new z(e.x, e.y, e.w * p, e.h * b));
      }
      je(g, O, t18.fixed, t18.tex, t18.shader, t18.uniform ?? void 0);
    } else
      t18.width && t18.height ? (o.x = t18.width / n2, o.y = t18.height / r) : t18.width ? (o.x = t18.width / n2, o.y = o.x) : t18.height && (o.y = t18.height / r, o.x = o.y), it(Object.assign({}, t18, { scale: o.scale(t18.scale || new E(1)), tex: t18.tex, quad: e, width: n2, height: r }));
  }
  s(Vt, "drawTexture");
  function gi(t18) {
    if (!t18.sprite)
      throw new Error('drawSprite() requires property "sprite"');
    let e = It(t18.sprite);
    if (!e || !e.data)
      return;
    let n2 = e.data.frames[t18.frame ?? 0];
    if (!n2)
      throw new Error(`Frame not found: ${t18.frame ?? 0}`);
    Vt(Object.assign({}, t18, { tex: e.data.tex, quad: n2.scale(t18.quad ?? new z(0, 0, 1, 1)) }));
  }
  s(gi, "drawSprite");
  function bi(t18, e) {
    let n2 = c.gfx.ggl.gl;
    Qn(t18, e, n2.NOTEQUAL);
  }
  s(bi, "drawSubtracted");
  function Jr(t18) {
    qe(He(t18));
  }
  s(Jr, "drawText");
  var yi = s((t18, e) => {
    let n2 = qn(e, tn, nn), r = t18.pixelDensity ?? 1, o = t18.scale ?? 1, { gl: i } = e, a2 = Pe.fromImage(e, new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), l = t18.width && t18.height ? new st(e, t18.width * r * o, t18.height * r * o) : new st(e, i.drawingBufferWidth, i.drawingBufferHeight), u2 = null, m = 1;
    t18.background && (typeof t18.background == "string" ? u2 = I(t18.background) : (u2 = I(...t18.background), m = t18.background[3] ?? 1), i.clearColor(u2.r / 255, u2.g / 255, u2.b / 255, m ?? 1)), i.enable(i.BLEND), i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
    let d = new Wn(e, en, ss, is), C = Pe.fromImage(e, new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
    return { lastDrawCalls: 0, ggl: e, defShader: n2, defTex: a2, frameBuffer: l, postShader: null, postShaderUniform: null, renderer: d, transform: new he(), transformStack: [], bgTex: C, bgColor: u2, bgAlpha: m, width: t18.width ?? i.drawingBufferWidth / r / o, height: t18.height ?? i.drawingBufferHeight / r / o, viewport: { x: 0, y: 0, width: i.drawingBufferWidth, height: i.drawingBufferHeight }, fixed: false };
  }, "initAppGfx");
  function Jn() {
    let t18 = c.pixelDensity, e = c.gfx.ggl.gl.drawingBufferWidth / t18, n2 = c.gfx.ggl.gl.drawingBufferHeight / t18;
    if (c.globalOpt.letterbox) {
      if (!c.globalOpt.width || !c.globalOpt.height)
        throw new Error("Letterboxing requires width and height defined.");
      let r = e / n2, o = c.globalOpt.width / c.globalOpt.height;
      if (r > o) {
        let i = n2 * o, a2 = (e - i) / 2;
        c.gfx.viewport = { x: a2, y: 0, width: i, height: n2 };
      } else {
        let i = e / o, a2 = (n2 - i) / 2;
        c.gfx.viewport = { x: 0, y: a2, width: e, height: i };
      }
      return;
    }
    if (c.globalOpt.stretch && (!c.globalOpt.width || !c.globalOpt.height))
      throw new Error("Stretching requires width and height defined.");
    c.gfx.viewport = { x: 0, y: 0, width: e, height: n2 };
  }
  s(Jn, "updateViewport");
  function at(t18) {
    return t18.fixed ? true : t18.parent ? at(t18.parent) : false;
  }
  s(at, "isFixed");
  function Ke(t18) {
    return { color: t18.color, opacity: t18.opacity, anchor: t18.anchor, outline: t18.outline, shader: t18.shader, uniform: t18.uniform };
  }
  s(Ke, "getRenderProps");
  function xi(t18, e = {}) {
    return { id: "circle", radius: t18, draw() {
      Ue(Object.assign(Ke(this), { radius: this.radius, fill: e.fill }));
    }, renderArea() {
      return new $(new E(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
    }, inspect() {
      return `radius: ${Math.ceil(this.radius)}`;
    } };
  }
  s(xi, "circle");
  function Zn(...t18) {
    return { id: "color", color: I(...t18), inspect() {
      return `color: ${this.color.toString()}`;
    } };
  }
  s(Zn, "color");
  function vi(t18) {
    return { add() {
      this.canvas = t18;
    } };
  }
  s(vi, "drawon");
  function Ci(t18 = 1) {
    let e, n2 = 0, r = false;
    return { require: ["opacity"], add() {
      e = this.opacity, this.opacity = 0;
    }, update() {
      r || (n2 += te(), this.opacity = Ve(n2, 0, t18, 0, e), n2 >= t18 && (this.opacity = e, r = true));
    } };
  }
  s(Ci, "fadeIn");
  function wi(t18 = "intersect") {
    return { id: "mask", mask: t18 };
  }
  s(wi, "mask");
  function er(t18) {
    return { id: "opacity", opacity: t18 ?? 1, fadeIn(e = 1, n2 = c.k.easings.linear) {
      return c.game.root.tween(0, this.opacity, e, (r) => this.opacity = r, n2);
    }, fadeOut(e = 1, n2 = c.k.easings.linear) {
      return c.game.root.tween(this.opacity, 0, e, (r) => this.opacity = r, n2);
    }, inspect() {
      return `opacity: ${on(this.opacity, 1)}`;
    } };
  }
  s(er, "opacity");
  function Oi(t18 = 1, e = I(0, 0, 0), n2 = 1, r = "miter", o = 10, i = "butt") {
    return { id: "outline", outline: { width: t18, color: e, opacity: n2, join: r, miterLimit: o, cap: i }, inspect() {
      return `outline: ${this.outline.width}px, ${this.outline.color}`;
    } };
  }
  s(Oi, "outline");
  var Zr = class {
    static {
      s(this, "Particle");
    }
    pos = v(0);
    vel = v(0);
    acc = v(0);
    angle = 0;
    angularVelocity = 0;
    damping = 0;
    t;
    lt = null;
    gc;
    constructor() {
      this.t = 0, this.gc = true;
    }
    get progress() {
      return this.lt ? this.t / this.lt : this.t;
    }
  };
  function Ei(t18, e) {
    let n2 = e.lifetime, r = [], o = t18.colors || [K.WHITE], i = t18.opacities || [1], a2 = t18.quads || [new z(0, 0, 1, 1)], l = t18.scales || [1], u2 = t18.lifeTime, m = e.direction, d = e.spread, C = t18.speed || [0, 0], p = t18.angle || [0, 0], b = t18.angularVelocity || [0, 0], f = t18.acceleration || [v(0), v(0)], O = t18.damping || [0, 0], g = [], y2 = new Array(t18.max), V = 0, A = 0;
    for (let x = 0; x < t18.max; x++) {
      g[x * 6 + 0] = x * 4 + 0, g[x * 6 + 1] = x * 4 + 1, g[x * 6 + 2] = x * 4 + 3, g[x * 6 + 3] = x * 4 + 1, g[x * 6 + 4] = x * 4 + 2, g[x * 6 + 5] = x * 4 + 3;
      for (let w = 0; w < 4; w++)
        y2[x * 4 + w] = { pos: new E(0, 0), uv: new E(0, 0), color: I(255, 255, 255), opacity: 1 };
      r[x] = new Zr();
    }
    let D = new oe();
    function G(x = 0) {
      for (; x < t18.max; ) {
        if (r[x].gc)
          return x;
        x++;
      }
      return null;
    }
    return s(G, "nextFree"), { id: "particles", emit(x) {
      let w = 0;
      for (let S = 0; S < x; S++) {
        if (w = G(w), w == null)
          return;
        let M = ge(m - d, m + d), R = E.fromAngle(M).scale(ge(C[0], C[1])), F = ge(p[0], p[1]), j = ge(b[0], b[1]), H = v(ge(f[0].x, f[1].x), ge(f[0].y, f[1].y)), q = ge(O[0], O[1]), W = u2 ? ge(u2[0], u2[1]) : null, N = e.shape ? e.shape.random() : v(), k2 = r[w];
        k2.lt = W, k2.pos = N, k2.vel = R, k2.acc = H, k2.angle = F, k2.angularVelocity = j, k2.damping = q, k2.angularVelocity = j, k2.gc = false;
      }
      V += x;
    }, update() {
      if (n2 !== void 0 && n2 <= 0)
        return;
      let x = te();
      for (let w of r)
        if (!w.gc) {
          if (w.t += x, w.lt && w.t >= w.lt) {
            w.gc = true, V--;
            continue;
          }
          w.vel = w.vel.add(w.acc.scale(x)).scale(1 - w.damping * x), w.pos = w.pos.add(w.vel.scale(x)), w.angle += w.angularVelocity * x;
        }
      for (n2 !== void 0 && (n2 -= x, n2 <= 0 && D.trigger()), A += x; V < t18.max && e.rate && A > e.rate; )
        this.emit(1), V++, A -= e.rate;
    }, draw() {
      if (!(n2 !== void 0 && n2 <= 0)) {
        for (let x = 0; x < r.length; x++) {
          let w = r[x];
          if (w.gc)
            continue;
          let S = w.progress, M = Math.floor(w.progress * o.length), R = M < o.length - 1 ? fe(o[M], o[M + 1], Ve(S, M / o.length, (M + 1) / o.length, 0, 1)) : o[M], F = Math.floor(w.progress * i.length), j = F < i.length - 1 ? fe(i[F], i[F + 1], Ve(S, F / i.length, (F + 1) / i.length, 0, 1)) : i[F], H = Math.floor(w.progress * a2.length), q = a2[H], W = Math.floor(w.progress * l.length), N = l[W], k2 = Math.cos(w.angle * Math.PI / 180), Z = Math.sin(w.angle * Math.PI / 180), X = (t18.texture ? t18.texture.width : 10) * q.w / 2, ee = (t18.texture ? t18.texture.height : 10) * q.h / 2, Ee = x * 4, _ = y2[Ee];
          _.pos.x = w.pos.x + -X * N * k2 - -ee * N * Z, _.pos.y = w.pos.y + -X * N * Z + -ee * N * k2, _.uv.x = q.x, _.uv.y = q.y, _.color.r = R.r, _.color.g = R.g, _.color.b = R.b, _.opacity = j, _ = y2[Ee + 1], _.pos.x = w.pos.x + X * N * k2 - -ee * N * Z, _.pos.y = w.pos.y + X * N * Z + -ee * N * k2, _.uv.x = q.x + q.w, _.uv.y = q.y, _.color.r = R.r, _.color.g = R.g, _.color.b = R.b, _.opacity = j, _ = y2[Ee + 2], _.pos.x = w.pos.x + X * N * k2 - ee * N * Z, _.pos.y = w.pos.y + X * N * Z + ee * N * k2, _.uv.x = q.x + q.w, _.uv.y = q.y + q.h, _.color.r = R.r, _.color.g = R.g, _.color.b = R.b, _.opacity = j, _ = y2[Ee + 3], _.pos.x = w.pos.x + -X * N * k2 - ee * N * Z, _.pos.y = w.pos.y + -X * N * Z + ee * N * k2, _.uv.x = q.x, _.uv.y = q.y + q.h, _.color.r = R.r, _.color.g = R.g, _.color.b = R.b, _.opacity = j;
        }
        je(y2, g, this.fixed, t18.texture, this.shader, this.uniform);
      }
    }, onEnd(x) {
      return D.add(x);
    }, inspect() {
      return `count: ${V}/${t18.max}`;
    } };
  }
  s(Ei, "particles");
  function Ti(t18, e = {}) {
    if (t18.length < 3)
      throw new Error(`Polygon's need more than two points, ${t18.length} points provided`);
    return { id: "polygon", pts: t18, colors: e.colors, uv: e.uv, tex: e.tex, radius: e.radius, draw() {
      Ge(Object.assign(Ke(this), { pts: this.pts, colors: this.colors, uv: this.uv, tex: this.tex, radius: this.radius, fill: e.fill, triangulate: e.triangulate }));
    }, renderArea() {
      return new ye(this.pts);
    }, inspect() {
      return `polygon: ${this.pts.map((n2) => `[${n2.x},${n2.y}]`).join(",")}`;
    } };
  }
  s(Ti, "polygon");
  function tr(t18, e, n2) {
    let r;
    return c.game.root.get("area").forEach((i) => {
      if (n2 && n2.some((u2) => i.is(u2)))
        return;
      let l = i.worldArea().raycast(t18, e);
      l && (r ? l.fraction < r.fraction && (r = l, r.object = i) : (r = l, r.object = i));
    }), r;
  }
  s(tr, "raycast");
  function nr(t18, e, n2 = {}) {
    return { id: "rect", width: t18, height: e, radius: n2.radius || 0, draw() {
      ve(Object.assign(Ke(this), { width: this.width, height: this.height, radius: this.radius, fill: n2.fill }));
    }, renderArea() {
      return new $(v(0), this.width, this.height);
    }, inspect() {
      return `rect: (${Math.ceil(this.width)}w, ${Math.ceil(this.height)}h)`;
    } };
  }
  s(nr, "rect");
  function Ai(t18, e) {
    return { id: "shader", shader: t18, ...typeof e == "function" ? { uniform: e(), update() {
      this.uniform = e();
    } } : { uniform: e }, inspect() {
      return `shader: ${t18}`;
    } };
  }
  s(Ai, "shader");
  function Si(t18, e) {
    if (!e.tileWidth || !e.tileHeight)
      throw new Error("Must provide tileWidth and tileHeight.");
    let n2 = c.game.root.add([Pt(e.pos ?? v(0))]), r = t18.length, o = 0, i = null, a2 = null, l = null, u2 = null, m = s((x) => x.x + x.y * o, "tile2Hash"), d = s((x) => v(Math.floor(x % o), Math.floor(x / o)), "hash2Tile"), C = s(() => {
      i = [];
      for (let x of n2.children)
        p(x);
    }, "createSpatialMap"), p = s((x) => {
      let w = m(x.tilePos);
      i[w] ? i[w].push(x) : i[w] = [x];
    }, "insertIntoSpatialMap"), b = s((x) => {
      let w = m(x.tilePos);
      if (i[w]) {
        let S = i[w].indexOf(x);
        S >= 0 && i[w].splice(S, 1);
      }
    }, "removeFromSpatialMap"), f = s(() => {
      let x = false;
      for (let w of n2.children) {
        let S = n2.pos2Tile(w.pos);
        (w.tilePos.x != S.x || w.tilePos.y != S.y) && (x = true, b(w), w.tilePos.x = S.x, w.tilePos.y = S.y, p(w));
      }
      x && n2.trigger("spatialMapChanged");
    }, "updateSpatialMap"), O = s(() => {
      let x = n2.getSpatialMap(), w = n2.numRows() * n2.numColumns();
      a2 ? a2.length = w : a2 = new Array(w), a2.fill(1, 0, w);
      for (let S = 0; S < x.length; S++) {
        let M = x[S];
        if (M) {
          let R = 0;
          for (let F of M)
            if (F.isObstacle) {
              R = 1 / 0;
              break;
            } else
              R += F.cost;
          a2[S] = R || 1;
        }
      }
    }, "createCostMap"), g = s(() => {
      let x = n2.getSpatialMap(), w = n2.numRows() * n2.numColumns();
      l ? l.length = w : l = new Array(w), l.fill(15, 0, w);
      for (let S = 0; S < x.length; S++) {
        let M = x[S];
        if (M) {
          let R = M.length, F = 15;
          for (let j = 0; j < R; j++)
            F |= M[j].edgeMask;
          l[S] = F;
        }
      }
    }, "createEdgeMap"), y2 = s(() => {
      let x = n2.numRows() * n2.numColumns(), w = s((M, R) => {
        let F = [];
        for (F.push(M); F.length > 0; ) {
          let j = F.pop();
          D(j).forEach((H) => {
            u2[H] < 0 && (u2[H] = R, F.push(H));
          });
        }
      }, "traverse");
      u2 ? u2.length = x : u2 = new Array(x), u2.fill(-1, 0, x);
      let S = 0;
      for (let M = 0; M < a2.length; M++) {
        if (u2[M] >= 0) {
          S++;
          continue;
        }
        w(M, S), S++;
      }
    }, "createConnectivityMap"), V = s((x, w) => a2[w], "getCost"), A = s((x, w) => {
      let S = d(x), M = d(w);
      return S.dist(M);
    }, "getHeuristic"), D = s((x, w) => {
      let S = [], M = Math.floor(x % o), R = M > 0 && l[x] & 1 && a2[x - 1] !== 1 / 0, F = x >= o && l[x] & 2 && a2[x - o] !== 1 / 0, j = M < o - 1 && l[x] & 4 && a2[x + 1] !== 1 / 0, H = x < o * r - o - 1 && l[x] & 8 && a2[x + o] !== 1 / 0;
      return w ? (R && (F && S.push(x - o - 1), S.push(x - 1), H && S.push(x + o - 1)), F && S.push(x - o), j && (F && S.push(x - o + 1), S.push(x + 1), H && S.push(x + o + 1)), H && S.push(x + o)) : (R && S.push(x - 1), F && S.push(x - o), j && S.push(x + 1), H && S.push(x + o)), S;
    }, "getNeighbours"), G = { id: "level", tileWidth() {
      return e.tileWidth;
    }, tileHeight() {
      return e.tileHeight;
    }, spawn(x, ...w) {
      let S = v(...w), M = (() => {
        if (typeof x == "string") {
          if (e.tiles[x]) {
            if (typeof e.tiles[x] != "function")
              throw new Error("Level symbol def must be a function returning a component list");
            return e.tiles[x](S);
          } else if (e.wildcardTile)
            return e.wildcardTile(x, S);
        } else {
          if (Array.isArray(x))
            return x;
          throw new Error("Expected a symbol or a component list");
        }
      })();
      if (!M)
        return null;
      let R = false, F = false;
      for (let H of M)
        H.id === "tile" && (F = true), H.id === "pos" && (R = true);
      R || M.push(Pt(this.tile2Pos(S))), F || M.push(rr());
      let j = n2.add(M);
      return R && (j.tilePosOffset = j.pos.clone()), j.tilePos = S, j.transform = dt(j), i && (p(j), this.trigger("spatialMapChanged"), this.trigger("navigationMapInvalid")), j;
    }, numColumns() {
      return o;
    }, numRows() {
      return r;
    }, levelWidth() {
      return o * this.tileWidth();
    }, levelHeight() {
      return r * this.tileHeight();
    }, tile2Pos(...x) {
      return v(...x).scale(this.tileWidth(), this.tileHeight());
    }, pos2Tile(...x) {
      let w = v(...x);
      return v(Math.floor(w.x / this.tileWidth()), Math.floor(w.y / this.tileHeight()));
    }, getSpatialMap() {
      return i || C(), i;
    }, removeFromSpatialMap: b, insertIntoSpatialMap: p, onSpatialMapChanged(x) {
      return this.on("spatialMapChanged", x);
    }, onNavigationMapInvalid(x) {
      return this.on("navigationMapInvalid", x);
    }, getAt(x) {
      i || C();
      let w = m(x);
      return i[w] || [];
    }, raycast(x, w) {
      let S = this.toWorld(x), M = this.toWorld(x.add(w)).sub(S), R = 1 / this.tileWidth(), F = x.scale(R), j = Io(F, w, (H) => {
        let q = this.getAt(H);
        if (q.some((N) => N.isObstacle))
          return true;
        let W = null;
        for (let N of q)
          if (N.has("area")) {
            let Z = N.worldArea().raycast(S, M);
            Z && (W ? Z.fraction < W.fraction && (W = Z, W.object = N) : (W = Z, W.object = N));
          }
        return W && (W.point = this.fromWorld(W.point).scale(R)), W || false;
      }, 64);
      return j && (j.point = j.point.scale(this.tileWidth())), j;
    }, update() {
      i && f();
    }, invalidateNavigationMap() {
      a2 = null, l = null, u2 = null;
    }, onNavigationMapChanged(x) {
      return this.on("navigationMapChanged", x);
    }, getTilePath(x, w, S = {}) {
      if (a2 || O(), l || g(), u2 || y2(), x.x < 0 || x.x >= o || x.y < 0 || x.y >= r || w.x < 0 || w.x >= o || w.y < 0 || w.y >= r)
        return null;
      let M = m(x), R = m(w);
      if (a2[R] === 1 / 0)
        return null;
      if (M === R)
        return [];
      if (u2[M] != -1 && u2[M] !== u2[R])
        return null;
      let F = new Kt((k2, Z) => k2.cost < Z.cost);
      F.insert({ cost: 0, node: M });
      let j = /* @__PURE__ */ new Map();
      j.set(M, M);
      let H = /* @__PURE__ */ new Map();
      for (H.set(M, 0); F.length !== 0; ) {
        let k2 = F.remove()?.node;
        if (k2 === R)
          break;
        let Z = D(k2, S.allowDiagonals);
        for (let X of Z) {
          let ee = (H.get(k2) || 0) + V(k2, X) + A(X, R);
          (!H.has(X) || ee < H.get(X)) && (H.set(X, ee), F.insert({ cost: ee, node: X }), j.set(X, k2));
        }
      }
      let q = [], W = R, N = d(W);
      for (q.push(N); W !== M; ) {
        let k2 = j.get(W);
        if (k2 === void 0)
          throw new Error("Bug in pathfinding algorithm");
        W = k2;
        let Z = d(W);
        q.push(Z);
      }
      return q.reverse();
    }, getPath(x, w, S = {}) {
      let M = this.tileWidth(), R = this.tileHeight(), F = this.getTilePath(this.pos2Tile(x), this.pos2Tile(w), S);
      return F ? [x, ...F.slice(1, -1).map((j) => j.scale(M, R).add(M / 2, R / 2)), w] : null;
    } };
    return n2.use(G), n2.onNavigationMapInvalid(() => {
      n2.invalidateNavigationMap(), n2.trigger("navigationMapChanged");
    }), t18.forEach((x, w) => {
      let S = x.split("");
      o = Math.max(S.length, o), S.forEach((M, R) => {
        n2.spawn(M, v(R, w));
      });
    }), n2;
  }
  s(Si, "addLevel");
  function Me(t18, e, n2) {
    return c.game.objEvents.registers[t18] || (c.game.objEvents.registers[t18] = new rn()), c.game.objEvents.on(t18, (r, ...o) => {
      r.is(e) && n2(r, ...o);
    });
  }
  s(Me, "on");
  var Vi = s((t18, e, ...n2) => {
    for (let r of c.game.root.children)
      r.is(e) && r.trigger(t18);
  }, "trigger");
  var Pi = re((t18) => {
    let e = c.game.root.add([{ fixedUpdate: t18 }]);
    return { get paused() {
      return e.paused;
    }, set paused(n2) {
      e.paused = n2;
    }, cancel: s(() => e.destroy(), "cancel") };
  }, (t18, e) => Me("fixedUpdate", t18, e));
  var Gi = re((t18) => {
    let e = c.game.root.add([{ update: t18 }]);
    return { get paused() {
      return e.paused;
    }, set paused(n2) {
      e.paused = n2;
    }, cancel: s(() => e.destroy(), "cancel") };
  }, (t18, e) => Me("update", t18, e));
  var Mi = re((t18) => {
    let e = c.game.root.add([{ draw: t18 }]);
    return { get paused() {
      return e.hidden;
    }, set paused(n2) {
      e.hidden = n2;
    }, cancel: s(() => e.destroy(), "cancel") };
  }, (t18, e) => Me("draw", t18, e));
  var eo = re((t18) => c.game.events.on("add", t18), (t18, e) => Me("add", t18, e));
  var Ri = re((t18) => c.game.events.on("destroy", t18), (t18, e) => Me("destroy", t18, e));
  var Di = re((t18) => c.game.events.on("use", t18), (t18, e) => Me("use", t18, e));
  var Bi = re((t18) => c.game.events.on("unuse", t18), (t18, e) => Me("unuse", t18, e));
  var to = re((t18) => c.game.events.on("tag", t18), (t18, e) => Me("tag", t18, e));
  var Fi = re((t18) => c.game.events.on("untag", t18), (t18, e) => Me("untag", t18, e));
  function Li(t18, e, n2) {
    return Me("collide", t18, (r, o, i) => o.is(e) && n2(r, o, i));
  }
  s(Li, "onCollide");
  function ji(t18, e, n2) {
    return Me("collideUpdate", t18, (r, o, i) => o.is(e) && n2(r, o, i));
  }
  s(ji, "onCollideUpdate");
  function Ki(t18, e, n2) {
    return Me("collideEnd", t18, (r, o, i) => o.is(e) && n2(r, o, i));
  }
  s(Ki, "onCollideEnd");
  function or(t18, e) {
    c.game.root.get(t18, { recursive: true }).forEach(e), eo(t18, e), to((n2, r) => {
      r === t18 && e(n2);
    });
  }
  s(or, "forAllCurrentAndFuture");
  var Ii = re((t18) => c.app.onMousePress(t18), (t18, e) => {
    let n2 = [];
    return or(t18, (r) => {
      if (!r.area)
        throw new Error("onClick() requires the object to have area() component");
      n2.push(r.onClick(() => e(r)));
    }), _e.join(n2);
  });
  function ki(t18, e) {
    let n2 = [];
    return or(t18, (r) => {
      if (!r.area)
        throw new Error("onHover() requires the object to have area() component");
      n2.push(r.onHover(() => e(r)));
    }), _e.join(n2);
  }
  s(ki, "onHover");
  function _i(t18, e) {
    let n2 = [];
    return or(t18, (r) => {
      if (!r.area)
        throw new Error("onHoverUpdate() requires the object to have area() component");
      n2.push(r.onHoverUpdate(() => e(r)));
    }), _e.join(n2);
  }
  s(_i, "onHoverUpdate");
  function Ni(t18, e) {
    let n2 = [];
    return or(t18, (r) => {
      if (!r.area)
        throw new Error("onHoverEnd() requires the object to have area() component");
      n2.push(r.onHoverEnd(() => e(r)));
    }), _e.join(n2);
  }
  s(Ni, "onHoverEnd");
  function Ui(t18) {
    c.game.events.on("loading", t18);
  }
  s(Ui, "onLoading");
  function Hi(t18) {
    c.app.onResize(t18);
  }
  s(Hi, "onResize");
  function qi(t18) {
    c.game.events.on("error", t18);
  }
  s(qi, "onError");
  function Nt(t18) {
    c.assets.loaded ? t18() : c.game.events.on("load", t18);
  }
  s(Nt, "onLoad");
  function zi(t18) {
    if (c.assets.loaded)
      Un().forEach((e) => t18(...e));
    else
      return c.game.events.on("loadError", t18);
  }
  s(zi, "onLoadError");
  function no(...t18) {
    c.game.cam.pos = v(...t18);
  }
  s(no, "setCamPos");
  function ro() {
    return c.game.cam.pos ? c.game.cam.pos.clone() : wt();
  }
  s(ro, "getCamPos");
  function oo(...t18) {
    c.game.cam.scale = v(...t18);
  }
  s(oo, "setCamScale");
  function so() {
    return c.game.cam.scale.clone();
  }
  s(so, "getCamScale");
  function io(t18) {
    c.game.cam.angle = t18;
  }
  s(io, "setCamRot");
  function ao() {
    return c.game.cam.angle;
  }
  s(ao, "getCamRot");
  function Yi() {
    return c.game.cam.transform.clone();
  }
  s(Yi, "getCamTransform");
  function uo(t18 = I(255, 255, 255), e = 1) {
    let n2 = c.game.root.add([nr(ae(), ce()), Zn(t18), er(1), ar()]), r = n2.fadeOut(e);
    return r.onEnd(() => ir(n2)), r;
  }
  s(uo, "flash");
  function Wi() {
    return c.game.cam.transform.clone();
  }
  s(Wi, "camTransform");
  function $i(t18 = 12) {
    c.game.cam.shake += t18;
  }
  s($i, "shake");
  function dn(t18) {
    return c.game.cam.transform.multVec2(t18);
  }
  s(dn, "toScreen");
  function sr(t18) {
    return c.game.cam.transform.invert().multVec2(t18);
  }
  s(sr, "toWorld");
  function Xi(...t18) {
    return tt("camPos", "setCamPos / getCamPos"), t18.length > 0 && no(...t18), ro();
  }
  s(Xi, "camPos");
  function Qi(...t18) {
    return tt("camScale", "setCamScale / getCamScale"), t18.length > 0 && oo(...t18), so();
  }
  s(Qi, "camScale");
  function Ji(t18) {
    return tt("camRot", "setCamRot / getCamRot"), t18 !== void 0 && io(t18), ao();
  }
  s(Ji, "camRot");
  function Zi(t18 = I(255, 255, 255), e = 1) {
    return tt("camFlash", "flash"), uo(t18, e);
  }
  s(Zi, "camFlash");
  function fn(t18 = []) {
    let e = /* @__PURE__ */ new Map(), n2 = [], r = {}, o = new Ye(), i = [], a2 = new Set("*"), l = c.globalOpt.tagsAsComponents, u2 = null, m = false, d = { id: Es(), hidden: false, transform: new he(), children: [], parent: null, set paused(p) {
      if (p !== m) {
        m = p;
        for (let b of i)
          b.paused = p;
      }
    }, get paused() {
      return m;
    }, get tags() {
      return Array.from(a2);
    }, add(p) {
      let b = Array.isArray(p) ? fn(p) : p;
      if (b.parent)
        throw new Error("Cannot add a game obj that already has a parent.");
      return b.parent = this, b.transform = dt(b), this.children.push(b), b.trigger("add", b), c.game.events.trigger("add", b), b;
    }, readd(p) {
      let b = this.children.indexOf(p);
      return b !== -1 && (this.children.splice(b, 1), this.children.push(p)), p;
    }, remove(p) {
      let b = this.children.indexOf(p);
      if (b !== -1) {
        p.parent = null, this.children.splice(b, 1);
        let f = s((O) => {
          O.trigger("destroy"), c.game.events.trigger("destroy", O), O.children.forEach((g) => f(g));
        }, "trigger");
        f(p);
      }
    }, removeAll(p) {
      if (p)
        this.get(p).forEach((b) => this.remove(b));
      else
        for (let b of [...this.children])
          this.remove(b);
    }, fixedUpdate() {
      this.paused || (this.children.forEach((p) => p.fixedUpdate()), this.trigger("fixedUpdate"));
    }, update() {
      this.paused || (this.children.forEach((p) => p.update()), this.trigger("update"));
    }, draw() {
      if (this.hidden)
        return;
      this.canvas && (Oe(), this.canvas.bind());
      let p = c.gfx.fixed;
      this.fixed && (c.gfx.fixed = true), be(), Q(this.pos), rt(this.scale), $e(this.angle);
      let b = this.children.sort((f, O) => {
        let g = f.layerIndex ?? c.game.defaultLayerIndex, y2 = O.layerIndex ?? c.game.defaultLayerIndex;
        return g - y2 || (f.z ?? 0) - (O.z ?? 0);
      });
      if (this.mask) {
        let f = { intersect: c.k.drawMasked, subtract: c.k.drawSubtracted }[this.mask];
        if (!f)
          throw new Error(`Invalid mask func: "${this.mask}"`);
        f(() => {
          b.forEach((O) => O.draw());
        }, () => {
          this.trigger("draw");
        });
      } else
        this.trigger("draw"), b.forEach((f) => f.draw());
      pe(), c.gfx.fixed = p, this.canvas && (Oe(), this.canvas.unbind());
    }, drawInspect() {
      this.hidden || (be(), Q(this.pos), rt(this.scale), $e(this.angle), this.children.forEach((p) => p.drawInspect()), this.trigger("drawInspect"), pe());
    }, use(p) {
      if (typeof p == "string")
        return a2.add(p);
      if (!p || typeof p != "object")
        throw new Error(`You can only pass a component or a string to .use(), you passed a "${typeof p}"`);
      let b = [];
      p.id ? (this.unuse(p.id), r[p.id] = [], b = r[p.id], e.set(p.id, p), l && a2.add(p.id)) : n2.push(p);
      for (let O in p) {
        if (cs.has(O))
          continue;
        let g = Object.getOwnPropertyDescriptor(p, O);
        if (g)
          if (typeof g.value == "function" && (p[O] = p[O].bind(this)), g.set && Object.defineProperty(p, O, { set: g.set.bind(this) }), g.get && Object.defineProperty(p, O, { get: g.get.bind(this) }), ls.has(O)) {
            let y2 = O === "add" ? () => {
              u2 = s((V) => b.push(V), "onCurCompCleanup"), p[O]?.(), u2 = null;
            } : p[O];
            b.push(this.on(O, y2).cancel);
          } else if (this[O] === void 0)
            Object.defineProperty(this, O, { get: s(() => p[O], "get"), set: s((y2) => p[O] = y2, "set"), configurable: true, enumerable: true }), b.push(() => delete this[O]);
          else {
            let y2 = e.values().find((V) => V[O] !== void 0)?.id;
            throw new Error(`Duplicate component property: "${O}" while adding component "${p.id}"` + (y2 ? ` (originally added by "${y2}")` : ""));
          }
      }
      let f = s(() => {
        if (p.require) {
          for (let O of p.require)
            if (!this.c(O))
              throw new Error(`Component "${p.id}" requires component "${O}"`);
        }
      }, "checkDeps");
      p.destroy && b.push(p.destroy.bind(this)), this.exists() ? (f(), p.add && (u2 = s((O) => b.push(O), "onCurCompCleanup"), p.add.call(this), u2 = null), p.id && (this.trigger("use", p.id), c.game.events.trigger("use", this, p.id))) : p.require && b.push(this.on("add", f).cancel);
    }, unuse(p) {
      if (e.has(p)) {
        for (let b of e.values())
          if (b.require && b.require.includes(p))
            throw new Error(`Can't unuse. Component "${b.id}" requires component "${p}"`);
        e.delete(p), this.trigger("unuse", p), c.game.events.trigger("unuse", this, p);
      } else
        l && a2.has(p) && a2.delete(p);
      r[p] && (r[p].forEach((b) => b()), delete r[p]);
    }, c(p) {
      return e.get(p) ?? null;
    }, get(p, b = {}) {
      let f = s((g, y2) => b.only === "comps" ? g.has(y2) : b.only === "tags" ? g.is(y2) : g.is(y2) || g.has(y2), "checkTagsOrComps"), O = b.recursive ? this.children.flatMap(s(function g(y2) {
        return [y2, ...y2.children.flatMap(g)];
      }, "recurse")) : this.children;
      if (O = O.filter((g) => p ? f(g, p) : true), b.liveUpdate) {
        let g = s((V) => b.recursive ? this.isAncestorOf(V) : V.parent === this, "isChild"), y2 = [];
        y2.push(c.k.onAdd((V) => {
          g(V) && f(V, p) && O.push(V);
        })), y2.push(c.k.onDestroy((V) => {
          if (g(V) && f(V, p)) {
            let A = O.findIndex((D) => D.id === V.id);
            A !== -1 && O.splice(A, 1);
          }
        })), this.onDestroy(() => {
          for (let V of y2)
            V.cancel();
        });
      }
      return O;
    }, query(p) {
      let b = p.hierarchy || "children", f = p.include, O = p.exclude, g = [];
      switch (b) {
        case "children":
          g = this.children;
          break;
        case "siblings":
          g = this.parent ? this.parent.children.filter((V) => V !== this) : [];
          break;
        case "ancestors":
          let y2 = this.parent;
          for (; y2; )
            g.push(y2), y2 = y2.parent;
          break;
        case "descendants":
          g = this.children.flatMap(s(function V(A) {
            return [A, ...A.children.flatMap(V)];
          }, "recurse"));
          break;
      }
      if (f && ((p.includeOp || "and") === "and" || !Array.isArray(p.include) ? g = g.filter((V) => V.is(f)) : g = g.filter((V) => p.include.some((A) => V.is(A)))), O && ((p.includeOp || "and") === "and" || !Array.isArray(p.include) ? g = g.filter((V) => !V.is(O)) : g = g.filter((V) => !p.exclude.some((A) => V.is(A)))), p.visible === true && (g = g.filter((y2) => y2.visible)), p.distance) {
        if (!this.pos)
          throw Error("Can't do a distance query from an object without pos");
        let y2 = p.distanceOp || "near", V = p.distance * p.distance;
        y2 === "near" ? g = g.filter((A) => A.pos && this.pos.sdist(A.pos) <= V) : g = g.filter((A) => A.pos && this.pos.sdist(A.pos) > V);
      }
      return p.name && (g = g.filter((y2) => y2.name === p.name)), g;
    }, isAncestorOf(p) {
      return p.parent ? p.parent === this || this.isAncestorOf(p.parent) : false;
    }, exists() {
      return c.game.root.isAncestorOf(this);
    }, is(p, b = "and") {
      return Array.isArray(p) ? b === "and" ? p.every((f) => a2.has(f)) : p.some((f) => a2.has(f)) : a2.has(p);
    }, tag(p) {
      if (Array.isArray(p))
        for (let b of p)
          a2.add(b), this.trigger("tag", b), c.game.events.trigger("tag", this, b);
      else
        a2.add(p), this.trigger("tag", p), c.game.events.trigger("tag", this, p);
    }, untag(p) {
      if (Array.isArray(p))
        for (let b of p)
          a2.delete(b), this.trigger("untag", b), c.game.events.trigger("untag", this, b);
      else
        a2.delete(p), this.trigger("untag", p), c.game.events.trigger("untag", this, p);
    }, has(p, b = "and") {
      return Array.isArray(p) ? b === "and" ? p.every((f) => e.has(f)) : p.some((f) => e.has(f)) : e.has(p);
    }, on(p, b) {
      let f = o.on(p, b.bind(this));
      return u2 && u2(() => f.cancel()), f;
    }, trigger(p, ...b) {
      o.trigger(p, ...b), c.game.objEvents.trigger(p, this, ...b);
    }, destroy() {
      this.parent && this.parent.remove(this);
    }, inspect() {
      let p = {};
      for (let [b, f] of e)
        p[b] = f.inspect?.() ?? null;
      for (let [b, f] of n2.entries()) {
        if (f.inspect) {
          p[b] = f.inspect();
          continue;
        }
        for (let [O, g] of Object.entries(f))
          typeof g != "function" && (p[O] = `${O}: ${g}`);
      }
      return p;
    }, onAdd(p) {
      return this.on("add", p);
    }, onFixedUpdate(p) {
      return this.on("fixedUpdate", p);
    }, onUpdate(p) {
      return this.on("update", p);
    }, onDraw(p) {
      return this.on("draw", p);
    }, onDestroy(p) {
      return this.on("destroy", p);
    }, onUse(p) {
      return this.on("use", p);
    }, onUnuse(p) {
      return this.on("unuse", p);
    }, clearEvents() {
      o.clear();
    } }, C = ["onKeyPress", "onKeyPressRepeat", "onKeyDown", "onKeyRelease", "onMousePress", "onMouseDown", "onMouseRelease", "onMouseMove", "onCharInput", "onMouseMove", "onTouchStart", "onTouchMove", "onTouchEnd", "onScroll", "onGamepadButtonPress", "onGamepadButtonDown", "onGamepadButtonRelease", "onGamepadStick", "onButtonPress", "onButtonDown", "onButtonRelease"];
    for (let p of C)
      d[p] = (...b) => {
        let f = c.app[p]?.(...b);
        return i.push(f), d.onDestroy(() => f.cancel()), d.on("sceneEnter", () => {
          i.splice(i.indexOf(f), 1);
          let O = c.app[p]?.(...b);
          _e.replace(f, O), i.push(f);
        }), f;
      };
    for (let p of t18)
      d.use(p);
    return d;
  }
  s(fn, "make");
  var ea = s(() => ({ events: new Ye(), objEvents: new Ye(), root: fn([]), gravity: null, scenes: {}, currentScene: null, layers: null, defaultLayerIndex: 0, logs: [], cam: { pos: null, scale: new E(1), angle: 0, shake: 0, transform: new he() } }), "initGame");
  function ta(t18) {
    c.game.gravity = t18 ? (c.game.gravity || v(0, 1)).unit().scale(t18) : null;
  }
  s(ta, "setGravity");
  function na() {
    return c.game.gravity ? c.game.gravity.len() : 0;
  }
  s(na, "getGravity");
  function ra(t18) {
    c.game.gravity = t18.unit().scale(c.game.gravity ? c.game.gravity.len() : 1);
  }
  s(ra, "setGravityDirection");
  function ht() {
    return c.game.gravity ? c.game.gravity.unit() : v(0, 1);
  }
  s(ht, "getGravityDirection");
  var oa = Eo("//uUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAATAAAeAAANDQ0NDRoaGhoaKCgoKCg1NTU1NTVDQ0NDQ1BQUFBQXl5eXl5ra2tra2t5eXl5eYaGhoaGlJSUlJShoaGhoaGvr6+vr7y8vLy8ysrKysrX19fX19fl5eXl5fLy8vLy//////8AAAA5TEFNRTMuMTAwAaoAAAAAAAAAABSAJAOPhgAAgAAAHgBaqIlmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uUBAAP8h1kPIABR4BEDGeQAEbkSb2RAACBFMEyMiAAASJw4xjgwAGyRvfIoZT2QKGV5YNw/tKID9+X93qXtBQUFBQ/e+EFKTQUT/dy3f5dK/3d04rkXHpufCClDAaH7jDMgFAQEGfPt+jI352U9vU4GLRpzkUDeeeTQggQe2ggF3d7/3j697DnhCH5iGf38//iNj9oy2Jk71oj+CBAABGNB4RJNMwgCABCB//8//l////1z6XEGd73az07sOkwZD9VYgjzjmQ6j4EMfZM86OJ7GUWwvFw3ZPcdVEtczf9RNf6xMyxLjZZgjMQ7KDkLSU8g2E12UDUWrf//////9LdtFdeeqKwSitW9SJL59VM5pyUGiBNiK0jIGO0j7p3pUpWpaeqi1nTvqP3b43mGmM6HeXFjIlRwiFiIDQRRAGgkDQhxMMv//+f1//6XM/PfMvysJa3993MjDjhaRkrV3cRPXjGptDDGTHtFKUeMHU0K5STvVfMtVX/UXHctt1Z1//uUBB0AgnZkQAAgRTBMzIgAACiqCdB9E1QRgAFuIuGmhjABPZRJRCHi4etY2gcEYRwFw5KFBMMRV/////z6kX2ppnJszEzKbkZKEumm+pBRUDBg9IsgXGXrazn1QhmGjBrLVjT5Xvir0HT7d//HSZh18IZdji2N5JZgbA3DwQAahogSDqUhQuNtpJmBTwAGMY2QP3c/dy4EKsAABoXEJEFmlf/c4TgYtwcAbwfD4gOOoS1QIH7jDnNzYVe1x4mNFyD2jMVaaykjV29ePMARwXcUOgAFr+UjhVz4jhwMDFxPKgYs3cDFpohVgAAYAIO7u8eAAjRNA7hBFAwN3ACDvu7nETkLMrnyIj8v/9fNwhF9vKRfm82P5zPPmLV/WKs9G3d16n/v3rubEN0zgs7RdWrHne9brdv5bI4EwEAM6lj7aVdTKtXQHgLdzCKQ2kcihe4FyMcD1r3nR4TWxuax5EOZJEs3DEQnjyqyB8cSfrI6GEcoJxiHBDEfrTOFYrO1//uUBCgAA406ym5hgAB1R1ktzDwACxDBZzj0gAFhGrA3HoACypAXH9HY4umZan4ZlZKldajczMzMzOTnzMvnb77f/1IuSzHIbnJLJdapWmwUAQBXqWPtqV1OyqVqXhB9abR90OyKEsM51pIJK/nXplbDPtKz2dH+oVWeZSm8z7nvAZ19bneqhk3qeBhrhZiLbCc8sRnXb520RnPFd61/AgSR4f8CVlfWpD/////+N6/jv8v4f/6Ln///06c8YYcQIaGmAJ9VhMHEZYc9Kn0TOOYKv2cibDoZieAaGy4Cd6AfGkxQQr+agomAw+dC7AkjOxklIZEpUgmHxXP7/znl/4qT9Z/8+T2a0WF9/lvpv39if/KZnV6Gp1vQRmN1rYDAADfLGQxVR2d49LQLXdImm5n40smwjQ4aIYKMeKCOEw0OBV5cHA8cFV8mB5LyIIeksHspy79/iTv9SH+v66f2Wn/i+Lt//x9y//5MohgAAXiTCVBil4RUZ7XUvPRCD9Uc//uUBAoAAro3Wzc9AABXRutm56AACrUhc6eYT0FWpC508wnoO35hs9j6x7PQOB0PF0JWIkYwigNPoXUBA0cKA6JwDB7lRKDm/93r/mb6iEqL5lv3Vq//6YgYd1AgECi4xACCYbHyukYAAF4kwlQYpeEVGe11Lz0Qg/VHDt+YbPY+sez0DgdDxdCViJGMIoDT6F1AQNHCgOicAwe5USg5v/d6/5m+ohKi+Zb91av/+mIGHdQIBAouMQAgmGx8rptmoLKSACTuBBUPFsH6RlCz+UhoKeVfJy/eqOspBG4PScFOnOxYJJcf/nVzmyfR42Zwxy//hfSUrPq1SzFnO7q/SzNUzst+GQpnZ/kLwzVZ9xJ2lVa02zUFlJABJ3AgqHi2D9IyhZ/KQ0FPKvk5fvVHWUgjcHpOCnTnYsEkuP/zq5zZPo8bM4Y5f/wvpKVn1apZiznd1fpZmqZ2W/DIUzs/yF4Zqs+4k7SqtaYkWgEGMgppYQlMVdKcos2bWFZbFIJp//uUBAsAAr0wWe1hAABXpgs9rCAACwS5azj0gAFgly1nHpAAVgWmZa3LaUWCcGh5HgOEYkViyQUjrX+G5FUr5Dla1ZhtXDf7ckpazXwzeusqq+zXwUePSw8NYzlZKWfbyzod4dCRItAIMZBTSwhKYq6U5RZs2sKy2KQTSrAtMy1uW0osE4NDyPAcIxIrFkgpHWv8NyKpXyHK1qzDauG/25JS1mvhm9dZVV9mvgo8elh4axnKyUs+3lnQ7w6EkIEIIZFKlBSAGwRMrEIEuM658s5gvyVtFDrQtgTY2YSPlAJcgwlXLmokM8sUQJYJOm3eaW04jWVsoghX+ZBt3SHFZOypVez//VONpL+du6U+4WLXBC79cuhAhBDIpUoKQA2CJlYhAlxnXPlnMF+StoodaFsCbGzCR8oBLkGEq5c1EhnliiBLBJ027zS2nEaytlEEK/zINu6Q4rJ2VKr2f/6pxtJfzt3Sn3Cxa4IXfrl6IGEh4icUSUDRZk/k88VFEmCy//uUBAkAAociWgZh4ABQ5EtAzDwAC6zBXBmXgAF1mCuDMvAART7WmhWQ9QwYJexoKJ+z1bcQqfEFmtDtXH8lUg2omFi2b/4+UhW/j+bHgwAM8SqMAQFxYj9wqAwhlftf//sSQMJDxE4okoGizJ/J54qKJMFkin2tNCsh6hgwS9jQUT9nq24hU+ILNaHauP5KpBtRMLFs3/x8pCt/H82PBgAZ4lUYAgLixH7hUBhDK/a///YmHznKbibgJd0lEi0TfuHXCfhZ0faHA6GL3GuUpLTgTwnd/upcFAbo+BGMfzKxWE9PNg+sbrEwwRLn6uFElWTc/zN8Yvf5V3xV29///8OO/f7j3cT0mgMTPP9uPEwIQ+c5TcTcBLukokWib9w64T8LOj7Q4HQxe41ylJacCeE7v91LgoDdHwIxj+ZWKwnp5sH1jdYmGCJc/Vwokqybn+ZvjF7/Ku+Ku3v///hx37/ce7iek0BiZ5/tx4mBCmI5QXQAgigG+j0P8fdg2Xjs//uUBAiAAqwlWwY94ABVhKtgx7wACoilZ7z0AAFUlOz3noAAii2PkO1AMBYBIssJqQ5PtEdSQ2WE3xIF22b19axY89F5QQmWCwxJrf51h5mt74jRvBahCxQkS0MgJxY15ITjX3sb+vlGI5QXQAgigG+j0P8fdg2Xjsii2PkO1AMBYBIssJqQ5PtEdSQ2WE3xIF22b19axY89F5QQmWCwxJrf51h5mt74jRvBahCxQkS0MgJxY15ITjX3sb+vlEBsAgCSkHfwmFY/MMKQyg4tjhHeuR2mpSZWstSwEQAw00wZaogwgZL3PPVWw9vuB51zUXf3Df/ytV917DjxQEGA+0mbu4YYg4TnkRcMGQsxH/Ioc1AbAIAkpB38JhWPzDCkMoOLY4R3rkdpqUmVrLUsBEAMNNMGWqIMIGS9zz1VsPb7gedc1F39w3/8rVfdew48UQIFwus29HKDIAW8tcsSGAOKXK/jHmF1AkIAAC8ZUaEFwTHUylbannoarv7HwxH8//uUBAwEAtAx18sMQuBVJisaYSJeCmhnX6eZLQFZJy208wmidE7zXIRk0ZLYCqc1eg1sKc3HZuweFNeSCHHGg+JyhTcd8RE3/+rJXIdH6UpI2qUdVtHGRCOewEOXGUfKG2/v+RIoA0MAAAByh2gABL0EpLTwNTz0qzjM2ER8SF2lsSRLESGiqG5JXMCauo+aTB1GQKTyJd6SDnG6Iv8rkaoYeRihQbVGzJSSQ4sOghQh7vhkf+T0agMeCYAcAABBO40gsg/gOpfIiHoQgldEIGLVK9EaTFmFH9jkkvLA41VT/4q0XDJLUopJkJmWHAqZyRAPJOvBUS+NYSLC4FFjoJkUfGP/La3XNJCMJPep5CkIaRQCSTuM4ikUepPHAnZLEErtHuqs1EWDizBAvsdVeWBxqqn9aiS9FK24Z0KUhvVkY7ZbylKV/SrKiK0yrKqFkPe3/sZ//8xt6t2dajIDpFMRf6tSU9FIlJJKChTJIgq2hhZlrTlNcpaB/Xv5rDOU//uUBA2AAoQl1lVgwARQxLrKrBgAjCyVTrmngAGFkqnXNPAAg4ANdH9PKxIijn/xmvyjW2ZISnLe5yUtyv2ufSTfVJUGyoFiU6s6Crgyd2PEyn5Ul/85kUElPRSJSSSgoUySIKtoYWZa05TXKWgf17+awzlIOADXR/TxLEiKOf/GZ/KNbZkhKct7nJS3K/a59JN9UlQbKgWJTqzoKuDJ3Y8TKflSX/zmRQSCs10kCQCFAcBJCZCbl2c0bF5RBELfoQBmp3G2m3m3lgZoN0/BmhutukeGPbe/GtGj9jtiXNZdfDjIwYiYvnePS27ebO75y/Edksl4SONB/PlBrg6dNh8h+pW2//lktFhYcFZrpIEgEKA4CSEyE3Ls5o2LyiCIW/QgDNTuNtNvNvLAzQbp+DNDdbdI8Me29+NaNH7HbEuay6+HGRgxExfO8elt282d3zl+I7JZLwkcaD+fKDXB06bD5D9Stt//LJaLCw4AhAEAACKEywIJz0PRwTBn6tS2//uUBAmAAmUjVNdhAABMpGqa7CAACWiNUay8pYEtEao1l5SwsvqET9LUv/TIpAROYdsSHIoHxzccjRUPRZmVQnHLH7FYdB9rF8Q11yOCAKeHZHyIhMO///lWz0JPcAQgCAABFCZYEE56Ho4Jgz9WpbWX1CJ+lqX/pkUgInMO2JDkUD45uORoqHoszKoTjlj9isOg+1i+Ia65HBAFPDsj5EQmHf//yrZ6EnuACgcjEAKT2Dfl0wUuCCDwOHgDLjMYs6OLViO840e/fHfBZmadNu+NYYNVT84fPkYRCJ/K5V3vsq0Gh0H0YgBP+moubbodw+IHr/kgAoHIxACk9g35dMFLggg8Dh4Ay4zGLOji1YjvONHv3x3wWZmnTbvjWGDVU/OHz5GEQifyuVd77KtBodB9GIAT/pqLm26HcPiB6/5KAE6OeESRRgDMViF4jCI2bT5fbThs6iKGQfPTVaYtXdjMROEbiIqKlZk1KJAzpcWEnNs6FapfKXq1jerLEhaS//uUBB+BAmUqVWsMKrhMpUqtYYVXCTSlTzWSgAE0lKp2sFAAqcgRPyRHxKsBPAQVtIgCdHPCJIowBmKxC8RhEbNp8vtpw2dRFDIPnpqtMWruxmInCNxEVFSsyalEgZ0uLCTm2dCtUvlL1axvVliQtJVOQIn5Ij4lWAngIK2kQCHQhVnhkMD1BlLGveBt13z8bjbsI+MtfqdjdaAQiJFeBGV0AQFB2Qr8QDBc8iiATM25R8+fqp/Izn9CHGC7CEg5BTqd6jM4IBoADCiIYSTWAeAwKIoGBRr+EfZ3bjcbhhdDLX6nY3WgEIiRXgRloICoOyFfiA4+RRAJmbco+fP1U/kZz+hDjBdhCQcgp1O9QZnAQAbiCQAm485bonLdZ5NLqAAAEaPfiGAJsDpfUrAhC8wIZFkkEsiX6UBGvscp3FQfN5VNjWCnQ6AGqvk/UqZBbG3rpCt0gR7qtiNBxOfSeTupa6fMjXaMuYTclIn9ZIVayP2pYMiVUajtVYufukCu//uUBDWABAw9Uu5p4AKDx9qdzLwAiiyjShmngAFFlGlDNPAAm9bW7Vct6q61jNa/e6f/0cL33T31CoACacjUkabckdbjkoAAQ2Pe5fJoCshU+EXmCMRGkCbpN6UCNfKFHfcVB8kSOgSgDsuTAAtXyfqVMgtjb10hW6QI91XCQyZP85jl1K90+ZGuz5Ewl0gGT+skKsGAr0weA/JVRqO1Vi5+6QK6b1tbtFct6q61jNa+26fG/RwvfdPeIpm6BswQctcoCeIAYEYf1mWXRGbxQSwlUiCoY91ytUSo4mqDAgHrhQ3Y/4l2ptfeDG/xHfQXlda18S59aW+rZz8/Gtf7vXU0aFeJUKxkREA+tA5tnJGCDlrlATxADAjD+syy6IzeKCWEqkQVDHuuVqiVHE1QYEA9cKG7H/Eu1Nr7wY3+I76C8rrWviXPrS31bOfn41r/d66mjQrxKhWMiIgH1oHNs5Iw4nNwugqcGVUIoOnFryq5YBVMFyLPEAM4rxNXgSVW//uUBA+AAtkszwZtgABapZngzbAACxyZTzmkgAljkynnNJABzA8PYTFvx2VIR78NqPytscLolrRXGbLUv3rfHNp37BGU77n4xv9NNmu7larWfrk294JgJMNJQ9k6Z//3mHE5uF0FTgyqhFB04teVXLAKpguRZ4gBnFeJq8CSq2YHh7CYt+OypCPfhtR+VtjhdEtaK4zZal+9b45tO/YIynfc/GN/pps13crVaz9cm3vBMBJhpKLJ0z//vAA/m9Y8//8wALImAAl3wUQQSnfKuPXkDS5Ql5I8JfOufQG0twDlAxToCFKYarEoVqWFNJ6nNVd9fnX5/O72D/GEfeJf1TBIwjlyh7XHDg+dW/e///9oGG0YAH83rHn//mABZEwAEu+CiCCU75Vx68gaXKEvJHhL51z6A2luAcoGKdAQpTDVYlCtSwppPU5qrvr86/P53ewf4wj7xL+qYJGEcuUPa44cHzq373///tAw2joy5iMKijE5A82dFg4+liKoGBQF//uUBAmAAqobToZt4ABVI2nQzbwAClBrX7j0gBFKDWv3HpACuAcKpXhYKYZtV8OtethxIYxrF3onBiRVg0Z5VNJHjodV8sWdI031RiPzue4vQ9IA5zgUawg6s0J1ixM4H0rkVfR6DLmIwqKMTkDzZ0WDj6WIqgYFAW4BwqleFgphm1Xw6162HEhjGsXeicGJFWDRnlU2I8dDqvlizpGm+qMR+dz3F6HpAHOcCjWEHVmhOsWJnA+lcir6PQCI3I43G43HIxGIwIABFJObxBmwXEYYlhzHKcYl4ccyEKlyI6ONNnSpVx1pORjqKXEvGgpRqN/VI1tIQnEAogesbyZtJhhEj7rQutav+WB4ClRCCI3I43G43HIxGIwIABFJObxBmwXEYYlhzHKcYl4ccyEKlyI6ONNnSpVx1pORjqKXEvGgpRqN/VI1tIQnEAogesbyZtJhhEj7rQutav+WB4ClRDWAElxIBP/fgA5BRsQaBJEcORBgUrqXzDOmyQ7B8Js0//uUBA+AAnIbz+9swABNA3nq7ZgACYxbKSxpgQEzi6UljTAh0ph0igLRRPKosl/+21oMFkUfTMlPbu5vLWMhsIpBoJlEBWacSYwqxs0adkSycpqwAugFfb4AMMU0BUCAJUc6VBAkwaXzDlPhDsnkNmmlMVAKAOiieBJHkv/22tBkzUfXZJ+37zy1jILgmkGjpRAVmnCVjCrGzRozkSydWoAAhAKsACEHAmDZAyOJvjXlQsCbLAhfALBGnDuUyMsKxSWoyN41Ma1yzl81ldaycS4FmOc/HeG0F0EouNMvOJY8wRknQ2MHFgo50O9wABCAVYAEIOBMGyBkcTfGvKhYE2WBC+AWCNOHcpkZYViktRkbxqY1rlnL5rK61k4lwLMc5+Od4vceyz2aZfD2t6Yf1T8VpbBUmvyf/6WSCIaFJmBQHBBPnChjBCJpALOEZzWEOoXAjEVcJwU6QNMnCQemw5lYr1wP4Yrd7Kh813KsJITdZtDZdO/Nb/EeIEOq6mn9//uUBCMMglwayou4eTBKg1lRdw8mCRxbKCzswxEuGGWdow2oj0ziXaKZIIhoUmYFAcEE+cKGMEImkAs4RnNYQ6hcCMRVwnBTpA0ycJB6bDmVivXA/hit3sqHzXcqwkhN1m0Nl0781v8R4gQ3qup/2PTcl2geDKLS0Dlz62OeezARhAXGxQHQWEYYrFAT3TZw4FCwS4JDTF8AkaliQVaJoBk2ZlkiTQ2GgZmiQ1TzBSo+AA7JnYoKkVD1ZLuX4AtuEAwAFeAsHNMiPlXBIxSunQZU2GQTJoCe6bOHAoWCXBIaYvkUWljkvhpGS5mWFUrqaky+ZUivDyLT+PkTH9Nf5Jc8MPCT5LS5agFKBGvwAEGuOYUBgViPhKwULrvceUN2EYE5cfjEPVa76oYHc8iajBh079LyeBx+8xsatjP5+f/v9moz085O0y92c1/TLeIQBc5iarAMAtQBhIDsHMLAswKiDlZBMLgFd7jyhuwXBjO4/GIeq131ERQsohipJqEF//uUBDuAAl4rSc1swABNpWkWriAAT6S1N7msABH4Fqa3NYACK3Y2lxKnyqWlj4I9evjntWStpWltoH3a1c9wPfBQe51tv4QIRW5JWpHY2wmAQCAA3Ez8JQ0wQP/M2RNaIDhCYutAAONBBkAlvb4j4+qi40CU4Bh3bhxXygTVd/7vSq0iY6iSWWXrsXQ29eVJCqUsoXWy7X/vdWvP1JZg/tBEovFId////7rne699onXkM9DUl/+GAZBQDf8JEQCKo//+ogQCRyuRRuRthMAgEABkJp6CMpiBP+aMybcYnwznWkEqoAuaC5GfvF8HZFWg/FXSa8blglIwmKgd/7XpVaYZFGTZZe5DuQPushJSpXIpuwbX/vdWvL6kswcmPQFF4Ef3////LXO917pQHTyGedqP//DAMgoD3/CREAiqP/2eqv////////3dk90KlpVV3eUWVjHLZSMUp5hxnpOcO1WpXVXu4ijKYTSd3IJ7Kzt6Wp7FWiGQUEGFRgdCgpRM//uUBB8P8lRjwIcAoABJLFgQ4BQASJmNAgAFHEkIsiAAAaegRMowxhYVZBMOCoAh7/////////79CTkvIITTqZkZjVGEMPHvEBE7IZXMpGVFYqsKyOYw5jjmOZkFDdkZLkW+9NjEIZxbiYixXO5QkcoRVQoYBgYPlK+XmRGbwXaEFZGvWIpZLWEizxltQ9uELQV7E73d3HESrONG7w3dTdpF6Skf/zNT3I6rIKxJy1oKCtGGjj5FDxcKB+HpYd/3//i3rZFOT0N05+QpgWZYZ3pi5biJNCj4fRQQwYK8p48BQUTWPDTbNjkPn8+1VXKvJ7dJ5Gb2mESWLjnHOYNH07r6//////////icK81KXqTXuvQEteLGdY0DKwrjQVTIMKbgE0b41Egi1KxtuNwUpf9X+bNqTUlXbDClWgIlS4wMVc1F0QZc3/N/yto/7eUShjGUstRgIUZXKUrFYwU5SgKOxgYE+krfVkf6St/VpnMaYwpwoCjoZwoCZwqFC4LH//uUBD+P4jNjPwAjN8I7THfwAEnqR8mAugCAcQkHsheEERr40LUwj//hIzL//9k/9rJZ9lks+yyVDL/////81YHZUMj//yZZLHIy7/5qwMHHIyZZL/sslQyNWt/I1DBQYRxPYaxS/////5kn///6on0VEVP/6on/7OVFVO5QwUGEOzyhgaoqKhQwMGCUjt////8qaLdr/qTiyzLxaJxpRTt6RBhIhDZMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
  var sa = s(() => (() => {
    let e = new (window.AudioContext || window.webkitAudioContext)(), n2 = e.createGain();
    n2.connect(e.destination);
    let r = new ot(Ms(e));
    return e.decodeAudioData(oa.buffer.slice(0)).then((o) => {
      r.buf = o;
    }).catch((o) => {
      console.error("Failed to load burp: ", o);
    }), { ctx: e, masterNode: n2, burpSnd: r };
  })(), "initAudio");
  function ia(t18, e = {}) {
    let n2 = new oe(), r = new Audio(t18);
    r.crossOrigin = "anonymous", r.loop = !!e.loop, c.audio.ctx.createMediaElementSource(r).connect(c.audio.masterNode);
    function i() {
      c.debug.paused || c.app.isHidden() && !c.globalOpt.backgroundAudio || c.audio.ctx.resume();
    }
    s(i, "resumeAudioCtx");
    function a2() {
      i(), r.play();
    }
    return s(a2, "play"), e.paused || a2(), r.onended = () => n2.trigger(), { play() {
      a2();
    }, seek(l) {
      r.currentTime = l;
    }, stop() {
      r.pause(), this.seek(0);
    }, set loop(l) {
      r.loop = l;
    }, get loop() {
      return r.loop;
    }, set paused(l) {
      l ? r.pause() : a2();
    }, get paused() {
      return r.paused;
    }, time() {
      return r.currentTime;
    }, duration() {
      return r.duration;
    }, set volume(l) {
      r.volume = Se(l, 0, 1);
    }, get volume() {
      return r.volume;
    }, set speed(l) {
      r.playbackRate = Math.max(l, 0);
    }, get speed() {
      return r.playbackRate;
    }, set detune(l) {
    }, get detune() {
      return 0;
    }, onEnd(l) {
      return n2.add(l);
    }, then(l) {
      return this.onEnd(l);
    } };
  }
  s(ia, "playMusic");
  function aa(t18, e = {}) {
    if (typeof t18 == "string" && c.assets.music[t18])
      return ia(c.assets.music[t18], e);
    let n2 = c.audio.ctx, r = e.paused ?? false, o = n2.createBufferSource(), i = new oe(), a2 = n2.createGain(), l = n2.createStereoPanner(), u2 = e.seek ?? 0, m = 0, d = 0, C = false;
    o.loop = !!e.loop, o.detune.value = e.detune ?? 0, o.playbackRate.value = e.speed ?? 1, o.connect(l), o.onended = () => {
      f() >= (o.buffer?.duration ?? Number.POSITIVE_INFINITY) && i.trigger();
    }, l.pan.value = e.pan ?? 0, l.connect(a2), a2.connect(c.audio.masterNode), a2.gain.value = e.volume ?? 1;
    let p = s((g) => {
      o.buffer = g.buf, r || (m = n2.currentTime, o.start(0, u2), C = true);
    }, "start"), b = ri(t18);
    b instanceof le && b.onLoad(p);
    let f = s(() => {
      if (!o.buffer)
        return 0;
      let g = r ? d - m : n2.currentTime - m, y2 = o.buffer.duration;
      return o.loop ? g % y2 : Math.min(g, y2);
    }, "getTime"), O = s((g) => {
      let y2 = n2.createBufferSource();
      return y2.buffer = g.buffer, y2.loop = g.loop, y2.playbackRate.value = g.playbackRate.value, y2.detune.value = g.detune.value, y2.onended = g.onended, y2.connect(l), y2;
    }, "cloneNode");
    return { stop() {
      this.paused = true, this.seek(0);
    }, set paused(g) {
      if (r !== g)
        if (r = g, g)
          C && (o.stop(), C = false), d = n2.currentTime;
        else {
          o = O(o);
          let y2 = d - m;
          o.start(0, y2), C = true, m = n2.currentTime - y2, d = 0;
        }
    }, get paused() {
      return r;
    }, play(g = 0) {
      this.seek(g), this.paused = false;
    }, seek(g) {
      o.buffer?.duration && (g > o.buffer.duration || (r ? (o = O(o), m = d - g) : (o.stop(), o = O(o), m = n2.currentTime - g, o.start(0, g), C = true, d = 0)));
    }, set speed(g) {
      o.playbackRate.value = g;
    }, get speed() {
      return o.playbackRate.value;
    }, set detune(g) {
      o.detune.value = g;
    }, get detune() {
      return o.detune.value;
    }, set volume(g) {
      a2.gain.value = Math.max(g, 0);
    }, get volume() {
      return a2.gain.value;
    }, set pan(g) {
      l.pan.value = g;
    }, get pan() {
      return l.pan.value;
    }, set loop(g) {
      o.loop = g;
    }, get loop() {
      return o.loop;
    }, duration() {
      return o.buffer?.duration ?? 0;
    }, time() {
      return f() % this.duration();
    }, onEnd(g) {
      return i.add(g);
    }, then(g) {
      return this.onEnd(g);
    } };
  }
  s(aa, "play");
  function ur(t18) {
    return c.k.play(c.audio.burpSnd, t18);
  }
  s(ur, "burp");
  function co(t18) {
    c.audio.masterNode.gain.value = t18;
  }
  s(co, "setVolume");
  function lo() {
    return c.audio.masterNode.gain.value;
  }
  s(lo, "getVolume");
  function ua(t18) {
    return tt("volume", "setVolume / getVolume"), t18 !== void 0 && co(t18), lo();
  }
  s(ua, "volume");
  function cr() {
    c.app.onHide(() => {
      c.globalOpt.backgroundAudio || c.audio.ctx.suspend();
    }), c.app.onShow(() => {
      !c.globalOpt.backgroundAudio && !c.debug.paused && c.audio.ctx.resume();
    }), c.app.onResize(() => {
      if (c.app.isFullscreen())
        return;
      let t18 = c.globalOpt.width && c.globalOpt.height;
      t18 && !c.globalOpt.stretch && !c.globalOpt.letterbox || (c.canvas.width = c.canvas.offsetWidth * c.pixelDensity, c.canvas.height = c.canvas.offsetHeight * c.pixelDensity, Jn(), t18 || (c.gfx.frameBuffer.free(), c.gfx.frameBuffer = new st(c.gfx.ggl, c.gfx.ggl.gl.drawingBufferWidth, c.gfx.ggl.gl.drawingBufferHeight), c.gfx.width = c.gfx.ggl.gl.drawingBufferWidth / c.pixelDensity / c.gscale, c.gfx.height = c.gfx.ggl.gl.drawingBufferHeight / c.pixelDensity / c.gscale));
    }), c.globalOpt.debug !== false && (c.app.onKeyPress(c.globalOpt.debugKey ?? "f1", () => c.debug.inspect = !c.debug.inspect), c.app.onKeyPress("f2", () => c.debug.clearLog()), c.app.onKeyPress("f8", () => c.debug.paused = !c.debug.paused), c.app.onKeyPress("f7", () => {
      c.debug.timeScale = on(Se(c.debug.timeScale - 0.2, 0, 2), 1);
    }), c.app.onKeyPress("f9", () => {
      c.debug.timeScale = on(Se(c.debug.timeScale + 0.2, 0, 2), 1);
    }), c.app.onKeyPress("f10", () => c.debug.stepFrame())), c.globalOpt.burp && c.app.onKeyPress("b", () => ur());
  }
  s(cr, "initEvents");
  function ca(t18, e = {}) {
    let n2 = c.game.root.add([Pt(t18), lr()]), r = (e.speed || 1) * 5, o = e.scale || 1;
    n2.add([hn(c.boomSprite), Ut(0), gn("center"), mo(r, o), ...e.comps ?? []]);
    let i = n2.add([hn(c.kaSprite), Ut(0), gn("center"), bn(), ...e.comps ?? []]);
    return i.wait(0.4 / r, () => i.use(mo(r, o))), i.onDestroy(() => n2.destroy()), n2;
  }
  s(ca, "addKaboom");
  function po(t18, e) {
    if (c.game.layers)
      throw Error("Layers can only be assigned once.");
    let n2 = t18.indexOf(e);
    if (n2 == -1)
      throw Error("The default layer name should be present in the layers list.");
    c.game.layers = t18, c.game.defaultLayerIndex = n2;
  }
  s(po, "setLayers");
  function la() {
    return c.game.layers;
  }
  s(la, "getLayers");
  function ma() {
    return c.game.layers?.[c.game.defaultLayerIndex] ?? null;
  }
  s(ma, "getDefaultLayer");
  function pa(t18, e) {
    tt("layers", "setLayers"), po(t18, e);
  }
  s(pa, "layers");
  function ir(t18) {
    t18.destroy();
  }
  s(ir, "destroy");
  function da() {
    return c.game.root;
  }
  s(da, "getTreeRoot");
  function fa(t18, e) {
    c.game.scenes[t18] = e;
  }
  s(fa, "scene");
  function ha(t18, ...e) {
    if (!c.game.scenes[t18])
      throw new Error(`Scene not found: ${t18}`);
    c.game.events.onOnce("frameEnd", () => {
      c.game.events.trigger("sceneLeave", t18), c.app.events.clear(), c.game.events.clear(), c.game.objEvents.clear(), [...c.game.root.children].forEach((n2) => {
        !n2.stay || n2.scenesToStay && !n2.scenesToStay.includes(t18) ? c.game.root.remove(n2) : n2.trigger("sceneEnter", t18);
      }), c.game.root.clearEvents(), cr(), c.game.cam = { pos: null, scale: v(1), angle: 0, shake: 0, transform: new he() }, c.game.scenes[t18](...e);
    }), c.game.currentScene = t18;
  }
  s(ha, "go");
  function ga(t18) {
    return c.game.events.on("sceneLeave", t18);
  }
  s(ga, "onSceneLeave");
  function ba() {
    return c.game.currentScene;
  }
  s(ba, "getSceneName");
  function hn(t18, e = {}) {
    let n2 = null, r = null, o = null, i = new oe();
    if (!t18)
      throw new Error("Please pass the resource name or data to sprite()");
    let a2 = s((u2, m, d, C) => {
      let p = v(1, 1);
      return d && C ? (p.x = d / (u2.width * m.w), p.y = C / (u2.height * m.h)) : d ? (p.x = d / (u2.width * m.w), p.y = p.x) : C && (p.y = C / (u2.height * m.h), p.x = p.y), p;
    }, "calcTexScale"), l = s((u2, m) => {
      if (!m)
        return;
      let d = m.frames[0].clone();
      e.quad && (d = d.scale(e.quad));
      let C = a2(m.tex, d, e.width, e.height);
      u2.width = m.tex.width * d.w * C.x, u2.height = m.tex.height * d.h * C.y, e.anim && u2.play(e.anim), n2 = m, i.trigger(n2);
    }, "setSpriteData");
    return { id: "sprite", width: 0, height: 0, frame: e.frame || 0, quad: e.quad || new z(0, 0, 1, 1), animSpeed: e.animSpeed ?? 1, flipX: e.flipX ?? false, flipY: e.flipY ?? false, get sprite() {
      return t18.toString();
    }, set sprite(u2) {
      let m = It(u2);
      m && m.onLoad((d) => l(this, d));
    }, get animFrame() {
      if (!n2 || !r || o === null)
        return this.frame;
      let u2 = n2.anims[r.name];
      return typeof u2 == "number" ? u2 : this.frame - Math.min(u2.from, u2.to);
    }, draw() {
      if (!n2)
        return;
      let u2 = n2.frames[this.frame ?? 0];
      if (!u2)
        throw new Error(`Frame not found: ${this.frame ?? 0}`);
      if (n2.slice9) {
        let { left: m, right: d, top: C, bottom: p } = n2.slice9, b = n2.tex.width * u2.w, f = n2.tex.height * u2.h, O = this.width - m - d, g = this.height - C - p, y2 = m / b, V = d / b, A = 1 - y2 - V, D = C / f, G = p / f, x = 1 - D - G, w = [me(0, 0, y2, D), me(y2, 0, A, D), me(y2 + A, 0, V, D), me(0, D, y2, x), me(y2, D, A, x), me(y2 + A, D, V, x), me(0, D + x, y2, G), me(y2, D + x, A, G), me(y2 + A, D + x, V, G), me(0, 0, m, C), me(m, 0, O, C), me(m + O, 0, d, C), me(0, C, m, g), me(m, C, O, g), me(m + O, C, d, g), me(0, C + g, m, p), me(m, C + g, O, p), me(m + O, C + g, d, p)];
        for (let S = 0; S < 9; S++) {
          let M = w[S], R = w[S + 9];
          Vt(Object.assign(Ke(this), { pos: R.pos(), tex: n2.tex, quad: u2.scale(M), flipX: this.flipX, flipY: this.flipY, tiled: e.tiled, width: R.w, height: R.h }));
        }
      } else
        Vt(Object.assign(Ke(this), { tex: n2.tex, quad: u2.scale(this.quad ?? new z(0, 0, 1, 1)), flipX: this.flipX, flipY: this.flipY, tiled: e.tiled, width: this.width, height: this.height }));
    }, add() {
      let u2 = It(t18);
      u2 ? u2.onLoad((m) => l(this, m)) : Nt(() => l(this, It(t18).data));
    }, update() {
      if (!n2 || !r || o === null)
        return;
      let u2 = n2.anims[r.name];
      if (typeof u2 == "number") {
        this.frame = u2;
        return;
      }
      if (u2.speed === 0)
        throw new Error("Sprite anim speed cannot be 0");
      r.timer += te() * this.animSpeed, r.timer >= 1 / r.speed && (r.timer = 0, this.frame += o, (this.frame < Math.min(u2.from, u2.to) || this.frame > Math.max(u2.from, u2.to)) && (r.loop ? r.pingpong ? (this.frame -= o, o *= -1, this.frame += o) : this.frame = u2.from : r.pingpong ? o === Math.sign(u2.to - u2.from) ? (this.frame = u2.to, o *= -1, this.frame += o) : (this.frame = u2.from, r.onEnd(), this.stop()) : (this.frame = u2.to, r.onEnd(), this.stop())));
    }, play(u2, m = {}) {
      if (!n2) {
        i.add(() => this.play(u2, m));
        return;
      }
      let d = n2.anims[u2];
      if (d === void 0)
        throw new Error(`Anim not found: ${u2}`);
      r && this.stop(), r = typeof d == "number" ? { name: u2, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: s(() => {
      }, "onEnd") } : { name: u2, timer: 0, loop: m.loop ?? d.loop ?? false, pingpong: m.pingpong ?? d.pingpong ?? false, speed: m.speed ?? d.speed ?? 10, onEnd: m.onEnd ?? (() => {
      }) }, o = typeof d == "number" ? null : d.from < d.to ? 1 : -1, this.frame = typeof d == "number" ? d : d.from, this.trigger("animStart", u2);
    }, stop() {
      if (!r)
        return;
      let u2 = r.name;
      r = null, this.trigger("animEnd", u2);
    }, numFrames() {
      return n2?.frames.length ?? 0;
    }, getCurAnim() {
      return r;
    }, curAnim() {
      return r?.name;
    }, getAnim(u2) {
      return n2?.anims[u2] ?? null;
    }, hasAnim(u2) {
      return !!this.getAnim(u2);
    }, onAnimEnd(u2) {
      return this.on("animEnd", u2);
    }, onAnimStart(u2) {
      return this.on("animStart", u2);
    }, renderArea() {
      return new $(v(0), this.width, this.height);
    }, inspect() {
      return typeof t18 == "string" ? `sprite: "${t18}"` : null;
    } };
  }
  s(hn, "sprite");
  function ya(t18, e = {}) {
    function n2(o) {
      let i = He(Object.assign(Ke(o), { text: o.text + "", size: o.textSize, font: o.font, width: e.width && o.width, align: o.align, letterSpacing: o.letterSpacing, lineSpacing: o.lineSpacing, transform: o.textTransform, styles: o.textStyles, indentAll: e.indentAll }));
      return e.width || (o.width = i.width / (o.scale?.x || 1)), o.height = i.height / (o.scale?.y || 1), i;
    }
    s(n2, "update");
    let r = { id: "text", set text(o) {
      t18 = o, n2(this), this.renderedText = $n(t18).text;
    }, get text() {
      return t18;
    }, textSize: e.size ?? 36, font: e.font, width: e.width ?? 0, height: 0, align: e.align, lineSpacing: e.lineSpacing, letterSpacing: e.letterSpacing, textTransform: e.transform, textStyles: e.styles, renderedText: t18 ? $n(t18).text : "", add() {
      Nt(() => n2(this));
    }, draw() {
      qe(n2(this));
    }, renderArea() {
      return new $(v(0), this.width, this.height);
    } };
    return n2(r), r;
  }
  s(ya, "text");
  function xa(t18, e) {
    return { id: "rect", width: t18, height: e, draw() {
      it(Object.assign(Ke(this), { width: this.width, height: this.height }));
    }, renderArea() {
      return new $(v(0), this.width, this.height);
    }, inspect() {
      return `uvquad: (${Math.ceil(this.width)}w, ${Math.ceil(this.height)})h`;
    } };
  }
  s(xa, "uvquad");
  function va(t18 = {}) {
    let e = null, n2 = null, r = null, o = null;
    return { id: "agent", require: ["pos", "tile"], agentSpeed: t18.speed ?? 100, allowDiagonals: t18.allowDiagonals ?? true, getDistanceToTarget() {
      return e ? this.pos.dist(e) : 0;
    }, getNextLocation() {
      return n2 && r ? n2[r] : null;
    }, getPath() {
      return n2 ? n2.slice() : null;
    }, getTarget() {
      return e;
    }, isNavigationFinished() {
      return n2 ? r === null : true;
    }, isTargetReachable() {
      return n2 !== null;
    }, isTargetReached() {
      return e ? this.pos.eq(e) : true;
    }, setTarget(i) {
      e = i, n2 = this.getLevel().getPath(this.pos, e, { allowDiagonals: this.allowDiagonals }), r = n2 ? 0 : null, n2 && r !== null ? (o || (o = this.getLevel().onNavigationMapChanged(() => {
        e && n2 && r !== null && (n2 = this.getLevel().getPath(this.pos, e, { allowDiagonals: this.allowDiagonals }), n2 ? (r = 0, this.trigger("navigationNext", this, n2[r])) : (r = null, this.trigger("navigationEnded", this)));
      }), this.onDestroy(() => o?.cancel())), this.trigger("navigationStarted", this), this.trigger("navigationNext", this, n2[r])) : this.trigger("navigationEnded", this);
    }, update() {
      if (e && n2 && r !== null) {
        if (this.pos.sdist(n2[r]) < 2)
          if (r === n2.length - 1) {
            this.pos = e.clone(), r = null, this.trigger("navigationEnded", this), this.trigger("targetReached", this);
            return;
          } else
            r++, this.trigger("navigationNext", this, n2[r]);
        this.moveTo(n2[r], this.agentSpeed);
      }
    }, onNavigationStarted(i) {
      return this.on("navigationStarted", i);
    }, onNavigationNext(i) {
      return this.on("navigationNext", i);
    }, onNavigationEnded(i) {
      return this.on("navigationEnded", i);
    }, onTargetReached(i) {
      return this.on("targetReached", i);
    }, inspect() {
      return "agent: " + JSON.stringify({ target: JSON.stringify(e), path: JSON.stringify(n2) });
    } };
  }
  s(va, "agent");
  function Ca(t18) {
    let e = t18.graph;
    return { id: "pathfinder", require: ["pos"], navigateTo(n2) {
      return this.graph?.getWaypointPath(this.pos, n2, t18.navigationOpt);
    }, get graph() {
      if (e)
        return e;
      let n2 = this.parent;
      for (; n2; ) {
        if (n2.has("pathfinderMap"))
          return n2.graph;
        n2 = n2.parent;
      }
    }, set graph(n2) {
      e = n2;
    } };
  }
  s(Ca, "pathfinder");
  function wa(t18 = {}) {
    let e = t18.waypoints, n2 = t18.speed || 100, r = t18.endBehavior || "stop", o = 0, i = e != null;
    return { id: "patrol", require: ["pos"], get patrolSpeed() {
      return n2;
    }, set patrolSpeed(a2) {
      n2 = a2;
    }, get waypoints() {
      return e;
    }, set waypoints(a2) {
      e = a2, o = 0, i = false;
    }, get nextLocation() {
      return e ? e[o] : void 0;
    }, update() {
      let a2 = this.nextLocation;
      if (!(!e || !a2 || i) && (this.moveTo(a2, n2), this.pos.sdist(a2) < 9))
        switch (r) {
          case "loop":
            o = (o + 1) % e.length;
            break;
          case "ping-pong":
            o = o + 1, o == e.length && (e.reverse(), o = 0);
            break;
          case "stop":
            o = Math.min(o + 1, e.length - 1), o == e.length - 1 && (i = true, this.trigger("patrolFinished"));
            break;
        }
    }, onPatrolFinished(a2) {
      return this.on("patrolFinished", a2);
    } };
  }
  s(wa, "patrol");
  function Oa(t18, e = {}) {
    let n2 = typeof t18 == "function" ? t18 : () => c.game.root.query(t18), r = e.checkFrequency || 1, o = typeof e.direction == "number" ? E.fromAngle(e.direction) : e.direction, i = 0;
    return { id: "sentry", require: ["pos"], direction: typeof e.direction == "number" ? E.fromAngle(e.direction) : e.direction, spotted: [], set directionAngle(a2) {
      this.direction = a2 !== void 0 ? E.fromAngle(a2) : void 0;
    }, get directionAngle() {
      return this.direction ? this.direction.angle() : void 0;
    }, fieldOfView: e.fieldOfView || 200, isWithinFieldOfView(a2, l, u2) {
      let m = (typeof l == "number" ? E.fromAngle(l) : l) || o, d = u2 || e.fieldOfView;
      if (!m || !d || d >= 360)
        return true;
      let C = d / 2;
      return a2.pos && m.angleBetween(a2.pos.sub(this.pos)) <= C;
    }, hasLineOfSight(a2) {
      let l = tr(this.pos, a2.pos.sub(this.pos), e.raycastExclude);
      return l != null && l.object === a2;
    }, update() {
      if (i += te(), i > r) {
        i -= r;
        let a2 = n2();
        if (a2.length && o && this.fieldOfView && this.fieldOfView < 360) {
          let l = this.fieldOfView / 2;
          a2 = a2.filter((u2) => u2.pos && o.angleBetween(u2.pos.sub(this.pos)) <= l);
        }
        a2.length && e.lineOfSight && (a2 = a2.filter((l) => l.pos && this.hasLineOfSight(l))), a2.length > 0 && (this.spotted = a2, this.trigger("objectSpotted", a2));
      }
    }, onObjectsSpotted(a2) {
      return this.on("objectSpotted", a2);
    } };
  }
  s(Oa, "sentry");
  function rr(t18 = {}) {
    let e = v(0), n2 = t18.isObstacle ?? false, r = t18.cost ?? 0, o = t18.edges ?? [], i = s(() => {
      let l = { left: 1, top: 2, right: 4, bottom: 8 };
      return o.map((u2) => l[u2] || 0).reduce((u2, m) => u2 | m, 0);
    }, "getEdgeMask"), a2 = i();
    return { id: "tile", tilePosOffset: t18.offset ?? v(0), set tilePos(l) {
      let u2 = this.getLevel();
      e = l.clone(), this.pos = v(this.tilePos.x * u2.tileWidth(), this.tilePos.y * u2.tileHeight()).add(this.tilePosOffset);
    }, get tilePos() {
      return e;
    }, set isObstacle(l) {
      n2 !== l && (n2 = l, this.getLevel().invalidateNavigationMap());
    }, get isObstacle() {
      return n2;
    }, set cost(l) {
      r !== l && (r = l, this.getLevel().invalidateNavigationMap());
    }, get cost() {
      return r;
    }, set edges(l) {
      o = l, a2 = i(), this.getLevel().invalidateNavigationMap();
    }, get edges() {
      return o;
    }, get edgeMask() {
      return a2;
    }, getLevel() {
      return this.parent;
    }, tileMove(l) {
      let u2 = this.getLevel();
      u2.removeFromSpatialMap(this), this.tilePos = this.tilePos.add(l), u2.insertIntoSpatialMap(this), u2.trigger("spatialMapChanged");
    }, moveLeft() {
      this.tileMove(v(-1, 0));
    }, moveRight() {
      this.tileMove(v(1, 0));
    }, moveUp() {
      this.tileMove(v(0, -1));
    }, moveDown() {
      this.tileMove(v(0, 1));
    } };
  }
  s(rr, "tile");
  var yn = class {
    static {
      s(this, "AnimateChannel");
    }
    name;
    duration;
    loops;
    direction;
    easing;
    interpolation;
    isFinished;
    timing;
    easings;
    relative;
    constructor(e, n2, r) {
      this.name = e, this.duration = n2.duration, this.loops = n2.loops || 0, this.direction = n2.direction || "forward", this.easing = n2.easing || nt.linear, this.interpolation = n2.interpolation || "linear", this.isFinished = false, this.timing = n2.timing, this.easings = n2.easings, this.relative = r;
    }
    update(e, n2) {
      return true;
    }
    getLowerKeyIndexAndRelativeTime(e, n2, r) {
      let o = n2 - 1, i = e / this.duration;
      if (this.loops !== 0 && i >= this.loops)
        return [o, 0, true];
      let a2 = Math.trunc(i);
      if (i -= a2, (this.direction == "reverse" || this.direction == "ping-pong" && a2 & 1) && (i = 1 - i), r) {
        let l = 0;
        for (; r[l + 1] !== void 0 && r[l + 1] < i; )
          l++;
        return l >= o ? [o, 0, true] : [l, (i - r[l]) / (r[l + 1] - r[l]), false];
      } else {
        let l = Math.floor((n2 - 1) * i);
        return [l, (i - l / o) * o, false];
      }
    }
    setValue(e, n2, r) {
      if (this.relative)
        switch (n2) {
          case "pos":
            e.pos = e.base.pos.add(r);
            break;
          case "angle":
            e.angle = e.base.angle + r;
            break;
          case "scale":
            e.scale = e.base.scale.scale(r);
            break;
          case "opacity":
            e.opacity = e.base.opacity * r;
            break;
          default:
            e[n2] = r;
        }
      else
        e[n2] = r;
    }
    serialize() {
      let e = { duration: this.duration, keys: [] };
      return this.loops && (e.loops = this.loops), this.direction !== "forward" && (e.direction = this.direction), this.easing != nt.linear && (e.easing = this.easing.name), this.interpolation !== "linear" && (e.interpolation = this.interpolation), this.timing && (e.timing = this.timing), this.easings && (e.easings = this.easings.map((n2) => this.easing.name)), e;
    }
  };
  function Ea(t18, e) {
    return e.add(e.sub(t18));
  }
  s(Ea, "reflect");
  var fo = class extends yn {
    static {
      s(this, "AnimateChannelNumber");
    }
    keys;
    constructor(e, n2, r, o) {
      super(e, r, o), this.keys = n2;
    }
    update(e, n2) {
      let [r, o, i] = this.getLowerKeyIndexAndRelativeTime(n2, this.keys.length, this.timing);
      if (o == 0 || this.interpolation === "none")
        this.setValue(e, this.name, this.keys[r]);
      else {
        let a2 = this.easings ? this.easings[r] : this.easing;
        this.setValue(e, this.name, fe(this.keys[r], this.keys[r + 1], a2(o)));
      }
      return i;
    }
    serialize() {
      return Object.assign(super.serialize(), { keys: this.keys });
    }
  };
  var ho = class extends yn {
    static {
      s(this, "AnimateChannelVec2");
    }
    keys;
    curves;
    dcurves;
    constructor(e, n2, r, o, i) {
      if (super(e, r, o), this.keys = n2, this.interpolation === "spline") {
        this.curves = [], i && (this.dcurves = []);
        for (let a2 = 0; a2 < this.keys.length - 1; a2++) {
          let l = this.keys[a2], u2 = a2 + 1, m = this.keys[u2], d = a2 > 0 ? this.keys[a2 - 1] : Ea(m, l), C = u2 < this.keys.length - 1 ? this.keys[u2 + 1] : Ea(l, m);
          this.curves.push(jt(d, l, m, C)), i && this.dcurves?.push(jt(d, l, m, C, Xo));
        }
      }
    }
    update(e, n2) {
      let [r, o, i] = this.getLowerKeyIndexAndRelativeTime(n2, this.keys.length, this.timing);
      if (o == 0 || this.interpolation === "none")
        this.setValue(e, this.name, this.keys[r]);
      else {
        let a2 = this.easings ? this.easings[r] : this.easing;
        switch (this.interpolation) {
          case "linear":
            this.setValue(e, this.name, this.keys[r].lerp(this.keys[r + 1], a2(o)));
            break;
          case "slerp":
            this.setValue(e, this.name, this.keys[r].slerp(this.keys[r + 1], a2(o)));
            break;
          case "spline":
            if (this.curves) {
              this.setValue(e, this.name, this.curves[r](a2(o))), this.dcurves && this.setValue(e, "angle", this.dcurves[r](a2(o)).angle());
              break;
            }
        }
      }
      return i;
    }
    serialize() {
      return Object.assign(super.serialize(), { keys: this.keys.map((e) => [e.x, e.y]) });
    }
  };
  var go = class extends yn {
    static {
      s(this, "AnimateChannelColor");
    }
    keys;
    constructor(e, n2, r, o) {
      super(e, r, o), this.keys = n2;
    }
    update(e, n2) {
      let [r, o, i] = this.getLowerKeyIndexAndRelativeTime(n2, this.keys.length, this.timing);
      if (o == 0 || this.interpolation == "none")
        this.setValue(e, this.name, this.keys[r]);
      else {
        let a2 = this.easings ? this.easings[r] : this.easing;
        this.setValue(e, this.name, this.keys[r].lerp(this.keys[r + 1], a2(o)));
      }
      return i;
    }
    serialize() {
      return Object.assign(super.serialize(), { keys: this.keys });
    }
  };
  function Ta(t18 = {}) {
    let e = [], n2 = 0, r = false;
    return { id: "animate", require: t18.followMotion ? ["rotate"] : void 0, base: { pos: v(0, 0), angle: 0, scale: v(1, 1), opacity: 1 }, animation: { paused: false, seek(o) {
      n2 = Se(o, 0, this.duration), e.forEach((i) => {
        i.isFinished = false;
      }), r = false;
    }, get duration() {
      return e.reduce((o, i) => Math.max(i.duration, o), 0);
    } }, add() {
      t18.relative && (this.has("pos") && (this.base.pos = this.pos.clone()), this.has("rotate") && (this.base.angle = this.angle), this.has("scale") && (this.base.scale = this.scale), this.has("opacity") && (this.base.opacity = this.opacity));
    }, update() {
      if (this.animation.paused)
        return;
      let o = true, i;
      n2 += te();
      for (let a2 of e)
        i = a2.update(this, n2), i && !a2.isFinished && (a2.isFinished = true, this.trigger("animateChannelFinished", a2.name)), o &&= i;
      o && !r && (r = true, this.trigger("animateFinished"));
    }, animate(o, i, a2) {
      r = false, this.unanimate(o), typeof i[0] == "number" ? e.push(new fo(o, i, a2, t18.relative || false)) : i[0] instanceof E ? e.push(new ho(o, i, a2, t18.relative || false, o === "pos" && (t18.followMotion || false))) : i[0] instanceof K && e.push(new go(o, i, a2, t18.relative || false));
    }, unanimate(o) {
      let i = e.findIndex((a2) => a2.name === o);
      i >= 0 && e.splice(i, 1);
    }, unanimateAll() {
      e.splice(0, e.length);
    }, onAnimateFinished(o) {
      return this.on("animateFinished", o);
    }, onAnimateChannelFinished(o) {
      return this.on("animateChannelFinished", o);
    }, serializeAnimationChannels() {
      return e.reduce((o, i) => (o[i.name] = i.serialize(), o), {});
    }, serializeAnimationOptions() {
      let o = {};
      return t18.followMotion && (o.followMotion = true), t18.relative && (o.relative = true), o;
    } };
  }
  s(Ta, "animate");
  function bo(t18, e) {
    let n2 = { name: t18.name };
    return t18.has("animate") && (n2.channels = t18.serializeAnimationChannels(), Object.assign(n2, t18.serializeAnimationOptions())), t18.children.length > 0 && (n2.children = t18.children.filter((r) => r.has("named")).map((r) => bo(r, r.name))), n2;
  }
  s(bo, "serializeAnimation");
  function mo(t18 = 2, e = 1) {
    let n2 = 0;
    return { require: ["scale"], update() {
      let r = Math.sin(n2 * t18) * e;
      r < 0 && this.destroy(), this.scale = v(r), n2 += te();
    } };
  }
  s(mo, "boom");
  function Aa(t18, e) {
    if (t18 == null)
      throw new Error("health() requires the initial amount of hp");
    return { id: "health", hurt(n2 = 1) {
      this.setHP(t18 - n2), this.trigger("hurt", n2);
    }, heal(n2 = 1) {
      let r = t18;
      this.setHP(t18 + n2), this.trigger("heal", t18 - r);
    }, hp() {
      return t18;
    }, maxHP() {
      return e ?? null;
    }, setMaxHP(n2) {
      e = n2;
    }, setHP(n2) {
      t18 = e ? Math.min(e, n2) : n2, t18 <= 0 && this.trigger("death");
    }, onHurt(n2) {
      return this.on("hurt", n2);
    }, onHeal(n2) {
      return this.on("heal", n2);
    }, onDeath(n2) {
      return this.on("death", n2);
    }, inspect() {
      return `health: ${t18}`;
    } };
  }
  s(Aa, "health");
  function Sa(t18, e = {}) {
    if (t18 == null)
      throw new Error("lifespan() requires time");
    let n2 = e.fade ?? 0;
    return { id: "lifespan", require: ["opacity"], add() {
      c.game.root.wait(t18, () => {
        this.opacity = this.opacity ?? 1, n2 > 0 ? c.game.root.tween(this.opacity, 0, n2, (r) => this.opacity = r, nt.linear).onEnd(() => {
          this.destroy();
        }) : this.destroy();
      });
    } };
  }
  s(Sa, "lifespan");
  function Va(t18) {
    return { id: "named", name: t18 };
  }
  s(Va, "named");
  function Pa(t18, e, n2) {
    if (!t18)
      throw new Error("state() requires an initial state");
    let r = {};
    function o(u2) {
      r[u2] || (r[u2] = { enter: new oe(), end: new oe(), update: new oe(), draw: new oe() });
    }
    s(o, "initStateEvents");
    function i(u2, m, d) {
      return o(m), r[m][u2].add(d);
    }
    s(i, "on");
    function a2(u2, m, ...d) {
      o(m), r[m][u2].trigger(...d);
    }
    s(a2, "trigger");
    let l = false;
    return { id: "state", state: t18, enterState(u2, ...m) {
      if (l = true, e && !e.includes(u2))
        throw new Error(`State not found: ${u2}`);
      let d = this.state;
      if (n2) {
        if (!n2?.[d])
          return;
        let C = typeof n2[d] == "string" ? [n2[d]] : n2[d];
        if (!C.includes(u2))
          throw new Error(`Cannot transition state from "${d}" to "${u2}". Available transitions: ${C.map((p) => `"${p}"`).join(", ")}`);
      }
      a2("end", d, ...m), this.state = u2, a2("enter", u2, ...m), a2("enter", `${d} -> ${u2}`, ...m);
    }, onStateTransition(u2, m, d) {
      return i("enter", `${u2} -> ${m}`, d);
    }, onStateEnter(u2, m) {
      return i("enter", u2, m);
    }, onStateUpdate(u2, m) {
      return i("update", u2, m);
    }, onStateDraw(u2, m) {
      return i("draw", u2, m);
    }, onStateEnd(u2, m) {
      return i("end", u2, m);
    }, update() {
      l || (a2("enter", t18), l = true), a2("update", this.state);
    }, draw() {
      a2("draw", this.state);
    }, inspect() {
      return `state: ${this.state}`;
    } };
  }
  s(Pa, "state");
  function lr(t18) {
    return { id: "stay", stay: true, scenesToStay: t18 };
  }
  s(lr, "stay");
  function Ga(t18 = true, e) {
    let n2, r;
    return { id: "textInput", hasFocus: t18, require: ["text"], typedText: "", add() {
      let o = s(() => {
        this.text = this.typedText.replace(/([\[\\])/g, "\\$1");
      }, "flip");
      n2 = c.k.onCharInput((i) => {
        this.hasFocus && (!e || this.typedText.length < e) && (c.k.isKeyDown("shift") ? this.typedText += i.toUpperCase() : this.typedText += i, o());
      }), r = c.k.onKeyPressRepeat("backspace", () => {
        this.hasFocus && (this.typedText = this.typedText.slice(0, -1)), o();
      });
    }, destroy() {
      n2.cancel(), r.cancel();
    } };
  }
  s(Ga, "textInput");
  function bn(t18 = 1e3) {
    return { id: "timer", maxLoopsPerFrame: t18, loop(e, n2, r = -1, o = false) {
      let i = o ? 0 : e, a2 = new oe(), l = this.onUpdate(() => {
        i += c.app.state.dt;
        for (let u2 = 0; i >= e && u2 < this.maxLoopsPerFrame; u2++) {
          if (r != -1 && (r--, r < 0)) {
            l.cancel(), a2.trigger();
            return;
          }
          n2(), i -= e;
        }
      });
      return { get paused() {
        return l.paused;
      }, set paused(u2) {
        l.paused = u2;
      }, cancel: l.cancel, onEnd: a2.add, then(u2) {
        return a2.add(u2), this;
      } };
    }, wait(e, n2) {
      return this.loop(e, n2 ?? (() => {
      }), 1, true);
    }, tween(e, n2, r, o, i = nt.linear) {
      let a2 = 0, l = [], u2 = this.onUpdate(() => {
        a2 += c.app.state.dt;
        let m = Math.min(a2 / r, 1);
        o(fe(e, n2, i(m))), m === 1 && (u2.cancel(), o(n2), l.forEach((d) => d()));
      });
      return { get paused() {
        return u2.paused;
      }, set paused(m) {
        u2.paused = m;
      }, onEnd(m) {
        l.push(m);
      }, then(m) {
        return this.onEnd(m), this;
      }, cancel() {
        u2.cancel();
      }, finish() {
        u2.cancel(), o(n2), l.forEach((m) => m());
      } };
    } };
  }
  s(bn, "timer");
  var yo = 0;
  function Ma() {
    return yo > 0;
  }
  s(Ma, "usesArea");
  function Ra(t18 = {}) {
    let e = {}, n2 = /* @__PURE__ */ new Set(), r = [];
    return { id: "area", collisionIgnore: t18.collisionIgnore ?? [], add() {
      yo++, this.area.cursor && r.push(this.onHover(() => c.app.setCursor(this.area.cursor))), r.push(this.onCollideUpdate((o, i) => {
        if (!o.id)
          throw new Error("area() requires the object to have an id");
        e[o.id] || this.trigger("collide", o, i), i && (e[o.id] = i, n2.add(o.id));
      }));
    }, destroy() {
      yo--;
      for (let o of r)
        o.cancel();
    }, fixedUpdate() {
      for (let o in e)
        n2.has(Number(o)) || (this.trigger("collideEnd", e[o].target), delete e[o]);
      n2.clear();
    }, drawInspect() {
      let o = this.localArea();
      be(), Q(this.area.offset);
      let i = { outline: { width: 4 / _n(), color: I(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: at(this) };
      o instanceof $ ? ve({ ...i, pos: o.pos, width: o.width * this.area.scale.x, height: o.height * this.area.scale.y }) : o instanceof ye ? Ge({ ...i, pts: o.pts, scale: this.area.scale }) : o instanceof we && Ue({ ...i, pos: o.center, radius: o.radius }), pe();
    }, area: { shape: t18.shape ?? null, scale: t18.scale ? v(t18.scale) : v(1), offset: t18.offset ?? v(0), cursor: t18.cursor ?? null }, isClicked() {
      return c.app.isMousePressed() && this.isHovering();
    }, isHovering() {
      let o = at(this) ? c.k.mousePos() : c.k.toWorld(c.k.mousePos());
      return this.hasPoint(o);
    }, checkCollision(o) {
      if (!o.id)
        throw new Error("checkCollision() requires the object to have an id");
      return e[o.id] ?? null;
    }, getCollisions() {
      return Object.values(e);
    }, isColliding(o) {
      if (!o.id)
        throw new Error("isColliding() requires the object to have an id");
      return !!e[o.id];
    }, isOverlapping(o) {
      if (!o.id)
        throw new Error("isOverlapping() requires the object to have an id");
      let i = e[o.id];
      return i && i.hasOverlap();
    }, onClick(o, i = "left") {
      let a2 = c.app.onMousePress(i, () => {
        this.isHovering() && o();
      });
      return r.push(a2), a2;
    }, onHover(o) {
      let i = false;
      return this.onUpdate(() => {
        i ? i = this.isHovering() : this.isHovering() && (i = true, o());
      });
    }, onHoverUpdate(o) {
      return this.onUpdate(() => {
        this.isHovering() && o();
      });
    }, onHoverEnd(o) {
      let i = false;
      return this.onUpdate(() => {
        i ? this.isHovering() || (i = false, o()) : i = this.isHovering();
      });
    }, onCollide(o, i) {
      if (typeof o == "function" && i === void 0)
        return this.on("collide", o);
      if (typeof o == "string")
        return this.onCollide((a2, l) => {
          a2.is(o) && i?.(a2, l);
        });
      throw new Error("onCollide() requires either a function or a tag");
    }, onCollideUpdate(o, i) {
      if (typeof o == "function" && i === void 0)
        return this.on("collideUpdate", o);
      if (typeof o == "string")
        return this.on("collideUpdate", (a2, l) => a2.is(o) && i?.(a2, l));
      throw new Error("onCollideUpdate() requires either a function or a tag");
    }, onCollideEnd(o, i) {
      if (typeof o == "function" && i === void 0)
        return this.on("collideEnd", o);
      if (typeof o == "string")
        return this.on("collideEnd", (a2) => a2.is(o) && i?.(a2));
      throw new Error("onCollideEnd() requires either a function or a tag");
    }, hasPoint(o) {
      return et(this.worldArea(), o);
    }, resolveCollision(o) {
      let i = this.checkCollision(o);
      i && !i.resolved && (this.pos = this.pos.add(i.displacement), i.resolved = true);
    }, localArea() {
      return this.area.shape ? this.area.shape : this.renderArea();
    }, worldArea() {
      let o = this.localArea();
      if (!(o instanceof ye || o instanceof $))
        throw new Error("Only support polygon and rect shapes for now");
      let i = this.transform.clone().translate(this.area.offset).scale(v(this.area.scale ?? 1));
      if (o instanceof $) {
        let a2 = Ne(this.anchor || mt).add(1, 1).scale(-0.5).scale(o.width, o.height);
        i.translate(a2);
      }
      return o.transform(i);
    }, screenArea() {
      let o = this.worldArea();
      return at(this) ? o : o.transform(c.game.cam.transform);
    }, inspect() {
      return this.area.scale?.x == this.area.scale?.y ? `area: ${this.area.scale?.x?.toFixed(1)}x` : `area: (${this.area.scale?.x?.toFixed(1)}x, ${this.area.scale.y?.toFixed(1)}y)`;
    } };
  }
  s(Ra, "area");
  function Da(t18 = {}) {
    let e = null, n2 = null, r = false, o = v(0), i = null, a2 = null, l;
    return { id: "body", require: ["pos"], vel: v(0), drag: t18.drag ?? 0, jumpForce: t18.jumpForce ?? ps, gravityScale: t18.gravityScale ?? 1, isStatic: t18.isStatic ?? false, mass: t18.mass ?? 1, add() {
      if (i = this.pos.clone(), a2 = this.pos.clone(), l = this.pos.clone(), this.mass === 0)
        throw new Error("Can't set body mass to 0");
      this.has("area") && (this.onCollideUpdate((u2, m) => {
        if (!m || !u2.has("body") || m.resolved)
          return;
        this.trigger("beforePhysicsResolve", m);
        let d = m.reverse();
        if (u2.trigger("beforePhysicsResolve", d), !(m.resolved || d.resolved) && !(this.isStatic && u2.isStatic)) {
          if (!this.isStatic && !u2.isStatic) {
            let C = this.mass + u2.mass;
            this.pos = this.pos.add(m.displacement.scale(u2.mass / C)), u2.pos = u2.pos.add(m.displacement.scale(-this.mass / C)), this.transform = dt(this), u2.transform = dt(u2);
          } else {
            let C = !this.isStatic && u2.isStatic ? m : m.reverse();
            C.source.pos = C.source.pos.add(C.displacement), C.source.transform = dt(C.source);
          }
          m.resolved = true, this.trigger("physicsResolve", m), u2.trigger("physicsResolve", m.reverse());
        }
      }), this.onPhysicsResolve((u2) => {
        if (c.game.gravity)
          if (u2.isBottom() && this.isFalling()) {
            this.vel = this.vel.reject(c.game.gravity.unit());
            let m = e;
            e = u2.target, m != e && (n2 = u2.target.pos), r ? r = false : m || (this.trigger("ground", e), u2.target.trigger("land", this));
          } else
            u2.isTop() && this.isJumping() && (this.vel = this.vel.reject(c.game.gravity.unit()), this.trigger("headbutt", u2.target), u2.target.trigger("headbutted", this));
      }));
    }, update() {
      e && this.isColliding(e) && e.exists() && e.has("body") && (n2 && !e.pos.eq(n2) && t18.stickToPlatform !== false && this.moveBy(e.pos.sub(n2)), n2 = e.pos);
      let u2 = un();
      u2 && (this.pos.x == l.x && (this.pos.x = fe(i.x, a2.x, u2 / an()), l.x = this.pos.x), this.pos.y == l.y && (this.pos.y = fe(i.y, a2.y, u2 / an()), l.y = this.pos.y));
    }, fixedUpdate() {
      if (i && (this.pos.x == l.x && (this.pos.x = i.x), this.pos.y == l.y && (this.pos.y = i.y), i = null), c.game.gravity && !this.isStatic) {
        r && (e = null, n2 = null, this.trigger("fallOff"), r = false), e && (!this.isColliding(e) || !e.exists() || !e.has("body")) && (r = true);
        let m = this.vel.clone();
        this.vel = this.vel.add(c.game.gravity.scale(this.gravityScale * te()));
        let d = t18.maxVelocity ?? ds;
        this.vel.slen() > d * d && (this.vel = this.vel.unit().scale(d)), m.dot(c.game.gravity) < 0 && this.vel.dot(c.game.gravity) >= 0 && this.trigger("fall");
      }
      if (this.vel.x += o.x * te(), this.vel.y += o.y * te(), this.vel.x *= 1 - this.drag * te(), this.vel.y *= 1 - this.drag * te(), this.move(this.vel), un()) {
        i = this.pos.clone();
        let m = this.vel.add(o.scale(te()));
        a2 = this.pos.add(m.scale(te())), l = this.pos.clone();
      }
      o.x = 0, o.y = 0;
    }, onPhysicsResolve(u2) {
      return this.on("physicsResolve", u2);
    }, onBeforePhysicsResolve(u2) {
      return this.on("beforePhysicsResolve", u2);
    }, curPlatform() {
      return e;
    }, isGrounded() {
      return e !== null;
    }, isFalling() {
      return this.vel.dot(ht()) > 0;
    }, isJumping() {
      return this.vel.dot(ht()) < 0;
    }, applyImpulse(u2) {
      this.isStatic || (this.vel = this.vel.add(u2));
    }, addForce(u2) {
      this.isStatic || (o.x += u2.x / this.mass, o.y += u2.y / this.mass);
    }, jump(u2) {
      this.isStatic || (e = null, n2 = null, this.vel = ht().scale(-u2 || -this.jumpForce));
    }, onGround(u2) {
      return this.on("ground", u2);
    }, onFall(u2) {
      return this.on("fall", u2);
    }, onFallOff(u2) {
      return this.on("fallOff", u2);
    }, onHeadbutt(u2) {
      return this.on("headbutt", u2);
    }, onLand(u2) {
      return this.on("land", u2);
    }, onHeadbutted(u2) {
      return this.on("headbutted", u2);
    }, inspect() {
      return `gravityScale: ${this.gravityScale}x`;
    } };
  }
  s(Da, "body");
  function Ba(t18 = 2) {
    let e = t18;
    return { id: "doubleJump", require: ["body"], numJumps: t18, add() {
      this.onGround(() => {
        e = this.numJumps;
      });
    }, doubleJump(n2) {
      e <= 0 || (e < this.numJumps && this.trigger("doubleJump"), e--, this.jump(n2));
    }, onDoubleJump(n2) {
      return this.on("doubleJump", n2);
    }, inspect() {
      return `jumpsLeft: ${e}`;
    } };
  }
  s(Ba, "doubleJump");
  function Fa(t18) {
    return { id: "surfaceEffector", require: ["area"], speed: t18.speed, speedVariation: t18.speedVariation ?? 0, forceScale: t18.speedVariation ?? 0.9, add() {
      this.onCollideUpdate("body", (e, n2) => {
        let r = n2?.normal.normal(), o = e.vel.project(r), a2 = r?.scale(this.speed)?.sub(o);
        e.addForce(a2?.scale(e.mass * this.forceScale));
      });
    } };
  }
  s(Fa, "surfaceEffector");
  function La(t18) {
    return { id: "areaEffector", require: ["area"], useGlobalAngle: t18.useGlobalAngle || false, forceAngle: t18.forceAngle, forceMagnitude: t18.forceMagnitude, forceVariation: t18.forceVariation ?? 0, linearDrag: t18.linearDrag ?? 0, add() {
      this.onCollideUpdate("body", (e, n2) => {
        if (!e.has("body"))
          return;
        let o = E.fromAngle(this.forceAngle).scale(this.forceMagnitude);
        e.addForce(o), this.linearDrag && e.addForce(e.vel.scale(-this.linearDrag));
      });
    } };
  }
  s(La, "areaEffector");
  function ja(t18) {
    return { id: "pointEffector", require: ["area", "pos"], forceMagnitude: t18.forceMagnitude, forceVariation: t18.forceVariation ?? 0, distanceScale: t18.distanceScale ?? 1, forceMode: t18.forceMode || "inverseLinear", linearDrag: t18.linearDrag ?? 0, add() {
      this.onCollideUpdate("body", (e, n2) => {
        let r = this.pos.sub(e.pos), o = r.len(), i = o * this.distanceScale / 10, a2 = this.forceMode === "constant" ? 1 : this.forceMode === "inverseLinear" ? 1 / i : 1 / i ** 2, l = r.scale(this.forceMagnitude * a2 / o);
        e.addForce(l), this.linearDrag && e.addForce(e.vel.scale(-this.linearDrag));
      });
    } };
  }
  s(ja, "pointEffector");
  function Ka(t18) {
    return { id: "constantForce", require: ["body"], force: t18.force, update() {
      this.force && this.addForce(this.force);
    } };
  }
  s(Ka, "constantForce");
  function Ia(t18) {
    return { id: "platformEffector", require: ["area", "body"], surfaceArc: t18.surfaceArc ?? 180, useOneWay: t18.useOneWay ?? false, add() {
      this.onBeforePhysicsResolve((e) => {
        let n2 = e.target.vel, o = ht().scale(-1).angleBetween(n2);
        Math.abs(o) > this.surfaceArc / 2 && e.preventResolution();
      });
    } };
  }
  s(Ia, "platformEffector");
  function ka(t18) {
    return { id: "buoyancyEffector", require: ["area"], surfaceLevel: t18.surfaceLevel, density: t18.density ?? 1, linearDrag: t18.linearDrag ?? 1, angularDrag: t18.angularDrag ?? 0.2, flowAngle: t18.flowAngle ?? 0, flowMagnitude: t18.flowMagnitude ?? 0, flowVariation: t18.flowVariation ?? 0, add() {
      this.onCollideUpdate("body", (e, n2) => {
        let r = e, o = r.worldArea(), [i, a2] = o.cut(v(-100, this.surfaceLevel), v(100, this.surfaceLevel));
        i && (this.applyBuoyancy(r, i), this.applyDrag(r, i)), this.flowMagnitude && r.addForce(E.fromAngle(this.flowAngle).scale(this.flowMagnitude));
      });
    }, applyBuoyancy(e, n2) {
      let r = this.density * n2.area(), o = v(0, 1).scale(-r);
      e.addForce(o);
    }, applyDrag(e, n2) {
      let r = e.vel, o = this.density * this.linearDrag, i = r.scale(-o);
      e.addForce(i);
    } };
  }
  s(ka, "buoyancyEffector");
  function gn(t18) {
    if (!t18)
      throw new Error("Please define an anchor");
    return { id: "anchor", anchor: t18, inspect() {
      return typeof this.anchor == "string" ? "anchor: " + this.anchor : "anchor: " + this.anchor.toString();
    } };
  }
  s(gn, "anchor");
  function ar() {
    return { id: "fixed", fixed: true };
  }
  s(ar, "fixed");
  function _a(t18, e) {
    return { id: "follow", require: ["pos"], follow: { obj: t18, offset: e ?? v(0) }, add() {
      t18.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
    }, update() {
      t18.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
    } };
  }
  s(_a, "follow");
  function Na(t18) {
    let e = c.game.layers?.indexOf(t18);
    return { id: "layer", get layerIndex() {
      return e ?? null;
    }, get layer() {
      return e ? c.game.layers?.[e] ?? null : null;
    }, set layer(n2) {
      if (e = c.game.layers?.indexOf(n2), e == -1)
        throw Error("Invalid layer name");
    }, inspect() {
      return `layer: ${this.layer}`;
    } };
  }
  s(Na, "layer");
  function Ua(t18, e) {
    let n2 = typeof t18 == "number" ? E.fromAngle(t18) : t18.unit();
    return { id: "move", require: ["pos"], update() {
      this.move(n2.scale(e));
    } };
  }
  s(Ua, "move");
  function Ha(t18 = {}) {
    let e = t18.distance ?? ms, n2 = false;
    return { id: "offscreen", require: ["pos"], isOffScreen() {
      let r = this.screenPos();
      if (!r)
        return false;
      let o = new $(v(0), ae(), ce());
      return !Bt(o, r) && o.sdistToPoint(r) > e * e;
    }, onExitScreen(r) {
      return this.on("exitView", r);
    }, onEnterScreen(r) {
      return this.on("enterView", r);
    }, update() {
      this.isOffScreen() ? (n2 || (this.trigger("exitView"), n2 = true), t18.hide && (this.hidden = true), t18.pause && (this.paused = true), t18.destroy && this.destroy()) : (n2 && (this.trigger("enterView"), n2 = false), t18.hide && (this.hidden = false), t18.pause && (this.paused = false));
    } };
  }
  s(Ha, "offscreen");
  function Pt(...t18) {
    return { id: "pos", pos: v(...t18), moveBy(...e) {
      this.pos = this.pos.add(v(...e));
    }, move(...e) {
      this.moveBy(v(...e).scale(te()));
    }, moveTo(...e) {
      if (typeof e[0] == "number" && typeof e[1] == "number")
        return this.moveTo(v(e[0], e[1]), e[2]);
      let n2 = e[0], r = e[1];
      if (r === void 0) {
        this.pos = v(n2);
        return;
      }
      let o = n2.sub(this.pos);
      if (o.len() <= r * te()) {
        this.pos = v(n2);
        return;
      }
      this.move(o.unit().scale(r));
    }, worldPos(e = null) {
      return e ? (this.pos = this.pos.add(this.fromWorld(e)), null) : this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
    }, toWorld(e) {
      return this.parent ? this.parent.transform.multVec2(this.pos.add(e)) : this.pos.add(e);
    }, fromWorld(e) {
      return this.parent ? this.parent.transform.invert().multVec2(e).sub(this.pos) : e.sub(this.pos);
    }, screenPos(e = null) {
      if (e)
        return this.pos = this.pos.add(this.fromScreen(e)), null;
      {
        let n2 = this.worldPos();
        return n2 ? at(this) ? n2 : dn(n2) : null;
      }
    }, toScreen(e) {
      let n2 = this.toWorld(e);
      return at(this) ? n2 : dn(n2);
    }, fromScreen(e) {
      return at(this) ? this.fromWorld(e) : this.fromWorld(sr(e));
    }, toOther(e, n2) {
      return e.fromWorld(this.toWorld(n2));
    }, fromOther(e, n2) {
      return e.toOther(this, n2);
    }, inspect() {
      return `pos: (${Math.round(this.pos.x)}x, ${Math.round(this.pos.y)}y)`;
    }, drawInspect() {
      Ue({ color: I(255, 0, 0), radius: 4 / _n() });
    } };
  }
  s(Pt, "pos");
  function qa(t18) {
    return { id: "rotate", angle: t18 ?? 0, rotateBy(e) {
      this.angle += e;
    }, rotateTo(e) {
      this.angle = e;
    }, inspect() {
      return `angle: ${Math.round(this.angle)}`;
    } };
  }
  s(qa, "rotate");
  function Ut(...t18) {
    if (t18.length === 0)
      return Ut(1);
    let e = v(...t18);
    return { id: "scale", set scale(n2) {
      if (!(n2 instanceof E))
        throw Error("The scale property on scale is a vector. Use scaleTo or scaleBy to set the scale with a number.");
      e = v(n2);
    }, get scale() {
      return e;
    }, scaleTo(...n2) {
      e = v(...n2);
    }, scaleBy(...n2) {
      e = e.scale(v(...n2));
    }, inspect() {
      return e.x == e.y ? `scale: ${e.x.toFixed(1)}x` : `scale: (${e.x.toFixed(1)}x, ${e.y.toFixed(1)}y)`;
    } };
  }
  s(Ut, "scale");
  function za(t18) {
    return { id: "z", z: t18, inspect() {
      return `z: ${this.z}`;
    } };
  }
  s(za, "z");
  var Ya = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABqxJREFUeJztnU1yFDkQRtMEB+AG7Fk6fBPO6ZsQLGc/N5gbMAtosJvqKv2kpPxS763A0W5XSXqVqZ+SngzgF58/fflx/7N///vnacW1gBkFD2Z2LOYNBF3Dx9UXAGs5kxLWwhNxU2qlJHrOhwLfkNZoiaBzIa3dCFJYLXgSboKXmETPeVDQyamR8vX55fe/v37/9vBzCDoH0tqktEpZ+t0IOh4KOBm16euZmETPtVDAiRgRLRF0HRRuEkrFrE1hzR4Lipxj+bD6AqCPz5++/Bgp5tXfdv1CeAdPPmFmSkn0nE+a0drdFm6XiOkdKWEuKRptTXqlLuqqFNaM6Dkb+T5nbb+npo8WjZVinqFantFJk9bWojaRThq7HzKN8wiPJ7aCoJHEZN5zHvJp7RE1DTV6SnZ1fa/PL1MjJtF5HmnT2tJF3GZ/BIj05I8ULUtR6ypER7ogjxpw61rRGxEal4KYjNyORzatbUlHSxr06tFcBTHPiN5NUEJWzlZKG/aKRqYk5tl1IKgPafucZ7w+vxSluLP6olHnL6MQQfYV6bpk/+BRZXm+cXHEiApSipZHlE6tRBDMkxmyysl5VsmtjXiFoJmiZU35ZWK0oNv1OY+omSv0GDDKJCaMI42cHg25dvFCi6QZxVS6ViVSpLUz38A4oiS9ySjlW2althGWKZrN6XNuOVpbwq0ReIzqZhfTrHwE/PZZuEYqcnqO0tZQGxVqRylprLGIEDXNkLOKEakbYsYiiphmiQaEZuD9BghixiKSmGYJIueqBt4TRZEyHtHENCNyNtMaRREzHhHFNBOKnKv7myVcVXKka4WfRBXTjMjpypl8iBmP6MsOmed0Bgk1UHjxXlpORIAWIqeybyGtha1QEdNMRM5s7wLCGpTENBORE6AXNTHNkBM2QFFMM4F5ToX5TYiLqphmRE7YmMhimiEnJEb9XBdJOUlp4Qp1Mc1E5QQ4I/qyvFJCy8n8JnijEjXNAi3fQ0TwIEM6e2OqnAgII8kkptkgOZEQZlN6BquZjqhVFxlBOkZq4Z6WASAFQQ8jZwQJ70FK8CTiaeb3fDSLJyMiwiwiS/q0SkwEBE+85jYjSTpcTiSE2WQRtVlOpAMVemVdtjXmlZxICFlQk/TJjHcmYS96JJ0p6KmcZggKeWmVdPopYwgKuxJVUuQE+EU0Sd99KYICxJH0ry9DUIA/rFy3WyWnGYLCnqyQ9PCXERTgmJmSPvwlBAU4p1bUWklPP1yytA9JYWdGRtLLDyEowDUjomiRwQgKUIZnJC3OgREUoByPSDpkDyEkBfhJj6RNQ7xEUYA6aiS9Cdo8SUoUBaijVtCuFQwICtBGiajdawARFKCNK0HdVtEjKUAd0+Q0q9v/FklhJ1rmP4e8JEoUBejfq2jYNgtEUdgJzwN7u6dSSkBQyMSME7O7FyHUQpoLCqw8rv5o+d6Uw3NvfzjagUkAZvOlLH1lLMyx8wCzWBEhW3ZDmLZ7NTsrwCpmyui5A1+IPidigjcjhZy14/vytBYxwRsPMVcf/2c2QU72wQUVIgj5lqFyIiZEJ5qQb1me1gLMJLKM93wY9cVETYiGkphmg+RETFhJljY2LHICQB/uchI1AXxwlRMxAfwgrYVtUHvxwk1OoiaAL8MjJ2ICtOEip1q6APnJEBS6VwiRzp4vtM5YBvf3m/EeI8DyvUZK33z4+v1bqsZ7dN+3n2W6zwgMO44hY0X1vIqkXh419x7lXh9ds8oyviFyRqmcXrxf2FUtF89ymFkG6nI2p7WZB4FGvUWfLcVt4ahsdy+TR7ifz6lc0F5v0GfalmXldpE3esrr6PrTR84sjNjS4kpQhQhaUi4lD6KR1xK9DHupfoKoR02vSFDy9FWNoKVivv1/lG7OfZkqR043OZUbWgmtFaomaGl51ZTHCnFv5bqNnFGjZvRtEFUEHSHmI1ZHWgVBXZ5+sxvX7ANlPChpjKsknSllKaPlRU4nZo0Yjq6wiIJGFPMML2mj3M8ZRRe4QkzF6FhCJEFbBn4i0iKswn11yenZiLLKeMRqQdWiZSmlkqrcV9d0gPfksAcqBW+2ZqAoq5gZGSrnTtGwlVmCIqUepxWxerj7iIyNZ7SgiKmJhJw7NJpRgiKmLuHl3KnReA4UIaU+y+WkcbzHQ1DEzMGQ9aJH0BDK6RE0y9wlTDp2HuppERQxc0FFBaZGUMTMB5UlQG/fHyk1odJEaBUUMXWh4oSoFRQxtaHyxMi2uBseQwUKciUoYuaAShTlkaCImQcqUph7QREzF/8DSS/2GZ2/N/sAAAAASUVORK5CYII=";
  var Wa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABdRJREFUeJzt3d3N3TYMgGG16ADdoAhyl7UyV9bqXRB0g2zQXgRGDcOWSIoUaX3vAwQBknMk/4gWLcnHrQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDEb9kb8FH99eeXf6Wf/efn35ynDyj1pEsb6G6NUxOYZ7sdB/QtPdnWRnn29gbKMYDUspPs0SgPb22cHANo/JG9AZF6wWBp3JLgeir36bvff3x9LOvzp2/dbSFA97bk5I4a9VMD7TXOUcP0uJ+d6emu5d6V1QvMs5nj8FZPx37X/b2TFpzShtnafeP0DipJMFnLnN3/w1OQ7tZgP+pA4VVKcHo0TG36KNULKGt5XsHZmi1APS5WM2Vqg0i7vbsG6YcIznN9vRTxXHavgdxtv6Tc3vc1pAHqdaG6ipwKYprpf1sFp6aH0gRTrxxLubPB2avHu+c/l3mICvqnsr//+Cq+qGrK1Xw/wzbBaRkNvSv3yew9cq+cu89L6nu6F/cMzCgzF1ftANlbe+Otp1IkDVxyVfbo6Z481f3507dhvXfbrk3HpdtjKTNqKuio8678c7mzF6ns6arfMyrVNoA75wMfNU2hKSeCx3Fq7dc+SPfDc39H9Vqn2CT//4bsYeT1PecOJyGSJdh6PZOlbElPZz2PHtlD1cUeS4LT4z5IOihwfNaD5ERm9qxH/dZ7Vmt9M999CtCZbdLUP/p3r2zFQ0paG8lr4Eb6+ZWBcSeq/qhyK6bXUfXOSgtO7/tOb9eT1NveqKttpYbiyXu/euV51JV16/T6e86zyF5TUp731V5Sp+Z7M71h9QvFNWWuvr0Sy4LzLfNvrel6zRX1e+hN2VzrnNlfaYD0xhCs++851lDh3vNV95xe6YvHgb8bwbNcuc+f09wbaUj2dzYgjz93//5kh94t0quCM8OKK6glKKuM0EYHfhUZWd8WwenZa0rLsp6s2YY66o0k9WUvS4NManBaGuo1eDIHgUZ1ePdkntsfFaCz5VZJdStsxyt7ziMNXHEAK5yk1mqmhrMPf1fcp57Vqe3SqZTMEduZhqAZyaywFne0DVHngHTZ11bznE88l/1lBZ9meP8851plWkBCO7drmQvWnL/sY/fKtFaqN3iy6iofsQxNktJnTMgfPXJUz3w3VaP5vOQ7Iyszvy2DczSi+aYFET2jINUEqFcAS4+rV480WlwRWXe07dLa0YGvfl9kmbTvPZJ1TXGvn4t4yuRp+2aMgk27wkm63DIztU3vOVfueC8wK4zKWtK0M+nvJXmOdlt65MgFFCva06qsKz044SvjIiN5TjLaaHxhtNyyouXBGZ1WSn66Ivt+M7pRZAWoZsDq+t2emeM1am/WtHxFG9runrO1/n1CxLK7CilxJM/H4bwuTJJBvWtgvm0gcNu01uvpd8la1soLE7xkpYDea4Ot6W3GOSzRc3o/qHw2M9qmXWA+uw+jbd0hyO9Yz0+vJ9QGcO/8ZV2YUqYVPN8dImXp3aJ/w1XTGGYfKZN+P7IXiXqO1uINLzFOm/Pz+BV4C03PNEqpZl//ELXP1ro8nhLyKLPHMyAiXyvh4cMFZ2uyAJXc62gzgJl1nhrSLMEzcLx+5qQnIhgqv6qhTHC2Zmus1tUuowCVDkRU6j0jgiJqhLPSSq2q7wMtMSBkdbcQWjNCq2nMlRrTnajAPP/t+c5Sj3K8VNueQ+pGzaa2MyOb2sZseW2dpL6ZnjMzfeQFt/Fe3XP2WIfGvRY6a569jCJ9TaIlcCS9KQE5p1TP2VrMbwLNDlZEvpE5AkGxh9f2nLO/QOetytIwAnMf6SfS2ns+jaZ6B4i2sWvSvF0HWOAj/aRGNFAaPXbw2rS2Rzr0T/ChshKNM3qd4135BCaqK9VAKy+lAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4DBC0k0jFtF9wAAAAASUVORK5CYII=";
  var ac = "3001.0.0";
  var c = { k: null, globalOpt: null, gfx: null, game: null, app: null, assets: null, fontCacheCanvas: null, fontCacheC2d: null, debug: null, audio: null, pixelDensity: null, canvas: null, gscale: null, kaSprite: null, boomSprite: null };
  var Xa = s((t18 = { tagsAsComponents: true }) => {
    c.k && (console.warn("KAPLAY already initialized, you are calling kaplay() multiple times, it may lead bugs!"), c.k.quit()), c.globalOpt = t18;
    let e = t18.root ?? document.body;
    e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
    let n2 = t18.canvas ?? e.appendChild(document.createElement("canvas"));
    c.canvas = n2;
    let r = t18.scale ?? 1;
    c.gscale = r;
    let o = t18.width && t18.height && !t18.stretch && !t18.letterbox;
    o ? (n2.width = t18.width * r, n2.height = t18.height * r) : (n2.width = n2.parentElement.offsetWidth, n2.height = n2.parentElement.offsetHeight);
    let i = ["outline: none", "cursor: default"];
    if (o) {
      let L = n2.width, U = n2.height;
      i.push(`width: ${L}px`), i.push(`height: ${U}px`);
    } else
      i.push("width: 100%"), i.push("height: 100%");
    t18.crisp && (i.push("image-rendering: pixelated"), i.push("image-rendering: crisp-edges")), n2.style.cssText = i.join(";");
    let a2 = t18.pixelDensity || 1;
    c.pixelDensity = a2, n2.width *= a2, n2.height *= a2, n2.tabIndex = 0;
    let l = document.createElement("canvas");
    l.width = 256, l.height = 256, c.fontCacheCanvas = l;
    let u2 = l.getContext("2d", { willReadFrequently: true });
    c.fontCacheC2d = u2;
    let m = Ps({ canvas: n2, touchToMouse: t18.touchToMouse, gamepads: t18.gamepads, pixelDensity: t18.pixelDensity, maxFPS: t18.maxFPS, buttons: t18.buttons });
    c.app = m;
    let d = [], C = m.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    if (!C)
      throw new Error("WebGL not supported");
    let p = C, b = ai(p, { texFilter: t18.texFilter }), f = yi(t18, b);
    c.gfx = f;
    let O = sa();
    c.audio = O;
    let g = qs(b, t18.spriteAtlasPadding ?? 0);
    c.assets = g;
    let y2 = ea();
    c.game = y2, y2.root.use(bn());
    function V(L, U) {
      let Y = new st(b, L, U);
      return { clear: s(() => Y.clear(), "clear"), free: s(() => Y.free(), "free"), toDataURL: s(() => Y.toDataURL(), "toDataURL"), toImageData: s(() => Y.toImageData(), "toImageData"), width: Y.width, height: Y.height, draw: s((se) => {
        Oe(), Y.bind(), se(), Oe(), Y.unbind();
      }, "draw"), get fb() {
        return Y;
      } };
    }
    s(V, "makeCanvas");
    function A() {
      p.clear(p.COLOR_BUFFER_BIT), f.frameBuffer.bind(), p.clear(p.COLOR_BUFFER_BIT), f.bgColor || ze(() => {
        it({ width: ae(), height: ce(), quad: new z(0, 0, ae() / 64, ce() / 64), tex: f.bgTex, fixed: true });
      }), f.renderer.numDraws = 0, f.fixed = false, f.transformStack.length = 0, f.transform = new he();
    }
    s(A, "frameStart");
    function D(L, U) {
      f.postShader = L, f.postShaderUniform = U ?? null;
    }
    s(D, "usePostEffect");
    function G() {
      Oe(), f.lastDrawCalls = f.renderer.numDraws, f.frameBuffer.unbind(), p.viewport(0, 0, p.drawingBufferWidth, p.drawingBufferHeight);
      let L = f.width, U = f.height;
      f.width = p.drawingBufferWidth / a2, f.height = p.drawingBufferHeight / a2, Vt({ flipY: true, tex: f.frameBuffer.tex, pos: new E(f.viewport.x, f.viewport.y), width: f.viewport.width, height: f.viewport.height, shader: f.postShader, uniform: typeof f.postShaderUniform == "function" ? f.postShaderUniform() : f.postShaderUniform, fixed: true }), Oe(), f.width = L, f.height = U;
    }
    s(G, "frameEnd");
    let x = false, w = { inspect: false, timeScale: 1, showLog: true, fps: s(() => m.fps(), "fps"), numFrames: s(() => m.numFrames(), "numFrames"), stepFrame: Gt, drawCalls: s(() => f.lastDrawCalls, "drawCalls"), clearLog: s(() => y2.logs = [], "clearLog"), log: s((...L) => {
      let U = t18.logMax ?? 8, Y = L.length > 1 ? L.concat(" ").join(" ") : L[0];
      y2.logs.unshift({ msg: Y, time: m.time() }), y2.logs.length > U && (y2.logs = y2.logs.slice(0, U));
    }, "log"), error: s((L) => w.log(new Error(L.toString ? L.toString() : L)), "error"), curRecording: null, numObjects: s(() => N("*", { recursive: true }).length, "numObjects"), get paused() {
      return x;
    }, set paused(L) {
      x = L, L ? O.ctx.suspend() : O.ctx.resume();
    } };
    c.debug = w;
    function S(L, U) {
      try {
        return JSON.parse(window.localStorage[L]);
      } catch {
        return U ? (M(L, U), U) : null;
      }
    }
    s(S, "getData");
    function M(L, U) {
      window.localStorage[L] = JSON.stringify(U);
    }
    s(M, "setData");
    function R(L, ...U) {
      let Y = L(Xe), se;
      typeof Y == "function" ? se = Y(...U)(Xe) : se = Y;
      for (let xe in se)
        Xe[xe] = se[xe], t18.global !== false && (window[xe] = se[xe]);
      return Xe;
    }
    s(R, "plug");
    function F(L) {
      let U = m.canvas.captureStream(L), Y = O.ctx.createMediaStreamDestination();
      O.masterNode.connect(Y);
      let se = new MediaRecorder(U), xe = [];
      return se.ondataavailable = (J) => {
        J.data.size > 0 && xe.push(J.data);
      }, se.onerror = () => {
        O.masterNode.disconnect(Y), U.getTracks().forEach((J) => J.stop());
      }, se.start(), { resume() {
        se.resume();
      }, pause() {
        se.pause();
      }, stop() {
        return se.stop(), O.masterNode.disconnect(Y), U.getTracks().forEach((J) => J.stop()), new Promise((J) => {
          se.onstop = () => {
            J(new Blob(xe, { type: "video/mp4" }));
          };
        });
      }, download(J = "kaboom.mp4") {
        this.stop().then((Ce) => Mr(J, Ce));
      } };
    }
    s(F, "record");
    function j() {
      return document.activeElement === m.canvas;
    }
    s(j, "isFocused");
    let H = y2.root.add.bind(y2.root), q = y2.root.readd.bind(y2.root), W = y2.root.removeAll.bind(y2.root), N = y2.root.get.bind(y2.root), k2 = y2.root.wait.bind(y2.root), Z = y2.root.loop.bind(y2.root), X = y2.root.query.bind(y2.root), ee = y2.root.tween.bind(y2.root), Ee = Tt(null, Wa), _ = Tt(null, Ya);
    c.kaSprite = Ee, c.boomSprite = _;
    function gt() {
      y2.root.fixedUpdate();
    }
    s(gt, "fixedUpdateFrame");
    function Gt() {
      y2.root.update();
    }
    s(Gt, "updateFrame");
    class Ht {
      static {
        s(this, "Collision");
      }
      source;
      target;
      normal;
      distance;
      resolved = false;
      constructor(U, Y, se, xe, J = false) {
        this.source = U, this.target = Y, this.normal = se, this.distance = xe, this.resolved = J;
      }
      get displacement() {
        return this.normal.scale(this.distance);
      }
      reverse() {
        return new Ht(this.target, this.source, this.normal.scale(-1), this.distance, this.resolved);
      }
      hasOverlap() {
        return !this.displacement.isZero();
      }
      isLeft() {
        return this.displacement.cross(y2.gravity || v(0, 1)) > 0;
      }
      isRight() {
        return this.displacement.cross(y2.gravity || v(0, 1)) < 0;
      }
      isTop() {
        return this.displacement.dot(y2.gravity || v(0, 1)) > 0;
      }
      isBottom() {
        return this.displacement.dot(y2.gravity || v(0, 1)) < 0;
      }
      preventResolution() {
        this.resolved = true;
      }
    }
    function xn() {
      if (!Ma())
        return;
      let L = {}, U = t18.hashGridSize || 64, Y = new he(), se = [];
      function xe(J) {
        if (se.push(Y.clone()), J.pos && Y.translate(J.pos), J.scale && Y.scale(J.scale), J.angle && Y.rotate(J.angle), J.transform = Y.clone(), J.c("area") && !J.paused) {
          let Ce = J, ut = Ce.worldArea().bbox(), dr = Math.floor(ut.pos.x / U), fr = Math.floor(ut.pos.y / U), hr = Math.ceil((ut.pos.x + ut.width) / U), gr = Math.ceil((ut.pos.y + ut.height) / U), wn = /* @__PURE__ */ new Set();
          for (let Qe = dr; Qe <= hr; Qe++)
            for (let ct = fr; ct <= gr; ct++)
              if (!L[Qe])
                L[Qe] = {}, L[Qe][ct] = [Ce];
              else if (!L[Qe][ct])
                L[Qe][ct] = [Ce];
              else {
                let zt = L[Qe][ct];
                e:
                  for (let Ie of zt) {
                    if (Ie.paused || !Ie.exists() || wn.has(Ie.id))
                      continue;
                    for (let Je of Ce.collisionIgnore)
                      if (Ie.is(Je))
                        continue e;
                    for (let Je of Ie.collisionIgnore)
                      if (Ce.is(Je))
                        continue e;
                    let Yt = es(Ce.worldArea(), Ie.worldArea());
                    if (Yt) {
                      let Je = new Ht(Ce, Ie, Yt.normal, Yt.distance);
                      Ce.trigger("collideUpdate", Ie, Je);
                      let On = Je.reverse();
                      On.resolved = Je.resolved, Ie.trigger("collideUpdate", Ce, On);
                    }
                    wn.add(Ie.id);
                  }
                zt.push(Ce);
              }
        }
        J.children.forEach(xe), Y = se.pop();
      }
      s(xe, "checkObj"), xe(y2.root);
    }
    s(xn, "checkFrame");
    function vn(L) {
      console.error(L), O.ctx.suspend();
      let U = L.message ?? String(L) ?? "Unknown error, check console for more info";
      m.run(() => {
      }, () => {
        A(), ze(() => {
          let xe = ae(), J = ce(), Ce = { size: 36, width: xe - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: yt, fixed: true };
          ve({ width: xe, height: J, color: I(0, 0, 255), fixed: true });
          let qt = He({ ...Ce, text: "Error", pos: v(32), color: I(255, 128, 0), fixed: true });
          qe(qt), Jr({ ...Ce, text: U, pos: v(32, 32 + qt.height + 16), fixed: true }), pe(), y2.events.trigger("error", L);
        }), G();
      });
    }
    s(vn, "handleErr");
    function mr(L) {
      d.push(L);
    }
    s(mr, "onCleanup");
    function pr() {
      y2.events.onOnce("frameEnd", () => {
        m.quit(), p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT | p.STENCIL_BUFFER_BIT);
        let L = p.getParameter(p.MAX_TEXTURE_IMAGE_UNITS);
        for (let U = 0; U < L; U++)
          p.activeTexture(p.TEXTURE0 + U), p.bindTexture(p.TEXTURE_2D, null), p.bindTexture(p.TEXTURE_CUBE_MAP, null);
        p.bindBuffer(p.ARRAY_BUFFER, null), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, null), p.bindRenderbuffer(p.RENDERBUFFER, null), p.bindFramebuffer(p.FRAMEBUFFER, null), b.destroy(), d.forEach((U) => U());
      });
    }
    s(pr, "quit");
    let Mt = true;
    m.run(() => {
      try {
        g.loaded && (w.paused || gt(), xn());
      } catch (L) {
        vn(L);
      }
    }, (L, U) => {
      try {
        L(), g.loaded || Fe() === 1 && !Mt && (g.loaded = true, Un().forEach((Y) => y2.events.trigger("loadError", ...Y)), y2.events.trigger("load")), !g.loaded && t18.loadingScreen !== false || Mt ? (A(), fi(), G()) : (w.paused || Gt(), xn(), A(), di(), t18.debug !== false && pi(), G()), Mt && (Mt = false), y2.events.trigger("frameEnd"), U();
      } catch (Y) {
        vn(Y);
      }
    }), Jn(), cr();
    let Xe = { _k: c, VERSION: ac, loadRoot: Ns, loadProgress: Fe, loadSprite: Tt, loadSpriteAtlas: Wr, loadSound: oi, loadMusic: si, loadBitmapFont: Js, loadFont: Xs, loadShader: ti, loadShaderURL: ni, loadAseprite: $s, loadPedit: Zs, loadBean: Ws, loadJSON: Us, load: ln, getSound: Yr, getFont: Hr, getBitmapFont: Hn, getSprite: _r, getShader: zr, getAsset: Hs, Asset: le, SpriteData: Le, SoundData: ot, width: ae, height: ce, center: wt, dt: te, fixedDt: an, restDt: un, time: m.time, screenshot: m.screenshot, record: F, isFocused: j, setCursor: m.setCursor, getCursor: m.getCursor, setCursorLocked: m.setCursorLocked, isCursorLocked: m.isCursorLocked, setFullscreen: m.setFullscreen, isFullscreen: m.isFullscreen, isTouchscreen: m.isTouchscreen, onLoad: Nt, onLoadError: zi, onLoading: Ui, onResize: Hi, onGamepadConnect: m.onGamepadConnect, onGamepadDisconnect: m.onGamepadDisconnect, onError: qi, onCleanup: mr, flash: uo, setCamPos: no, getCamPos: ro, setCamRot: io, getCamRot: ao, setCamScale: oo, getCamScale: so, getCamTransform: Yi, camPos: Xi, camScale: Qi, camFlash: Zi, camRot: Ji, camTransform: Wi, shake: $i, toScreen: dn, toWorld: sr, setGravity: ta, getGravity: na, setGravityDirection: ra, getGravityDirection: ht, setBackground: Ls, getBackground: js, getGamepads: m.getGamepads, getTreeRoot: da, add: H, make: fn, destroy: ir, destroyAll: W, get: N, query: X, readd: q, pos: Pt, scale: Ut, rotate: qa, color: Zn, opacity: er, anchor: gn, area: Ra, sprite: hn, text: ya, polygon: Ti, rect: nr, circle: xi, uvquad: xa, outline: Oi, particles: Ei, body: Da, platformEffector: Ia, surfaceEffector: Fa, areaEffector: La, pointEffector: ja, buoyancyEffector: ka, constantForce: Ka, doubleJump: Ba, shader: Ai, textInput: Ga, timer: bn, fixed: ar, stay: lr, health: Aa, lifespan: Sa, named: Va, state: Pa, z: za, layer: Na, move: Ua, offscreen: Ha, follow: _a, fadeIn: Ci, mask: wi, drawon: vi, raycast: tr, tile: rr, animate: Ta, serializeAnimation: bo, agent: va, sentry: Oa, patrol: wa, pathfinder: Ca, trigger: Vi, on: Me, onFixedUpdate: Pi, onUpdate: Gi, onDraw: Mi, onAdd: eo, onDestroy: Ri, onTag: to, onUntag: Fi, onUse: Di, onUnuse: Bi, onClick: Ii, onCollide: Li, onCollideUpdate: ji, onCollideEnd: Ki, onHover: ki, onHoverUpdate: _i, onHoverEnd: Ni, onKeyDown: m.onKeyDown, onKeyPress: m.onKeyPress, onKeyPressRepeat: m.onKeyPressRepeat, onKeyRelease: m.onKeyRelease, onMouseDown: m.onMouseDown, onMousePress: m.onMousePress, onMouseRelease: m.onMouseRelease, onMouseMove: m.onMouseMove, onCharInput: m.onCharInput, onTouchStart: m.onTouchStart, onTouchMove: m.onTouchMove, onTouchEnd: m.onTouchEnd, onScroll: m.onScroll, onHide: m.onHide, onShow: m.onShow, onGamepadButtonDown: m.onGamepadButtonDown, onGamepadButtonPress: m.onGamepadButtonPress, onGamepadButtonRelease: m.onGamepadButtonRelease, onGamepadStick: m.onGamepadStick, onButtonPress: m.onButtonPress, onButtonDown: m.onButtonDown, onButtonRelease: m.onButtonRelease, mousePos: Nn, mouseDeltaPos: m.mouseDeltaPos, isKeyDown: m.isKeyDown, isKeyPressed: m.isKeyPressed, isKeyPressedRepeat: m.isKeyPressedRepeat, isKeyReleased: m.isKeyReleased, isMouseDown: m.isMouseDown, isMousePressed: m.isMousePressed, isMouseReleased: m.isMouseReleased, isMouseMoved: m.isMouseMoved, isGamepadButtonPressed: m.isGamepadButtonPressed, isGamepadButtonDown: m.isGamepadButtonDown, isGamepadButtonReleased: m.isGamepadButtonReleased, getGamepadStick: m.getGamepadStick, isButtonPressed: m.isButtonPressed, isButtonDown: m.isButtonDown, isButtonReleased: m.isButtonReleased, setButton: m.setButton, getButton: m.getButton, pressButton: m.pressButton, releaseButton: m.releaseButton, getLastInputDeviceType: m.getLastInputDeviceType, charInputted: m.charInputted, loop: Z, wait: k2, play: aa, setVolume: co, getVolume: lo, volume: ua, burp: ur, audioCtx: O.ctx, Line: Te, Rect: $, Circle: we, Ellipse: ke, Point: An, Polygon: ye, Vec2: E, Color: K, Mat4: he, Quad: z, RNG: Xt, rand: ge, randi: wr, randSeed: Vo, vec2: v, rgb: I, hsl2rgb: To, quad: me, choose: Mo, chooseMultiple: Go, shuffle: Or, chance: Po, lerp: fe, tween: ee, easings: nt, map: Ve, mapc: So, wave: Sn, deg2rad: ue, rad2deg: lt, clamp: Se, evaluateQuadratic: ko, evaluateQuadraticFirstDerivative: _o, evaluateQuadraticSecondDerivative: No, evaluateBezier: Jt, evaluateBezierFirstDerivative: Uo, evaluateBezierSecondDerivative: Ho, evaluateCatmullRom: qo, evaluateCatmullRomFirstDerivative: zo, curveLengthApproximation: Vr, normalizedCurve: Yo, hermite: Lt, cardinal: Pr, catmullRom: jt, bezier: Wo, kochanekBartels: $o, easingSteps: Zo, easingLinear: Qo, easingCubicBezier: Jo, testLineLine: Vn, testRectRect: Er, testRectLine: Pn, testRectPoint: Bt, testCirclePolygon: Qt, testLinePoint: Gn, testLineCircle: Ft, isConvex: ns, triangulate: Rn, NavMesh: kn, drawSprite: gi, drawText: Jr, formatText: He, drawRect: ve, drawLine: _t, drawLines: kt, drawTriangle: Xn, drawCircle: Ue, drawEllipse: zn, drawUVQuad: it, drawPolygon: Ge, drawCurve: Yn, drawBezier: ii, drawFormattedText: qe, drawMasked: hi, drawSubtracted: bi, pushTransform: be, popTransform: pe, pushTranslate: Q, pushScale: rt, pushRotate: $e, pushMatrix: Ks, usePostEffect: D, makeCanvas: V, debug: w, scene: fa, getSceneName: ba, go: ha, onSceneLeave: ga, layers: pa, getLayers: la, setLayers: po, getDefaultLayer: ma, addLevel: Si, getData: S, setData: M, download: Fn, downloadJSON: ys, downloadText: Gr, downloadBlob: Mr, plug: R, ASCII_CHARS: Dn, canvas: m.canvas, addKaboom: ca, LEFT: E.LEFT, RIGHT: E.RIGHT, UP: E.UP, DOWN: E.DOWN, RED: K.RED, GREEN: K.GREEN, BLUE: K.BLUE, YELLOW: K.YELLOW, MAGENTA: K.MAGENTA, CYAN: K.CYAN, WHITE: K.WHITE, BLACK: K.BLACK, quit: pr, KEvent: oe, KEventHandler: Ye, KEventController: _e, cancel: s(() => Bn, "cancel") };
    c.k = Xe;
    let Cn = t18.plugins;
    if (Cn && Cn.forEach(R), t18.global !== false)
      for (let L in Xe)
        window[L] = Xe[L];
    return t18.focus !== false && m.canvas.focus(), Xe;
  }, "kaplay");
  var E2 = Xa;

  // src/classes/GameData.ts
  var GameData = class {
    debug;
    songs;
    player;
    settings;
    constructor() {
      this.debug = false;
      this.songs = [];
      this.settings = k.getData("settings") || {
        demoMusic: true,
        volume: 1
      };
      this.player = k.getData("player") || {
        skin: "juicy",
        sword: "sword"
      };
    }
    setSetting(key, value) {
      this.settings[key] = value;
      k.setData("settings", this.settings);
    }
    setPlayerSetting(key, value) {
      this.player[key] = value;
      k.debug.log(`player ${key} set to ${value}`);
      k.setData("player", this.player);
    }
    getPlayData(song, difficulty) {
      return k.getData(`playData.${song}.${difficulty}`, {});
    }
  };

  // src/engine.ts
  var k = E2({
    width: 720,
    height: 720,
    letterbox: true,
    font: "happy",
    background: [0, 0, 0],
    plugins: [y],
    pixelDensity: 1,
    buttons: {
      "hit_left": {
        gamepad: ["west"],
        keyboard: ["a", "left"]
      },
      "hit_right": {
        gamepad: ["east"],
        keyboard: ["d", "right"]
      },
      "hit_up": {
        gamepad: "north",
        keyboard: ["w", "up"]
      }
    }
  });
  k.setLayers([
    "background",
    "note",
    "player",
    "sword",
    "default",
    "ui"
  ], "default");
  var gameData = new GameData();

  // src/util.ts
  var import_tja = __toESM(require_dist(), 1);
  function waitMs(ms2, action) {
    const msToSec = ms2 / 1e3;
    k.wait(msToSec, action);
  }
  function padlZero(str, len) {
    return str.padStart(len, "0");
  }
  function complexAdd(obj, parent, comps) {
    let parentObj = parent ?? k;
    const newObj = parentObj.add(obj);
    if (comps) {
      for (const component of comps) {
        newObj.use(component);
      }
    }
    return newObj;
  }
  function loadTJA(tjaPath, remote) {
    return k.load(
      new Promise((resolve, reject) => {
        fetch(tjaPath).then((response) => {
          return response.text();
        }).then(async (text) => {
          try {
            const song = import_tja.TJAParser.parse(text);
            const commands = song.courses[0]?.singleCourse.getCommands();
            const soungCourses = [];
            song.courses.forEach((course) => {
              soungCourses.push({
                difficulty: course.stars,
                chart: course.singleCourse.getCommands()
              });
            });
            if (!song.wave)
              return reject("No sound file found");
            if (!song.title)
              return reject("No title found");
            if (!song.subtitle)
              return reject("No subtitle found");
            if (!song.genre)
              return reject("No genre found");
            if (!song.bpm)
              return reject("No BPM found");
            const soundPath = remote ? song.wave : `sounds/music/${song.wave}`;
            await k.loadSound(song.wave.slice(0, -3), soundPath);
            gameData.songs.push({
              title: song.title,
              subtitle: song.subtitle,
              genre: song.genre,
              bpm: song.bpm,
              offset: song.offset,
              demoStart: song.demoStart,
              chart: commands,
              sound: song.wave.slice(0, -3),
              courses: soungCourses
            });
            resolve(song);
          } catch (e) {
            reject("Error parsing TJA file");
          }
        });
      })
    );
  }

  // src/loader.ts
  k.loadSprite("logo", "sprites/images/logo.png");
  k.loadSprite("star", "sprites/images/star.png");
  k.loadSprite("life", "sprites/images/life.png");
  k.loadSprite("fail", "sprites/images/fail.png");
  k.loadSprite("sword", "sprites/sword.png");
  k.loadSprite("sword_cut", "sprites/sword_cut.png");
  k.loadSprite("apple_break", "sprites/apple_break.png");
  k.loadAseprite(
    "green_apple",
    "sprites/green_apple.png",
    "sprites/green_apple.json"
  );
  k.loadSprite("starui", "sprites/ui/starui.png");
  k.loadAseprite(
    "note_single",
    "sprites/notes_skin/note_single.png",
    "sprites/notes_skin/note_single.json"
  );
  k.loadAseprite(
    "note_slider",
    "sprites/notes_skin/note_slider.png",
    "sprites/notes_skin/note_slider.json"
  );
  k.loadSprite("bean", "sprites/players_skin/bean.png");
  k.loadSprite("bag", "sprites/players_skin/bag.png");
  k.loadSprite("bobo", "sprites/players_skin/bobo.png");
  k.loadSprite("egg", "sprites/players_skin/egg.png");
  k.loadSprite("pineapple", "sprites/players_skin/pineapple.png");
  k.loadAseprite(
    "juicy",
    "sprites/players_skin/juicy.png",
    "sprites/players_skin/juicy.json"
  );
  k.loadSound("slice", "sounds/effects/slice.mp3");
  k.loadSound("metronome", "sounds/effects/metronome.wav");
  k.loadSound("michelle", "sounds/music/michelle.mp3");
  k.loadSound("Mus_ex", "sounds/music/death_of_glamour.ogg");
  k.loadSound("snow_halation", "sounds/music/snow_halation.ogg");
  loadTJA("charts/Turkish March.tja");
  k.loadBitmapFont("happy", "sprites/happy_28x36.png", 28, 36);

  // src/classes/SceneState.ts
  var SceneState = class {
    name = "";
    backgroundMusic = null;
    saveData;
    constructor(name, saveData) {
      this.name = name;
      this.saveData = saveData;
    }
    saveSceneData() {
      if (this.saveData)
        k.setData(`scene.${this.name}`, this.saveData());
    }
    setBackgroundMusic(music, opt) {
      if (this.backgroundMusic)
        this.backgroundMusic.stop();
      this.backgroundMusic = k.play(music, opt);
    }
    changeScene(scene, ...args) {
      this.saveSceneData();
      this.backgroundMusic?.stop();
      const newSceneData = k.getData(`scene.${scene}`) || {};
      k.go(scene, newSceneData, ...args);
    }
  };

  // src/util/use.ts
  function use(obj, comps) {
    for (const comp of comps) {
      obj.use(comp);
    }
    return obj;
  }

  // src/objects/common/obj_base.ts
  function createOptions(defaultOptions, userOpt) {
    return Object.assign(defaultOptions, userOpt);
  }
  function appplyBaseComponents(obj, opt) {
    const newObj = use(obj, [
      k.pos(opt.pos),
      k.anchor(opt.anchor),
      k.rotate(opt.rotate),
      k.z(opt.z),
      ...opt.tags,
      opt.states.length > 0 ? k.state(opt.states[0], opt.states) : "",
      opt.custom
    ]);
    return newObj;
  }
  function createObj(userOpt) {
    const opt = createOptions({
      pos: k.vec2(0, 0),
      anchor: "center",
      rotate: 0,
      z: 0,
      tags: [],
      states: [],
      custom: {}
    }, userOpt);
    return appplyBaseComponents(k.make(), opt);
  }

  // src/objects/common/obj_render.ts
  function applyRenderComponents(obj, opt) {
    const newObj = use(obj, [
      k.color(k.Color.fromHex(opt.color)),
      k.opacity(opt.opacity),
      k.scale(opt.scale)
    ]);
    return newObj;
  }
  function createRender(userOpt) {
    const opt = createOptions({
      color: "#ffffff",
      opacity: 1,
      scale: k.vec2(1)
    }, userOpt);
    return applyRenderComponents(createObj(opt), opt);
  }

  // src/objects/common/obj_background.ts
  function applyBackgroundComponents(obj, opt) {
    const newObj = use(obj, [
      k.rect(opt.size.x, opt.size.y)
    ]);
    return newObj;
  }
  function createBackground(userOpt) {
    const opt = createOptions({
      pos: k.center(),
      size: k.vec2(k.width(), k.height())
    }, userOpt);
    return applyBackgroundComponents(createRender(opt), opt);
  }

  // src/objects/common/obj_text.ts
  function applyTextComponents(obj, opt) {
    const newObj = use(obj, [
      k.text(opt.text, {
        size: opt.size,
        font: opt.font,
        align: opt.align
      })
    ]);
    return newObj;
  }
  function createText(userOpt) {
    const opt = createOptions({
      text: "",
      size: 16,
      font: "happy",
      align: "center"
    }, userOpt);
    return applyTextComponents(createRender(opt), opt);
  }

  // src/scenes/scene_click.ts
  k.scene("click", () => {
    const sceneState = new SceneState("click", () => ({}));
    k.add(createBackground({ color: "#000000" }));
    k.add(createText({
      pos: k.center(),
      size: 32,
      text: "Press ENTER for start"
    }));
    k.onUpdate(() => {
      if (k.isMousePressed() || k.isKeyPressed("enter") || k.isKeyPressed("space")) {
        sceneState.changeScene("song_selection");
      }
    });
  });

  // src/config.ts
  var NOTES_SPEED = 400;
  var DEF_MEASURE = 4 / 4;
  var DEF_SCROLL_SPEED = 1;
  var startHealth = 6;
  var HITPOINT_DISTANCE = 100;
  var appearNoteOffset = 20;
  var songBoxWidth = 400;
  var songBoxHeight = 100;
  var comboZeros = 3;
  var scoreZeros = 8;
  var uiPanelNoteSpeed = 100;

  // src/classes/PlayState.ts
  var PlayState = class {
    songData;
    score = 0;
    combo = 0;
    highScore = 0;
    noteIndex = 0;
    oldestNote = null;
    health = startHealth;
    constructor(songData) {
      this.songData = songData;
    }
    savePlayData() {
      const { title, courses } = this.songData;
      const { difficulty } = courses[0];
      const playData = k.getData(
        `playData.${title}.${difficulty}`,
        {}
      );
      const highScore = playData.highScore ?? 0;
      if (this.score > highScore) {
        playData.highScore = this.score;
        k.setData(`playData.${title}.${difficulty}`, playData);
      }
    }
  };

  // src/objects/play/obj_hit_point.ts
  var HIT_POINT_SIZE = 60;
  var STARS_GOTO = [
    k.vec2(-100, 0),
    k.vec2(0, -100),
    k.vec2(100, 0)
  ];
  var hitPointObj = (pos) => {
    const noteHitPoint = k.make([
      k.pos(pos),
      k.z(50),
      k.anchor("center"),
      k.circle(20),
      k.color(k.BLACK),
      k.opacity(0.1),
      k.area({
        shape: new k.Rect(k.vec2(0), HIT_POINT_SIZE, HIT_POINT_SIZE)
      }),
      {
        greatHit() {
          for (let i = 0; i < 3; i++) {
            const hitParticle = this.add([
              k.pos(0),
              k.anchor("center"),
              k.scale(0.5),
              k.sprite("star"),
              k.opacity(1),
              k.lifespan(0.1, { fade: 0.1 })
            ]);
            k.tween(k.Vec2.ZERO, STARS_GOTO[i], 0.2, (v2) => {
              hitParticle.pos = v2;
            });
          }
        }
      }
    ]);
    return noteHitPoint;
  };

  // src/objects/common/obj_area.ts
  function applyAreaComponents(obj, opt) {
    const newObj = use(obj, [
      k.area({
        shape: new k.Rect(k.vec2(0), opt.size.x, opt.size.y)
      })
    ]);
    return newObj;
  }
  function createArea(userOpt) {
    const opt = createOptions({
      size: k.vec2(0)
    }, userOpt);
    return applyAreaComponents(createObj(opt), opt);
  }

  // src/objects/common/obj_sprite.ts
  function applySpriteComponents(obj, opt) {
    const newObj = use(obj, [
      k.sprite(opt.sprite)
    ]);
    return newObj;
  }
  function createSprite(userOpt) {
    const opt = createOptions({
      sprite: "bean"
    }, userOpt);
    return applySpriteComponents(createRender(opt), opt);
  }

  // src/objects/play/obj_note.ts
  var directionByRail = (rail) => {
    return {
      "0": k.RIGHT,
      "1": k.DOWN,
      "2": k.LEFT
    }[rail];
  };
  var valuesByRail = (rail) => {
    return {
      "0": {
        anchor: "right",
        dir: k.vec2(-50, 0)
      },
      "1": {
        anchor: "bot",
        dir: k.vec2(0, -50)
      },
      "2": {
        anchor: "left",
        dir: k.vec2(50, 0)
      }
    }[rail];
  };
  var NOTE_RANK = [
    "active",
    "hit",
    "miss",
    "destroy"
  ];
  function noteComp(type, index, rail) {
    return {
      id: "note",
      type,
      index,
      rail
    };
  }
  function createNoteBase(userOpt) {
    const opt = Object.assign({
      type: "single",
      index: 0,
      rail: 0,
      size: k.vec2(63, 63),
      tags: ["note"]
    }, userOpt);
    const obj = createArea(opt);
    const newObj = use(obj, [
      k.state("active", NOTE_RANK),
      k.opacity(1),
      {
        type: opt.type,
        index: opt.index,
        rail: opt.rail
      }
    ]);
    return newObj;
  }
  function createSingleNote(userOpt) {
    const opt = Object.assign({
      type: "single",
      index: 0,
      rail: 0
    }, userOpt);
    const baseNote = createNoteBase(opt);
    const baseNoteSprite = baseNote.add(createSprite({
      sprite: "note_single",
      anchor: k.vec2(0, 0.28)
    }));
    const newBaseNote = use(baseNote, [{
      noteSprite: baseNoteSprite
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
  function noteSliderObj(rail, vel, pos, index) {
    let subNotesLoop;
    const slider = k.make([
      k.pos(pos),
      k.layer("note"),
      k.move(directionByRail(rail), vel),
      k.opacity(1),
      k.anchor(valuesByRail(rail).anchor),
      k.area({ shape: new k.Rect(k.vec2(0), 0, 0) }),
      k.state("active", NOTE_RANK),
      noteComp("slider", index, rail),
      {
        subNotes: new Array(),
        subNotesCount: 0,
        isActive: false,
        isCreationFinished: false,
        isRemovingSubNote: false,
        removedSubNotes: 0,
        /** The type of the subnotes currently being created */
        subnoteType: 0,
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
            if (this.isLastNote)
              subNotesLoop.cancel();
          });
        },
        end() {
          this.isLastNote = true;
        },
        fail() {
          subNotesLoop.cancel();
          this.subNotes.forEach((sn2) => {
            sn2.use(k.lifespan(0.1, { fade: 0.1 }));
            sn2.unuse("move");
          });
        },
        addSubNote(type = 1) {
          const posStart = this.subNotesCount === 0 ? this.pos.add(
            valuesByRail(rail).dir.scale(this.subNotesCount)
          ) : this.subNotes[this.subNotesCount - 1].pos.add(
            valuesByRail(rail).dir.scale(1)
          );
          const subnote = k.add([
            k.pos(posStart),
            k.anchor(k.vec2(0, 0.28)),
            k.sprite("note_slider", {
              frame: type
            }),
            k.rotate(90 * rail),
            k.area(),
            k.move(directionByRail(rail), vel),
            k.opacity(1),
            k.state("active", NOTE_RANK),
            "subnote",
            {
              rail
            }
          ]);
          subnote.onStateEnter("hit", () => {
            subnote.unuse("move");
            subnote.enterState("destroy");
          });
          subnote.onStateUpdate("destroy", () => {
            if (rail === 0) {
              if (this.subNotes?.[this.removedSubNotes]?.pos?.x >= this?.pos?.x) {
                this.isRemovingSubNote = false;
              }
            }
            if (rail === 1) {
              if (this.subNotes?.[this.removedSubNotes]?.pos?.y >= this?.pos?.y) {
                this.isRemovingSubNote = false;
              }
            }
            if (rail === 2) {
              if (this.subNotes?.[this.removedSubNotes]?.pos?.x <= this?.pos?.x) {
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
                  50 * this.subNotes.length,
                  63
                )
              })
            );
          }
          if (rail === 1) {
            this.use(
              k.area({
                shape: new k.Rect(
                  k.vec2(0, 30),
                  63,
                  50 * this.subNotes.length
                )
              })
            );
          }
          if (rail === 2) {
            this.use(
              k.area({
                shape: new k.Rect(
                  k.vec2(-30, 0),
                  50 * this.subNotes.length,
                  63
                )
              })
            );
          }
        }
      }
    ]);
    slider.onStateEnter("hit", () => {
      slider.unuse("move");
    });
    slider.onStateUpdate("hit", () => {
      if (slider.isRemovingSubNote)
        return;
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

  // src/objects/play/obj_play_info.ts
  var makePlayInfoObj = () => {
    const playInfo = k.make([
      k.pos(k.center().x, k.height() - 200),
      k.anchor("top"),
      k.layer("ui"),
      k.rect(k.width(), 200),
      k.color(k.Color.fromHex("#1f102a")),
      k.fixed(),
      {
        setCombo(amount) {
          combo.text = "x" + padlZero(String(amount), comboZeros);
        },
        setScore(amount) {
          score.text = padlZero(String(amount), scoreZeros);
        },
        addNote(noteKind) {
          if (noteKind === "single" || noteKind === "slider") {
            this.add([
              k.pos(
                k.vec2(-k.width() / 2 - appearNoteOffset, 200)
              ),
              k.anchor("botright"),
              k.sprite(`note_${noteKind}`, { frame: 1 }),
              k.move(k.RIGHT, uiPanelNoteSpeed),
              k.offscreen({ destroy: true, distance: 100 })
            ]);
          }
        },
        updateHealth(amount) {
          life.children.forEach((life2, i) => {
            if (i > amount) {
              life2.use(k.sprite("fail"));
            }
          });
        }
      }
    ]);
    const score = playInfo.add([
      k.pos(k.center().x - 10, 20 + 10),
      k.anchor("right"),
      k.text(padlZero(String(0), scoreZeros), { size: 40 })
    ]);
    const combo = playInfo.add([
      k.pos(score.pos.add(k.vec2(0, 40))),
      k.anchor("right"),
      k.text("x" + padlZero(String(0), comboZeros), { size: 28 })
    ]);
    const life = playInfo.add([
      k.pos(-k.width() / 2 + 20, 20 + 10)
    ]);
    for (let i = 0; i < startHealth; i++) {
      life.add([
        k.sprite("life"),
        k.pos(i * (40 + 6), 0),
        k.anchor("left")
      ]);
    }
    return playInfo;
  };

  // src/objects/play/obj_player.ts
  var ANIM_FRAMES = [
    [2, 3],
    [0, 1],
    [4, 5]
  ];
  var makePlayer = () => {
    const obj = k.make([
      k.sprite(gameData.player.skin),
      k.pos(k.center().add(0, 40)),
      k.anchor("bot"),
      k.animate(),
      k.scale(1),
      {
        framesito: 0,
        direction: "front",
        animateSide(side) {
          if (this.direction === side) {
            const anim2 = this.framesito == 0 ? 1 : 0;
            this.framesito = anim2;
            this.frame = ANIM_FRAMES[side][anim2];
            return;
          }
          this.framesito = 1;
          const anim = this.framesito == 0 ? 1 : 0;
          k.tween(1, 0, 0.1, (v2) => {
            this.scale = k.vec2(v2, 1);
          }).onEnd(() => {
            this.frame = ANIM_FRAMES[side][anim];
          });
          k.tween(0, 1, 0.1, (v2) => {
            this.scale = k.vec2(v2, 1);
          });
          this.direction = side;
          this.framesito = anim;
        },
        animateUp() {
          this.animateSide(1 /* TOP */);
        },
        animateLeft() {
          this.animateSide(0 /* LEFT */);
        },
        animateRight() {
          this.animateSide(2 /* RIGHT */);
        }
      }
    ]);
    return obj;
  };

  // src/objects/play/obj_song_titles.ts
  var addSongIntro = (songData) => {
    const songTitle = k.add([
      k.pos(k.center().x, 100),
      k.anchor("center"),
      k.text(songData.title, { size: 26 }),
      k.opacity(),
      k.lifespan(1, { fade: 1 })
    ]);
    songTitle.add([
      k.pos(0, 50),
      k.anchor("center"),
      k.opacity(),
      k.text(songData.subtitle, { size: 22 }),
      k.lifespan(1, { fade: 1 })
    ]);
  };

  // src/animations/anim_sword.ts
  var swordAnimation = () => {
    return {
      "0first": {
        "start": {
          pos: k.vec2(-50, 0),
          angle: -20
        },
        "end": {
          pos: k.vec2(-30, 20),
          angle: -94
        }
      },
      "0second": {
        "start": {
          pos: k.vec2(-70, 0),
          angle: 0
        },
        "end": {
          pos: k.vec2(5, 20),
          angle: -120
        }
      },
      "1first": {
        "start": {
          pos: k.vec2(-10, 0),
          angle: -43
        },
        "end": {
          pos: k.vec2(10, -60),
          angle: 43
        }
      },
      "1second": {
        "start": {
          pos: k.vec2(-10, 0),
          angle: 43
        },
        "end": {
          pos: k.vec2(10, -60),
          angle: -43
        }
      },
      "2first": {
        "start": {
          pos: k.vec2(50, 0),
          angle: 20
        },
        "end": {
          pos: k.vec2(30, 20),
          angle: 94
        }
      },
      "2second": {
        "start": {
          pos: k.vec2(70, 0),
          angle: 0
        },
        "end": {
          pos: k.vec2(-5, 20),
          angle: 120
        }
      }
    };
  };

  // src/components/comp_tweenAnim.ts
  function tweenAnim(anim, time = 0.1) {
    let originalPos;
    return {
      id: "tweenAnim",
      add() {
        originalPos = this.pos;
      },
      playTAnim(animName) {
        const animEntry = anim[animName];
        const animKeys = Object.keys(
          animEntry.start
        );
        for (const animKey of animKeys) {
          k.tween(
            animEntry.start[animKey],
            animEntry.end[animKey],
            time,
            (v2) => {
              if (animKey === "pos") {
                this["pos"] = originalPos.add(v2);
              } else {
                this[animKey] = v2;
              }
            },
            k.easings.easeInOutCubic
          );
        }
      }
    };
  }

  // src/objects/play/obj_sword.ts
  var makeSwordObj = () => {
    return k.make([
      k.pos(0, -50),
      k.rotate(90),
      k.layer("sword"),
      k.anchor(k.vec2(0, 0.8)),
      k.sprite("sword"),
      tweenAnim(swordAnimation(), 0.1),
      "sword",
      {
        lastRail: null,
        variantUsed: true,
        hit(rail) {
          if (this.lastRail !== rail)
            this.variantUsed = true;
          this.playTAnim(
            String(rail) + (this.variantUsed ? "first" : "second")
          );
          this.lastRail = rail;
          this.variantUsed = !this.variantUsed;
        }
      }
    ]);
  };

  // src/types.ts
  function isMeasureCommand(cmd) {
    return cmd.commandType === "MEASURE";
  }
  function isScrollCommand(cmd) {
    return cmd.commandType === "SCROLL";
  }
  function isNoteSequence(cmd) {
    return cmd.commandType === "__NOTESEQUENCE";
  }

  // src/scenes/scene_game.ts
  var directionByRail2 = (rail) => {
    return {
      "0": k.RIGHT,
      "1": k.DOWN,
      "2": k.LEFT
    }[rail];
  };
  k.scene("game", (sceneData, songData) => {
    const sceneState = new SceneState("game", () => ({}));
    const playState = new PlayState(songData);
    const noteStack = [];
    let playingAudio = null;
    k.add(createBackground({ color: "#ee8fcb" }));
    const player = k.add(makePlayer());
    const sword = player.add(makeSwordObj());
    const playInfo = k.add(makePlayInfoObj());
    const noteHitPoints = k.add([
      k.pos(k.center()),
      k.anchor("center")
    ]);
    noteHitPoints.add(hitPointObj(k.vec2(-HITPOINT_DISTANCE, 0)));
    noteHitPoints.add(hitPointObj(k.vec2(0, -HITPOINT_DISTANCE)));
    noteHitPoints.add(hitPointObj(k.vec2(HITPOINT_DISTANCE, 0)));
    const railPoints = k.add(createObj({
      pos: k.center()
    }));
    [
      k.vec2(-k.width() / 2, 0),
      k.vec2(0, -k.height() / 2),
      k.vec2(k.width() / 2, 0)
    ].forEach((pos) => {
      railPoints.add(createObj({
        pos
      }));
    });
    function addScore(amount, message, rail) {
      const hitPoint = noteHitPoints.children[rail];
      let comboBonus = 0;
      if (playState.combo >= 10)
        comboBonus = 10;
      if (playState.combo >= 20)
        comboBonus = 20;
      if (playState.combo >= 50)
        comboBonus = 50;
      if (playState.combo >= 100)
        comboBonus = 100;
      if (playState.combo >= 200)
        comboBonus = 200;
      if (playState.combo >= 500)
        comboBonus = 500;
      if (playState.combo >= 1e3)
        comboBonus = 1e3;
      playState.score += amount + comboBonus;
      playInfo.setScore(playState.score);
      k.add([
        k.pos(hitPoint.worldPos().add(k.vec2(0, -40))),
        k.anchor("top"),
        k.text(message, { size: 18, align: "center" }),
        k.move(k.UP, 100),
        k.opacity(),
        k.lifespan(0.4, { fade: 0.4 })
      ]);
    }
    function addCombo(amount) {
      playState.combo += amount;
      playInfo.setCombo(playState.combo);
    }
    function registerMiss(rail) {
      k.shake(4);
      addScore(0, "Miss", rail);
      playState.noteIndex++;
      playState.oldestNote = noteStack[playState.noteIndex];
      playState.health--;
      playState.combo = 0;
      playInfo.updateHealth(playState.health);
      playInfo.setCombo(playState.combo);
    }
    function hitRail(rail) {
      const hitPoint = noteHitPoints.children[rail];
      const hittedNote = k.get("note").filter(
        (note) => hitPoint.isColliding(note) && note.state === "active"
      )[0];
      sword.hit(rail);
      if (gameData.debug) {
        hitPoint.use(k.color(k.RED));
        hitPoint.use(k.opacity(1));
        const cleanUp = k.wait(0.05, () => {
          hitPoint.use(k.color(k.BLACK));
          hitPoint.use(k.opacity(0.1));
          cleanUp.cancel();
        });
      }
      if (!hittedNote) {
        return;
      }
      hittedNote.enterState("hit");
      const noteDis = hittedNote.worldPos().dist(hitPoint.worldPos());
      if (noteDis > 30) {
        if (rail === 0) {
          if (hittedNote.worldPos().x > hitPoint.worldPos().x) {
            addScore(30, "late...", rail);
          } else
            addScore(30, "early...", rail);
        } else if (rail === 1) {
          if (hittedNote.worldPos().y < hitPoint.worldPos().y) {
            addScore(30, "early...", rail);
          } else
            addScore(30, "late...", rail);
        } else if (rail === 2) {
          if (hittedNote.worldPos().x < hitPoint.worldPos().x) {
            addScore(30, "Late", rail);
          } else
            addScore(30, "Early", rail);
        }
      } else if (noteDis < 15) {
        addScore(100, "GREAT!", rail);
        hitPoint.greatHit();
      } else {
        addScore(50, "GOOD", rail);
      }
      if (hittedNote?.index === playState.oldestNote?.index) {
        addCombo(1);
      }
      playState.noteIndex++;
      playState.oldestNote = noteStack[playState.noteIndex];
    }
    function onHitUpdate(rail) {
    }
    function onHitEnd(rail) {
      const hitPoint = noteHitPoints.children[rail];
      const unhittedNote = k.get("note").filter(
        (note) => hitPoint.isColliding(note)
      )[0];
      if (!unhittedNote)
        return;
      if (unhittedNote.type === "slider") {
        unhittedNote.fail();
      }
    }
    function addSingle(rail, velMultiplier = 1) {
      const railPoint = railPoints.children[rail].worldPos();
      const single = createSingleNote({
        pos: railPoint,
        index: noteStack.length,
        rail
      });
      single.onStateEnter("hit", () => {
        playInfo.addNote("single");
      });
      single.onUpdate(() => {
        if (single.state === "active" && single.hasPoint(k.center())) {
          single.enterState("miss");
          registerMiss(rail);
        }
      });
      single.use(
        k.move(directionByRail2(rail), NOTES_SPEED * velMultiplier)
      );
      noteStack.push(single);
      if (!playState.oldestNote)
        playState.oldestNote = single;
      k.add(single);
      return single;
    }
    function addSlider(rail, velMultiplier = 1) {
      const railPoint = railPoints.children[rail].worldPos();
      const slider = noteSliderObj(
        rail,
        NOTES_SPEED * velMultiplier,
        railPoint,
        noteStack.length
      );
      slider.on("subnote_destroy", () => {
        playInfo.addNote("slider");
      });
      slider.onUpdate(() => {
        if (slider.state === "active" && slider.hasPoint(k.center())) {
          slider.enterState("miss");
          registerMiss(rail);
        }
      });
      noteStack.push(slider);
      if (!playState.oldestNote)
        playState.oldestNote = slider;
      k.add(slider);
      slider.start();
      return slider;
    }
    function startGame(songData2) {
      const bpm = songData2.bpm;
      const defaultMeasure = 4 / 4;
      const getDistanceTimeOfHitPoint = () => (k.width() / 2 - HITPOINT_DISTANCE) / (NOTES_SPEED * scrollSpeed);
      let scrollSpeed = 1;
      let musicOffset = songData2.offset >= 0 ? songData2.offset : 0;
      let notesOffset = songData2.offset < 0 ? -songData2.offset : 0;
      addSongIntro(songData2);
      k.wait(musicOffset + getDistanceTimeOfHitPoint(), () => {
        playingAudio = k.play(songData2.sound);
      });
      k.wait(notesOffset, () => {
        const chartCommands = songData2.chart;
        const msPerMeasure = () => 6e4 * measure * 4 / bpm;
        let measure = defaultMeasure;
        let measureIndex = 0;
        let musicDuration = k.play(songData2.sound, { volume: 0 }).duration();
        let curSlider = null;
        chartCommands.forEach((chartCommand) => {
          if (isNoteSequence(chartCommand)) {
            waitMs(msPerMeasure() * measureIndex, () => {
              let noteCount = 0;
              if (chartCommand.notes.length === 1) {
                noteCount = chartCommand.notes.length;
              } else
                noteCount = chartCommand.notes.length - 1;
              const msPerNote = msPerMeasure() / noteCount;
              chartCommand.notes.forEach((note, noteIndex) => {
                const nextNote = chartCommand.notes[noteIndex + 1];
                if (note.noteType == "1" || note.noteType == "2" || note.noteType == "3") {
                  waitMs(msPerNote * noteIndex, () => {
                    addSingle(
                      Number(note.noteType) - 1,
                      scrollSpeed
                    );
                  });
                } else if (note.noteType == "5" || note.noteType == "6" || note.noteType == "7") {
                  const sliderRail = Number(note.noteType) - 5;
                  waitMs(msPerNote * noteIndex, () => {
                    curSlider = addSlider(
                      sliderRail,
                      scrollSpeed
                    );
                  });
                } else if (nextNote?.noteType == "8") {
                  waitMs(msPerNote * noteIndex, () => {
                    curSlider?.end();
                  });
                }
              });
            });
            measureIndex++;
          } else if (isMeasureCommand(chartCommand)) {
            measure = chartCommand.value.fraction;
          } else if (isScrollCommand(chartCommand)) {
            scrollSpeed = chartCommand.value;
          }
        });
        k.wait(musicDuration, () => {
          exitGame();
        });
      });
    }
    function exitGame() {
      playingAudio?.stop();
      playState.savePlayData();
      sceneState.changeScene("song_selection");
    }
    k.onButtonPress("hit_left", () => {
      player.animateLeft();
      hitRail(0);
    });
    k.onButtonPress("hit_up", () => {
      player.animateUp();
      hitRail(1);
    });
    k.onButtonPress("hit_right", () => {
      player.animateRight();
      hitRail(2);
    });
    k.onUpdate(() => {
      if (k.areKeysDown(["left", "a"]))
        onHitUpdate(0);
      if (k.areKeysDown(["up", "a"]))
        onHitUpdate(1);
      if (k.areKeysDown(["right", "a"]))
        onHitUpdate(2);
      if (k.areKeysReleased(["left", "a"]))
        onHitEnd(0);
      if (k.areKeysReleased(["up", "a"]))
        onHitEnd(1);
      if (k.areKeysReleased(["right", "a"]))
        onHitEnd(2);
      if (k.isKeyPressed("escape"))
        exitGame();
    });
    player.animate("scale", [k.vec2(1, 1), k.vec2(1.2, 1.1)], {
      duration: 60 / songData.bpm,
      direction: "ping-pong"
    });
    if (k.isTouchscreen()) {
      const leftArea = k.add([
        k.pos(0, k.center().y),
        k.area({
          shape: new k.Rect(
            k.vec2(0),
            k.width() / 2,
            k.height() / 2
          )
        })
      ]);
      const rightArea = k.add([
        k.pos(k.center()),
        k.area({
          shape: new k.Rect(
            k.vec2(0),
            k.width() / 2,
            k.height() / 2
          )
        })
      ]);
      const topArea = k.add([
        k.area({
          shape: new k.Rect(k.vec2(0), k.width(), k.height() / 2)
        })
      ]);
      k.onMousePress(() => {
        if (leftArea.hasPoint(k.mousePos()))
          hitRail(0);
        if (topArea.hasPoint(k.mousePos()))
          hitRail(1);
        if (rightArea.hasPoint(k.mousePos()))
          hitRail(2);
      });
      k.onMouseMove(() => {
        if (leftArea.hasPoint(k.mousePos()))
          onHitUpdate(0);
        if (topArea.hasPoint(k.mousePos()))
          onHitUpdate(1);
        if (rightArea.hasPoint(k.mousePos()))
          onHitUpdate(2);
      });
      k.onMouseRelease(() => {
        if (leftArea.hasPoint(k.mousePos()))
          onHitEnd(0);
        if (topArea.hasPoint(k.mousePos()))
          onHitEnd(1);
        if (rightArea.hasPoint(k.mousePos()))
          onHitEnd(2);
      });
    }
    startGame(songData);
  });

  // src/objects/ui/obj_linear_selector.ts
  var linearSelectorObj = () => {
    const linearSelector = k.make([
      {
        selectedOption: 0,
        menuObjects: [],
        menuNext: ["down", "s"],
        menuBack: ["up", "w"],
        menuSelect: ["enter", "space"],
        onChange: (action) => linearSelector.on(
          "change",
          (newSelect, beforeSelect) => action(newSelect, beforeSelect)
        ),
        onSelect: (action) => linearSelector.on("select", () => action())
      }
    ]);
    function selectNext() {
      const lastSelection = linearSelector.selectedOption;
      linearSelector.selectedOption = (linearSelector.selectedOption + 1) % linearSelector.menuObjects.length;
      linearSelector.trigger(
        "change",
        linearSelector.selectedOption,
        lastSelection
      );
    }
    function selectBack() {
      const lastSelection = linearSelector.selectedOption;
      linearSelector.selectedOption = (linearSelector.selectedOption - 1 + linearSelector.menuObjects.length) % linearSelector.menuObjects.length;
      linearSelector.trigger(
        "change",
        linearSelector.selectedOption,
        lastSelection
      );
    }
    function selectOption() {
      linearSelector.trigger(
        "select",
        linearSelector.menuObjects[linearSelector.selectedOption]
      );
    }
    linearSelector.onKeyPress((key) => {
      if (linearSelector.menuNext.includes(key))
        selectNext();
      else if (linearSelector.menuBack.includes(key))
        selectBack();
      else if (linearSelector.menuSelect.includes(key))
        selectOption();
    });
    k.onMousePress(() => {
      selectOption();
    });
    return linearSelector;
  };

  // src/objects/ui/obj_song_box.ts
  var songBoxObj = (songData) => {
    const songBox = k.make([
      k.pos(0),
      k.anchor("center"),
      "song",
      {
        songData,
        justSelected: false,
        justDeselected: false,
        select() {
          k.tween(this.pos.x, 40, 0.2, (v2) => {
            this.pos.x = v2;
          }, k.easings.easeInOutQuad);
          this.justSelected = true;
        },
        deselect() {
          k.tween(this.pos.x, 0, 0.2, (v2) => {
            this.pos.x = v2;
          }, k.easings.easeInOutQuad);
          this.justDeselected = true;
        },
        onSelect(action) {
          return k.onUpdate(() => {
            if (this.justSelected) {
              action(this.songData);
              this.justSelected = false;
            }
          });
        },
        onDeselect(action) {
          return k.onUpdate(() => {
            if (this.justDeselected) {
              action(this.songData);
              this.justDeselected = false;
            }
          });
        }
      }
    ]);
    songBox.add([
      k.pos(),
      k.rect(songBoxWidth, songBoxHeight),
      k.color(k.Color.fromHex("#873e84")),
      k.opacity(0.5)
    ]);
    songBox.add([
      k.pos(10, 10),
      k.text(songData.title, { size: 20 })
    ]);
    songBox.add([
      k.pos(10, 30),
      k.text(songData.subtitle, { size: 15 })
    ]);
    const hi2 = songBox.add([
      k.pos(songBoxWidth - 10, 70),
      k.text("000000", { size: 20 }),
      k.anchor("topright")
    ]);
    for (let i = 0; i < songData.courses[0].difficulty; i++) {
      songBox.add([
        k.pos(10 + 20 * i, 70),
        k.sprite("starui")
      ]);
    }
    const playData = gameData.getPlayData(
      songData.title,
      songData.courses[0].difficulty
    );
    if (playData.highScore === void 0)
      playData.highScore = 0;
    hi2.text = playData.highScore.toString().padStart(6, "0");
    return songBox;
  };

  // src/scenes/scene_song_selection.ts
  k.scene("song_selection", (sceneData) => {
    const sceneState = new SceneState(
      "song_selection",
      () => ({ selectedSong: linearSelector.selectedOption })
    );
    const linearSelector = k.add(linearSelectorObj());
    const songs = gameData.songs.sort(
      (a2, b) => a2.courses[0].difficulty - b.courses[0].difficulty
    );
    linearSelector.menuObjects = songs.map((songData) => songData.title);
    linearSelector.selectedOption = sceneData.selectedSong || 0;
    let demoSongVolume = 0;
    let demoSong = null;
    k.add(createBackground({ color: "#ee8fcb" }));
    k.add(createSprite({
      sprite: "logo",
      pos: k.vec2(k.center())
    }));
    songs.forEach((songData, i) => {
      const songBox = complexAdd(songBoxObj(songData), null, [
        k.pos(0, 80 + i * (100 + 20))
      ]);
      songBox.onSelect((songData2) => {
        sceneState.setBackgroundMusic(songData2.sound, {
          loop: true,
          volume: 0.5,
          seek: songData2.demoStart
        });
      });
    });
    linearSelector.onChange((newSelection, oldSelection) => {
      k.get("song")[oldSelection].deselect();
      k.get("song")[newSelection].select();
    });
    linearSelector.onSelect(() => {
      sceneState.changeScene(
        "game",
        songs[linearSelector.selectedOption]
      );
    });
    k.onUpdate(() => {
      if (k.isKeyPressed("m")) {
        gameData.setSetting("demoMusic", !gameData.settings.demoMusic);
      }
      demoSongVolume = gameData.settings.demoMusic ? 0.5 : 0;
      if (demoSong?.volume)
        demoSong.volume = demoSongVolume;
    });
    k.onKeyPress(".", () => {
      sceneState.changeScene("editor", songs[linearSelector.selectedOption]);
    });
    k.get("song")[linearSelector.selectedOption].select();
  });

  // src/objects/play/obj_measure_bars.ts
  var BAR_SIZES = {
    "measure": {
      width: 3,
      height: 200,
      color: k.BLUE
    },
    "beat": {
      width: 3,
      height: 100,
      color: k.WHITE
    }
  };
  var addBars = (scrollSpeed, isMeasure) => {
    const type = isMeasure ? "measure" : "beat";
    const addBar = (dir, pos, invierted) => {
      const originalWidth = BAR_SIZES[type].width;
      const originalHeight = BAR_SIZES[type].height;
      const w = invierted ? originalHeight : originalWidth;
      const h = invierted ? originalWidth : originalHeight;
      const bar = k.add([
        k.pos(pos),
        k.rect(w, h, {
          radius: 6
        }),
        k.move(dir, NOTES_SPEED * scrollSpeed),
        k.anchor("center"),
        k.color(BAR_SIZES[type].color)
      ]);
      bar.onUpdate(() => {
        if (k.center().dist(bar.pos) < 100)
          bar.destroy();
      });
    };
    addBar(k.RIGHT, k.vec2(0, k.center().y));
    addBar(k.LEFT, k.vec2(k.width(), k.center().y));
    addBar(k.DOWN, k.vec2(k.center().x, 0), true);
  };

  // src/systems/charting.ts
  var timeForHit = () => {
    return (k.width() / 2 - HITPOINT_DISTANCE) / (NOTES_SPEED * DEF_SCROLL_SPEED);
  };
  var MusicManager = class {
    _events = new k.KEventHandler();
    _startSongWait;
    _startNotesWait;
    _ended = false;
    /** Current time in miliseconds */
    _curTime = 0;
    _curBeat = 0;
    _curMeasure = 0;
    song;
    currentMeasure = 0;
    constructor(song) {
      this.song = song;
    }
    set currentBeat(beat) {
    }
    /**
     * When song stars
     */
    onStartMusic(action) {
      this._events.on("start_song", action);
    }
    /**
     * When notes start appearing
     */
    onStartNotes(action) {
      this._events.on("start_notes", action);
    }
    /**
     * When a new measure time starts
     */
    onMeasure(action) {
      this._events.on("measure", action);
    }
    /**
     * When a new beat starts
     */
    onBeat(action) {
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
        return 6e4 * measure * 4 / bpm;
      };
      const msPerBeat = () => {
        return 6e4 / bpm;
      };
      this._startSongWait = k.wait(musicOffset + timeForHit(), () => {
        this._events.trigger("start_song");
      });
      this._startNotesWait = k.wait(notesOffset, () => {
        this._events.trigger("start_notes");
        let lineIndex = 0;
        const nextMeasure = () => {
          let measureNotes = [];
          let measureEnded = false;
          this._events.trigger(
            "measure",
            this._curMeasure,
            msPerMeasure()
          );
          const executeCommands = () => {
            const cmd = chartCommands[lineIndex];
            if (isStartCmd(cmd)) {
              measureEnded = true;
            }
            if (isNoteSequence2(cmd)) {
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
          if (this._ended)
            return;
          this._curTime += k.dt() * 1e3;
          if (this._curTime >= msPerBeat() * this._curBeat) {
            nextBeat();
          }
          if (this._curTime >= msPerMeasure() * this._curMeasure) {
            nextMeasure();
          }
        });
      });
    }
  };
  function isStartCmd(cmd) {
    return cmd.commandType === "START";
  }
  function isBPMChangeCmd(cmd) {
    return cmd.commandType === "BPMCHANGE";
  }
  function isEndCmd(cmd) {
    return cmd.commandType === "END";
  }
  function isNoteSequence2(cmd) {
    return cmd.commandType === "__NOTESEQUENCE";
  }

  // src/scenes/scene_editor.ts
  k.scene("editor", (sceneData, songData) => {
    const sceneState = new SceneState("editor", () => ({}));
    const musicManager = new MusicManager(songData);
    musicManager.start();
    k.add([
      k.rect(k.width(), k.height()),
      k.color("#ee8fcb")
    ]);
    const noteHitPoints = k.add([
      k.pos(k.center()),
      k.anchor("center")
    ]);
    k.add(makePlayer());
    noteHitPoints.add(hitPointObj(k.vec2(-HITPOINT_DISTANCE, 0)));
    noteHitPoints.add(hitPointObj(k.vec2(0, -HITPOINT_DISTANCE)));
    noteHitPoints.add(hitPointObj(k.vec2(HITPOINT_DISTANCE, 0)));
    let isPlaying = false;
    const toggleSongStatus = (paused) => {
      sceneState.backgroundMusic.paused = paused ?? !isPlaying;
    };
    k.onKeyPress("enter", () => {
      isPlaying = !isPlaying;
    });
    musicManager.onStartMusic(() => {
      sceneState.setBackgroundMusic(songData.sound);
    });
    musicManager.onMeasure((m, nextMeasure) => {
      addBars(1, true);
    });
    musicManager.onBeat(() => {
      addBars(1);
    });
    k.onKeyPress("escape", () => {
      sceneState.changeScene("song_selection");
    });
  });

  // src/main.ts
  k.onLoad(() => {
    k.go("click");
  });
})();
