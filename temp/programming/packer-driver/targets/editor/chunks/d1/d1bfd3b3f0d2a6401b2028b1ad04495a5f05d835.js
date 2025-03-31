System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AttributeBonusMgr, BonusType, UserModel, _crd;

  function _reportPossibleCrUseOfAttributeBonusMgr(extras) {
    _reporterNs.report("AttributeBonusMgr", "../Manager/AttributeBonusMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBonusType(extras) {
    _reporterNs.report("BonusType", "../Manager/AttributeBonusMgr", _context.meta, extras);
  }

  _export("UserModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AttributeBonusMgr = _unresolved_2.AttributeBonusMgr;
      BonusType = _unresolved_2.BonusType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "234a3oBWndEv5Nld+wk05n+", "UserModel", undefined);

      /**玩家数据模型
       * @param attack 攻击力
       * @param money 金币
       * @param expPower 经验加成
      */
      _export("UserModel", UserModel = class UserModel {
        constructor() {
          this.money = 999999;
          this.nickName = '爸爸在此';
          //昵称
          // userTornadoLevel: number = 1; //玩家风暴等级

          /** 游戏内基础攻击*/
          this.game_attack_base = 0;

          /** 游戏内等级升级提升的攻击力*/
          this.game_lv_attack_up = 0;

          /** 游戏内基础速度*/
          this.game_speed_base = 0;

          /** 游戏内等级升级提升的速度*/
          this.game_lv_speed_up = 0;
          this.game_expPower_base = 0;
          //经验基础加成
          this.game_absorbec_exp_base = 0;
          //被吸收基础提供经验值
          this.game_lv_absorbec_exp_up = 0;
          //升级提供的经验值提升
          this.game_modleVolume_base = 0;
          //模型体积
          this.game_lv_modleVolume_up = 0;
          //升级提供的模型体积提升
          this.game_attack_count = 0;
          //每秒攻击次数
          //龙卷风基础高度
          this.game_tornado_base_height = 0;
          //每获得1经验提升的高度值
          this.game_exp_height = 0;
          //开局弹窗提升的龙卷风破坏范围百分比
          this.game_tornado_damage = 0;
          //ai属性浮动区间值
          this.game_ai_range = 0;
          //基础通关奖励
          this.game_base_pass_reward = 0;
          //奖励养成属性加成百分比
          this.game_reward_develop = 0;
          //奖励排名减益百分比
          this.game_reward_rank = 0;
          //通过多倍奖励倍率
          this.game_pass_reward_multiple = 0;
          this.bonusData = null;
        }

        initialize() {
          const attackDevelopConfig = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.developConfig.getConfigById((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).ATTACK);
          const speedDevelopConfig = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.developConfig.getConfigById((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).SPEED);
          const expDevelopConfig = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.developConfig.getConfigById((_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
            error: Error()
          }), BonusType) : BonusType).EXP);
          const mainConfig = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.mainConfig;
          this.game_tornado_base_height = mainConfig.getPramById(3); //龙卷风基础高度

          this.game_exp_height = mainConfig.getPramById(4); //每获得1经验提升的高度值

          this.game_attack_base = mainConfig.getPramById(5); //基础攻击力

          this.game_lv_attack_up = mainConfig.getPramById(6); //每级提升的攻击力

          this.game_attack_count = mainConfig.getPramById(7); //每秒攻击次数

          this.game_speed_base = mainConfig.getPramById(8); //基础速度

          this.game_lv_speed_up = mainConfig.getPramById(9); //每级提升的速度

          this.game_expPower_base = mainConfig.getPramById(10); //经验基础加成

          this.game_absorbec_exp_base = mainConfig.getPramById(11); //每次升级时提升的提供经验值

          this.game_modleVolume_base = mainConfig.getPramById(12);
          this.game_lv_modleVolume_up = mainConfig.getPramById(13);
          this.game_tornado_damage = mainConfig.getPramById(14);
          this.game_ai_range = mainConfig.getPramById(15);
          this.game_base_pass_reward = mainConfig.getPramById(16);
          this.game_reward_develop = mainConfig.getPramById(17);
          this.game_reward_rank = mainConfig.getPramById(18);
          this.game_pass_reward_multiple = mainConfig.getPramById(19); //升级基础货币

          const attack_base_currency = attackDevelopConfig.base_currency;
          const speed_base_currency = speedDevelopConfig.base_currency;
          const exp_base_currency = expDevelopConfig.base_currency; //属性初始值

          const attack_external_base = attackDevelopConfig.base;
          const speed_external_base = speedDevelopConfig.base;
          const exp_external_base = expDevelopConfig.base; //属性提升值

          const attack_external_upValue = attackDevelopConfig.up_value;
          const speed_external_upValue = speedDevelopConfig.up_value;
          const exp_external_upValue = expDevelopConfig.up_value;
          this.bonusData = {
            [(_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
              error: Error()
            }), BonusType) : BonusType).ATTACK]: {
              level: 1,
              base: attack_external_base,
              up_value: attack_external_upValue,
              upgradeCost: attack_base_currency
            },
            [(_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
              error: Error()
            }), BonusType) : BonusType).SPEED]: {
              level: 1,
              base: speed_external_base,
              up_value: speed_external_upValue,
              upgradeCost: speed_base_currency
            },
            [(_crd && BonusType === void 0 ? (_reportPossibleCrUseOfBonusType({
              error: Error()
            }), BonusType) : BonusType).EXP]: {
              level: 1,
              base: exp_external_base,
              up_value: exp_external_upValue,
              upgradeCost: exp_base_currency
            }
          };
        }

      }); // 定义 Bonus 数据结构


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1bfd3b3f0d2a6401b2028b1ad04495a5f05d835.js.map