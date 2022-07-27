import React from "react";
import Btn1 from "./btn1.png";
import Btn2 from "./btn2.png";
import Btn3 from "./btn3.png";
import Btn4 from "./btn4.png";
import Btn5 from "./btn5.png";
import Btn6 from "./btn6.png";
export default function Buttons() {
  return (
    <div class="buttons">
      <a href=".">
        <img src={Btn1} alt="" />
        <p class="p-tag color-red">DATA</p>
      </a>
      <a href=".">
        <img src={Btn2} alt="" />
        <p class="p-tag color-red">APPS</p>
      </a>
      <a href=".">
        <img src={Btn3} alt="" />
        <p class="p-tag color-red">GET SIM</p>
      </a>
      <a href=".">
        <img src={Btn4} alt="" />
        <p class="p-tag color-red">RECHARGE</p>
      </a>
      <a href=".">
        <img src={Btn5} alt="" />
        <p class="p-tag color-red">
          PRODUCTS & <br />
          SERVICES
        </p>
      </a>
      <a href=".">
        <img src={Btn6} alt="" />
        <p class="p-tag color-red">CONTACT US</p>
      </a>
    </div>
  );
}
