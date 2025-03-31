System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tgxModuleContext, GameUILayers, UI_AboutMe, Layout_AboutMe, UI_AboutMe_Impl, _crd;

  function _reportPossibleCrUseOftgxModuleContext(extras) {
    _reporterNs.report("tgxModuleContext", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUILayers(extras) {
    _reporterNs.report("GameUILayers", "../../scripts/GameUILayers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_AboutMe(extras) {
    _reporterNs.report("UI_AboutMe", "../../scripts/UIDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayout_AboutMe(extras) {
    _reporterNs.report("Layout_AboutMe", "./Layout_AboutMe", _context.meta, extras);
  }

  _export("UI_AboutMe_Impl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tgxModuleContext = _unresolved_2.tgxModuleContext;
    }, function (_unresolved_3) {
      GameUILayers = _unresolved_3.GameUILayers;
    }, function (_unresolved_4) {
      UI_AboutMe = _unresolved_4.UI_AboutMe;
    }, function (_unresolved_5) {
      Layout_AboutMe = _unresolved_5.Layout_AboutMe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9113zWxwlLxpIz2ENLIXZG", "UI_AboutMe_Impl", undefined);

      _export("UI_AboutMe_Impl", UI_AboutMe_Impl = class UI_AboutMe_Impl extends (_crd && UI_AboutMe === void 0 ? (_reportPossibleCrUseOfUI_AboutMe({
        error: Error()
      }), UI_AboutMe) : UI_AboutMe) {
        constructor() {
          super('ui_about/UI_AboutMe', (_crd && GameUILayers === void 0 ? (_reportPossibleCrUseOfGameUILayers({
            error: Error()
          }), GameUILayers) : GameUILayers).POPUP, _crd && Layout_AboutMe === void 0 ? (_reportPossibleCrUseOfLayout_AboutMe({
            error: Error()
          }), Layout_AboutMe) : Layout_AboutMe);
        }

        getRes() {
          return [];
        }

        onCreated() {
          var layout = this.layout;
          this.onButtonEvent(layout.btnClose, () => {
            this.hide();
          });
        }

      });

      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachImplClass(_crd && UI_AboutMe === void 0 ? (_reportPossibleCrUseOfUI_AboutMe({
        error: Error()
      }), UI_AboutMe) : UI_AboutMe, UI_AboutMe_Impl);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74ae8df20e6c926faf3947600aa518e3d3d784a4.js.map