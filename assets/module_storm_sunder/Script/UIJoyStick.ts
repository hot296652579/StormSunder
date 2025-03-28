import { _decorator, Component, CCFloat, EventTouch, Input, Node, math, Sprite, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * 摇杆控制器
 */
@ccclass('UIJoyStick')
export class UIJoyStick extends Component {

    public static ins: UIJoyStick = null!;

    /**
     * 手指部分
     */
    @property(Sprite)
    joystickPoint: Sprite = null!;

    /**
     * 摇杆的背景
     */
    @property(Sprite)
    joyStickBg: Sprite = null!;

    /**
     * 摇杆的半径
     */
    @property(CCFloat)
    radius: number = 130;

    /**
     * 摇杆初始化的位置
     */
    initJoyStickBgPosition: Vec3 = v3()

    /**
     * 方向
     */
    private _dir: Vec3 = new Vec3(Vec3.ZERO);
    public get dir(): Vec3 {
        return this._dir;
    }
    public set dir(value: Vec3) {
        this._dir = value;
    }

    start() {
        if (!this.node) return

        if (!UIJoyStick.ins) {
            UIJoyStick.ins = this;
        }

        this.joyStickBg.node.active = false;

        this.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.initJoyStickBgPosition = this.joyStickBg.node.worldPosition.clone();
    }

    onDestroy() {
        this.node.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onTouchStart(eventTouch: EventTouch) {
        this.joyStickBg.node.active = true;
        let x = eventTouch.touch?.getUILocationX()!;
        let y = eventTouch.touch?.getUILocationY()!;
        this.joyStickBg.node.setWorldPosition(x, y, 0);
    }

    /**
     * 触摸移动
     * @param touchEvent 
     */
    onTouchMove(touchEvent: EventTouch) {
        // 获取摇杆在 UI 的位置
        let x = touchEvent.touch?.getUILocationX()!;
        let y = touchEvent.touch?.getUILocationY()!;

        let worldPosition = new Vec3(x, y, 0);
        let localPosition = v3();
        // 转化摇杆的位置到背景图的本地坐标
        this.joyStickBg.node.inverseTransformPoint(localPosition, worldPosition);
        let thumbnailPosition = v3();
        let len = localPosition.length();
        localPosition.normalize();
        Vec3.scaleAndAdd(thumbnailPosition, v3(), localPosition, math.clamp(len, 0, this.radius));

        this.joystickPoint.node.setPosition(thumbnailPosition);

        // 将计算的结果赋予给 Input
        // VirtualInput.horizontal = this.joystickPoint.node.position.x / this.radius;
        // VirtualInput.vertical = this.joystickPoint.node.position.y / this.radius;

        this.dir = thumbnailPosition.clone().normalize();
    }

    /**
     * 触摸结束
     * @param touchEvent 
     */
    onTouchEnd(touchEvent: EventTouch) {
        this.joyStickBg.node.active = false;
        this.joystickPoint.node.setPosition(v3());
        // VirtualInput.horizontal = 0;
        // VirtualInput.vertical = 0;
        this.dir = v3(0, 0, 0);
        // 摇杆的位置回归到初始化位置
        this.joyStickBg.node.worldPosition = this.initJoyStickBgPosition;
    }
}

