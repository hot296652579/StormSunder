System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, instantiate, Widget, UITransform, assetManager, director, error, Component, UIController, ModuleContext, ResolutionAutoFit, UIMgr, _dec, _class, _crd, ccclass, property, UIUpdater;

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "./UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModuleContext(extras) {
    _reporterNs.report("ModuleContext", "../base/ModuleContext", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResolutionAutoFit(extras) {
    _reporterNs.report("ResolutionAutoFit", "../base/ResolutionAutoFit", _context.meta, extras);
  }

  _export("UIMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Widget = _cc.Widget;
      UITransform = _cc.UITransform;
      assetManager = _cc.assetManager;
      director = _cc.director;
      error = _cc.error;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      UIController = _unresolved_2.UIController;
    }, function (_unresolved_3) {
      ModuleContext = _unresolved_3.ModuleContext;
    }, function (_unresolved_4) {
      ResolutionAutoFit = _unresolved_4.ResolutionAutoFit;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82a59QFSGVIYrBkrgAX1U2r", "UIMgr", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Prefab', 'instantiate', 'Widget', 'UITransform', 'view', 'ResolutionPolicy', 'assetManager', 'AssetManager', 'director', 'error', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      UIUpdater = (_dec = ccclass('tgxUIMgr.UIUpdater'), _dec(_class = class UIUpdater extends Component {
        update() {
          (_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
            error: Error()
          }), UIController) : UIController).updateAll();
        }

      }) || _class);
      /**
       * @en the `User Interface Manager`, handles some stuffs like the ui loads,ui layers,resizing etc.
       * @zh UI管理器，处理UI加载，层级，窗口变化等
       * 
       * */

      _export("UIMgr", UIMgr = class UIMgr {
        constructor() {
          this._uiCanvas = void 0;
          this._uiRoot = void 0;
        }

        static get inst() {
          if (this._inst == null) {
            this._inst = new UIMgr();
          }

          return this._inst;
        }

        createFullScreenNode() {
          var canvas = this._uiCanvas.getComponent(UITransform);

          var node = new Node();
          node.layer = this._uiCanvas.layer;
          var uiTransform = node.addComponent(UITransform);
          uiTransform.width = canvas.width;
          uiTransform.height = canvas.height;
          var widget = node.addComponent(Widget);
          widget.isAlignBottom = true;
          widget.isAlignTop = true;
          widget.isAlignLeft = true;
          widget.isAlignRight = true;
          widget.left = 0;
          widget.right = 0;
          widget.top = 0;
          widget.bottom = 0;
          return node;
        }
        /**
         * @en setup this UIMgr,`don't call more than once`.
         * @zh 初始化UIMgr,`不要多次调用`
         *  */


        setup(uiCanvas, maxLayers, layerNames) {
          if (this._uiCanvas) {
            return;
          }

          if (!uiCanvas) {
            throw error('uiCanvas must be a Node or Prefab');
          }

          if (uiCanvas instanceof Node) {
            this._uiCanvas = uiCanvas;
          } else {
            this._uiCanvas = instantiate(uiCanvas);
            director.getScene().addChild(this._uiCanvas);
          }

          this._uiCanvas.name = '$tgxUICanvas$';
          director.addPersistRootNode(this._uiCanvas);

          if (!this._uiCanvas.getComponent(UIUpdater)) {
            this._uiCanvas.addComponent(UIUpdater);
          } //this.resize();


          var canvas = this._uiCanvas.getComponent(UITransform);

          this._uiCanvas.addComponent(_crd && ResolutionAutoFit === void 0 ? (_reportPossibleCrUseOfResolutionAutoFit({
            error: Error()
          }), ResolutionAutoFit) : ResolutionAutoFit);

          layerNames || (layerNames = []);
          this._uiRoot = this.createFullScreenNode();
          this._uiRoot.name = 'ui_root';
          canvas.node.addChild(this._uiRoot); //create layers

          for (var i = 0; i < maxLayers; ++i) {
            var layerNode = this.createFullScreenNode();
            layerNode.name = 'ui_layer_' + (layerNames[i] ? layerNames[i] : i);

            this._uiRoot.addChild(layerNode);
          }
        }

        getLayerNode(layerIndex) {
          return this._uiRoot.children[layerIndex] || this._uiRoot;
        }

        hideAll() {
          (_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
            error: Error()
          }), UIController) : UIController).hideAll();
        }

        getUI(uiCls) {
          var allControllers = UIController._controllers;

          for (var i = 0; i < allControllers.length; ++i) {
            var c = allControllers[i];

            if (c instanceof uiCls) {
              return c;
            }
          }

          return null;
        }

        isShowing(uiCls) {
          var allControllers = UIController._controllers;

          for (var i = 0; i < allControllers.length; ++i) {
            if (allControllers[i] instanceof uiCls) {
              return true;
            }
          }

          return false;
        }
        /***
         * @en show ui by the given parameters.
         * @zh 显示UI
         * @param uiCls the class, must inherits from the class `UIController`.
         * @param cb will be called after ui created.
         * @param thisArg the this argument for param `cb`.
         * @returns the instance of `uiCls`
         *  */


        showUI(uiCls, cb, thisArg) {
          var bundleName = (_crd && ModuleContext === void 0 ? (_reportPossibleCrUseOfModuleContext({
            error: Error()
          }), ModuleContext) : ModuleContext).getClassModule(uiCls);

          if (bundleName) {
            var _bundle = assetManager.getBundle(bundleName);

            if (!_bundle) {
              assetManager.loadBundle(bundleName, null, (err, loadedBundle) => {
                if (err) {
                  console.log(err);
                } else {
                  this.showUI(uiCls, cb, thisArg);
                }
              });
              return;
            }
          }

          var ui = (_crd && ModuleContext === void 0 ? (_reportPossibleCrUseOfModuleContext({
            error: Error()
          }), ModuleContext) : ModuleContext).createFromModule(uiCls);
          var resArr = ui.getRes() || [];

          if (typeof ui.prefab == 'string') {
            resArr.push(ui.prefab);
          }

          var fnLoadAndCreateFromBundle = bundle => {
            bundle.load(resArr, (err, data) => {
              if (err) {
                console.log(err);
              }

              var node = null;
              var prefab = ui.prefab;

              if (typeof ui.prefab == 'string') {
                prefab = bundle.get(ui.prefab);
              }

              if (prefab) {
                node = instantiate(prefab);
              } else {
                //special for empty ui
                node = this.createFullScreenNode();
              }

              var parent = UIMgr.inst.getLayerNode(ui.layer);
              parent.addChild(node);
              ui.setup(node);

              if (cb) {
                cb.apply(thisArg, [ui]);
              }
            });
            return ui;
          };

          bundleName = bundleName || 'resources';
          var bundle = assetManager.getBundle(bundleName);
          return fnLoadAndCreateFromBundle(bundle);
        }

      });

      UIMgr._inst = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=531654c3888dbd8cd3c9d60092569d0497f63072.js.map