import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// CSS
import "./styles/css/bootstrap.min.css";
import "swiper/css";
import "./styles/css/daterangepicker.min.css";
import "./styles/css/bootstrap-datetimepicker.min.css";
import "./styles/globals.css";
import "./styles/icon.css";
import "./styles/css/style.css";
import "./styles/sass/main.scss";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
