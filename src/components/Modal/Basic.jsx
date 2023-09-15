import { Col, Modal, Row } from "antd";
import React from "react";
import Button from "../Button";
import "./login.css";
import close from '../../assets/images/cross.svg';


const Basic = ({
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
        
        <Row gutter={gutter} justify="center">
          <Col span={24}>
            <Row justify="center">
              <Col style={{ textAlign: "center" }}>
                <h1>Login</h1>
                <h4>Please Login to your Account</h4>
              </Col>
            </Row>
          </Col>
          <form>
            <Col span={24}>
              <Row justify="center" gutter={[0, 5]}>
                <input className="userInput" placeholder="Email"></input>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify="center" gutter={[0, 5]}>
                <input className="passwordInput" placeholder="Password"></input>
              </Row>
            </Col>
            <Col span={24} >
              <Row justify="left" gutter={[0, 5]}>
                <input type="checkbox" id="check"></input>
                <label className="checkText" for="check">Remember Me?</label>
                <a className="forgotPass">Forgot Password?</a>
              </Row>
            </Col>
          </form>

          <Col span={24}>
            <Row justify={"center"}>
              <Col offset={1}>
              <button className="hHomeBtn" style={{width:"330px", marginLeft:"-15px", marginTop:"25px"}}>Login</button>
              </Col>
            </Row>
          </Col>


          <Col span={24} >
              <Row justify="center" gutter={[0, 5]}>
                <p className="signText">Dont you have an account?</p>
                <a className="signUp">Sign Up</a>
              </Row>
            </Col>
        </Row>
      </Modal>
    );
  } else {
    return <></>;
  }
};
export default Basic;
