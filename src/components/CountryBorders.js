import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "../styles/CountryBordersStyles";

const CountryBorders = ({ country, countries, onSelectCountry }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleCountrySelect = (name) => {
    history.push(`/countries/${name}`);
    onSelectCountry(name);
  };

  const borderCountryFullName = (code) => {
    const country = countries.find((country) => country.alpha3Code === code);
    return country ? country.name : "";
  };
  return (
    <Grid item xs={12} container className={classes.bordersContainer}>
      <Grid item xs={12} sm={3} className={classes.bordersTitle}>
        <h4>Border Countries:</h4>
      </Grid>
      <Grid item xs={12} sm={9}>
        {country.borders.map((border) => (
          <Button
            key={border}
            className={classes.btn}
            variant="outlined"
            size="small"
            onClick={() => handleCountrySelect(borderCountryFullName(border))}
          >
            {borderCountryFullName(border)}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
};

export default CountryBorders;
