System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec2, v2, EasyController, EasyControllerEvent, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, tempV2, CharacterMovement2D;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEasyController(extras) {
    _reporterNs.report("EasyController", "./EasyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEasyControllerEvent(extras) {
    _reporterNs.report("EasyControllerEvent", "./EasyController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec2 = _cc.Vec2;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      EasyController = _unresolved_2.EasyController;
      EasyControllerEvent = _unresolved_2.EasyControllerEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6bdfa3YMw1PwobXdjV+aWTX", "CharacterMovement2D", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2', 'v2', 'Prefab', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempV2 = v2();

      _export("CharacterMovement2D", CharacterMovement2D = (_dec = ccclass('tgxCharacterMovement2D'), _dec(_class = (_class2 = class CharacterMovement2D extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          _initializerDefineProperty(this, "needRotation", _descriptor2, this);

          this._moveFactor = 0;
          this._moveDir = v2(1, 0);
        }

        start() {
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT, this.onMovement, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT_STOP, this.onMovementStop, this);
        }

        get moveDir() {
          return this._moveDir;
        }

        get realSpeed() {
          return this.moveSpeed * this._moveFactor;
        }

        onMovement(degree, strengthen) {
          let angle = degree / 180 * Math.PI;

          if (this.needRotation) {
            this.node.setRotationFromEuler(0, 0, degree);
          }

          this._moveDir.set(Math.cos(angle), Math.sin(angle));

          this._moveDir.normalize();

          this._moveFactor = strengthen;
        }

        onMovementStop() {
          this._moveFactor = 0;
        }

        onDestroy() {
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT, this.onMovement, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).MOVEMENT_STOP, this.onMovementStop, this);
        }

        update(deltaTime) {
          if (this._moveFactor) {
            Vec2.multiplyScalar(tempV2, this._moveDir, this.realSpeed * deltaTime);
            let pos = this.node.position;
            this.node.setPosition(pos.x + tempV2.x, pos.y + tempV2.y, pos.z);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "needRotation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9a858c85acb985e021d74cbd1ff1611741ed1a2d.js.map