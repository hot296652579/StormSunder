import { _decorator, Component, Game, Label, Node, Tween, tween } from 'cc';
import { GameUILayers } from "../../../../scripts/GameUILayers";
import { UI_BattleMatch, UI_BattleRevive } from "../../../../scripts/UIDef";
import { GameMgr, GameStatus } from '../../../Script/Manager/GameMgr';
import { tgxModuleContext } from 'db://assets/core_tgx/tgx';
import { Layout_BattleMatch } from './Layout_BattleMatch';
import { MapMgr } from '../../../Script/Manager/MapMgr';
import { EventDispatcher } from 'db://assets/core_tgx/easy_ui_framework/EventDispatcher';
import { GameEvent } from '../../../Script/Enum/GameEvent';
import { GameUtil } from '../../../Script/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('UI_BattleMatch_Impl')
export class UI_BattleMatch_Impl extends UI_BattleRevive {
    animationDuration: number = 1.0; // 动画总时长
    private baseText: string = "Matching";
    private animationTween: Tween<any> = null;
    private matchText: Label = null;
    constructor() {
        super('Prefabs/UI/Match/UI_BattleMatch', GameUILayers.POPUP, Layout_BattleMatch);
    }

    public getRes(): [] {
        return [];
    }

    protected onCreated(): void {
        this.registerEvent();
        let layout = this.layout as Layout_BattleMatch;
        let match = layout.btn_match.node.getChildByName('Label').getComponent(Label);
        this.matchText = match;
        this.matchText.string = this.baseText;
        this.startTextAnimation();
        MapMgr.Instance.addMapNode();
    }

    private registerEvent() {
        EventDispatcher.instance.on(GameEvent.EVENT_MAP_LOAD_COMPLETE, this.onAnimationComplete, this);
    }

    startTextAnimation() {
        // 停止已有动画
        this.stopAnimation();

        // 定义每个点的显示间隔（总时长1秒，3个点）
        const dotInterval = 0.333; // 每个点约0.333秒

        this.animationTween = tween(this)
            .sequence(
                // 第一个点
                tween()
                    .delay(dotInterval)
                    .call(() => {
                        this.matchText.string = this.baseText + ".";
                    }),

                // 第二个点
                tween()
                    .delay(dotInterval)
                    .call(() => {
                        this.matchText.string = this.baseText + "..";
                    }),

                // 第三个点
                tween()
                    .delay(dotInterval)
                    .call(() => {
                        this.matchText.string = this.baseText + "...";
                    })
            )
            .call(() => {
                // 1秒后执行完成回调
                // this.onAnimationComplete();
            })
            .union() // 合并前面的sequence
            .repeatForever() // 循环播放
            .start();
    }

    stopAnimation() {
        if (this.animationTween) {
            this.animationTween.stop();
            this.animationTween = null;
        }
    }

    private async onAnimationComplete() {
        await GameUtil.delay(1);
        this.unregisterEvent();
        this.stopAnimation();
        this.hide();
        GameMgr.inst.startGame();
    }

    private unregisterEvent() {
        EventDispatcher.instance.off(GameEvent.EVENT_MAP_LOAD_COMPLETE, this.onAnimationComplete, this);
    }
}

tgxModuleContext.attachImplClass(UI_BattleMatch, UI_BattleMatch_Impl);


