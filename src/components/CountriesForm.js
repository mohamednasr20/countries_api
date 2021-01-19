import React from "react";
import SearchInput from "./SearchInput";
import SelectInput from "./SelectInput";
import useStyles from "../styles/CountriesFormStyles";
import { Container } from "@material-ui/core";

const CountriesForm = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <SearchInput />
      <SelectInput />
    </Container>
  );
};

export default CountriesForm;
