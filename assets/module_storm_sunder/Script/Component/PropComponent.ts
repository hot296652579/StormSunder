import { _decorator, CCBoolean, CCFloat, Collider, Component, isValid, ITriggerEvent, Node, PhysicsSystem, tween, Tween, Vec3 } from 'cc';
import { Effect2DUIMgr } from '../Manager/Effect2DUIMgr';
import { StormSunderAudioMgr } from '../Manager/StormSunderAudioMgr';
import { GameMgr, GameStatus } from '../Manager/GameMgr';
const { ccclass, property } = _decorator;

export enum PropStatus {
    LIFE,
    DIE
}

@ccclass('PropComponent')
export class PropComponent extends Component {

    @property({ type: CCFloat })
    hp: number = 1;

    @property({ type: CCFloat })
    currentExp: number = 10;
    get getExp() {
        return this.currentExp;
    }

    set setExp(value: number) {
        this.currentExp = value;
    }

    @property({ type: CCBoolean, displayName: "是否可移动" })
    isMove: boolean = false;

    private isShaking: boolean = false;

    currentHp: number = 0;
    status: PropStatus = PropStatus.LIFE;
    speed: number = 50;

    tigger: Collider = null!;

    start() {
        this.status = PropStatus.LIFE;
        this.currentHp = this.hp;
        this.setExp = 500;

        this.tigger = this.node.getComponent(Collider)!;
        this.tigger.on('onTriggerEnter', this.onTriggerEnter, this);
        this.tigger.on('onTriggerStay', this.onTriggerStay, this);
        this.tigger.on('onTriggerExit', this.onTriggerExit, this);
    }

    //受伤
    async hurt(damage: number) {
        if (this.status == PropStatus.DIE) return;

        this.currentHp -= damage;
        // console.log(`当前道具血量:${this.currentHp}`);

        if (this.currentHp > 0) {
            const hpPercent = this.currentHp / this.hp;
            // 显示或更新血条
            await Effect2DUIMgr.Instance.showBlood(this.node, hpPercent);
        }

        //小于0时死亡
        if (this.currentHp <= 0) {
            StormSunderAudioMgr.playOneShot(StormSunderAudioMgr.getMusicIdName(4), 1.0);
            this.currentHp = 0;
            this.status = PropStatus.DIE;
            Effect2DUIMgr.Instance.removeBlood(this.node);
        }
    }

    //卷入龙卷风
    swallow(target: Node) {
        Tween.stopAllByTarget(this.node);
        tween(this.node)
            .to(0.7, { position: new Vec3(0, this.node.position.y + 1, 0) })
            .to(0.7, { scale: new Vec3(0, 0, 0) })
            .call(() => {
                this.node.removeFromParent();
                this.node.destroy();
            })
            .union()
            .start();
    }

    private shake() {
        if (this.isShaking || this.isMove) return;
        this.isShaking = true;

        const originalPosition = this.node.position.clone();
        const shakeStrength = 0.2;
        const shakeDuration = 0.05;

        tween(this.node)
            .to(shakeDuration, { position: new Vec3(originalPosition.x + shakeStrength, originalPosition.y, originalPosition.z) })
            .to(shakeDuration, { position: new Vec3(originalPosition.x - shakeStrength, originalPosition.y, originalPosition.z) })
            .to(shakeDuration, { position: new Vec3(originalPosition.x, originalPosition.y + shakeStrength, originalPosition.z) })
            .to(shakeDuration, { position: new Vec3(originalPosition.x, originalPosition.y - shakeStrength, originalPosition.z) })
            .to(shakeDuration, { position: originalPosition })
            .call(() => {
                this.isShaking = false;
            })
            .start();
    }

    protected onTriggerEnter(event: ITriggerEvent): void {
    }

    protected onTriggerStay(event: ITriggerEvent): void {
        if (GameMgr.inst.getGameStatus() != GameStatus.Playing) return;
        //建筑抖动效果
        if (isValid(this.node)) {
            const otherCollider = event.otherCollider.node;
            if (otherCollider.name == "RigibodyStorm") {
                // this.shake();
            }
        }
    }

    onTriggerExit(event: ITriggerEvent): void {
        Effect2DUIMgr.Instance.removeBlood(this.node);

        // if (!this.isMove) {
        //     const otherCollider = event.otherCollider.node;
        //     if (otherCollider.name == "RigibodyStorm") {
        //         Tween.stopAllByTarget(this.node);
        //         this.isShaking = false;
        //     }
        // }
    }

    update(deltaTime: number) {

    }

    protected onDestroy(): void {
        Tween.stopAllByTarget(this.node);
    }
}


