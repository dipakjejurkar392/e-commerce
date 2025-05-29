import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';

const Registration = () => {
    const navigate = useNavigate();
    let [user,setUser] = useState({
      name:'',
      email:'',
      password:''
    })

    let [message,setMessage] = useState({})
    let handleChange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        
    }

    let handleSubmit = async (e)=>{
      e.preventDefault()
      try {
        let res = await axios.post('http://localhost:3000/user/registration',user)
        // console.log(res.data.message)
        alert(res.data.message)
        if (res.data.success) {
          navigate('/login')
        }

        
      } catch (error) {
        console.log(error.message)
        
      }
    }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <Navbar/>
      <br /><br /><br />
      <h2 className="mb-4 text-center">Registration Form</h2>
      

      <form onSubmit={handleSubmit} className='border border-1 border-primary p-5'  >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            className="form-control"
            onChange={handleChange}
            
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control"
            onChange={handleChange}
           
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password" 
            value={user.password}
            className="form-control"
            onChange={handleChange}
           
            required
          />
          
        </div>
        <a className="text-primary text-decoration-none fw-semibold" href="/login">Login</a>
<br />

        <button  type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
