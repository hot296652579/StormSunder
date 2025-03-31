System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Component, director, game, Label, Prefab, PhysicsSystem2D, EPhysics2DDrawFlags, AudioClip, ProgressBar, tgxModuleContext, tgxUIMgr, GameUILayers, GameUILayerNames, ModuleDef, SceneDef, JsonUtil, GtagMgr, GtagType, AdvertMgr, GlobalConfig, GlobalMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, _preloadBundles, _preloadRes, _loadingText, _totalNum, Start;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftgxModuleContext(extras) {
    _reporterNs.report("tgxModuleContext", "../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxUIMgr(extras) {
    _reporterNs.report("tgxUIMgr", "../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUILayers(extras) {
    _reporterNs.report("GameUILayers", "../scripts/GameUILayers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUILayerNames(extras) {
    _reporterNs.report("GameUILayerNames", "../scripts/GameUILayers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleDef(extras) {
    _reporterNs.report("ModuleDef", "../scripts/ModuleDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneDef(extras) {
    _reporterNs.report("SceneDef", "../scripts/SceneDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../core_tgx/base/utils/JsonUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGtagMgr(extras) {
    _reporterNs.report("GtagMgr", "../core_tgx/base/GtagMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGtagType(extras) {
    _reporterNs.report("GtagType", "../core_tgx/base/GtagMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdvertMgr(extras) {
    _reporterNs.report("AdvertMgr", "../core_tgx/base/ad/AdvertMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalConfig(extras) {
    _reporterNs.report("GlobalConfig", "./Config/GlobalConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalMgr(extras) {
    _reporterNs.report("GlobalMgr", "../scripts/GlobalMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      director = _cc.director;
      game = _cc.game;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      AudioClip = _cc.AudioClip;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      tgxModuleContext = _unresolved_2.tgxModuleContext;
      tgxUIMgr = _unresolved_2.tgxUIMgr;
    }, function (_unresolved_3) {
      GameUILayers = _unresolved_3.GameUILayers;
      GameUILayerNames = _unresolved_3.GameUILayerNames;
    }, function (_unresolved_4) {
      ModuleDef = _unresolved_4.ModuleDef;
    }, function (_unresolved_5) {
      SceneDef = _unresolved_5.SceneDef;
    }, function (_unresolved_6) {
      JsonUtil = _unresolved_6.JsonUtil;
    }, function (_unresolved_7) {
      GtagMgr = _unresolved_7.GtagMgr;
      GtagType = _unresolved_7.GtagType;
    }, function (_unresolved_8) {
      AdvertMgr = _unresolved_8.AdvertMgr;
    }, function (_unresolved_9) {
      GlobalConfig = _unresolved_9.GlobalConfig;
    }, function (_unresolved_10) {
      GlobalMgr = _unresolved_10.GlobalMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66e163GxmdDp7kaguqDvTVl", "Start", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Component', 'director', 'game', 'Label', 'Prefab', 'Node', 'AssetManager', 'Asset', 'PhysicsSystem', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'AudioClip', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);
      _preloadBundles = [(_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
        error: Error()
      }), ModuleDef) : ModuleDef).BASIC, (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
        error: Error()
      }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER];
      _preloadRes = [{
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).BASIC,
        url: 'ui_alert/UI_Alert',
        type: 'prefab'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).BASIC,
        url: 'ui_tips/UI_Tips',
        type: 'prefab'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).BASIC,
        url: 'ui_waiting/UI_Waiting',
        type: 'prefab'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Prefabs/Map',
        type: 'prefab'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Prefabs/Map1',
        type: 'prefab'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Prefabs/Blood',
        type: 'prefab'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Prefabs/PlayerInfo',
        type: 'prefab'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Prefabs/ExpProp',
        type: 'prefab'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Prefabs/Levels/lvl_1',
        type: 'prefab'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Audio/bgm_1.mp3',
        type: 'audio'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Audio/bgm_2.mp3',
        type: 'audio'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Audio/dianji.mp3',
        type: 'audio'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Audio/luosi.mp3',
        type: 'audio'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Audio/shengli.mp3',
        type: 'audio'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Audio/shibai.mp3',
        type: 'audio'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Audio/yidong.mp3',
        type: 'audio'
      }, {
        bundle: (_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
          error: Error()
        }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER,
        url: 'Audio/zhuangche.mp3',
        type: 'audio'
      }];
      _loadingText = ['Loading.', 'Loading..', 'Loading...'];
      _totalNum = _preloadBundles.length + _preloadRes.length + 1;

      _export("Start", Start = (_dec = ccclass('Start'), _dec2 = property(Label), _dec3 = property(Prefab), _dec4 = property(ProgressBar), _dec(_class = (_class2 = class Start extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtLoading", _descriptor, this);

          _initializerDefineProperty(this, "uiCanvasPrefab", _descriptor2, this);

          // @property(Node)
          // loadingBar: Node;
          _initializerDefineProperty(this, "loadingBar", _descriptor3, this);

          this._percent = '';
          this._numCurrentLoaded = 0;
        }

        onLoad() {
          (_crd && GlobalMgr === void 0 ? (_reportPossibleCrUseOfGlobalMgr({
            error: Error()
          }), GlobalMgr) : GlobalMgr).instance.initilize(); // GlobalMgr.instance.timeTest();

          (_crd && AdvertMgr === void 0 ? (_reportPossibleCrUseOfAdvertMgr({
            error: Error()
          }), AdvertMgr) : AdvertMgr).instance.initilize();

          if (!(_crd && GlobalConfig === void 0 ? (_reportPossibleCrUseOfGlobalConfig({
            error: Error()
          }), GlobalConfig) : GlobalConfig).isDebug) {
            (_crd && AdvertMgr === void 0 ? (_reportPossibleCrUseOfAdvertMgr({
              error: Error()
            }), AdvertMgr) : AdvertMgr).instance.showInterstitial();
          }
        }

        start() {
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
          PhysicsSystem2D.instance.debugDrawFlags = 0; // 启用调试绘制

          (_crd && tgxModuleContext === void 0 ? (_reportPossibleCrUseOftgxModuleContext({
            error: Error()
          }), tgxModuleContext) : tgxModuleContext).setDefaultModule((_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
            error: Error()
          }), ModuleDef) : ModuleDef).BASIC);
          game.frameRate = 60;
          (_crd && tgxUIMgr === void 0 ? (_reportPossibleCrUseOftgxUIMgr({
            error: Error()
          }), tgxUIMgr) : tgxUIMgr).inst.setup(this.uiCanvasPrefab, (_crd && GameUILayers === void 0 ? (_reportPossibleCrUseOfGameUILayers({
            error: Error()
          }), GameUILayers) : GameUILayers).NUM, _crd && GameUILayerNames === void 0 ? (_reportPossibleCrUseOfGameUILayerNames({
            error: Error()
          }), GameUILayerNames) : GameUILayerNames);
          this.preloadBundle(0);
          (_crd && GtagMgr === void 0 ? (_reportPossibleCrUseOfGtagMgr({
            error: Error()
          }), GtagMgr) : GtagMgr).inst.init();
          this.loadConfig();
          (_crd && GtagMgr === void 0 ? (_reportPossibleCrUseOfGtagMgr({
            error: Error()
          }), GtagMgr) : GtagMgr).inst.doGameDot((_crd && GtagType === void 0 ? (_reportPossibleCrUseOfGtagType({
            error: Error()
          }), GtagType) : GtagType).game_start);
        }

        async loadConfig() {
          await this.loadCustom();
        }

        loadCustom() {
          return new Promise(async (resolve, reject) => {
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadDirAsync();
            resolve(null);
          });
        }

        onResLoaded() {
          this._numCurrentLoaded++;
          this._percent = ~~(this._numCurrentLoaded / _totalNum * 100) + '%';
        }

        preloadBundle(idx) {
          assetManager.loadBundle(_preloadBundles[idx], null, (err, bundle) => {
            console.log('module:<' + _preloadBundles[idx] + '>loaded.');
            idx++;
            this.onResLoaded();

            if (idx < _preloadBundles.length) {
              this.preloadBundle(idx);
            } else {
              this.preloadRes(0);
            }
          });
        }

        preloadRes(idx) {
          let res = _preloadRes[idx]; // console.log('预加载资源：' + res.url);

          let bundle = assetManager.getBundle(res.bundle);

          let onComplete = () => {
            idx++;
            this.onResLoaded();

            if (idx < _preloadRes.length) {
              this.preloadRes(idx);
            } else {
              this.onPreloadingComplete();
            }
          };

          if (bundle) {
            if (res.type == 'prefab') {
              bundle.preload(res.url, Prefab, onComplete);
            } else if (res.type == 'audio') {
              bundle.preload(res.url, AudioClip, onComplete);
            }
          }
        }

        onPreloadingComplete() {
          let bundle = assetManager.getBundle((_crd && ModuleDef === void 0 ? (_reportPossibleCrUseOfModuleDef({
            error: Error()
          }), ModuleDef) : ModuleDef).MODULE_STORM_SUNDER);
          bundle.preloadScene((_crd && SceneDef === void 0 ? (_reportPossibleCrUseOfSceneDef({
            error: Error()
          }), SceneDef) : SceneDef).ROOSTER_STORMSUNDER, () => {
            this.onResLoaded(); // director.loadScene(SceneDef.MAIN_MENU);

            const info = {
              bundle: 'module_storm_sunder',
              entryScene: 'rooster_stormsunder'
            }; // tgxUIWaiting.show();

            assetManager.loadBundle(info.bundle, (err, bundle) => {
              if (bundle) {
                director.loadScene(info.entryScene, () => {
                  (_crd && tgxUIMgr === void 0 ? (_reportPossibleCrUseOftgxUIMgr({
                    error: Error()
                  }), tgxUIMgr) : tgxUIMgr).inst.hideAll();
                });
              }
            });
          });
        }

        update(deltaTime) {
          if (this._percent) {
            this.txtLoading.string = 'Loading...' + this._percent;
          } else {
            let idx = Math.floor(game.totalTime / 1000) % 3;
            this.txtLoading.string = _loadingText[idx];
          } // this.loadingBar.setScale(this._numCurrentLoaded / _totalNum, 1, 1);


          this.loadingBar.progress = this._numCurrentLoaded / _totalNum;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtLoading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiCanvasPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loadingBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c1dea459a9a1a0dbeedffb6b378b0065dfb358b.js.map