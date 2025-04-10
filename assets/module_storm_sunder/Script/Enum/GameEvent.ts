export class GameEvent {
    /** 地图加载完成*/
    static readonly EVENT_MAP_LOAD_COMPLETE = 'EVENT_MAP_LOAD_COMPLETE';
    /** 游戏开始*/
    static readonly EVENT_GAME_START = 'EVENT_GAME_START';
    /**龙卷风重置*/
    static readonly EVENT_STORM_RESET = 'EVENT_STORM_RESET';

    /**刷新主界面按钮等级*/
    static readonly EVENT_REFRESH_MAIN_BTN_LEVEL = 'EVENT_REFRESH_MAIN_BTN_LEVEL';

    /** 龙卷风复活*/
    static readonly EVENT_STORM_RESURRECT = 'EVENT_STORM_RESURRECT';

    /** 开局特效*/
    static readonly EVENT_GAME_START_EFFECT = 'EVENT_GAME_START_EFFECT';

    /** 刷新排行榜*/
    static readonly EVENT_REFRESH_RANK = 'EVENT_REFRESH_RANK';

    /** 更新玩家游戏经验*/
    static readonly EVENT_UPDATE_USER_EXP = 'EVENT_UPDATE_USER_EXP';

    /* 更新用户金额*/
    static readonly EVENT_UPDATE_USER_MONEY = 'EVENT_UPDATE_USER_MONEY';

    /** 龙卷风升级*/
    static readonly EVENT_STORM_LEVEL_UP = 'EVENT_STORM_LEVEL_UP';

    /** 检测游戏是否结束*/
    static readonly EVENT_CHECK_GAME_OVER = 'EVENT_CHECK_GAME_OVER';

    /** 闯关成功 关卡升级*/
    static readonly EVENT_BATTLE_SUCCESS_LEVEL_UP = 'EVENT_BATTLE_SUCCESS_LEVEL_UP';
}