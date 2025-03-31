System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DevelopConfigModel, UserModel, MainConfigModel, AiConfigModel, EventDispatcher, GameEvent, AttributeBonusMgr, _crd, BonusType;

  function _reportPossibleCrUseOfDevelopConfigModel(extras) {
    _reporterNs.report("DevelopConfigModel", "../Model/DevelopConfigModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserModel(extras) {
    _reporterNs.report("UserModel", "../Model/UserModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainConfigModel(extras) {
    _reporterNs.report("MainConfigModel", "../Model/MainConfigModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAiConfigModel(extras) {
    _reporterNs.report("AiConfigModel", "../Model/AiConfigModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "db://assets/core_tgx/easy_ui_framework/EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Enum/GameEvent", _context.meta, extras);
  }

  _export("AttributeBonusMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DevelopConfigModel = _unresolved_2.DevelopConfigModel;
    }, function (_unresolved_3) {
      UserModel = _unresolved_3.UserModel;
    }, function (_unresolved_4) {
      MainConfigModel = _unresolved_4.MainConfigModel;
    }, function (_unresolved_5) {
      AiConfigModel = _unresolved_5.AiConfigModel;
    }, function (_unresolved_6) {
      EventDispatcher = _unresolved_6.EventDispatcher;
    }, function (_unresolved_7) {
      GameEvent = _unresolved_7.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "671dcIfC15BvpKzm3M7TuZx", "AttributeBonusMgr", undefined);

      /** 属性加成管理器*/
      _export("AttributeBonusMgr", AttributeBonusMgr = class AttributeBonusMgr {
        constructor() {
          this.userModel = void 0;
          this.developConfig = void 0;
          this.aiConfig = void 0;
          this.mainConfig = void 0;
        }

        static get inst() {
          if (this._instance == null) {
            this._instance = new AttributeBonusMgr();
          }

          return this._instance;
        }

        initilize() {
          this.userModel = new (_crd && UserModel === void 0 ? (_reportPossibleCrUseOfUserModel({
            error: Error()
          }), UserModel) : UserModel)();
          this.mainConfig = new (_crd && MainConfigModel === void 0 ? (_reportPossibleCrUseOfMainConfigModel({
            error: Error()
          }), MainConfigModel) : MainConfigModel)();
          this.developConfig = new (_crd && DevelopConfigModel === void 0 ? (_reportPossibleCrUseOfDevelopConfigModel({
            error: Error()
          }), DevelopConfigModel) : DevelopConfigModel)();
          this.aiConfig = new (_crd && AiConfigModel === void 0 ? (_reportPossibleCrUseOfAiConfigModel({
            error: Error()
          }), AiConfigModel) : AiConfigModel)();
          this.userModel.initialize();
        }
        /** 用户增加金额*/


        addMoney(money) {
          this.userModel.money += money;
          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).instance.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).EVENT_UPDATE_USER_MONEY);
        }
        /**
         * 检查用户金额是否足够
         * @param cost 需要消耗的金额
         * @returns boolean
         */


        checkMoneyEnough(cost) {
          const userMoney = this.userModel.money;
          return userMoney >= cost;
        }
        /**
         * 扣除用户金额
         * @param cost 需要扣除的金额
         * @returns boolean 扣除是否成功
         */


        consumeMoney(cost) {
          if (!this.checkMoneyEnough(cost)) {
            return false;
          }

          this.userModel.money -= cost;
          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).instance.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).EVENT_UPDATE_USER_MONEY);
          return true;
        }
        /**
         * 更新对应类型的加成数据
         * @param type 加成类型
         */


        updateBonus(type) {
          const bonus = this.userModel.bonusData[type];
          if (!bonus) return; // 更新等级和升级消耗

          this.userModel.bonusData[type] = { ...bonus,
            level: bonus.level,
            upgradeCost: bonus.upgradeCost
          };
        }
        /** 获取配置升级消耗增加金额*/


        getUpgradeCost(type) {
          const config = this.developConfig.getConfigById(type);
          if (!config) return 0;
          return config.money_growth;
        }
        /** 获取类型最终属性加成*/


        getBonus(type, isAI) {
          const {
            level,
            base,
            up_value
          } = this.userModel.bonusData[type];
          let finialLevel = 1;

          if (!isAI) {
            finialLevel = level;
          } else {
            const aiRange = this.userModel.game_ai_range;
            const randomOffset = Math.floor(Math.random() * (aiRange[1] - aiRange[0] + 1)) + aiRange[0];
            const newLv = level + randomOffset;
            finialLevel = newLv < 0 ? 3 : newLv; // 如果计算结果小于 0，则返回 3
          }

          return base + (finialLevel - 1) * up_value;
        }
        /** 升级需要的经验*/


        getExpNeed(level) {
          return 25 * (level * level - level + 2);
        }
        /** 计算玩家龙卷风攻击力*/


        getStormSunderAttack(lv, isAI) {
          const external_attack = this.getBonus(BonusType.ATTACK, isAI);
          const game_attack_base = this.userModel.game_attack_base;
          const game_lv_attack_up = this.userModel.game_lv_attack_up;
          return external_attack + game_attack_base + game_lv_attack_up * lv;
        }
        /** 计算玩家龙卷风速度*/


        getStormSunderSpeed(lv, isAI) {
          const external_speed = this.getBonus(BonusType.SPEED, isAI);
          const game_speed_base = this.userModel.game_speed_base;
          const game_lv_speed_up = this.userModel.game_lv_speed_up;
          return external_speed + game_speed_base + game_lv_speed_up * lv;
        }
        /** 被吃掉提供的经验值*/


        getStormSunderExp(lv) {
          const game_absorbec_exp_base = this.userModel.game_absorbec_exp_base;
          const game_lv_absorbec_exp_up = this.userModel.game_lv_absorbec_exp_up;
          return game_absorbec_exp_base + game_lv_absorbec_exp_up * lv;
        }
        /** 经验加成后最终值*/


        getExpBonus(exp, isAI) {
          const expProgress = Math.floor(this.getBonus(BonusType.EXP, isAI) / 100);
          return exp * (1 + expProgress);
        }

      }); //属性加成类型


      AttributeBonusMgr._instance = void 0;

      _export("BonusType", BonusType = /*#__PURE__*/function (BonusType) {
        BonusType[BonusType["ATTACK"] = 1] = "ATTACK";
        BonusType[BonusType["SPEED"] = 2] = "SPEED";
        BonusType[BonusType["EXP"] = 3] = "EXP";
        return BonusType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4dd3d1bda348bd360fdeed4df6a47dda5c4d129.js.map