import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div class="navBar">
        <div class="menu">
          <ul>
            <Link to={"/"}>
              <li class="menuItems">Home</li>
            </Link>
            <Link to={"/prepaid"}>
              <li class="menuItems">PREPAID</li>
            </Link>
            <Link to={"/postpaid"}>
              <li class="menuItems">POSTPAID</li>
            </Link>
            <Link to={"/devices"}>
              <li class="menuItems">DEVICES</li>
            </Link>
            <Link to={"/mobileapps"}>
              <li class="menuItems">MOBILE APPS</li>
            </Link>
            <Link to={"/product"}>
              <li class="menuItems">PRODUCT AND SERVICES</li>
            </Link>
          </ul>
        </div>
        <div class="links">
          <ul>
            <Link to={"/cart"}>
              <li class="link">Cart</li>
            </Link>

            <Link to={"/signin"}>
              <li class="link">SignIn</li>
            </Link>

            <Link to={"/signout"}>
              <li class="link">SignOut</li>
            </Link>

            <li>
              <i class="fa-solid fa-magnifying-glass color-red"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
