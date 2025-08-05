import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardNavbar from './DashboardNavbar';

const Product = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [product, setProducts] = useState({
    title: '',
    description: '',
    price: '',
    quantity: '',
    image: '',
    category: '',
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setProducts({ ...product, [e.target.name]: e.target.value });
  };

  const allData = async () => {
    let res = await axios.get('http://localhost:3000/products');
    setData(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const res = await axios.patch(`http://localhost:3000/products/${editingId}`, product);
        alert(res.data.message);
        if (res.data.success) {
          allData();
          setEditingId(null);
        }
      } else {
        const res = await axios.post('http://localhost:3000/products', product);
        alert(res.data.message);
        if (res.data.success) {
          navigate('/login');
        }
      }
      setProducts({
        title: '',
        description: '',
        price: '',
        quantity: '',
        image: '',
        category: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteData = async (productId) => {
    try {
      let res = await axios.delete(`http://localhost:3000/products/${productId}`);
      alert(res.data.message);
      if (res.data.success) {
        allData();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const editProduct = (p) => {
    setProducts({
      title: p.title,
      description: p.description,
      price: p.price,
      quantity: p.quantity,
      image: p.image,
      category: p.category,
    });
    setEditingId(p.productId);
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <>
      <DashboardNavbar />
      <div className="max-w-xl mx-auto p-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-green-500 p-5 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            {editingId ? 'Update Product' : 'Add Product'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            {['title', 'description', 'price', 'quantity', 'image', 'category'].map((field) => (
              <div key={field}>
                <label className="block mb-1 capitalize font-medium">{field}</label>
                <input
                  type={field === 'price' || field === 'quantity' ? 'number' : 'text'}
                  name={field}
                  value={product[field]}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
            >
              {editingId ? 'Update Product' : 'Add Product'}
            </button>
          </form>
        </motion.div>
      </div>

      <div className="p-4">
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="min-w-full border text-center shadow-md"
        >
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="border p-2">Image</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p) => (
              <motion.tr
                key={p.productId}
                whileHover={{ scale: 1.02 }}
                className="hover:bg-gray-100 transition"
              >
                <td className="border p-2">
                  <img src={p.image} alt="..." className="h-16 w-16 object-cover mx-auto" />
                </td>
                <td className="border p-2">{p.title}</td>
                <td className="border p-2">{p.category}</td>
                <td className="border p-2">{p.description}</td>
                <td className="border p-2 text-green-600 font-semibold">{p.price} ₹</td>
                <td className="border p-2">{p.quantity}</td>
                <td className="border p-2 space-x-1">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition text-xs">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => deleteData(p.productId)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition text-xs"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => editProduct(p)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition text-xs"
                  >
                    Edit
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </>
  );
};

export default Product;
