import { Button, Component, Label, Node, NodeEventType, _decorator, find } from 'cc';
import { AttributeBonusMgr } from './Manager/AttributeBonusMgr';
import { EventDispatcher } from '../../core_tgx/easy_ui_framework/EventDispatcher';
import { GameEvent } from './Enum/GameEvent';
import { PlayerMgr } from './Manager/PlayerMgr';

const { ccclass, property } = _decorator;

/**
 *HomeUI面板
 */
@ccclass('HomeUI')
export class HomeUI extends Component {

    lbUserMoney: Label = null;
    lbUserName: Label = null;

    btRandom: Node = null;

    protected onLoad(): void {
        this.lbUserMoney = this.node.getChildByPath('TopLeft/UserInfo/LbMoney').getComponent(Label)!;
        this.lbUserName = this.node.getChildByPath('UserName/lbUserName').getComponent(Label)!;
        this.btRandom = this.node.getChildByPath('UserName/BtRandom')!;
        this.rigisterEvent();
    }

    protected start(): void {
        this.upadteUserInfo();
    }

    private rigisterEvent() {
        EventDispatcher.instance.on(GameEvent.EVENT_UPDATE_USER_MONEY, this.upadteUserInfo, this);
        this.btRandom.on(NodeEventType.TOUCH_END, this.onClickRandom, this);
    }

    private upadteUserInfo() {
        const { money } = AttributeBonusMgr.inst.userModel;
        this.lbUserMoney.string = money.toString();
    }

    private onClickRandom() {
        const idMax: number = 20;
        this.lbUserName.string = PlayerMgr.inst.generateUniqueName(idMax);
        AttributeBonusMgr.inst.userModel.nickName = this.lbUserName.string;
        // console.log('onClickRandom', AttributeBonusMgr.inst.userModel.nickName);
    }

}
