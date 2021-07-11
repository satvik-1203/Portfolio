import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./styles/app.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
