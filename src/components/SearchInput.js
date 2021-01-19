import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { onSearchByName } from "../actions";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import useStyles from "../styles/SearchInputStyles";

const SearchInput = ({ onSearchByName }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timedOut = setTimeout(() => {
      if (searchTerm) {
        onSearchByName(searchTerm);
      }
    }, 1000);
    return () => {
      clearTimeout(timedOut);
    };
  }, [searchTerm]);

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          value={searchTerm}
          onChange={(e) => handleChange(e)}
          placeholder="Search for a country…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );
};

export default connect(null, { onSearchByName })(SearchInput);
