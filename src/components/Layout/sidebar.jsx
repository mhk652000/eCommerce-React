import { LayoutFilled, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import React from "react";

import "./sidebar.css";
import Logo from "../../assets/images/logo.png";

const SideBar = ({ collapsed }) => {
  const renderMainNavOptions = () => {
    return (
      <>
        <Menu.Item className="menu-item" key="2" icon={<LayoutFilled />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item className="menu-item" key="3" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
      </>
    );
  };

  return (
    <div className={`sidebar ${collapsed && "sidebar-closed"}`}>
      <div className="logo">
        <img src={Logo} />
        {!collapsed && <span>Admin Panel</span>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="sidebar-menu dashboard-menu"
      >
        {renderMainNavOptions()}
      </Menu>
    </div>
  );
};
export default SideBar;
