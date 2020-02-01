import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  page: {
    height: "98vh"
  },
  logo: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(10)
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container className={classes.page}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid container item justify="center" xs={10} md={8} xl={6}>
          <img
            src={require("assets/img/starwars-logo.png")}
            className={classes.logo}
          />
          <Link to="/login">
            <Fab variant="extended" color="primary" className={classes.button}>
              <b>Go to battle</b>
            </Fab>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
