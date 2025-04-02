import { AttributeBonusMgr, BonusType } from "../Manager/AttributeBonusMgr";

/**玩家数据模型
 * @param attack 攻击力
 * @param money 金币
 * @param expPower 经验加成
*/
export class UserModel {
    money: number = 0;
    nickName: string = 'player'; //昵称
    // userTornadoLevel: number = 1; //玩家风暴等级

    /** 游戏内基础攻击*/
    game_attack_base: number = 0;
    /** 游戏内等级升级提升的攻击力*/
    game_lv_attack_up: number = 0;
    /** 游戏内基础速度*/
    game_speed_base: number = 0;
    /** 游戏内等级升级提升的速度*/
    game_lv_speed_up: number = 0;
    game_expPower_base: number = 0;//经验基础加成
    game_absorbec_exp_base: number = 0;//被吸收基础提供经验值
    game_lv_absorbec_exp_up: number = 0;//升级提供的经验值提升
    game_modleVolume_base: number = 0; //模型体积
    game_lv_modleVolume_up: number = 0;//升级提供的模型体积提升
    game_attack_count: number = 0;//每秒攻击次数

    //龙卷风基础高度
    game_tornado_base_height: number = 0;

    //每获得1经验提升的高度值
    game_exp_height: number = 0;

    //开局弹窗提升的龙卷风破坏范围百分比
    game_tornado_damage: number = 0;

    //ai属性浮动区间值
    game_ai_range: number = 0;
    //基础通关奖励
    game_base_pass_reward: number = 0;
    //奖励养成属性加成百分比
    game_reward_develop: number = 0;
    //奖励排名减益百分比
    game_reward_rank: number = 0;
    //通过多倍奖励倍率
    game_pass_reward_multiple: number = 0;

    bonusData: Record<BonusType, BonusItem> = null;

    uniqueNames: Set<string> = new Set<string>();

    constructor() {
    }

    initialize() {
        const attackDevelopConfig = AttributeBonusMgr.inst.developConfig.getConfigById(BonusType.ATTACK);
        const speedDevelopConfig = AttributeBonusMgr.inst.developConfig.getConfigById(BonusType.SPEED);
        const expDevelopConfig = AttributeBonusMgr.inst.developConfig.getConfigById(BonusType.EXP);

        const mainConfig = AttributeBonusMgr.inst.mainConfig;

        this.game_tornado_base_height = mainConfig.getPramById(3); //龙卷风基础高度
        this.game_exp_height = mainConfig.getPramById(4); //每获得1经验提升的高度值
        this.game_attack_base = mainConfig.getPramById(5); //基础攻击力
        this.game_lv_attack_up = mainConfig.getPramById(6);//每级提升的攻击力
        this.game_attack_count = mainConfig.getPramById(7);//每秒攻击次数
        this.game_speed_base = mainConfig.getPramById(8); //基础速度
        this.game_lv_speed_up = mainConfig.getPramById(9);//每级提升的速度
        this.game_expPower_base = mainConfig.getPramById(10);//经验基础加成
        this.game_absorbec_exp_base = mainConfig.getPramById(11);//每次升级时提升的提供经验值
        this.game_modleVolume_base = mainConfig.getPramById(12);
        this.game_lv_modleVolume_up = mainConfig.getPramById(13);

        this.game_tornado_damage = mainConfig.getPramById(14); //开局扩大范围
        this.game_ai_range = mainConfig.getPramById(15);
        this.game_base_pass_reward = mainConfig.getPramById(16);
        this.game_reward_develop = mainConfig.getPramById(17);
        this.game_reward_rank = mainConfig.getPramById(18);
        this.game_pass_reward_multiple = mainConfig.getPramById(19);

        //升级基础货币
        const attack_base_currency = attackDevelopConfig.base_currency;
        const speed_base_currency = speedDevelopConfig.base_currency;
        const exp_base_currency = expDevelopConfig.base_currency;

        //属性初始值
        const attack_external_base = attackDevelopConfig.base;
        const speed_external_base = speedDevelopConfig.base;
        const exp_external_base = expDevelopConfig.base;

        //属性提升值
        const attack_external_upValue = attackDevelopConfig.up_value;
        const speed_external_upValue = speedDevelopConfig.up_value;
        const exp_external_upValue = expDevelopConfig.up_value;

        this.bonusData = {
            [BonusType.ATTACK]: { level: 1, base: attack_external_base, up_value: attack_external_upValue, upgradeCost: attack_base_currency },
            [BonusType.SPEED]: { level: 1, base: speed_external_base, up_value: speed_external_upValue, upgradeCost: speed_base_currency },
            [BonusType.EXP]: { level: 1, base: exp_external_base, up_value: exp_external_upValue, upgradeCost: exp_base_currency }
        };
    }
}

// 定义 Bonus 数据结构
interface BonusItem {
    level: number;
    base: number; //基础值
    up_value: number; // 提升值
    upgradeCost: number;
}
