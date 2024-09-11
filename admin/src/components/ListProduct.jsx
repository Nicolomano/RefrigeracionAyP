import { useState, useEffect } from 'react'
import { TbTrash } from 'react-icons/tb'


const ListProduct = () => {

  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    await fetch('http://localhost:8080/api/products/').then((res)=> res.json()).then((data)=> {setProducts(data.payload)})
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  const removeProduct = async (id) =>{
    await fetch(`http://localhost:8080/api/products/${id}`, {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({_id:id})
    })
    await fetchProducts()
  }

  return (
    <div className='p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:p-4 sm:m-7'>
      <h4 className='bold-22 p-5 uppercase'>Products list</h4>
      <div className='max-h-[77vh] overflow-auto px-4 text-center'>
        <table className="w-full mx-auto">
          <thead>
            <tr className='bg-primary bold-14 sm:regular-22 text-start py-12'>
              <th className="p-2">Products</th>
              <th className="p-2">Title</th>
              <th className="p-2">Description</th>
              <th className="p-2">Price</th>
              <th className="p-2">Code</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Remove</th>

            </tr> 
          </thead>
          <tbody>
            {products.map((product, i)=>(
              <tr key={i} className='border-b border-slate-900/20 text-gray-30 p-6 medium-14'>
                <td className='flexStart sm:flexCenter'>
                  <img src={product.thumbnail} alt="" height={43} width={43} className='rounded-lg ring-1 ring-slate-900/5 my-1'/>
                </td>
                <td><div className='line-clamp-3'>{product.title}</div></td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.code}</td>
                <td>{product.stock}</td>
                <td><div className='bold-22 pl-6 sm:pl-14'><TbTrash onClick={()=> removeProduct(product._id)}/></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListProduct