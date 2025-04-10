
import { JsonUtil } from "db://assets/core_tgx/base/utils/JsonUtil";

export class Tablerefresh_config {
    static TableName: string = "refresh_config";

    private data: any;

    init(id: number) {
        const table = JsonUtil.get(Tablerefresh_config.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 等级浮动 */
    get level_float(): any {
        return this.data.level_float;
    }
}
    