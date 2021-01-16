import React from "react";
import { connect } from "react-redux";
import { onSelectCountry } from "../actions";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    marginTop: "3rem",
  },

  img: {
    maxHeight: 220,
    maxWidth: "100%",
  },

  span: {
    opacity: "0.6",
  },

  bordersContainer: {
    marginTop: "2rem",
  },
  bordersTitle: {
    marginBottom: "1rem",
    marginTop: "0.5rem",
  },

  btn: {
    marginRight: "0.5rem",
  },
});

const CountryDetails = ({ onSelectCountry, selectedCountry }) => {
  const classes = useStyles();
  const countryBox = !selectedCountry.name ? (
    "loading"
  ) : (
    <Grid container spacing={3} className={classes.grid}>
      <Grid item xs={12} sm={5}>
        <img src={selectedCountry.flag} alt="flag" className={classes.img} />
      </Grid>
      <Grid item container xs={12} sm={7} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">{selectedCountry.name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2">
            Native Name:{" "}
            <span className={classes.span}>{selectedCountry.nativeName}</span>
          </Typography>
          <Typography variant="subtitle2">
            Population:{" "}
            <span className={classes.span}>{selectedCountry.population}</span>
          </Typography>
          <Typography variant="subtitle2">
            Region:{" "}
            <span className={classes.span}>{selectedCountry.region}</span>
          </Typography>
          <Typography variant="subtitle2">
            Sub Region:{" "}
            <span className={classes.span}>{selectedCountry.subregion}</span>
          </Typography>
          <Typography variant="subtitle2">
            Capital:{" "}
            <span className={classes.span}>{selectedCountry.capital}</span>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2">
            {" "}
            Top Level Domain:{" "}
            <span className={classes.span}>
              {selectedCountry.topLevelDomain[0]}
            </span>
          </Typography>
          <Typography variant="subtitle2">
            {" "}
            Currencies:{" "}
            <span className={classes.span}>
              {selectedCountry.currencies[0].name}
            </span>
          </Typography>
          <Typography variant="subtitle2">
            {" "}
            Languages:{" "}
            <span className={classes.span}>
              {selectedCountry.languages[0].name}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} container className={classes.bordersContainer}>
          <Grid item xs={12} sm={3} className={classes.bordersTitle}>
            Border Countries:
          </Grid>
          <Grid item xs={12} sm={9}>
            <Button className={classes.btn} variant="outlined" size="small">
              france
            </Button>{" "}
            <Button className={classes.btn} variant="outlined" size="small">
              Libya
            </Button>{" "}
            <Button className={classes.btn} variant="outlined" size="small">
              sudan
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  const handleClick = () => {
    onSelectCountry("egypt");
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
      {countryBox}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { selectedCountry: state.selectedCountry };
};

export default connect(mapStateToProps, { onSelectCountry })(CountryDetails);
