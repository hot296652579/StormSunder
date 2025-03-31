System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tgxLayout_UITips, tgxModuleContext, tgxUITips, GameUILayers, UITips_Impl, _crd;

  function _reportPossibleCrUseOftgxLayout_UITips(extras) {
    _reporterNs.report("tgxLayout_UITips", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxModuleContext(extras) {
    _reporterNs.report("tgxModuleContext", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxUITips(extras) {
    _reporterNs.report("tgxUITips", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUILayers(extras) {
    _reporterNs.report("GameUILayers", "../../scripts/GameUILayers", _context.meta, extras);
  }

  _export("UITips_Impl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tgxLayout_UITips = _unresolved_2.tgxLayout_UITips;
      tgxModuleContext = _unresolved_2.tgxModuleContext;
      tgxUITips = _unresolved_2.tgxUITips;
    }, function (_unresolved_3) {
      GameUILayers = _unresolved_3.GameUILayers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df10bZjpyJJI4x5vy6DWA64", "UI_Tips_Impl", undefined);

      _export("UITips_Impl", UITips_Impl = class UITips_Impl extends (_crd && tgxUITips === void 0 ? (_reportPossibleCrUseOftgxUITips({
        error: Error()
      }), tgxUITips) : tgxUITips) {
        constructor() {
          super('ui_tips/UI_Tips', (_crd && GameUILayers === void 0 ? (_reportPossibleCrUseOfGameUILayers({
            error: Error()
          }), GameUILayers) : GameUILayers).ALERT, _crd && tgxLayout_UITips === void 0 ? (_reportPossibleCrUseOftgxLayout_UITips({
            error: Error()
          }), tgxLayout_UITips) : tgxLayout_UITips);
        }

      });

      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachImplClass(_crd && tgxUITips === void 0 ? (_reportPossibleCrUseOftgxUITips({
        error: Error()
      }), tgxUITips) : tgxUITips, UITips_Impl);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1767a8082c84e2ccebe71737565a613b624647d.js.map