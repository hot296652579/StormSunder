System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Camera, find, _dec, _class, _class2, _crd, ccclass, property, StormSunderGlobalInstance;

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

        async initUI() {
          this.camera = find("MainCamera").getComponent(Camera);
          this.gameRoot = find("GameRoot");
          this.map = find("GameRoot/Map");
          this.players = find("GameRoot/Players");
          this.props = find("GameRoot/Props");
          this.aiPoints = find("GameRoot/AIPoints");
          this.homeUI = find("Canvas/HomeUI");
          this.battleUI = find("Canvas/BattleUI");
          this.bloodUI = find("Canvas/BattleUI/Blood");
          this.effectUI = find("Canvas/BattleUI/Effect");
          this.btnRefresh = find('Canvas/HomeUI/TopLeft/BtnRefresh');
          this.btnSet = find('Canvas/HomeUI/TopLeft/BtnSet');
          this.btnStart = find('Canvas/HomeUI/BtnStart');
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89c9d9d9e89ee87022b08c59d4c0282bffd85e13.js.map