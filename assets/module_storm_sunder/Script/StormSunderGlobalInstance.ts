import { _decorator, assetManager, Camera, Component, find, Node, Prefab } from 'cc';
import { resLoader } from '../../core_tgx/base/ResLoader';
import { ResourcePool } from './ResourcePool';
import { GameUtil } from './GameUtil';

const { ccclass, property } = _decorator;

@ccclass('StormSunderGlobalInstance')
export class StormSunderGlobalInstance {
    private static _instance: StormSunderGlobalInstance;
    public static get instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new StormSunderGlobalInstance();
        return this._instance;
    }

    public async initUI() {
        this.camera = find("MainCamera").getComponent(Camera)!;
        this.gameRoot = find("GameRoot");
        this.map = find("GameRoot/Map");
        this.homeMap = find("GameRoot/HomeMap");
        this.players = find("GameRoot/Players");
        this.props = find("GameRoot/Props");
        this.aiPoints = find("GameRoot/AIPoints");

        this.homeUI = find("Canvas/HomeUI");
        this.battleUI = find("Canvas/BattleUI");
        this.bloodUI = find("Canvas/BattleUI/Blood");
        this.effectUI = find("Canvas/BattleUI/Effect");

        this.btnRefresh = find('Canvas/HomeUI/TopLeft/BtnRefresh')!;
        this.btnSet = find('Canvas/HomeUI/TopLeft/BtnSet')!;
        this.btnStart = find('Canvas/HomeUI/BtnStart')!;
    }

    public camera: Camera = null!; //3d相机
    public map: Node = null!;
    public homeMap: Node = null!;
    public players: Node = null!;
    public props: Node = null!;
    public aiPoints: Node = null!;
    public gameRoot: Node = null!;
    public homeUI: Node = null!;
    public battleUI: Node = null!;
    public effectUI: Node = null!;
    public bloodUI: Node = null!;

    //按钮
    public btnStart: Node = null!;
    public btnRefresh: Node = null!;
    public btnSet: Node = null!;
}



