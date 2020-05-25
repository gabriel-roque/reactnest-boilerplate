import React from 'react';

import { useStyles } from './chip.styles';

interface Props {
  label: string;
  count: number;
  icon: any;
}

export default function Chip(props: Props) {
  const classes = useStyles();

  return (
    <span className={classes.chip}>
      {props.icon} {props.label} <span className={classes.circle}> {props.count ? props.count : '---'}</span>
    </span>
  );
}
