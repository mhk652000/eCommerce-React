import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import React from "react";

import { AppAction } from "../../store/actions";

import Profile from "../../assets/images/profile.png";

// ProfileDropDown
const ProfileDropDown = (props) => {

  const dispatch = useDispatch()

  return (
    <div className="dropDownContainer profileDropDownContainer">
      <Menu className="dropDownList">
        <Menu.Item className="dropDownItem">
          <a rel="noopener noreferrer" onClick={() => dispatch(AppAction.Logout())}>
            Log Out
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ProfileDropDown;
