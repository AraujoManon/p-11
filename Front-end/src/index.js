import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./assets/components/Router";
import "../../Front-end/src/index.scss";
import { Provider } from "react-redux";
import store from "./redux/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
