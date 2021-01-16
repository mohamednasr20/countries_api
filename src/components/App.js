import React from "react";
import { connect } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import CountriesList from "./CountriesList";
import Header from "./Header";
import useStyles from "../styles/AppStyles";
import CountryDetails from "./CountryDetails";

const App = ({ isDarkMode }) => {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      },
      background: {
        paper: isDarkMode ? "hsl(207, 26%, 17%)" : " hsl(0, 0%, 98%)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className={classes.root} square>
        <Header />
        <CountryDetails />
        {/* <CountriesList />  */}
      </Paper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return { isDarkMode: state.isDarkMode };
};

export default connect(mapStateToProps)(App);
