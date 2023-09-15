import { message } from "antd";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Colors, Utils } from "./config";
import { ComponentsSample } from "./containers";
import { Loader, Popup } from "./components";
import AuthRoutes from "./config/routes/AuthRoutes";
// import notification from "./config/firebase/notification";

import "./App.css";

const { saveSnackbarRef } = Utils;

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const loader = useSelector((state) => state.AppReducer.loader);

  // useEffect(() => {
  //   notification.resgisterNotifications();
  // }, []);

  return (
    <div>
      {contextHolder}
      <AuthRoutes />
      {/* <Popup.Snackbar ref={(ref) => saveSnackbarRef(ref)} /> */}

      {loader ? (
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.BlackOpacity(0.7),
          }}
        >
          <Loader.Circular size={60} color={Colors.WhiteOpacity(0.7)} />
        </div>
      ) : null}

      {/* <ComponentsSample /> */}
    </div>
  );
};

export default App;
