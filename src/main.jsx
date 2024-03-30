import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ToastContainer />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
