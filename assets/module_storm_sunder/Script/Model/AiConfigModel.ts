import { Tableai_config } from "db://assets/module_basic/table/Tableai_config";
/**
 * AI配置数据
*/
export class AiConfigModel {

    constructor() {
    }

    getAIConfigById(id: number) {
        const config = new Tableai_config();
        config.init(id);
        return config;
    }
}