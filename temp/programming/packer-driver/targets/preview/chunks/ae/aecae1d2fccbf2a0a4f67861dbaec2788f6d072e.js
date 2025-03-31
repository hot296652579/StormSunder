System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, PathfindingManager, _crd;

  _export("PathfindingManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d3f4Zf0OhJp7JsVVxlw5BG", "PathfindingManager", undefined);

      __checkObsolete__(['Vec3', 'Node', 'tween', 'Component']);

      _export("PathfindingManager", PathfindingManager = class PathfindingManager {
        static getInstance() {
          if (!this.instance) {
            this.instance = new PathfindingManager();
          }

          return this.instance;
        }
        /**
         * 让节点移动到目标点
         * @param node 需要移动的对象
         * @param targetPosition 目标点
         * @param duration 移动持续时间（秒）
         */


        moveTo(node, targetPosition, duration) {
          tween(node).to(duration, {
            position: targetPosition
          }).start();
        }
        /** 让 AI 持续追踪目标 */


        followTarget(aiComponent, targetNode, moveSpeed, cb) {
          if (!targetNode) return;
          aiComponent.schedule(() => {
            if (!targetNode.isValid) {
              if (cb) cb();
              return;
            } // console.log('追击中...');


            var aiNode = aiComponent.node;
            var targetPos = targetNode.worldPosition;
            var myPos = aiNode.worldPosition;
            var direction = targetPos.clone().subtract(myPos).normalize();
            var moveStep = direction.multiplyScalar(moveSpeed * 0.016); // 16ms 约等于 60FPS

            aiNode.setWorldPosition(myPos.add(moveStep));
          }, 0.016); // 60FPS 更新追击
        }

      });

      PathfindingManager.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aecae1d2fccbf2a0a4f67861dbaec2788f6d072e.js.map