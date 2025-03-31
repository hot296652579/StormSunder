System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Component, Label, NodeEventType, _decorator, StormSunderAudioMgr, AttributeBonusMgr, BonusType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ButtonComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfStormSunderAudioMgr(extras) {
    _reporterNs.report("StormSunderAudioMgr", "../Manager/StormSunderAudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttributeBonusMgr(extras) {
    _reporterNs.report("AttributeBonusMgr", "../Manager/AttributeBonusMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBonusType(extras) {
    _reporterNs.report("BonusType", "../Manager/AttributeBonusMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
      NodeEventType = _cc.NodeEventType;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      StormSunderAudioMgr = _unresolved_2.StormSunderAudioMgr;
    }, function (_unresolved_3) {
      AttributeBonusMgr = _unresolved_3.AttributeBonusMgr;
      BonusType = _unresolved_3.BonusType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e06e2SlI+ZJtpHlZ9sR5XFm", "ButtonComponent", undefined);

      __checkObsolete__(['Button', 'Component', 'Label', 'Node', 'NodeEventType', '_decorator', 'find']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 底部按钮控制器
       */

      _export("ButtonComponent", ButtonComponent = (_dec = ccclass('ButtonComponent'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec(_class = (_class2 = class ButtonComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "btnAttack", _descriptor, this);

          _initializerDefineProperty(this, "btSpeed", _descriptor2, this);

          _initializerDefineProperty(this, "btExp", _descriptor3, this);
        }

        start() {
          this.addUIEvent();
          this.updateBtView((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).ATTACK);
          this.updateBtView((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).SPEED);
          this.updateBtView((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).EXP);
          this.onUpdateBtnsStatus();
        }

        addUIEvent() {
          this.btnAttack.node.on(NodeEventType.TOUCH_END, () => this.onClickHandler((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).ATTACK), this);
          this.btSpeed.node.on(NodeEventType.TOUCH_END, () => this.onClickHandler((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).SPEED), this);
          this.btExp.node.on(NodeEventType.TOUCH_END, () => this.onClickHandler((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).EXP), this);
        }

        onClickHandler(type) {
          (_crd && StormSunderAudioMgr === void 0 ? (_reportPossibleCrUseOfStormSunderAudioMgr({
            error: Error()
          }), StormSunderAudioMgr) : StormSunderAudioMgr).playOneShot((_crd && StormSunderAudioMgr === void 0 ? (_reportPossibleCrUseOfStormSunderAudioMgr({
            error: Error()
          }), StormSunderAudioMgr) : StormSunderAudioMgr).getMusicIdName(2), 1.0);
          const {
            userModel
          } = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst;
          const bonus = userModel.bonusData[type]; // 检查金额是否足够

          if (!(_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.checkMoneyEnough(bonus.upgradeCost)) {
            console.log("金额不足"); //DOTO 看广告

            this.updateBtStatus(type);
            return;
          } // 扣除金额


          if (!(_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.consumeMoney(bonus.upgradeCost)) {
            return;
          } // 升级逻辑


          bonus.level++; // 更新升级消耗

          bonus.upgradeCost += (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.getUpgradeCost(type);
          (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.updateBonus(type); // 更新按钮状态

          this.updateBtView(type);
          this.onUpdateBtnsStatus();
          console.log(`当前属性最终加成:${(_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.getBonus(type)}`);
        }

        onUpdateBtnsStatus() {
          this.updateBtStatus((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).ATTACK);
          this.updateBtStatus((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).SPEED);
          this.updateBtStatus((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).EXP);
        }

        updateBtView(type, max) {
          const {
            userModel
          } = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst;
          const {
            bonusData
          } = userModel;
          const buttonNode = this.getButtonNodeByType(type);
          const lbLevel = buttonNode.getChildByName('LbLv').getComponent(Label);
          const useddMoney = buttonNode.getChildByName('UsedMoney');
          const usedAd = buttonNode.getChildByName('UsedAd');
          const lbMoney = useddMoney.getChildByName('LbAmount').getComponent(Label);

          if (max) {
            lbLevel.string = 'MAX';
            useddMoney.active = false;
            usedAd.active = false;
          } else {
            const bonus = bonusData[type];
            lbLevel.string = `LV.${bonus.level}`;
            lbMoney.string = `${bonus.upgradeCost}`;
          }
        }

        updateBtStatus(type) {
          const {
            userModel
          } = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst;
          const bonus = userModel.bonusData[type];
          const buttonNode = this.getButtonNodeByType(type);
          const usedMoney = buttonNode.getChildByName('UsedMoney');
          const usedAd = buttonNode.getChildByName('UsedAd'); // 检查金额是否足够

          const canAfford = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.checkMoneyEnough(bonus.upgradeCost); // 金额不够显示广告图标，够则显示金额

          usedMoney.active = canAfford;
          usedAd.active = !canAfford;
        }

        getButtonNodeByType(type) {
          return {
            [(_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
              error: Error()
            }), BonusType) : BonusType).ATTACK]: this.btnAttack.node,
            [(_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
              error: Error()
            }), BonusType) : BonusType).SPEED]: this.btSpeed.node,
            [(_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
              error: Error()
            }), BonusType) : BonusType).EXP]: this.btExp.node
          }[type];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnAttack", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btExp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1937e88eeb831d8a734c87fe44b385322fa6af20.js.map