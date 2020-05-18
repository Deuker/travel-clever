import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

axios
  .get("/api/auth/loggedin")
  .then((response) => {
    console.log("User", response.data);
    ReactDOM.render(
      <Router>
        <App user={response.data} />
      </Router>,
      document.getElementById("root")
    );
  })

  .catch((err) => console.log(err));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
