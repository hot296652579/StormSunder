System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Tween, Vec3, _decorator, randomRange, PathfindingManager, PlayerStatus, TornadoComponent, PropMgr, GameMgr, GameStatus, PlayerMgr, _dec, _class, _crd, ccclass, property, BehaviorType, TornadoAIComponent;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfPathfindingManager(extras) {
    _reporterNs.report("PathfindingManager", "../Manager/PathfindingManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStatus(extras) {
    _reporterNs.report("PlayerStatus", "./TornadoComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTornadoComponent(extras) {
    _reporterNs.report("TornadoComponent", "./TornadoComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropMgr(extras) {
    _reporterNs.report("PropMgr", "../Manager/PropMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMgr(extras) {
    _reporterNs.report("GameMgr", "../Manager/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../Manager/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../Manager/PlayerMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      randomRange = _cc.randomRange;
    }, function (_unresolved_2) {
      PathfindingManager = _unresolved_2.PathfindingManager;
    }, function (_unresolved_3) {
      PlayerStatus = _unresolved_3.PlayerStatus;
      TornadoComponent = _unresolved_3.TornadoComponent;
    }, function (_unresolved_4) {
      PropMgr = _unresolved_4.PropMgr;
    }, function (_unresolved_5) {
      GameMgr = _unresolved_5.GameMgr;
      GameStatus = _unresolved_5.GameStatus;
    }, function (_unresolved_6) {
      PlayerMgr = _unresolved_6.PlayerMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07287yULuBNHJ1DNr019ILD", "TornadoAIComponent", undefined);

      __checkObsolete__(['BoxCollider', 'Component', 'ITriggerEvent', 'Node', 'Tween', 'Vec3', '_decorator', 'randomRange']);

      ({
        ccclass,
        property
      } = _decorator);

      BehaviorType = /*#__PURE__*/function (BehaviorType) {
        BehaviorType[BehaviorType["Move"] = 0] = "Move";
        BehaviorType[BehaviorType["Collect"] = 1] = "Collect";
        return BehaviorType;
      }(BehaviorType || {});
      /** 龙卷风AI组件 */


      _export("TornadoAIComponent", TornadoAIComponent = (_dec = ccclass('TornadoAIComponent'), _dec(_class = class TornadoAIComponent extends (_crd && TornadoComponent === void 0 ? (_reportPossibleCrUseOfTornadoComponent({
        error: Error()
      }), TornadoComponent) : TornadoComponent) {
        constructor() {
          super(...arguments);
          this.moveDuration = 3;
          //移动行为持续时间（秒）
          this.escapeDuration = 5;
          //逃离行为持续时间（秒）
          this.chaseDuration = 20;
          //追击行为持续时间（秒）
          this.chaseAIProbability = 0;
          //是否追击 AI 的概率
          this.chasePlayerProbability = 0;
          //是否追击玩家的概率
          this.isChasing = false;
          // 是否追击中
          this.isEscaping = false;
          // 是否逃跑中
          this.targetNode = null;
          // 目标
          this.moveProbability = 0.5;
          //移动概率
          this.behaviorType = BehaviorType.Move;
        }

        // 行为类型
        start() {
          var _superprop_getStart = () => super.start,
              _this = this;

          return _asyncToGenerator(function* () {
            _superprop_getStart().call(_this);

            _this.ai = true;

            _this.initAIPlayer();

            _this.onPlayerInfoHandler();

            _this.decideAction(); // 进入行为循环


            _this.radiusTigger.on('onTriggerEnter', _this.onRadiusTriggerEnter, _this);
          })();
        }

        initAIPlayer() {
          var aiConfig = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).inst.getRandomAIConfig(); // console.log(aiConfig.data);
          //text:名称 range:检测半径 move_juge:移动概率 move_time:移动时间 escape_time:逃跑时间 pursuit_1:追击玩家概率 pursuit_2:追击AI概率 pursuit_time:追击时间

          var {
            text,
            range,
            move_judge,
            move_time,
            escape_time,
            pursuit_1,
            pursuit_2,
            pursuit_time
          } = aiConfig.data;
          this.playerInfo.nickName = text;
          this.nickName = text;
          this.currentLv = 1;
          this.playerInfo.level = this.currentLv;
          this.moveDuration = Math.floor(move_time[0] + Math.random() * (move_time[1] - move_time[0] + 1));
          this.escapeDuration = Math.floor(escape_time[0] + Math.random() * (escape_time[1] - escape_time[0] + 1));
          this.chaseDuration = Math.floor(pursuit_time[0] + Math.random() * (pursuit_time[1] - pursuit_time[0] + 1));
          this.chaseAIProbability = pursuit_1;
          this.chasePlayerProbability = pursuit_2;
          this.moveProbability = move_judge;
          this.nextExp = this.attributeBonusMgr.getExpNeed(this.currentLv + 1);
          this.attack = this.attributeBonusMgr.getStormSunderAttack(this.currentLv, true);
          this.speed = this.attributeBonusMgr.getStormSunderSpeed(this.currentLv, true);
          this.speed = Math.round(this.speed / 2 * 100) / 100; // console.log(`AI 攻击力:${this.attack} 速度:${this.speed} 下一级经验:${this.nextExp}`);
        }
        /** 选择 AI 行为 */


        decideAction() {
          if (this.playerStatus == (_crd && PlayerStatus === void 0 ? (_reportPossibleCrUseOfPlayerStatus({
            error: Error()
          }), PlayerStatus) : PlayerStatus).DIE) return; // AI 死亡时不执行行为

          var move = Math.random() * 100 < this.moveProbability; // console.log(`AI 行为判断:移动概率:${this.moveProbability} 是否移动:${move}`);

          if (move) {
            this.randomMove();
          } else {
            var closestItem = (_crd && PropMgr === void 0 ? (_reportPossibleCrUseOfPropMgr({
              error: Error()
            }), PropMgr) : PropMgr).inst.getNearestProp(this.node);

            if (closestItem) {
              this.chaseTarget(closestItem);
            } else {
              this.randomMove();
            }
          }
        }
        /** 随机移动 */


        randomMove() {
          if (this.isChasing || this.isEscaping) return; // 如果正在追击或逃跑，则不进行随机移动
          // 计算最大可移动距离 = 速度 * 持续时间

          var maxDistance = this.speed * this.moveDuration; // 随机方向的单位向量

          var randomDirection = new Vec3(randomRange(-1, 1), 0, randomRange(-1, 1));
          randomDirection.normalize(); // 归一化，保持方向不变但长度为 1
          // 计算最终的移动向量

          randomDirection.multiplyScalar(maxDistance);
          var targetPosition = this.node.position.clone().add(randomDirection);
          (_crd && PathfindingManager === void 0 ? (_reportPossibleCrUseOfPathfindingManager({
            error: Error()
          }), PathfindingManager) : PathfindingManager).getInstance().moveTo(this.node, targetPosition, this.moveDuration); // console.log(`AI 触发随机移动行为!`, targetPosition);

          this.scheduleOnce(() => {
            if (!this.isChasing && !this.isEscaping) {
              // 再次检查状态，避免重复调用
              this.decideAction();
            }
          }, this.moveDuration);
        }

        onTriggerEnter(event) {
          if (event.otherCollider.getGroup() === 1 << 2) {
            this.unscheduleAllCallbacks();
            this.isChasing = false;
            this.isEscaping = false;
            this.targetNode = null;
            Tween.stopAllByTarget(this.node);
            this.setPositionByObstacle(event, () => {
              this.decideAction();
            });
          }
        }

        onTriggerStay(event) {
          super.onTriggerStay(event);
          var otherCollider = event.otherCollider;

          if (otherCollider.getGroup() == 1 << 3) {
            var targetTornado = otherCollider.node.parent.getComponent(_crd && TornadoComponent === void 0 ? (_reportPossibleCrUseOfTornadoComponent({
              error: Error()
            }), TornadoComponent) : TornadoComponent);
            if (!targetTornado) return;
            var isPlayer = targetTornado instanceof (_crd && TornadoComponent === void 0 ? (_reportPossibleCrUseOfTornadoComponent({
              error: Error()
            }), TornadoComponent) : TornadoComponent);

            if (this.currentLv > targetTornado.currentLv && isPlayer) {
              (_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
                error: Error()
              }), GameMgr) : GameMgr).inst.isWin = false;
              (_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
                error: Error()
              }), GameMgr) : GameMgr).inst.setGameStatus((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).End);
            }
          }
        }

        addExpByKill() {
          super.addExpByKill(true); // console.log(`AI 当前经验:${this.currentExp}`);
        }
        /** 触发器检测（过程中遇到其他龙卷风） */


        onRadiusTriggerEnter(event) {
          var otherCollider = event.otherCollider;
          var otherNode = otherCollider.node;

          if (event.otherCollider.getGroup() == 1 << 3) {
            var targetTornado = otherNode.parent.getComponent(_crd && TornadoComponent === void 0 ? (_reportPossibleCrUseOfTornadoComponent({
              error: Error()
            }), TornadoComponent) : TornadoComponent);
            if (!targetTornado) return;
            var isTargetAI = targetTornado instanceof TornadoAIComponent;
            var targetLv = targetTornado.currentLv;

            if (targetLv > this.currentLv) {
              // 目标等级比自己高 → 逃跑
              this.escapeFrom(targetTornado.node);
            } else if (targetLv < this.currentLv) {
              // 目标等级比自己低 → 先判断是否追击
              if (Math.random() * 100 < this.chaseAIProbability) {
                if (isTargetAI) {
                  // 目标是 AI，直接追击
                  this.chaseTarget(targetTornado.node);
                } else {
                  // 目标是玩家，进一步判断是否追击
                  if (Math.random() * 100 < this.chasePlayerProbability) {
                    this.chaseTarget(targetTornado.node);
                  } else {
                    // 不追击，则保持当前行为到持续时间结束
                    this.continueCurrentBehavior();
                  }
                }
              } else {
                // 不追击，持续当前行为直到时间结束
                this.continueCurrentBehavior();
              }
            } // 如果等级相同，继续当前行为

          }
        }
        /** 继续当前行为直到时间结束 */


        continueCurrentBehavior() {
          this.scheduleOnce(() => {
            this.decideAction();
          }, this.moveDuration);
        }
        /** 追击目标 */


        chaseTarget(target) {
          if (this.isChasing) return; // console.log(`AI 追击目标->>>>>>>>>>>>>`);

          this.isChasing = true;
          this.targetNode = target;
          (_crd && PathfindingManager === void 0 ? (_reportPossibleCrUseOfPathfindingManager({
            error: Error()
          }), PathfindingManager) : PathfindingManager).getInstance().followTarget(this, target, this.speed, () => {
            // console.log(`AI 追击目标到达`);
            this.unscheduleAllCallbacks();
            this.isChasing = false;
            this.targetNode = null;
            this.decideAction();
          }); // 追击时间结束后恢复行为

          this.scheduleOnce(() => {
            this.isChasing = false;
            this.targetNode = null;
            this.decideAction();
          }, this.chaseDuration);
        }
        /** 逃离目标 */


        escapeFrom(target) {
          this.isEscaping = true; // console.log(`AI 逃离行为->>>>>>>>>>>>>>`);
          // 计算最大可逃离距离 = 速度 * 持续时间

          var maxDistance = this.speed * this.escapeDuration; // 计算逃离方向，指向目标的反方向

          var targetPos = new Vec3(target.position.x, 0, target.position.z);
          var direction = this.node.position.clone().subtract(targetPos).normalize().multiplyScalar(maxDistance);
          var escapePosition = this.node.position.clone().add(direction);
          (_crd && PathfindingManager === void 0 ? (_reportPossibleCrUseOfPathfindingManager({
            error: Error()
          }), PathfindingManager) : PathfindingManager).getInstance().moveTo(this.node, escapePosition, this.escapeDuration);
          this.scheduleOnce(() => {
            this.isEscaping = false;
            this.decideAction();
          }, this.escapeDuration);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91984b3653304d3f3768112b8be39bda01938ecd.js.map