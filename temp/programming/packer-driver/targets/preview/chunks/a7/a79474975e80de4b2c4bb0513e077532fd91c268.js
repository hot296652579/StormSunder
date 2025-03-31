System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, _decorator, EventDispatcher, GameEvent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ExpUserUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "../../core_tgx/easy_ui_framework/EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "./Enum/GameEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventDispatcher = _unresolved_2.EventDispatcher;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbdb9mCkttPVb0bIDainlis", "ExpUserUI", undefined);

      __checkObsolete__(['Button', 'Component', 'Label', 'Node', 'NodeEventType', '_decorator', 'find']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       *游戏玩家经验UI
       */

      _export("ExpUserUI", ExpUserUI = (_dec = ccclass('ExpUserUI'), _dec2 = property(Label), _dec(_class = (_class2 = class ExpUserUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbExp", _descriptor, this);
        }

        start() {
          this.registerEvent();
        }

        registerEvent() {
          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).instance.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).EVENT_UPDATE_USER_EXP, this.onUpdateUserExp, this);
        }

        onUpdateUserExp(args) {
          var exp = args[0];
          var maxExp = args[1];
          this.lbExp.string = exp + "/" + maxExp;
        }

        onDestroy() {
          this.rigisterEvent();
        }

        rigisterEvent() {
          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).instance.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).EVENT_UPDATE_USER_EXP, this.onUpdateUserExp, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbExp", [_dec2], {
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
//# sourceMappingURL=a79474975e80de4b2c4bb0513e077532fd91c268.js.map