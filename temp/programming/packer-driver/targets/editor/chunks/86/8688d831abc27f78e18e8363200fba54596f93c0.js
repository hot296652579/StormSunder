System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, Tablelevels_config, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "db://assets/core_tgx/base/utils/JsonUtil", _context.meta, extras);
  }

  _export("Tablelevels_config", void 0);

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

      _cclegacy._RF.push({}, "f97f4ZEUa9LVo3RkOWcdrhE", "Tablelevels_config", undefined);

      _export("Tablelevels_config", Tablelevels_config = class Tablelevels_config {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          const table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(Tablelevels_config.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 关卡编号 */
        get level() {
          return this.data.level;
        }
        /** 关卡颜色数 */


        get color() {
          return this.data.color;
        }
        /** 调酒杯数量 */


        get wineglass() {
          return this.data.wineglass;
        }
        /** 调酒杯规则 */


        get wineglass_color() {
          return this.data.wineglass_color;
        }
        /** 原料杯规格刷新率 */


        get measuringcup() {
          return this.data.measuringcup;
        }
        /** 原料杯刷新依据数 */


        get measuringcup_number() {
          return this.data.measuringcup_number;
        }
        /** 原料杯颜色上限 */


        get measuringcup_color() {
          return this.data.measuringcup_color;
        }
        /** 问号水刷新率 */


        get query_probability() {
          return this.data.query_probability;
        }
        /** 问号水上限 */


        get query_ceiling() {
          return this.data.query_ceiling;
        }
        /** 冰冻水刷新率 */


        get ice_probability() {
          return this.data.ice_probability;
        }
        /** 冰冻水上限 */


        get ice_ceiling() {
          return this.data.ice_ceiling;
        }
        /** 冰冻水极限 */


        get ice_thelimit() {
          return this.data.ice_thelimit;
        }
        /** 万能水刷新率 */


        get change_ceiling() {
          return this.data.change_ceiling;
        }
        /** 万能水上限 */


        get change_thelimit() {
          return this.data.change_thelimit;
        }
        /** 是否参与随机 */


        get random() {
          return this.data.random;
        }

      });

      Tablelevels_config.TableName = "levels_config";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8688d831abc27f78e18e8363200fba54596f93c0.js.map