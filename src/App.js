import React, { useState, useEffect } from "react";
import axios from "axios";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    margin: theme.spacing(0),
  },
}));

const App = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(true);
  const [countries, setCountries] = useState([]);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
    spacing: 0,
  });

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const fetchCountriesData = async () => {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      console.log(response.data);
      setCountries(response.data);
    };

    fetchCountriesData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className={classes.root} square>
        <h1>App</h1>
        <Button
          variant="text"
          endIcon={<Brightness3Icon />}
          onClick={handleChange}
        >
          Dark Mode
        </Button>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
