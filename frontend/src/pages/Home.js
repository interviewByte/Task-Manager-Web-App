import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://task-manager-web-app-hjkn.vercel.app/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      toast.success('Logged in successfully!');
      setTimeout(() => navigate('/dashboard'), 2000); 
    } catch (err) {
      const errorMsg = err.response?.data?.msg || 'Error logging in';
      toast.error(errorMsg);
      console.error(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="/assets/images/login.gif"
            alt="login-image"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="shadow p-5">
            <h1 className="text-center">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
