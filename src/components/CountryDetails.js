import React from "react";
import { connect } from "react-redux";
import { onSelectCountry } from "../actions";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useStyles from "../styles/CountryDetailsStyles";
import CountryInfo from "../components/CountryInfo";
import CountryBorders from "./CountryBorders";

const CountryDetails = ({ onSelectCountry, selectedCountry, countries }) => {
  const classes = useStyles();

  const handleClick = () => {
    onSelectCountry("france");
  };

  return (
    <Container>
      <Button
        variant="outlined"
        onClick={handleClick}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>

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
            <CountryBorders country={selectedCountry} countries={countries} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { selectedCountry: state.selectedCountry, countries: state.countries };
};

export default connect(mapStateToProps, { onSelectCountry })(CountryDetails);
