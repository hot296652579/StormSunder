System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ThirdPersonCamera, EasyController, EasyControllerEvent, _dec, _class, _crd, ccclass, property, ThirdPersonCameraCtrl;

  function _reportPossibleCrUseOfThirdPersonCamera(extras) {
    _reporterNs.report("ThirdPersonCamera", "../easy_camera/ThirdPersonCamera", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEasyController(extras) {
    _reporterNs.report("EasyController", "./EasyController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEasyControllerEvent(extras) {
    _reporterNs.report("EasyControllerEvent", "./EasyController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ThirdPersonCamera = _unresolved_2.ThirdPersonCamera;
    }, function (_unresolved_3) {
      EasyController = _unresolved_3.EasyController;
      EasyControllerEvent = _unresolved_3.EasyControllerEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ea3cEV3klIAZnz+Ay66ut+", "ThirdPersonCameraCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThirdPersonCameraCtrl", ThirdPersonCameraCtrl = (_dec = ccclass('tgxThirdPersonCameraCtrl'), _dec(_class = class ThirdPersonCameraCtrl extends (_crd && ThirdPersonCamera === void 0 ? (_reportPossibleCrUseOfThirdPersonCamera({
        error: Error()
      }), ThirdPersonCamera) : ThirdPersonCamera) {
        start() {
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ROTATE, this.onCameraRotate, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).on((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ZOOM, this.onCameraZoom, this);
          this._targetLen = this.len;

          this._targetAngles.set(this.node.eulerAngles);
        }

        onDestroy() {
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ROTATE, this.onCameraRotate, this);
          (_crd && EasyController === void 0 ? (_reportPossibleCrUseOfEasyController({
            error: Error()
          }), EasyController) : EasyController).off((_crd && EasyControllerEvent === void 0 ? (_reportPossibleCrUseOfEasyControllerEvent({
            error: Error()
          }), EasyControllerEvent) : EasyControllerEvent).CAMERA_ZOOM, this.onCameraZoom, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=007177b352082eb15fbc0139016568ad86b0c059.js.map