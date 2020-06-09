import { createGlobalStyle } from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import reset from "styled-reset";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

const GlobalStyle = createGlobalStyle`
${reset}
  body {
    font-family: 'Barlow', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
