import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unstated";
import App from "./App";
import "typeface-karmilla";
import "./index.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
