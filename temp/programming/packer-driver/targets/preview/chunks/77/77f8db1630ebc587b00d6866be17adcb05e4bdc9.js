System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tgxModuleContext, tgxUIController, ModuleDef, UI_AboutMe, UI_Setting, UI_BattleResult, UI_TopInfo, UI_ExtraTime, UI_Magnetic, _crd;

  function _reportPossibleCrUseOftgxModuleContext(extras) {
    _reporterNs.report("tgxModuleContext", "../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxUIController(extras) {
    _reporterNs.report("tgxUIController", "../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleDef(extras) {
    _reporterNs.report("ModuleDef", "./ModuleDef", _context.meta, extras);
  }

  _export({
    UI_AboutMe: void 0,
    UI_Setting: void 0,
    UI_BattleResult: void 0,
    UI_TopInfo: void 0,
    UI_ExtraTime: void 0,
    UI_Magnetic: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tgxModuleContext = _unresolved_2.tgxModuleContext;
      tgxUIController = _unresolved_2.tgxUIController;
    }, function (_unresolved_3) {
      ModuleDef = _unresolved_3.ModuleDef;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2d1b47HeBlMUoHY2m4BwD9Z", "UIDef", undefined);

      //define UI classes which are not in the basic bundle but be called by other bundles.
      _export("UI_AboutMe", UI_AboutMe = class UI_AboutMe extends (_crd && tgxUIController === void 0 ? (_reportPossibleCrUseOftgxUIController({
        error: Error()
      }), tgxUIController) : tgxUIController) {});

      _export("UI_Setting", UI_Setting = class UI_Setting extends (_crd && tgxUIController === void 0 ? (_reportPossibleCrUseOftgxUIController({
        error: Error()
      }), tgxUIController) : tgxUIController) {});

      _export("UI_BattleResult", UI_BattleResult = class UI_BattleResult extends (_crd && tgxUIController === void 0 ? (_reportPossibleCrUseOftgxUIController({
        error: Error()
      }), tgxUIController) : tgxUIController) {});

      _export("UI_TopInfo", UI_TopInfo = class UI_TopInfo extends (_crd && tgxUIController === void 0 ? (_reportPossibleCrUseOftgxUIController({
        error: Error()
      }), tgxUIController) : tgxUIController) {});

      _export("UI_ExtraTime", UI_ExtraTime = class UI_ExtraTime extends (_crd && tgxUIController === void 0 ? (_reportPossibleCrUseOftgxUIController({
        error: Error()
      }), tgxUIController) : tgxUIController) {});

      _export("UI_Magnetic", UI_Magnetic = class UI_Magnetic extends (_crd && tgxUIController === void 0 ? (_reportPossibleCrUseOftgxUIController({
        error: Error()
      }), tgxUIController) : tgxUIController) {});

      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachModule(UI_AboutMe, (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
        error: Error()
      }), ModuleDef) : ModuleDef).EXTRA);
      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachModule(UI_Setting, (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
        error: Error()
      }), ModuleDef) : ModuleDef).EXTRA);
      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachModule(UI_BattleResult, (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
        error: Error()
      }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER);
      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachModule(UI_TopInfo, (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
        error: Error()
      }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER);
      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachModule(UI_ExtraTime, (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
        error: Error()
      }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER);
      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachModule(UI_Magnetic, (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
        error: Error()
      }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=77f8db1630ebc587b00d6866be17adcb05e4bdc9.js.map