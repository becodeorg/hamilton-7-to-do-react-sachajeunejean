// React imports
import React from "react";
import ReactDOM from "react-dom/client";

// App imports
import "./styles/app.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
