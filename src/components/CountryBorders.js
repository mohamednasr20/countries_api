import React from "react";
import { Grid, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bordersContainer: {
    marginTop: "2rem",
  },
  bordersTitle: {
    marginBottom: "1rem",
    marginTop: "0.5rem",
  },

  btn: {
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
  },
});

const CountryBorders = ({ country, countries }) => {
  const classes = useStyles();

  const borderCountryFullName = (code) => {
    const country = countries.find((country) => country.alpha3Code === code);
    return country.name;
  };
  return (
    <Grid item xs={12} container className={classes.bordersContainer}>
      <Grid item xs={12} sm={3} className={classes.bordersTitle}>
        Border Countries:
      </Grid>
      <Grid item xs={12} sm={9}>
        {country.borders.map((border) => (
          <Button
            key={border}
            className={classes.btn}
            variant="outlined"
            size="small"
          >
            {borderCountryFullName(border)}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
};

export default CountryBorders;
