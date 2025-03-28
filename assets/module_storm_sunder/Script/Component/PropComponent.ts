import { _decorator, CCBoolean, CCFloat, Collider, Component, ITriggerEvent, Node, PhysicsSystem, tween, Tween, Vec3 } from 'cc';
import { Effect2DUIMgr } from '../Manager/Effect2DUIMgr';
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

    @property({ type: CCBoolean, displayName: "是否可移动" })
    isMove: boolean = false;

    currentHp: number = 0;
    status: PropStatus = PropStatus.LIFE;
    speed: number = 50;

    tigger: Collider = null!;

    start() {
        this.status = PropStatus.LIFE;
        this.currentHp = this.hp;

        this.tigger = this.node.getComponent(Collider)!;
        this.tigger.on('onTriggerEnter', this.onTriggerEnter, this);
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
            this.currentHp = 0;
            this.status = PropStatus.DIE;
            Effect2DUIMgr.Instance.removeBlood(this.node);
        }
    }

    //卷入龙卷风
    swallow() {
        Tween.stopAllByTarget(this.node);
        tween(this.node)
            .by(1, { position: new Vec3(0, this.node.position.y + 5, 0) })
            .call(() => {
                this.node.removeFromParent();
                this.node.destroy();
            })
            .start();
    }

    protected onTriggerEnter(event: ITriggerEvent): void {
    }

    onTriggerExit(event: ITriggerEvent): void {
        Effect2DUIMgr.Instance.removeBlood(this.node);
    }

    update(deltaTime: number) {

    }

    protected onDestroy(): void {

    }
}


