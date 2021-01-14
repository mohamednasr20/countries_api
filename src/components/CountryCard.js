import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
});

const CountryCard = (props) => {
  const { flag, name, population, region, capital, darkMode } = props;
  const classes = useStyles(props);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="120"
            image={flag}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Population: {population}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Region: {region}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Capital: {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CountryCard;
