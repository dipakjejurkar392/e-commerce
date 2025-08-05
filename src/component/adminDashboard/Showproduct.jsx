import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

const Showproduct = () => {
  const [data, setData] = useState([]);

  const allData = async () => {
    let res = await axios.get('http://localhost:3000/products');
    setData(res.data);
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

  useEffect(() => {
    allData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">All Products</h2>
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full text-center border border-gray-300">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border px-2 py-2">Image</th>
                <th className="border px-2 py-2">Title</th>
                <th className="border px-2 py-2">Category</th>
                <th className="border px-2 py-2">Description</th>
                <th className="border px-2 py-2">Price</th>
                <th className="border px-2 py-2">Quantity</th>
                <th className="border px-2 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p) => (
                <tr key={p.productId} className="hover:bg-gray-50 transition">
                  <td className="border p-2">
                    <img src={p.image} alt="..." className="h-16 w-16 object-cover mx-auto rounded" />
                  </td>
                  <td className="border p-2">{p.title}</td>
                  <td className="border p-2">{p.category}</td>
                  <td className="border p-2">{p.description}</td>
                  <td className="border p-2 text-green-600 font-semibold">{p.price} ₹</td>
                  <td className="border p-2">{p.quantity}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => deleteData(p.productId)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Showproduct;
