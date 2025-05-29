import React from 'react';
import productsData from '../assets/Product.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  let [range, setRange] = useState(1000);
  let [cat, setCat] = useState('');

  let all_cat = productsData.map((m) => {
    return m.category;
  });

  let unique_cat_set = new Set(all_cat);
  let unique_cat_array = Array.from(unique_cat_set);
  console.log(unique_cat_array);




  const handleAddToCart = (product) => {
    // Get existing cart items
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add new product
    cart.push(product);

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.name} added to cart!`);
  };

  return (
   <div className="container mt-5">
           <div className="row">
             
             <div className="alert alert-primary ">
               {/* <button className="btn btn-light">Electronic</button> */}
               {
                 unique_cat_array.map((c,index)=>{
                   return (
                     <button key={index} className="btn btn-warning mx-3" onClick={()=>setCat(c)}>{c}</button>
                   )
                 })  
               }
             </div>
   
   
             <div className="alert border">
               <input
                 type="range"
                 min={10}
                 max={100000}
                 onChange={(e) => {
                   setRange(e.target.value);
                 }}
               />
               &nbsp;
               <span>{range}</span>
             </div>
   
                 <h1>{cat}</h1>
             {productsData
               .filter((p)=> p.category == cat )
               .filter((p) => p.price <= range)
               .map((p) => {
                 return (
                   <div className="col-lg-3 col-md-3 col-6 mt-1" key={p.id}>
                     <div className="card">
                       <Link to={`/product_details/${p.id}`}>
                         <img src={p.images[0]} className="card-img-top" alt="..." />
                       </Link>
   
                       <div className="card-body">
                         <h5 className="card-title">{p.name}</h5>
                         <h6 className="text-warning">{p.cat}</h6>
                         <p className="card-text">{p.description}</p>
                         <a href="#" className="btn btn-primary float-start">
                           Add to Cart
                         </a>
                         <h3 className="float-end text-success">{p.price} ₹ </h3>
                       </div>
                     </div>
                   </div>
                 );
               })}
           </div>
         </div>
  );
};

export default Product;