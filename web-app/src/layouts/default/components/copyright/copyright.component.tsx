import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'MIT LICENSE - '}
      <Link color="inherit" href="https://github.com/gabriel-roque">
        Reactnest v.3 -
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}
