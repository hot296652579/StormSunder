
import { JsonUtil } from "db://assets/core_tgx/base/utils/JsonUtil";

export class Tableitem_config {
    static TableName: string = "item_config";

    private data: any;

    init(id: number) {
        const table = JsonUtil.get(Tableitem_config.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 备注 */
    get name(): string {
        return this.data.name;
    }
    /** 模型 */
    get model(): string {
        return this.data.model;
    }
    /** 是否移动 */
    get move(): number {
        return this.data.move;
    }
    /** 移动速度 */
    get speed(): number {
        return this.data.speed;
    }
    /** 移动概率 */
    get move_judge(): number {
        return this.data.move_judge;
    }
    /** 行为周期 */
    get time(): any {
        return this.data.time;
    }
    /** 是否再生 */
    get regeneration(): number {
        return this.data.regeneration;
    }
    /** 初始生成数量 */
    get number_basic(): number {
        return this.data.number_basic;
    }
    /** 再生周期 */
    get regeneration_time(): any {
        return this.data.regeneration_time;
    }
    /** 再生数量 */
    get regeneration_number(): any {
        return this.data.regeneration_number;
    }
    /** 数量上限 */
    get limit(): number {
        return this.data.limit;
    }
    /** 血量 */
    get hp(): number {
        return this.data.hp;
    }
    /** 经验 */
    get exp(): number {
        return this.data.exp;
    }
}
    