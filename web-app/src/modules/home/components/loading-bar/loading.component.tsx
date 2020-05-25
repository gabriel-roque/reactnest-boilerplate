import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useStyles } from './loading.sytles';

interface Props {
  failedLoad: boolean;
}

export default function LoadingBar(props: Props) {
  const [text, setText] = useState('Loading data respositore Github...');
  const [visible, setVisible] = useState(true);
  const classes = useStyles();

  if (props.failedLoad) {
    setTimeout(() => {
      setText('Failed in load data respositore Github... :(');
      setVisible(true);
    }, 5000);
  } else {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }

  return (
    <>
      {visible && (
        <div className={classes.root}>
          <LinearProgress />

          <Grid container item justify="center">
            <h3>{text}</h3>
          </Grid>
        </div>
      )}
    </>
  );
}
