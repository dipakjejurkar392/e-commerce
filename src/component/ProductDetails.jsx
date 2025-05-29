import React from 'react'
import { useParams } from 'react-router-dom';
import product_data from '../assets/Product.json'

const ProductDetails = () => {
    let id_obj = useParams()
    console.log(id_obj.id)
    let product_by_id = product_data.filter((p)=> p.id == (+id_obj.id))
    let product = product_by_id[0]
  return (
    <>
    {/* <h1>{product.name}</h1> */}
    <div className='container my-5'>
        <br /><br />
        <h1>Product details</h1>
        <hr />
        <div className='row'>
            <div className='col-md-6'>
                <img src={product.images[0]} className='img-thumbnail' height={400} width={400} alt="" />


            </div>
            <div className='col-md-6'>
                <h1>{product.name}</h1>
                <hr />
                <h4>{product.description}</h4>
                <br />
                <h1 className='text-success'>Price : ₹{product.price}</h1>
                {/* <p className='text-secondary'>Category : {product.category}</p> */}

            </div>

        </div>

    </div>
    </>
  )
}

export default ProductDetails