import { assetManager, instantiate, Prefab, Node, UITransform, Vec3, Vec2, view, game, PhysicsSystem, geometry, isValid } from "cc";
import { resLoader } from "db://assets/core_tgx/base/ResLoader";
import { StormSunderGlobalInstance } from "../StormSunderGlobalInstance";
import { TornadoComponent } from "../Component/TornadoComponent";
import { PlayerMgr } from "./PlayerMgr";
import { GameMgr, GameStatus } from "./GameMgr";

const propRes = [
    "Prefabs/Props/altman",
    "Prefabs/Props/aula",
    "Prefabs/Props/clown",
]

/** 道具管理器*/
export class PropMgr {
    private static _instance: PropMgr;
    public static get Instance(): PropMgr {
        if (this._instance == null) {
            this._instance = new PropMgr();
        }
        return this._instance;
    }

    public static get inst(): PropMgr {
        return this.Instance;
    }

    //初始数量
    public propInitNum: number = 10;
    //数量上限
    public propMaxNum: number = 100;
    //生成周期
    public propCreateCycle: number = 3;
    //生成数量
    public propCreateNum: number = 10;

    public tornadoNode: Node = null;//玩家节点

    public spawnRadius: number = 20; // 生成范围半径
    public raycastDistance: number = 1;//射线检测距离
    curMovePropsCount: number = 0; //当前移动道具数量
    lastCreateTime: number = 0;//上次生成时间

    public genaratorInitialData() {
        //DOTO 取配置 先定义假数据

        this.propInitNum = 10;
        this.propMaxNum = 100;
        this.propCreateCycle = 2;
        this.propCreateNum = 1;
    }

    public update(deltaTime: number) {
        if (this.curMovePropsCount >= this.propMaxNum || GameMgr.inst.getGameStatus() != GameStatus.Playing) return;

        const currentTime = game.totalTime / 1000; // 转换为秒

        // 检查是否达到生成周期
        if (currentTime - this.lastCreateTime >= this.propCreateCycle) {
            this.lastCreateTime = currentTime; // 更新上次生成时间
            this.genatorProp(); // 执行生成道具逻辑
            // console.log(`道具生成周期到达，当前道具数量：${this.curMovePropsCount}`);
        }
    }

    public async genatorProp() {
        if (this.curMovePropsCount >= this.propMaxNum) return;

        const propsUI = StormSunderGlobalInstance.instance.props!;
        this.tornadoNode = await PlayerMgr.inst.getTornadoNode();

        for (let index = 0; index < this.propInitNum; index++) {
            let spawnPos = this.getValidSpawnPosition();
            // 进行四向物理检测
            if (spawnPos && !this.isPositionBlocked(spawnPos)) {
                const propPrefab = await resLoader.loadAsync(resLoader.gameBundleName, propRes[Math.floor(Math.random() * propRes.length)]);
                let newMonster = instantiate(propPrefab) as any;
                newMonster.setParent(propsUI);
                newMonster.setWorldPosition(spawnPos);
                this.curMovePropsCount++;
                // console.log("怪物生成成功", spawnPos);
            }

            // console.warn("未找到合适的怪物生成点");
        }
    }

    /** 获取一个合法的生成位置 */
    getValidSpawnPosition(): Vec3 | null {
        const maxAttempts = 10;
        for (let i = 0; i < maxAttempts; i++) {
            let spawnPos = this.getRandomSpawnPosition();
            if (!this.isPositionBlocked(spawnPos)) {
                return spawnPos; // 当前位置没有障碍物，返回该位置
            }
        }
        return null; // 失败，返回 null
    }

    /** 随机获取玩家附近的生成点 */
    getRandomSpawnPosition(): Vec3 {
        if (!this.tornadoNode || !this.tornadoNode.worldPosition) return;

        let playerPos = this.tornadoNode.worldPosition;
        let angle = Math.random() * Math.PI * 2; // 随机角度
        let distance = Math.random() * this.spawnRadius + this.spawnRadius;

        // 创建射线检测前方障碍物
        let ray = new geometry.Ray(
            playerPos.x,
            playerPos.y,
            playerPos.z,
            Math.cos(angle),
            0,
            Math.sin(angle)
        );

        let hit = PhysicsSystem.instance.raycastClosest(ray, distance, 1 << 2);

        if (hit) {
            // 如果检测到障碍物，将生成距离调整为龙卷风到障碍物之间
            let hitResult = PhysicsSystem.instance.raycastClosestResult;
            if (hitResult && hitResult.distance < distance) {
                // 在龙卷风和障碍物之间随机选择一个位置，留出一定安全距离
                distance = Math.random() * (hitResult.distance - 1) + 1;
            }
        }

        let x = playerPos.x + Math.cos(angle) * distance;
        let z = playerPos.z + Math.sin(angle) * distance;
        let y = 0;
        return new Vec3(x, y, z);
    }

    /** 检测当前位置是否有障碍物 */
    isPositionBlocked(position: Vec3): boolean {
        if (!position) return false;

        let ray = new geometry.Ray(position.x, position.y, position.z, 0, 0, 0);

        if (PhysicsSystem.instance.raycastClosest(ray, this.raycastDistance)) {
            let hit = PhysicsSystem.instance.raycastClosestResult;
            if (hit && hit.collider) {
                // console.log("检测到障碍物", hit.collider.node.name, "位置", position);
                return true; // 当前位置有障碍物
            }
        }

        return false; // 没有检测到障碍物
    }

    /**
     * 获取距离玩家节点最近的道具节点
     * @param playerNode 玩家节点
     * @returns 距离最近的道具节点（如果存在），否则返回 null
     */
    getNearestProp(playerNode: Node): Node | null {
        if (!playerNode) return null;

        let minDistance = Infinity;
        let nearestProp: Node | null = null;

        const playerPos = playerNode.worldPosition;
        const propsNodes = StormSunderGlobalInstance.instance.props;

        propsNodes.children.forEach(prop => {
            const propPos = prop.worldPosition;
            const distance = Vec3.distance(playerPos, propPos);

            if (distance < minDistance) {
                minDistance = distance;
                nearestProp = prop;
            }
        });

        return nearestProp;
    }

    /** 删除移动道具*/
    removeMovingProp() {
        this.curMovePropsCount--;
    }

    //获取玩家龙卷风节点
    getTornadoNode(): Node {
        const playersUI = StormSunderGlobalInstance.instance.players!;
        if (!this.tornadoNode) {
            if (playersUI && playersUI.children.length > 0) {
                this.tornadoNode = playersUI.children.filter(child => child.getComponent(TornadoComponent))[0]
            }
        }
        return this.tornadoNode;
    }

    //重置
    reset() {
        const propsUI = StormSunderGlobalInstance.instance.props!;
        if (propsUI) {
            if (propsUI.children.length > 0) {
                for (let i = 0; i < propsUI.children.length; i++) {
                    const prop = propsUI.children[i];
                    if (prop) {
                        prop.destroy();
                    }
                }
            }
        }

        this.curMovePropsCount = 0;
        this.tornadoNode = null;
    }
}

