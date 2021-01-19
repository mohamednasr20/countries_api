import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  card: {
    maxWidth: 220,
    height: 280,
    margin: "auto",
    background: (props) =>
      props.darkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
  },

  cardContent: {
    textAlign: "left",
  },
  span: {
    opacity: "0.7",
  },
});

export default useStyles;
