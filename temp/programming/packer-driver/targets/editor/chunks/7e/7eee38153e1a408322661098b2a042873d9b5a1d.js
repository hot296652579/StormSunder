System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tgxUIMgr, StormSunderGlobalInstance, PropMgr, TimerMgr, UI_BattleResult, PlayerMgr, GameMgr, _crd, GameStatus;

  function _reportPossibleCrUseOftgxUIMgr(extras) {
    _reporterNs.report("tgxUIMgr", "db://assets/core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStormSunderGlobalInstance(extras) {
    _reporterNs.report("StormSunderGlobalInstance", "../StormSunderGlobalInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropMgr(extras) {
    _reporterNs.report("PropMgr", "./PropMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimerMgr(extras) {
    _reporterNs.report("TimerMgr", "./TimerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_BattleResult(extras) {
    _reporterNs.report("UI_BattleResult", "db://assets/scripts/UIDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "./PlayerMgr", _context.meta, extras);
  }

  _export("GameMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tgxUIMgr = _unresolved_2.tgxUIMgr;
    }, function (_unresolved_3) {
      StormSunderGlobalInstance = _unresolved_3.StormSunderGlobalInstance;
    }, function (_unresolved_4) {
      PropMgr = _unresolved_4.PropMgr;
    }, function (_unresolved_5) {
      TimerMgr = _unresolved_5.TimerMgr;
    }, function (_unresolved_6) {
      UI_BattleResult = _unresolved_6.UI_BattleResult;
    }, function (_unresolved_7) {
      PlayerMgr = _unresolved_7.PlayerMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce9482iVKdC86QbAb83CNth", "GameMgr", undefined);
      /** 游戏管理器*/


      _export("GameMgr", GameMgr = class GameMgr {
        constructor() {
          //游戏状态
          this.gameStatus = GameStatus.None;
          //输赢状态
          this.isWin = true;
        }

        static get Instance() {
          if (this._instance == null) {
            this._instance = new GameMgr();
          }

          return this._instance;
        }

        //设置游戏状态
        setGameStatus(status) {
          this.gameStatus = status;
          this.updateGameStatusUI();
        } //获取游戏状态


        getGameStatus() {
          return this.gameStatus;
        } //游戏状态更新UI


        async updateGameStatusUI() {
          const homeUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.homeUI;
          const battleUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.battleUI;

          switch (this.gameStatus) {
            case GameStatus.None:
              homeUI.active = true;
              battleUI.active = false;
              break;

            case GameStatus.Playing:
              await (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
                error: Error()
              }), PlayerMgr) : PlayerMgr).inst.setPlayerVisible(true);
              homeUI.active = false;
              battleUI.active = true;
              break;

            case GameStatus.End:
              (_crd && tgxUIMgr === void 0 ? (_reportPossibleCrUseOftgxUIMgr({
                error: Error()
              }), tgxUIMgr) : tgxUIMgr).inst.showUI(_crd && UI_BattleResult === void 0 ? (_reportPossibleCrUseOfUI_BattleResult({
                error: Error()
              }), UI_BattleResult) : UI_BattleResult);
              break;
          }
        }

        static get inst() {
          return this.Instance;
        }

        async startGame() {
          GameMgr.inst.setGameStatus(GameStatus.Playing);
          await (_crd && PropMgr === void 0 ? (_reportPossibleCrUseOfPropMgr({
            error: Error()
          }), PropMgr) : PropMgr).inst.genatorProp();
          await (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).inst.playerAddComponent();
          await (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).inst.genareatorAIPlayer();
          (_crd && TimerMgr === void 0 ? (_reportPossibleCrUseOfTimerMgr({
            error: Error()
          }), TimerMgr) : TimerMgr).inst.startCountdown();
        }

      });

      GameMgr._instance = void 0;

      _export("GameStatus", GameStatus = /*#__PURE__*/function (GameStatus) {
        GameStatus[GameStatus["None"] = 0] = "None";
        GameStatus[GameStatus["Playing"] = 1] = "Playing";
        GameStatus[GameStatus["End"] = 2] = "End";
        return GameStatus;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7eee38153e1a408322661098b2a042873d9b5a1d.js.map