System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ModuleClass, _crd, PROP_MODULE, PROP_IMPL_CLASS, defaultModule;

  _export("ModuleClass", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa98aD84tpKRKaBzTQR9N6Z", "ModuleClass", undefined);

      PROP_MODULE = '__module__name__';
      PROP_IMPL_CLASS = '__impl__class__';
      defaultModule = 'resources';

      _export("ModuleClass", ModuleClass = class ModuleClass {
        static setDefaultModule(moduleName) {
          defaultModule = moduleName;
        }

        static attachModule(cls, moduleName) {
          cls[PROP_MODULE] = moduleName;
        }

        static getModule(cls) {
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
//# sourceMappingURL=d5b0928e99bb2df7e2a7e04f6e78fcdb37dc9d64.js.map