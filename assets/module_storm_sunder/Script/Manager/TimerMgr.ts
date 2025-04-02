import { assetManager, instantiate, Prefab, Node, UITransform, Vec3, Vec2, view, game, director, Scheduler, Label } from "cc";
import { resLoader } from "db://assets/core_tgx/base/ResLoader";
import { StormSunderGlobalInstance } from "../StormSunderGlobalInstance";
import { PropMgr } from "./PropMgr"; // 假设PropMgr在同一个目录下
import { GameMgr, GameStatus } from "./GameMgr";
import { GameUtil } from "../GameUtil";
import { AttributeBonusMgr } from "./AttributeBonusMgr";
import { MapMgr } from "./MapMgr";

/** 时间管理器*/
export class TimerMgr {
    private static _instance: TimerMgr;
    public static get Instance(): TimerMgr {
        if (this._instance == null) {
            this._instance = new TimerMgr();
        }
        return this._instance;
    }

    public static get inst(): TimerMgr {
        return this.Instance;
    }

    public countDownTime: number = 1;
    private timerId: number = 0;
    private propMgr: PropMgr;

    constructor() {
        this.propMgr = PropMgr.Instance; // 初始化PropMgr实例
    }

    // 开始倒计时
    public startCountdown(): void {
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

    private upateLbTime() {
        const battleUI = StormSunderGlobalInstance.instance.battleUI;
        const lbTime = battleUI.getChildByPath('Times/LbTime')!;
        // lbTime.getComponent(Label).string = this.countDownTime.toString();
        const format = GameUtil.formatToTimeString(this.countDownTime);
        lbTime.getComponent(Label).string = format;
    }

    // 停止倒计时
    private stopCountdown(): void {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = 0;
            GameMgr.inst.isWin = true;
            if (GameMgr.inst.getGameStatus() == GameStatus.Playing) {
                GameMgr.inst.setGameStatus(GameStatus.End);
            }
        }
    }

    // update方法，每帧调用
    public update(dt: number): void {
        this.propMgr.update(dt);
    }

    // 销毁时清理
    public reset(): void {
        this.stopCountdown();
        Scheduler.enableForTarget(this);
        director.getScheduler().unscheduleAllForTarget(this);

        const mapConfig = MapMgr.Instance.getMapConfig(1);
        this.countDownTime = mapConfig.time;
        this.countDownTime = 100; //测试
    }
}