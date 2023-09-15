import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";

import NavHeader from "./navHeader.jsx";
import SideBar from "./sidebar.jsx";

import "./dashboardLayout.css";

const { Header, Sider } = Layout;
const DashboardLayout = ({ expandible, children }) => {
  const location = useLocation();
  const locationPathname = location.pathname;

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return locationPathname !== "/login" ? (
    <Layout className="dashboard-layout">
      {expandible ? (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={`dashboard-sidebar`}
          width={245}
        >
          <SideBar className={"siderbar"} collapsed={collapsed} />
        </Sider>
      ) : (
        <Sider className={`dashboard-sidebar`} width={245}>
          <SideBar className={"siderbar"} />
        </Sider>
      )}
      <Layout className="dashboard-main">
        <Header className={"dashboard-header"}>
          <NavHeader
            collapsed={collapsed}
            toggle={toggle}
            expandible={expandible}
          />
        </Header>
        <div
          className={`dashboard-main-content ${collapsed && "sidebar-closed"}`}
        >
          {children}
        </div>
      </Layout>
    </Layout>
  ) : null;
};
export default DashboardLayout;
