System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, tween, Tween, Vec3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ExpPropComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      tween = _cc.tween;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1955jzh+tMW6GdzvRm/xA0", "ExpPropComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'isValid', 'Label', 'Node', 'tween', 'Tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ExpPropComponent", ExpPropComponent = (_dec = ccclass('ExpPropComponent'), _dec2 = property(Label), _dec(_class = (_class2 = class ExpPropComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lb", _descriptor, this);
        }

        start() {} //显示经验动画 


        showExp(exp) {
          this.lb.string = "EXP+" + exp;
          this.lb.node.active = true;
          Tween.stopAllByTarget(this.node); //当前节点位置 向上移动 然后销毁

          var worldPos = this.node.worldPosition.clone();
          tween(this.node).to(0.5, {
            worldPosition: new Vec3(worldPos.x, worldPos.y + 100, worldPos.z)
          }, {
            easing: 'quadOut'
          }).call(() => {
            this.node.removeFromParent();
            this.node.destroy();
          }).start();
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b13d0c791ec48552cfbfb86d3e6684845ca257d2.js.map