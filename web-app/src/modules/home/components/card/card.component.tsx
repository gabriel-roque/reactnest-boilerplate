import React from 'react';

import CardMUI from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './card.styles';

interface Props {
  item: {
    name: string;
    desc: string;
    image: string;
    link: string;
  };
}

export default function Card(props: Props) {
  const classes = useStyles();

  return (
    <Link href={props.item.link} target="_blank">
      <CardMUI className={classes.card}>
        <CardMedia className={classes.cardMedia} image={props.item.image} title={props.item.name} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.name}
          </Typography>
          <Typography>{props.item.desc}</Typography>
        </CardContent>
      </CardMUI>
    </Link>
  );
}
