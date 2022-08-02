import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Prepaid from "./otherpages/Prepaid";
import Postpaid from "./otherpages/Postpaid";
import Devices from "./otherpages/Devices";
import Mobileapps from "./otherpages/Mobileapps";
import Product from "./otherpages/Product";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import ProtectedRoutes from "./protectedRoutes";
import SignOutRoute from "./protectedRoutes/SignOutRoute";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prepaid" element={<Prepaid />} />
          <Route path="/postpaid" element={<Postpaid />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/product" element={<Product />} />
          <Route path="/mobileapps" element={<Mobileapps />} />

          <Route
            path="/cart"
            element={
              <ProtectedRoutes>
                <Cart />
              </ProtectedRoutes>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOutRoute />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
