import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    height: "98vh"
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.container}
          xs={12}
        >
          <img src={require("assets/img/reactdonis.jpg")} />
        </Grid>
      </Grid>
    </div>
  );
}
