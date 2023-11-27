import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./index.css";
import "./App.css";

import { faCoffee, faCog, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faStar, faCoffee);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
