/** 2dUI 特效 血条 粒子等管理器*/

import { assetManager, instantiate, Prefab, Node, UITransform, Vec3, Vec2, view, Game } from "cc";
import { resLoader } from "db://assets/core_tgx/base/ResLoader";
import { StormSunderGlobalInstance } from "../StormSunderGlobalInstance";
import { BloodComponent } from "../Component/BloodComponent";
import { PlayerInfo, PlayerInfoComponent } from "../Component/PlayerInfoComponent";
import { TornadoComponent } from "../Component/TornadoComponent";
import { GameUtil } from "../GameUtil";
import { ExpPropComponent } from "../Component/ExpPropComponent";

export class Effect2DUIMgr {
    private static _instance: Effect2DUIMgr;
    public static get Instance(): Effect2DUIMgr {
        if (this._instance == null) {
            this._instance = new Effect2DUIMgr();
        }
        return this._instance;
    }

    public static get inst(): Effect2DUIMgr {
        return this.Instance;
    }

    private bloodMap: Map<Node, Node> = new Map(); // 存储节点与对应血条的映射
    private playerInfoMap: Map<Node, Node> = new Map(); // 存储节点与玩家信息的映射

    async showBlood(target: Node, hpPercent: number) {
        const bloodUI = StormSunderGlobalInstance.instance.bloodUI;

        // 1. 使用占位符防止重复创建
        if (this.bloodMap.has(target)) {
            const existing = this.bloodMap.get(target);
            if (existing instanceof Node) {
                const bloodComp = existing.getComponent(BloodComponent);
                if (bloodComp) {
                    bloodComp.updateHP(hpPercent);
                }

                const height = existing.getComponent(UITransform).height * 20;

                console.log('height:', height);
                this.setPlayerInfoPosition(existing, target, bloodUI, height);
            }
            return; // 正在加载或已存在
        }

        // 2. 设置加载占位符
        this.bloodMap.set(target, null);

        try {
            const bloodPrefab = await resLoader.loadAsync(
                resLoader.gameBundleName,
                "Prefabs/Blood",
                Prefab
            );

            const bloodNode = instantiate(bloodPrefab);
            bloodNode.parent = bloodUI;

            const bloodComp = bloodNode.getComponent(BloodComponent);
            if (bloodComp) {
                bloodComp.updateHP(hpPercent);
            }

            const height = bloodNode.getComponent(UITransform).height * 20;
            this.setPlayerInfoPosition(bloodNode, target, bloodUI, height);
            this.bloodMap.set(target, bloodNode);
        } catch (error) {
            // 异常处理：移除占位符允许重试
            this.bloodMap.delete(target);
            console.error("加载血条失败:", error);
        }
    }

    /** 龙卷风添加信息预设*/
    async addPlayerInfo(target: Node, playerInfo: PlayerInfo) {
        const effectUI = StormSunderGlobalInstance.instance.effectUI;

        // 1. 使用占位符防止重复创建
        if (this.playerInfoMap.has(target)) {
            const existing = this.playerInfoMap.get(target);
            if (existing instanceof Node) {
                this.setPlayerInfoPosition(existing, target, effectUI);
            }
            return; // 正在加载或已存在
        }

        // 2. 设置加载占位符
        this.playerInfoMap.set(target, null);

        try {
            const infoPrefab = await resLoader.loadAsync(
                resLoader.gameBundleName,
                "Prefabs/PlayerInfo",
                Prefab
            );

            const infoNode = instantiate(infoPrefab);
            infoNode.parent = effectUI;

            const playerInfoComp = infoNode.getComponent(PlayerInfoComponent);
            playerInfoComp?.updateInfo(playerInfo);

            this.setPlayerInfoPosition(infoNode, target, effectUI);
            this.playerInfoMap.set(target, infoNode);
        } catch (error) {
            // 异常处理：移除占位符允许重试
            this.playerInfoMap.delete(target);
            console.error("加载玩家信息失败:", error);
        }
    }

    private setPlayerInfoPosition(infoNode: Node, target: Node, parentUI: Node, distance = 150) {
        const uiPos = GameUtil.worldToScreenLocal(target, parentUI);
        infoNode.setPosition(uiPos.x, uiPos.y + distance);
    }

    //更新对应玩家信息
    updatePlayerInfo(target: Node, playerInfo: PlayerInfo) {
        const infoNode = this.playerInfoMap.get(target);
        if (infoNode) {
            const playerInfoComp = infoNode.getComponent(PlayerInfoComponent);
            if (playerInfoComp) {
                playerInfoComp.updateInfo(playerInfo);
            }
        }
    }

    //目标节点添加经验渐隐显示
    async addExpProp(target: Node, exp: number) {
        const expPrefab = await resLoader.loadAsync(
            resLoader.gameBundleName,
            "Prefabs/ExpProp",
            Prefab
        );

        if (expPrefab) {
            const expNode = instantiate(expPrefab);
            const effectUI = StormSunderGlobalInstance.instance.effectUI;
            expNode.parent = effectUI;

            this.setPlayerInfoPosition(expNode, target, effectUI, 0);
            expNode.getComponent(ExpPropComponent).showExp(exp);
            // console.log("targetLocal:", targetLocal);
        }
    }

    // 清理血条
    removeBlood(target: Node) {
        const bloodNode = this.bloodMap.get(target);
        if (bloodNode) {
            bloodNode.destroy();
            this.bloodMap.delete(target);
        }
    }

    // 清理玩家信息节点
    removePlayerInfo(target: Node) {
        const infoNode = this.playerInfoMap.get(target);
        if (infoNode) {
            infoNode.destroy();
            this.playerInfoMap.delete(target);
        }
    }
}

