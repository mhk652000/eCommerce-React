import React from "react";
import "./personal.css";
import { Row, Col } from "antd";
import person from "../../assets/images/profile.png";

export default function Personal() {
  return (
    <div className="personalMainWrapper">
      <div className="personalMain">
        <div className="picText">
          <img className="personImage" src={person} />
          <h4 className="personName">Zain Bhai</h4>
        </div>
        <Col lg={24}>
          <Row gutter={[50, 50]}>
            <Col lg={8} style={{}}>
              <h4 className="personalLabel">Name</h4>
              <input className="personalInput" placeholder="Enter Here"></input>

              <h4 className="personalLabel">Mobile Number</h4>
              <input className="personalInput" placeholder="Enter Here"></input>
            </Col>

            <Col lg={8} style={{}}>
              <h4 className="personalLabel">Email</h4>
              <input className="personalInput" placeholder="Enter Here"></input>

              <h4 className="personalLabel">Gender</h4>
              <div className="personGender">
                <label className="paymentLabel">
                  <input type="radio" name="option"></input>
                  Male
                </label>

                <label className="paymentLabel">
                  <input type="radio" name="option"></input>
                  Female
                </label>
              </div>
            </Col>
          </Row>
        </Col>
      </div>

      <button className="deliveryButton" style={{float:"right", marginRight:"7%", width:"100px", height:"35px", marginBottom:"5%"}}>Save</button>
    </div>
  );
}
