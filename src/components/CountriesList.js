import React, { useEffect } from "react";
import CountryCard from "./CountryCard";
import CountriesForm from "./CountriesForm";
import useStyles from "../styles/CountriesListStyles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { fetchCountries } from "../actions";
import { Container } from "@material-ui/core";

const CountriesList = ({ countries, fetchCountries, isDarkMode }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countriesList = !countries.length ? (
    <CircularProgress color="inherit" />
  ) : (
    countries.map((country) => {
      return (
        <CountryCard
          key={country.name}
          name={country.name}
          flag={country.flag}
          title={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          darkMode={isDarkMode}
        />
      );
    })
  );

  return (
    <Container>
      <CountriesForm />

      <Grid
        className={classes.root}
        container
        spacing={3}
        justify="center"
        alignContent="center"
      >
        {countriesList}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    isDarkMode: state.isDarkMode,
    selectedRegion: state.selectedRegion,
  };
};

export default connect(mapStateToProps, { fetchCountries })(CountriesList);
