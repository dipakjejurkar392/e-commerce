import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const CheckOut = () => {
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const allcart = async () => {
    try {
      const res = await axios.get('http://localhost:3000/cart/allcart');
      setData(res.data.data);
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  };

  const increment = async (productId) => {
    try {
      await axios.put(`http://localhost:3000/cart/increment/${productId}`);
      allcart();
    } catch (err) {
      console.error('Error incrementing:', err);
    }
  };

  const decrement = async (productId) => {
    try {
      await axios.put(`http://localhost:3000/cart/decrement/${productId}`);
      allcart();
    } catch (err) {
      console.error('Error decrementing:', err);
    }
  };

  const calculateTotal = () => {
    const total = data.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

  useEffect(() => {
    allcart();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [data]);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 mt-20">
        <h2 className="text-2xl font-bold text-center mb-4">🛒 Your Cart</h2>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Cart Items */}
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div key={index} className="flex border rounded shadow p-4">
                  <img src={item.image} alt={item.title} className="h-28 w-28 object-cover rounded" />
                  <div className="flex flex-col ml-4 flex-grow">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    <p className="text-green-600 font-bold mt-2">₹ {item.price}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decrement(item.productId)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
                      >
                        -
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => increment(item.productId)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex gap-4 mt-2 text-sm text-gray-600">
                      <button className="hover:underline">Save for Later</button>
                      <button className="hover:underline">Remove</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-gray-500 w-full border rounded shadow">
                No items in cart
              </div>
            )}
          </div>

          {/* Price Summary */}
          <div className="w-full md:w-1/3 shadow rounded-lg border border-gray-300 p-4 h-fit">
            <h3 className="text-lg font-bold mb-2">PRICE DETAILS</h3>
            <div className="flex justify-between py-1">
              <span>Price ({data.length} items)</span>
              <span>₹ {totalAmount}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Discount</span>
              <span className="text-green-600">− ₹ {totalAmount > 0 ? 200 : 0}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Delivery Charges</span>
              <span>₹ 50</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span>₹ {totalAmount > 0 ? totalAmount - 200 + 50 : 0}</span>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 mt-4 rounded">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
