import { Col, Row } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Foot from "../../components/Footer/Foot";
import Nav from "../../components/Navbar/Nav";
import { Button, Text, TextField } from "../../components";
import { Colors, Utils } from "../../config";
import { AppAction } from "../../store/actions";
import styles from "./styles";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import DoneCard from "../../components/Card/DoneCard";
import Payment from "../../components/Payment/Payment";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
    emailErrMsg: "",
    passErrMsg: "",
    validEmail: true,
    validPass: true,
  });

  const signin = () => {
    const { email, password, validEmail, validPass } = state;
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
    else {
      dispatch(
        AppAction.SignIn({ user_id: 1, email, password }, () => {
          navigate("/");
        })
      );
      // setTimeout(() => {
      //     navigate("/");
      // }, 3000)
    }
  };

  const validateEmail = (email) => {
    let validEmail = Utils.emailRegex.test(String(email).toLowerCase());
    setState({ ...state, email, validEmail, emailErrMsg: "" });
  };

  const validatePass = (password) => {
    let validPass = password.length > 5;
    setState({ ...state, password, validPass, passErrMsg: "" });
  };

  let dat={
    h1:"heahah",
    h2:"asdasdasdasda",
    h3: "sadasdasdasdasdasdasdasdasdasd"
  }
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        height:"100%",
        // height: "100vh",
        justifyContent: "center",
      }}
    >
      <Nav />
      <Header data={dat}/>
      <Featured />
      
      
      {/* <Foot /> */}
      {/* <Row gutter={[0, 25]} justify="center" style={styles.container}>
        <Col span={24}>
          <Text.Basic
            text="Welcome"
            fontWeight={"bold"}
            fontSize={20}
            color={Colors.White}
          />
        </Col>
        <Col span={24}>
          <Text.Basic
            text="Please Login to Continue"
            fontSize={18}
            color={Colors.White}
          />
        </Col>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={14} style={styles.flex}>
              <TextField.Basic
                type={"email"}
                value={state.email}
                placeholder={"Email"}
                onChange={(e) => validateEmail(e.target.value)}
                label="Email"
                errorText={!state.validEmail && state.emailErrMsg}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={14} style={styles.flex}>
              <TextField.Basic
                type={"password"}
                value={state.password}
                placeholder={"Password"}
                onChange={(e) => validatePass(e.target.value)}
                label="Password"
                password
                errorText={!state.validPass && state.passErrMsg}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify={"center"}>
            <Col>
              <Button.Basic variant="outlined" text="Login" onClick={signin} />
            </Col>
          </Row>
        </Col>
      </Row> */}
    </div>
  );
};

export default SignIn;
