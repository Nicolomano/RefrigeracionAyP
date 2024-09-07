import { useContext } from "react"
import {ShopContext} from "../context/shopContext"
import { useParams } from "react-router-dom"
import ProductDetail from "../components/ProductDetail"
import ProductDisplay from "../components/ProductDisplay"
import ProductDescription from "../components/ProductDescription"
import RelatedProducts from "../components/RelatedProducts"

const Product = () => {
  const {all_products} = useContext(ShopContext)
  const{productId} = useParams()
  const product = all_products.find((e) => e.id === Number(productId))
  if(!product){
    return <div>Product not found!!</div>
  }
  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductDetail product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription/>
        <RelatedProducts/>
      </div>
    </section>
  )
}

export default Product