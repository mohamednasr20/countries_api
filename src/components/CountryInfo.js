import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "../styles/CountryInfoStyles";

const CountryInfo = ({ country }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={6} className={classes.countryInfo}>
        <Typography className={classes.subtitle} variant="subtitle2">
          Native Name:{" "}
          <span className={classes.span}>{country.nativeName}</span>
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle2">
          Population: <span className={classes.span}>{country.population}</span>
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle2">
          Region: <span className={classes.span}>{country.region}</span>
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle2">
          Sub Region: <span className={classes.span}>{country.subregion}</span>
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle2">
          Capital: <span className={classes.span}>{country.capital}</span>
        </Typography>
      </Grid>
      <Grid item xs={6} className={classes.countryInfo}>
        <Typography className={classes.subtitle} variant="subtitle2">
          {" "}
          Top Level Domain:{" "}
          <span className={classes.span}>{country.topLevelDomain[0]}</span>
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle2">
          {" "}
          Currencies:{" "}
          <span className={classes.span}>{country.currencies[0].name}</span>
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle2">
          {" "}
          Languages:{" "}
          <span className={classes.span}>{country.languages[0].name}</span>
        </Typography>
      </Grid>
    </>
  );
};

export default CountryInfo;
