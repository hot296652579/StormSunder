System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, NodeEventType, StormSunderGlobalInstance, GameUtil, tgxUIMgr, UI_Setting, StormSunderAudioMgr, GameMgr, AttributeBonusMgr, PlayerMgr, _dec, _class, _crd, ccclass, property, RoosterStormSunder;

  function _reportPossibleCrUseOfStormSunderGlobalInstance(extras) {
    _reporterNs.report("StormSunderGlobalInstance", "./Script/StormSunderGlobalInstance", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "./Script/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOftgxUIMgr(extras) {
    _reporterNs.report("tgxUIMgr", "../core_tgx/tgx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_Setting(extras) {
    _reporterNs.report("UI_Setting", "../scripts/UIDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStormSunderAudioMgr(extras) {
    _reporterNs.report("StormSunderAudioMgr", "./Script/Manager/StormSunderAudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameMgr(extras) {
    _reporterNs.report("GameMgr", "./Script/Manager/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttributeBonusMgr(extras) {
    _reporterNs.report("AttributeBonusMgr", "./Script/Manager/AttributeBonusMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "./Script/Manager/PlayerMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      NodeEventType = _cc.NodeEventType;
    }, function (_unresolved_2) {
      StormSunderGlobalInstance = _unresolved_2.StormSunderGlobalInstance;
    }, function (_unresolved_3) {
      GameUtil = _unresolved_3.GameUtil;
    }, function (_unresolved_4) {
      tgxUIMgr = _unresolved_4.tgxUIMgr;
    }, function (_unresolved_5) {
      UI_Setting = _unresolved_5.UI_Setting;
    }, function (_unresolved_6) {
      StormSunderAudioMgr = _unresolved_6.StormSunderAudioMgr;
    }, function (_unresolved_7) {
      GameMgr = _unresolved_7.GameMgr;
    }, function (_unresolved_8) {
      AttributeBonusMgr = _unresolved_8.AttributeBonusMgr;
    }, function (_unresolved_9) {
      PlayerMgr = _unresolved_9.PlayerMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa87cyBikxNRJE8D80V5T4B", "RoosterStormSunder", undefined);

      __checkObsolete__(['_decorator', 'Component', 'ERaycast2DType', 'find', 'Label', 'Node', 'NodeEventType', 'PhysicsSystem2D', 'Tween', 'tween', 'v2', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoosterStormSunder", RoosterStormSunder = (_dec = ccclass('RoosterStormSunder'), _dec(_class = class RoosterStormSunder extends Component {
        onLoad() {
          (_crd && AttributeBonusMgr === void 0 ? (_reportPossibleCrUseOfAttributeBonusMgr({
            error: Error()
          }), AttributeBonusMgr) : AttributeBonusMgr).inst.initilize();
          (_crd && StormSunderAudioMgr === void 0 ? (_reportPossibleCrUseOfStormSunderAudioMgr({
            error: Error()
          }), StormSunderAudioMgr) : StormSunderAudioMgr).initilize(); // StormSunderAudioMgr.play(StormSunderAudioMgr.getMusicIdName(1), 1.0);
        }

        start() {
          this.initialize();
          this.registerListener();
        }

        async initialize() {
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).inst.addAIPlayers();
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).inst.weightGeneateAIConfig();
          (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.initUI();
        }

        registerListener() {
          const btnRefresh = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.btnRefresh;
          const btnSet = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.btnSet;
          const btnStart = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.btnStart;
          btnSet.on(NodeEventType.TOUCH_END, () => this.onClickSet(), this);
          btnStart.on(NodeEventType.TOUCH_END, () => this.onClickStart(), this);
        }

        async onClickStart() {
          (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).delay(0.2);
          (_crd && GameMgr === void 0 ? (_reportPossibleCrUseOfGameMgr({
            error: Error()
          }), GameMgr) : GameMgr).inst.startGame();
        }

        onClickSet() {
          (_crd && StormSunderAudioMgr === void 0 ? (_reportPossibleCrUseOfStormSunderAudioMgr({
            error: Error()
          }), StormSunderAudioMgr) : StormSunderAudioMgr).playOneShot((_crd && StormSunderAudioMgr === void 0 ? (_reportPossibleCrUseOfStormSunderAudioMgr({
            error: Error()
          }), StormSunderAudioMgr) : StormSunderAudioMgr).getMusicIdName(2), 1.0);
          const show = (_crd && tgxUIMgr === void 0 ? (_reportPossibleCrUseOftgxUIMgr({
            error: Error()
          }), tgxUIMgr) : tgxUIMgr).inst.isShowing(_crd && UI_Setting === void 0 ? (_reportPossibleCrUseOfUI_Setting({
            error: Error()
          }), UI_Setting) : UI_Setting);

          if (!show) {
            (_crd && tgxUIMgr === void 0 ? (_reportPossibleCrUseOftgxUIMgr({
              error: Error()
            }), tgxUIMgr) : tgxUIMgr).inst.showUI(_crd && UI_Setting === void 0 ? (_reportPossibleCrUseOfUI_Setting({
              error: Error()
            }), UI_Setting) : UI_Setting);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de6870e64f1ffc20cf420ed7d2e1243921840a80.js.map