import React from "react";
import { connect } from "react-redux";
import { toggleDarkMode } from "../actions";
import { Container, Typography, Button } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import useStyles from "../styles/HeaderStyles";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const classes = useStyles({ isDarkMode });

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="subtitle1">Where In The world ?</Typography>
        <Button
          variant="text"
          endIcon={<Brightness3Icon />}
          onClick={toggleDarkMode}
        >
          Dark Mode
        </Button>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isDarkMode: state.isDarkMode };
};

export default connect(mapStateToProps, { toggleDarkMode })(Header);
