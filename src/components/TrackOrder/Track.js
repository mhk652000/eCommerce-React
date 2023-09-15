import React from "react";
import "./track.css";
import cream from "../../assets/images/smallCream.png";
import { Divider, Steps, ConfigProvider } from "antd";

export default function Track() {
  return (
    <div className="trackCardMain">
      <div className="outerWrapper">
        <div className="imgText">
          <div>
            <img className="cardImage" src={cream} />
          </div>
          <div className="cardImageText">
            <p style={{ fontWeight: "600" }}>
              CBD Salve For Anx / FSO, 325mg2oz.
            </p>
            <h3 style={{ fontWeight: "700", color: "#5BA10C" }}>$740</h3>
            <p style={{ fontSize: "small", fontWeight: "600" }}>Quantity: 2</p>
            <button
              className="deliveryButton"
              style={{ height: "30px", width: "180px" }}
            >
              Download Invoice
            </button>
          </div>
        </div>

        <div className="trackAddress">
          <p style={{ fontWeight: "700", color: "#223043" }}>
            Delivery Address
          </p>
          <p style={{ fontWeight: "600", color: "#223043" }}>Zain Bhai</p>
          <p style={{ color: "#747F92" }}>
            555, Daryaganj, Delhi, India - 123456
          </p>
          <p style={{ fontWeight: "600", color: "#223043" }}>Phone Number</p>
          <p style={{ color: "#747F92" }}>6265795433</p>
        </div>

        <div className="steps">
        <p style={{ fontWeight: "600", color: "#223043", marginBottom:"35px" }}>
            Track Your Order
          </p>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#5BA10C",
              },
            }}
          >
            <Steps 
              progressDot
              current={3}
              items={[
                {
                  title: "Order",
                },
                {
                  title: "Packed",
                },
                {
                  title: "Shipped",
                },
                {
                  title: "Delivered",
                },
              ]}

              
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}
