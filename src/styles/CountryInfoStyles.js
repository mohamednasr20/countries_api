import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  span: {
    opacity: "0.6",
  },

  countryInfo: {
    marginTop: "2rem",
    lineHeight: "2rem",
  },

  subtitle: {
    paddingTop: "0.75rem",

    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  },
}));

export default useStyles;
