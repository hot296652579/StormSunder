System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Tablemain_config, MainConfigModel, _crd;

  function _reportPossibleCrUseOfTablemain_config(extras) {
    _reporterNs.report("Tablemain_config", "../../../module_basic/table/Tablemain_config", _context.meta, extras);
  }

  _export("MainConfigModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Tablemain_config = _unresolved_2.Tablemain_config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5798q2Nw5FoqeWGYtLDd+C", "MainConfigModel", undefined);

      /**main 配置表模型 */
      _export("MainConfigModel", MainConfigModel = class MainConfigModel {
        constructor() {
          this.config = null;
          this.config = new (_crd && Tablemain_config === void 0 ? (_reportPossibleCrUseOfTablemain_config({
            error: Error()
          }), Tablemain_config) : Tablemain_config)();
        }

        getPramById(id) {
          this.config.init(id);
          var param = this.config.param;
          return param;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=961b8094bb6fa6ccb4eccd1ca9783fb9793d82dd.js.map