import { Request, Response } from "express";
import { PostProductDTO } from "../models/PostProductDTO"
import ProductBusiness from "../business/ProductBusiness"

class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) { }
    public postProduct = async (req: Request, res: Response) => {
        try {
            const { name, tags } = req.body
            const product: PostProductDTO = { name, tags }

            await this.productBusiness.postProduct(product)
            res.status(201).send("Produto inserido com sucesso")

        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }
    };

    public getProducts = async (req: Request, res: Response) => {
        try {
            const id = req.query.id as string
            const name = req.query.name as string
            const tags = req.query.tags as string

            const options = { id, name, tags }

            const products = await this.productBusiness.getProducts(options)
            res.status(200).send({ products })

        } catch (error: any) {
            res.status(400).send({ error: error.message })
        }

    }

}
export default ProductController
