import { makeStyles } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles(theme => ({
  chip: {
    padding: theme.spacing(1.5),
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);',
  },
  circle: {
    backgroundColor: palletColors.github,
    padding: theme.spacing(0.5),
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 5,
  },
}));
