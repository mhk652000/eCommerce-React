import React from "react";
import "./card.css";
import Counter from "../Counter/Counter";
import cream from "../../assets/images/smallCream.png";
import { Rate } from "antd";

export default function ProductCard(props) {
  return (
    <div className="mainProductCard">
      <div className="prdImgClass">
        <img className="productImage" style={{width:"300px", height:"350px"}} src={props.data.image} />
      </div>
      <div>
        <h3 className="productHeading">
          {props.data.name}
        </h3>
        <div style={{
          display:"flex",
          marginTop:"5%"
        }}>
        <Rate
          allowHalf
          defaultValue={4.5}
          style={{
            float: "left",
          }}
        />
        <p
          style={{
            textAlign: "left",
            marginTop:"1%",
            marginLeft:"2%",
          }}
        >
            (530 customer reviews)
        </p>
        </div>
        

        <div
          className="price"
          style={{
            border: "0px",
            backgroundColor: "#fff",
            height: "30px",
            textAlign: "left",
          }}
        >
          <span className="newPrice">{props.data.min_max_price.min_price}</span>
          <span className="oldPrice">
            <s>{props.data.min_max_price.max_price}</s>
          </span>
        </div>
        
        <h4 className="productDetails">
        <br />Purchase this product now and earn 60 Points!<br />
          <br /> Part Number: CWL <br />
          <br /> Availability: Back Order.<br />
        </h4>
        <br />
        
        <h4 className="productCardText">Quantity</h4>
        <br />
        <Counter className="count" />

        <div className="buttonss">
          <button
            className="deliveryButton"
            style={{
              height: "35px",
              marginTop:"5%"
            }}
          >
            ADD TO CART
          </button>
          <button
            className="deliveryButton"
            style={{
              backgroundColor: "#E2E5E6",
              color: "#223043",
              height: "35px",
              width: "190px",
              marginLeft:"5%",
              marginTop:"5%",
              fontWeight:"600"
            }}
          >
            ADD TO FAVORITES
          </button>
        </div>
      </div>
    </div>
  );
}
