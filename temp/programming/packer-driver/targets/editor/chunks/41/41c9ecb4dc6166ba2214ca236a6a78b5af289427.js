System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Tableai_config, AiConfigModel, _crd;

  function _reportPossibleCrUseOfTableai_config(extras) {
    _reporterNs.report("Tableai_config", "db://assets/module_basic/table/Tableai_config", _context.meta, extras);
  }

  _export("AiConfigModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Tableai_config = _unresolved_2.Tableai_config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8bccc+iclpDuZDxYBo0OqXi", "AiConfigModel", undefined);

      /**
       * AI配置数据
      */
      _export("AiConfigModel", AiConfigModel = class AiConfigModel {
        constructor() {}

        getAIConfigById(id) {
          const config = new (_crd && Tableai_config === void 0 ? (_reportPossibleCrUseOfTableai_config({
            error: Error()
          }), Tableai_config) : Tableai_config)();
          config.init(id);
          return config;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41c9ecb4dc6166ba2214ca236a6a78b5af289427.js.map