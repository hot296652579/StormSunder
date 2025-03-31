System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ADEvent, _crd;

  _export("ADEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6430beYDShLL4d46ogx7LEU", "ADEvent", undefined);

      /** 广告事件*/
      _export("ADEvent", ADEvent = class ADEvent {});

      /** 激励广告显示播放*/
      ADEvent.REWARD_VIDEO_PLAY = "REWARD_VIDEO_PLAY";

      /** 激励广告玩家手动关闭*/
      ADEvent.REWARD_VIDEO_DISMISSED = "REWARD_VIDEO_DISMISSED";

      /** 激励广告播放完成关闭*/
      ADEvent.REWARD_VIDEO_CLOSEED = "REWARD_VIDEO_CLOSEED";

      /** 激励广告错误*/
      ADEvent.REWARD_VIDEO_ERROR = "REWARD_VIDEO_ERROR";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b561674457fc4f9e80e2a6fc162cdbb14c142ab.js.map