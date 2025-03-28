import { Button, Component, Label, Node, NodeEventType, _decorator, find } from 'cc';
import { AttributeBonusMgr } from './Manager/AttributeBonusMgr';
import { EventDispatcher } from '../../core_tgx/easy_ui_framework/EventDispatcher';
import { GameEvent } from './Enum/GameEvent';
import { GameUtil } from './GameUtil';
import { PlayerMgr } from './Manager/PlayerMgr';

const { ccclass, property } = _decorator;

/**
 *排行面板
 */
@ccclass('RankUI')
export class RankUI extends Component {

    rank1: Node = null;
    rank2: Node = null;
    rank3: Node = null;
    rank4: Node = null;

    protected async onLoad() {
        this.rank1 = this.node.getChildByName("Rank1");
        this.rank2 = this.node.getChildByName("Rank2");
        this.rank3 = this.node.getChildByName("Rank3");
        this.rank4 = this.node.getChildByName("Rank4");

        await GameUtil.delay(0.2);
        this.initUI();
        this.rigisterEvent();
    }

    private initUI() {
        this.rank1.active = true;
        this.rank2.active = false;
        this.rank3.active = false;
        this.rank4.active = false;

        const lbName = this.rank1.getChildByName("LbName").getComponent(Label);
        console.log('AttributeBonusMgr.inst.userModel.nickName:', AttributeBonusMgr.inst.userModel.nickName);
        lbName.string = `${AttributeBonusMgr.inst.userModel.nickName}`;
        const lbHeight = this.rank1.getChildByName("LbHeight").getComponent(Label);
        lbHeight.string = `${AttributeBonusMgr.inst.userModel.game_tornado_base_height} m`;
    }

    protected start(): void {
    }

    private onRefreshRank() {
        const rankList = PlayerMgr.inst.getRanking();
        // console.log('rankList:', rankList);

        // Hide all rank nodes first
        this.rank1.active = false;
        this.rank2.active = false;
        this.rank3.active = false;
        this.rank4.active = false;

        // Display top 3 rankings
        for (let i = 0; i < Math.min(3, rankList.length); i++) {
            const rankNode = this[`rank${i + 1}`];
            const playerData = rankList[i];

            rankNode.active = true;
            rankNode.getChildByName("LbName").getComponent(Label).string = playerData.nickName;
            rankNode.getChildByName("LbHeight").getComponent(Label).string = `${playerData.height} m`;
        }

        // Check if current player is not in top 3 and there are more than 3 players
        if (rankList.length > 3) {
            const currentPlayerIndex = rankList.findIndex(player =>
                player.nickName === AttributeBonusMgr.inst.userModel.nickName
            );

            if (currentPlayerIndex >= 3) {
                this.rank4.active = true;
                const playerData = rankList[currentPlayerIndex];
                this.rank4.getChildByName("LbName").getComponent(Label).string = playerData.nickName;
                this.rank4.getChildByName("LbHeight").getComponent(Label).string = `${playerData.height} m`;
            }
        }
    }

    private rigisterEvent() {
        EventDispatcher.instance.on(GameEvent.EVENT_REFRESH_RANK, this.onRefreshRank, this);
    }

}
