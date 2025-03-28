import { _decorator, BoxCollider2D, Button, CircleCollider2D, Collider2D, Component, find, instantiate, Node, NodeEventType, tween, view, Vec3, mat4, UITransform, Label } from 'cc';
import { tgxUIAlert, tgxUIMgr, tgxUITips } from '../../core_tgx/tgx';

import { GtagMgr, GtagType } from '../../core_tgx/base/GtagMgr';
import { GlobalConfig } from '../../start/Config/GlobalConfig';
import { AdvertMgr } from '../../core_tgx/base/ad/AdvertMgr';
const { ccclass, property } = _decorator;

@ccclass('LevelAction')
export class LevelAction extends Component {
    static instance: LevelAction; // 添加静态实例

    onLoad() {
        LevelAction.instance = this;
    }

    start() {
        this.registerListener();
        this.reportInformation();

    }

    //上报信息
    reportInformation() {

    }

    onDestroy() {
        this.unregisterListener();
    }

    registerListener() {

    }

    unregisterListener() {

    }
}

