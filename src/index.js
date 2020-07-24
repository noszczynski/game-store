import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
