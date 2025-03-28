
import { JsonUtil } from "db://assets/core_tgx/base/utils/JsonUtil";

export class Tableai_config {
    static TableName: string = "ai_config";

    private data: any;

    init(id: number) {
        const table = JsonUtil.get(Tableai_config.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 备注 */
    get text(): string {
        return this.data.text;
    }
    /** 检测半径 */
    get range(): number {
        return this.data.range;
    }
    /** 移动概率 */
    get move_judge(): number {
        return this.data.move_judge;
    }
    /** 移动周期 */
    get move_time(): any {
        return this.data.move_time;
    }
    /** 逃跑周期 */
    get escape_time(): any {
        return this.data.escape_time;
    }
    /** 追击概率 */
    get pursuit_1(): number {
        return this.data.pursuit_1;
    }
    /** 二次判读追击概率 */
    get pursuit_2(): number {
        return this.data.pursuit_2;
    }
    /** 追击周期 */
    get pursuit_time(): any {
        return this.data.pursuit_time;
    }
    /** 匹配权重 */
    get weight(): number {
        return this.data.weight;
    }
}
    