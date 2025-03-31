System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Vec3, randomRange, PropComponent, PropStatus, PropMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PropMoveComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPropComponent(extras) {
    _reporterNs.report("PropComponent", "./PropComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropStatus(extras) {
    _reporterNs.report("PropStatus", "./PropComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropMgr(extras) {
    _reporterNs.report("PropMgr", "../Manager/PropMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Vec3 = _cc.Vec3;
      randomRange = _cc.randomRange;
    }, function (_unresolved_2) {
      PropComponent = _unresolved_2.PropComponent;
      PropStatus = _unresolved_2.PropStatus;
    }, function (_unresolved_3) {
      PropMgr = _unresolved_3.PropMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9765f4UAXVMHqaZF3DacQSU", "PropMoveComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Collider', 'ITriggerEvent', 'Node', 'CCFloat', 'Vec3', 'randomRange', 'PhysicsSystem']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PropMoveComponent", PropMoveComponent = (_dec = ccclass('PropMoveComponent'), _dec2 = property({
        type: CCFloat,
        displayName: "移动距离"
      }), _dec3 = property({
        type: CCFloat,
        displayName: "移动速度"
      }), _dec(_class = (_class2 = class PropMoveComponent extends (_crd && PropComponent === void 0 ? (_reportPossibleCrUseOfPropComponent({
        error: Error()
      }), PropComponent) : PropComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "moveDistance", _descriptor, this);

          _initializerDefineProperty(this, "moveSpeed", _descriptor2, this);

          // 当前移动方向
          this.currentDirection = new Vec3();
          // 已移动距离
          this.distanceMoved = 0;
        }

        start() {
          super.start();
          this.moveSpeed = Math.round(this.moveSpeed / 10 * 100) / 100; // 初始化随机移动方向

          this.changeDirection();
        }

        onTriggerEnter(event) {
          // super.onTriggerEnter(event);
          var otherCollider = event.otherCollider;
          var otherNode = otherCollider.node;
          this.oppositeDirection();
        } //反方向运动 


        oppositeDirection() {
          this.currentDirection.multiplyScalar(-1);
        }
        /**
         * 改变移动方向
         */


        changeDirection() {
          // 随机生成一个水平方向（x和z轴）
          var randomX = randomRange(-1, 1);
          var randomZ = randomRange(-1, 1); // 设置新的移动方向并归一化

          this.currentDirection.set(randomX, 0, randomZ);
          this.currentDirection.normalize(); // 重置已移动距离

          this.distanceMoved = 0; // console.log(`改变移动方向: (${this.currentDirection.x}, ${this.currentDirection.z})`);
        }

        update(deltaTime) {
          if (this.status === (_crd && PropStatus === void 0 ? (_reportPossibleCrUseOfPropStatus({
            error: Error()
          }), PropStatus) : PropStatus).DIE) return; // 计算当前帧移动距离

          var moveStep = this.moveSpeed * deltaTime; // 更新已移动距离

          this.distanceMoved += moveStep; // 计算移动向量

          var moveVec = new Vec3(this.currentDirection.x * moveStep, 0, this.currentDirection.z * moveStep); // 更新位置

          this.node.position = this.node.position.add(moveVec); // 如果已移动距离超过设定值，改变方向

          if (this.distanceMoved >= this.moveDistance) {
            this.changeDirection();
          }
        }

        onDestroy() {
          super.onDestroy();
          (_crd && PropMgr === void 0 ? (_reportPossibleCrUseOfPropMgr({
            error: Error()
          }), PropMgr) : PropMgr).inst.removeMovingProp();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveDistance", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46588788022682ce75d9c0b679200a5c62fc4959.js.map