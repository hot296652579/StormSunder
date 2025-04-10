import { _decorator, BoxCollider, Component, ITriggerEvent, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BorderComponent')
export class BorderComponent extends Component {

    tigger: BoxCollider = null!; //龙卷风触发器
    start() {
        this.tigger = this.node.getComponent(BoxCollider)!;

        this.tigger.on('onTriggerEnter', this.onTriggerEnter, this);
    }

    private onTriggerEnter(event: ITriggerEvent): void {
        const other = event.otherCollider.node;
        if (event.otherCollider.getGroup() == 1 << 4) {
            other.removeFromParent();
            other.destroy();
        }
    }
}


