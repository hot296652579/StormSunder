System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, ResourcePool;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec9c4v/u0pDLZmbQWagshcg", "ResourcePool", undefined);

      __checkObsolete__(['_decorator', 'Prefab', 'Node', 'instantiate', 'NodePool', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ResourcePool", ResourcePool = (_dec = ccclass("ResourcePool"), _dec(_class = (_class2 = class ResourcePool {
        constructor() {
          this.prefab_pool = {};
        }

        static get instance() {
          if (!this.rp) {
            this.rp = new ResourcePool();
            window["rp"] = this.rp;
          }

          return this.rp;
        }

        set_prefab(name, prefab) {
          this.prefab_pool[name] = prefab;
        }

        get_prefab(name) {
          return this.prefab_pool[name];
        }

      }, _class2.rp = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=70a26927cb190186aadfab098896779b01e61cc6.js.map