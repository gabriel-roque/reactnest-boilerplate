import React from 'react';

import AppBarMUI from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { palletColors } from 'config';

interface Props {
  title?: string;
}

export function AppBar(props: Props) {
  return (
    <AppBarMUI position="relative" style={{ backgroundColor: palletColors.reactnest }}>
      <Toolbar>
        <b>{props.title ? props.title : 'Generic Title'}</b>
      </Toolbar>
    </AppBarMUI>
  );
}
