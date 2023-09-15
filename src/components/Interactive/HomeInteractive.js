import React from "react";
import "./Interactive.css";
import cream from "../../assets/images/cream.png";
import shadow from "../../assets/images/shadow.png";
import Colors from "../../config/colors";


function HomeInteractive() {
  return (
    <div className="mainInteractive">
      <div className="hContainer">
        <div className="creamLogo">
          <img src={cream} className="cream" />
          <img src={shadow} className="creamShadow" />
        </div>

        <div className="homeTextContainer">
          <h1 className="hHeading">CBD Make</h1>
          <h1 style={{color:Colors.Primary}} className="hHeading1">People Happy</h1>
          <p style={{color:Colors.GreyText}} className="hText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button style={{backgroundColor:Colors.ButtonColor}} className="hHomeBtn btnType">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default HomeInteractive;
