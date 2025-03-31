System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, profiler, Layout_UI_HUD, tgxUIMgr, tgxUIController, GameUILayers, UI_AboutMe, UI_HUD, _crd;

  function _reportPossibleCrUseOfLayout_UI_HUD(extras) {
    _reporterNs.report("Layout_UI_HUD", "./Layout_HUD", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxUIMgr(extras) {
    _reporterNs.report("tgxUIMgr", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxUIController(extras) {
    _reporterNs.report("tgxUIController", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUILayers(extras) {
    _reporterNs.report("GameUILayers", "../../scripts/GameUILayers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_AboutMe(extras) {
    _reporterNs.report("UI_AboutMe", "../../scripts/UIDef", _context.meta, extras);
  }

  _export("UI_HUD", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      profiler = _cc.profiler;
    }, function (_unresolved_2) {
      Layout_UI_HUD = _unresolved_2.Layout_UI_HUD;
    }, function (_unresolved_3) {
      tgxUIMgr = _unresolved_3.tgxUIMgr;
      tgxUIController = _unresolved_3.tgxUIController;
    }, function (_unresolved_4) {
      GameUILayers = _unresolved_4.GameUILayers;
    }, function (_unresolved_5) {
      UI_AboutMe = _unresolved_5.UI_AboutMe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf355u7sSFJQLZxhgxMsXJq", "UI_HUD", undefined);

      __checkObsolete__(['profiler']);

      _export("UI_HUD", UI_HUD = class UI_HUD extends (_crd && tgxUIController === void 0 ? (_reportPossibleCrUseOftgxUIController({
        error: Error()
      }), tgxUIController) : tgxUIController) {
        constructor() {
          super('ui_hud/UI_HUD', (_crd && GameUILayers === void 0 ? (_reportPossibleCrUseOfGameUILayers({
            error: Error()
          }), GameUILayers) : GameUILayers).HUD, _crd && Layout_UI_HUD === void 0 ? (_reportPossibleCrUseOfLayout_UI_HUD({
            error: Error()
          }), Layout_UI_HUD) : Layout_UI_HUD);
        }

        getRes() {
          return [];
        } //子类的所有操作，需要在这个函数之后。


        onCreated() {
          var layout = this.layout;
          this.onButtonEvent(layout.btnScenes, this.onSceneChange, this);
          this.onButtonEvent(layout.btnToggleStats, this.onToggleStats, this);
          this.onButtonEvent(layout.btnAbout, () => {
            (_crd && tgxUIMgr === void 0 ? (_reportPossibleCrUseOftgxUIMgr({
              error: Error()
            }), tgxUIMgr) : tgxUIMgr).inst.showUI(_crd && UI_AboutMe === void 0 ? (_reportPossibleCrUseOfUI_AboutMe({
              error: Error()
            }), UI_AboutMe) : UI_AboutMe);
          });
        }

        onToggleStats() {
          if (profiler.isShowingStats()) {
            profiler.hideStats();
          } else {
            profiler.showStats();
          }
        }

        onSceneChange() {// tgxUIMgr.inst.showUI(UI_DemoList, (ui: UI_DemoList) => {
          //     ui.showCloseBtn();
          // });
        } //销毁


        onDispose() {} //


        onUpdate() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41a078203103aa34df4a9ce8a044efd97f6929de.js.map