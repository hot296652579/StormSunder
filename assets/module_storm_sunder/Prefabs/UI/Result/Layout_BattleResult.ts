import { _decorator, Button, Component, Label, Node, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Layout_BattleResult')
export class Layout_BattleResult extends Component {
    @property(Button)
    btNextAd: Button;

    @property(Button)
    btGet: Button;

    @property(Button)
    btRestart: Button;

    @property(Node)
    light: Node;

    @property(Node)
    winNode: Node;

    @property(Node)
    loseNode: Node;

    @property(Label)
    lbUserRank: Label;

    @property(Label)
    lbReward: Label;

    @property(Label)
    lbMultiple: Label;

    @property(Label)
    lbGet: Label;
}