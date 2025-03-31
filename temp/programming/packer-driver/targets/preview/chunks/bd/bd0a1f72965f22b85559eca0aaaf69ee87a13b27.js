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
        tooltip: "\u7F29\u653E\u7C7B\u578B:\n        -FILL: \u7F29\u653E\u5230\u586B\u6EE1\u7236\u8282\u70B9\uFF08\u5982\u679C\u7236\u8282\u70B9\u6709\u88C1\u526A\uFF0C\u56FE\u50CF\u53EF\u80FD\u4F1A\u88AB\u88C1\u526A\uFF0C\u8282\u70B9\u53EF\u80FD\u4F1A\u8D85\u51FA\u7236\u8282\u70B9\uFF09\n        -SUIT: \u7F29\u653E\u5230\u521A\u597D\u5728\u7236\u8282\u70B9\u5185\u90E8\u6700\u5927\u5316\u663E\u793A\uFF08\u56FE\u50CF\u4F1A\u5B8C\u6574\u663E\u793A\uFF0C\u4F46\u7236\u8282\u70B9\u4E0A\u4E0B\u6216\u8005\u5DE6\u53F3\u53EF\u80FD\u4F1A\u7559\u7A7A\uFF09"
      }), _dec5 = property({
        type: Enum(SpriteAlignType),
        tooltip: "\u9F50\u65B9\u5F0F\u7C7B\u578B:\n        -LEFT: \u7F29\u653E\u540E\u9760\u5DE6\u5BF9\u9F50\n        -TOP: \u7F29\u653E\u540E\u9760\u4E0A\u5BF9\u9F50\n        -RIGHT: \u7F29\u653E\u540E\u9760\u53F3\u5BF9\u9F50\n        -BOTTOM: \u7F29\u653E\u540E\u9760\u4E0B\u5BF9\u9F50\n        -CENTER: \u7F29\u653E\u540E\u5C45\u4E2D\u5BF9\u9F50"
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class AdapterSprite extends (_crd && Adapter === void 0 ? (_reportPossibleCrUseOfAdapter({
        error: Error()
      }), Adapter) : Adapter) {
        constructor() {
          super(...arguments);
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

          var widget = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.getComponent(Widget);

          if (widget) {
            widget.updateAlignment();
          }

          this.width = this._sprite.spriteFrame.rect.width;
          this.height = this._sprite.spriteFrame.rect.height;
          var trans = this.parentTrans;

          if (this.width / this.height > trans.width / trans.height) {
            // 设计分辨率宽高比大于显示分辨率
            if (scaleType == SpriteScaleType.SUIT) {
              var scale = trans.width / this.width;
              this.node.scale = v3(scale, scale);
            } else if (scaleType == SpriteScaleType.FILL) {
              var _scale = trans.height / this.height;

              this.node.scale = v3(_scale, _scale);
            }
          } else {
            // 设计分辨率宽高比小于显示分辨率
            if (scaleType == SpriteScaleType.SUIT) {
              var _scale2 = trans.height / this.height;

              this.node.scale = v3(_scale2, _scale2);
            } else if (scaleType == SpriteScaleType.FILL) {
              var _scale3 = trans.width / this.width;

              this.node.scale = v3(_scale3, _scale3);
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