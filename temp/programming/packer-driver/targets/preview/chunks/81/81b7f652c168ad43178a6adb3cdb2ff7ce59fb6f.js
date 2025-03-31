System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Tabledevelop_config, DevelopConfigModel, _crd;

  function _reportPossibleCrUseOfTabledevelop_config(extras) {
    _reporterNs.report("Tabledevelop_config", "db://assets/module_basic/table/Tabledevelop_config", _context.meta, extras);
  }

  _export("DevelopConfigModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Tabledevelop_config = _unresolved_2.Tabledevelop_config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fd4favmFdGeqcTtjMd7seD", "DevelopConfigModel", undefined);

      /**
       * 外部配置数据
      */
      _export("DevelopConfigModel", DevelopConfigModel = class DevelopConfigModel {
        constructor() {}

        getConfigById(id) {
          var config = new (_crd && Tabledevelop_config === void 0 ? (_reportPossibleCrUseOfTabledevelop_config({
            error: Error()
          }), Tabledevelop_config) : Tabledevelop_config)();
          config.init(id);
          return config;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=81b7f652c168ad43178a6adb3cdb2ff7ce59fb6f.js.map