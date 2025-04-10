import { BoxCollider, Button, Collider, Component, ConeCollider, CylinderCollider, ITriggerEvent, Label, Node, NodeEventType, ParticleSystem, RigidBody, SphereCollider, Vec3, _decorator, director, find, game } from 'cc';
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
    particleSystem: ParticleSystem = null!;

    lvlUpParticleSystem: ParticleSystem = null!;
    killParticleSystem: ParticleSystem = null!;

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
        this.particleSystem = this.node.getChildByName('Main')!.getComponent(ParticleSystem)!;
        this.lvlUpParticleSystem = this.node.getChildByName('LevelParticle')!.getComponent(ParticleSystem)!;
        this.killParticleSystem = this.node.getChildByName('KillParticle')!.getComponent(ParticleSystem)!;
        this.rigidBody = this.tornado.getComponent(RigidBody)!;
        this.tigger = this.tornado.getComponent(BoxCollider)!;
        this.radiusTigger = this.node.getChildByName('radiusTigger').getComponent(CylinderCollider)!;

        // 初始化刚体设置
        this.initializeRigidBody();

        this.tigger.on('onTriggerEnter', this.onTriggerEnter, this);
        this.tigger.on('onTriggerStay', this.onTriggerStay, this);
        this.tigger.on('onTriggerExit', this.onTriggerExit, this);
        EventDispatcher.instance.on(GameEvent.EVENT_STORM_RESET, this.onStormReset, this);
    }

    private initializeRigidBody(): void {
        if (!this.rigidBody) return;

        // 启用连续碰撞检测
        this.rigidBody.useCCD = true;
        // 设置合适的物理参数
        this.rigidBody.allowSleep = false;  // 防止刚体休眠
        // 确保刚体能够正确进行碰撞检测
        this.rigidBody.isKinematic = false;
        this.rigidBody.useGravity = false;
        // 设置较低的线性阻尼以确保平滑移动
        this.rigidBody.linearDamping = 0.1;
    }

    protected initPlayer() {
        this.attributeBonusMgr = AttributeBonusMgr.inst;
        const userModel = this.attributeBonusMgr.userModel;

        this.currentLv = 1;
        this.currentExp = 0;
        this.nextExp = this.attributeBonusMgr.getExpNeed(this.currentLv + 1);
        this.attack = this.attributeBonusMgr.getStormSunderAttack(this.currentLv);
        this.speed = this.attributeBonusMgr.getStormSunderSpeed(this.currentLv);
        this.nickName = userModel.nickName;
        this.height = userModel.game_tornado_base_height;
        this.speed = Math.round((this.speed / 2) * 100) / 100;
        // this.speed = this.speed * 1.8;//测试

        // console.log(`玩家的速度:${this.speed}`);
        this.playerInfo = {
            nickName: this.nickName,
            level: this.currentLv,
        }

        // this.node.setScale(1, 1, 1);
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
        } else if (event.otherCollider.getGroup() === 1 << 3) {
            const targetTornado = otherCollider.node.parent.getComponent(TornadoComponent);
            if (!targetTornado) return;

            if (event.selfCollider.node.name == 'RigibodyStorm') {
                if (event.otherCollider.node.name == 'RigibodyStorm') {
                    if (this.currentLv > targetTornado.currentLv) {
                        this.killParticleSystem.play();
                        this.onKilledHandler(targetTornado);
                    }
                }
            }
        }
    }

    protected onKilledHandler(targetTornado: TornadoComponent) {
        if (!this.ai) {
            StormSunderAudioMgr.playOneShot(StormSunderAudioMgr.getMusicIdName(5), 1.0);
        }

        this.curHitObj = targetTornado.node;
        this.addExpByKill();
        this.killed(targetTornado.node);
        Effect2DUIMgr.inst.addPKInfo(this.nickName, targetTornado.nickName);
    }

    protected setPositionByObstacle(event: ITriggerEvent, cb?: Function) {
        if (this.isColliding) return; // 防止重复触发

        let _originalPosition = this.node.position.clone();
        this.isColliding = true;
        _originalPosition = this.node.position.clone(); // 记录碰撞前坐标

        // 计算反方向移动（保持Y轴不变）
        const reverseDirection = this.calculateReverseDirection(event);
        const newPosition = _originalPosition.add(reverseDirection);

        // 直接修改坐标
        this.node.setPosition(newPosition);

        // 增加碰撞状态的持续时间，确保有足够时间完成反弹
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
            selfPos.y - obstaclePos.y,
            selfPos.z - obstaclePos.z
        );

        // 归一化并乘以反冲距离
        return direction.normalize().multiplyScalar(1);
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
                propComponent.hurt(this.attack, this.ai);

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
        } else if (otherCollider.getGroup() === 1 << 2) { // 处理障碍物持续碰撞
            // 如果正在碰撞中，直接返回
            if (this.isColliding) return;
            this.setPositionByObstacle(event);
        }
    }

    //被击杀
    async killed(targetNode: Node) {
        const targetTornado = targetNode.getComponent(TornadoComponent);
        if (targetTornado && !targetTornado.ai) {
            // 如果是玩家被击杀，只隐藏节点
            // targetNode.active = false;
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
        // 如果正在碰撞中，完全阻止移动
        if (this.isColliding) {
            return;
        }

        if (this.ai) return;

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

        const finialExp = AttributeBonusMgr.inst.getExpBonus(objExp, isAI).toFixed(1);
        this.currentExp += Number(finialExp)
        this.height += Math.floor(Number(finialExp) * AttributeBonusMgr.inst.userModel.game_exp_height);
        Effect2DUIMgr.inst.addExpProp(this.node, Number(finialExp));

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
        this.lvlUpParticleSystem.play();
        const attributeBonusMgr = AttributeBonusMgr.inst;
        this.nextExp = attributeBonusMgr.getExpNeed(this.currentLv + 1);
        this.attack = attributeBonusMgr.getStormSunderAttack(this.currentLv);
        this.speed = attributeBonusMgr.getStormSunderSpeed(this.currentLv);
        this.speed = Math.round((this.speed / 2) * 100) / 100;
        // this.speed = this.speed * 1.8;//测试
        this.currentExp = 0;

        Effect2DUIMgr.inst.addLevelUp(this.node);
    }

    private onStormReset() {
        if (!this.particleSystem) return;
        this.particleSystem.startSizeX.constantMax = 1;
        this.particleSystem.startLifetime.constantMax = 0.6;
        this.currentLv = 1;
        this.tigger.size = new Vec3(1.3, 2.5, 1.4);
    }

    //变大体积
    private grow() {
        //体积=基础体积×（1+等级×百分比）
        const baseSize = 1;
        const growMultiple = AttributeBonusMgr.inst.userModel.game_lv_modleVolume_up; //升级体积 百分比系数
        const percentage = (growMultiple / 100).toFixed(1);
        const growSize = baseSize + (1 + this.currentLv * Number(percentage));
        // this.node.setScale(growSize, growSize, growSize);
        this.particleSystem.startSizeX.constantMax += 1;
        this.particleSystem.startLifetime.constantMax += 0.2;
        this.onGambitEffect();
        // console.log('growSize:', growSize);
        this.updateCameraView();
    }

    //刚体扩大特效
    private onGambitEffect() {
        const multiple: number = AttributeBonusMgr.inst.userModel.game_tornado_damage;
        const scaleFactor = Number((multiple / 100).toFixed(1));
        const size = this.tigger.size;

        let sizeX = size.x + size.x * scaleFactor;
        if (sizeX >= 25) sizeX = 25;
        let sizeY = size.y + size.y * scaleFactor;
        if (sizeY >= 65) sizeY = 65;
        let sizeZ = size.z + size.z * scaleFactor;
        if (sizeZ >= 25) sizeZ = 25;

        this.tigger.size = new Vec3(sizeX, sizeY, sizeZ);
        console.log('tigger size:', this.tigger.size, 'scaleFactor:', scaleFactor);
    }

    private updateCameraView() {
        if (this.ai) return;
        const sence = director.getScene();
        const view = 30 + this.currentLv * 2;
        // console.log(`视野范围:${view}`);
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
