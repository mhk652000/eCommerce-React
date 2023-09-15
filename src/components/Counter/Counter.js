import React from "react";
import { Row, Col } from "antd";
import "./counter.css";

export default function Counter() {
  return (
    <Col className="countMain">
      
      <Row>
        <Col>
          <button className="minus">-</button>
        </Col>

        <Col>
          <input className="countValue" value="1"></input>
        </Col>

        <Col>
          <button className="plus">+</button>
        </Col>
      </Row>
    </Col>
  );
}
