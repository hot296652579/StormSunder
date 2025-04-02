import { BoxCollider, Button, Collider, Component, ConeCollider, CylinderCollider, ITriggerEvent, Label, Node, NodeEventType, RigidBody, SphereCollider, Vec3, _decorator, director, find, game } from 'cc';
import { StormSunderAudioMgr } from '../Manager/StormSunderAudioMgr';
import { EventDispatcher } from 'db://assets/core_tgx/easy_ui_framework/EventDispatcher';
import { GameEvent } from '../Enum/GameEvent';
import { UIJoyStick } from '../UIJoyStick';
import { GameMgr, GameStatus } from '../Manager/GameMgr';
import { PropComponent, PropStatus } from './PropComponent';
import { PlayerInfo } from './PlayerInfoComponent';
import { Effect2DUIMgr } from '../Manager/Effect2DUIMgr';
import { AttributeBonusMgr } from '../Manager/AttributeBonusMgr';
import { EasyControllerEvent } from 'db://assets/core_tgx/easy_controller/EasyController';
const { ccclass, property } = _decorator;

const rotateSpeed = 500;
export enum PlayerStatus {
    LIFE,
    DIE
}

/** 龙卷风组件*/
@ccclass('TornadoComponent')
export class TornadoComponent extends Component {

    points: Node[] = [];
    tornado: Node = null!;
    rigidBody: RigidBody = null!;
    tigger: BoxCollider = null!; //龙卷风触发器
    radiusTigger: CylinderCollider = null!;     //龙卷风半径检测触发器

    ai: boolean = false;
    attack: number = 20;
    speed: number = 50;
    currentExp: number = 0;
    height: number = 0; //龙卷风高度
    currentLv: number = 1;
    giveExp: number = 10; //被吃掉给予经验
    nextExp: number = 100;
    nickName: string = null;
    playerStatus: PlayerStatus = PlayerStatus.LIFE;
    playerInfo: PlayerInfo = null;
    isColliding: boolean = false;
    //当前攻击的道具或玩家
    curHitObj: Node = null;
    _attackInterval: number = 0.5; // 攻击间隔
    _lastAttackTime: Map<string, number> = new Map(); // 记录上次攻击时间
    attributeBonusMgr: AttributeBonusMgr = null;

    protected start(): void {
        this.initPlayer();
        this.initilizeUI();
        this.registerEvent();
        this.changeStatus(PlayerStatus.LIFE);
    }

    protected initilizeUI(): void {
        if (!this.node) return;

        this.tornado = this.node.getChildByName('RigibodyStorm')!;
        this.rigidBody = this.tornado.getComponent(RigidBody)!;
        this.tigger = this.tornado.getComponent(BoxCollider)!;
        this.radiusTigger = this.node.getChildByName('radiusTigger').getComponent(CylinderCollider)!;

        this.tigger.on('onTriggerEnter', this.onTriggerEnter, this);
        this.tigger.on('onTriggerStay', this.onTriggerStay, this);
        this.tigger.on('onTriggerExit', this.onTriggerExit, this);
    }

    protected initPlayer() {
        this.attributeBonusMgr = AttributeBonusMgr.inst;
        const userModel = this.attributeBonusMgr.userModel;

        this.currentLv = 2;
        this.currentExp = 0;
        this.nextExp = this.attributeBonusMgr.getExpNeed(this.currentLv + 1);
        this.attack = this.attributeBonusMgr.getStormSunderAttack(this.currentLv);
        this.speed = this.attributeBonusMgr.getStormSunderSpeed(this.currentLv);
        this.nickName = userModel.nickName;
        this.height = userModel.game_tornado_base_height;
        this.speed = Math.round((this.speed / 2) * 100) / 100;
        this.speed = this.speed * 1.2;//测试

        console.log(`玩家的速度:${this.speed}`);
        this.playerInfo = {
            nickName: this.nickName,
            level: this.currentLv,
        }

        this.node.setScale(1, 1, 1);
        this.updateCameraView();
    }

    protected registerEvent() {
        EventDispatcher.instance.on(GameEvent.EVENT_STORM_LEVEL_UP, this.stormLevelUp, this);
        EventDispatcher.instance.on(GameEvent.EVENT_GAME_START_EFFECT, this.onGambitEffect, this);
    }

    protected onTriggerEnter(event: ITriggerEvent): void {
        if (GameMgr.inst.gameStatus !== GameStatus.Playing) return;
        const otherCollider = event.otherCollider;

        if (event.otherCollider.getGroup() === 1 << 2) {
            this.setPositionByObstacle(event);
        }
    }

    protected setPositionByObstacle(event: ITriggerEvent, cb?: Function) {
        // console.log('离开碰撞物 isColliding:', this.isColliding);
        if (this.isColliding) return; // 防止重复触发

        let _originalPosition = this.node.position.clone();
        this.isColliding = true;
        _originalPosition = this.node.position.clone(); // 记录碰撞前坐标

        // 计算反方向移动（保持Y轴不变）
        const reverseDirection = this.calculateReverseDirection(event);
        const newPosition = _originalPosition.add(reverseDirection);

        // 直接修改坐标
        this.node.setPosition(newPosition);

        setTimeout(() => {
            this.isColliding = false;
            if (cb) cb();
        }, 500);
    }

    // 计算反方向（基于障碍物位置）
    protected calculateReverseDirection(event: ITriggerEvent): Vec3 {
        // 获取障碍物节点位置
        const obstaclePos = event.otherCollider.node.worldPosition;
        const selfPos = this.node.worldPosition;

        // 计算方向向量（从障碍物指向自己）
        const direction = new Vec3(
            selfPos.x - obstaclePos.x,
            0, // Y轴保持0
            selfPos.z - obstaclePos.z
        );

        // 归一化并乘以反冲距离
        return direction.normalize().multiplyScalar(7);
    }

    protected onTriggerStay(event: ITriggerEvent): void {
        if (GameMgr.inst.gameStatus !== GameStatus.Playing) return;

        const otherCollider = event.otherCollider;

        //攻击道具
        if (otherCollider.getGroup() == 1 << 4) {
            this.curHitObj = otherCollider.node;

            if (!this.curHitObj.getComponent(PropComponent)) return;
            const propComponent = this.curHitObj.getComponent(PropComponent);

            const currentTime = game.totalTime;
            const nodeId = otherCollider.node.uuid;
            const lastTime = this._lastAttackTime.get(nodeId) || 0;

            // 检查是否达到攻击间隔
            if (currentTime - lastTime >= this._attackInterval * 1000) {
                this._lastAttackTime.set(nodeId, currentTime);

                if (propComponent.status == PropStatus.DIE) return
                // 造成伤害
                propComponent.hurt(this.attack);

                // 检查道具是否被摧毁
                if (propComponent.currentHp <= 0) {
                    // 在龙卷风附近随机位置创建吸收点
                    const randomOffset = new Vec3(
                        (Math.random() - 0.5) * 1, // -1 到 1 之间的随机值
                        0,
                        (Math.random() - 0.5) * 1
                    );

                    // 保存道具原始缩放
                    const originalScale = otherCollider.node.scale.clone();

                    // 将道具添加到龙卷风节点下
                    otherCollider.node.parent = this.node;
                    otherCollider.node.setPosition(randomOffset);

                    // 计算抵消父节点scale的缩放值
                    const parentScale = this.node.scale;
                    const compensateScale = new Vec3(
                        originalScale.x / parentScale.x,
                        originalScale.y / parentScale.y,
                        originalScale.z / parentScale.z
                    );
                    otherCollider.node.setScale(compensateScale);

                    propComponent.swallow(this.node);
                    this.addExpByKill();
                }
            }
        } else if (otherCollider.getGroup() == 1 << 3) {
            const targetTornado = otherCollider.node.parent.getComponent(TornadoComponent);
            if (!targetTornado) return;

            if (event.selfCollider.node.name == 'RigibodyStorm') {
                if (event.otherCollider.node.name == 'RigibodyStorm') {
                    console.log('碰撞到其他龙卷风碰撞器!!!!');
                    const distance = Vec3.distance(event.selfCollider.node.worldPosition, otherCollider.node.worldPosition);
                    // console.log(`龙卷风之间 distance:${distance}`);
                    if (distance <= 2) {
                        if (this.currentLv > targetTornado.currentLv) {
                            // console.log(`玩家等级:${this.currentLv}  大于  targetTornado等级:${targetTornado.currentLv}`);
                            StormSunderAudioMgr.playOneShot(StormSunderAudioMgr.getMusicIdName(5), 1.0);
                            this.curHitObj = targetTornado.node;
                            this.addExpByKill();
                            this.killed(targetTornado.node);

                            Effect2DUIMgr.inst.addPKInfo(this.nickName, targetTornado.nickName);
                        }
                    }
                }
            }
        }
    }

    //被击杀
    async killed(targetNode: Node) {
        const targetTornado = targetNode.getComponent(TornadoComponent);
        if (targetTornado && !targetTornado.ai) {
            // 如果是玩家被击杀，只隐藏节点
            targetNode.active = false;
        } else {
            // 如果是AI被击杀，移除并销毁节点
            targetNode.removeFromParent();
            targetNode.destroy();
        }
        Effect2DUIMgr.inst.removePlayerInfo(targetNode);
    }

    onTriggerExit(event: ITriggerEvent) {
        if (event.otherCollider.getGroup() == 1 << 4) {
            this.curHitObj = null;
        }
    }

    protected update(deltaTime: number) {
        if (GameMgr.inst.gameStatus != GameStatus.Playing) return;

        this.onMoveHandler();
        this.onRotateHandler();
        this.onPlayerInfoHandler();
    }

    protected onPlayerInfoHandler() {
        if (!this.node || !this.playerInfo) return;
        Effect2DUIMgr.inst.addPlayerInfo(this.node, this.playerInfo);
    }

    onRotateHandler(): void {
        this.node.eulerAngles = new Vec3(this.node.eulerAngles.x, this.node.eulerAngles.y + rotateSpeed * game.deltaTime, this.node.eulerAngles.z);
    }

    onMoveHandler(): void {
        if (this.isColliding || this.ai) return;

        const playerDir = UIJoyStick.ins.dir;
        const playerX = playerDir.x * this.speed * game.deltaTime;
        const playerZ = playerDir.y * this.speed * game.deltaTime;

        this.node.setPosition(this.node.position.x + playerX, 0, this.node.position.z - playerZ);
    }

    protected addExpByKill(isAI?: boolean) {
        if (!this.curHitObj) return;

        const propComp = this.curHitObj.getComponent(PropComponent);
        let objExp = 0;
        if (propComp) {
            objExp = propComp.currentExp;
        } else {
            const lv = this.curHitObj.getComponent(TornadoComponent).currentLv;
            objExp = AttributeBonusMgr.inst.getStormSunderExp(lv);
        }

        objExp = AttributeBonusMgr.inst.getStormSunderExp(objExp);
        const finialExp = AttributeBonusMgr.inst.getExpBonus(objExp, isAI);
        this.currentExp += finialExp;
        this.height += finialExp * AttributeBonusMgr.inst.userModel.game_exp_height;
        Effect2DUIMgr.inst.addExpProp(this.node, finialExp);

        if (this.currentExp >= this.nextExp) {
            this.currentLv++;
            this.playerInfo.level = this.currentLv;
            this.stormLevelUp();
            this.grow();
            Effect2DUIMgr.inst.updatePlayerInfo(this.node, this.playerInfo);
        }

        EventDispatcher.instance.emit(GameEvent.EVENT_REFRESH_RANK);

        if (!isAI) {
            EventDispatcher.instance.emit(GameEvent.EVENT_UPDATE_USER_EXP, [this.currentExp, this.nextExp]);
        }
    }

    private stormLevelUp() {
        const attributeBonusMgr = AttributeBonusMgr.inst;
        this.nextExp = attributeBonusMgr.getExpNeed(this.currentLv + 1);
        this.attack = attributeBonusMgr.getStormSunderAttack(this.currentLv);
        this.speed = attributeBonusMgr.getStormSunderSpeed(this.currentLv);
        this.speed = Math.round((this.speed / 2) * 100) / 100;
        this.currentExp = 0;

        Effect2DUIMgr.inst.addLevelUp(this.node);
    }

    //变大体积
    private grow() {
        //体积=基础体积×（1+等级×百分比）
        const baseSize = 1;
        const growMultiple = AttributeBonusMgr.inst.userModel.game_lv_modleVolume_up; //升级体积 百分比系数
        const percentage = growMultiple / 100;
        const growSize = baseSize + (1 + this.currentLv * percentage);
        this.node.setScale(growSize, growSize, growSize);
        // console.log('growSize:', growSize);
        this.updateCameraView();
    }

    //开局特效
    private onGambitEffect() {
        const multiple: number = AttributeBonusMgr.inst.userModel.game_tornado_damage;
        const scaleFactor = multiple / 100;
        const size = this.tigger.size;
        this.tigger.size = new Vec3(size.x + size.x * scaleFactor, size.y + size.y * scaleFactor, size.z + size.z * scaleFactor);
        // console.log(`龙卷风碰撞 开局特效启动 最新size:${this.tigger.size}}`);
    }

    private updateCameraView() {
        const sence = director.getScene();
        const view = 50 + this.currentLv * 1;
        sence.emit(EasyControllerEvent.CAMERA_ZOOM, view);
    }

    private changeStatus(status: PlayerStatus) {
        this.playerStatus = status;
    }

    protected onDestroy(): void {
        this.unregisterEvent();
    }

    protected unregisterEvent() {
        EventDispatcher.instance.off(GameEvent.EVENT_STORM_LEVEL_UP, this.stormLevelUp, this);
        EventDispatcher.instance.off(GameEvent.EVENT_GAME_START_EFFECT, this.onGambitEffect, this);

        this.tigger.off('onTriggerEnter', this.onTriggerEnter, this);
        this.tigger.off('onTriggerStay', this.onTriggerStay, this);
        this.tigger.off('onTriggerExit', this.onTriggerExit, this);
    }

}
