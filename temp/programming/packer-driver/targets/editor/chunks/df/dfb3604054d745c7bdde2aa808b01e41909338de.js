System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, Tablemap_config, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "db://assets/core_tgx/base/utils/JsonUtil", _context.meta, extras);
  }

  _export("Tablemap_config", void 0);

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

      _cclegacy._RF.push({}, "f85ecRPtZ9M15FMJLP9yQX6", "Tablemap_config", undefined);

      _export("Tablemap_config", Tablemap_config = class Tablemap_config {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          const table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(Tablemap_config.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 备注信息 */
        get text() {
          return this.data.text;
        }
        /** 游戏时长 */


        get time() {
          return this.data.time;
        }
        /** 场景文件 */


        get name() {
          return this.data.name;
        }
        /** 可生成物编号 */


        get item() {
          return this.data.item;
        }
        /** 玩家数 */


        get number() {
          return this.data.number;
        }

      });

      Tablemap_config.TableName = "map_config";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfb3604054d745c7bdde2aa808b01e41909338de.js.map