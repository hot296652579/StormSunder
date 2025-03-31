System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIController, UIMgr, UIWaiting, _crd, loadingTxtArr, _inst;

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "../UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayout_UIWaiting(extras) {
    _reporterNs.report("Layout_UIWaiting", "./Layout_UIWaiting", _context.meta, extras);
  }

  _export("UIWaiting", void 0);

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

      _cclegacy._RF.push({}, "0dda6mQNCdCo5GQ959qF/Db", "UIWaiting", undefined);

      loadingTxtArr = ['Loading.', 'Loading..', 'Loading...'];
      _inst = null;

      _export("UIWaiting", UIWaiting = class UIWaiting extends (_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController) {
        onCreated() {}

        static show() {
          if (_inst) {
            return _inst;
          }

          _inst = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).inst.showUI(UIWaiting);
          return _inst;
        }

        static hide() {
          if (_inst) {
            _inst.hide();

            _inst = null;
          }
        }

        onUpdate() {
          let layout = this.layout;

          if (layout.loadingIcon) {
            let euler = layout.loadingIcon.eulerAngles;
            let rot = Date.now() / 1000 * 90;
            layout.loadingIcon.setRotationFromEuler(euler.x, euler.y, rot);
          }

          if (layout.loadingTxt) {
            let idx = Math.floor(Date.now() / 500) % 3;
            layout.loadingTxt.string = loadingTxtArr[idx];
          }
        }

        onDispose() {
          _inst = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7426ca87b706a31243016c2ed682cae182ab6371.js.map