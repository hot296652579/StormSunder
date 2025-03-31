System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Widget, _decorator, EDITOR, Adapter, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, executeInEditMode, menu, Flags, AdapterSafeArea;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      Widget = _cc.Widget;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      Adapter = _unresolved_2.Adapter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dca72U6jlRMRLAiO1t+r7Zj", "AdapterSafeArea", undefined);

      __checkObsolete__(['Widget', '_decorator']);

      ({
        ccclass,
        property,
        executeInEditMode,
        menu
      } = _decorator);

      Flags = /*#__PURE__*/function (Flags) {
        Flags[Flags["None"] = 0] = "None";
        Flags[Flags["TOP"] = 1] = "TOP";
        Flags[Flags["BOTTOM"] = 2] = "BOTTOM";
        Flags[Flags["LEFT"] = 4] = "LEFT";
        Flags[Flags["RIGHT"] = 8] = "RIGHT";
        return Flags;
      }(Flags || {});
      /**
       * @classdesc  安全区域适配Widget , App.isFullScreenAdaption = true 时有效
       * @description
       *
       * 用法：
       *
       * 1. 将本组件挂载在节点上即可（注意：该节点上必须挂在 Widget 组件）
       *
       * 适配原理：
       *
       * 1. 根据安全区域范围，修改widget组件属性
       * 自动添加刘海宽度，以避免显示到安全区域之外
       */


      _export("default", AdapterSafeArea = (_dec = ccclass("AdapterSafeArea"), _dec2 = menu("Quick适配组件/AdapterSafeArea"), _dec3 = property({
        tooltip: EDITOR ? "是否对齐上边" : ""
      }), _dec4 = property({
        tooltip: EDITOR ? "是否对齐下边" : ""
      }), _dec5 = property({
        tooltip: EDITOR ? "是否对齐左边" : ""
      }), _dec6 = property({
        tooltip: EDITOR ? "是否对齐右边" : ""
      }), _dec7 = property({
        visible: function () {
          return this.isAlignTop;
        },
        tooltip: EDITOR ? "本节点顶边和父节点顶边的距离，可填写负值，只有在 isAlignTop 开启时才有作用" : ""
      }), _dec8 = property({
        visible: function () {
          return this.isAlignBottom;
        },
        tooltip: EDITOR ? "本节点顶边和父节点底边的距离，可填写负值，只有在 isAlignBottom 开启时才有作用" : ""
      }), _dec9 = property({
        visible: function () {
          return this.isAlignLeft;
        },
        tooltip: EDITOR ? "本节点顶边和父节点左边的距离，可填写负值，只有在 isAlignLeft 开启时才有作用" : ""
      }), _dec10 = property({
        visible: function () {
          return this.isAlignRight;
        },
        tooltip: EDITOR ? "本节点顶边和父节点右边的距离，可填写负值，只有在 isAlignRight 开启时才有作用" : ""
      }), _dec(_class = executeInEditMode(_class = _dec2(_class = (_class2 = class AdapterSafeArea extends (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
        error: Error()
      }), Adapter) : Adapter) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_flags", _descriptor, this);

          _initializerDefineProperty(this, "_top", _descriptor2, this);

          _initializerDefineProperty(this, "_bottom", _descriptor3, this);

          _initializerDefineProperty(this, "_left", _descriptor4, this);

          _initializerDefineProperty(this, "_right", _descriptor5, this);

          this._isDirty = false;
        }

        setFlag(flag, value) {
          const current = (this._flags & flag) > 0;

          if (value == current) {
            return;
          }

          if (value) {
            this._flags |= flag;
          } else {
            this._flags &= ~flag;
          }

          this._isDirty = true;
        }

        get isAlignTop() {
          return (this._flags & Flags.TOP) > 0;
        }

        set isAlignTop(v) {
          this.setFlag(Flags.TOP, v);
        }

        get isAlignBottom() {
          return (this._flags & Flags.BOTTOM) > 0;
        }

        set isAlignBottom(v) {
          this.setFlag(Flags.BOTTOM, v);
        }

        get isAlignLeft() {
          return (this._flags & Flags.LEFT) > 0;
        }

        set isAlignLeft(v) {
          this.setFlag(Flags.LEFT, v);
        }

        get isAlignRight() {
          return (this._flags & Flags.RIGHT) > 0;
        }

        set isAlignRight(v) {
          this.setFlag(Flags.RIGHT, v);
        }

        get top() {
          return this._top;
        }

        set top(v) {
          if (this._top == v) {
            return;
          }

          this._top = v;
          this._isDirty = true;
        }

        get bottom() {
          return this._bottom;
        }

        set bottom(v) {
          if (this._bottom == v) {
            return;
          }

          this._bottom = v;
          this._isDirty = true;
        }

        get left() {
          return this._left;
        }

        set left(v) {
          if (this._left == v) {
            return;
          }

          this._left = v;
          this._isDirty = true;
        }

        get right() {
          return this._right;
        }

        set right(v) {
          if (this._right == v) {
            return;
          }

          this._right = v;
          this._isDirty = true;
        }

        get widget() {
          let comp = this.getComponent(Widget);

          if (comp) {
            return comp;
          }

          return this.addComponent(Widget);
        }

        resetInEditor() {
          this.doLayout(true);
        }

        doLayout(isForce = false) {
          if (this._isDirty || isForce) {
            let widget = this.widget;

            if (EDITOR) {
              widget.left = this.left;
              widget.right = this.right;
              widget.top = this.top;
              widget.bottom = this.bottom;
              return;
            }

            if (!this.isFullScreenAdaption) {
              return;
            }

            if (!widget || !widget.enabled) {
              return;
            } // 屏幕向上时，加上安全区域高度


            if (widget.isAlignTop && this.isAlignTop) {
              widget.isAbsoluteTop = true;

              if (this.direction == (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).direction.Portrait) {
                widget.top = this.top + (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                  error: Error()
                }), Adapter) : Adapter).safeArea.outside.height;
              } else {
                widget.top = this.top;
              }
            } // 屏幕向下时，加上安全区域高度


            if (widget.isAlignBottom && this.isAlignBottom) {
              widget.isAbsoluteBottom = true;

              if (this.direction == (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).direction.UpsideDown) {
                widget.bottom = this.bottom + (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                  error: Error()
                }), Adapter) : Adapter).safeArea.outside.height;
              } else {
                widget.bottom = this.bottom;
              }
            } // 屏幕向左时，加上安全区域宽度


            if (widget.isAlignLeft && this.isAlignLeft) {
              widget.isAbsoluteLeft = true;

              if (this.direction == (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).direction.LandscapeLeft) {
                widget.left = this.left + (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                  error: Error()
                }), Adapter) : Adapter).safeArea.outside.width;
              } else {
                widget.left = this.left;
              }
            } // 屏幕向右时，加上安全区域宽度


            if (widget.isAlignRight && this.isAlignRight) {
              widget.isAbsoluteRight = true;

              if (this.direction == (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                error: Error()
              }), Adapter) : Adapter).direction.LandscapeRight) {
                widget.right = this.right + (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
                  error: Error()
                }), Adapter) : Adapter).safeArea.outside.width;
              } else {
                widget.right = this.right;
              }
            }

            widget.updateAlignment();
            this._isDirty = false;
            this.doOnAdapterComplete();
          }
        }

        onChangeSize() {
          this.doLayout(true);
        }

        update(dt) {
          super.update && super.update(dt);
          this.doLayout();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_flags", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Flags.None;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "isAlignTop", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "isAlignTop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAlignBottom", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "isAlignBottom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAlignLeft", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "isAlignLeft"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "isAlignRight", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "isAlignRight"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_top", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "top", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "top"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_bottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "bottom", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "bottom"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_left", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "left", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "left"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_right", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "right", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "right"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b766a1bd58021011d42e52356d12f1d95e418f49.js.map