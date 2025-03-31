System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, Tablecolor_config, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "db://assets/core_tgx/base/utils/JsonUtil", _context.meta, extras);
  }

  _export("Tablecolor_config", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      JsonUtil = _unresolved_2.JsonUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87a5bC+yN9Kk74q3kaIk8vd", "Tablecolor_config", undefined);

      _export("Tablecolor_config", Tablecolor_config = class Tablecolor_config {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          const table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(Tablecolor_config.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 色号 */
        get colour() {
          return this.data.colour;
        }
        /** 颜色 */


        get color() {
          return this.data.color;
        }

      });

      Tablecolor_config.TableName = "color_config";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05f4d8854e10eddd1a87b383d2d4bab1aeea3d38.js.map