System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, _decorator, AttributeBonusMgr, EventDispatcher, GameEvent, _dec, _class, _crd, ccclass, property, HomeUI;

  function _reportPossibleCrUseOfAttributeBonusMgr(extras) {
    _reporterNs.report("AttributeBonusMgr", "./Manager/AttributeBonusMgr", _context.meta, extras);
  }

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
      AttributeBonusMgr = _unresolved_2.AttributeBonusMgr;
    }, function (_unresolved_3) {
      EventDispatcher = _unresolved_3.EventDispatcher;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b01940NzT1N/4dwMb08w3j1", "HomeUI", undefined);

      __checkObsolete__(['Button', 'Component', 'Label', 'Node', 'NodeEventType', '_decorator', 'find']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       *HomeUI面板
       */

      _export("HomeUI", HomeUI = (_dec = ccclass('HomeUI'), _dec(_class = class HomeUI extends Component {
        constructor() {
          super(...arguments);
          this.lbUserMoney = null;
          this.lbUserName = null;
        }

        onLoad() {
          this.lbUserMoney = this.node.getChildByPath('TopLeft/UserInfo/LbMoney').getComponent(Label);
          this.rigisterEvent();
        }

        start() {
          this.upadteUserInfo();
        }

        rigisterEvent() {
          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).instance.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).EVENT_UPDATE_USER_MONEY, this.upadteUserInfo, this);
        }

        upadteUserInfo() {
          var {
            money
          } = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.userModel;
          this.lbUserMoney.string = money.toString();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=322832962a5995991c1721fddf679f51942684e4.js.map