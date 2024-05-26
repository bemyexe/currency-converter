import React from "react";
import ReactDOM from "react-dom/client";
import CurrencyConverter from "./app";

import "./styles/reset.css";
import "./styles/global-styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurrencyConverter />
  </React.StrictMode>
);
