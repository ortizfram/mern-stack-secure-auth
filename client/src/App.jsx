import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/register" element={<h1>register</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/customer" element={<h1>customer</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
