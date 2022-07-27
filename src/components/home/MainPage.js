import React from "react";

import mainPic from "./mainPic.png";
export const MainPage = () => {
  return (
    <div class="viewDiv">
      <div class="text">
        <h3 class="color-grey main-h3">ORDER</h3>
        <h1 class="color-red main-h1">A NEW SIM</h1>
        <h5 class="color-grey">Dial *5299# for Home delivery</h5>
        <button class="btn">MORE DETAILS</button>
      </div>
      <div class="img-Banner">
        <img src={mainPic} alt="Advertizment" />
      </div>
    </div>
  );
};
export default MainPage;
