System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Prefab, resLoader, StormSunderGlobalInstance, TornadoComponent, TornadoAIComponent, AttributeBonusMgr, PlayerMgr, _crd, res;

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "db://assets/core_tgx/base/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStormSunderGlobalInstance(extras) {
    _reporterNs.report("StormSunderGlobalInstance", "../StormSunderGlobalInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTornadoComponent(extras) {
    _reporterNs.report("TornadoComponent", "../Component/TornadoComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTornadoAIComponent(extras) {
    _reporterNs.report("TornadoAIComponent", "../Component/TornadoAIComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttributeBonusMgr(extras) {
    _reporterNs.report("AttributeBonusMgr", "./AttributeBonusMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableai_config(extras) {
    _reporterNs.report("Tableai_config", "db://assets/module_basic/table/Tableai_config", _context.meta, extras);
  }

  _export("PlayerMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }, function (_unresolved_3) {
      StormSunderGlobalInstance = _unresolved_3.StormSunderGlobalInstance;
    }, function (_unresolved_4) {
      TornadoComponent = _unresolved_4.TornadoComponent;
    }, function (_unresolved_5) {
      TornadoAIComponent = _unresolved_5.TornadoAIComponent;
    }, function (_unresolved_6) {
      AttributeBonusMgr = _unresolved_6.AttributeBonusMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b33abvH6T1KyrkP/tFJZYTl", "PlayerMgr", undefined);

      __checkObsolete__(['assetManager', 'instantiate', 'Prefab', 'Node', 'UITransform', 'Vec3', 'Vec2', 'view', 'game', 'PhysicsSystem', 'geometry']);

      res = ["Prefabs/Storm"];
      /** 龙卷风管理器*/

      _export("PlayerMgr", PlayerMgr = class PlayerMgr {
        constructor() {
          this.tornadoNode = null;
          //玩家节点
          this.aiPlayersConfig = new Map();
          //AI玩家配置
          this.createAIPlayerCount = 3;
          //创建AI玩家数量
          this.aiConfigCount = 3;
          //AI配置数量
          this.aiIndex = 0;
          //AI索引
          this.pickAiMap = new Map();
        }

        static get Instance() {
          if (this._instance == null) {
            this._instance = new PlayerMgr();
          }

          return this._instance;
        }

        static get inst() {
          return this.Instance;
        }

        //权重随机的AI
        //创建AI玩家
        async genareatorAIPlayer() {
          return new Promise(async (resolve, reject) => {
            const aiPoints = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
              error: Error()
            }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.aiPoints;

            for (let i = 0; i < this.createAIPlayerCount; i++) {
              const infoPrefab = await (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).loadAsync((_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).gameBundleName, res[0], Prefab);
              let infoNode = instantiate(infoPrefab);
              infoPrefab.name = 'AIPlayer' + i;
              infoNode.parent = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
                error: Error()
              }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.players;
              const point = aiPoints.children[i];
              infoNode.setPosition(point.worldPosition.clone());
              infoNode.addComponent(_crd && TornadoAIComponent === void 0 ? (_reportPossibleCrUseOfTornadoAIComponent({
                error: Error()
              }), TornadoAIComponent) : TornadoAIComponent);
              resolve();
            }
          });
        } //获取玩家龙卷风节点


        async getTornadoNode() {
          return new Promise((resolve, reject) => {
            if (this.tornadoNode) {
              resolve(this.tornadoNode);
            } else {
              const playersUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
                error: Error()
              }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.players;
              if (playersUI && playersUI.children.length > 0) this.tornadoNode = playersUI.children[0];
              resolve(this.tornadoNode);
            }
          });
        } //设置玩家隐藏显示


        async setPlayerVisible(visible) {
          const tornado = await this.getTornadoNode();
          tornado.active = visible;
        }

        async playerAddComponent() {
          return new Promise((resolve, reject) => {
            this.getTornadoNode().then(node => {
              node.addComponent(_crd && TornadoComponent === void 0 ? (_reportPossibleCrUseOfTornadoComponent({
                error: Error()
              }), TornadoComponent) : TornadoComponent);
              resolve();
            });
          });
        }
        /** 所有AI玩家配置数据*/


        addAIPlayers() {
          for (let id = 1; id <= this.aiConfigCount; id++) {
            const config = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
              error: Error()
            }), AttributeBonusMgr) : AttributeBonusMgr).inst.aiConfig.getAIConfigById(id);

            if (config) {
              this.aiPlayersConfig.set(id, config); // 保存配置
            }
          } // console.log("AI玩家配置数据:", this.aiPlayersConfig);

        }
        /**
         * 根据权重生成AI配置
         */


        weightGeneateAIConfig() {
          // 获取所有AI配置
          const aiConfigs = Array.from(this.aiPlayersConfig.values()); // 按权重从大到小排序

          aiConfigs.sort((a, b) => b.weight - a.weight);
          let accumulatedWeight = 0;
          this.pickAiMap.clear(); // 计算权重并存储到pickAiMap

          for (const config of aiConfigs) {
            const weight = config.weight / 100; // 转换为百分比 (10 -> 0.1, 20 -> 0.2)

            accumulatedWeight += weight; // 存储累积权重和对应配置

            this.pickAiMap.set(accumulatedWeight, config);
          }

          console.log(this.pickAiMap);
        }
        /**
         * 根据索引获取AI配置
         */


        getRandomAIConfig() {
          // 检查是否超出创建数量
          if (this.aiIndex >= this.createAIPlayerCount) {
            console.log('AI创建数量大于配置表数量');
            return null;
          } // 从pickAiMap中获取对应索引的配置


          const config = Array.from(this.pickAiMap.values())[this.aiIndex];
          this.aiIndex++; // 索引递增

          return config;
        }
        /** 重置AI索引*/


        resetAIIndex() {
          this.aiIndex = 0;
        }
        /** 排行榜*/


        getRanking() {
          const playersUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.players; // Get all players and their heights

          const rankings = playersUI.children.map((node, index) => {
            const tornadoComp = node.getComponent(_crd && TornadoComponent === void 0 ? (_reportPossibleCrUseOfTornadoComponent({
              error: Error()
            }), TornadoComponent) : TornadoComponent);
            const isPlayer = !node.getComponent(_crd && TornadoAIComponent === void 0 ? (_reportPossibleCrUseOfTornadoAIComponent({
              error: Error()
            }), TornadoAIComponent) : TornadoAIComponent);
            return {
              index,
              height: tornadoComp ? tornadoComp.height : 0,
              nickName: tornadoComp ? tornadoComp.nickName : '',
              isPlayer
            };
          }); // Sort by height in descending order

          rankings.sort((a, b) => b.height - a.height); // Add rank information

          const rankedPlayers = rankings.map((player, rank) => ({
            rank: rank + 1,
            height: player.height,
            nickName: player.nickName,
            isPlayer: player.isPlayer
          }));

          if (rankings.length < 3) {
            // If less than 3 players, return all rankings
            return rankedPlayers;
          } // Find player rank if exists


          const playerRank = rankedPlayers.find(p => p.isPlayer);

          if (!playerRank) {
            // No player found, return top 3
            return rankedPlayers.slice(0, 3);
          }

          if (playerRank.rank <= 3) {
            // Player is in top 3, return top 3
            return rankedPlayers.slice(0, 3);
          } // Player is not in top 3, return top 3 + player rank


          return [...rankedPlayers.slice(0, 3), playerRank];
        }
        /** 获取玩家的排名*/


        getPlayerRank() {
          const rankings = this.getRanking();
          const playerRank = rankings.find(p => p.isPlayer);
          return playerRank ? playerRank.rank : -1;
        }

      });

      PlayerMgr._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ad427f3dd9586189bea732fbbc418fd4b3ab381.js.map