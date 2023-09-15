import React from "react";
import { Row, Col } from "antd";
import "./delivery.css";

export default function Delivery() {
  return (
    <div className="mainDelivery">
      <Row className="innerDelivery" >
         <form className="deliveryFormInput"> 
          <Col lg={24} style={{  }}>
            <div style={{ display: "flex", paddingBottom:"15px" }}>
              <div className="circleHead">
                <p
                  style={{
                    fontSize: "large",
                    paddingTop: "2px",
                    fontWeight: "700",
                  }}
                >
                  2
                </p>
              </div>
              <h2 className="doneText" style={{color: "#223043"}}>Delivery Address</h2>
            </div>
          </Col>

          <Col lg={24} style={{}}>
            <p className="addressText">
              Please Login to deliver on your saved address.{" "}
              <a style={{ color: "#5BA10C", textDecoration:"underline" }}>Click here to Login</a> Or Add new
              address.
            </p>
          </Col>

          <Col lg={24}>
            <Row gutter={[50,50]}>
              <Col lg={8} style={{  }} >

                <h4 className="deliveryLabel">Name</h4>
                <input className="deliveryInput" placeholder="Enter Here"></input>

                <h4 className="deliveryLabel">Pincode</h4>
                <input className="deliveryInput" placeholder="Enter Here"></input>
              </Col>

              <Col lg={8} style={{  }}>
                <h4 className="deliveryLabel">Email</h4>
                <input className="deliveryInput" placeholder="Enter Here"></input>

                <h4 className="deliveryLabel">Locality</h4>
                <input className="deliveryInput" placeholder="Enter Here"></input>
              </Col>

              <Col lg={8} style={{  }}>
                <h4 className="deliveryLabel">Phone Number</h4>
                <input className="deliveryInput" placeholder="Enter Here"></input>

                <h4 className="deliveryLabel">City</h4>
                <input className="deliveryInput" placeholder="Enter Here"></input>
              </Col>
            </Row>
          </Col>

          <Col lg={24} style={{  }}>
            <h4 className="deliveryLabel">Address (Area/Street)</h4>
            <input className="addressDeliveryInput" placeholder="Enter Here"></input>
          </Col>

          <Col>
            <Row gutter={[50,50]}>
              <Col lg={8}>
                <h4 className="deliveryLabel">State</h4>
                <input className="deliveryInput" placeholder="Enter Here"></input>
              </Col>
              <Col lg={8}>
                <h4 className="deliveryLabel">Landmark (Optional)</h4>
                <input className="deliveryInput" placeholder="Enter Here"></input>
              </Col>
              <Col lg={8}>
                <h4 className="deliveryLabel">Alternate Phone Number</h4>
                <input className="deliveryInput" placeholder="Enter Here"></input>
              </Col>
            </Row>
          </Col>

          <Col lg={24} style={{  }}>
            <div className="deliveryButtonDiv" style={{ display: "flex", justifyContent:"space-between" }}>
              <input id="check1" type="checkbox"></input>
              <label for="check1" style={{
                marginLeft:"-66%",
                marginTop:"1.7%"
              }} className="checkTextt">Save Address for future?</label>
              
              <button className="deliveryButton">Deliver Here</button>
            </div>
          </Col>
        </form>
      </Row>
    </div>
  );
}
