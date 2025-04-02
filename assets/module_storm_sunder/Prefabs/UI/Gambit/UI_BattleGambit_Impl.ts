import { _decorator, Component, Node } from 'cc';
import { GameUILayers } from "../../../../scripts/GameUILayers";
import { UI_BattleGambit, UI_BattleRevive } from "../../../../scripts/UIDef";
import { GameMgr, GameStatus } from '../../../Script/Manager/GameMgr';
import { tgxModuleContext } from 'db://assets/core_tgx/tgx';
import { Layout_BattleGambit } from './Layout_BattleGambit';
import { EventDispatcher } from 'db://assets/core_tgx/easy_ui_framework/EventDispatcher';
import { GameEvent } from '../../../Script/Enum/GameEvent';
import { TimerMgr } from '../../../Script/Manager/TimerMgr';
const { ccclass, property } = _decorator;

@ccclass('UI_BattleGambit_Impl')
export class UI_BattleGambit_Impl extends UI_BattleRevive {

    constructor() {
        super('Prefabs/UI/Gambit/UI_BattleGambit', GameUILayers.POPUP, Layout_BattleGambit);
    }

    public getRes(): [] {
        return [];
    }

    protected onCreated(): void {
        let layout = this.layout as Layout_BattleGambit;
        this.onButtonEvent(layout.btn_get, () => {
            this.changeGameStatus(GameStatus.Playing);
            TimerMgr.inst.startCountdown();
            EventDispatcher.instance.emit(GameEvent.EVENT_GAME_START_EFFECT);
        });
        this.onButtonEvent(layout.btn_back, () => {
            GameMgr.inst.isWin = false;
            GameMgr.inst.setGameStatus(GameStatus.Playing);
            TimerMgr.inst.startCountdown();
            EventDispatcher.instance.emit(GameEvent.EVENT_GAME_START);
            this.hide();
        });
    }

    private changeGameStatus(status: GameStatus): void {
        GameMgr.inst.setGameStatus(status);
        this.hide();
        console.log("changeGameStatus", status);
    }
}

tgxModuleContext.attachImplClass(UI_BattleGambit, UI_BattleGambit_Impl);


