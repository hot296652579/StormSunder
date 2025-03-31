System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GtagMgr, _crd, GtagType;

  _export("GtagMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90384pBPY1AbbNeu1RjwigD", "GtagMgr", undefined);

      /** 上报管理器*/
      _export("GtagMgr", GtagMgr = class GtagMgr {
        constructor() {
          this.gtag = null;
        }

        static get inst() {
          if (!this._inst) {
            this._inst = new GtagMgr();
          }

          return this._inst;
        }

        init() {
          //@ts-ignore
          if (typeof window.gtag === 'function') {
            console.log('gtag is available.'); //@ts-ignore

            this.gtag = window.gtag;
          } else {
            console.warn('gtag is not available.');
          }
        }

        doGameDot(_events, value) {
          if (!this.gtag) {
            console.log('gtag获取失败 无法上报!');
            return;
          }

          if (_events === GtagType.game_start) {
            console.log('gtag上报游戏开始!');
            this.gtag('event', _events, {
              'game_name': document.title
            });
          }

          if (_events === GtagType.level_start) {
            this.gtag('event', _events, {
              'level_name': value.level,
              'game_name': document.title
            });
          }

          if (_events === GtagType.level_end) {
            this.gtag('event', _events, {
              'level_name': value.level,
              'success': 'level success',
              'game_name': document.title
            });
          }

          if (_events === GtagType.ad_error) {
            this.gtag('event', _events, {
              'game_name': document.title
            });
          }
        }

      });

      GtagMgr._inst = null;

      _export("GtagType", GtagType = {
        game_start: "game_start",
        level_start: "level_start",
        level_end: "level_end",
        ad_error: "ad_error"
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5d23bcc903733cd199d1f3537e196903b6a40de.js.map