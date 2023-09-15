import React from "react";
import { Row, Col } from "antd";
import cream from "../../assets/images/smallCream.png";
import Counter from "../Counter/Counter";
import Colors from "../../config/colors/index.js";


export default function ItemCard() {
  return (
    <Row style={{ borderColor: Colors.Border, backgroundColor:Colors.Secondary}} className="mainItemCard" span={24} align={"middle"}>
      <Col>
        <img
          src={cream}
          style={{
            height: "100px",
            width: "100px",
          }}
          className="itemCardPicture"
        />
      </Col>

      <Col>
        <h3 className="itemCardText">
          CBD Salve For Anx / FSO, 325mg2oz. $64.95 $59.95
        </h3>
        <h2 
        style={{color:Colors.Primary}}
        className="itemCardPrice">$320</h2>
      </Col>

      <Col className="quant">
        <h4 className="textHeader">Quantity</h4>
        <br />
        <Counter className="counterClass" />
      </Col>

      <Col>
        <button className="itemRemoveButton">X</button>
      </Col>
    </Row>
  );
}
