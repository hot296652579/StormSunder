System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ModuleContext, _crd, PROP_MODULE, PROP_IMPL_CLASS, defaultModule;

  _export("ModuleContext", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5575a3VV2RD746hi1OU1Xsj", "ModuleContext", undefined);

      PROP_MODULE = '__module__name__';
      PROP_IMPL_CLASS = '__impl__class__';
      defaultModule = 'resources';

      _export("ModuleContext", ModuleContext = class ModuleContext {
        static setDefaultModule(moduleName) {
          defaultModule = moduleName;
        }

        static attachModule(cls, moduleName) {
          cls[PROP_MODULE] = moduleName;
        }

        static getClassModule(cls) {
          return cls[PROP_MODULE] || defaultModule;
        }

        static attachImplClass(cls, implCls) {
          cls[PROP_IMPL_CLASS] = implCls;
        }

        static attachModuleAndImplClass(cls, moduleName, implCls) {
          cls[PROP_MODULE] = moduleName;
          cls[PROP_IMPL_CLASS] = implCls;
        }

        static getImplClass(cls) {
          return cls[PROP_IMPL_CLASS] || cls;
        }

        static createFromModule(cls) {
          var implCls = this.getImplClass(cls) || cls;
          return new implCls();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e06cd154153686cab38b0350e554769988eb6036.js.map