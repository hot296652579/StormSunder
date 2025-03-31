System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, _decorator, AttributeBonusMgr, EventDispatcher, GameEvent, GameUtil, PlayerMgr, _dec, _class, _crd, ccclass, property, RankUI;

  function _reportPossibleCrUseOfAttributeBonusMgr(extras) {
    _reporterNs.report("AttributeBonusMgr", "./Manager/AttributeBonusMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "../../core_tgx/easy_ui_framework/EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "./Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "./GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "./Manager/PlayerMgr", _context.meta, extras);
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
    }, function (_unresolved_5) {
      GameUtil = _unresolved_5.GameUtil;
    }, function (_unresolved_6) {
      PlayerMgr = _unresolved_6.PlayerMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e759EIlKNBGqtP0yKgPqSJ", "RankUI", undefined);

      __checkObsolete__(['Button', 'Component', 'Label', 'Node', 'NodeEventType', '_decorator', 'find']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       *排行面板
       */

      _export("RankUI", RankUI = (_dec = ccclass('RankUI'), _dec(_class = class RankUI extends Component {
        constructor(...args) {
          super(...args);
          this.rank1 = null;
          this.rank2 = null;
          this.rank3 = null;
          this.rank4 = null;
        }

        async onLoad() {
          this.rank1 = this.node.getChildByName("Rank1");
          this.rank2 = this.node.getChildByName("Rank2");
          this.rank3 = this.node.getChildByName("Rank3");
          this.rank4 = this.node.getChildByName("Rank4");
          await (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).delay(0.2);
          this.initUI();
          this.rigisterEvent();
        }

        initUI() {
          this.rank1.active = true;
          this.rank2.active = false;
          this.rank3.active = false;
          this.rank4.active = false;
          const lbName = this.rank1.getChildByName("LbName").getComponent(Label);
          console.log('AttributeBonusMgr.inst.userModel.nickName:', (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.userModel.nickName);
          lbName.string = `${(_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.userModel.nickName}`;
          const lbHeight = this.rank1.getChildByName("LbHeight").getComponent(Label);
          lbHeight.string = `${(_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.userModel.game_tornado_base_height} m`;
        }

        start() {}

        onRefreshRank() {
          const rankList = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).inst.getRanking(); // console.log('rankList:', rankList);
          // Hide all rank nodes first

          this.rank1.active = false;
          this.rank2.active = false;
          this.rank3.active = false;
          this.rank4.active = false; // Display top 3 rankings

          for (let i = 0; i < Math.min(3, rankList.length); i++) {
            const rankNode = this[`rank${i + 1}`];
            const playerData = rankList[i];
            rankNode.active = true;
            rankNode.getChildByName("LbName").getComponent(Label).string = playerData.nickName;
            rankNode.getChildByName("LbHeight").getComponent(Label).string = `${playerData.height} m`;
          } // Check if current player is not in top 3 and there are more than 3 players


          if (rankList.length > 3) {
            const currentPlayerIndex = rankList.findIndex(player => player.nickName === (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
              error: Error()
            }), AttributeBonusMgr) : AttributeBonusMgr).inst.userModel.nickName);

            if (currentPlayerIndex >= 3) {
              this.rank4.active = true;
              const playerData = rankList[currentPlayerIndex];
              this.rank4.getChildByName("LbName").getComponent(Label).string = playerData.nickName;
              this.rank4.getChildByName("LbHeight").getComponent(Label).string = `${playerData.height} m`;
            }
          }
        }

        rigisterEvent() {
          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).instance.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).EVENT_REFRESH_RANK, this.onRefreshRank, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be6c7842893166eb93ce43d18f4cec2ec93440d5.js.map