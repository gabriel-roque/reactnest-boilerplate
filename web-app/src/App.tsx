import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { router as RouterView, store } from 'app/config';

import 'assets/css/global.css';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterView />
      </Router>
    </Provider>
  );
}
