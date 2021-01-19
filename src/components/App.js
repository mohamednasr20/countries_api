import React from "react";
import Header from "./Header";
import CountriesList from "./CountriesList";
import CountryDetails from "./CountryDetails";
import useStyles from "../styles/AppStyles";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const App = ({ isDarkMode }) => {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: {
        main: "hsl(0, 0%, 100%)",
        dark: "hsl(0, 0%, 100%)",
        light: "hsl(200, 15%, 8%)",
      },
      background: {
        paper: isDarkMode ? "hsl(207, 26%, 17%)" : " hsl(0, 0%, 98%)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Paper elevation={0} className={classes.root} square>
          <Header />
          <Switch>
            <Route path="/" exact>
              <CountriesList />
            </Route>
            <Route path="/countries/:name" exact>
              <CountryDetails />
            </Route>
          </Switch>
        </Paper>
      </Router>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return { isDarkMode: state.isDarkMode };
};

export default connect(mapStateToProps)(App);
