import React from "react";
import "./card.css";
import shampoo from "../../assets/images/shampoo.png";
import smallCream from "../../assets/images/smallCream.png";
import { Card, Avatar } from "antd";
import { Row, Col } from "antd";
import love from "../../assets/images/Like.svg";
import { useNavigate } from "react-router-dom";
import Colors from "../../config/colors";

const { Meta } = Card;

function Cards(props) {
  const navigate = useNavigate();
  
  return (
    // <Row
    //   gutter={20}
    //   style={{
    //     margin: "0px",
    //     marginTop: "75px",
    //     paddingRight: "150px",
    //     paddingLeft: "150px",
    //   }}
    //   className="cardMainRow"
    // >
    //  </Row>
      <Col style={{ marginBottom: "60px" }} md={8} className="gutter-row" onClick={()=>{
            navigate("/product", {state:props?.data});
          }}>
        <Card
          style={{ border: "0", borderRadius: "0" }}
          cover={
            <img alt="example" src={props?.data.image} style={{ borderRadius: "0" }} className="cardPics"/>
          }
          
        >
          <div className="cardText">
            <h2 className="featured">{props?.data.name}</h2>
            <div className="price" style={{border:"0px", backgroundColor:"#fff"}}>
              <span style={{color:Colors.Primary}} className="newPrice">{props?.data.min_max_price.min_price}</span>
              <span style={{color:Colors.GreyText}} className="oldPrice">
                <s>{props?.data.min_max_price.max_price}</s>
              </span>
            </div>
            <img className="loveImg" src={love} />
          </div>
        </Card>
      </Col>
   
  );
}

export default Cards;
