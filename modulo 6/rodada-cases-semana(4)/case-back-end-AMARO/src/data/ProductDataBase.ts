import { ProductDTO } from "../models/PoductDTO";
import { TagsDTO } from "../models/TagsDTO";
import { BaseDataBase } from "./BaseDataBase";

class ProductDataBase extends BaseDataBase {
    protected PRODUCT_TABLE = 'Product_Name_AMARO'
    protected TAG_TABLE = 'Product_Tags_AMARO'


    insertProduct = async (newProduct: ProductDTO, newTags: TagsDTO[]): Promise<void> => {
        try {
            await this.connection(this.PRODUCT_TABLE).insert(newProduct)
            for (const tag of newTags) {
                await this.connection(this.TAG_TABLE).insert({
                    id: tag.id,
                    tags: tag.tags,
                    name_id: newProduct.id
                })
            };
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    selectProduct = async (id: string, name: string, tags: string): Promise<ProductDTO[]> => {
        try {
            const result: ProductDTO[] = await this.connection(this.PRODUCT_TABLE)
                .select(`${this.PRODUCT_TABLE}. id as id`, `${this.PRODUCT_TABLE}.name as name`)
                .leftJoin(`${this.TAG_TABLE}`, `${this.TAG_TABLE}.name_id`, `${this.PRODUCT_TABLE}.id`)
                .where(`${this.PRODUCT_TABLE}.id`, id)
                .orWhere(`${this.PRODUCT_TABLE}.name`, "like", `%${name}%`)
                .orWhere(`${this.TAG_TABLE}.tags`, "like", `%${tags}%`)
              
            return result


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    };

}
export default ProductDataBase