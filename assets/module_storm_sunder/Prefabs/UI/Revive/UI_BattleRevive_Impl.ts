import { _decorator, Component, Node } from 'cc';
import { GameUILayers } from "../../../../scripts/GameUILayers";
import { UI_BattleRevive } from "../../../../scripts/UIDef";
import { Layout_BattleRevive } from './Layout_BattleRevive';
import { GameMgr, GameStatus } from '../../../Script/Manager/GameMgr';
import { tgxModuleContext } from 'db://assets/core_tgx/tgx';
const { ccclass, property } = _decorator;

@ccclass('UI_BattleRevive_Impl')
export class UI_BattleRevive_Impl extends UI_BattleRevive {

    constructor() {
        super('Prefabs/UI/Revive/UI_BattleRevive', GameUILayers.POPUP, Layout_BattleRevive);
    }

    public getRes(): [] {
        return [];
    }

    protected onCreated(): void {
        let layout = this.layout as Layout_BattleRevive;
        this.onButtonEvent(layout.btn_revive, () => {
            this.changeGameStatus(GameStatus.Playing);
        });
        this.onButtonEvent(layout.btn_back, () => {
            this.changeGameStatus(GameStatus.None);
        });
    }

    private changeGameStatus(status: GameStatus): void {
        GameMgr.inst.setGameStatus(status);
        this.hide();
        console.log("changeGameStatus", status);
    }
}

tgxModuleContext.attachImplClass(UI_BattleRevive, UI_BattleRevive_Impl);


