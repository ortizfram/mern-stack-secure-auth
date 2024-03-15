import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Register from "../pages/auth/Register";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import Login from "../pages/auth/Login";
import Customers from "../components/customer/Customers";

axios.defaults.withCredentials = true;

function App() {
  const { loggedIn } = useContext(AuthContext); //destructure loggedIn

  return (
    // <AuthContextProvider> called in main.jsx
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<h1>404 Page Not FOund</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
        {loggedIn === false && (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/customer" element={<Customers />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
