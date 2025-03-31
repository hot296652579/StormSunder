System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tgxLayout_UIAlert, tgxModuleContext, tgxUIAlert, GameUILayers, UIAlert_Impl, _crd;

  function _reportPossibleCrUseOftgxLayout_UIAlert(extras) {
    _reporterNs.report("tgxLayout_UIAlert", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxModuleContext(extras) {
    _reporterNs.report("tgxModuleContext", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxUIAlert(extras) {
    _reporterNs.report("tgxUIAlert", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUILayers(extras) {
    _reporterNs.report("GameUILayers", "../../scripts/GameUILayers", _context.meta, extras);
  }

  _export("UIAlert_Impl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tgxLayout_UIAlert = _unresolved_2.tgxLayout_UIAlert;
      tgxModuleContext = _unresolved_2.tgxModuleContext;
      tgxUIAlert = _unresolved_2.tgxUIAlert;
    }, function (_unresolved_3) {
      GameUILayers = _unresolved_3.GameUILayers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "279a6kba+dDnLuXBr6OXobk", "UI_Alert_Impl", undefined);

      _export("UIAlert_Impl", UIAlert_Impl = class UIAlert_Impl extends (_crd && tgxUIAlert === void 0 ? (_reportPossibleCrUseOftgxUIAlert({
        error: Error()
      }), tgxUIAlert) : tgxUIAlert) {
        constructor() {
          super('ui_alert/UI_Alert', (_crd && GameUILayers === void 0 ? (_reportPossibleCrUseOfGameUILayers({
            error: Error()
          }), GameUILayers) : GameUILayers).ALERT, _crd && tgxLayout_UIAlert === void 0 ? (_reportPossibleCrUseOftgxLayout_UIAlert({
            error: Error()
          }), tgxLayout_UIAlert) : tgxLayout_UIAlert);
        }

      });

      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachImplClass(_crd && tgxUIAlert === void 0 ? (_reportPossibleCrUseOftgxUIAlert({
        error: Error()
      }), tgxUIAlert) : tgxUIAlert, UIAlert_Impl);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53825795ee6cc280eb40b3ccd01c727979d76405.js.map