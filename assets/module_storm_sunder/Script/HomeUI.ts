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
        this.lbUserName.string = this.generateUniqueName(idMax);
        AttributeBonusMgr.inst.userModel.nickName = this.lbUserName.string;
        console.log('onClickRandom', AttributeBonusMgr.inst.userModel.nickName);
    }

    generateUniqueName(idMax: number): string {
        const uniqueNames = AttributeBonusMgr.inst.userModel.uniqueNames;
        const randomId = Math.floor(Math.random() * idMax) + 1; // 随机获取 1 到 idMax 之间的值
        const config = AttributeBonusMgr.inst.nameModelConfig.getPramById(randomId);

        if (config) {
            let newName = `${config.text_1}${config.text_2}`;
            let counter = 1;

            // 确保名称唯一
            while (uniqueNames.has(newName)) {
                newName = `${config.text_1}${config.text_2}_${counter}`;
                counter++;
            }

            uniqueNames.add(newName);
            return newName; // 直接返回拼接好的名字
        }

        return ""; // 若无有效名称，返回空字符串
    }

}
