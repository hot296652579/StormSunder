System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, Tableai_config, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "db://assets/core_tgx/base/utils/JsonUtil", _context.meta, extras);
  }

  _export("Tableai_config", void 0);

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

      _cclegacy._RF.push({}, "fe1762BmtRFJqGT0SswtZEd", "Tableai_config", undefined);

      _export("Tableai_config", Tableai_config = class Tableai_config {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          const table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(Tableai_config.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 备注 */
        get text() {
          return this.data.text;
        }
        /** 检测半径 */


        get range() {
          return this.data.range;
        }
        /** 移动概率 */


        get move_judge() {
          return this.data.move_judge;
        }
        /** 移动周期 */


        get move_time() {
          return this.data.move_time;
        }
        /** 逃跑周期 */


        get escape_time() {
          return this.data.escape_time;
        }
        /** 追击概率 */


        get pursuit_1() {
          return this.data.pursuit_1;
        }
        /** 二次判读追击概率 */


        get pursuit_2() {
          return this.data.pursuit_2;
        }
        /** 追击周期 */


        get pursuit_time() {
          return this.data.pursuit_time;
        }
        /** 匹配权重 */


        get weight() {
          return this.data.weight;
        }

      });

      Tableai_config.TableName = "ai_config";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28558d75b7fae63dfdc8c3601fe4cb5585b61f11.js.map