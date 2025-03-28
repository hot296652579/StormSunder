export class GameEvent {
    /** 通知UI实例化*/
    static readonly EVENT_UI_INITILIZE = 'EVENT_UI_INITILIZE';
    /** 游戏开始*/
    static readonly EVENT_GAME_START = 'EVENT_GAME_START';

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