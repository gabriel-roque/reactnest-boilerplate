import React from 'react';

import { CircularProgress, Grid, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
    },
    circle: {
      color: '#ed2945',
    },
  }),
);

export function LoadingCircle() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignContent="center" className={classes.root}>
      <Grid container item justify="center">
        <CircularProgress className={classes.circle} />
      </Grid>
      <h3>Carregando...</h3>
    </Grid>
  );
}
