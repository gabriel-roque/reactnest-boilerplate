import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { router as RouterView, store } from 'config';

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
