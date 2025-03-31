System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, size, screen, view, v4, EDITOR, JSB, Adapter, _crd, ccclass, property, DeviceDirection, SAFE_SIZE, OUTSIDE_SIZE;

  _export("Adapter", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
      size = _cc.size;
      screen = _cc.screen;
      view = _cc.view;
      v4 = _cc.v4;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
      JSB = _ccEnv.JSB;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "adb5fOrnLNAVIA//CZoF/Pl", "Adapter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'UITransform', 'size', 'Size', 'screen', 'view', 'v4']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * @description 该适配方案参考 https://forum.cocos.org/t/cocos-creator/74001
       */

      /**
       * 屏幕分辨率下 的像素值
       */

      /**@description 设备方向 */
      DeviceDirection = /*#__PURE__*/function (DeviceDirection) {
        DeviceDirection[DeviceDirection["Unknown"] = 0] = "Unknown";
        DeviceDirection[DeviceDirection["LandscapeLeft"] = 1] = "LandscapeLeft";
        DeviceDirection[DeviceDirection["LandscapeRight"] = 2] = "LandscapeRight";
        DeviceDirection[DeviceDirection["Portrait"] = 3] = "Portrait";
        DeviceDirection[DeviceDirection["UpsideDown"] = 4] = "UpsideDown";
        return DeviceDirection;
      }(DeviceDirection || {});

      SAFE_SIZE = size(0, 0);
      OUTSIDE_SIZE = size(0, 0);

      _export("Adapter", Adapter = class Adapter extends Component {
        constructor(...args) {
          super(...args);
          this._func = null;

          /**@description 适配完成回调 */
          this.onAdapterComplete = null;
          this._isFullScreenAdaption = true;
        }

        set width(value) {
          let trans = this.getComponent(UITransform);

          if (!trans) {
            return;
          }

          trans.width = value;
        }

        get width() {
          let trans = this.getComponent(UITransform);

          if (!trans) {
            return 0;
          }

          return trans.width;
        }

        set height(value) {
          let trans = this.getComponent(UITransform);

          if (!trans) {
            return;
          }

          trans.height = value;
        }

        get height() {
          let trans = this.getComponent(UITransform);

          if (!trans) {
            return 0;
          }

          return trans.height;
        }

        static get windowSize() {
          if (EDITOR) {
            return view.getDesignResolutionSize();
          }

          return screen.windowSize;
        }

        static get visibleSize() {
          return view.getVisibleSize();
        }

        doOnAdapterComplete() {
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

        addEvents() {
          if (this._func) {
            return;
          }

          this._func = this.onChangeSize.bind(this);
          window.addEventListener("resize", this._func);
          window.addEventListener("orientationchange", this._func);
        }

        removeEvents() {
          if (this._func) {
            window.removeEventListener("resize", this._func);
            window.removeEventListener("orientationchange", this._func);
          }

          this._func = null;
        }
        /**
         * @description 视图发生大小变化
         */


        onChangeSize() {
          this.doOnAdapterComplete();
        }
        /**@description 获取当前设备方向 */


        get direction() {
          let str = "未知";
          let result = DeviceDirection.Unknown;
          let orientation = window.orientation;

          if (JSB) {
            orientation = jsb.device.getDeviceOrientation();
          }

          if (orientation != undefined || orientation != null) {
            if (orientation == 90) {
              str = `横屏向左`;
              result = DeviceDirection.LandscapeLeft;
            } else if (orientation == -90) {
              str = `横屏向右`;
              result = DeviceDirection.LandscapeRight;
            } else if (orientation == 0) {
              str = "竖屏向上";
              result = DeviceDirection.Portrait;
            } else if (orientation == 180) {
              str = "竖屏向下";
              result = DeviceDirection.UpsideDown;
            }
          } // console.log(`当前设备方向:${str}`)


          return result;
        }

        static get safeAreaEdge() {
          if (JSB) {
            return jsb.device.getSafeAreaEdge();
          } else {
            return v4(0, 0, 0, 0);
          }
        }

        static set safeArea(value) {
          this._safeArea = value;
        }

        static screenPxToDesignPx(screenPx) {
          return screenPx / this.safeArea.designPxToScreenPxRatio;
        }

        static designPxToScreenPx(designPx) {
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
            let screenHeight = Adapter.windowSize.height; // 「设计分辨率」像素值转换到 「屏幕分辨率」 下的像素比

            let designWidth = Adapter.visibleSize.width;
            let designHeight = Adapter.visibleSize.height;
            let designPxToScreenPxRatio = Math.min(screenWidth / designWidth, screenHeight / designHeight);
            OUTSIDE_SIZE.width = 0;
            OUTSIDE_SIZE.height = 0;
            SAFE_SIZE.width = screenWidth - OUTSIDE_SIZE.width;
            SAFE_SIZE.height = screenHeight - OUTSIDE_SIZE.height;

            if (JSB) {
              OUTSIDE_SIZE.width = this.safeAreaEdge.y + this.safeAreaEdge.w;
              OUTSIDE_SIZE.height = this.safeAreaEdge.x + this.safeAreaEdge.z;
              SAFE_SIZE.width = screenWidth - OUTSIDE_SIZE.width;
              SAFE_SIZE.height = screenHeight - OUTSIDE_SIZE.height;
              OUTSIDE_SIZE.width = OUTSIDE_SIZE.width / 2;
              OUTSIDE_SIZE.height = OUTSIDE_SIZE.height / 2;
            }

            this._safeArea = {
              width: screenWidth,
              height: screenHeight,
              outside: OUTSIDE_SIZE,
              safe: SAFE_SIZE,
              designPxToScreenPxRatio: designPxToScreenPxRatio
            };
          }

          return this._safeArea;
        }

        /** 是否全屏*/
        get isFullScreenAdaption() {
          return this._isFullScreenAdaption;
        }

        set isFullScreenAdaption(value) {
          this._isFullScreenAdaption = value;
        }

      });

      Adapter.direction = DeviceDirection;
      Adapter._safeArea = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=11d93bec3da8573e835080c0d794bd35fd04f071.js.map