import { Button, Component, Label, Node, NodeEventType, _decorator, find, view } from 'cc';
import { AttributeBonusMgr } from './Manager/AttributeBonusMgr';
import { EventDispatcher } from '../../core_tgx/easy_ui_framework/EventDispatcher';
import { GameEvent } from './Enum/GameEvent';



import { GameUtil } from './GameUtil';
import { PlayerMgr } from './Manager/PlayerMgr';
import { Tween, Vec3 } from 'cc';

const { ccclass, property } = _decorator;

/**
 *Pk UI
 */
@ccclass('PkPropUI')
export class PkPropUI extends Component {

    @property(Label)
    lbPlayer0: Label = null;

    @property(Label)
    lbPlayer1: Label = null;

    updateBattleInfo(player1: string, player2: string) {
        this.lbPlayer0.string = player1;
        this.lbPlayer1.string = player2;

        this.playPkPropAnimation();
    }

    //动画 从舞台左入场到中间 停顿0.5s后从中间到舞台右出场
    playPkPropAnimation() {
        // Reset initial position to left of screen
        this.node.setPosition(-view.getVisibleSize().width - 100, 100, 0);

        // Create animation sequence using tween
        const tween = new Tween(this.node)
            .to(0.5, { position: new Vec3(0, 100, 0) }) // Move to center
            .delay(1) // Pause for 0.5 seconds
            .to(0.5, { position: new Vec3(view.getVisibleSize().width + 100, 100, 0) }) // Move to right
            .start();
    }

}
