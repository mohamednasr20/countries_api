import React, { useEffect } from "react";
import CountriesNav from "./CountriesNav";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { fetchCountries } from "../actions";
import CountryCard from "./CountryCard";
import { Container } from "@material-ui/core";
import useStyles from "../styles/CountriesListStyles";

const CountriesList = ({ countries, fetchCountries, isDarkMode }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchCountries();
  }, []);

  const countriesList = !countries.length
    ? "loading"
    : countries.map((country) => {
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
      });

  return (
    <Container>
      <CountriesNav />

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
