import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import { data } from "./data";
import { schoolsData } from "./data";
import { dummyData } from "./data";

import { Provider } from "react-redux";
import store from "./redux_files/store/index";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#BEE6E2",
    },
    secondary: {
      main: red[500],
    },

    textPrimary: {
      main: "red",
    },
    default: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Crimson Text",
    ].join(","),
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme} key={47}>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </ThemeProvider>,
  document.getElementById("root")
);
