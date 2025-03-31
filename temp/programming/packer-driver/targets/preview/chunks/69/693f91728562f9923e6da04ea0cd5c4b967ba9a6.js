System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCFloat, Collider, Component, tween, Tween, Vec3, Effect2DUIMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PropStatus, PropComponent;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEffect2DUIMgr(extras) {
    _reporterNs.report("Effect2DUIMgr", "../Manager/Effect2DUIMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCFloat = _cc.CCFloat;
      Collider = _cc.Collider;
      Component = _cc.Component;
      tween = _cc.tween;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Effect2DUIMgr = _unresolved_2.Effect2DUIMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8be0ckT9/FGIp1+XQLXpbTU", "PropComponent", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'Collider', 'Component', 'ITriggerEvent', 'Node', 'PhysicsSystem', 'tween', 'Tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PropStatus", PropStatus = /*#__PURE__*/function (PropStatus) {
        PropStatus[PropStatus["LIFE"] = 0] = "LIFE";
        PropStatus[PropStatus["DIE"] = 1] = "DIE";
        return PropStatus;
      }({}));

      _export("PropComponent", PropComponent = (_dec = ccclass('PropComponent'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: CCFloat
      }), _dec4 = property({
        type: CCBoolean,
        displayName: "是否可移动"
      }), _dec(_class = (_class2 = class PropComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "hp", _descriptor, this);

          _initializerDefineProperty(this, "currentExp", _descriptor2, this);

          _initializerDefineProperty(this, "isMove", _descriptor3, this);

          this.currentHp = 0;
          this.status = PropStatus.LIFE;
          this.speed = 50;
          this.tigger = null;
        }

        start() {
          this.status = PropStatus.LIFE;
          this.currentHp = this.hp;
          this.tigger = this.node.getComponent(Collider);
          this.tigger.on('onTriggerEnter', this.onTriggerEnter, this);
          this.tigger.on('onTriggerExit', this.onTriggerExit, this);
        } //受伤


        hurt(damage) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.status == PropStatus.DIE) return;
            _this.currentHp -= damage; // console.log(`当前道具血量:${this.currentHp}`);

            if (_this.currentHp > 0) {
              var hpPercent = _this.currentHp / _this.hp; // 显示或更新血条

              yield (_crd && Effect2DUIMgr === void 0 ? (_reportPossibleCrUseOfEffect2DUIMgr({
                error: Error()
              }), Effect2DUIMgr) : Effect2DUIMgr).Instance.showBlood(_this.node, hpPercent);
            } //小于0时死亡


            if (_this.currentHp <= 0) {
              _this.currentHp = 0;
              _this.status = PropStatus.DIE;
              (_crd && Effect2DUIMgr === void 0 ? (_reportPossibleCrUseOfEffect2DUIMgr({
                error: Error()
              }), Effect2DUIMgr) : Effect2DUIMgr).Instance.removeBlood(_this.node);
            }
          })();
        } //卷入龙卷风


        swallow() {
          Tween.stopAllByTarget(this.node);
          tween(this.node).by(1, {
            position: new Vec3(0, this.node.position.y + 5, 0)
          }).call(() => {
            this.node.removeFromParent();
            this.node.destroy();
          }).start();
        }

        onTriggerEnter(event) {}

        onTriggerExit(event) {
          (_crd && Effect2DUIMgr === void 0 ? (_reportPossibleCrUseOfEffect2DUIMgr({
            error: Error()
          }), Effect2DUIMgr) : Effect2DUIMgr).Instance.removeBlood(this.node);
        }

        update(deltaTime) {}

        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentExp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isMove", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=693f91728562f9923e6da04ea0cd5c4b967ba9a6.js.map