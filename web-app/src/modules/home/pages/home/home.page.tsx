import React from 'react';

import { DefaultLayout } from 'layouts';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { techs } from './home.mock';
import { useStyles } from './home.styles';

import { Banner, Card } from 'modules/home/components';

export default function HomePage() {
  const classes = useStyles();

  return (
    <DefaultLayout>
      <Banner />
      <Container className={classes.container} maxWidth="md">
        <Grid container justify="center" spacing={4}>
          {techs.map(tech => (
            <Grid item key={tech.name} xs={12} sm={6} md={4}>
              <Card item={tech} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </DefaultLayout>
  );
}
