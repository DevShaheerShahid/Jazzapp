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
            <Link to={"prepaid"}>
              <li class="menuItems">PREPAID</li>
            </Link>
            <Link to={"postpaid"}>
              <li class="menuItems">POSTPAID</li>
            </Link>
            <Link to={"devices"}>
              <li class="menuItems">DEVICES</li>
            </Link>
            <Link to={"mobileapps"}>
              <li class="menuItems">MOBILE APPS</li>
            </Link>
            <Link to={"product"}>
              <li class="menuItems">PRODUCT AND SERVICES</li>
            </Link>
          </ul>
        </div>
        <div class="links">
          <ul>
            <li class="link" href="">
              Explore
            </li>
            <li class="link" href="">
              Order a Sim
            </li>
            <li class="link" href="">
              Recharge Now
            </li>
            <li>
              <i class="fa-solid fa-magnifying-glass color-red"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
