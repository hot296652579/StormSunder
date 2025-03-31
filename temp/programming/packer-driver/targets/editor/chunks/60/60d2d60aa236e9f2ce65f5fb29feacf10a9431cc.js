System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, JsonAsset, resLoader, JsonUtil, _crd, path, data;

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../ResLoader", _context.meta, extras);
  }

  _export("JsonUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      JsonAsset = _cc.JsonAsset;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98ab3pLi+tN4LdGVXa7lf1E", "JsonUtil", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-08-18 17:00:59
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-22 15:48:02
       */


      __checkObsolete__(['JsonAsset']);

      /** 资源路径 */
      path = "config/";
      /** 数据缓存 */

      data = new Map();
      /** JSON数据表工具 */

      _export("JsonUtil", JsonUtil = class JsonUtil {
        /**
         * 通知资源名从缓存中获取一个Json数据表
         * @param name  资源名
         */
        static get(name) {
          if (data.has(name)) return data.get(name);
        }
        /**
         * 通知资源名加载Json数据表
         * @param name      资源名
         * @param callback  资源加载完成回调
         */


        static load(name, callback) {
          if (data.has(name)) callback(data.get(name));else {
            const url = path + name;
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).load(url, JsonAsset, (err, content) => {
              if (err) {
                console.warn(err.message);
                callback(null);
              } else {
                data.set(name, content.json);
                (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                  error: Error()
                }), resLoader) : resLoader).release(url);
                callback(content.json);
              }
            });
          }
        }
        /**
         * 异步加载Json数据表
         * @param name 资源名
         */


        static loadAsync(name) {
          return new Promise((resolve, reject) => {
            if (data.has(name)) {
              resolve(data.get(name));
            } else {
              const url = path + name;
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).load(url, JsonAsset, (err, content) => {
                if (err) {
                  console.warn(err.message);
                  resolve(null);
                } else {
                  data.set(name, content.json);
                  (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                    error: Error()
                  }), resLoader) : resLoader).release(url);
                  resolve(content.json);
                }
              });
            }
          });
        }
        /** 加载所有配置表数据到缓存中 */


        static loadDirAsync() {
          return new Promise((resolve, reject) => {
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadDir(path, (err, assets) => {
              if (err) {
                console.warn(err.message);
                resolve(false);
              } else {
                assets.forEach(asset => {
                  data.set(asset.name, asset.json);
                });
                (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                  error: Error()
                }), resLoader) : resLoader).releaseDir(path);
                resolve(true);
              }
            });
          });
        }
        /**
         * 通过指定资源名释放资源内存
         * @param name 资源名
         */


        static release(name) {
          data.delete(name);
        }
        /** 清理所有数据 */


        static clear() {
          data.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60d2d60aa236e9f2ce65f5fb29feacf10a9431cc.js.map