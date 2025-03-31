System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, Scheduler, Label, StormSunderGlobalInstance, PropMgr, GameMgr, GameStatus, GameUtil, TimerMgr, _crd;

  function _reportPossibleCrUseOfStormSunderGlobalInstance(extras) {
    _reporterNs.report("StormSunderGlobalInstance", "../StormSunderGlobalInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropMgr(extras) {
    _reporterNs.report("PropMgr", "./PropMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMgr(extras) {
    _reporterNs.report("GameMgr", "./GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "./GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../GameUtil", _context.meta, extras);
  }

  _export("TimerMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      Scheduler = _cc.Scheduler;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      StormSunderGlobalInstance = _unresolved_2.StormSunderGlobalInstance;
    }, function (_unresolved_3) {
      PropMgr = _unresolved_3.PropMgr;
    }, function (_unresolved_4) {
      GameMgr = _unresolved_4.GameMgr;
      GameStatus = _unresolved_4.GameStatus;
    }, function (_unresolved_5) {
      GameUtil = _unresolved_5.GameUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f366f99rcNN5rgXBGsP5WrL", "TimerMgr", undefined);

      __checkObsolete__(['assetManager', 'instantiate', 'Prefab', 'Node', 'UITransform', 'Vec3', 'Vec2', 'view', 'game', 'director', 'Scheduler', 'Label']); // 假设PropMgr在同一个目录下


      /** 时间管理器*/
      _export("TimerMgr", TimerMgr = class TimerMgr {
        static get Instance() {
          if (this._instance == null) {
            this._instance = new TimerMgr();
          }

          return this._instance;
        }

        static get inst() {
          return this.Instance;
        }

        constructor() {
          this.countDownTime = 300;
          this.timerId = 0;
          this.propMgr = void 0;
          this.propMgr = (_crd && PropMgr === void 0 ? (_reportPossibleCrUseOfPropMgr({
            error: Error()
          }), PropMgr) : PropMgr).Instance; // 初始化PropMgr实例
        } // 开始倒计时


        startCountdown() {
          this.upateLbTime();
          this.timerId = setInterval(() => {
            this.countDownTime--;

            if (this.countDownTime <= 0) {
              this.stopCountdown();
              console.log("Countdown finished!");
            }

            this.upateLbTime();
          }, 1000); // 每秒减少一次

          Scheduler.enableForTarget(this);
          director.getScheduler().schedule(this.update, this, 0);
        }

        upateLbTime() {
          var battleUI = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.battleUI;
          var lbTime = battleUI.getChildByPath('Times/LbTime'); // lbTime.getComponent(Label).string = this.countDownTime.toString();

          var format = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).formatToTimeString(this.countDownTime);
          lbTime.getComponent(Label).string = format;
        } // 停止倒计时


        stopCountdown() {
          if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = 0;
            (_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
              error: Error()
            }), GameMgr) : GameMgr).inst.isWin = true;
            (_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
              error: Error()
            }), GameMgr) : GameMgr).inst.setGameStatus((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).End);
          }
        } // update方法，每帧调用


        update(dt) {
          this.propMgr.update(dt);
        } // 销毁时清理


        destroy() {
          this.stopCountdown();
          director.getScheduler().unscheduleUpdate(this);
        }

      });

      TimerMgr._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4baf17ba4cdf732751a01f4e245936c6deda9025.js.map