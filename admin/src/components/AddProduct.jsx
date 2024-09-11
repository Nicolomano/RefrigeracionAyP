import { useState } from 'react'
import upload_area from '../assets/upload_area.svg'
import { MdAdd } from 'react-icons/md'

const AddProduct = () => {

  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    title: '',
    description: '',
    price: '',
    thumbnail: '',
    code: '',
    stock: ''
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) =>{
    setProductDetails({...productDetails, [e.target.name]: e.target.value})
  }

  const add_product = async () => {
    let product = productDetails;
  
    let formData = new FormData();
    formData.append('thumbnail', image);
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('code', product.code);
    formData.append('stock', product.stock);
  
    await fetch('http://localhost:8080/api/products/', {
      method: 'POST',
      headers: {
        accept: 'application/json'
      },
      body: formData
    })
    .then((resp)=>{
      if (resp.status === 201){
        alert('Product added successfully')
    } else{
        alert('Product not added')
    }
    return resp.json()
    })
  }

  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7">
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Product title:</h4>
        <input value={productDetails.title} onChange={changeHandler} type="text" name="title" placeholder="Type here..." className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"/>
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Description:</h4>
        <input value={productDetails.description} onChange={changeHandler} type="text" name="description" placeholder="Type here..." className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"/>
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Price</h4>
        <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder="Type here..." className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"/>
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Code:</h4>
        <input value={productDetails.code} onChange={changeHandler} type="text" name="code" placeholder="Type here..." className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"/>
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Stock</h4>
        <input value={productDetails.stock} onChange={changeHandler} type="text" name="stock" placeholder="Type here..." className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"/>
      </div>
      <div>
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} alt="" className='w-20 rounded-sm inline-block'/>
        </label>
        <input onChange={imageHandler} type="file" name="thumbnail" id="file-input" hidden className='bg-primary max-w-80 w-full py-3 px-4' />
      </div>
      <button onClick={()=> add_product()} className='btn_dark_rounded mt-4 flexCenter gap-x-1'><MdAdd/>Add Product</button>
    </div>
  )
}

export default AddProduct