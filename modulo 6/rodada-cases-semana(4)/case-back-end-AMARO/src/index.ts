import {app} from "./app"
import ProductBusiness from "./business/ProductBusiness"
import ProductController from "./controller/ProductController"
import ProductDataBase from "./data/ProductDataBase"
import { IdGenerator } from "./services/idGenerator"

const productController = new ProductController(
    new ProductBusiness(
        new ProductDataBase(),
        new IdGenerator()
    )
)
app.post("/product", productController.postProduct)
app.get("/product", productController.getProducts)
