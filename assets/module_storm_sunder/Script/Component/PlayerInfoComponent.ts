import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

/** 玩家信息
 * @description 玩家信息接口
 * @param nickName 昵称
 * @param level 等级
 * @param exp 经验值
*/
export interface PlayerInfo {
    nickName: string,
    level: number,
    exp?: number,
}

@ccclass('PlayerInfoComponent')
export class PlayerInfoComponent extends Component {

    @property(Label)
    nickNameLabel: Label = null!;

    @property(Label)
    levelLabel: Label = null!;

    start() {

    }

    updateInfo(info: PlayerInfo) {
        // 更新玩家信息
        this.nickNameLabel.string = info.nickName;
        this.levelLabel.string = `LV: ${info.level}`;
    }

}


