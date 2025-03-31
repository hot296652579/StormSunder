System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, InputMgr, _crd;

  _export("InputMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8fac4mBG8lPo5xB3wRNGThs", "InputMgr", undefined);

      _export("InputMgr", InputMgr = class InputMgr {
        constructor() {
          this.STATE_NORMAL = 1;
          this.STATE_KEEP = 2;
          this._flags = {};
          this._flagsMeta = {};
        }

        static get inst() {
          if (!this._inst) {
            this._inst = new InputMgr();
          }

          return this._inst;
        }

        setFlag(flag, keep, meta) {
          this._flags[flag] = keep ? this.STATE_KEEP : this.STATE_NORMAL;

          if (meta != null) {
            this._flagsMeta[flag] = meta;
          }
        }

        removeFlag(flag) {
          delete this._flags[flag];
        }

        hasFlag(flag) {
          return !!this._flags[flag];
        }

        getMetaByFlag(flag) {
          return this._flagsMeta[flag];
        }

        update() {
          for (var k in this._flags) {
            if (this._flags[k] != this.STATE_KEEP) {
              this._flags[k] = 0;
            }
          }
        }

      });

      InputMgr._inst = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1877af1b6df09aa05c5b99e3e841a8a97a6a9847.js.map