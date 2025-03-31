System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, LevelAction;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "251b1LD9rlAbJPtECp8FoYX", "LevelAction", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider2D', 'Button', 'CircleCollider2D', 'Collider2D', 'Component', 'find', 'instantiate', 'Node', 'NodeEventType', 'tween', 'view', 'Vec3', 'mat4', 'UITransform', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LevelAction", LevelAction = (_dec = ccclass('LevelAction'), _dec(_class = (_class2 = class LevelAction extends Component {
        // 添加静态实例
        onLoad() {
          LevelAction.instance = this;
        }

        start() {
          this.registerListener();
          this.reportInformation();
        } //上报信息


        reportInformation() {}

        onDestroy() {
          this.unregisterListener();
        }

        registerListener() {}

        unregisterListener() {}

      }, _class2.instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8fe3fc591ce1e1156696318e278e78ddc6219daf.js.map