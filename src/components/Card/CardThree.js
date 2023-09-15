import React from "react";
import "./card.css";
import shampoo from "../../assets/images/shampoo.png";
import smallCream from "../../assets/images/smallCream.png";
import { Card, Avatar } from "antd";
import { Row, Col } from "antd";
import love from "../../assets/images/Like.svg";
const { Meta } = Card;

function Cards() {
  return (
    <Row
      gutter={20}
      style={{
        margin: "0px",
        marginTop: "75px",
        paddingRight: "150px",
        paddingLeft: "150px",
      }}
      className="cardMainRow"
    >
      <Col style={{ marginBottom: "60px" }} md={8} className="gutter-row">
        <Card
          style={{ border: "0", borderRadius: "0" }}
          cover={
            <img alt="example" src={smallCream} style={{ borderRadius: "0" }} className="cardPics"/>
          }
          
        >
          <div className="cardText">
            <h2 className="featured">CDB Salve For Pain</h2>
            <div className="price" style={{border:"0px", backgroundColor:"#fff"}}>
              <span className="newPrice newP">$320</span>
              <span className="oldPrice">
                <s>$320</s>
              </span>
            </div>
            <img className="loveImg" src={love} />
          </div>
        </Card>
      </Col>

      <Col style={{ marginBottom: "60px" }} md={8} className="gutter-row">
        <Card
          style={{ border: "0", borderRadius: "0" }}
          cover={
            <img alt="example" src={shampoo} style={{ borderRadius: "0" }} />
          }
        >
          <div className="cardText">
            <h2 className="featured">CDB Salve For Pain</h2>
            <div className="price" style={{border:"0px", backgroundColor:"#fff"}}>
              <span className="newPrice newP">$180</span>
              <span className="oldPrice">
                <s>$250</s>
              </span>
            </div>
            <img className="loveImg" src={love} />
          </div>
        </Card>
      </Col>

      <Col style={{ marginBottom: "60px" }} md={8} className="gutter-row">
        <Card
          style={{ border: "0", borderRadius: "0" }}
          cover={
            <img alt="example" src={shampoo} style={{ borderRadius: "0" }} />
          }
        >
          <div className="cardText">
            <h2 className="featured">CDB Salve For Pain</h2>
            <div className="price" style={{border:"0px", backgroundColor:"#fff"}}>
              <span className="newPrice newP">$180</span>
              <span className="oldPrice">
                <s>$250</s>
              </span>
            </div>
            <img className="loveImg lImg" src={love} />
          </div>
        </Card>
      </Col>
      
    </Row>
  );
}

export default Cards;