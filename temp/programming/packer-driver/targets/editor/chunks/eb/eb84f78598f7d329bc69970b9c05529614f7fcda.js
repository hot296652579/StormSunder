System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioMgr, AdvertMgr, _dec, _class, _class2, _crd, ccclass, property, GlobalMgr;

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "../core_tgx/base/AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdvertMgr(extras) {
    _reporterNs.report("AdvertMgr", "../core_tgx/base/ad/AdvertMgr", _context.meta, extras);
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
      AudioMgr = _unresolved_2.AudioMgr;
    }, function (_unresolved_3) {
      AdvertMgr = _unresolved_3.AdvertMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13efcXgb51ALL6fUqMOeIrw", "GlobalMgr", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator', 'assetManager', 'find', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GlobalMgr", GlobalMgr = (_dec = ccclass('GlobalMgr'), _dec(_class = (_class2 = class GlobalMgr {
        static get instance() {
          if (!this._instance) this._instance = new GlobalMgr();
          return this._instance;
        } //初始化__woso 挂载到window对象上


        initilize() {
          window.__woso = {
            SoundMr: {
              pauseAll: () => {
                GlobalMgr.instance.pauseAllSounds();
              },
              resumeAll: () => {
                GlobalMgr.instance.resumeAllSounds();
              }
            },
            TargetedAds: {
              open: () => {
                GlobalMgr.instance.openAd();
              },
              clos: () => {
                GlobalMgr.instance.closeAd();
              }
            },
            Fps: {
              setfps: value => {
                GlobalMgr.instance.setfps(value);
              }
            }
          };
        } // 暂停所有声音


        pauseAllSounds() {
          // console.log("暂停游戏所有声音 oh~~~~~~~~~~~");
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.toggleBgMusic(false);
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.toggleSoundEffects(false);
        } // 恢复所有声音


        resumeAllSounds() {
          // console.log("恢复游戏所有声音 emo~~~~~~~~~~");
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.toggleBgMusic(true);
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.toggleSoundEffects(true);
        } //开启广告


        openAd() {
          console.log("开启广告");
          (_crd && AdvertMgr === void 0 ? (_reportPossibleCrUseOfAdvertMgr({
            error: Error()
          }), AdvertMgr) : AdvertMgr).instance.openAd = true;
        } //关闭广告


        closeAd() {
          console.log("关闭广告");
          (_crd && AdvertMgr === void 0 ? (_reportPossibleCrUseOfAdvertMgr({
            error: Error()
          }), AdvertMgr) : AdvertMgr).instance.openAd = false;
        } //设置帧率


        setfps(value) {
          console.log("设置帧率:", value);
        }

        timeTest() {
          setTimeout(() => {
            window.__woso.SoundMr.pauseAll();
          }, 2000);
        }

      }, _class2._instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb84f78598f7d329bc69970b9c05529614f7fcda.js.map