System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, view, screen, size, ResolutionPolicy, _dec, _class, _crd, ccclass, property, CHECK_INTERVAL, ResolutionAutoFit;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      view = _cc.view;
      screen = _cc.screen;
      size = _cc.size;
      ResolutionPolicy = _cc.ResolutionPolicy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5d8aIjX9NO3ox3KMWTDbsA", "ResolutionAutoFit", undefined);

      __checkObsolete__(['_decorator', 'Component', 'view', 'screen', 'Size', 'size', 'ResolutionPolicy']);

      ({
        ccclass,
        property
      } = _decorator);
      CHECK_INTERVAL = 0.1;

      _export("ResolutionAutoFit", ResolutionAutoFit = (_dec = ccclass('tgxResolutionAutoFit'), _dec(_class = class ResolutionAutoFit extends Component {
        constructor(...args) {
          super(...args);
          this._oldSize = size();
          this.lastCheckTime = 0;
        }

        start() {
          this.adjustResolutionPolicy();
        }

        update(deltaTime) {
          this.lastCheckTime += deltaTime;

          if (this.lastCheckTime < CHECK_INTERVAL) {
            return;
          }

          this.lastCheckTime = 0;
          this.adjustResolutionPolicy();
        }

        adjustResolutionPolicy() {
          let winSize = screen.windowSize;

          if (!this._oldSize.equals(winSize)) {
            let ratio = winSize.width / winSize.height;
            let drs = view.getDesignResolutionSize();
            let drsRatio = drs.width / drs.height;

            if (ratio > drsRatio) {
              //wider than desgin. fixed height
              view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
            } else {
              //
              view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
            }

            this._oldSize.set(winSize);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=63d9184ce0eb2dc89c4f1dcb608a9f46f6ceceb5.js.map