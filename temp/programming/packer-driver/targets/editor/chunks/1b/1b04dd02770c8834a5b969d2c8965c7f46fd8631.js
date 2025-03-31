System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, v3, _decorator, EDITOR, Adapter, _dec, _dec2, _dec3, _class, _crd, ccclass, property, executeInEditMode, menu, AdapterView;

  function _reportPossibleCrUseOfAdapter(extras) {
    _reporterNs.report("Adapter", "./Adapter", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      Adapter = _unresolved_2.Adapter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bcfe4/4KSpNzoVcKH/PLlmr", "AdapterView", undefined);
      /**
       */


      __checkObsolete__(['v3', '_decorator', 'UITransform']);

      ({
        ccclass,
        property,
        executeInEditMode,
        menu
      } = _decorator);
      /**
       * 全屏适配
       * 用法：
       *
       * 1. 将本组件挂载在节点上即可（注意该节点不能挂在 Widget 组件）
       * 2. 3.x版本引擎旋转时不会触屏旋转事件，所以目前只能设置一个方向才是正常的
       *
       * 适配原理：
       *
       * 1. 将节点的宽高设置为安全区域的宽高
       */

      _export("default", AdapterView = (_dec = ccclass("AdapterView"), _dec2 = executeInEditMode(true), _dec3 = menu("Quick适配组件/AdapterView"), _dec(_class = _dec2(_class = _dec3(_class = class AdapterView extends (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
        error: Error()
      }), Adapter) : Adapter) {
        onChangeSize() {
          (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
            error: Error()
          }), Adapter) : Adapter).safeArea = null;

          if (this.node) {
            if (this.isFullScreenAdaption) {
              // 将屏幕尺寸下的大小，转换为设计分辨率下的大小，重新给节点设置大小
              this.width = (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).safeArea.width / (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).safeArea.designPxToScreenPxRatio;
              this.height = (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).safeArea.height / (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).safeArea.designPxToScreenPxRatio;
            } else {
              // 将屏幕尺寸下的安全区域大小，转换为设计分辨率下的大小，重新给节点设置大小
              this.width = (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).safeArea.safe.width / (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).safeArea.designPxToScreenPxRatio;
              this.height = (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).safeArea.safe.height / (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).safeArea.designPxToScreenPxRatio;

              switch (this.direction) {
                case (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                  error: Error()
                }), Adapter) : Adapter).direction.LandscapeLeft:
                  this.node.setPosition(v3((_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                    error: Error()
                  }), Adapter) : Adapter).safeArea.outside.width / (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                    error: Error()
                  }), Adapter) : Adapter).safeArea.designPxToScreenPxRatio, 0));
                  break;

                case (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                  error: Error()
                }), Adapter) : Adapter).direction.LandscapeRight:
                  this.node.setPosition(v3(-(_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                    error: Error()
                  }), Adapter) : Adapter).safeArea.outside.width / (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                    error: Error()
                  }), Adapter) : Adapter).safeArea.designPxToScreenPxRatio, 0));
                  break;

                case (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                  error: Error()
                }), Adapter) : Adapter).direction.Portrait:
                  this.node.setPosition(v3(0, -(_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                    error: Error()
                  }), Adapter) : Adapter).safeArea.outside.height / (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                    error: Error()
                  }), Adapter) : Adapter).safeArea.designPxToScreenPxRatio));
                  break;

                case (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                  error: Error()
                }), Adapter) : Adapter).direction.UpsideDown:
                  this.node.setPosition(v3(0, (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                    error: Error()
                  }), Adapter) : Adapter).safeArea.outside.height / (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                    error: Error()
                  }), Adapter) : Adapter).safeArea.designPxToScreenPxRatio));
                  break;

                default:
                  !EDITOR && console.log('获取不到设备方向，直接居中处理');
                  this.node.setPosition(v3(0, 0));
                  break;
              }
            }

            this.doOnAdapterComplete();
          }
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b04dd02770c8834a5b969d2c8965c7f46fd8631.js.map