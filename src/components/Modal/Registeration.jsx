import { Col, Modal, Row } from "antd";
import React, { useState } from "react";
import Button from "../Button";
import "./register.css";
import close from "../../assets/images/cross.svg";
import Colors from "../../config/colors";
import { AppAction } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Utils } from "../../config";

const Registeration = ({
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
  dataCheck,
}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    referralCode: "",
    countryCode: "",
    emailErrMsg: "",
    passErrMsg: "",
    phoneErrMsg: "",
    nameErrMsg: "",
    referralErrMsg: "",
    countryErrMsg: "",
    validEmail: true,
    validPass: true,
    validPhone: true,
    validName: true,
    validCCode: true,
    validRCode: true,
  });

  let initialValues = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    referralCode: "",
    countryCode: "",
    emailErrMsg: "",
    passErrMsg: "",
    phoneErrMsg: "",
    nameErrMsg: "",
    referralErrMsg: "",
    countryErrMsg: "",
    validEmail: true,
    validPass: true,
    validPhone: true,
    validName: true,
    validCCode: true,
    validRCode: true,
  };

  let formData = new FormData();

  const signup = () => {
    const {
      name,
      email,
      password,
      mobile,
      countryCode,
      referralCode,
      validEmail,
      validPass,
      validPhone,
      validName,
      validCCode,
      validRCode,
    } = state;
    if (!email) {
      setState({
        ...state,
        emailErrMsg: "Please enter email.",
        validEmail: false,
      });
    } else if (!validEmail)
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
        validPhone: false,
      });
    else if (!validPhone) {
      setState({
        ...state,
        phoneErrMsg: "Enter a valid mobile number",
      });
    } else if (!name) {
      setState({
        ...state,
        nameErrMsg: "Please enter name.",
        validName: false,
      });
    } else if (!validName) {
      setState({
        ...state,
        nameErrMsg: "Please enter a valid name.",
      });
    } else if (!referralCode) {
      setState({
        ...state,
        referralErrMsg: "Please enter Code.",
        validRCode: false,
      });
    } else if (!validRCode) {
      setState({
        ...state,
        referralErrMsg: "Please enter a valid Code.",
      });
    } else if (!countryCode) {
      setState({
        ...state,
        countryErrMsg: "Please enter Country.",
        validCCode: false,
      });
    } else if (!validCCode) {
      setState({
        ...state,
        countryErrMsg: "Please enter a valid Country.",
      });
    } else {
      formData.append("name", name);
      formData.append("mobile", mobile);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("country_code", countryCode);
      formData.append("referral_code", referralCode);

      dispatch(
        AppAction.Register(formData, (res) => {
          if (res.status === 200 && !res.data.error) {
            onCancel();
            setState(initialValues);
          } else if (res.status === 200 && res.data.error) {
            console.log("err Msg", res.data.message);
            Utils.showMessage("error", res.data.message);
          }
        })
      );

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

  const validateName = (name) => {
    // let validEmail = Utils.emailRegex.test(String(email).toLowerCase());
    let validName = name.length > 0;
    setState({ ...state, name, validName, nameErrMsg: "" });
  };

  const validateCCode = (countryCode) => {
    // let validEmail = Utils.emailRegex.test(String(email).toLowerCase());
    let validCCode = countryCode.length > 0;
    setState({ ...state, countryCode, validCCode, countryErrMsg: "" });
  };

  const validateRCode = (referralCode) => {
    // let validEmail = Utils.emailRegex.test(String(email).toLowerCase());
    let validRCode = referralCode.length > 0;
    setState({ ...state, referralCode, validRCode, referralErrMsg: "" });
  };

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
                <h1>Create Account</h1>
                <h4>Please enter detail to create account</h4>
              </Col>
            </Row>
          </Col>
          <form>
            <Row span={24} gutter={12}>
              <Col span={12}>
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input
                      className="userInput"
                      placeholder="Name"
                      value={state.name}
                      onChange={(e) => validateName(e.target.value)}
                    />
                    <p className="errorClass" style={{ color: "maroon" }}>
                      {state.nameErrMsg}
                    </p>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input
                      className="passwordInput"
                      placeholder="Mobile Number"
                      value={state.mobile}
                      onChange={(e) => validatePhone(e.target.value)}
                    />
                    <p className="errorClass" style={{ color: "maroon" }}>
                      {state.phoneErrMsg}
                    </p>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input
                      className="passwordInput"
                      placeholder="Referral Code"
                      value={state.referralCode}
                      onChange={(e) => validateRCode(e.target.value)}
                    ></input>
                    <p className="errorClass" style={{ color: "maroon" }}>
                      {state.referralErrMsg}
                    </p>
                  </Row>
                </Col>
              </Col>

              <Col span={12}>
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input
                      className="userInput"
                      placeholder="Email"
                      value={state.email}
                      onChange={(e) => validateEmail(e.target.value)}
                    />
                    <p className="errorClass" style={{ color: "maroon" }}>
                      {state.emailErrMsg}
                    </p>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input
                      className="passwordInput"
                      placeholder="Password"
                      value={state.password}
                      onChange={(e) => validatePass(e.target.value)}
                    />
                    <p className="errorClass" style={{ color: "maroon" }}>
                      {state.passErrMsg}
                    </p>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row justify="center" gutter={[0, 5]}>
                    <input
                      className="passwordInput"
                      placeholder="Country Code"
                      value={state.countryCode}
                      onChange={(e) => validateCCode(e.target.value)}
                    />
                    <p className="errorClass" style={{ color: "maroon" }}>
                      {state.countryErrMsg}
                    </p>
                  </Row>
                </Col>
              </Col>
            </Row>
          </form>

          <Col span={24}>
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
                  className="hHomeBtn newBtn"
                  style={{
                    width: "330px",
                    marginLeft: "-15px",
                    marginTop: "25px",
                    backgroundColor: Colors.ButtonColor,
                  }}
                  onClick={(x) => {
                    x.preventDefault();
                    signup();
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
              <a style={{ color: Colors.Primary }} className="signUp">
                Login
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
export default Registeration;
