import React from 'react';

import AlertMUI from '@material-ui/lab/Alert';

import { useStyles } from './alert.styles';

export default function Alert() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AlertMUI variant="filled" severity="error">
        This is an error alert — check it out!
      </AlertMUI>
    </div>
  );
}
