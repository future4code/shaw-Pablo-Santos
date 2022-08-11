import ProductDataBase from "../data/ProductDataBase";
import { GetProductDTO } from "../models/GetProductDTO";
import { ProductDTO } from "../models/PoductDTO";
import { PostProductDTO } from "../models/PostProductDTO";
import { TagsDTO } from "../models/TagsDTO";
import { IdGenerator } from "../services/idGenerator";


class ProductBusiness {
    constructor(
        private productDataBase: ProductDataBase,
        private idGenerator: IdGenerator
    ) { }

    public postProduct = async (product: PostProductDTO) => {
        try {
            const { name, tags } = product

            if (!name || tags.length === 0) {
                throw new Error("Todos os campos devem ser preechidos.")
            }
            if (typeof name !== "string") {
                throw new Error("Nome deve ser do tipo string.")
            }
            if (!(Array.isArray(tags))) {
                throw new Error("Tags tem que ser do tipo Array.")
            }

            const id = this.idGenerator.generateID()
            const newProduct: ProductDTO = { id, name }

            const newTags: TagsDTO[] = tags.map((tag: string) => {
                const id: string = this.idGenerator.generateID()
                return { id, tags: tag }
            })

            await this.productDataBase.insertProduct(newProduct, newTags)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };

    public getProducts = async (options: GetProductDTO): Promise<ProductDTO[]> => {
        try {
            const { id, name, tags } = options

            if (!id && !name && !tags) {
                throw new Error("At least one of the fields is mandatory: 'id', 'name', 'tag'.");
            }

            const newId = id === undefined ? "Undefined" : id
            const newName = name === undefined ? "Undefined" : name
            const newTag = tags === undefined ? "Undefined" : tags

            const products = await this.productDataBase.selectProduct(newId, newName, newTag)


            // filtra apenas o produto de key unica  ou id unico

            const productsObject: { [key: string]: ProductDTO } = {}
            for (const produto of products) {
                if(!productsObject[produto.id]){
                    productsObject[produto.id] = produto
                }
            }
        
            return Object.values(productsObject)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
}


export default ProductBusiness