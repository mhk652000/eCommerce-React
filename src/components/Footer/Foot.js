import React from "react";
import smallMail from "../../assets/images/email.png";
import "./footer.css";
import paypal from "../../assets/images/001-paypal-logo.svg";
import mastercard from "../../assets/images/002-master-card-logo.svg";
import visa from "../../assets/images/003-visa-pay-logo.svg";
import paysystem from "../../assets/images/004-discover-logo-of-pay-system.svg";
import aExpress from "../../assets/images/005-american-express-logo.svg";
export default function Foot() {
  return (
    <div className="footer">
      <div className="footerHeader">
        <div className="iconText">
          <img src={smallMail} alt="Logo" className="mailIcon" />
          <div className="text">
            <h2 className="textHeading">NewsLetter</h2>
            <p className="textParagraph">
              Subscribe here for get every single updates
            </p>
          </div>
        </div>

        <div className="input">
          <input
            className="inputField"
            placeholder="          ENTER YOUR EMAIL ADDRESS..."
          ></input>
          <button className="inputButton">Subscribe</button>
        </div>
      </div>

      <div className="outerContainer">
        <div className="locationContainer">
          <h2 className="locationHeading">Our Location</h2>
          <div className="locationText">
            <p>Address : No 40 Baria Sreet 15/2 NewYork City,</p>
            <p>NY, United States.</p>
            <p>Email : uijungle@email.com</p>
            <p>Phone : + 123 456 7890</p>
          </div>
        </div>

        <div className="informationContainer">
            <div className="infoText">
                <p><h2 className="infoHeading">Information</h2></p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div className="linksContainer">
            <div className="linksText">
                <p><h2 className="linksHeading">Quick Links</h2></p>
                <p>Terms & Condition</p>
                <p>Shipping & Delivery</p>
                <p>Returns & Exchange</p>
                <p>Site Map</p>
            </div>
        </div>
      </div>
      <div className="Linee">
        <hr className="footerLine"></hr>
      </div>
        


      <div className="footerBottom">
        <div className="copyRights">
            <p>Copyright © 2020 <strong>eco-X</strong>. All Right Reserved</p>
        </div>
        <div className="footerIcons">
            <img src={paypal} alt="pp" className="footIcon" />
            <img src={mastercard} alt="pp" className="footIcon" />
            <img src={visa} alt="pp" className="footIcon" />
            <img src={paysystem} alt="pp" className="footIcon" />
            <img src={aExpress} alt="pp" className="footIcon" />
        </div>

      </div>
    </div>
  );
}
