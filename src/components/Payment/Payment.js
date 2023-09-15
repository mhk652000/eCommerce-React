import React from "react";
import { Row, Col } from "antd";
import "./payment.css";
import { DatePicker, Radio, Space } from "antd";

export default function Payment() {
  return (
    <div className="mainDelivery">
      <Row className="innerDelivery">
        <form className="deliveryInputForm">
          <Col lg={24} style={{}}>
            <div style={{ display: "flex", paddingBottom: "15px" }}>
              <div className="circleHead">
                <p
                  style={{
                    fontSize: "large",
                    paddingTop: "2px",
                    fontWeight: "700",
                  }}
                >
                  3
                </p>
              </div>
              <h2 className="doneText" style={{ color: "#223043" }}>
                Payment Details
              </h2>
            </div>
          </Col>

          <Col lg={24} style={{}}>
            <div style={{ display: "flex" }} className="pTypeMain">
              <div>
              <p className="addressText" >Payment Method:</p>
              </div>
              <div className="paymentType">
                <label className="paymentLabel">
                  <input className="paymentLabelInput" type="radio" name="option"></input>
                  Debit Card
                </label>

                <label className="paymentLabel">
                  <input className="paymentLabelInput" type="radio" name="option"></input>
                  Credit Card
                </label>

                <label className="paymentLabel">
                  <input className="paymentLabelInput" type="radio" name="option"></input>
                  Net Banking
                </label>

                <label className="paymentLabel">
                  <input className="paymentLabelInput" type="radio" name="option"></input>
                  COD
                </label>
              </div>
            </div>
          </Col>

          <Col lg={24}>
            <Row gutter={[50, 50]}>
              <Col lg={8} style={{}}>
                <h4 className="deliveryLabel">Name</h4>
                <input
                  className="deliveryInput"
                  placeholder="Enter Here"
                ></input>

                <h4 className="deliveryLabel">Pincode</h4>
                <input
                  className="deliveryInput"
                  placeholder="Enter Here"
                ></input>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row gutter={[50, 50]}>
              <Col lg={8}>
                <h4 className="deliveryLabel">Expiration Date</h4>
                <input
                  className="deliveryDateInput"
                  placeholder="Enter Here"
                  type="month"
                ></input>
              </Col>
             



              <Col lg={8}>
                <h4 className="deliveryLabel cvv" >CVV</h4>
                <input
                  className="deliveryInput"
                  placeholder="Enter Here"
                
                ></input>
              </Col>
            </Row>
          </Col>

          <Col lg={24} style={{}}>
            <div className="checkBoxPaymentDiv" style={{ display: "flex", justifyContent: "space-between" }}>
              <input id="check1" type="checkbox"></input>
              <label
              className="checkBoxPayment"
                for="check1"
                style={{
                  marginLeft: "-48%",
                  marginTop: "1.7%",
                }}
              >
                Securely store payment details for next purchase.
              </label>
              <button className="deliveryButton">Complete Order</button>
            </div>
          </Col>
        </form>
      </Row>
    </div>
  );
}
