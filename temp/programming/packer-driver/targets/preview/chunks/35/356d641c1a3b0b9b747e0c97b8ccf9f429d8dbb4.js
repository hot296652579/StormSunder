System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIController, UIMgr, UIAlertOptions, UIAlert, _crd;

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "../UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayout_UIAlert(extras) {
    _reporterNs.report("Layout_UIAlert", "./Layout_UIAlert", _context.meta, extras);
  }

  _export({
    UIAlertOptions: void 0,
    UIAlert: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UIController = _unresolved_2.UIController;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e91f8G1GtMQ4+Lvts9iEeD", "UIAlert", undefined);

      _export("UIAlertOptions", UIAlertOptions = class UIAlertOptions {
        constructor() {
          this._title = void 0;
          this._type = void 0;
          this._content = void 0;
          this._showCancel = void 0;
          this._cbClick = void 0;
          this._cbClickThisArg = void 0;
        }

        setTitle(title) {
          this._title = title;
          return this;
        }

        setType(type) {
          this._type = type;
          return this;
        }

        onClick(cb, thisArg) {
          this._cbClick = cb;
          this._cbClickThisArg = thisArg;
          return this;
        }

      });

      _export("UIAlert", UIAlert = class UIAlert extends (_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController) {
        constructor() {
          super(...arguments);
          this._options = void 0;
        }

        static show(content, type, showCancel) {
          var opts = new UIAlertOptions();
          opts._type = type;
          opts._content = content;
          opts._showCancel = showCancel;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).inst.showUI(UIAlert, alert => {
            alert.init(opts);
          });
          return opts;
        }

        init(opts) {
          this._options = opts;
          var options = this._options;
          var layout = this.layout;

          if (options.hasOwnProperty('title')) {
            layout.title.string = options._title || '';
          }

          layout.content.string = options._content || '';
          layout.btnCancel.node.active = options._showCancel;

          if (!options._showCancel) {
            var pos = layout.btnOK.node.position;
            layout.btnOK.node.setPosition(0, pos.y, pos.z);
          }

          this.showAlerType(options._type);
        }

        onCreated() {
          var layout = this.layout;
          this.onButtonEvent(layout.btnOK, () => {
            this.hide();
            var options = this._options;

            if (options._cbClick) {
              options._cbClick.call(options._cbClickThisArg, true);
            }
          });
          this.onButtonEvent(layout.btnCancel, () => {
            this.hide();
            var options = this._options;

            if (options._cbClick) {
              options._cbClick.call(options._cbClickThisArg, false);
            }
          });
        }

        showAlerType(type) {
          var layout = this.layout;
          layout.fillUp.active = false;
          layout.remove.active = false;
          layout.refresh.active = false;

          switch (type) {
            case "FillUp":
              layout.fillUp.active = true;
              break;

            case "Remove":
              layout.remove.active = true;
              break;

            case "Refresh":
              layout.refresh.active = true;
              break;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=356d641c1a3b0b9b747e0c97b8ccf9f429d8dbb4.js.map