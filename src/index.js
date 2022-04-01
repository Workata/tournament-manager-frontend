import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";

// * color theme
import mainTheme from './themes/mainTheme';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
