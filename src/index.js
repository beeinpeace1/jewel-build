import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './global';

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={THEME}>
    <Layout />
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);

const THEME = createMuiTheme({
  typography: {
   "fontFamily": "\"Impact\", \"Helvetica\", \"Arial\", sans-serif",
   "fontSize": 14,
   "fontWeightLight": 500,
   "fontWeightRegular": 400,
   "fontWeightMedium": 600
  }
});