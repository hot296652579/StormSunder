
import { JsonUtil } from "db://assets/core_tgx/base/utils/JsonUtil";

export class Tabledevelop_config {
    static TableName: string = "develop_config";

    private data: any;

    init(id: number) {
        const table = JsonUtil.get(Tabledevelop_config.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 属性类型 */
    get property_type(): number {
        return this.data.property_type;
    }
    /** 属性基础值 */
    get base(): number {
        return this.data.base;
    }
    /** 属性提升值 */
    get up_value(): number {
        return this.data.up_value;
    }
    /** 升级基础货币 */
    get base_currency(): number {
        return this.data.base_currency;
    }
    /** 货币增长 */
    get money_growth(): number {
        return this.data.money_growth;
    }
}
    