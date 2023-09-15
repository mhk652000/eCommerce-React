import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/images/Logo.svg";
import "./nav.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { RxDividerVertical } from "react-icons/rx";
import Dropdownn from "../Dropdown/Dropdown";
import { Modal } from "../../components";
import { useState } from "react";
import { Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Colors from "../../config/colors";

export default function Nav() {
  const user = localStorage.getItem("user");
  const data = useSelector((state) => state.AppReducer);
  console.log("selectorDataInNav", data?.user);

  const navigate = useNavigate();
  let inititialState = {
    toggle: "",
    date: "",
    time: "",
    open: false,
    loginOpen: false,
    registerOpen: false,
    snackBar: false,
    paginationCount: 5,
    paginationOffset: 0,
  };
  const [state, setState] = useState(inititialState);
  // const closer = () => {
  //   // setState(...state, loginOpen = false);
  // };

  // function closeFn() {
  //   setState();
  // }

  return (
    <div className="mainNav">
      <div className="upperSection">
        <div className="detailsBar">
          <div className="phone">
            <IoIosCall className="phoneIcon" />
            <p className="text headTextt">415 - 621-5000</p>
            <div className="mail">
              <MdEmail className="headMailIcon" />
              <p className="text headTextt">ecoextension@yahoo.com</p>
            </div>
          </div>

          <div className="loginBar">
            {!user ? (
              <>
                <button
                  className="loginButton text"
                  text="Open Modal"
                  onClick={() => setState({ loginOpen: true })}
                >
                  Sign In
                </button>
                <Col>
                  <Modal.Login
                    open={state.loginOpen}
                    // onClickCancel={}
                    onCancel={() =>
                      setState({
                        open: false,
                      })
                    }
                    maxWidth="sm"
                    onClose={() =>
                      setState({
                        open: false,
                      })
                    }
                    className="loginModal"
                  />
                </Col>

                <RxDividerVertical className="danda" />

                <button
                  className="registerButton text"
                  text="Open Modal"
                  onClick={() => setState({ open: true })}
                >
                  Register
                </button>
                <Col>
                  <Modal.Registeration
                    open={state.open}
                    onCancel={() => setState({ open: false })}
                    maxWidth="sm"
                    onClose={() =>
                      setState({
                        open: false,
                      })
                    }
                    destroyOnClose={true}
                    className="registerModal"
                  />
                </Col>
              </>
            ) : (
              <>
              <p className="text headTextt">Welcome {data?.user?.data?.[0]?.username}!</p>
              <button className="loginButton text"
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("user");
                  navigate("/home");
                  window.location.reload();
                }}
              >
                LogOut
              </button>
              </>
              
            )}
          </div>
        </div>
      </div>

      <div className="lowerSection">
        <img src={logo} className="mainLogo" />
        <div className="navItems">
          <button
            className="navBtn text"
            onClick={() => {
              navigate("/home");
            }}
          >
            HOME
          </button>

          <button
            className="navBtn text"
            onClick={() => {
              navigate("/about-us");
            }}
          >
            ABOUT
          </button>

          <button className="navBtn text">
            <Dropdownn className="productsButton" />
          </button>

          <div>
            {/* <TextField.SelectField 
          options={[
            { value: "apple", label: "Apple" },
            { value: "orange", label: "Orange" },
          ]}
          borderVal={false}
          inputStyle={{ width: 200 }}
          placeholder="PRODUCTS"
          containerStyle={{ margin: 0 }}
          className="navBtn text"
        /> */}
          </div>

          <button
            className="navBtn text"
            onClick={() => {
              navigate("/blog");
            }}
          >
            BLOG
          </button>
          <button
            className="navBtn text"
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            CONTACT US
          </button>
          <div
            style={{ backgroundColor: Colors.Primary, color: Colors.WhiteText }}
            className="itemCount"
          >
            0
          </div>
          <div className="theCart">
            <AiOutlineShoppingCart
              className="cartIcon"
              onClick={() => {
                navigate("/shopping-cart");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
