import { Button, Component, Label, Node, NodeEventType, _decorator, find } from 'cc';
import { AttributeBonusMgr } from './Manager/AttributeBonusMgr';
import { EventDispatcher } from '../../core_tgx/easy_ui_framework/EventDispatcher';
import { GameEvent } from './Enum/GameEvent';

const { ccclass, property } = _decorator;

/**
 *HomeUI面板
 */
@ccclass('HomeUI')
export class HomeUI extends Component {

    lbUserMoney: Label = null;
    lbUserName: Label = null;

    protected onLoad(): void {
        this.lbUserMoney = this.node.getChildByPath('TopLeft/UserInfo/LbMoney').getComponent(Label)!;
        this.rigisterEvent();
    }

    protected start(): void {
        this.upadteUserInfo();
    }

    private rigisterEvent() {
        EventDispatcher.instance.on(GameEvent.EVENT_UPDATE_USER_MONEY, this.upadteUserInfo, this);
    }

    private upadteUserInfo() {
        const { money } = AttributeBonusMgr.inst.userModel;
        this.lbUserMoney.string = money.toString();
    }

}
