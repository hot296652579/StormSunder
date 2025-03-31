System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enum, Sprite, UITransform, v3, Widget, _decorator, EDITOR, Adapter, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _crd, ccclass, property, executeInEditMode, menu, SpriteScaleType, SpriteAlignType, AdapterSprite;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

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
      Enum = _cc.Enum;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      Widget = _cc.Widget;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      Adapter = _unresolved_2.Adapter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df9c1XeTcVFJp2J7fsaRMc+", "AdapterSprite", undefined);

      __checkObsolete__(['Enum', 'Sprite', 'UITransform', 'v3', 'Widget', '_decorator']);

      ({
        ccclass,
        property,
        executeInEditMode,
        menu
      } = _decorator);
      /**
       * 缩放方式
       */

      _export("SpriteScaleType", SpriteScaleType = /*#__PURE__*/function (SpriteScaleType) {
        SpriteScaleType[SpriteScaleType["FILL"] = 0] = "FILL";
        SpriteScaleType[SpriteScaleType["SUIT"] = 1] = "SUIT";
        return SpriteScaleType;
      }({}));
      /**
       * 对齐方式
       */


      _export("SpriteAlignType", SpriteAlignType = /*#__PURE__*/function (SpriteAlignType) {
        SpriteAlignType[SpriteAlignType["LEFT"] = 0] = "LEFT";
        SpriteAlignType[SpriteAlignType["TOP"] = 1] = "TOP";
        SpriteAlignType[SpriteAlignType["RIGHT"] = 2] = "RIGHT";
        SpriteAlignType[SpriteAlignType["BOTTOM"] = 3] = "BOTTOM";
        SpriteAlignType[SpriteAlignType["CENTER"] = 4] = "CENTER";
        return SpriteAlignType;
      }({}));
      /**
       * Sprite 适配组件
       *
       * @author caizhitao
       * @created 2020-12-27 21:22:43
       */


      _export("default", AdapterSprite = (_dec = ccclass("AdapterSprite"), _dec2 = executeInEditMode(true), _dec3 = menu("Quick适配组件/AdapterSprite"), _dec4 = property({
        type: Enum(SpriteScaleType),
        tooltip: `缩放类型:
        -FILL: 缩放到填满父节点（如果父节点有裁剪，图像可能会被裁剪，节点可能会超出父节点）
        -SUIT: 缩放到刚好在父节点内部最大化显示（图像会完整显示，但父节点上下或者左右可能会留空）`
      }), _dec5 = property({
        type: Enum(SpriteAlignType),
        tooltip: `齐方式类型:
        -LEFT: 缩放后靠左对齐
        -TOP: 缩放后靠上对齐
        -RIGHT: 缩放后靠右对齐
        -BOTTOM: 缩放后靠下对齐
        -CENTER: 缩放后居中对齐`
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class AdapterSprite extends (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
        error: Error()
      }), Adapter) : Adapter) {
        constructor(...args) {
          super(...args);
          this._scaleType = SpriteScaleType.SUIT;
          this._alignType = SpriteAlignType.CENTER;
          this._sprite = null;
        }

        get scaleType() {
          return this._scaleType;
        }

        set scaleType(value) {
          this._scaleType = value;

          if (EDITOR) {
            this.updateSprite(this._scaleType, this.alignType);
          }
        }

        get alignType() {
          return this._alignType;
        }

        set alignType(value) {
          this._alignType = value;

          if (EDITOR) {
            this.updateSprite(this._scaleType, this._alignType);
          }
        }

        onLoad() {
          this._sprite = this.node.getComponent(Sprite);
        }

        start() {
          this.updateSprite(this.scaleType, this.alignType);
        }

        onChangeSize() {
          this.updateSprite(this.scaleType, this.alignType);
        }

        updateSprite(scaleType, alignType) {
          var _this$node$parent;

          if (!this._sprite || !this._sprite.enabled || !this._sprite.spriteFrame) {
            return;
          }

          let widget = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.getComponent(Widget);

          if (widget) {
            widget.updateAlignment();
          }

          this.width = this._sprite.spriteFrame.rect.width;
          this.height = this._sprite.spriteFrame.rect.height;
          let trans = this.parentTrans;

          if (this.width / this.height > trans.width / trans.height) {
            // 设计分辨率宽高比大于显示分辨率
            if (scaleType == SpriteScaleType.SUIT) {
              let scale = trans.width / this.width;
              this.node.scale = v3(scale, scale);
            } else if (scaleType == SpriteScaleType.FILL) {
              let scale = trans.height / this.height;
              this.node.scale = v3(scale, scale);
            }
          } else {
            // 设计分辨率宽高比小于显示分辨率
            if (scaleType == SpriteScaleType.SUIT) {
              let scale = trans.height / this.height;
              this.node.scale = v3(scale, scale);
            } else if (scaleType == SpriteScaleType.FILL) {
              let scale = trans.width / this.width;
              this.node.scale = v3(scale, scale);
            }
          }

          switch (alignType) {
            case SpriteAlignType.CENTER:
              this.node.setPosition(v3());
              break;

            case SpriteAlignType.LEFT:
              this.node.setPosition(v3(-0.5 * (trans.width - this.width * this.node.scale.x), 0));
              break;

            case SpriteAlignType.RIGHT:
              this.node.setPosition(v3(0.5 * (trans.width - this.width * this.node.scale.x), 0));
              break;

            case SpriteAlignType.TOP:
              this.node.setPosition(v3(0, 0.5 * (trans.height - this.height * this.node.scale.x)));
              break;

            case SpriteAlignType.BOTTOM:
              this.node.setPosition(v3(0, -0.5 * (trans.height - this.height * this.node.scale.x)));
              break;
          }

          this.doOnAdapterComplete();
        }

        get parentTrans() {
          var _this$node$parent2;

          return (_this$node$parent2 = this.node.parent) == null ? void 0 : _this$node$parent2.getComponent(UITransform);
        }

      }, (_applyDecoratedDescriptor(_class2.prototype, "scaleType", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "scaleType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "alignType", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "alignType"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd0a1f72965f22b85559eca0aaaf69ee87a13b27.js.map