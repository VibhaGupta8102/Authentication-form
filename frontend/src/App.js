import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <Router>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
    />
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
