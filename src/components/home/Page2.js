import React from "react";

export const Page2 = () => {
  return (
    <>
      <div class="prePaid">
        <div class=" color-red">
          <h1>PREPAID</h1>
          <a href=".">
            <span class="color-grey">VIEW ALL</span>
          </a>
        </div>
      </div>

      <div class="test">
        <div class="prePaid-btn ">
          <a href="." class="pre-btn">
            <img src="prePaidBtn1.png" class="image " alt="" />
            <br />
            <span class="color-grey">DATA</span>{" "}
          </a>
          <a href="." class="pre-btn">
            <img src="prePaidBtn2.png" class="image " alt="" />
            <br />
            <span class="color-grey">ALL IN ONE</span>
          </a>
          <a href="." class="pre-btn">
            <img src="prePaidBtn1.png" class="image " alt="" />
            <br />
            <span class="color-grey">PRICE PLANS</span>
          </a>
        </div>
      </div>
      <hr style={{ width: "30%" }}></hr>

      <div class="row">
        <div class="col1">
          <img src="prePaidImg.png" alt="" />
        </div>
        <div class="col2">
          <h3 class="color-grey prePaidh3">WEEKLY</h3>
          <h1 class="color-red prePaidh1">MEGA PLUS</h1>
          <h5 class="color-grey prePaidh5">
            <b class="color-red">15 GB + 10 GB</b> DATA (2 AM - 2 PM)
          </h5>
          <button class="btn">MORE DETAILS</button>
        </div>
      </div>
    </>
  );
};
export default Page2;
