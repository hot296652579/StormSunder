System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SafeJSON, _crd;

  _export("SafeJSON", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2aad8l/WzBPTIhr1W6SB9Pt", "SafeJSON", undefined);

      /**
       * @en call JSON mthods safely.
       * @zh 用于安全操作JSON相关函数
       * */
      _export("SafeJSON", SafeJSON = class SafeJSON {
        static parse(text, reciver) {
          try {
            return JSON.parse(text, reciver);
          } catch (error) {
            console.log(error);
            return null;
          }
        }

        static stringify(value, replacer, space) {
          try {
            return JSON.stringify(value, replacer, space);
          } catch (error) {
            return null;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4cfc136a193229b7fda8f7a91f313bd990dc202c.js.map