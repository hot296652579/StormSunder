System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, ResItem, ResourceMgr, _crd;

  _export("ResourceMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b666cLPxptFbq3Cc9VNNPIW", "ResourceMgr", undefined);

      __checkObsolete__(['loader', 'Constructor', 'resources', 'Asset']);

      ResItem = class ResItem {
        constructor() {
          this.url = void 0;
          this.isLoading = false;
          this.callbackArr = [];
        }

      };

      _export("ResourceMgr", ResourceMgr = class ResourceMgr {
        constructor() {
          this.loadingQueue = [];
        }

        static get inst() {
          if (!this._inst) {
            this._inst = new ResourceMgr();
          }

          return this._inst;
        }

        loadRes(url, type, callback) {
          let cache = resources.get(url, type);

          if (cache) {
            if (callback) {
              setTimeout(() => {
                callback(null, cache);
              }, 10);
            }

            return;
          }

          let loadingItem = this.loadingQueue[url];

          if (!loadingItem) {
            loadingItem = this.loadingQueue[url] = new ResItem();
            loadingItem.url = url;
          }

          loadingItem.callbackArr.push(callback);

          if (!loadingItem.isLoading) {
            loadingItem.isLoading = true;
            resources.load(url, type, (err, asset) => {
              delete this.loadingQueue[url];

              for (let k in loadingItem.callbackArr) {
                let cb = loadingItem.callbackArr[k];

                if (cb) {
                  cb(err, asset);
                }
              }
            });
          }
        }

      });

      ResourceMgr._inst = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b081e9ef17a60a4e29900e3663cc29b6e7aef90.js.map