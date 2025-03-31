System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioMgr, tgxModuleContext, GameUILayers, UI_Setting, Layout_Setting, StormSunderAudioMgr, UI_Setting_Impl, _crd;

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../../core_tgx/base/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxModuleContext(extras) {
    _reporterNs.report("tgxModuleContext", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUILayers(extras) {
    _reporterNs.report("GameUILayers", "../../scripts/GameUILayers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_Setting(extras) {
    _reporterNs.report("UI_Setting", "../../scripts/UIDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayout_Setting(extras) {
    _reporterNs.report("Layout_Setting", "./Layout_Setting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStormSunderAudioMgr(extras) {
    _reporterNs.report("StormSunderAudioMgr", "../../module_storm_sunder/Script/Manager/StormSunderAudioMgr", _context.meta, extras);
  }

  _export("UI_Setting_Impl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      AudioMgr = _unresolved_2.AudioMgr;
    }, function (_unresolved_3) {
      tgxModuleContext = _unresolved_3.tgxModuleContext;
    }, function (_unresolved_4) {
      GameUILayers = _unresolved_4.GameUILayers;
    }, function (_unresolved_5) {
      UI_Setting = _unresolved_5.UI_Setting;
    }, function (_unresolved_6) {
      Layout_Setting = _unresolved_6.Layout_Setting;
    }, function (_unresolved_7) {
      StormSunderAudioMgr = _unresolved_7.StormSunderAudioMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf6207lZAVGO4mPPabXKPX4", "UI_Setting_Impl", undefined);

      __checkObsolete__(['Toggle']);

      _export("UI_Setting_Impl", UI_Setting_Impl = class UI_Setting_Impl extends (_crd && UI_Setting === void 0 ? (_reportPossibleCrUseOfUI_Setting({
        error: Error()
      }), UI_Setting) : UI_Setting) {
        constructor() {
          super('ui_setting/UI_Setting', (_crd && GameUILayers === void 0 ? (_reportPossibleCrUseOfGameUILayers({
            error: Error()
          }), GameUILayers) : GameUILayers).POPUP, _crd && Layout_Setting === void 0 ? (_reportPossibleCrUseOfLayout_Setting({
            error: Error()
          }), Layout_Setting) : Layout_Setting);
        }

        getRes() {
          return [];
        }

        onCreated() {
          var layout = this.layout;
          this.onButtonEvent(layout.btnClose, () => {
            (_crd && StormSunderAudioMgr === void 0 ? (_reportPossibleCrUseOfStormSunderAudioMgr({
              error: Error()
            }), StormSunderAudioMgr) : StormSunderAudioMgr).playOneShot((_crd && StormSunderAudioMgr === void 0 ? (_reportPossibleCrUseOfStormSunderAudioMgr({
              error: Error()
            }), StormSunderAudioMgr) : StormSunderAudioMgr).getMusicIdName(2), 1.0);
            this.hide();
          });
          this.initilizeUI();
        }

        initilizeUI() {
          var layout = this.layout;
          var {
            musicToggle,
            soundToggle
          } = layout;
          musicToggle.node.on('toggle', this.musicSwitch, this);
          soundToggle.node.on('toggle', this.soundSwitch, this);
          var {
            bgMusicEnabled,
            soundEffectsEnabled
          } = (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst;
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.toggleBgMusic(bgMusicEnabled);
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.toggleBgMusic(soundEffectsEnabled);
          musicToggle.isChecked = bgMusicEnabled;
          soundToggle.isChecked = soundEffectsEnabled;
        }

        musicSwitch(toggle) {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.toggleBgMusic(toggle.isChecked);
        }

        soundSwitch(toggle) {
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.toggleSoundEffects(toggle.isChecked);
        }

      });

      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachImplClass(_crd && UI_Setting === void 0 ? (_reportPossibleCrUseOfUI_Setting({
        error: Error()
      }), UI_Setting) : UI_Setting, UI_Setting_Impl);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b0ff0e4c634536e2ab3abfdd7af59a26e888010.js.map