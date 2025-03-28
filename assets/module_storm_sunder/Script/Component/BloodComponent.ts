import { _decorator, Component, Node, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BloodComponent')
export class BloodComponent extends Component {
    @property(ProgressBar)
    progressBar: ProgressBar = null!;

    start() {

    }

    updateHP(progress: number) {
        if (progress < 0) progress = 0;
        this.progressBar.progress = progress;
    }
}


