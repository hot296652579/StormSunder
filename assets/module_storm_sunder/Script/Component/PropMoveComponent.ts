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

    _moveDir: Vec3 = new Vec3();

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

        if (event.otherCollider.getGroup() === 1 << 5) {
            console.log(`碰撞到了边界碰撞器!!!`)
            return;
        }
        const otherCollider = event.otherCollider;
        const otherNode = otherCollider.node;
        this.oppositeDirection();
    }

    //反方向运动 
    private oppositeDirection() {
        // 直接反转当前的移动方向
        this._moveDir.negative();

        // 更新朝向
        const targetPos = this.node.worldPosition.clone().add(this._moveDir);
        this.node.lookAt(targetPos);

        // 重置已移动距离
        this.distanceMoved = 0;
    }

    /**
     * 改变移动方向
     */
    private changeDirection() {
        // 随机生成一个方向（限制在XZ平面上）
        const angle = randomRange(0, 360);
        const rad = angle * Math.PI / 180;

        this._moveDir.set(Math.sin(rad), 0, Math.cos(rad));
        this._moveDir.normalize();

        // 更新朝向
        const targetPos = this.node.worldPosition.clone().add(this._moveDir);
        this.node.lookAt(targetPos);
        // 重置已移动距离
        this.distanceMoved = 0;
    }

    update(deltaTime: number) {
        if (this.status === PropStatus.DIE) return;

        // 获取物体的前向方向
        const forward = new Vec3();
        Vec3.transformQuat(forward, Vec3.FORWARD, this.node.getWorldRotation());
        forward.normalize();

        // 计算移动向量
        const moveStep = forward.multiplyScalar(this.moveSpeed * deltaTime);
        this.node.worldPosition = this.node.worldPosition.add(moveStep);

        // 更新已移动距离
        this.distanceMoved += moveStep.length();

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


