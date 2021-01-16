import React from "react";
import useStyles from "../styles/CountryCardStyles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

const CountryCard = (props) => {
  const { flag, name, population, region, capital } = props;
  const classes = useStyles(props);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            image={flag}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
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
