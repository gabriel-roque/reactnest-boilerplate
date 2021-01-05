import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import new modules redux here
import auth from 'modules/auth/store/auth.reducer';
import home from 'modules/home/store/home.reducer';

// Connect new modules redux here
const reducers = combineReducers({ auth, home });

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

let composeEnhancer = compose;

if (process.env.REACT_APP_ENVIRONMENT === 'development') {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
