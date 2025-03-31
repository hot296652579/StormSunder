import { _decorator, Button, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Layout_BattleRevive')
export class Layout_BattleRevive extends Component {
    @property(Button)
    btn_revive: Button = null;

    @property(Button)
    btn_back: Button = null;
}


