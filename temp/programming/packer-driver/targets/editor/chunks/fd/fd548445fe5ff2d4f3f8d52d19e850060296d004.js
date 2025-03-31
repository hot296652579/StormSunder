System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, Tablemain_config, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "db://assets/core_tgx/base/utils/JsonUtil", _context.meta, extras);
  }

  _export("Tablemain_config", void 0);

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

      _cclegacy._RF.push({}, "9ba81WileJNxbHdMx0TjnpV", "Tablemain_config", undefined);

      _export("Tablemain_config", Tablemain_config = class Tablemain_config {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          const table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(Tablemain_config.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 参数 */
        get param() {
          return this.data.param;
        }
        /** 数据说明 */


        get content() {
          return this.data.content;
        }

      });

      Tablemain_config.TableName = "main_config";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd548445fe5ff2d4f3f8d52d19e850060296d004.js.map