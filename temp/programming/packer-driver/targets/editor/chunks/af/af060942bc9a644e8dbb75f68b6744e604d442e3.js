System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, Tablename_config, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "db://assets/core_tgx/base/utils/JsonUtil", _context.meta, extras);
  }

  _export("Tablename_config", void 0);

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

      _cclegacy._RF.push({}, "3984ePynRNIVpkQcNFMEACn", "Tablename_config", undefined);

      _export("Tablename_config", Tablename_config = class Tablename_config {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          const table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(Tablename_config.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 名字前缀 */
        get text_1() {
          return this.data.text_1;
        }
        /** 名字后缀 */


        get text_2() {
          return this.data.text_2;
        }

      });

      Tablename_config.TableName = "name_config";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af060942bc9a644e8dbb75f68b6744e604d442e3.js.map