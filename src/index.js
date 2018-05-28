import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { Provider } from "unstated";
import App from "./App";
import "focus-visible";
import "typeface-karmilla";
import "./index.css";

ReactDOM.render(
  <Provider>
    <Helmet titleTemplate="%s · Newbie Talk" defaultTitle="Newbie Talk" />
    <App />
  </Provider>,
  document.getElementById("root")
);
