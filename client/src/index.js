import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
// import StickyFooter from "react-sticky-footer";
axios
  .get("/api/auth/loggedin")
  .then((response) => {
    console.log("User", response.data);
    ReactDOM.render(
      <Router>
        <App user={response.data} />
        {/* <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: "#999999",
            padding: "2rem",
          }}
          stickyStyles={{
            backgroundColor: "rgba(255,255,255,.8)",
            padding: "2rem",
          }}
        /> */}
        <React.Fragment>
          <footer>
            <ul className="footer-options">
              <li className="footer-link">
                <a href="#" className="footer-linktext">
                  Legal
                </a>
              </li>
              <li className="footer-link">
                <a href="#" className="footer-linktext">
                  Contact Us
                </a>
              </li>
            </ul>
            <span>
              © 2021 Developed by Travel-Clever Team. All Rights Reserved.
            </span>
          </footer>
        </React.Fragment>
      </Router>,
      document.getElementById("root")
    );
  })

  .catch((err) => console.log(err));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
