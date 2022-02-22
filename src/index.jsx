import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RoutesApplication } from "./routes";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <RoutesApplication />
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
