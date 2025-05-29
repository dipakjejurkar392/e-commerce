import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';



const Registration = () => {
    let [user,setUser] = useState({})
    const navigate = useNavigate();
    let handleChange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        
    }

    let handleSubmit = async(e)=>{
      e.preventDefault()
      try {
      let res = await axios.post('http://localhost:3000/user/login',user)
      alert(res.data.message)
      if (res.data.success) {
      navigate('/home')

        
      }
 
      } catch (error) {
        alert(error.message)
        
      }


    }

  return (
    
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <Navbar/>
      <br /><br /><br />
      <h2 className="mb-4 text-center">Login Form</h2>
      

      <form onSubmit={handleSubmit} className='border border-1 border-primary p-5' >
       
        <div className="mb-3 ">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
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
            className="form-control"
            onChange={handleChange}
           
            required
          />
        </div>
        <a className='text-primary text-decoration-none fw-semibold' href="/registration">Sign up </a>

       

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Registration;
