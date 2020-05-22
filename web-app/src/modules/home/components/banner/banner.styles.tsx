import ReactLogo from 'assets/img/logos/react-bg.png';

import { makeStyles } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${ReactLogo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '100% -300%;',
    },
  },
  buttons: {
    marginTop: theme.spacing(4),
  },
  githubIcon: {
    marginRight: 15,
  },
  btnGithub: {
    backgroundColor: palletColors.github,
    color: 'white',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: '#3a3a3a',
    },
  },
  reactdonis: {
    width: '100%',
  },
  badges: {
    marginTop: 25,
  },
}));
