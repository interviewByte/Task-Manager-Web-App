import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://task-manager-web-app-hjkn.vercel.app/api/users/register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      toast.success('Registered successfully!');
      setTimeout(() => navigate('/'), 2000); 
      console.log("res.data.token",res.data.token)
    } catch (err) {
      const errorMsg = err.response?.data?.msg || 'Error registering';
      toast.error(errorMsg);
      console.error(err);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
          <img src='/assets/images/register.gif'alt='register GIF' className='img-fluid' />
        </div>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
        <div className='shadow p-5'>
      <h1 className='text-center'>Register</h1>
      <form onSubmit={handleRegister}>
      <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
          <input type="text" value={username} className="form-control" id="exampleInputEmail1" aria-describedby="userNameHelp" 
           onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <div id="userNameHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div> 
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" value={password} className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
      <ToastContainer />
    </div>
        </div>
      </div>
    </div>
   
  );
};

export default Register;
