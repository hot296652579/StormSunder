import { Tablemain_config } from "../../../module_basic/table/Tablemain_config";

/**main 配置表模型 */
export class MainConfigModel {

    config: Tablemain_config = null!;

    constructor() {
        this.config = new Tablemain_config();
    }

    getPramById(id: number) {
        this.config.init(id);
        const param = this.config.param;
        return param
    }
}