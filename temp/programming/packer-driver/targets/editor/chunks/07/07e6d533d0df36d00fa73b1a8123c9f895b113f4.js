System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, assetManager, error, js, resources, warn, ResLoader, _crd, resLoader;

  _export("ResLoader", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      assetManager = _cc.assetManager;
      error = _cc.error;
      js = _cc.js;
      resources = _cc.resources;
      warn = _cc.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95cd81I03BAMJVCIgholVoS", "ResLoader", undefined);

      __checkObsolete__(['Asset', 'AssetManager', '__private', 'assetManager', 'error', 'js', 'resources', 'warn']);

      /** 
       * 游戏资源管理
       * 1、加载默认resources文件夹中资源
       * 2、加载默认bundle远程资源
       * 3、主动传递bundle名时，优先加载传递bundle名资源包中的资源
       * 
       * @help    https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037901&doc_id=2873565
       */
      _export("ResLoader", ResLoader = class ResLoader {
        constructor() {
          //#region 资源配置数据

          /** 全局默认加载的资源包名 */
          this.defaultBundleName = "module_basic";
          this.gameBundleName = "module_storm_sunder";

          /** 是否使用远程 CDN 资源 */
          this.cdn = false;

          /** 资源包配置 */
          this.bundles = new Map();
        }

        /** 下载时的最大并发数 - 项目设置 -> 项目数据 -> 资源下载并发数，设置默认值；初始值为15 */
        get maxConcurrency() {
          return assetManager.downloader.maxConcurrency;
        }

        set maxConcurrency(value) {
          assetManager.downloader.maxConcurrency = value;
        }
        /** 下载时每帧可以启动的最大请求数 - 默认值为15 */


        get maxRequestsPerFrame() {
          return assetManager.downloader.maxRequestsPerFrame;
        }

        set maxRequestsPerFrame(value) {
          assetManager.downloader.maxRequestsPerFrame = value;
        }
        /** 失败重试次数 - 默认值为0 */


        get maxRetryCount() {
          return assetManager.downloader.maxRetryCount;
        }

        set maxRetryCount(value) {
          assetManager.downloader.maxRetryCount = value;
        }
        /** 重试的间隔时间，单位为毫秒 - 默认值为2000毫秒 */


        get retryInterval() {
          return assetManager.downloader.retryInterval;
        }

        set retryInterval(value) {
          assetManager.downloader.retryInterval = value;
        }

        //#endregion
        init(config) {
          this.cdn = config.enable;

          for (let bundleName in config.packages) {
            this.bundles.set(bundleName, config.packages[bundleName]);
          }
        } //#region 加载远程资源

        /**
         * 加载远程资源
         * @param url           资源地址
         * @param options       资源参数，例：{ ext: ".png" }
         * @param onComplete    加载完成回调
         * @example
        var opt: IRemoteOptions = { ext: ".png" };
        var onComplete = (err: Error | null, data: ImageAsset) => {
        const texture = new Texture2D();
        texture.image = data;
        
        const spriteFrame = new SpriteFrame();
        spriteFrame.texture = texture;
        
        var sprite = this.sprite.addComponent(Sprite);
        sprite.spriteFrame = spriteFrame;
        }
        oops.res.loadRemote<ImageAsset>(this.url, opt, onComplete);
         */


        loadRemote(url, ...args) {
          let options = null;
          let onComplete = null;

          if (args.length == 2) {
            options = args[0];
            onComplete = args[1];
          } else {
            onComplete = args[0];
          }

          assetManager.loadRemote(url, options, onComplete);
        } //#endregion
        //#region 资源包管理

        /**
         * 加载资源包
         * @param url       资源地址
         * @param v         资源MD5版本号
         * @example
        var serverUrl = "http://192.168.1.8:8080/";         // 服务器地址
        var md5 = "8e5c0";                                  // Cocos Creator 构建后的MD5字符
        await oops.res.loadBundle(serverUrl,md5);
         */


        loadBundle(url, v) {
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(url, {
              version: v
            }, (err, bundle) => {
              if (err) {
                return error(err);
              }

              resolve(bundle);
            });
          });
        }
        /**
         * 释放资源包与包中所有资源
         * @param bundleName 资源地址
         */


        removeBundle(bundleName) {
          let bundle = assetManager.bundles.get(bundleName);

          if (bundle) {
            bundle.releaseAll();
            assetManager.removeBundle(bundle);
          }
        } //#endregion
        //#region 预加载资源

        /**
         * 加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         */


        preload(bundleName, paths, type, onProgress, onComplete) {
          let args = null;

          if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
            args.bundle = this.defaultBundleName;
          }

          args.preload = true;
          this.loadByArgs(args);
        }
        /**
         * 异步加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         */


        preloadAsync(bundleName, paths, type) {
          return new Promise((resolve, reject) => {
            this.preload(bundleName, paths, type, (err, data) => {
              if (err) {
                warn(err.message);
              }

              resolve(data);
            });
          });
        }
        /**
         * 预加载文件夹中的资源
         * @param bundleName    远程包名
         * @param dir           文件夹名
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         */


        preloadDir(bundleName, dir, type, onProgress, onComplete) {
          let args = null;

          if (typeof dir === "string") {
            args = this.parseLoadResArgs(dir, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, dir, type, onProgress);
            args.bundle = this.defaultBundleName;
          }

          args.dir = args.paths;
          args.preload = true;
          this.loadByArgs(args);
        } //#endregion
        //#region 资源加载、获取、释放

        /**
         * 加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         * @example
        oops.res.load("spine_path", sp.SkeletonData, (err: Error | null, sd: sp.SkeletonData) => {
        });
         */


        load(bundleName, paths, type, onProgress, onComplete) {
          let args = null;

          if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
            args.bundle = this.defaultBundleName;
          }

          this.loadByArgs(args);
        }
        /**
         * 异步加载一个资源
         * @param bundleName    远程包名
         * @param paths         资源路径
         * @param type          资源类型
         */


        loadAsync(bundleName, paths, type) {
          return new Promise((resolve, reject) => {
            this.load(bundleName, paths, type, (err, asset) => {
              if (err) {
                warn(err.message);
              }

              resolve(asset);
            });
          });
        }
        /**
         * 加载文件夹中的资源
         * @param bundleName    远程包名
         * @param dir           文件夹名
         * @param type          资源类型
         * @param onProgress    加载进度回调
         * @param onComplete    加载完成回调
         * @example
        // 加载进度事件
        var onProgressCallback = (finished: number, total: number, item: any) => {
        console.log("资源加载进度", finished, total);
        }
        // 加载完成事件
        var onCompleteCallback = () => {
        console.log("资源加载完成");
        }
        oops.res.loadDir("game", onProgressCallback, onCompleteCallback);
         */


        loadDir(bundleName, dir, type, onProgress, onComplete) {
          let args = null;

          if (typeof dir === "string") {
            args = this.parseLoadResArgs(dir, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, dir, type, onProgress);
            args.bundle = this.defaultBundleName;
          }

          args.dir = args.paths;
          this.loadByArgs(args);
        }
        /**
         * 通过资源相对路径释放资源
         * @param path          资源路径
         * @param bundleName    远程资源包名
         */


        release(path, bundleName = this.defaultBundleName) {
          const bundle = assetManager.getBundle(bundleName);

          if (bundle) {
            const asset = bundle.get(path);

            if (asset) {
              this.releasePrefabtDepsRecursively(asset);
            }
          }
        }
        /**
         * 通过相对文件夹路径删除所有文件夹中资源
         * @param path          资源文件夹路径
         * @param bundleName    远程资源包名
         */


        releaseDir(path, bundleName = this.defaultBundleName) {
          const bundle = assetManager.getBundle(bundleName);

          if (bundle) {
            var infos = bundle.getDirWithPath(path);

            if (infos) {
              infos.map(info => {
                this.releasePrefabtDepsRecursively(info.uuid);
              });
            }

            if (path == "" && bundleName != "resources") {
              assetManager.removeBundle(bundle);
            }
          }
        }
        /** 释放预制依赖资源 */


        releasePrefabtDepsRecursively(uuid) {
          if (uuid instanceof Asset) {
            uuid.decRef(); // assetManager.releaseAsset(uuid);
          } else {
            const asset = assetManager.assets.get(uuid);

            if (asset) {
              asset.decRef(); // assetManager.releaseAsset(asset);
            }
          }
        }
        /**
         * 获取资源
         * @param path          资源路径
         * @param type          资源类型
         * @param bundleName    远程资源包名
         */


        get(path, type, bundleName = this.defaultBundleName) {
          var bundle = assetManager.getBundle(bundleName);
          return bundle.get(path, type);
        } //#endregion


        parseLoadResArgs(paths, type, onProgress, onComplete) {
          let pathsOut = paths;
          let typeOut = type;
          let onProgressOut = onProgress;
          let onCompleteOut = onComplete;

          if (onComplete === undefined) {
            const isValidType = js.isChildClassOf(type, Asset);

            if (onProgress) {
              onCompleteOut = onProgress;

              if (isValidType) {
                onProgressOut = null;
              }
            } else if (onProgress === undefined && !isValidType) {
              onCompleteOut = type;
              onProgressOut = null;
              typeOut = null;
            }

            if (onProgress !== undefined && !isValidType) {
              onProgressOut = type;
              typeOut = null;
            }
          }

          return {
            paths: pathsOut,
            type: typeOut,
            onProgress: onProgressOut,
            onComplete: onCompleteOut
          };
        }

        loadByBundleAndArgs(bundle, args) {
          if (args.dir) {
            if (args.preload) {
              bundle.preloadDir(args.paths, args.type, args.onProgress, args.onComplete);
            } else {
              bundle.loadDir(args.paths, args.type, args.onProgress, args.onComplete);
            }
          } else {
            if (args.preload) {
              bundle.preload(args.paths, args.type, args.onProgress, args.onComplete);
            } else {
              bundle.load(args.paths, args.type, args.onProgress, args.onComplete);
            }
          }
        }

        async loadByArgs(args) {
          if (args.bundle) {
            let bundle = assetManager.bundles.get(args.bundle); // 获取缓存中的资源包

            if (bundle) {
              this.loadByBundleAndArgs(bundle, args);
            } // 自动加载资源包
            else {
              const v = this.cdn ? this.bundles.get(args.bundle) : "";
              bundle = await this.loadBundle(args.bundle, v);
              if (bundle) this.loadByBundleAndArgs(bundle, args);
            }
          } // 默认资源包
          else {
            this.loadByBundleAndArgs(resources, args);
          }
        }
        /** 打印缓存中所有资源信息 */


        dump() {
          assetManager.assets.forEach((value, key) => {
            console.log(assetManager.assets.get(key));
          });
          console.log(`当前资源总数:${assetManager.assets.count}`);
        }

      });

      _export("resLoader", resLoader = new ResLoader());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07e6d533d0df36d00fa73b1a8123c9f895b113f4.js.map