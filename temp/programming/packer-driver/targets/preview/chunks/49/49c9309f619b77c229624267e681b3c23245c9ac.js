System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Collider, Component, RigidBody, Vec3, _decorator, game, EventDispatcher, GameEvent, UIJoyStick, GameMgr, GameStatus, PropComponent, PropStatus, Effect2DUIMgr, AttributeBonusMgr, _dec, _class, _crd, ccclass, property, rotateSpeed, PlayerStatus, TornadoComponent;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfEventDispatcher(extras) {
    _reporterNs.report("EventDispatcher", "db://assets/core_tgx/easy_ui_framework/EventDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../Enum/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIJoyStick(extras) {
    _reporterNs.report("UIJoyStick", "../UIJoyStick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMgr(extras) {
    _reporterNs.report("GameMgr", "../Manager/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../Manager/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropComponent(extras) {
    _reporterNs.report("PropComponent", "./PropComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropStatus(extras) {
    _reporterNs.report("PropStatus", "./PropComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerInfo(extras) {
    _reporterNs.report("PlayerInfo", "./PlayerInfoComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffect2DUIMgr(extras) {
    _reporterNs.report("Effect2DUIMgr", "../Manager/Effect2DUIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttributeBonusMgr(extras) {
    _reporterNs.report("AttributeBonusMgr", "../Manager/AttributeBonusMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Collider = _cc.Collider;
      Component = _cc.Component;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      game = _cc.game;
    }, function (_unresolved_2) {
      EventDispatcher = _unresolved_2.EventDispatcher;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      UIJoyStick = _unresolved_4.UIJoyStick;
    }, function (_unresolved_5) {
      GameMgr = _unresolved_5.GameMgr;
      GameStatus = _unresolved_5.GameStatus;
    }, function (_unresolved_6) {
      PropComponent = _unresolved_6.PropComponent;
      PropStatus = _unresolved_6.PropStatus;
    }, function (_unresolved_7) {
      Effect2DUIMgr = _unresolved_7.Effect2DUIMgr;
    }, function (_unresolved_8) {
      AttributeBonusMgr = _unresolved_8.AttributeBonusMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a63dO/kz1JKKcWaanOItmF", "TornadoComponent", undefined);

      __checkObsolete__(['BoxCollider', 'Button', 'Collider', 'Component', 'ConeCollider', 'CylinderCollider', 'ITriggerEvent', 'Label', 'Node', 'NodeEventType', 'RigidBody', 'SphereCollider', 'Vec3', '_decorator', 'find', 'game']);

      ({
        ccclass,
        property
      } = _decorator);
      rotateSpeed = 500;

      _export("PlayerStatus", PlayerStatus = /*#__PURE__*/function (PlayerStatus) {
        PlayerStatus[PlayerStatus["LIFE"] = 0] = "LIFE";
        PlayerStatus[PlayerStatus["DIE"] = 1] = "DIE";
        return PlayerStatus;
      }({}));
      /** 龙卷风组件*/


      _export("TornadoComponent", TornadoComponent = (_dec = ccclass('TornadoComponent'), _dec(_class = class TornadoComponent extends Component {
        constructor() {
          super(...arguments);
          this.points = [];
          this.tornado = null;
          this.rigidBody = null;
          this.tigger = null;
          //龙卷风触发器
          this.radiusTigger = null;
          //龙卷风半径检测触发器
          this.ai = false;
          this.attack = 20;
          this.speed = 50;
          this.currentExp = 0;
          this.height = 0;
          //龙卷风高度
          this.currentLv = 1;
          this.giveExp = 10;
          //被吃掉给予经验
          this.nextExp = 100;
          this.nickName = null;
          this.playerStatus = PlayerStatus.LIFE;
          this.playerInfo = null;
          this.isColliding = false;
          //当前攻击的道具或玩家
          this.curHitObj = null;
          this._attackInterval = 0.5;
          // 攻击间隔
          this._lastAttackTime = new Map();
          // 记录上次攻击时间
          this.attributeBonusMgr = null;
        }

        start() {
          this.initPlayer();
          this.initilizeUI();
          this.registerEvent();
          this.changeStatus(PlayerStatus.LIFE);
        }

        initilizeUI() {
          if (!this.node) return;
          this.tornado = this.node.getChildByName('RigibodyStorm');
          this.rigidBody = this.tornado.getComponent(RigidBody);
          this.tigger = this.tornado.getComponent(Collider);
          this.radiusTigger = this.node.getChildByName('radiusTigger').getComponent(Collider);
          var points = this.node.getChildByName('points');
          this.points = points.children.map(child => child);
          this.tigger.on('onTriggerEnter', this.onTriggerEnter, this);
          this.tigger.on('onTriggerStay', this.onTriggerStay, this);
          this.tigger.on('onTriggerExit', this.onTriggerExit, this);
        }

        initPlayer() {
          this.attributeBonusMgr = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst;
          var userModel = this.attributeBonusMgr.userModel;
          this.currentLv = 1;
          this.currentExp = 0;
          this.nextExp = this.attributeBonusMgr.getExpNeed(this.currentLv + 1);
          this.attack = this.attributeBonusMgr.getStormSunderAttack(this.currentLv);
          this.speed = this.attributeBonusMgr.getStormSunderSpeed(this.currentLv);
          this.nickName = userModel.nickName;
          this.height = userModel.game_tornado_base_height;
          this.speed = Math.round(this.speed / 2 * 100) / 100;
          console.log("\u73A9\u5BB6\u7684\u653B\u51FB\u529B :" + this.attack + "} \u901F\u5EA6:" + this.speed);
          this.playerInfo = {
            nickName: this.nickName,
            level: this.currentLv
          };
        }

        registerEvent() {
          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).instance.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).EVENT_STORM_LEVEL_UP, this.stormLevelUp, this);
        }

        onTriggerEnter(event) {
          if ((_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
            error: Error()
          }), GameMgr) : GameMgr).inst.gameStatus !== (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).Playing) return;
          var otherCollider = event.otherCollider;

          if (event.otherCollider.getGroup() === 1 << 2) {
            this.setPositionByObstacle(event);
          } else if (otherCollider.getGroup() == 1 << 3) {
            var targetTornado = otherCollider.node.parent.getComponent(TornadoComponent);
            if (!targetTornado) return;
            console.log("\u5F53\u524D\u7B49\u7EA7:" + this.currentLv + " \u76EE\u6807\u7B49\u7EA7:" + targetTornado.currentLv + " isAI:" + targetTornado.ai);

            if (this.currentLv > targetTornado.currentLv) {
              this.curHitObj = targetTornado.node;
              this.addExpByKill();
              this.killed(targetTornado.node);
            }
          }
        }

        setPositionByObstacle(event, cb) {
          // console.log('离开碰撞物 isColliding:', this.isColliding);
          if (this.isColliding) return; // 防止重复触发

          var _originalPosition = this.node.position.clone();

          this.isColliding = true;
          _originalPosition = this.node.position.clone(); // 记录碰撞前坐标
          // 计算反方向移动（保持Y轴不变）

          var reverseDirection = this.calculateReverseDirection(event);

          var newPosition = _originalPosition.add(reverseDirection); // 直接修改坐标


          this.node.setPosition(newPosition);
          setTimeout(() => {
            this.isColliding = false;
            if (cb) cb();
          }, 500);
        } // 计算反方向（基于障碍物位置）


        calculateReverseDirection(event) {
          // 获取障碍物节点位置
          var obstaclePos = event.otherCollider.node.worldPosition;
          var selfPos = this.node.worldPosition; // 计算方向向量（从障碍物指向自己）

          var direction = new Vec3(selfPos.x - obstaclePos.x, 0, // Y轴保持0
          selfPos.z - obstaclePos.z); // 归一化并乘以反冲距离

          return direction.normalize().multiplyScalar(7);
        }

        onTriggerStay(event) {
          if ((_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
            error: Error()
          }), GameMgr) : GameMgr).inst.gameStatus !== (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).Playing) return;
          var otherCollider = event.otherCollider;

          if (otherCollider.getGroup() == 1 << 4) {
            this.curHitObj = otherCollider.node;
            if (!this.curHitObj.getComponent(_crd && PropComponent === void 0 ? (_reportPossibleCrUseOfPropComponent({
              error: Error()
            }), PropComponent) : PropComponent)) return;
            var propComponent = this.curHitObj.getComponent(_crd && PropComponent === void 0 ? (_reportPossibleCrUseOfPropComponent({
              error: Error()
            }), PropComponent) : PropComponent);
            var currentTime = game.totalTime;
            var nodeId = otherCollider.node.uuid;
            var lastTime = this._lastAttackTime.get(nodeId) || 0; // 检查是否达到攻击间隔

            if (currentTime - lastTime >= this._attackInterval * 1000) {
              this._lastAttackTime.set(nodeId, currentTime);

              if (propComponent.status == (_crd && PropStatus === void 0 ? (_reportPossibleCrUseOfPropStatus({
                error: Error()
              }), PropStatus) : PropStatus).DIE) return; // 造成伤害

              propComponent.hurt(this.attack); // 检查道具是否被摧毁

              if (propComponent.currentHp <= 0) {
                // 随机选择一个吸收点
                var randomPoint = this.points[Math.floor(Math.random() * this.points.length)];

                if (randomPoint) {
                  otherCollider.node.parent = randomPoint;
                  otherCollider.node.setPosition(Vec3.ZERO);
                  propComponent.swallow();
                  this.addExpByKill();
                }
              }
            }
          } // else if (otherCollider.getGroup() == 1 << 3) {
          //     const targetTornado = otherCollider.node.parent.getComponent(TornadoComponent);
          //     if (!targetTornado) return;
          //     if (this.currentLv > targetTornado.currentLv) {
          //         this.curHitObj = targetTornado.node;
          //         this.addExpByKill();
          //         this.killed(targetTornado.node);
          //     }
          // }

        } //被击杀


        killed(targetNode) {
          return _asyncToGenerator(function* () {
            var targetTornado = targetNode.getComponent(TornadoComponent);

            if (targetTornado && !targetTornado.ai) {
              // 如果是玩家被击杀，只隐藏节点
              targetNode.active = false;
            } else {
              // 如果是AI被击杀，移除并销毁节点
              targetNode.removeFromParent();
              targetNode.destroy();
            }

            (_crd && Effect2DUIMgr === void 0 ? (_reportPossibleCrUseOfEffect2DUIMgr({
              error: Error()
            }), Effect2DUIMgr) : Effect2DUIMgr).inst.removePlayerInfo(targetNode);
          })();
        }

        onTriggerExit(event) {
          if (event.otherCollider.getGroup() == 1 << 4) {
            this.curHitObj = null;
          }
        }

        update(deltaTime) {
          if ((_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
            error: Error()
          }), GameMgr) : GameMgr).inst.gameStatus != (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).Playing) return;
          this.onMoveHandler();
          this.onRotateHandler();
          this.onPlayerInfoHandler();
        }

        onPlayerInfoHandler() {
          if (!this.node || !this.playerInfo) return;
          (_crd && Effect2DUIMgr === void 0 ? (_reportPossibleCrUseOfEffect2DUIMgr({
            error: Error()
          }), Effect2DUIMgr) : Effect2DUIMgr).inst.addPlayerInfo(this.node, this.playerInfo);
        }

        onRotateHandler() {
          this.node.eulerAngles = new Vec3(this.node.eulerAngles.x, this.node.eulerAngles.y + rotateSpeed * game.deltaTime, this.node.eulerAngles.z);
        }

        onMoveHandler() {
          if (this.isColliding || this.ai) return;
          var playerDir = (_crd && UIJoyStick === void 0 ? (_reportPossibleCrUseOfUIJoyStick({
            error: Error()
          }), UIJoyStick) : UIJoyStick).ins.dir;
          var playerX = playerDir.x * this.speed * game.deltaTime;
          var playerZ = playerDir.y * this.speed * game.deltaTime;
          this.node.setPosition(this.node.position.x + playerX, 0, this.node.position.z - playerZ);
        }

        addExpByKill(isAI) {
          if (!this.curHitObj) return;
          var propComp = this.curHitObj.getComponent(_crd && PropComponent === void 0 ? (_reportPossibleCrUseOfPropComponent({
            error: Error()
          }), PropComponent) : PropComponent);
          var objExp = 0;

          if (this.curHitObj.getComponent(_crd && PropComponent === void 0 ? (_reportPossibleCrUseOfPropComponent({
            error: Error()
          }), PropComponent) : PropComponent)) {
            objExp = propComp.currentExp;
          } else {
            var lv = this.curHitObj.getComponent(TornadoComponent).currentLv;
            objExp = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
              error: Error()
            }), AttributeBonusMgr) : AttributeBonusMgr).inst.getStormSunderExp(lv);
          }

          objExp = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.getStormSunderExp(objExp);
          var finialExp = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.getExpBonus(objExp, isAI);
          this.currentExp += finialExp;
          this.height += finialExp * (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.userModel.game_exp_height;
          (_crd && Effect2DUIMgr === void 0 ? (_reportPossibleCrUseOfEffect2DUIMgr({
            error: Error()
          }), Effect2DUIMgr) : Effect2DUIMgr).inst.addExpProp(this.node, finialExp);

          if (this.currentExp >= this.nextExp) {
            this.currentLv++;
            this.playerInfo.level = this.currentLv;
            this.stormLevelUp();
            (_crd && Effect2DUIMgr === void 0 ? (_reportPossibleCrUseOfEffect2DUIMgr({
              error: Error()
            }), Effect2DUIMgr) : Effect2DUIMgr).inst.updatePlayerInfo(this.node, this.playerInfo);
          }

          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).instance.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).EVENT_REFRESH_RANK);

          if (!isAI) {
            (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
              error: Error()
            }), EventDispatcher) : EventDispatcher).instance.emit((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).EVENT_UPDATE_USER_EXP, [this.currentExp, this.nextExp]);
          }
        }

        stormLevelUp() {
          var attributeBonusMgr = (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst;
          this.nextExp = attributeBonusMgr.getExpNeed(this.currentLv + 1);
          this.attack = attributeBonusMgr.getStormSunderAttack(this.currentLv);
          this.speed = attributeBonusMgr.getStormSunderSpeed(this.currentLv);
          this.speed = Math.round(this.speed / 2 * 100) / 100;
          this.currentExp = 0;
        }

        changeStatus(status) {
          this.playerStatus = status;
        }

        onDestroy() {
          this.unregisterEvent();
        }

        unregisterEvent() {
          (_crd && EventDispatcher === void 0 ? (_reportPossibleCrUseOfEventDispatcher({
            error: Error()
          }), EventDispatcher) : EventDispatcher).instance.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).EVENT_STORM_LEVEL_UP, this.stormLevelUp, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49c9309f619b77c229624267e681b3c23245c9ac.js.map