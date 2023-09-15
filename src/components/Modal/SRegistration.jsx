import { Col, Modal, Row } from "antd";
import React from "react";
import Button from "../Button";
import "./register.css";
import close from "../../assets/images/cross.svg";

const SRegisteration = ({
  title = "Sample Modal",
  description,
  open,
  closeable = true,
  className,
  onCancel,
  gutter = [0, 24],
  rightButtonText,
  onClickLeft,
  onClickRight,
  onClickCancel,
  loading,
}) => {
  if (open) {
    return (
      <Modal
        open={true}
        className={className}
        onCancel={onCancel}
        closable={true}
        footer={null}
      >
        <Row gutter={gutter} justify="left">
          <Col span={24}>
            <Row justify="left">
              <Col style={{ textAlign: "left" }}>
                <h1 >Create Account</h1>
                <h4>Please enter detail to create account</h4>
              </Col>
            </Row>
          </Col>
          <form>
            <Row span={24}  gutter={12} >
              <Col span={12}>
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input className="userInput" placeholder="Name"></input>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input
                      className="passwordInput"
                      placeholder="Password"
                    ></input>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input
                      className="passwordInput"
                      placeholder="Mobile Number"
                    ></input>
                  </Row>
                </Col>
                
              </Col>

              <Col span={12} >
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input className="userInput" placeholder="Email"></input>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input
                      className="passwordInput"
                      placeholder="Confirm Password"
                    ></input>
                  </Row>
                </Col>
              </Col>
            </Row>
          </form>

          <Col span={24} >
            
            <Row justify={"center"}>
            <Col span={24} className="checkBoxText">
                  <Row justify="left" gutter={[0, 5]} className="condition">
                    
                    <input type="checkbox" id="check"></input>
                    <label className="checkText" for="check">
                      I Agree with<a className="tc"> Terms & Condition</a>
                    </label>
                  </Row>
                </Col>
              <Col offset={1}>
                <button
                  className="hHomeBtn"
                  style={{
                    width: "330px",
                    marginLeft: "-15px",
                    marginTop: "25px",
                  }}
                >
                  Create Account
                </button>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <Row justify="center" gutter={[0, 5]}>
              <p className="signText">Already have an account?</p>
              <a className="signUp">Login</a>
            </Row>
          </Col>
        </Row>
      </Modal>
    );
  } else {
    return <></>;
  }
};
export default SRegisteration;
