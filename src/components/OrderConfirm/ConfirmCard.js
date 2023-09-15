import React from "react";

export default function ConfirmCard() {
  return (
    <div className="confirmCardMain">
      <div style={{ display: "flex" }}>
        <div className="confirmCard">
          <div className="confirmHeader">
            <h3 className="confirmHeading">Item Detail</h3>
            <button
              className="confirmEdit"
              style={{ fontSize: "small", fontWeight: "700" }}
            >
              Edit
            </button>
          </div>

          <div className="confirmText">
            <p style={{ fontWeight: "600" }}>
              CBD Salve For Anx / FSO, 325mg2oz.
            </p>
            <h3 style={{ fontWeight: "700", color: "#5BA10C" }}>$740</h3>
            <p style={{ fontSize: "small", fontWeight: "600" }}>Quantity: 2</p>
          </div>
        </div>

        <div className="confirmCard">
          <div className="confirmHeader">
            <h3 className="confirmHeading">Delivery Address</h3>
            <button
              className="confirmEdit"
              style={{ fontSize: "small", fontWeight: "700" }}
            >
              Edit
            </button>
          </div>

          <div className="confirmText">
            <p style={{ fontWeight: "600" }}>Zain Bhai</p>
            <p style={{ fontWeight: "600", color: "#747F92" }}>xyzxyz</p>
            <p style={{ fontWeight: "600", color: "#747F92" }}>xyzxyz</p>
          </div>
        </div>

        <div className="confirmCard">
          <div className="confirmHeader">
            <h3 className="confirmHeading">Payment Detail</h3>
            <button
              className="confirmEdit"
              style={{ fontSize: "small", fontWeight: "700" }}
            >
              Edit
            </button>
          </div>

          <div className="confirmText">
            <p style={{ fontWeight: "600" }}>COD</p>
            <h3 style={{ fontWeight: "700", color: "#5BA10C" }}></h3>
            <p style={{ fontSize: "small", fontWeight: "600" }}></p>
          </div>
        </div>
      </div>


      <div className="confirmFooter">
      <p style={{ fontWeight: "600", fontSize:"x-large", marginRight:"5%", marginTop:"3%" }} className="totalOrder">Order Total:<p style={{ fontWeight: "700", color: "#5BA10C" }}>$740</p></p>
      <button className="deliveryButton" style={{marginRight:"0px"}}>Place Order</button>
      </div>
    </div>
  );
}
