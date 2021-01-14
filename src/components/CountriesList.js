import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { fetchCountries } from "../actions";
import CountryCard from "./CountryCard";

const CountriesList = ({ countries, fetchCountries, darkMode }) => {
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
            darkMode={darkMode}
          />
        );
      });

  return (
    <Grid container spacing={3}>
      {countriesList}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return { countries: state.countries };
};

export default connect(mapStateToProps, { fetchCountries })(CountriesList);
