import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/app.scss";

ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById("root")
);
