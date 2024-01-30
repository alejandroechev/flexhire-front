import { RelayEnvironmentProvider } from "react-relay";
import createRelayEnvironment from "./RelayEnvironment";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Profile from "./pages/Profile"
import reportWebVitals from "./reportWebVitals";

import 'react-tooltip/dist/react-tooltip.css'

const urlParams = new URLSearchParams(window.location.search);
const apiKey = urlParams.get('apiKey');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RelayEnvironmentProvider environment={createRelayEnvironment(apiKey)}>
    <React.StrictMode>
      <Profile />
    </React.StrictMode>
  </RelayEnvironmentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
