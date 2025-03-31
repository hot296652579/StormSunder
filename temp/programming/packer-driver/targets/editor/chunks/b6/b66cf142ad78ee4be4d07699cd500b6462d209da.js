System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameEvent, _crd;

  _export("GameEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a0710IA/bJN5K2C9LYXLCXm", "GameEvent", undefined);

      _export("GameEvent", GameEvent = class GameEvent {});

      /** 通知UI实例化*/
      GameEvent.EVENT_UI_INITILIZE = 'EVENT_UI_INITILIZE';

      /** 游戏开始*/
      GameEvent.EVENT_GAME_START = 'EVENT_GAME_START';

      /** 刷新排行榜*/
      GameEvent.EVENT_REFRESH_RANK = 'EVENT_REFRESH_RANK';

      /** 更新玩家游戏经验*/
      GameEvent.EVENT_UPDATE_USER_EXP = 'EVENT_UPDATE_USER_EXP';

      /* 更新用户金额*/
      GameEvent.EVENT_UPDATE_USER_MONEY = 'EVENT_UPDATE_USER_MONEY';

      /** 龙卷风升级*/
      GameEvent.EVENT_STORM_LEVEL_UP = 'EVENT_STORM_LEVEL_UP';

      /** 检测游戏是否结束*/
      GameEvent.EVENT_CHECK_GAME_OVER = 'EVENT_CHECK_GAME_OVER';

      /** 闯关成功 关卡升级*/
      GameEvent.EVENT_BATTLE_SUCCESS_LEVEL_UP = 'EVENT_BATTLE_SUCCESS_LEVEL_UP';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b66cf142ad78ee4be4d07699cd500b6462d209da.js.map