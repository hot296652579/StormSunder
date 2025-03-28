
import { JsonUtil } from "db://assets/core_tgx/base/utils/JsonUtil";

export class Tableainame_config {
    static TableName: string = "ainame_config";

    private data: any;

    init(id: number) {
        const table = JsonUtil.get(Tableainame_config.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 名字 */
    get text(): string {
        return this.data.text;
    }
}
    