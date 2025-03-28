
import { JsonUtil } from "db://assets/core_tgx/base/utils/JsonUtil";

export class Tablename_config {
    static TableName: string = "name_config";

    private data: any;

    init(id: number) {
        const table = JsonUtil.get(Tablename_config.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 名字前缀 */
    get text_1(): string {
        return this.data.text_1;
    }
    /** 名字后缀 */
    get text_2(): string {
        return this.data.text_2;
    }
}
    