import React from "react";
import Colors from "../../config/colors/index";

export default function PriceCard() {
  return (
    <div className="price nnnP">
      <div className="priceText">
          <h3
            className="pText"
            style={{
              marginTop: "25px",
              marginBottom: "40px",
              marginLeft: "16%",
              fontWeight: "900",
              fontSize: "x-large",
              color:Colors.BlackText,
            }}
          >
            Price Details
          </h3>
          <div className="pItem">
            <p className="smalText" style={{ marginLeft: "-18px" }}>
              Price
            </p>
            <h4 className="paisa">$999</h4>
          </div>
          <hr
            style={{
              height: "1px",
              marginBottom:"20px",
              width: "300px",
            }}
          />
          <div className="pItem">
            <p
              className="smalText"
              style={{
                marginRight: "-32px",
                color:Colors.GreyText,

              }}
            >
              Delivery Charges
            </p>
            <h4
              className="paisa"
              style={{
                marginRight: "28px",
              }}
            >
              $1
            </h4>
          </div>

          <hr
            style={{
              height: "1px",
              width: "300px",
              marginBottom:"20px",
            }}
          />

          <div className="pItem" style={{ borderBottom: "0" }}>
            <p
              className="smalText"
              style={{
                color:Colors.GreyText,
                marginLeft: "-13px",
                marginRight: "-25px",
              }}
            >
              Total Price
            </p>
            <h4 className="paisa" style={{ color: "#5BA10C" }}>
              $1000
            </h4>
          </div>
          <h4 style={{
            color:"#5BA10C",
            marginLeft:"-35px",
            marginTop:"20px"
          }}>You will save $50 on this order</h4>

          <h2 style={{
                        color:"#223043",
            marginLeft:"-70px",
            marginTop:"30px"
          }}>Add Promo Code</h2>
        
        <div className="promoInput">
          <input className="promoIn" placeholder="Enter Promo Code"></input>
          <button className="promoBut">Apply</button>
        </div>
        

        <button className="orderButton">Place Order</button>
        </div>
      
        
    </div>
  );
}
