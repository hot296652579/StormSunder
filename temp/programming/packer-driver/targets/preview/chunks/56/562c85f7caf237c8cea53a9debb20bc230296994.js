System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, CCFloat, Input, math, Sprite, v3, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, UIJoyStick;

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
      CCFloat = _cc.CCFloat;
      Input = _cc.Input;
      math = _cc.math;
      Sprite = _cc.Sprite;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19cacqyXFtGWa3r5HqnPN70", "UIJoyStick", undefined);

      __checkObsolete__(['_decorator', 'Component', 'CCFloat', 'EventTouch', 'Input', 'Node', 'math', 'Sprite', 'v3', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 摇杆控制器
       */

      _export("UIJoyStick", UIJoyStick = (_dec = ccclass('UIJoyStick'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(CCFloat), _dec(_class = (_class2 = (_class3 = class UIJoyStick extends Component {
        constructor() {
          super(...arguments);

          /**
           * 手指部分
           */
          _initializerDefineProperty(this, "joystickPoint", _descriptor, this);

          /**
           * 摇杆的背景
           */
          _initializerDefineProperty(this, "joyStickBg", _descriptor2, this);

          /**
           * 摇杆的半径
           */
          _initializerDefineProperty(this, "radius", _descriptor3, this);

          /**
           * 摇杆初始化的位置
           */
          this.initJoyStickBgPosition = v3();

          /**
           * 方向
           */
          this._dir = new Vec3(Vec3.ZERO);
        }

        get dir() {
          return this._dir;
        }

        set dir(value) {
          this._dir = value;
        }

        start() {
          if (!this.node) return;

          if (!UIJoyStick.ins) {
            UIJoyStick.ins = this;
          }

          this.joyStickBg.node.active = false;
          this.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.initJoyStickBgPosition = this.joyStickBg.node.worldPosition.clone();
        }

        onDestroy() {
          this.node.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          this.node.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }

        onTouchStart(eventTouch) {
          var _eventTouch$touch, _eventTouch$touch2;

          this.joyStickBg.node.active = true;
          var x = (_eventTouch$touch = eventTouch.touch) == null ? void 0 : _eventTouch$touch.getUILocationX();
          var y = (_eventTouch$touch2 = eventTouch.touch) == null ? void 0 : _eventTouch$touch2.getUILocationY();
          this.joyStickBg.node.setWorldPosition(x, y, 0);
        }
        /**
         * 触摸移动
         * @param touchEvent 
         */


        onTouchMove(touchEvent) {
          var _touchEvent$touch, _touchEvent$touch2;

          // 获取摇杆在 UI 的位置
          var x = (_touchEvent$touch = touchEvent.touch) == null ? void 0 : _touchEvent$touch.getUILocationX();
          var y = (_touchEvent$touch2 = touchEvent.touch) == null ? void 0 : _touchEvent$touch2.getUILocationY();
          var worldPosition = new Vec3(x, y, 0);
          var localPosition = v3(); // 转化摇杆的位置到背景图的本地坐标

          this.joyStickBg.node.inverseTransformPoint(localPosition, worldPosition);
          var thumbnailPosition = v3();
          var len = localPosition.length();
          localPosition.normalize();
          Vec3.scaleAndAdd(thumbnailPosition, v3(), localPosition, math.clamp(len, 0, this.radius));
          this.joystickPoint.node.setPosition(thumbnailPosition); // 将计算的结果赋予给 Input
          // VirtualInput.horizontal = this.joystickPoint.node.position.x / this.radius;
          // VirtualInput.vertical = this.joystickPoint.node.position.y / this.radius;

          this.dir = thumbnailPosition.clone().normalize();
        }
        /**
         * 触摸结束
         * @param touchEvent 
         */


        onTouchEnd(touchEvent) {
          this.joyStickBg.node.active = false;
          this.joystickPoint.node.setPosition(v3()); // VirtualInput.horizontal = 0;
          // VirtualInput.vertical = 0;

          this.dir = v3(0, 0, 0); // 摇杆的位置回归到初始化位置

          this.joyStickBg.node.worldPosition = this.initJoyStickBgPosition;
        }

      }, _class3.ins = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "joystickPoint", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "joyStickBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 130;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=562c85f7caf237c8cea53a9debb20bc230296994.js.map