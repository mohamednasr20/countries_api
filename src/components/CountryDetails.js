import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { onSelectCountry, fetchCountries } from "../actions";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useStyles from "../styles/CountryDetailsStyles";
import CountryInfo from "./CountryInfo";
import CountryBorders from "./CountryBorders";

const CountryDetails = ({
  fetchCountries,
  onSelectCountry,
  selectedCountry,
  countries,
  match,
}) => {
  const classes = useStyles();

  useEffect(() => {
    fetchCountries();
    onSelectCountry(match.params.name);
  }, []);

  return (
    <Container>
      <Link className={classes.link} to="/">
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Link>

      {selectedCountry.name && (
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} sm={5}>
            <img
              src={selectedCountry.flag}
              alt="flag"
              className={classes.img}
            />
          </Grid>
          <Grid item container xs={12} sm={7} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">{selectedCountry.name}</Typography>
            </Grid>
            <CountryInfo country={selectedCountry} />
            <CountryBorders
              country={selectedCountry}
              countries={countries}
              onSelectCountry={onSelectCountry}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { selectedCountry: state.selectedCountry, countries: state.countries };
};

export default connect(mapStateToProps, { onSelectCountry, fetchCountries })(
  CountryDetails
);
