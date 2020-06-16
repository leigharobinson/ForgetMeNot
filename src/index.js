import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import ForgetMeNot from "./ForgetMeNot";

ReactDOM.render(
  <Router>
    <ForgetMeNot />
  </Router>,
  document.getElementById("root")
);
