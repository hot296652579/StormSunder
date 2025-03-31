System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, Tablemusic_config, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "db://assets/core_tgx/base/utils/JsonUtil", _context.meta, extras);
  }

  _export("Tablemusic_config", void 0);

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

      _cclegacy._RF.push({}, "42fe5+V9kxNv5x2e0SldO8n", "Tablemusic_config", undefined);

      _export("Tablemusic_config", Tablemusic_config = class Tablemusic_config {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(Tablemusic_config.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 音效文件ID */
        get name() {
          return this.data.name;
        }
        /** 音效的类型 */


        get type() {
          return this.data.type;
        }
        /** 音效内置cd */


        get cd() {
          return this.data.cd;
        }
        /** 音效用途说明 */


        get content() {
          return this.data.content;
        }

      });

      Tablemusic_config.TableName = "music_config";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3420ff117a4dd44f1f15428b354fdfe1b1d152bd.js.map