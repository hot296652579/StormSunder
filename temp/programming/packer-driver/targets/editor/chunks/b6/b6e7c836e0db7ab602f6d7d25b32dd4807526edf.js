System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Prefab, Node, UITransform, resLoader, StormSunderGlobalInstance, BloodComponent, PlayerInfoComponent, GameUtil, ExpPropComponent, Effect2DUIMgr, _crd;

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
        async showBlood(target, hpPercent) {
          const bloodUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.bloodUI; // 1. 使用占位符防止重复创建

          if (this.bloodMap.has(target)) {
            const existing = this.bloodMap.get(target);

            if (existing instanceof Node) {
              const bloodComp = existing.getComponent(_crd && BloodComponent === void 0 ? (_reportPossibleCrUseOfBloodComponent({
                error: Error()
              }), BloodComponent) : BloodComponent);

              if (bloodComp) {
                bloodComp.updateHP(hpPercent);
              }

              const height = existing.getComponent(UITransform).height * 20;
              console.log('height:', height);
              this.setPlayerInfoPosition(existing, target, bloodUI, height);
            }

            return; // 正在加载或已存在
          } // 2. 设置加载占位符


          this.bloodMap.set(target, null);

          try {
            const bloodPrefab = await (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadAsync((_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).gameBundleName, "Prefabs/Blood", Prefab);
            const bloodNode = instantiate(bloodPrefab);
            bloodNode.parent = bloodUI;
            const bloodComp = bloodNode.getComponent(_crd && BloodComponent === void 0 ? (_reportPossibleCrUseOfBloodComponent({
              error: Error()
            }), BloodComponent) : BloodComponent);

            if (bloodComp) {
              bloodComp.updateHP(hpPercent);
            }

            const height = bloodNode.getComponent(UITransform).height * 20;
            this.setPlayerInfoPosition(bloodNode, target, bloodUI, height);
            this.bloodMap.set(target, bloodNode);
          } catch (error) {
            // 异常处理：移除占位符允许重试
            this.bloodMap.delete(target);
            console.error("加载血条失败:", error);
          }
        }
        /** 龙卷风添加信息预设*/


        async addPlayerInfo(target, playerInfo) {
          const effectUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.effectUI; // 1. 使用占位符防止重复创建

          if (this.playerInfoMap.has(target)) {
            const existing = this.playerInfoMap.get(target);

            if (existing instanceof Node) {
              this.setPlayerInfoPosition(existing, target, effectUI);
            }

            return; // 正在加载或已存在
          } // 2. 设置加载占位符


          this.playerInfoMap.set(target, null);

          try {
            const infoPrefab = await (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadAsync((_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).gameBundleName, "Prefabs/PlayerInfo", Prefab);
            const infoNode = instantiate(infoPrefab);
            infoNode.parent = effectUI;
            const playerInfoComp = infoNode.getComponent(_crd && PlayerInfoComponent === void 0 ? (_reportPossibleCrUseOfPlayerInfoComponent({
              error: Error()
            }), PlayerInfoComponent) : PlayerInfoComponent);
            playerInfoComp == null || playerInfoComp.updateInfo(playerInfo);
            this.setPlayerInfoPosition(infoNode, target, effectUI);
            this.playerInfoMap.set(target, infoNode);
          } catch (error) {
            // 异常处理：移除占位符允许重试
            this.playerInfoMap.delete(target);
            console.error("加载玩家信息失败:", error);
          }
        }

        setPlayerInfoPosition(infoNode, target, parentUI, distance = 150) {
          const uiPos = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).worldToScreenLocal(target, parentUI);
          infoNode.setPosition(uiPos.x, uiPos.y + distance);
        } //更新对应玩家信息


        updatePlayerInfo(target, playerInfo) {
          const infoNode = this.playerInfoMap.get(target);

          if (infoNode) {
            const playerInfoComp = infoNode.getComponent(_crd && PlayerInfoComponent === void 0 ? (_reportPossibleCrUseOfPlayerInfoComponent({
              error: Error()
            }), PlayerInfoComponent) : PlayerInfoComponent);

            if (playerInfoComp) {
              playerInfoComp.updateInfo(playerInfo);
            }
          }
        } //目标节点添加经验渐隐显示


        async addExpProp(target, exp) {
          const expPrefab = await (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).loadAsync((_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).gameBundleName, "Prefabs/ExpProp", Prefab);

          if (expPrefab) {
            const expNode = instantiate(expPrefab);
            const effectUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
              error: Error()
            }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.effectUI;
            expNode.parent = effectUI;
            this.setPlayerInfoPosition(expNode, target, effectUI, 0);
            expNode.getComponent(_crd && ExpPropComponent === void 0 ? (_reportPossibleCrUseOfExpPropComponent({
              error: Error()
            }), ExpPropComponent) : ExpPropComponent).showExp(exp); // console.log("targetLocal:", targetLocal);
          }
        } // 清理血条


        removeBlood(target) {
          const bloodNode = this.bloodMap.get(target);

          if (bloodNode) {
            bloodNode.destroy();
            this.bloodMap.delete(target);
          }
        } // 清理玩家信息节点


        removePlayerInfo(target) {
          const infoNode = this.playerInfoMap.get(target);

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