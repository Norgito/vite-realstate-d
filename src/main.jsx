import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import router
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { InitialState } from "./context/InitialState";
import Reducer from "./context/Reducer";
// import firebase

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
      <StateProvider InitialState={InitialState} Reducer={Reducer}>
        <App />
      </StateProvider>
  </Router>
);