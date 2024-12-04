import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../img/img1.jpg";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://authentication-form-backend.onrender.com/api/auth/login",
        formData
      );
      toast.success(res.data.message); // Optional: You can display it better with UI.
      setError("");
      navigate("/dashboard"); // Navigate to another page (example: dashboard)
    } catch (err) {
      toast.error(
        err.response.data.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Cover img" />
      <div className="login-form">
        <div className="lform">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          <p>
            Don’t have an account? <a href="/signup">Sign up for free</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
