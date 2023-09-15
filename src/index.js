import React from "react";
import ReactDOM from "react-dom";

// import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

import "antd/dist/reset.css";
import "./index.css";
import Store from "./store";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
ReactDOM.render(
  // <React.StrictMode>
  // <Router history={Utils.history}>

  <Router basename="/">
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </Router>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
