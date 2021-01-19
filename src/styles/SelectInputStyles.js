import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 150,
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
}));

export default useStyles;
