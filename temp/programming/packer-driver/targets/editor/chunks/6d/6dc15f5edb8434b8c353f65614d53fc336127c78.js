System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, Tableitem_config, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "db://assets/core_tgx/base/utils/JsonUtil", _context.meta, extras);
  }

  _export("Tableitem_config", void 0);

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

      _cclegacy._RF.push({}, "4b642l/aUdL0JZmul2+vupu", "Tableitem_config", undefined);

      _export("Tableitem_config", Tableitem_config = class Tableitem_config {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          const table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(Tableitem_config.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 备注 */
        get name() {
          return this.data.name;
        }
        /** 模型 */


        get model() {
          return this.data.model;
        }
        /** 是否移动 */


        get move() {
          return this.data.move;
        }
        /** 移动速度 */


        get speed() {
          return this.data.speed;
        }
        /** 移动概率 */


        get move_judge() {
          return this.data.move_judge;
        }
        /** 行为周期 */


        get time() {
          return this.data.time;
        }
        /** 是否再生 */


        get regeneration() {
          return this.data.regeneration;
        }
        /** 初始生成数量 */


        get number_basic() {
          return this.data.number_basic;
        }
        /** 再生周期 */


        get regeneration_time() {
          return this.data.regeneration_time;
        }
        /** 再生数量 */


        get regeneration_number() {
          return this.data.regeneration_number;
        }
        /** 数量上限 */


        get limit() {
          return this.data.limit;
        }
        /** 血量 */


        get hp() {
          return this.data.hp;
        }
        /** 经验 */


        get exp() {
          return this.data.exp;
        }

      });

      Tableitem_config.TableName = "item_config";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6dc15f5edb8434b8c353f65614d53fc336127c78.js.map