import { Button, Component, Label, Node, NodeEventType, _decorator, find } from 'cc';
import { AttributeBonusMgr } from './Manager/AttributeBonusMgr';
import { EventDispatcher } from '../../core_tgx/easy_ui_framework/EventDispatcher';
import { GameEvent } from './Enum/GameEvent';
import { GameUtil } from './GameUtil';
import { PlayerMgr } from './Manager/PlayerMgr';

const { ccclass, property } = _decorator;

/**
 *游戏玩家经验UI
 */
@ccclass('ExpUserUI')
export class ExpUserUI extends Component {

    @property(Label)
    lbExp: Label = null;


    protected start(): void {
        this.registerEvent();
    }

    private registerEvent() {
        EventDispatcher.instance.on(GameEvent.EVENT_UPDATE_USER_EXP, this.onUpdateUserExp, this);
    }

    private onUpdateUserExp(args: any) {
        let exp = args[0];
        let maxExp = args[1];
        this.lbExp.string = exp + "/" + maxExp;
    }

    protected onDestroy(): void {
        this.rigisterEvent();
    }

    private rigisterEvent() {
        EventDispatcher.instance.off(GameEvent.EVENT_UPDATE_USER_EXP, this.onUpdateUserExp, this);
    }

}
