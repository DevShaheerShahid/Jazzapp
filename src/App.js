import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Prepaid from "./components/Prepaid";
import Postpaid from "./components/Postpaid";
import Devices from "./components/Devices";
import Mobileapps from "./components/Mobileapps";
import Product from "./components/Product";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="prepaid" element={<Prepaid />} />
          <Route path="postpaid" element={<Postpaid />} />
          <Route path="devices" element={<Devices />} />
          <Route path="product" element={<Product />} />
          <Route path="mobileapps" element={<Mobileapps />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
