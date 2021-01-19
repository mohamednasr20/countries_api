import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
}));

export default useStyles;
