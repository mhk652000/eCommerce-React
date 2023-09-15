import { Col, Modal, Row } from "antd";
import React, { useState } from "react";
import Button from "../Button";
import "./login.css";
import close from "../../assets/images/cross.svg";
import { Colors, Utils } from "../../config";
import { AppAction } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loader from "../Loader";

const Login = ({
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.AppReducer);

  const [state, setState] = useState({
    email: "",
    password: "",
    mobile: "",
    emailErrMsg: "",
    passErrMsg: "",
    phoneErrMsg: "",
    validEmail: true,
    validPass: true,
    validPhone: true,
  });

  let initialValues = {
    email: "",
    password: "",
    mobile: "",
    emailErrMsg: "",
    passErrMsg: "",
    phoneErrMsg: "",
    validEmail: true,
    validPass: true,
    validPhone: true,
  };
  let formData = new FormData();



  const signin = () => {
    const { email, password, mobile, validEmail, validPass, validPhone } =
      state;
    if (!email)
      setState({
        ...state,
        emailErrMsg: "Please enter email.",
        validEmail: false,
      });
    else if (!validEmail)
      setState({ ...state, emailErrMsg: "Please enter valid email address." });
    else if (!password)
      setState({
        ...state,
        passErrMsg: "Please enter password",
        validPass: false,
      });
    else if (!validPass)
      setState({
        ...state,
        passErrMsg: "Minimum Password length should be atleast 6.",
      });
    else if (!mobile)
      setState({
        ...state,
        phoneErrMsg: "Please enter mobile.",
      });
    else if (!validPhone) {
      setState({
        ...state,
        phoneErrMsg: "Enter a valid mobile number",
      });
    } else {
      formData.append("mobile", mobile);
        formData.append("email",email);
        formData.append("password",password);
      dispatch(
        
        AppAction.SignIn(formData, (res) => {
          if (res.status === 200 && !res.data.error) {
            onCancel();
            setState(initialValues);
          } else if (res.status === 200 && res.data.error) {
            console.log("err Msg", res.data.message);
            Utils.showMessage("error", res.data.message);
          }
        })
      );
      let x = localStorage.getItem("user");
      console.log("In Login Component", x);
    }
  };

  const validateEmail = (email) => {
    let validEmail = Utils.emailRegex.test(String(email).toLowerCase());
    setState({ ...state, email, validEmail, emailErrMsg: "" });
  };

  const validatePass = (password) => {
    let validPass = password.length > 4;
    setState({ ...state, password, validPass, passErrMsg: "" });
  };

  const validatePhone = (mobile) => {
    // let validEmail = Utils.emailRegex.test(String(email).toLowerCase());
    let validPhone = mobile.length >= 7;
    setState({ ...state, mobile, validPhone, phoneErrMsg: "" });
  };
  const onCloseStates = () => {
    setState(initialValues);
    onCancel();
  };

  if (open) {
    return (
      <Modal
        open={open}
        className={className}
        onCancel={onCloseStates}
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
                <input
                  style={{ marginRight: "25px", marginLeft: "10px" }}
                  className="userInput"
                  type={"email"}
                  value={state.email}
                  placeholder={"Email"}
                  onChange={(e) => validateEmail(e.target.value)}
                  label="Email"
                ></input>
                <p className="errorClass" style={{ color: "maroon" }}>
                  {state.emailErrMsg}
                </p>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify="center" gutter={[0, 5]}>
                <input
                  style={{ marginRight: "25px", marginLeft: "10px" }}
                  className="userInput"
                  placeholder={"mobile"}
                  type={"tel"}
                  value={state.mobile}
                  onChange={(e) => validatePhone(e.target.value)}
                  label="mobile"
                ></input>
                <p className="errorClass" style={{ color: "maroon" }}>
                  {state.phoneErrMsg}
                </p>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify="center" gutter={[0, 5]}>
                <input
                  style={{ marginRight: "25px", marginLeft: "10px" }}
                  className="passwordInput"
                  type={"password"}
                  value={state.password}
                  placeholder={"Password"}
                  onChange={(e) => validatePass(e.target.value)}
                  label="Password"
                  password
                ></input>
                <p className="errorClass" style={{ color: "maroon" }}>
                  {state.passErrMsg}
                </p>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify="left" gutter={[0, 5]}>
                <input type="checkbox" id="check"></input>
                <label className="checkText" for="check">
                  Remember Me?
                </label>
                <a className="forgotPass">Forgot Password?</a>
              </Row>
            </Col>

            <Col span={24}>
              <Row justify={"center"}>
                <Col offset={1}>
                  <button
                    className="hHomeBtn newBtn"
                    style={{
                      backgroundColor: Colors.ButtonColor,
                      width: "330px",
                      marginLeft: "-15px",
                      marginTop: "25px",
                    }}
                    onClick={(x) => {
                      x.preventDefault();
                      signin();
                    }}
                  >
                    Login
                  </button>
                </Col>
              </Row>
            </Col>
          </form>

          <Col span={24}>
            <Row justify="center" gutter={[0, 5]}>
              <p className="signText">Dont you have an account?</p>
              <a style={{ color: Colors.Primary }} className="signUp">
                Sign Up
              </a>
            </Row>
          </Col>
        </Row>
      </Modal>
    );
  } else {
    return <></>;
  }
};
export default Login;
