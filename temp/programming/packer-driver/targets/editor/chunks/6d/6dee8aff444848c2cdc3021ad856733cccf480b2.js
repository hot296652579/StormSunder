System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventDispatcher, ADEvent, AudioMgr, tgxUITips, GtagMgr, GtagType, _dec, _class, _class2, _crd, ccclass, property, AdvertMgr;

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "../../easy_ui_framework/EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfADEvent(extras) {
    _reporterNs.report("ADEvent", "./ADEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxUITips(extras) {
    _reporterNs.report("tgxUITips", "db://assets/core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGtagMgr(extras) {
    _reporterNs.report("GtagMgr", "db://assets/core_tgx/base/GtagMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGtagType(extras) {
    _reporterNs.report("GtagType", "db://assets/core_tgx/base/GtagMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventDispatcher = _unresolved_2.EventDispatcher;
    }, function (_unresolved_3) {
      ADEvent = _unresolved_3.ADEvent;
    }, function (_unresolved_4) {
      AudioMgr = _unresolved_4.AudioMgr;
    }, function (_unresolved_5) {
      tgxUITips = _unresolved_5.tgxUITips;
    }, function (_unresolved_6) {
      GtagMgr = _unresolved_6.GtagMgr;
      GtagType = _unresolved_6.GtagType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d92aYdY25Lhb1qoZ1C2zbU", "AdvertMgr", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Prefab', 'instantiate', 'Component', 'Camera', 'UITransform', 'v3', 'game', 'view', 'screen', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 广告管理*/

      _export("AdvertMgr", AdvertMgr = (_dec = ccclass('AdvertMgr'), _dec(_class = (_class2 = class AdvertMgr {
        constructor() {
          this.adInstance = null;
          this.gtag = null;
        }

        static get instance() {
          if (!this._instance) this._instance = new AdvertMgr();
          return this._instance;
        }

        initilize() {
          this.adInstance = window['adInstance'];
          console.log('ad sdk初始化');
          console.log(this.adInstance);
        }
        /** 显示插屏广告*/


        showInterstitial(cb) {
          if (!this.adInstance) {
            cb && cb();
            return;
          }

          this.adInstance.interstitialAd({
            beforeAd() {
              console.log('The ad starts playing');
            },

            afterAd() {
              console.log('The ad ends playing');
            },

            error(err) {
              // console.log('The ad failed to load');
              (_crd && tgxUITips === void 0 ? (_reportPossibleCrUseOftgxUITips({
                error: Error()
              }), tgxUITips) : tgxUITips).show(err);
            }

          });
        }
        /** 显示激励广告*/


        showReawardVideo(cb) {
          if (!this.adInstance) {
            cb && cb();
            return;
          }

          this.adInstance.rewardAd({
            beforeAd() {
              console.log('The ad starts playing, and the game should pause.');
              (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
                error: Error()
              }), EventDispatcher) : EventDispatcher).instance.emit((_crd && ADEvent === void 0 ? (_reportPossibleCrUseOfADEvent({
                error: Error()
              }), ADEvent) : ADEvent).REWARD_VIDEO_PLAY);
              (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                error: Error()
              }), AudioMgr) : AudioMgr).inst.pause();
            },

            adDismissed() {
              console.log('Player dismissed the ad before completion.');
              (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
                error: Error()
              }), EventDispatcher) : EventDispatcher).instance.emit((_crd && ADEvent === void 0 ? (_reportPossibleCrUseOfADEvent({
                error: Error()
              }), ADEvent) : ADEvent).REWARD_VIDEO_DISMISSED);
              (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                error: Error()
              }), AudioMgr) : AudioMgr).inst.resume();
            },

            adViewed() {
              console.log('Ad was viewed and closed.');
              if (cb) cb();
              (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
                error: Error()
              }), EventDispatcher) : EventDispatcher).instance.emit((_crd && ADEvent === void 0 ? (_reportPossibleCrUseOfADEvent({
                error: Error()
              }), ADEvent) : ADEvent).REWARD_VIDEO_CLOSEED);
              (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                error: Error()
              }), AudioMgr) : AudioMgr).inst.resume();
            },

            error(err) {
              // console.log(`激励广告错误:${err}`);
              (_crd && tgxUITips === void 0 ? (_reportPossibleCrUseOftgxUITips({
                error: Error()
              }), tgxUITips) : tgxUITips).show(err);
              (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
                error: Error()
              }), EventDispatcher) : EventDispatcher).instance.emit((_crd && ADEvent === void 0 ? (_reportPossibleCrUseOfADEvent({
                error: Error()
              }), ADEvent) : ADEvent).REWARD_VIDEO_ERROR);
              (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
                error: Error()
              }), AudioMgr) : AudioMgr).inst.resume();
              (_crd && GtagMgr === void 0 ? (_reportPossibleCrUseOfGtagMgr({
                error: Error()
              }), GtagMgr) : GtagMgr).inst.doGameDot((_crd && GtagType === void 0 ? (_reportPossibleCrUseOfGtagType({
                error: Error()
              }), GtagType) : GtagType).ad_error);
            }

          });
        }

      }, _class2._instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6dee8aff444848c2cdc3021ad856733cccf480b2.js.map