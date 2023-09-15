import { Dropdown } from "antd";
import { MenuOutlined, MoreOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import React from "react";

import ProfileDropDown from "./dropdown.jsx";

import Profile from "../../assets/images/profile.png";

// import {
//   ProfileDropDown,
//   NotificationDropDown,
// } from "./DropDowns/DropDowns.js";
// import Profile from "../../images/Profile.svg";
// import notificationsBell from "../../images/notificationsBell.png";
import "./navHeader.css";

const NavHeader = ({ expandible, collapsed, toggle }) => {
  const location = useLocation();
  const title = ((location || {}).pathname || {}).split("/")[1];

  return (
    <div className="nav-header-container">
      <div>
        {expandible &&
          React.createElement(collapsed ? MenuOutlined : MoreOutlined, {
            className: "trigger bg-purple",
            onClick: toggle,
          })}
        <h3 className="dashboard-title">
          {title !== "" ? title : "Dashboard"}
        </h3>
      </div>
      <div className="site-layout-background-right">
        <div className={"headerIcons"}>
          <Dropdown
            trigger={"click"}
            // overlay={<NotificationDropDown />}
            style={{ height: "65px" }}
          >
            <div>{/* <img src={notificationsBell} atl="disapper" /> */}</div>
          </Dropdown>
        </div>
        <div className="profile">
          Username
          <Dropdown
            overlay={<ProfileDropDown />}
            style={{ top: "65px !important" }}
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <img
                src={Profile}
                alt="disappear"
                style={{ width: "45px", height: "auto" }}
              />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default NavHeader;
