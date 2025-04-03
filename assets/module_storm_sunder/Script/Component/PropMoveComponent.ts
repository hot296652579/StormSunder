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
        // this.randomAngle();
        this.changeDirection();
    }

    //随机角度
    private randomAngle() {
        this.node.setRotationFromEuler(0, randomRange(0, 360), 0);
    }

    protected override onTriggerEnter(event: ITriggerEvent) {
        // super.onTriggerEnter(event);

        const otherCollider = event.otherCollider;
        const otherNode = otherCollider.node;
        this.oppositeDirection();
    }

    //反方向运动 
    private oppositeDirection() {
        // 获取当前角度并加180度实现反向
        const currentAngle = this.node.eulerAngles.y;
        this.node.setRotationFromEuler(0, currentAngle + 180, 0);
    }

    /**
     * 改变移动方向
     */
    private changeDirection() {
        // 随机一个新的旋转角度
        const newAngle = randomRange(0, 360);
        // 设置节点的旋转
        this.node.setRotationFromEuler(0, newAngle, 0);
        // 重置已移动距离
        this.distanceMoved = 0;
    }

    update(deltaTime: number) {
        if (this.status === PropStatus.DIE) return;

        // 计算当前帧移动距离
        const moveStep = this.moveSpeed * deltaTime;

        // 更新已移动距离
        this.distanceMoved += moveStep;

        // 获取物体的前向方向
        const forward = new Vec3();
        Vec3.transformQuat(forward, Vec3.FORWARD, this.node.getWorldRotation());
        forward.normalize();

        // 计算移动向量
        const moveVec = new Vec3(
            -forward.x * moveStep,
            0,
            forward.z * moveStep
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


