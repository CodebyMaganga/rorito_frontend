import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./App.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider>
        <ToastContainer />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
