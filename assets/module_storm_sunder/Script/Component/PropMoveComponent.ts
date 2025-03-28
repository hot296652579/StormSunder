import { _decorator, Component, Collider, ITriggerEvent, Node, CCFloat, Vec3, randomRange, PhysicsSystem } from 'cc';
import { PropComponent, PropStatus } from './PropComponent';
import { Effect2DUIMgr } from '../Manager/Effect2DUIMgr';
import { PropMgr } from '../Manager/PropMgr';
const { ccclass, property } = _decorator;

@ccclass('PropMoveComponent')
export class PropMoveComponent extends PropComponent {

    @property({ type: CCFloat, displayName: "移动距离" })
    moveDistance: number = 10;

    @property({ type: CCFloat, displayName: "移动速度" })
    moveSpeed: number = 10;

    // 当前移动方向
    private currentDirection: Vec3 = new Vec3();
    // 已移动距离
    private distanceMoved: number = 0;

    start() {
        super.start();

        this.moveSpeed = Math.round((this.moveSpeed / 10) * 100) / 100;
        // 初始化随机移动方向
        this.changeDirection();
    }

    protected override onTriggerEnter(event: ITriggerEvent) {
        // super.onTriggerEnter(event);

        const otherCollider = event.otherCollider;
        const otherNode = otherCollider.node;
        this.oppositeDirection();
    }

    //反方向运动 
    private oppositeDirection() {
        this.currentDirection.multiplyScalar(-1);
    }

    /**
     * 改变移动方向
     */
    private changeDirection() {
        // 随机生成一个水平方向（x和z轴）
        const randomX = randomRange(-1, 1);
        const randomZ = randomRange(-1, 1);

        // 设置新的移动方向并归一化
        this.currentDirection.set(randomX, 0, randomZ);
        this.currentDirection.normalize();

        // 重置已移动距离
        this.distanceMoved = 0;

        // console.log(`改变移动方向: (${this.currentDirection.x}, ${this.currentDirection.z})`);
    }

    update(deltaTime: number) {
        if (this.status === PropStatus.DIE) return;

        // 计算当前帧移动距离
        const moveStep = this.moveSpeed * deltaTime;

        // 更新已移动距离
        this.distanceMoved += moveStep;

        // 计算移动向量
        const moveVec = new Vec3(
            this.currentDirection.x * moveStep,
            0,
            this.currentDirection.z * moveStep
        );

        // 更新位置
        this.node.position = this.node.position.add(moveVec);

        // 如果已移动距离超过设定值，改变方向
        if (this.distanceMoved >= this.moveDistance) {
            this.changeDirection();
        }
    }

    protected onDestroy(): void {
        super.onDestroy();

        PropMgr.inst.removeMovingProp();
    }
}


