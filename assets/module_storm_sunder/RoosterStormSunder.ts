import { _decorator, Component, ERaycast2DType, find, Label, Node, NodeEventType, PhysicsSystem2D, Tween, tween, v2, v3, Vec2, Vec3 } from 'cc';
import { EventDispatcher } from '../core_tgx/easy_ui_framework/EventDispatcher';
import { StormSunderGlobalInstance } from './Script/StormSunderGlobalInstance';
import { GameEvent } from './Script/Enum/GameEvent';
import { GameUtil } from './Script/GameUtil';

import { tgxUIMgr } from '../core_tgx/tgx';
import { UI_Setting } from '../scripts/UIDef';
import { StormSunderAudioMgr } from './Script/Manager/StormSunderAudioMgr';
import { GameMgr, GameStatus } from './Script/Manager/GameMgr';
import { AttributeBonusMgr } from './Script/Manager/AttributeBonusMgr';
import { PlayerMgr } from './Script/Manager/PlayerMgr';
const { ccclass, property } = _decorator;

@ccclass('RoosterStormSunder')
export class RoosterStormSunder extends Component {

    onLoad() {
        AttributeBonusMgr.inst.initilize();
        StormSunderAudioMgr.initilize();
        // StormSunderAudioMgr.play(StormSunderAudioMgr.getMusicIdName(1), 1.0);
    }

    protected start(): void {
        this.initialize();
        this.registerListener();
    }

    async initialize() {
        PlayerMgr.inst.addAIPlayers();
        PlayerMgr.inst.weightGeneateAIConfig();
        StormSunderGlobalInstance.instance.initUI();
    }

    registerListener() {
        const btnRefresh = StormSunderGlobalInstance.instance.btnRefresh;
        const btnSet = StormSunderGlobalInstance.instance.btnSet;
        const btnStart = StormSunderGlobalInstance.instance.btnStart;

        btnSet.on(NodeEventType.TOUCH_END, () => this.onClickSet(), this);
        btnStart.on(NodeEventType.TOUCH_END, () => this.onClickStart(), this);
    }

    private async onClickStart(): Promise<void> {
        GameUtil.delay(0.2);
        GameMgr.inst.startGame();
    }

    private onClickSet(): void {
        StormSunderAudioMgr.playOneShot(StormSunderAudioMgr.getMusicIdName(2), 1.0);
        const show = tgxUIMgr.inst.isShowing(UI_Setting);
        if (!show) {
            tgxUIMgr.inst.showUI(UI_Setting);
        }
    }
}




