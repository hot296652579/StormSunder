System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, v2, Rect, Vec3, StormSunderGlobalInstance, GameUtil, _crd;

  function _reportPossibleCrUseOfStormSunderGlobalInstance(extras) {
    _reporterNs.report("StormSunderGlobalInstance", "./StormSunderGlobalInstance", _context.meta, extras);
  }

  _export("GameUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
      v2 = _cc.v2;
      Rect = _cc.Rect;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      StormSunderGlobalInstance = _unresolved_2.StormSunderGlobalInstance;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c41c2anOIRLkbHSc6iWasZv", "GameUtil", undefined);

      __checkObsolete__(['Vec2', 'Node', 'v2', 'PolygonCollider2D', 'Rect', 'CircleCollider2D', 'Vec3', 'UITransform']);

      /** 游戏工具类 */
      _export("GameUtil", GameUtil = class GameUtil {
        /** 转换成hh:mm格式*/
        static formatToTimeString(totalSeconds) {
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          const formattedMinutes = String(minutes).padStart(2, '0');
          const formattedSeconds = String(seconds).padStart(2, '0');
          return `${formattedMinutes}:${formattedSeconds}`;
        }
        /** 重量单位转换*/


        static formatWeight(weight) {
          if (weight < 1000) {
            return `${weight}KG`;
          } // 等于或超过1000时，转换为吨（T），保留两位小数并向下取整


          const inTons = Math.floor(weight / 1000 * 100) / 100;
          return `${inTons}T`;
        }
        /**
         * 将 16 进制颜色转换为 RGBA 格式
         * @param hex - 16 进制颜色字符串 (#FFE73A 或 FFE73A)
         * @param alpha - 可选的透明度值（范围 0~255，默认 255）
         * @returns Color - 包含 r, g, b, a 的对象
         */


        static hexToRGBA(hex, alpha = 255) {
          // 去掉可能存在的 '#' 前缀
          hex = hex.replace(/^#/, ''); // 如果是简写格式 (如 #F7A)，转换为完整格式 (FF77AA)

          if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
          } // 转换为 r, g, b


          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16); // 返回 RGBA 颜色对象

          return {
            r,
            g,
            b,
            a: alpha
          };
        }
        /** 获取节点的世界坐标并转换为 Vec2*/


        static getWorldPositionAsVec2(node) {
          const worldPosition = node.getWorldPosition().clone(); // 获取世界坐标

          return v2(worldPosition.x, worldPosition.y); // 转换为 Vec2
        }
        /** 射线检测
         * @param fromNode 起始节点
         * @param rayLength 射线长度
         * @return 射线结束点的世界坐标 (作为 Vec2)
        */


        static calculateRayEnd(fromNode, rayLength) {
          const rotation = fromNode.angle; // 根据角度计算方向向量

          let direction = v2(0, 0);

          if (rotation === -90) {
            direction = v2(1, 0); // 朝右
          } else if (rotation === 0) {
            direction = v2(0, 1); // 朝上
          } else if (rotation === 90) {
            direction = v2(-1, 0); // 朝左
          } else if (rotation === 180) {
            direction = v2(0, -1); // 朝下
          } else {
            const adjustedAngle = rotation - 90;
            direction = v2(-Math.cos(adjustedAngle * (Math.PI / 180)), Math.sin(-adjustedAngle * (Math.PI / 180)));
          } // 计算射线起点坐标


          const objs = this.getWorldPositionAsVec2(fromNode);
          const obje = objs.add(direction.multiplyScalar(rayLength));
          return obje;
        }
        /**
         * 判断两个 AABB 是否相交
         */


        static isAABBIntersecting(rect1, rect2) {
          return !(rect1.xMax < rect2.xMin || rect1.xMin > rect2.xMax || rect1.yMax < rect2.yMin || rect1.yMin > rect2.yMax);
        }
        /**
         * 检查点是否在多边形内
         * @param point 点的坐标
         * @param polygonPoints 多边形的顶点数组
         * @returns 是否在多边形内
         */


        static isPointInPolygon(point, polygonPoints) {
          let isInside = false;

          for (let i = 0, j = polygonPoints.length - 1; i < polygonPoints.length; j = i++) {
            const xi = polygonPoints[i].x,
                  yi = polygonPoints[i].y;
            const xj = polygonPoints[j].x,
                  yj = polygonPoints[j].y;
            const intersect = yi > point.y !== yj > point.y && point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi;
            if (intersect) isInside = !isInside;
          }

          return isInside;
        }
        /**
         * 检查圆是否与线段相交
         * @param circleCenter 圆心坐标
         * @param radius 圆的半径
         * @param lineStart 线段起点
         * @param lineEnd 线段终点
         * @returns 是否相交
         */


        static isCircleIntersectingLine(circleCenter, radius, lineStart, lineEnd) {
          const lineDir = lineEnd.subtract(lineStart);
          const toCircle = circleCenter.subtract(lineStart);
          const projection = toCircle.dot(lineDir.normalize());
          const closestPoint = lineStart.add(lineDir.normalize().multiplyScalar(projection));
          const distance = circleCenter.subtract(closestPoint).length();
          return distance <= radius;
        }
        /**
         * 获取圆形碰撞器的 AABB（轴对齐边界框）
         */


        static getCircleAABB(circleCollider) {
          const radius = circleCollider.radius;
          const center = circleCollider.worldPosition;
          const minX = center.x - radius;
          const minY = center.y - radius;
          const size = radius * 2;
          return new Rect(minX, minY, size, size);
        }
        /**
         * 获取多边形碰撞器的 AABB（轴对齐边界框）
         */


        static getPolygonAABB(polygonCollider) {
          const points = polygonCollider.worldPoints;
          let minX = points[0].x;
          let maxX = points[0].x;
          let minY = points[0].y;
          let maxY = points[0].y;

          for (let i = 1; i < points.length; i++) {
            const p = points[i];
            if (p.x < minX) minX = p.x;
            if (p.x > maxX) maxX = p.x;
            if (p.y < minY) minY = p.y;
            if (p.y > maxY) maxY = p.y;
          }

          return new Rect(minX, minY, maxX - minX, maxY - minY);
        }
        /**
         * 判断多边形与圆是否相交
         * @param polygonCollider 多边形碰撞器
         * @param circleCollider 圆形碰撞器
         * @returns 是否相交
         */


        static isPolygonAndCircleIntersecting(polygonCollider, circleCollider) {
          // 1. AABB 检测
          // const polygonAABB = this.getPolygonAABB(polygonCollider);
          // const circleAABB = this.getCircleAABB(circleCollider);
          // if (!this.isAABBIntersecting(polygonAABB, circleAABB)) {
          //     return false;
          // }
          // 2. 精确检测
          const circleCenter = new Vec2(circleCollider.node.worldPosition.x, circleCollider.node.worldPosition.y); // 圆心

          const radius = circleCollider.radius; // 检查圆心是否在多边形内部

          if (this.isPointInPolygon(circleCenter, polygonCollider.worldPoints)) {
            return true;
          } // 检查圆是否与多边形的边相交


          const points = polygonCollider.worldPoints;

          for (let i = 0; i < points.length; i++) {
            const start = points[i];
            const end = points[(i + 1) % points.length];

            if (this.isCircleIntersectingLine(circleCenter, radius, start, end)) {
              return true;
            }
          }

          return false;
        }

        static delay(seconds) {
          return new Promise(resolve => setTimeout(resolve, seconds * 1000));
        }
        /** 3D空间坐标转屏幕坐标*/


        static worldToScreenLocal(target, localNode) {
          const targetWorldPos = target.worldPosition.clone();
          const mainCamera = (_crd && StormSunderGlobalInstance === void 0 ? (_reportPossibleCrUseOfStormSunderGlobalInstance({
            error: Error()
          }), StormSunderGlobalInstance) : StormSunderGlobalInstance).instance.camera;
          const screenPos = mainCamera.worldToScreen(targetWorldPos);
          const uiPos = new Vec3(); // localNode.getComponent(UITransform)!.convertToNodeSpaceAR(
          //     new Vec3(screenPos.x, screenPos.y, screenPos.z),
          //     uiPos
          // );

          mainCamera.convertToUINode(target.worldPosition, localNode, uiPos);
          return uiPos;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5b31596cd413bc84692527dce0f891fc7d3089f.js.map