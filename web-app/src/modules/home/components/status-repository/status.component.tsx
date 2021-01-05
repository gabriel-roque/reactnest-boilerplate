import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import { useStyles } from './status.styles';

import { faCodeBranch, faStar, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chip } from 'modules/home/components';
import { LoadingBar } from 'modules/home/components';
import { getForksRepository, getStarsRepository, getWatchsRepository } from 'modules/home/store/home.actions';

export default function StatusRepository() {
  const classes = useStyles();
  const repository = useSelector(({ home }: any) => home.repository)
  const dispath = useDispatch()

  useEffect(() => {
    dispath(getStarsRepository())
    dispath(getForksRepository())
    dispath(getWatchsRepository())
  }, [dispath]);

  return (
    <Grid container spacing={2} justify="center" className={classes.badges}>
      {repository.error && <LoadingBar failedLoad={repository.error} />}

      <Grid item>
        <Chip label="Stars" icon={<FontAwesomeIcon icon={faStar} />} count={repository.stars.length} />
      </Grid>
      <Grid item>
        <Chip label="Forks" icon={<FontAwesomeIcon icon={faCodeBranch} />} count={repository.forks.length} />
      </Grid>
      <Grid item>
        <Chip label="Watchs" icon={<FontAwesomeIcon icon={faEye} />} count={repository.watchs.length} />
      </Grid>
    </Grid>
  );
}
