/** 游戏管理器*/

import { tgxUIMgr } from "db://assets/core_tgx/tgx";
import { StormSunderGlobalInstance } from "../StormSunderGlobalInstance";
import { PropMgr } from "./PropMgr";
import { TimerMgr } from "./TimerMgr";
import { UI_BattleGambit, UI_BattleMatch, UI_BattleResult, UI_BattleRevive } from "db://assets/scripts/UIDef";
import { PlayerMgr } from "./PlayerMgr";
import { assetManager, instantiate, Prefab } from "cc";
import { resLoader } from "db://assets/core_tgx/base/ResLoader";
import { Effect2DUIMgr } from "./Effect2DUIMgr";
import { MapMgr } from "./MapMgr";

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
        const homeMap = StormSunderGlobalInstance.instance.homeMap;

        switch (this.gameStatus) {
            case GameStatus.None:
                homeUI.active = true;
                homeMap.active = true;
                battleUI.active = false;
                MapMgr.Instance.setMapInfo(1);
                PropMgr.inst.reset();
                Effect2DUIMgr.inst.reset();
                PlayerMgr.inst.reset();
                TimerMgr.inst.reset();
                break;
            case GameStatus.Match:
                const match = tgxUIMgr.inst.isShowing(UI_BattleMatch);
                if (!match) {
                    tgxUIMgr.inst.showUI(UI_BattleMatch);
                }
                break;
            case GameStatus.Gambit:
                await MapMgr.Instance.addMapNode();
                await PlayerMgr.inst.setPlayerVisible(true);
                await PlayerMgr.inst.setPlayerPosition();
                homeMap.active = false;
                homeUI.active = false;
                battleUI.active = true;

                const gambit = tgxUIMgr.inst.isShowing(UI_BattleGambit);
                if (!gambit) {
                    tgxUIMgr.inst.showUI(UI_BattleGambit);
                }
                break;
            case GameStatus.Playing:
                break;
            case GameStatus.Revive:
                const revive = tgxUIMgr.inst.isShowing(UI_BattleRevive);
                if (!revive) {
                    tgxUIMgr.inst.showUI(UI_BattleRevive);
                    // console.log("GameMgr.ts updateGameStatusUI() GameStatus.Revive");
                }
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
        await PropMgr.inst.genatorProp();
        await PlayerMgr.inst.playerAddComponent();
        await PlayerMgr.inst.genareatorAIPlayer();
        GameMgr.inst.setGameStatus(GameStatus.Gambit);
    }
}

export enum GameStatus {
    /** 游戏未开始 */
    None,
    /** 游戏进行中 */
    Playing,
    /** 匹配*/
    Match,
    /** 开局*/
    Gambit,
    /** 复活中*/
    Revive,
    /** 游戏结束 */
    End,
}