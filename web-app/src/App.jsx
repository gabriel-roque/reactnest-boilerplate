import React from "react";
import "./assets/css/global.css";

import RouterView from "routes";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "store";

import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

export default function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#ffc501",
        dark: "#65ff00"
      }
    }
  });

  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <RouterView />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
