System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameUILayers, GameUILayerNames;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a77a1B4SKRKLLPJCc2S/oq0", "GameUILayers", undefined);

      _export("GameUILayers", GameUILayers = /*#__PURE__*/function (GameUILayers) {
        GameUILayers[GameUILayers["GAME"] = 0] = "GAME";
        GameUILayers[GameUILayers["JOY_STICK"] = 1] = "JOY_STICK";
        GameUILayers[GameUILayers["HUD"] = 2] = "HUD";
        GameUILayers[GameUILayers["POPUP"] = 3] = "POPUP";
        GameUILayers[GameUILayers["POPUP1"] = 4] = "POPUP1";
        GameUILayers[GameUILayers["POPUP2"] = 5] = "POPUP2";
        GameUILayers[GameUILayers["ALERT"] = 6] = "ALERT";
        GameUILayers[GameUILayers["NOTICE"] = 7] = "NOTICE";
        GameUILayers[GameUILayers["LOADING"] = 8] = "LOADING";
        GameUILayers[GameUILayers["OVERLAY"] = 9] = "OVERLAY";
        GameUILayers[GameUILayers["NUM"] = 10] = "NUM";
        return GameUILayers;
      }(GameUILayers || {}));

      _export("GameUILayerNames", GameUILayerNames = ['game', 'joy_stick', 'hud', 'popup', 'popup1', 'popup2', 'alert', 'notice', 'loading', 'overlay']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dbac24ef4e67a3ff1bd851bac75ca526b7c509ec.js.map