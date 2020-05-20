import React from 'react';

import { Footer, AppBar } from 'layouts/default/components';

import CssBaseline from '@material-ui/core/CssBaseline';

export function DefaultLayout(props: any) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar title="REACTDONIS v.2" />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
