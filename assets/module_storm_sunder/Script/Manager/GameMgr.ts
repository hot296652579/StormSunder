/** 游戏管理器*/

import { tgxUIMgr } from "db://assets/core_tgx/tgx";
import { StormSunderGlobalInstance } from "../StormSunderGlobalInstance";
import { PropMgr } from "./PropMgr";
import { TimerMgr } from "./TimerMgr";
import { UI_BattleResult } from "db://assets/scripts/UIDef";
import { PlayerMgr } from "./PlayerMgr";

export class GameMgr {
    private static _instance: GameMgr;
    public static get Instance(): GameMgr {
        if (this._instance == null) {
            this._instance = new GameMgr();
        }
        return this._instance;
    }

    //游戏状态
    public gameStatus: GameStatus = GameStatus.None;

    //输赢状态
    public isWin: boolean = true;

    //设置游戏状态
    public setGameStatus(status: GameStatus) {
        this.gameStatus = status;
        this.updateGameStatusUI();
    }

    //获取游戏状态
    public getGameStatus(): GameStatus {
        return this.gameStatus;
    }

    //游戏状态更新UI
    public async updateGameStatusUI() {
        const homeUI = StormSunderGlobalInstance.instance.homeUI;
        const battleUI = StormSunderGlobalInstance.instance.battleUI;

        switch (this.gameStatus) {
            case GameStatus.None:
                homeUI.active = true;
                battleUI.active = false;
                break;
            case GameStatus.Playing:
                await PlayerMgr.inst.setPlayerVisible(true);
                homeUI.active = false;
                battleUI.active = true;
                break;
            case GameStatus.End:
                tgxUIMgr.inst.showUI(UI_BattleResult);
                break;
        }
    }

    public static get inst(): GameMgr {
        return this.Instance;
    }

    public async startGame() {
        GameMgr.inst.setGameStatus(GameStatus.Playing);
        await PropMgr.inst.genatorProp();
        await PlayerMgr.inst.playerAddComponent();
        await PlayerMgr.inst.genareatorAIPlayer();
        TimerMgr.inst.startCountdown();
    }
}

export enum GameStatus {
    /** 游戏未开始 */
    None,
    /** 游戏进行中 */
    Playing,
    /** 游戏结束 */
    End,
}