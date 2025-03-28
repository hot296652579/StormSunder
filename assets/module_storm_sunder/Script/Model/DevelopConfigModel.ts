import { Tabledevelop_config } from "db://assets/module_basic/table/Tabledevelop_config";
/**
 * 外部配置数据
*/
export class DevelopConfigModel {

    constructor() {
    }

    getConfigById(id: number) {
        const config = new Tabledevelop_config();
        config.init(id);
        return config;
    }
}