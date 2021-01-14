import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import CountriesList from "./CountriesList";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "auto",
  },
}));

const App = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      background: {
        paper: darkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
      },
    },
  });

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className={classes.root} square>
        <Header handleChange={handleChange} darkMode={darkMode} />

        <Container>
          <CountriesList darkMode={darkMode} />
        </Container>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
