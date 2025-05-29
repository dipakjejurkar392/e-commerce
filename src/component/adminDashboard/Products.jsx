import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const Product = () => {
    const navigate = useNavigate();
    let [data,setData]= useState([])
    let [product, setProducts] = useState({
        title: '',
        description: '',
        price: '',
        quntity: '',
        image: '',
        category: '',
    })

    let [message, setMessage] = useState({})
    let handleChange = (e) => {
        setProducts({ ...product, [e.target.name]: e.target.value })

    }
    let allData = async()=>{
        let res = await axios.get('http://localhost:3000/products')
        setData(res.data)
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post('http://localhost:3000/products', product)
            // console.log(res.data.message)
            alert(res.data.message)
            if (res.data.success) {
                navigate('/login')
            }


        } catch (error) {
            console.log(error.message)

        }
    }
    useEffect(()=>{
        allData()

    },[])

    return (
        <>
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <Navbar />
            <br /><br /><br />
            <h2 className="mb-4 text-center">Add products</h2>


            <form onSubmit={handleSubmit} className='border border-1 border-primary p-5'  >
                <div className="mb-3">
                    <label className="form-label">title</label>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        className="form-control"
                        onChange={handleChange}

                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        className="form-control"
                        onChange={handleChange}

                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="Number"
                        name="price"
                        value={product.price}
                        className="form-control"
                        onChange={handleChange}

                        required
                    />

                </div>

                <div className="mb-3">
                    <label className="form-label">quantity</label>
                    <input
                        type="number"
                        name="quntity"
                        value={product.quntity}
                        className="form-control"
                        onChange={handleChange}

                        required
                    />

                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        type="text"
                        name="image"
                        value={product.image}
                        className="form-control"
                        onChange={handleChange}

                        required
                    />

                </div>
                 <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        className="form-control"
                        onChange={handleChange}

                        required
                    />

                </div>


                {/* <a className="text-primary text-decoration-none fw-semibold" href="/login">Login</a> */}
                <br />

                <button type="submit" className="btn btn-primary w-100">
                    Add product
                </button>
            </form>
        </div>
        <div>
            {
                data.map((p)=>{
                    return(
                         <div className="col-lg-3 col-md-3 col-6 mt-1" key={p.id}>
                     <div className="card">
                        

                      
                         <img src={p.images} className="card-img-top" alt="..." />
                       
   
                       <div className="card-body">
                         <h5 className="card-title">{p.title}</h5>
                         <h6 className="text-warning">{p.category}</h6>
                         <p className="card-text">{p.description}</p>
                         <p className="card-text">{p.price}</p>
                         <p className="card-text">{p.quntity}</p>
                         {/* <p className="card-text">{p.}</p> */}
                         <a href="#" className="btn btn-primary float-start">
                           Add to Cart
                         </a>
                         <h3 className="float-end text-success">{p.price} ₹ </h3>
                       </div>
                     </div>
                   </div>

                    )
                })
            }
        </div>
        </>
    );
};

export default Product;
