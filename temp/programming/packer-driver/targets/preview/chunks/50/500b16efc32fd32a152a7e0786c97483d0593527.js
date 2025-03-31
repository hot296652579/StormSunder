System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, Tabledevelop_config, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "db://assets/core_tgx/base/utils/JsonUtil", _context.meta, extras);
  }

  _export("Tabledevelop_config", void 0);

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

      _cclegacy._RF.push({}, "f9120yR32xEH7PnvBdOX1YR", "Tabledevelop_config", undefined);

      _export("Tabledevelop_config", Tabledevelop_config = class Tabledevelop_config {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(Tabledevelop_config.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 属性类型 */
        get property_type() {
          return this.data.property_type;
        }
        /** 属性基础值 */


        get base() {
          return this.data.base;
        }
        /** 属性提升值 */


        get up_value() {
          return this.data.up_value;
        }
        /** 升级基础货币 */


        get base_currency() {
          return this.data.base_currency;
        }
        /** 货币增长 */


        get money_growth() {
          return this.data.money_growth;
        }

      });

      Tabledevelop_config.TableName = "develop_config";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=500b16efc32fd32a152a7e0786c97483d0593527.js.map