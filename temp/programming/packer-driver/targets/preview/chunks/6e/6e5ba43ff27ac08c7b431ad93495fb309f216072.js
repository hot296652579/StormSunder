System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, v3, Vec3, tgxModuleContext, GameUILayers, UI_BattleResult, Layout_BattleResult, StormSunderAudioMgr, GameMgr, GameStatus, PlayerMgr, AttributeBonusMgr, GlobalConfig, AdvertMgr, UI_BattleResult_Impl, _crd;

  function _reportPossibleCrUseOftgxModuleContext(extras) {
    _reporterNs.report("tgxModuleContext", "../../../../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUILayers(extras) {
    _reporterNs.report("GameUILayers", "../../../../scripts/GameUILayers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_BattleResult(extras) {
    _reporterNs.report("UI_BattleResult", "../../../../scripts/UIDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayout_BattleResult(extras) {
    _reporterNs.report("Layout_BattleResult", "./Layout_BattleResult", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStormSunderAudioMgr(extras) {
    _reporterNs.report("StormSunderAudioMgr", "../../../Script/Manager/StormSunderAudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMgr(extras) {
    _reporterNs.report("GameMgr", "../../../Script/Manager/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../../../Script/Manager/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../../../Script/Manager/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttributeBonusMgr(extras) {
    _reporterNs.report("AttributeBonusMgr", "../../../Script/Manager/AttributeBonusMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "db://assets/start/Config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdvertMgr(extras) {
    _reporterNs.report("AdvertMgr", "db://assets/core_tgx/base/ad/AdvertMgr", _context.meta, extras);
  }

  _export("UI_BattleResult_Impl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      tgxModuleContext = _unresolved_2.tgxModuleContext;
    }, function (_unresolved_3) {
      GameUILayers = _unresolved_3.GameUILayers;
    }, function (_unresolved_4) {
      UI_BattleResult = _unresolved_4.UI_BattleResult;
    }, function (_unresolved_5) {
      Layout_BattleResult = _unresolved_5.Layout_BattleResult;
    }, function (_unresolved_6) {
      StormSunderAudioMgr = _unresolved_6.StormSunderAudioMgr;
    }, function (_unresolved_7) {
      GameMgr = _unresolved_7.GameMgr;
      GameStatus = _unresolved_7.GameStatus;
    }, function (_unresolved_8) {
      PlayerMgr = _unresolved_8.PlayerMgr;
    }, function (_unresolved_9) {
      AttributeBonusMgr = _unresolved_9.AttributeBonusMgr;
    }, function (_unresolved_10) {
      GlobalConfig = _unresolved_10.GlobalConfig;
    }, function (_unresolved_11) {
      AdvertMgr = _unresolved_11.AdvertMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60a4313NlFJpqUrSRZVVrBe", "UI_BattleResult_Impl", undefined);

      __checkObsolete__(['isValid', 'Label', 'tween', 'v3', 'Vec3', 'Node', 'Tween']);

      _export("UI_BattleResult_Impl", UI_BattleResult_Impl = class UI_BattleResult_Impl extends (_crd && UI_BattleResult === void 0 ? (_reportPossibleCrUseOfUI_BattleResult({
        error: Error()
      }), UI_BattleResult) : UI_BattleResult) {
        constructor() {
          super('Prefabs/UI/Result/UI_BattleResult', (_crd && GameUILayers === void 0 ? (_reportPossibleCrUseOfGameUILayers({
            error: Error()
          }), GameUILayers) : GameUILayers).POPUP, _crd && Layout_BattleResult === void 0 ? (_reportPossibleCrUseOfLayout_BattleResult({
            error: Error()
          }), Layout_BattleResult) : Layout_BattleResult);
          this.win = true;
          this.rank = -1;
          this.reward = 0;
          //广告奖励倍数
          this.rewardMultiple = 1;
        }

        getRes() {
          return [];
        }

        onCreated() {
          this.initReward();
          var soundId = this.win ? 6 : 7;
          (_crd && StormSunderAudioMgr === void 0 ? (_reportPossibleCrUseOfStormSunderAudioMgr({
            error: Error()
          }), StormSunderAudioMgr) : StormSunderAudioMgr).playOneShot((_crd && StormSunderAudioMgr === void 0 ? (_reportPossibleCrUseOfStormSunderAudioMgr({
            error: Error()
          }), StormSunderAudioMgr) : StormSunderAudioMgr).getMusicIdName(soundId), 1.0);
          var layout = this.layout;
          this.onButtonEvent(layout.btNextAd, () => {
            this.onClickReward(this.rewardMultiple);
          });
          this.onButtonEvent(layout.btGet, () => {
            this.onClickReward();
          });
          this.onButtonEvent(layout.btRestart, () => {
            this.onClickRestart();
          });
          layout.winNode.active = this.win;
          layout.loseNode.active = !this.win;
          this.rotationLight();
          this.updateInfoUI();
        } //计算奖励


        initReward() {
          var userModel = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.userModel;
          this.win = (_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
            error: Error()
          }), GameMgr) : GameMgr).inst.isWin;
          this.rank = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).inst.getPlayerRank();
          var totalLevel = Object.values(userModel.bonusData).reduce((sum, bonus) => sum + bonus.level, 0);
          var rewardDevelop = Number((userModel.game_reward_develop / 100).toFixed(2));
          var rewardRank = Number((userModel.game_reward_rank / 100).toFixed(2)); //最终奖励=[基础奖励×（1+属性提升值×属性养成加成）]×[1-(本局排名-1)×排名减益]

          this.reward = Math.floor(userModel.game_reward_develop * (1 + totalLevel * rewardDevelop) * (1 - (this.rank - 1) * rewardRank));
          this.rewardMultiple = userModel.game_pass_reward_multiple;
        }

        updateInfoUI() {
          var {
            lbUserRank,
            lbReward,
            lbMultiple,
            lbGet
          } = this.layout;
          lbUserRank.string = "" + this.rank;
          lbReward.string = "" + this.reward;
          lbMultiple.string = "x " + this.rewardMultiple;
          lbGet.string = "" + this.reward;
        }

        rotationLight() {
          if (!this.win) return;
          var {
            light
          } = this.layout;
          light.eulerAngles = v3(0, 0, 0);
          tween(light).repeatForever(tween().to(5, {
            eulerAngles: new Vec3(0, 0, 360)
          }, {
            easing: 'linear'
          }).call(() => {
            light.eulerAngles = new Vec3(0, 0, 0);
          })).start();
        }

        changeGameStatus(status) {
          (_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
            error: Error()
          }), GameMgr) : GameMgr).inst.setGameStatus(status);
          this.node.removeFromParent();
          this.node.destroy();
        }

        onClickReward(multiple) {
          if (multiple) {
            if (!(_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
              error: Error()
            }), GlobalConfig) : GlobalConfig).isDebug) {
              (_crd && AdvertMgr === void 0 ? (_reportPossibleCrUseOfAdvertMgr({
                error: Error()
              }), AdvertMgr) : AdvertMgr).instance.showReawardVideo(() => {
                var reward = this.reward * multiple;
                (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
                  error: Error()
                }), AttributeBonusMgr) : AttributeBonusMgr).inst.addMoney(reward);
                this.changeGameStatus((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                  error: Error()
                }), GameStatus) : GameStatus).None);
              });
            } else {
              var reward = this.reward * multiple;
              (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
                error: Error()
              }), AttributeBonusMgr) : AttributeBonusMgr).inst.addMoney(reward);
              this.changeGameStatus((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).None);
            }
          } else {
            (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
              error: Error()
            }), AttributeBonusMgr) : AttributeBonusMgr).inst.addMoney(this.reward);
            this.changeGameStatus((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).None);
          }
        }

        onClickRestart() {
          this.changeGameStatus((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).None);
        }

      });

      (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
        error: Error()
      }), tgxModuleContext) : tgxModuleContext).attachImplClass(_crd && UI_BattleResult === void 0 ? (_reportPossibleCrUseOfUI_BattleResult({
        error: Error()
      }), UI_BattleResult) : UI_BattleResult, UI_BattleResult_Impl);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e5ba43ff27ac08c7b431ad93495fb309f216072.js.map