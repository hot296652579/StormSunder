import { Vec3, Node, tween, Component } from 'cc';

export class PathfindingManager {
    private static instance: PathfindingManager;

    static getInstance(): PathfindingManager {
        if (!this.instance) {
            this.instance = new PathfindingManager();
        }
        return this.instance;
    }

    /**
     * 让节点移动到目标点
     * @param node 需要移动的对象
     * @param targetPosition 目标点
     * @param duration 移动持续时间（秒）
     */
    public moveTo(node: Node, targetPosition: Vec3, duration: number) {
        tween(node)
            .to(duration, { position: targetPosition })
            .start();
    }

    /** 让 AI 持续追踪目标 */
    followTarget(aiComponent: Component, targetNode: Node, moveSpeed: number, cb: Function) {
        if (!targetNode) return;

        aiComponent.schedule(() => {
            if (!targetNode.isValid) {
                if (cb) cb();
                return;
            }

            // console.log('追击中...');
            const aiNode = aiComponent.node;
            const targetPos = targetNode.worldPosition;
            const myPos = aiNode.worldPosition;

            const direction = targetPos.clone().subtract(myPos).normalize();
            const moveStep = direction.multiplyScalar(moveSpeed * 0.016); // 16ms 约等于 60FPS

            aiNode.setWorldPosition(myPos.add(moveStep));
        }, 0.016); // 60FPS 更新追击
    }

}

