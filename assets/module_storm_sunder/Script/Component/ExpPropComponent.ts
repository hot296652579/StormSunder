import { _decorator, Component, isValid, Label, Node, tween, Tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ExpPropComponent')
export class ExpPropComponent extends Component {

    @property(Label)
    lb: Label = null;

    start() {

    }

    //显示经验动画 
    showExp(exp: number) {
        this.lb.string = `EXP+${exp}`;
        this.lb.node.active = true;

        Tween.stopAllByTarget(this.node);
        //当前节点位置 向上移动 然后销毁
        const worldPos = this.node.worldPosition.clone();
        tween(this.node)
            .to(0.5, { worldPosition: new Vec3(worldPos.x, worldPos.y + 100, worldPos.z) }, { easing: 'quadOut' })
            .call(() => {
                this.node.removeFromParent();
                this.node.destroy();
            })
            .start();
    }

    update(deltaTime: number) {

    }
}


