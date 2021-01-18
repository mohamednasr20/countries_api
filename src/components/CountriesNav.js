import React, { useState } from "react";
import { connect } from "react-redux";
import { filterCountries, fetchCountries } from "../actions";
import FormControl from "@material-ui/core/FormControl";
import { Container } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import useStyles from "../styles/CountriesNavStyles";
import SearchInput from "./SearchInput";

const CountriesNav = ({ filterCountries, fetchCountries }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    const region = e.target.value;
    region === "All" ? fetchCountries() : filterCountries(region);
  };

  return (
    <Container className={classes.root}>
      <SearchInput />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Filtter By Region
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={""}
          onChange={handleChange}
        >
          <MenuItem value={"All"}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"Americas"}>Americas</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

export default connect(null, { filterCountries, fetchCountries })(CountriesNav);
