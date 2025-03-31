System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Vec3, game, PhysicsSystem, geometry, resLoader, StormSunderGlobalInstance, TornadoComponent, PlayerMgr, GameMgr, GameStatus, PropMgr, _crd, propRes;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "db://assets/core_tgx/base/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStormSunderGlobalInstance(extras) {
    _reporterNs.report("StormSunderGlobalInstance", "../StormSunderGlobalInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTornadoComponent(extras) {
    _reporterNs.report("TornadoComponent", "../Component/TornadoComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "./PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMgr(extras) {
    _reporterNs.report("GameMgr", "./GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "./GameMgr", _context.meta, extras);
  }

  _export("PropMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      game = _cc.game;
      PhysicsSystem = _cc.PhysicsSystem;
      geometry = _cc.geometry;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }, function (_unresolved_3) {
      StormSunderGlobalInstance = _unresolved_3.StormSunderGlobalInstance;
    }, function (_unresolved_4) {
      TornadoComponent = _unresolved_4.TornadoComponent;
    }, function (_unresolved_5) {
      PlayerMgr = _unresolved_5.PlayerMgr;
    }, function (_unresolved_6) {
      GameMgr = _unresolved_6.GameMgr;
      GameStatus = _unresolved_6.GameStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0c65JLtPlB1oL5OaWoMDyK", "PropMgr", undefined);

      __checkObsolete__(['assetManager', 'instantiate', 'Prefab', 'Node', 'UITransform', 'Vec3', 'Vec2', 'view', 'game', 'PhysicsSystem', 'geometry', 'isValid']);

      propRes = ["Prefabs/Props/altman", "Prefabs/Props/aula", "Prefabs/Props/clown"];
      /** 道具管理器*/

      _export("PropMgr", PropMgr = class PropMgr {
        constructor() {
          //初始数量
          this.propInitNum = 10;
          //数量上限
          this.propMaxNum = 100;
          //生成周期
          this.propCreateCycle = 3;
          //生成数量
          this.propCreateNum = 10;
          this.tornadoNode = null;
          //玩家节点
          this.spawnRadius = 20;
          // 生成范围半径
          this.raycastDistance = 1;
          //射线检测距离
          this.curMovePropsCount = 0;
          //当前移动道具数量
          this.lastCreateTime = 0;
        }

        static get Instance() {
          if (this._instance == null) {
            this._instance = new PropMgr();
          }

          return this._instance;
        }

        static get inst() {
          return this.Instance;
        }

        //上次生成时间
        genaratorInitialData() {
          //DOTO 取配置 先定义假数据
          this.propInitNum = 10;
          this.propMaxNum = 100;
          this.propCreateCycle = 2;
          this.propCreateNum = 1;
        }

        update(deltaTime) {
          if (this.curMovePropsCount >= this.propMaxNum || (_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
            error: Error()
          }), GameMgr) : GameMgr).inst.getGameStatus() != (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).Playing) return;
          var currentTime = game.totalTime / 1000; // 转换为秒
          // 检查是否达到生成周期

          if (currentTime - this.lastCreateTime >= this.propCreateCycle) {
            this.lastCreateTime = currentTime; // 更新上次生成时间

            this.genatorProp(); // 执行生成道具逻辑
            // console.log(`道具生成周期到达，当前道具数量：${this.curMovePropsCount}`);
          }
        }

        genatorProp() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (_this.curMovePropsCount >= _this.propMaxNum) return;
            var propsUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
              error: Error()
            }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.props;
            _this.tornadoNode = yield (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
              error: Error()
            }), PlayerMgr) : PlayerMgr).inst.getTornadoNode();

            for (var index = 0; index < _this.propInitNum; index++) {
              var spawnPos = _this.getValidSpawnPosition(); // 进行四向物理检测


              if (spawnPos && !_this.isPositionBlocked(spawnPos)) {
                var propPrefab = yield (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                  error: Error()
                }), resLoader) : resLoader).loadAsync((_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                  error: Error()
                }), resLoader) : resLoader).gameBundleName, propRes[Math.floor(Math.random() * propRes.length)]);
                var newMonster = instantiate(propPrefab);
                newMonster.setParent(propsUI);
                newMonster.setWorldPosition(spawnPos);
                _this.curMovePropsCount++; // console.log("怪物生成成功", spawnPos);
              } // console.warn("未找到合适的怪物生成点");

            }
          })();
        }
        /** 获取一个合法的生成位置 */


        getValidSpawnPosition() {
          var maxAttempts = 10;

          for (var i = 0; i < maxAttempts; i++) {
            var spawnPos = this.getRandomSpawnPosition();

            if (!this.isPositionBlocked(spawnPos)) {
              return spawnPos; // 当前位置没有障碍物，返回该位置
            }
          }

          return null; // 失败，返回 null
        }
        /** 随机获取玩家附近的生成点 */


        getRandomSpawnPosition() {
          if (!this.tornadoNode || !this.tornadoNode.worldPosition) return;
          var playerPos = this.tornadoNode.worldPosition;
          var angle = Math.random() * Math.PI * 2; // 随机角度

          var distance = Math.random() * this.spawnRadius + this.spawnRadius; // 创建射线检测前方障碍物

          var ray = new geometry.Ray(playerPos.x, playerPos.y, playerPos.z, Math.cos(angle), 0, Math.sin(angle));
          var hit = PhysicsSystem.instance.raycastClosest(ray, distance, 1 << 2);

          if (hit) {
            // 如果检测到障碍物，将生成距离调整为龙卷风到障碍物之间
            var hitResult = PhysicsSystem.instance.raycastClosestResult;

            if (hitResult && hitResult.distance < distance) {
              // 在龙卷风和障碍物之间随机选择一个位置，留出一定安全距离
              distance = Math.random() * (hitResult.distance - 1) + 1;
            }
          }

          var x = playerPos.x + Math.cos(angle) * distance;
          var z = playerPos.z + Math.sin(angle) * distance;
          var y = 0;
          return new Vec3(x, y, z);
        }
        /** 检测当前位置是否有障碍物 */


        isPositionBlocked(position) {
          if (!position) return false;
          var ray = new geometry.Ray(position.x, position.y, position.z, 0, 0, 0);

          if (PhysicsSystem.instance.raycastClosest(ray, this.raycastDistance)) {
            var hit = PhysicsSystem.instance.raycastClosestResult;

            if (hit && hit.collider) {
              // console.log("检测到障碍物", hit.collider.node.name, "位置", position);
              return true; // 当前位置有障碍物
            }
          }

          return false; // 没有检测到障碍物
        }
        /**
         * 获取距离玩家节点最近的道具节点
         * @param playerNode 玩家节点
         * @returns 距离最近的道具节点（如果存在），否则返回 null
         */


        getNearestProp(playerNode) {
          if (!playerNode) return null;
          var minDistance = Infinity;
          var nearestProp = null;
          var playerPos = playerNode.worldPosition;
          var propsNodes = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.props;
          propsNodes.children.forEach(prop => {
            var propPos = prop.worldPosition;
            var distance = Vec3.distance(playerPos, propPos);

            if (distance < minDistance) {
              minDistance = distance;
              nearestProp = prop;
            }
          });
          return nearestProp;
        }
        /** 删除移动道具*/


        removeMovingProp() {
          this.curMovePropsCount--;
        } //获取玩家龙卷风节点


        getTornadoNode() {
          var playersUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.players;

          if (!this.tornadoNode) {
            if (playersUI && playersUI.children.length > 0) {
              this.tornadoNode = playersUI.children.filter(child => child.getComponent(_crd && TornadoComponent === void 0 ? (_reportPossibleCrUseOfTornadoComponent({
                error: Error()
              }), TornadoComponent) : TornadoComponent))[0];
            }
          }

          return this.tornadoNode;
        }

      });

      PropMgr._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c0ccdd997656ded68630a195c21af7ab65fb16e5.js.map