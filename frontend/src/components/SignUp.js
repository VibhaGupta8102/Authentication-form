import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../img/img2.jpg";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://authentication-form-backend.onrender.com/api/auth/signup",
        formData
      );
      toast.success(res.data.message);
      navigate("/");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Cover img" />
      <div className="sign-form">
        <h2>Create an account!</h2>
        <p>Enter your details below to create an account and get started.</p>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="fullName"
              placeholder="enter..."
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              name="dateOfBirth"
              type="date"
              placeholder="MM / DD / YY"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              placeholder="+91 1234567890"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="enter..."
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">
              Create Account
            </button>
          </div>
          <div className="form-group">
            <p>
              Already have an account? <a href="/">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
