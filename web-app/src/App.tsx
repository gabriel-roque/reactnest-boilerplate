import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from 'store';
import RouterView from 'routes';

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
