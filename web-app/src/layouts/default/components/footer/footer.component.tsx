import React from 'react';

import { Copyright } from 'layouts/default/components';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './footer.styles';

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Gabriel Roque
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Software Developer
      </Typography>
      <Copyright />
    </footer>
  );
}
