/** 地图管理器*/

import { StormSunderGlobalInstance } from "../StormSunderGlobalInstance";
import { AttributeBonusMgr } from "./AttributeBonusMgr";
import { PlayerMgr } from "./PlayerMgr";
import { assetManager, instantiate, Prefab } from "cc";
import { resLoader } from "db://assets/core_tgx/base/ResLoader";
import { TimerMgr } from "./TimerMgr";
import { EventDispatcher } from "db://assets/core_tgx/easy_ui_framework/EventDispatcher";
import { GameEvent } from "../Enum/GameEvent";

export class MapMgr {
    private static _instance: MapMgr;
    public static get Instance(): MapMgr {
        if (this._instance == null) {
            this._instance = new MapMgr();
        }
        return this._instance;
    }

    //添加地图节点
    public async addMapNode(): Promise<void> {
        const mapUI = StormSunderGlobalInstance.instance.map;
        const map = await this.loadAsyncMap();
        const node = instantiate(map);
        mapUI.removeAllChildren();
        node.parent = mapUI;
        EventDispatcher.instance.emit(GameEvent.EVENT_MAP_LOAD_COMPLETE);
    }

    //加载地图
    public async loadAsyncMap(): Promise<Prefab> {
        return new Promise(async (resolve, reject) => {
            const bundle = assetManager.getBundle(resLoader.gameBundleName);
            if (!bundle) {
                console.error("module_nut is null!");
                reject();
            }

            await resLoader.loadAsync(resLoader.gameBundleName, `Prefabs/Map1`, Prefab).then((prefab: Prefab) => {
                resolve(prefab);
            })
        })
    }

    //获取地图配置信息
    public getMapConfig(id: number) {
        const config = AttributeBonusMgr.inst.mapConfig.getPramById(id);
        return {
            time: config.time,
            item: config.item,
            count: config.number
        }
    }

    //根据地图信息设置AI 时长等
    public setMapInfo(id: number) {
        const config = this.getMapConfig(id);
        TimerMgr.inst.countDownTime = config.time;
        PlayerMgr.inst.createAIPlayerCount = config.count;
    }
}