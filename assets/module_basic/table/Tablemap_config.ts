
import { JsonUtil } from "db://assets/core_tgx/base/utils/JsonUtil";

export class Tablemap_config {
    static TableName: string = "map_config";

    private data: any;

    init(id: number) {
        const table = JsonUtil.get(Tablemap_config.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 备注信息 */
    get text(): string {
        return this.data.text;
    }
    /** 游戏时长 */
    get time(): number {
        return this.data.time;
    }
    /** 场景文件 */
    get name(): string {
        return this.data.name;
    }
    /** 可生成物编号 */
    get item(): any {
        return this.data.item;
    }
    /** 玩家数 */
    get number(): number {
        return this.data.number;
    }
}
    