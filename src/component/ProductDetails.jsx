import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showZoom, setShowZoom] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const imgRef = useRef();

  const fetchProductById = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error('Error fetching product:', err);
    }
  };

  const handleAddToCart = async () => {
    try {
      await axios.post('http://localhost:3000/cart/', {
        productId: product._id,
        title: product.title,
        price: product.price,
        quantity: 1,
        category: product.category,
        description: product.description,
        image: product.image,
      });
      alert('Product added to cart!');
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Failed to add to cart');
    }
  };

  useEffect(() => {
    fetchProductById();
  }, [id]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  if (!product) return <div className="text-center my-5">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 mt-30">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Left Product Image */}
        <div
          className="relative w-full md:w-1/2 border rounded overflow-hidden"
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            ref={imgRef}
            src={product.image || 'https://via.placeholder.com/500'}
            alt={product.title}
            className="w-full object-cover"
          />
        </div>

        {/* Right Side Zoom & Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {showZoom && (
            <div
              className="w-full h-[400px] border rounded bg-no-repeat bg-white shadow"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: '200%',
                backgroundPosition: backgroundPosition,
              }}
            />
          )}

          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-green-600 font-semibold text-lg mt-2">₹ {product.price}</p>
            <p className="text-gray-600 text-sm mt-1">Category: {product.category}</p>
            <p className="text-gray-800 mt-3">{product.description}</p>

            <div className="flex gap-3 mt-5">
              <button onClick={handleAddToCart} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
