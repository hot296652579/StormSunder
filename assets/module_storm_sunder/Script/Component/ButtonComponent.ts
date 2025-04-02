import { Button, Component, Label, Node, NodeEventType, _decorator, find } from 'cc';
import { GameEvent } from '../Enum/GameEvent';
import { EventDispatcher } from 'db://assets/core_tgx/easy_ui_framework/EventDispatcher';
import { GlobalConfig } from 'db://assets/start/Config/GlobalConfig';
import { AdvertMgr } from 'db://assets/core_tgx/base/ad/AdvertMgr';
import { StormSunderAudioMgr } from '../Manager/StormSunderAudioMgr';
import { AttributeBonusMgr, BonusType } from '../Manager/AttributeBonusMgr';
const { ccclass, property } = _decorator;

/**
 * 底部按钮控制器
 */
@ccclass('ButtonComponent')
export class ButtonComponent extends Component {
    @property(Button) btnAttack: Button = null!;
    @property(Button) btSpeed: Button = null!;
    @property(Button) btExp: Button = null!;

    protected onEnable(): void {
        this.addUIEvent();
        this.updateBtView(BonusType.ATTACK);
        this.updateBtView(BonusType.SPEED);
        this.updateBtView(BonusType.EXP);
        this.onUpdateBtnsStatus();
    }

    private addUIEvent(): void {
        this.btnAttack.node.on(NodeEventType.TOUCH_END, () => this.onClickHandler(BonusType.ATTACK), this);
        this.btSpeed.node.on(NodeEventType.TOUCH_END, () => this.onClickHandler(BonusType.SPEED), this);
        this.btExp.node.on(NodeEventType.TOUCH_END, () => this.onClickHandler(BonusType.EXP), this);
    }

    private onClickHandler(type: BonusType): void {
        StormSunderAudioMgr.playOneShot(StormSunderAudioMgr.getMusicIdName(2), 1.0);
        const { userModel } = AttributeBonusMgr.inst;
        const bonus = userModel.bonusData[type];

        // 检查金额是否足够
        if (!AttributeBonusMgr.inst.checkMoneyEnough(bonus.upgradeCost)) {
            if (!GlobalConfig.isDebug) {
                AdvertMgr.instance.showReawardVideo(() => {
                    this.upLevelBonus(type);
                })
            } else {
                this.upLevelBonus(type);
            }
        }

        // 扣除金额
        if (!AttributeBonusMgr.inst.consumeMoney(bonus.upgradeCost)) {
            return;
        }

        this.upLevelBonus(type);
        // console.log(`当前属性最终加成:${AttributeBonusMgr.inst.getBonus(type)}`);
    }

    private upLevelBonus(type: BonusType): void {
        const { userModel } = AttributeBonusMgr.inst;
        const bonus = userModel.bonusData[type];
        // 升级逻辑
        bonus.level++;
        // 更新升级消耗
        bonus.upgradeCost += AttributeBonusMgr.inst.getUpgradeCost(type);
        AttributeBonusMgr.inst.updateBonus(type);

        // 更新按钮状态
        this.updateBtView(type);
        this.onUpdateBtnsStatus();
    }

    private onUpdateBtnsStatus(): void {
        this.updateBtStatus(BonusType.ATTACK);
        this.updateBtStatus(BonusType.SPEED);
        this.updateBtStatus(BonusType.EXP);
    }

    private updateBtView(type: BonusType, max?: boolean): void {
        const { userModel } = AttributeBonusMgr.inst;
        const { bonusData } = userModel;
        const buttonNode = this.getButtonNodeByType(type);

        const lbLevel: Label = buttonNode.getChildByName('LbLv').getComponent(Label)!;
        const useddMoney = buttonNode.getChildByName('UsedMoney')!;
        const usedAd = buttonNode.getChildByName('UsedAd')!;
        const lbMoney: Label = useddMoney.getChildByName('LbAmount').getComponent(Label)!;

        if (max) {
            lbLevel.string = 'MAX';
            useddMoney.active = false;
            usedAd.active = false;
        } else {
            const bonus = bonusData[type];
            lbLevel.string = `LV.${bonus.level}`;
            lbMoney.string = `${bonus.upgradeCost}`;
        }
    }

    private updateBtStatus(type: BonusType): void {
        const { userModel } = AttributeBonusMgr.inst;
        const bonus = userModel.bonusData[type];
        const buttonNode = this.getButtonNodeByType(type);
        const usedMoney = buttonNode.getChildByName('UsedMoney')!;
        const usedAd = buttonNode.getChildByName('UsedAd')!;

        // 检查金额是否足够
        const canAfford = AttributeBonusMgr.inst.checkMoneyEnough(bonus.upgradeCost);

        // 金额不够显示广告图标，够则显示金额
        usedMoney.active = canAfford;
        usedAd.active = !canAfford;
    }

    private getButtonNodeByType(type: BonusType): Node {
        return {
            [BonusType.ATTACK]: this.btnAttack.node,
            [BonusType.SPEED]: this.btSpeed.node,
            [BonusType.EXP]: this.btExp.node,
        }[type];
    }

}
