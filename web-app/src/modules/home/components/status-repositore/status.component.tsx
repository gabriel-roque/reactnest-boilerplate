import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { useStyles } from './status.styles';

import { faCodeBranch, faStar, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chip } from 'modules/home/components';
import { LoadingBar } from 'modules/home/components';
import { getForksRepositores, getStarsRepositores, getWatchsRepositores } from 'modules/home/store/home.actions';

function StatusRepositore(props: any) {
  const classes = useStyles();

  useEffect(() => {
    props.getStars();
    props.getForks();
    props.getWatchs();
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container spacing={2} justify="center" className={classes.badges}>
      {props.repositore.error && <LoadingBar failedLoad={props.repositore.error} />}

      <Grid item>
        <Chip label="Stars" icon={<FontAwesomeIcon icon={faStar} />} count={props.repositore.stars.length} />
      </Grid>
      <Grid item>
        <Chip label="Forks" icon={<FontAwesomeIcon icon={faCodeBranch} />} count={props.repositore.forks.length} />
      </Grid>
      <Grid item>
        <Chip label="Watchs" icon={<FontAwesomeIcon icon={faEye} />} count={props.repositore.watchs.length} />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  repositore: state.home.repositore,
});

const mapDispatchToProps = dispatch => ({
  getStars: () => dispatch(getStarsRepositores()),
  getForks: () => dispatch(getForksRepositores()),
  getWatchs: () => dispatch(getWatchsRepositores()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusRepositore);
