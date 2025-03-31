System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tgxUIWaiting, tgxLayout_UIWaiting, tgxModuleContext, GameUILayers, UIWaiting_Impl, _crd;

  function _reportPossibleCrUseOftgxUIWaiting(extras) {
    _reporterNs.report("tgxUIWaiting", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxLayout_UIWaiting(extras) {
    _reporterNs.report("tgxLayout_UIWaiting", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxModuleContext(extras) {
    _reporterNs.report("tgxModuleContext", "../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUILayers(extras) {
    _reporterNs.report("GameUILayers", "../../scripts/GameUILayers", _context.meta, extras);
  }

  _export("UIWaiting_Impl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tgxUIWaiting = _unresolved_2.tgxUIWaiting;
      tgxLayout_UIWaiting = _unresolved_2.tgxLayout_UIWaiting;
      tgxModuleContext = _unresolved_2.tgxModuleContext;
    }, function (_unresolved_3) {
      GameUILayers = _unresolved_3.GameUILayers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f225BQCHtD2Z1AvkxeFlyk", "UI_Waiting_Impl", undefined);

      _export("UIWaiting_Impl", UIWaiting_Impl = class UIWaiting_Impl extends (_crd && tgxUIWaiting === void 0 ? (_reportPossibleCrUseOftgxUIWaiting({
        error: Error()
      }), tgxUIWaiting) : tgxUIWaiting) {
        constructor() {
          super('ui_waiting/UI_Waiting', (_crd && GameUILayers === void 0 ? (_reportPossibleCrUseOfGameUILayers({
            error: Error()
          }), GameUILayers) : GameUILayers).LOADING, _crd && tgxLayout_UIWaiting === void 0 ? (_reportPossibleCrUseOftgxLayout_UIWaiting({
            error: Error()
          }), tgxLayout_UIWaiting) : tgxLayout_UIWaiting);
        }

      });

      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachImplClass(_crd && tgxUIWaiting === void 0 ? (_reportPossibleCrUseOftgxUIWaiting({
        error: Error()
      }), tgxUIWaiting) : tgxUIWaiting, UIWaiting_Impl);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b264714b10cc9d9b9a38097394d115a010e3d24.js.map