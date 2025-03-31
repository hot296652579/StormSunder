/** 游戏管理器*/

import { tgxUIMgr } from "db://assets/core_tgx/tgx";
import { StormSunderGlobalInstance } from "../StormSunderGlobalInstance";
import { PropMgr } from "./PropMgr";
import { TimerMgr } from "./TimerMgr";
import { UI_BattleResult, UI_BattleRevive } from "db://assets/scripts/UIDef";
import { PlayerMgr } from "./PlayerMgr";
import { assetManager, instantiate, Prefab } from "cc";
import { resLoader } from "db://assets/core_tgx/base/ResLoader";

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
                TimerMgr.inst.reset();
                PropMgr.inst.reset();
                PlayerMgr.inst.reset();
                break;
            case GameStatus.Playing:
                await this.addMapNode();
                await PlayerMgr.inst.setPlayerVisible(true);
                homeUI.active = false;
                battleUI.active = true;
                break;
            case GameStatus.Revive:
                const revive = tgxUIMgr.inst.isShowing(UI_BattleRevive);
                if (!revive) {
                    tgxUIMgr.inst.showUI(UI_BattleRevive);
                    console.log("GameMgr.ts updateGameStatusUI() GameStatus.Revive");
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
        GameMgr.inst.setGameStatus(GameStatus.Playing);
        await PropMgr.inst.genatorProp();
        await PlayerMgr.inst.playerAddComponent();
        await PlayerMgr.inst.genareatorAIPlayer();
        TimerMgr.inst.startCountdown();
    }

    //添加地图节点
    public async addMapNode() {
        const mapUI = StormSunderGlobalInstance.instance.map;
        const map = await this.loadAsyncMap();
        const node = instantiate(map);
        node.parent = mapUI;
    }

    //加载地图
    public async loadAsyncMap(): Promise<Prefab> {
        return new Promise((resolve, reject) => {
            const bundle = assetManager.getBundle(resLoader.gameBundleName);
            if (!bundle) {
                console.error("module_nut is null!");
                reject();
            }

            resLoader.loadAsync(resLoader.gameBundleName, `Prefabs/Map1`, Prefab).then((prefab: Prefab) => {
                resolve(prefab);
            })
        })
    }
}

export enum GameStatus {
    /** 游戏未开始 */
    None,
    /** 游戏进行中 */
    Playing,
    /** 复活中*/
    Revive,
    /** 游戏结束 */
    End,
}