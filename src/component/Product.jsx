// Product.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FilterSidebar from './FilterSidebar';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow hover:shadow-xl transition p-3 flex flex-col">
      <Link to={`/product_details/${product._id}`}>
        <img
          src={product.image || 'https://via.placeholder.com/300x200?text=No+Image'}
          alt={product.title}
          className="w-full h-40 object-cover rounded"
        />
      </Link>
      <h5 className="text-base font-semibold mt-2 line-clamp-1">{product.title}</h5>
      <p className="text-xs bg-gray-100 px-2 py-0.5 inline-block rounded text-gray-600 mt-1">
        {product.category}
      </p>
      <p className="text-gray-500 text-xs mt-1 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center mt-auto pt-2">
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 hover:scale-95 active:scale-90 transition-transform"
        >
          Add to Cart
        </button>
        <span className="text-green-600 font-bold text-sm">{product.price} ₹</span>
      </div>
    </div>
  );
};

const Product = () => {
  const [range, setRange] = useState(100000);
  const [cat, setCat] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/products');
      setData(res.data);
      setFilteredData(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };
const uniqueCategories = Array.from(new Set(data.map((item) => item.category))).filter(Boolean);

  const handleFilter = (category, price) => {
    let filtered = data;

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (price) {
      filtered = filtered.filter((item) => item.price <= price);
    }

    setFilteredData(filtered);
  };

  const handleAddToCart = async (product) => {
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
      alert('Added to cart!');
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    handleFilter(cat, range);
  }, [cat, range]);

  return (
    <div className="max-w-7xl mx-10">
      <div className="flex flex-col md:flex-row gap-6">
       <FilterSidebar
  categories={uniqueCategories || []}   // safe default array
  onCategoryChange={(c) => setCat(c)}
  onPriceChange={(p) => setRange(p)}
  onRatingChange={(r) => console.log('Rating:', r)}
  onBrandChange={(b) => console.log('Brand:', b)}
/>


        <div className="w-[5000px] md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredData.map((p) => (
            <ProductCard key={p._id} product={p} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Product;
