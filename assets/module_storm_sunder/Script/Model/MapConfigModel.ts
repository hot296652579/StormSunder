import { Tablemap_config } from "db://assets/module_basic/table/Tablemap_config";
import { Tablemain_config } from "../../../module_basic/table/Tablemain_config";

/**map 配置表模型 */
export class MapConfigModel {

    config: Tablemap_config = null!;

    constructor() {
        this.config = new Tablemap_config();
    }

    getPramById(id: number) {
        this.config.init(id);
        const param = this.config;
        return param
    }
}