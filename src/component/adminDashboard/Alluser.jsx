import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './DashboardNavbar';

const Alluser = () => {
  const [data, setData] = useState([]);

  const allData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/user/allUsers');
      setData(res.data.message);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-center mb-6">All Users</h2>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white text-center">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4 border">Image</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Password</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-100 transition duration-300"
                >
                  <td className="py-2 px-4 border">
                    <img
                      src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png"
                      alt="User"
                      className="h-16 w-16 mx-auto rounded-full border shadow"
                    />
                  </td>
                  <td className="py-2 px-4 border font-medium">{user.name}</td>
                  <td className="py-2 px-4 border text-gray-700">{user.email}</td>
                  <td className="py-2 px-4 border text-gray-500">{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Alluser;
