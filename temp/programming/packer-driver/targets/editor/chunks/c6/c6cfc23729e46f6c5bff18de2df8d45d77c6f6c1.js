System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, UILayers, UILayerNames;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c15e5F/JCxBY7zW+STv7O08", "UILayers", undefined);

      /****
       * @en ui layers.each project can modify it based on needs.
       * @zh UI层级划分,
       * */
      _export("UILayers", UILayers = /*#__PURE__*/function (UILayers) {
        UILayers[UILayers["GAME"] = 0] = "GAME";
        UILayers[UILayers["JOY_STICK"] = 1] = "JOY_STICK";
        UILayers[UILayers["HUD"] = 2] = "HUD";
        UILayers[UILayers["POPUP"] = 3] = "POPUP";
        UILayers[UILayers["POPUP1"] = 4] = "POPUP1";
        UILayers[UILayers["POPUP2"] = 5] = "POPUP2";
        UILayers[UILayers["ALERT"] = 6] = "ALERT";
        UILayers[UILayers["NOTICE"] = 7] = "NOTICE";
        UILayers[UILayers["LOADING"] = 8] = "LOADING";
        UILayers[UILayers["OVERLAY"] = 9] = "OVERLAY";
        UILayers[UILayers["NUM"] = 10] = "NUM";
        return UILayers;
      }(UILayers || {}));

      _export("UILayerNames", UILayerNames = ['game', 'joy_stick', 'hud', 'popup', 'popup1', 'popup2', 'alert', 'notice', 'loading', 'overlay']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6cfc23729e46f6c5bff18de2df8d45d77c6f6c1.js.map