System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, find, _dec, _class, _class2, _crd, ccclass, property, StormSunderGlobalInstance;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Camera = _cc.Camera;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6d8cRYbfJDkIzc2HokdcEj", "StormSunderGlobalInstance", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'Camera', 'Component', 'find', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StormSunderGlobalInstance", StormSunderGlobalInstance = (_dec = ccclass('StormSunderGlobalInstance'), _dec(_class = (_class2 = class StormSunderGlobalInstance {
        constructor() {
          this.camera = null;
          //3d相机
          this.map = null;
          this.players = null;
          this.props = null;
          this.aiPoints = null;
          this.gameRoot = null;
          this.homeUI = null;
          this.battleUI = null;
          this.effectUI = null;
          this.bloodUI = null;
          //按钮
          this.btnStart = null;
          this.btnRefresh = null;
          this.btnSet = null;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new StormSunderGlobalInstance();
          return this._instance;
        }

        initUI() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.camera = find("MainCamera").getComponent(Camera);
            _this.gameRoot = find("GameRoot");
            _this.map = find("GameRoot/Map");
            _this.players = find("GameRoot/Players");
            _this.props = find("GameRoot/Props");
            _this.aiPoints = find("GameRoot/AIPoints");
            _this.homeUI = find("Canvas/HomeUI");
            _this.battleUI = find("Canvas/BattleUI");
            _this.bloodUI = find("Canvas/BattleUI/Blood");
            _this.effectUI = find("Canvas/BattleUI/Effect");
            _this.btnRefresh = find('Canvas/HomeUI/TopLeft/BtnRefresh');
            _this.btnSet = find('Canvas/HomeUI/TopLeft/BtnSet');
            _this.btnStart = find('Canvas/HomeUI/BtnStart');
          })();
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89c9d9d9e89ee87022b08c59d4c0282bffd85e13.js.map