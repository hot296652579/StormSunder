import { BoxCollider, Component, ITriggerEvent, Node, Tween, Vec3, _decorator, randomRange } from 'cc';
import { PathfindingManager } from '../Manager/PathfindingManager';
import { PlayerStatus, TornadoComponent } from './TornadoComponent';
import { GameUtil } from '../GameUtil';
import { PropMgr } from '../Manager/PropMgr';
import { GameMgr, GameStatus } from '../Manager/GameMgr';
import { PlayerMgr } from '../Manager/PlayerMgr';
import { tgxUIMgr } from 'db://assets/core_tgx/tgx';
import { UI_BattleRevive } from 'db://assets/scripts/UIDef';

const { ccclass, property } = _decorator;

enum BehaviorType {
    Move,
    Collect  //收集最近的道具
}

/** 龙卷风AI组件 */
@ccclass('TornadoAIComponent')
export class TornadoAIComponent extends TornadoComponent {

    moveDuration: number = 3; //移动行为持续时间（秒）
    escapeDuration: number = 5; //逃离行为持续时间（秒）
    chaseDuration: number = 20; //追击行为持续时间（秒）
    chaseAIProbability: number = 0; //是否追击 AI 的概率
    chasePlayerProbability: number = 0; //是否追击玩家的概率

    isChasing: boolean = false; // 是否追击中
    isEscaping: boolean = false; // 是否逃跑中
    targetNode: Node | null = null; // 目标

    moveProbability: number = 0.5; //移动概率
    behaviorType: BehaviorType = BehaviorType.Move; // 行为类型

    protected async start() {
        super.start();
        this.ai = true;

        this.initAIPlayer();
        this.onPlayerInfoHandler();
        this.decideAction(); // 进入行为循环

        this.radiusTigger.on('onTriggerEnter', this.onRadiusTriggerEnter, this);
    }

    private initAIPlayer() {
        const aiConfig = PlayerMgr.inst.getRandomAIConfig();
        // console.log(aiConfig.data);
        //text:名称 range:检测半径 move_juge:移动概率 move_time:移动时间 escape_time:逃跑时间 pursuit_1:追击玩家概率 pursuit_2:追击AI概率 pursuit_time:追击时间
        const { text, range, move_judge, move_time, escape_time, pursuit_1, pursuit_2, pursuit_time } = aiConfig.data;
        this.playerInfo.nickName = text;
        this.nickName = text;
        this.currentLv = 11;
        this.playerInfo.level = this.currentLv;

        this.moveDuration = Math.floor(move_time[0] + Math.random() * (move_time[1] - move_time[0] + 1));
        this.escapeDuration = Math.floor(escape_time[0] + Math.random() * (escape_time[1] - escape_time[0] + 1));
        this.chaseDuration = Math.floor(pursuit_time[0] + Math.random() * (pursuit_time[1] - pursuit_time[0] + 1));
        this.chaseAIProbability = pursuit_1;
        this.chasePlayerProbability = pursuit_2;

        //test 
        this.chasePlayerProbability = 100;
        this.moveProbability = move_judge;

        this.nextExp = this.attributeBonusMgr.getExpNeed(this.currentLv + 1);
        this.attack = this.attributeBonusMgr.getStormSunderAttack(this.currentLv, true);
        this.speed = this.attributeBonusMgr.getStormSunderSpeed(this.currentLv, true);
        this.speed = Math.round((this.speed / 2) * 100) / 100;

        // console.log(`AI 攻击力:${this.attack} 速度:${this.speed} 下一级经验:${this.nextExp}`);
    }

    /** 选择 AI 行为 */
    private decideAction() {
        if (this.playerStatus == PlayerStatus.DIE) return; // AI 死亡时不执行行为

        const move = Math.random() * 100 < this.moveProbability;

        // console.log(`AI 行为判断:移动概率:${this.moveProbability} 是否移动:${move}`);
        if (move) {
            this.randomMove();
        } else {
            const closestItem = PropMgr.inst.getNearestProp(this.node);
            if (closestItem) {
                this.chaseTarget(closestItem);
            } else {
                this.randomMove();
            }
        }
    }

    /** 随机移动 */
    private randomMove() {
        if (this.isChasing || this.isEscaping) return; // 如果正在追击或逃跑，则不进行随机移动

        // 计算最大可移动距离 = 速度 * 持续时间
        const maxDistance = this.speed * this.moveDuration;

        // 随机方向的单位向量
        let randomDirection = new Vec3(randomRange(-1, 1), 0, randomRange(-1, 1));
        randomDirection.normalize(); // 归一化，保持方向不变但长度为 1

        // 计算最终的移动向量
        randomDirection.multiplyScalar(maxDistance);

        const targetPosition = this.node.position.clone().add(randomDirection);

        PathfindingManager.getInstance().moveTo(this.node, targetPosition, this.moveDuration);
        // console.log(`AI 触发随机移动行为!`, targetPosition);

        this.scheduleOnce(() => {
            if (!this.isChasing && !this.isEscaping) { // 再次检查状态，避免重复调用
                this.decideAction();
            }
        }, this.moveDuration);
    }

    protected onTriggerEnter(event: ITriggerEvent): void {
        if (event.otherCollider.getGroup() === 1 << 2) {
            this.unscheduleAllCallbacks();
            this.isChasing = false;
            this.isEscaping = false;
            this.targetNode = null;
            Tween.stopAllByTarget(this.node);

            this.setPositionByObstacle(event, () => {
                this.decideAction();
            });
        }
    }

    protected onTriggerStay(event: ITriggerEvent): void {
        super.onTriggerStay(event);
        const otherCollider = event.otherCollider;

        if (otherCollider.getGroup() == 1 << 3) {
            const targetTornado = otherCollider.node.parent.getComponent(TornadoComponent);
            if (!targetTornado) return;

            const isPlayer = targetTornado instanceof TornadoComponent;
            if (this.currentLv > targetTornado.currentLv && isPlayer) {
                GameMgr.inst.isWin = false;
                GameMgr.inst.setGameStatus(GameStatus.Revive);
            }
        }
    }

    protected addExpByKill() {
        super.addExpByKill(true);
        // console.log(`AI 当前经验:${this.currentExp}`);
    }

    /** 触发器检测（过程中遇到其他龙卷风） */
    protected onRadiusTriggerEnter(event: ITriggerEvent): void {
        const otherCollider = event.otherCollider;
        const otherNode = otherCollider.node;

        if (event.otherCollider.getGroup() == 1 << 3) {
            const targetTornado = otherNode.parent.getComponent(TornadoComponent);
            if (!targetTornado) return;

            const isTargetAI = targetTornado instanceof TornadoAIComponent;
            const targetLv = targetTornado.currentLv;

            if (targetLv > this.currentLv) {
                // 目标等级比自己高 → 逃跑
                this.escapeFrom(targetTornado.node);
            } else if (targetLv < this.currentLv) {
                // 目标等级比自己低 → 先判断是否追击
                if (Math.random() * 100 < this.chaseAIProbability) {
                    if (isTargetAI) {
                        // 目标是 AI，直接追击
                        this.chaseTarget(targetTornado.node);
                    } else {
                        // 目标是玩家，进一步判断是否追击
                        if (Math.random() * 100 < this.chasePlayerProbability) {
                            this.chaseTarget(targetTornado.node);
                        } else {
                            // 不追击，则保持当前行为到持续时间结束
                            this.continueCurrentBehavior();
                        }
                    }
                } else {
                    // 不追击，持续当前行为直到时间结束
                    this.continueCurrentBehavior();
                }
            }
            // 如果等级相同，继续当前行为
        }
    }

    /** 继续当前行为直到时间结束 */
    private continueCurrentBehavior() {
        this.scheduleOnce(() => {
            this.decideAction();
        }, this.moveDuration);
    }

    /** 追击目标 */
    private chaseTarget(target: Node) {
        if (this.isChasing) return;
        // console.log(`AI 追击目标->>>>>>>>>>>>>`);

        this.isChasing = true;
        this.targetNode = target;

        PathfindingManager.getInstance().followTarget(this, target, this.speed, () => {
            // console.log(`AI 追击目标到达`);
            this.unscheduleAllCallbacks();
            this.isChasing = false;
            this.targetNode = null;
            this.decideAction();
        });

        // 追击时间结束后恢复行为
        this.scheduleOnce(() => {
            this.isChasing = false;
            this.targetNode = null;
            this.decideAction();
        }, this.chaseDuration);
    }

    /** 逃离目标 */
    private escapeFrom(target: Node) {
        this.isEscaping = true;
        // console.log(`AI 逃离行为->>>>>>>>>>>>>>`);

        // 计算最大可逃离距离 = 速度 * 持续时间
        const maxDistance = this.speed * this.escapeDuration;

        // 计算逃离方向，指向目标的反方向
        const targetPos = new Vec3(target.position.x, 0, target.position.z);
        const direction = this.node.position.clone().subtract(targetPos).normalize().multiplyScalar(maxDistance);
        const escapePosition = this.node.position.clone().add(direction);

        PathfindingManager.getInstance().moveTo(this.node, escapePosition, this.escapeDuration);

        this.scheduleOnce(() => {
            this.isEscaping = false;
            this.decideAction();
        }, this.escapeDuration);
    }

}
