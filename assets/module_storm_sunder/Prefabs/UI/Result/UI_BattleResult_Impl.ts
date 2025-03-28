import { isValid, Label, tween, v3, Vec3, Node, Tween } from "cc";
import { tgxModuleContext } from "../../../../core_tgx/tgx";
import { GameUILayers } from "../../../../scripts/GameUILayers";
import { UI_BattleResult } from "../../../../scripts/UIDef";
import { Layout_BattleResult } from "./Layout_BattleResult";
import { GameEvent } from "../../../Script/Enum/GameEvent";
import { StormSunderAudioMgr } from "../../../Script/Manager/StormSunderAudioMgr";
import { GameMgr, GameStatus } from "../../../Script/Manager/GameMgr";
import { PlayerMgr } from "../../../Script/Manager/PlayerMgr";
import { AttributeBonusMgr } from "../../../Script/Manager/AttributeBonusMgr";
import { EventDispatcher } from "db://assets/core_tgx/easy_ui_framework/EventDispatcher";
import { GlobalConfig } from "db://assets/start/Config/GlobalConfig";
import { AdvertMgr } from "db://assets/core_tgx/base/ad/AdvertMgr";

export class UI_BattleResult_Impl extends UI_BattleResult {
    win: boolean = true;
    rank: number = -1;
    reward: number = 0;

    //广告奖励倍数
    rewardMultiple: number = 1;

    constructor() {
        super('Prefabs/UI/Result/UI_BattleResult', GameUILayers.POPUP, Layout_BattleResult);
    }

    public getRes(): [] {
        return [];
    }

    protected onCreated(): void {
        this.initReward();

        const soundId = this.win ? 6 : 7;
        StormSunderAudioMgr.playOneShot(StormSunderAudioMgr.getMusicIdName(soundId), 1.0);

        let layout = this.layout as Layout_BattleResult;
        this.onButtonEvent(layout.btNextAd, () => {
            this.onClickReward(this.rewardMultiple);
        });
        this.onButtonEvent(layout.btGet, () => {
            this.onClickReward();
        });
        this.onButtonEvent(layout.btRestart, () => {
            this.onClickRestart();
        });

        layout.winNode.active = this.win;
        layout.loseNode.active = !this.win;

        this.rotationLight();
        this.updateInfoUI();
    }

    //计算奖励
    private initReward(): void {
        const userModel = AttributeBonusMgr.inst.userModel;
        this.win = GameMgr.inst.isWin;
        this.rank = PlayerMgr.inst.getPlayerRank();

        const totalLevel = Object.values(userModel.bonusData).reduce((sum, bonus) => sum + bonus.level, 0);
        const rewardDevelop = Number((userModel.game_reward_develop / 100).toFixed(2));
        const rewardRank = Number((userModel.game_reward_rank / 100).toFixed(2));
        //最终奖励=[基础奖励×（1+属性提升值×属性养成加成）]×[1-(本局排名-1)×排名减益]
        this.reward = Math.floor(userModel.game_reward_develop * (1 + totalLevel * rewardDevelop) * (1 - (this.rank - 1) * rewardRank));

        this.rewardMultiple = userModel.game_pass_reward_multiple;
    }

    private updateInfoUI(): void {
        const { lbUserRank, lbReward, lbMultiple, lbGet } = this.layout;
        lbUserRank.string = `${this.rank}`;
        lbReward.string = `${this.reward}`;
        lbMultiple.string = `x ${this.rewardMultiple}`;
        lbGet.string = `${this.reward}`;
    }

    private rotationLight(): void {
        if (!this.win) return;
        const { light } = this.layout;
        light.eulerAngles = v3(0, 0, 0);
        tween(light)
            .repeatForever(
                tween()
                    .to(5, { eulerAngles: new Vec3(0, 0, 360) }, { easing: 'linear' })
                    .call(() => {
                        light!.eulerAngles = new Vec3(0, 0, 0);
                    })
            )
            .start();
    }

    private changeGameStatus(status: GameStatus): void {
        GameMgr.inst.setGameStatus(status);
        this.node.removeFromParent();
        this.node.destroy();
    }

    private onClickReward(multiple?: number): void {
        if (multiple) {
            if (!GlobalConfig.isDebug) {
                AdvertMgr.instance.showReawardVideo(() => {
                    const reward = this.reward * multiple;
                    AttributeBonusMgr.inst.addMoney(reward);
                    this.changeGameStatus(GameStatus.None);
                })
            } else {
                const reward = this.reward * multiple;
                AttributeBonusMgr.inst.addMoney(reward);
                this.changeGameStatus(GameStatus.None);
            }
        } else {
            AttributeBonusMgr.inst.addMoney(this.reward);
            this.changeGameStatus(GameStatus.None);
        }
    }

    private onClickRestart(): void {
        this.changeGameStatus(GameStatus.None);
    }
}

tgxModuleContext.attachImplClass(UI_BattleResult, UI_BattleResult_Impl);