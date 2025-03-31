System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tgxAudioMgr, ModuleDef, MusicConfigModel, StormSunderAudioMgr, _crd, BundleName;

  function _reportPossibleCrUseOftgxAudioMgr(extras) {
    _reporterNs.report("tgxAudioMgr", "../../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleDef(extras) {
    _reporterNs.report("ModuleDef", "../../../scripts/ModuleDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicConfigModel(extras) {
    _reporterNs.report("MusicConfigModel", "../Model/MusicConfigModel", _context.meta, extras);
  }

  _export("StormSunderAudioMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      tgxAudioMgr = _unresolved_2.tgxAudioMgr;
    }, function (_unresolved_3) {
      ModuleDef = _unresolved_3.ModuleDef;
    }, function (_unresolved_4) {
      MusicConfigModel = _unresolved_4.MusicConfigModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5264cZTq+JPjLUTJw4CuVFd", "StormSunderAudioMgr", undefined);

      __checkObsolete__(['AudioClip']);

      BundleName = (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
        error: Error()
      }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER;

      _export("StormSunderAudioMgr", StormSunderAudioMgr = class StormSunderAudioMgr {
        static initilize() {
          this._musicConfigModel = new (_crd && MusicConfigModel === void 0 ? (_reportPossibleCrUseOfMusicConfigModel({
            error: Error()
          }), MusicConfigModel) : MusicConfigModel)();
        }
        /**
        * @en
        * play short audio, such as strikes,explosions
        * @zh
        * 播放短音频,比如 打击音效，爆炸音效等
        * @param sound clip or url for the audio
        * @param volume 
        */


        static playOneShot(sound, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          (_crd && tgxAudioMgr === void 0 ? (_reportPossibleCrUseOftgxAudioMgr({
            error: Error()
          }), tgxAudioMgr) : tgxAudioMgr).inst.playOneShot(sound, volume, BundleName);
        }
        /**
         * @en
         * play long audio, such as the bg music
         * @zh
         * 播放长音频，比如 背景音乐
         * @param sound clip or url for the sound
         * @param volume 
         */


        static play(sound, volume) {
          if (volume === void 0) {
            volume = 1.0;
          }

          (_crd && tgxAudioMgr === void 0 ? (_reportPossibleCrUseOftgxAudioMgr({
            error: Error()
          }), tgxAudioMgr) : tgxAudioMgr).inst.play(sound, volume, BundleName);
        }

        static getMusicIdName(id) {
          return 'Audio/' + this._musicConfigModel.getNameById(id);
        }
        /**
        * stop the audio play
        */


        static stop() {
          (_crd && tgxAudioMgr === void 0 ? (_reportPossibleCrUseOftgxAudioMgr({
            error: Error()
          }), tgxAudioMgr) : tgxAudioMgr).inst.stop();
        }
        /**
         * pause the audio play
         */


        static pause() {
          (_crd && tgxAudioMgr === void 0 ? (_reportPossibleCrUseOftgxAudioMgr({
            error: Error()
          }), tgxAudioMgr) : tgxAudioMgr).inst.pause();
        }
        /**
         * resume the audio play
         */


        static resume() {
          (_crd && tgxAudioMgr === void 0 ? (_reportPossibleCrUseOftgxAudioMgr({
            error: Error()
          }), tgxAudioMgr) : tgxAudioMgr).inst.audioSource.play();
        }

      });

      StormSunderAudioMgr._musicConfigModel = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac0122c12e4e8990037fb2038630be4035270d98.js.map