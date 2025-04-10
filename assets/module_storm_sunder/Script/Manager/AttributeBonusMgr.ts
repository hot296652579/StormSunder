import { Tableai_config } from "db://assets/module_basic/table/Tableai_config";
import { DevelopConfigModel } from "../Model/DevelopConfigModel";
import { UserModel } from "../Model/UserModel";
import { MainConfigModel } from "../Model/MainConfigModel";
import { AiConfigModel } from "../Model/AiConfigModel";
import { EventDispatcher } from "db://assets/core_tgx/easy_ui_framework/EventDispatcher";
import { GameEvent } from "../Enum/GameEvent";
import { NameConfigModel } from "../Model/NameConfigModel";
import { MapConfigModel } from "../Model/MapConfigModel";

/** 属性加成管理器*/
export class AttributeBonusMgr {
    private static _instance: AttributeBonusMgr;
    public static get inst(): AttributeBonusMgr {
        if (this._instance == null) {
            this._instance = new AttributeBonusMgr();
        }
        return this._instance;
    }

    userModel: UserModel;
    nameModelConfig: NameConfigModel;
    developConfig: DevelopConfigModel;
    aiConfig: AiConfigModel;
    mainConfig: MainConfigModel;
    mapConfig: MapConfigModel;

    initilize() {
        this.userModel = new UserModel();
        this.nameModelConfig = new NameConfigModel();
        this.mainConfig = new MainConfigModel();
        this.mapConfig = new MapConfigModel();
        this.developConfig = new DevelopConfigModel();
        this.aiConfig = new AiConfigModel();
        this.userModel.initialize();
    }

    /** 用户增加金额*/
    public addMoney(money: number) {
        this.userModel.money += money;
        EventDispatcher.instance.emit(GameEvent.EVENT_UPDATE_USER_MONEY);
    }

    /**
     * 检查用户金额是否足够
     * @param cost 需要消耗的金额
     * @returns boolean
     */
    public checkMoneyEnough(cost: number): boolean {
        const userMoney = this.userModel.money;
        return userMoney >= cost;
    }

    /**
     * 扣除用户金额
     * @param cost 需要扣除的金额
     * @returns boolean 扣除是否成功
     */
    public consumeMoney(cost: number): boolean {
        if (!this.checkMoneyEnough(cost)) {
            return false;
        }

        this.userModel.money -= cost;
        EventDispatcher.instance.emit(GameEvent.EVENT_UPDATE_USER_MONEY);
        return true;
    }

    /**
     * 更新对应类型的加成数据
     * @param type 加成类型
     */
    public updateBonus(type: BonusType): void {
        const bonus = this.userModel.bonusData[type];
        if (!bonus) return;

        // 更新等级和升级消耗
        this.userModel.bonusData[type] = {
            ...bonus,
            level: bonus.level,
            upgradeCost: bonus.upgradeCost
        };
    }

    /** 获取配置升级消耗增加金额*/
    public getUpgradeCost(type: BonusType): number {
        const config = this.developConfig.getConfigById(type);
        if (!config) return 0;
        return config.money_growth
    }

    /** 获取类型最终属性加成*/
    public getBonus(type: BonusType, isAI?: boolean): number {
        const { level, base, up_value } = this.userModel.bonusData[type];
        let finialLevel = 1;
        if (!isAI) {
            finialLevel = level;
        } else {
            const aiRange = this.userModel.game_ai_range;
            const randomOffset = Math.floor(Math.random() * (aiRange[1] - aiRange[0] + 1)) + aiRange[0];
            const newLv = level + randomOffset;
            finialLevel = newLv < 0 ? 3 : newLv; // 如果计算结果小于 0，则返回 3
        }
        // console.log(`base:${base},up_value:${up_value},finialLevel:${finialLevel}`)
        return base + (finialLevel - 1) * up_value;
    }

    /** 升级需要的经验*/
    public getExpNeed(level: number): number {
        return 25 * (level * level - level + 2);
    }

    /** 计算玩家龙卷风攻击力*/
    public getStormSunderAttack(lv: number, isAI?: boolean): number {
        const external_attack = this.getBonus(BonusType.ATTACK, isAI);
        const game_attack_base = this.userModel.game_attack_base;
        const game_lv_attack_up = this.userModel.game_lv_attack_up;
        return external_attack + game_attack_base + game_lv_attack_up * lv;
    }

    /** 计算玩家龙卷风速度*/
    public getStormSunderSpeed(lv: number, isAI?: boolean): number {
        const external_speed = this.getBonus(BonusType.SPEED, isAI);
        const game_speed_base = this.userModel.game_speed_base;
        const game_lv_speed_up = this.userModel.game_lv_speed_up;
        return external_speed + game_speed_base + game_lv_speed_up * lv;
    }

    /** 被吃掉提供的经验值*/
    public getStormSunderExp(lv: number): number {
        const game_absorbec_exp_base = this.userModel.game_absorbec_exp_base;
        const game_lv_absorbec_exp_up = this.userModel.game_lv_absorbec_exp_up;
        return game_absorbec_exp_base + game_lv_absorbec_exp_up * lv;
    }

    /** 经验加成后最终值*/
    public getExpBonus(exp: number, isAI?: boolean): number {
        const expProgress = this.getBonus(BonusType.EXP, isAI) / 100;
        return exp * (1 + parseFloat(expProgress.toString()));
    }
}

//属性加成类型
export enum BonusType {
    ATTACK = 1,
    SPEED = 2,
    EXP = 3,
}