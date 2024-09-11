import express from "express";
import { getProductByIdController, getProductsController , createProductController, deleteProductController} from "../controllers/product.Controller.js"
import { authToken, authorization, upload } from "../utils.js";



const productrouter = express.Router()

/* productrouter.use(authToken) */

productrouter.get("/", getProductsController)

productrouter.get("/:pid", getProductByIdController)

productrouter.post("/", /* authorization('ADMIN') */upload.single('thumbnail'),  createProductController)

productrouter.delete("/:pid",/* authorization('ADMIN') */  deleteProductController)


export default productrouter