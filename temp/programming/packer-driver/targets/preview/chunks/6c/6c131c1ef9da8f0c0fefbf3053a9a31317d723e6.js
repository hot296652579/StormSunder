System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, Tween, UIOpacity, UITransform, Vec3, UIController, UIMgr, UITipsOptions, UITips, _crd;

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "../UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayout_UITips(extras) {
    _reporterNs.report("Layout_UITips", "./Layout_UITips", _context.meta, extras);
  }

  _export({
    UITipsOptions: void 0,
    UITips: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      Tween = _cc.Tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      UIController = _unresolved_2.UIController;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32922qbFjJKS7LguSMclN5P", "UITips", undefined);

      __checkObsolete__(['tween', 'Tween', 'UIOpacity', 'UITransform', 'Vec3']);

      _export("UITipsOptions", UITipsOptions = class UITipsOptions {
        constructor() {
          this._content = void 0;
        }

        setTitle(content) {
          this._content = content;
          return this;
        }

      });

      _export("UITips", UITips = class UITips extends (_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController) {
        constructor() {
          super(...arguments);
          this._curOpacity = null;
          this._curPositon = new Vec3();
          this._transform = null;
          this._options = void 0;
          this._time = 1;
        }

        static show(content) {
          var opts = new UITipsOptions();
          opts._content = content;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).inst.showUI(UITips, alert => {
            alert.init(opts);
          });
          return opts;
        }

        init(opts) {
          this._options = opts;
          var options = this._options;
          var layout = this.layout;

          if (options.hasOwnProperty('_content')) {
            layout.content.string = options._content || '';
          }
        }

        onCreated() {
          this._curOpacity = this.node.getComponent(UIOpacity);
          this._transform = this.node.getComponent(UITransform);
          this.fadeIn();
          this.runTimeOut(this._time);
        }

        runTimeOut(time) {
          var self = this;
          tween(this.node).delay(time).call(() => {
            self.fadeOut();
          }).start();
        }

        fadeIn() {
          if (!this._curOpacity) return;
          Tween.stopAllByTarget(this._curOpacity);
          this._curOpacity.opacity = 0;
          tween(this._curOpacity).to(0.5, {
            opacity: 255
          }).start(); // this.moveTo(0, this.node.position.y + this._transform.height * 2);

          this.node.setPosition(0, this.node.position.y + this._transform.height * 4);
        }

        fadeOut() {
          if (!this._curOpacity) return;
          Tween.stopAllByTarget(this._curOpacity);
          tween(this._curOpacity).to(2, {
            opacity: 0
          }).call(() => {
            var _this$node;

            this.stopAllActions();
            (_this$node = this.node) == null || _this$node.removeFromParent();
          }).start(); // this.moveTo(0, this.node.position.y + this._transform.height * 2);
        }

        moveTo(x, y) {
          Tween.stopAllByTarget(this._curPositon);

          this._curPositon.set(this.node.position);

          tween(this._curPositon).to(0.5, {
            x: x,
            y: y
          }, {
            onUpdate: target => {
              var _this$node2;

              (_this$node2 = this.node) == null || _this$node2.setPosition(target);
            },
            easing: "expoOut"
          }).start();
        }

        stopAllActions() {
          Tween.stopAllByTarget(this.node);
          Tween.stopAllByTarget(this._curPositon);

          if (this._curOpacity) {
            Tween.stopAllByTarget(this._curOpacity);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c131c1ef9da8f0c0fefbf3053a9a31317d723e6.js.map