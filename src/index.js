import { createGlobalStyle, ThemeProvider } from "styled-components";
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

const theme = {
  fontStyle: {
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
  },
  color: {
    Orange: "#EA650F",
    Gray: "#EFEFEF",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
