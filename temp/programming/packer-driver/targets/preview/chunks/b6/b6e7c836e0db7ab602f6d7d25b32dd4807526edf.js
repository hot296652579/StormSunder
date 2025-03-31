System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Prefab, Node, UITransform, resLoader, StormSunderGlobalInstance, BloodComponent, PlayerInfoComponent, GameUtil, ExpPropComponent, Effect2DUIMgr, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "db://assets/core_tgx/base/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStormSunderGlobalInstance(extras) {
    _reporterNs.report("StormSunderGlobalInstance", "../StormSunderGlobalInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBloodComponent(extras) {
    _reporterNs.report("BloodComponent", "../Component/BloodComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "../Component/PlayerInfoComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfoComponent(extras) {
    _reporterNs.report("PlayerInfoComponent", "../Component/PlayerInfoComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExpPropComponent(extras) {
    _reporterNs.report("ExpPropComponent", "../Component/ExpPropComponent", _context.meta, extras);
  }

  _export("Effect2DUIMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }, function (_unresolved_3) {
      StormSunderGlobalInstance = _unresolved_3.StormSunderGlobalInstance;
    }, function (_unresolved_4) {
      BloodComponent = _unresolved_4.BloodComponent;
    }, function (_unresolved_5) {
      PlayerInfoComponent = _unresolved_5.PlayerInfoComponent;
    }, function (_unresolved_6) {
      GameUtil = _unresolved_6.GameUtil;
    }, function (_unresolved_7) {
      ExpPropComponent = _unresolved_7.ExpPropComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4de2RbWCJODpxCRkHs93pV", "Effect2DUIMgr", undefined);
      /** 2dUI 特效 血条 粒子等管理器*/


      __checkObsolete__(['assetManager', 'instantiate', 'Prefab', 'Node', 'UITransform', 'Vec3', 'Vec2', 'view', 'Game']);

      _export("Effect2DUIMgr", Effect2DUIMgr = class Effect2DUIMgr {
        constructor() {
          this.bloodMap = new Map();
          // 存储节点与对应血条的映射
          this.playerInfoMap = new Map();
        }

        static get Instance() {
          if (this._instance == null) {
            this._instance = new Effect2DUIMgr();
          }

          return this._instance;
        }

        static get inst() {
          return this.Instance;
        }

        // 存储节点与玩家信息的映射
        showBlood(target, hpPercent) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var bloodUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
              error: Error()
            }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.bloodUI; // 1. 使用占位符防止重复创建

            if (_this.bloodMap.has(target)) {
              var existing = _this.bloodMap.get(target);

              if (existing instanceof Node) {
                var bloodComp = existing.getComponent(_crd && BloodComponent === void 0 ? (_reportPossibleCrUseOfBloodComponent({
                  error: Error()
                }), BloodComponent) : BloodComponent);

                if (bloodComp) {
                  bloodComp.updateHP(hpPercent);
                }

                var height = existing.getComponent(UITransform).height * 20;
                console.log('height:', height);

                _this.setPlayerInfoPosition(existing, target, bloodUI, height);
              }

              return; // 正在加载或已存在
            } // 2. 设置加载占位符


            _this.bloodMap.set(target, null);

            try {
              var bloodPrefab = yield (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).loadAsync((_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).gameBundleName, "Prefabs/Blood", Prefab);
              var bloodNode = instantiate(bloodPrefab);
              bloodNode.parent = bloodUI;

              var _bloodComp = bloodNode.getComponent(_crd && BloodComponent === void 0 ? (_reportPossibleCrUseOfBloodComponent({
                error: Error()
              }), BloodComponent) : BloodComponent);

              if (_bloodComp) {
                _bloodComp.updateHP(hpPercent);
              }

              var _height = bloodNode.getComponent(UITransform).height * 20;

              _this.setPlayerInfoPosition(bloodNode, target, bloodUI, _height);

              _this.bloodMap.set(target, bloodNode);
            } catch (error) {
              // 异常处理：移除占位符允许重试
              _this.bloodMap.delete(target);

              console.error("加载血条失败:", error);
            }
          })();
        }
        /** 龙卷风添加信息预设*/


        addPlayerInfo(target, playerInfo) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var effectUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
              error: Error()
            }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.effectUI; // 1. 使用占位符防止重复创建

            if (_this2.playerInfoMap.has(target)) {
              var existing = _this2.playerInfoMap.get(target);

              if (existing instanceof Node) {
                _this2.setPlayerInfoPosition(existing, target, effectUI);
              }

              return; // 正在加载或已存在
            } // 2. 设置加载占位符


            _this2.playerInfoMap.set(target, null);

            try {
              var infoPrefab = yield (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).loadAsync((_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).gameBundleName, "Prefabs/PlayerInfo", Prefab);
              var infoNode = instantiate(infoPrefab);
              infoNode.parent = effectUI;
              var playerInfoComp = infoNode.getComponent(_crd && PlayerInfoComponent === void 0 ? (_reportPossibleCrUseOfPlayerInfoComponent({
                error: Error()
              }), PlayerInfoComponent) : PlayerInfoComponent);
              playerInfoComp == null || playerInfoComp.updateInfo(playerInfo);

              _this2.setPlayerInfoPosition(infoNode, target, effectUI);

              _this2.playerInfoMap.set(target, infoNode);
            } catch (error) {
              // 异常处理：移除占位符允许重试
              _this2.playerInfoMap.delete(target);

              console.error("加载玩家信息失败:", error);
            }
          })();
        }

        setPlayerInfoPosition(infoNode, target, parentUI, distance) {
          if (distance === void 0) {
            distance = 150;
          }

          var uiPos = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).worldToScreenLocal(target, parentUI);
          infoNode.setPosition(uiPos.x, uiPos.y + distance);
        } //更新对应玩家信息


        updatePlayerInfo(target, playerInfo) {
          var infoNode = this.playerInfoMap.get(target);

          if (infoNode) {
            var playerInfoComp = infoNode.getComponent(_crd && PlayerInfoComponent === void 0 ? (_reportPossibleCrUseOfPlayerInfoComponent({
              error: Error()
            }), PlayerInfoComponent) : PlayerInfoComponent);

            if (playerInfoComp) {
              playerInfoComp.updateInfo(playerInfo);
            }
          }
        } //目标节点添加经验渐隐显示


        addExpProp(target, exp) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var expPrefab = yield (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadAsync((_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).gameBundleName, "Prefabs/ExpProp", Prefab);

            if (expPrefab) {
              var expNode = instantiate(expPrefab);
              var effectUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
                error: Error()
              }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.effectUI;
              expNode.parent = effectUI;

              _this3.setPlayerInfoPosition(expNode, target, effectUI, 0);

              expNode.getComponent(_crd && ExpPropComponent === void 0 ? (_reportPossibleCrUseOfExpPropComponent({
                error: Error()
              }), ExpPropComponent) : ExpPropComponent).showExp(exp); // console.log("targetLocal:", targetLocal);
            }
          })();
        } // 清理血条


        removeBlood(target) {
          var bloodNode = this.bloodMap.get(target);

          if (bloodNode) {
            bloodNode.destroy();
            this.bloodMap.delete(target);
          }
        } // 清理玩家信息节点


        removePlayerInfo(target) {
          var infoNode = this.playerInfoMap.get(target);

          if (infoNode) {
            infoNode.destroy();
            this.playerInfoMap.delete(target);
          }
        }

      });

      Effect2DUIMgr._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b6e7c836e0db7ab602f6d7d25b32dd4807526edf.js.map