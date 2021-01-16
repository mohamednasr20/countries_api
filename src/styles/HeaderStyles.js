import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1rem 0",
    marginBottom: "2rem",
    background: (props) =>
      props.isDarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: (props) =>
      props.isDarkMode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default useStyles;
