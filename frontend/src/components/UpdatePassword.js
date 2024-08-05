import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        'https://task-manager-web-app-gules.vercel.app/api/users/update-password',
        { oldPassword, newPassword },
        {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        }
      );
      toast.success(res.data?.msg || 'Password updated successfully!',
      );
      setTimeout(() => navigate('/'), 2000); 
    } catch (err) {
      const errorMsg = err.response?.data?.msg || 'Error updating password';
      toast.error(errorMsg);
      console.log(errorMsg)
    }
  };

  return (
    <div className='shadow p-5 rounded'>
      <h2 className='text-center'>Welcome to Update Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Old Password</label>
          <input
            type="password"
            className="form-control"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Password
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdatePassword;
