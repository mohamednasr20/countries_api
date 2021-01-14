import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const useStyles = makeStyles({
  root: {
    padding: "1rem 0",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
});
function Header({ handleChange, darkMode }) {
  const classes = useStyles({ darkMode });

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h6">Where In The world</Typography>
        <Button
          variant="text"
          endIcon={<Brightness3Icon />}
          onClick={handleChange}
        >
          Dark Mode
        </Button>
      </Container>
    </div>
  );
}

export default Header;
