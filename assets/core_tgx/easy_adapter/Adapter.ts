
import { _decorator, Component, UITransform, size, Size, screen, view, v4 } from 'cc';
import { EDITOR, JSB } from 'cc/env';
const { ccclass, property } = _decorator;
/**
 * @description 该适配方案参考 https://forum.cocos.org/t/cocos-creator/74001
 */

/**
 * 屏幕分辨率下 的像素值
 */
interface SafeArea {
    /**
     * 屏幕分辨率下：画布（屏幕)宽度
     */
    width: number;

    /**
     * 屏幕分辨率下：画布（屏幕）高度
     */
    height: number;

    /**@description 屏幕分辨率下：安全区域大小(像素) */
    safe: Size;

    /**@description 「设计分辨率」 非安全区域的大小(像素)即刘海单边的大小 */
    outside: Size;

    /**
     * 「设计分辨率」像素值转换到 「屏幕分辨率」 下的像素比
     *
     * e.g.
     *
     * * screenPx = designPx * pixelRatio
     * * designPx = screenPx / pixelRatio
     */
    designPxToScreenPxRatio: number;
}

/**@description 设备方向 */
enum DeviceDirection {
    /**@description 未知*/
    Unknown,
    /**@description 横屏(即摄像头向左) */
    LandscapeLeft,
    /**@description 横屏(即摄像头向右) */
    LandscapeRight,
    /**@description 竖屏(即摄像头向上) */
    Portrait,
    /**@description 竖屏(即摄像头向下) */
    UpsideDown,
}

let SAFE_SIZE = size(0, 0);
let OUTSIDE_SIZE = size(0, 0);
export class Adapter extends Component {

    static direction = DeviceDirection;

    protected set width(value: number) {
        let trans = this.getComponent(UITransform);
        if (!trans) {
            return;
        }
        trans.width = value;
    }
    protected get width() {
        let trans = this.getComponent(UITransform);
        if (!trans) {
            return 0;
        }
        return trans.width;
    }

    protected set height(value: number) {
        let trans = this.getComponent(UITransform);
        if (!trans) {
            return;
        }
        trans.height = value;
    }

    protected get height() {
        let trans = this.getComponent(UITransform);
        if (!trans) {
            return 0;
        }
        return trans.height;
    }

    protected static get windowSize() {
        if (EDITOR) {
            return view.getDesignResolutionSize();
        }
        return screen.windowSize;
    }

    protected static get visibleSize() {
        return view.getVisibleSize();
    }

    protected _func: any = null;

    /**@description 适配完成回调 */
    onAdapterComplete: () => void = null!;

    protected doOnAdapterComplete() {
        if (this.onAdapterComplete) {
            this.onAdapterComplete();
        }
    }

    onLoad() {
        super.onLoad && super.onLoad();
        this.onChangeSize();
    }

    onEnable() {
        super.onEnable && super.onEnable();
        this.addEvents();
    }

    onDisable() {
        this.removeEvents();
        super.onDisable && super.onDisable();
    }

    onDestroy() {
        this.removeEvents();
        super.onDestroy && super.onDestroy();
    }

    protected addEvents() {
        if (this._func) {
            return;
        }
        this._func = this.onChangeSize.bind(this);
        window.addEventListener("resize", this._func);
        window.addEventListener("orientationchange", this._func);
    }

    protected removeEvents() {
        if (this._func) {
            window.removeEventListener("resize", this._func);
            window.removeEventListener("orientationchange", this._func);
        }
        this._func = null;
    }

    /**
     * @description 视图发生大小变化
     */
    protected onChangeSize() {
        this.doOnAdapterComplete();
    }

    /**@description 获取当前设备方向 */
    get direction() {
        let str = "未知"
        let result = DeviceDirection.Unknown;
        let orientation = window.orientation;
        if (JSB) {
            orientation = jsb.device.getDeviceOrientation();
        }
        if (orientation != undefined || orientation != null) {
            if (orientation == 90) {
                str = `横屏向左`
                result = DeviceDirection.LandscapeLeft;
            } else if (orientation == -90) {
                str = `横屏向右`
                result = DeviceDirection.LandscapeRight;
            } else if (orientation == 0) {
                str = "竖屏向上"
                result = DeviceDirection.Portrait;
            } else if (orientation == 180) {
                str = "竖屏向下"
                result = DeviceDirection.UpsideDown;
            }
        }
        // console.log(`当前设备方向:${str}`)
        return result;
    }

    static get safeAreaEdge() {
        if (JSB) {
            return jsb.device.getSafeAreaEdge();
        } else {
            return v4(0, 0, 0, 0);
        }
    }

    private static _safeArea: SafeArea = null!;

    static set safeArea(value: SafeArea) {
        this._safeArea = value as any;
    }

    static screenPxToDesignPx(screenPx: number) {
        return screenPx / this.safeArea.designPxToScreenPxRatio;
    }

    static designPxToScreenPx(designPx: number) {
        return designPx * this.safeArea.designPxToScreenPxRatio;
    }

    /**
     * 基于屏幕尺寸的安全区域
     *
     * 可以通过 screenPxToDesignPx 转换为基于设计画布尺寸的像素大小
     */
    static get safeArea() {
        if (this._safeArea == null || this._safeArea == undefined) {
            // 初始屏幕宽高像素
            let screenWidth = Adapter.windowSize.width;
            let screenHeight = Adapter.windowSize.height;
            // 「设计分辨率」像素值转换到 「屏幕分辨率」 下的像素比
            let designWidth = Adapter.visibleSize.width;
            let designHeight = Adapter.visibleSize.height;
            let designPxToScreenPxRatio = Math.min(screenWidth / designWidth, screenHeight / designHeight);

            OUTSIDE_SIZE.width = 0
            OUTSIDE_SIZE.height = 0
            SAFE_SIZE.width = screenWidth - OUTSIDE_SIZE.width;
            SAFE_SIZE.height = screenHeight - OUTSIDE_SIZE.height
            if (JSB) {
                OUTSIDE_SIZE.width = (this.safeAreaEdge.y + this.safeAreaEdge.w)
                OUTSIDE_SIZE.height = (this.safeAreaEdge.x + this.safeAreaEdge.z)
                SAFE_SIZE.width = screenWidth - OUTSIDE_SIZE.width;
                SAFE_SIZE.height = screenHeight - OUTSIDE_SIZE.height
                OUTSIDE_SIZE.width = OUTSIDE_SIZE.width / 2
                OUTSIDE_SIZE.height = OUTSIDE_SIZE.height / 2
            }

            this._safeArea = {
                width: screenWidth,
                height: screenHeight,
                outside: OUTSIDE_SIZE,
                safe: SAFE_SIZE,
                designPxToScreenPxRatio: designPxToScreenPxRatio,
            };
        }
        return this._safeArea;
    }

    private _isFullScreenAdaption = true;
    /** 是否全屏*/
    public get isFullScreenAdaption() {
        return this._isFullScreenAdaption;
    }
    public set isFullScreenAdaption(value) {
        this._isFullScreenAdaption = value;
    }
}
