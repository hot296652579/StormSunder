System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Tablemusic_config, MusicConfigModel, _crd;

  function _reportPossibleCrUseOfTablemusic_config(extras) {
    _reporterNs.report("Tablemusic_config", "../../../module_basic/table/Tablemusic_config", _context.meta, extras);
  }

  _export("MusicConfigModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Tablemusic_config = _unresolved_2.Tablemusic_config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "807a0fEbhdDWpvUekcCKkdZ", "MusicConfigModel", undefined);

      /**
       * 音乐配置数据
      */
      _export("MusicConfigModel", MusicConfigModel = class MusicConfigModel {
        constructor(id) {
          if (id === void 0) {
            id = 1;
          }

          this.config = void 0;
          this.id = void 0;
          this.id = id;
          this.config = new (_crd && Tablemusic_config === void 0 ? (_reportPossibleCrUseOfTablemusic_config({
            error: Error()
          }), Tablemusic_config) : Tablemusic_config)();
        }
        /** 音效用途说明*/


        get content() {
          return this.config.content;
        }
        /** 音效文件名*/


        get name() {
          return this.config.name;
        }
        /** 根据id获取音乐文件名*/


        getNameById(id) {
          if (id === void 0) {
            id = 1;
          }

          this.config.init(id);
          return this.name;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb6a645f9e1c2dd45b1feb1b8196cc57c386b1a8.js.map