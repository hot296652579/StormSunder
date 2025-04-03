import { _decorator, Button, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Layout_BattleMatch')
export class Layout_BattleMatch extends Component {
    @property(Button)
    btn_match: Button = null;
}


