import { assetManager, instantiate, Prefab, Node, UITransform, Vec3, Vec2, view, game, PhysicsSystem, geometry } from "cc";
import { ResLoader, resLoader } from "db://assets/core_tgx/base/ResLoader";
import { StormSunderGlobalInstance } from "../StormSunderGlobalInstance";
import { TornadoComponent } from "../Component/TornadoComponent";
import { TornadoAIComponent } from "../Component/TornadoAIComponent";
import { AttributeBonusMgr } from "./AttributeBonusMgr";
import { Tableai_config } from "db://assets/module_basic/table/Tableai_config";

const res = [
    "Prefabs/Storm",
]

/** 龙卷风管理器*/
export class PlayerMgr {
    private static _instance: PlayerMgr;
    public static get Instance(): PlayerMgr {
        if (this._instance == null) {
            this._instance = new PlayerMgr();
        }
        return this._instance;
    }

    public static get inst(): PlayerMgr {
        return this.Instance;
    }

    public tornadoNode: Node = null;//玩家节点
    public aiPlayersConfig: Map<number, any> = new Map();//AI玩家配置
    public createAIPlayerCount: number = 3;//创建AI玩家数量
    public aiConfigCount: number = 3;//AI配置数量

    private aiIndex: number = 0;//AI索引
    private pickAiMap: Map<number, Tableai_config> = new Map();//权重随机的AI

    //创建AI玩家
    public async genareatorAIPlayer(): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const aiPoints = StormSunderGlobalInstance.instance.aiPoints;
            for (let i = 0; i < this.createAIPlayerCount; i++) {
                const infoPrefab = await resLoader.loadAsync(resLoader.gameBundleName, res[0], Prefab);
                let infoNode = instantiate(infoPrefab);
                infoPrefab.name = 'AIPlayer' + i;
                infoNode.parent = StormSunderGlobalInstance.instance.players;

                const point = aiPoints.children[i];
                infoNode.setPosition(point.worldPosition.clone());
                infoNode.addComponent(TornadoAIComponent);
                resolve();
            }
        })
    }

    //获取玩家龙卷风节点
    async getTornadoNode(): Promise<Node> {
        return new Promise((resolve, reject) => {
            if (this.tornadoNode) {
                resolve(this.tornadoNode);
            } else {
                const playersUI = StormSunderGlobalInstance.instance.players!;
                if (playersUI && playersUI.children.length > 0)
                    this.tornadoNode = playersUI.children[0];

                resolve(this.tornadoNode);
            }
        })
    }

    //设置玩家隐藏显示
    async setPlayerVisible(visible: boolean) {
        const tornado = await this.getTornadoNode();
        tornado.active = visible;
    }

    async playerAddComponent(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getTornadoNode().then(node => {
                node.addComponent(TornadoComponent)!;
                resolve();
            })
        })
    }

    /** 所有AI玩家配置数据*/
    addAIPlayers() {
        for (let id = 1; id <= this.aiConfigCount; id++) {
            const config = AttributeBonusMgr.inst.aiConfig.getAIConfigById(id);
            if (config) {
                this.aiPlayersConfig.set(id, config); // 保存配置
            }
        }

        // console.log("AI玩家配置数据:", this.aiPlayersConfig);
    }

    /**
     * 根据权重生成AI配置
     */
    weightGeneateAIConfig(): void {
        // 获取所有AI配置
        const aiConfigs = Array.from(this.aiPlayersConfig.values());

        // 按权重从大到小排序
        aiConfigs.sort((a, b) => b.weight - a.weight);

        let accumulatedWeight = 0;
        this.pickAiMap.clear();

        // 计算权重并存储到pickAiMap
        for (const config of aiConfigs) {
            const weight = config.weight / 100; // 转换为百分比 (10 -> 0.1, 20 -> 0.2)
            accumulatedWeight += weight;

            // 存储累积权重和对应配置
            this.pickAiMap.set(accumulatedWeight, config);
        }

        console.log(this.pickAiMap);
    }

    /**
     * 根据索引获取AI配置
     */
    getRandomAIConfig(): any {
        // 检查是否超出创建数量
        if (this.aiIndex >= this.createAIPlayerCount) {
            console.log('AI创建数量大于配置表数量');
            return null;
        }

        // 从pickAiMap中获取对应索引的配置
        const config = Array.from(this.pickAiMap.values())[this.aiIndex];
        this.aiIndex++; // 索引递增
        return config;
    }

    /** 重置AI索引*/
    public resetAIIndex(): void {
        this.aiIndex = 0;
    }

    /** 排行榜*/
    public getRanking() {
        const playersUI = StormSunderGlobalInstance.instance.players!;

        // Get all players and their heights
        const rankings = playersUI.children.map((node, index) => {
            const tornadoComp = node.getComponent(TornadoComponent);
            const isPlayer = !node.getComponent(TornadoAIComponent);
            return {
                index,
                height: tornadoComp ? tornadoComp.height : 0,
                nickName: tornadoComp ? tornadoComp.nickName : '',
                isPlayer
            };
        });

        // Sort by height in descending order
        rankings.sort((a, b) => b.height - a.height);

        // Add rank information
        const rankedPlayers = rankings.map((player, rank) => ({
            rank: rank + 1,
            height: player.height,
            nickName: player.nickName,
            isPlayer: player.isPlayer
        }));

        if (rankings.length < 3) {
            // If less than 3 players, return all rankings
            return rankedPlayers;
        }

        // Find player rank if exists
        const playerRank = rankedPlayers.find(p => p.isPlayer);

        if (!playerRank) {
            // No player found, return top 3
            return rankedPlayers.slice(0, 3);
        }

        if (playerRank.rank <= 3) {
            // Player is in top 3, return top 3
            return rankedPlayers.slice(0, 3);
        }

        // Player is not in top 3, return top 3 + player rank
        return [...rankedPlayers.slice(0, 3), playerRank];
    }

    /** 获取玩家的排名*/
    public getPlayerRank(): number {
        const rankings = this.getRanking();
        const playerRank = rankings.find(p => p.isPlayer);
        return playerRank ? playerRank.rank : -1;
    }

}

