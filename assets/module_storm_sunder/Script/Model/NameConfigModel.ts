import { Tablename_config } from "db://assets/module_basic/table/Tablename_config";

/**main 配置表模型 */
export class NameConfigModel {

    config: Tablename_config = null!;

    constructor() {
        this.config = new Tablename_config();
    }

    getPramById(id: number) {
        this.config.init(id);
        return this.config;
    }

    getText1() {
        return this.config.text_1;
    }

    getText2() {
        return this.config.text_2;
    }
}