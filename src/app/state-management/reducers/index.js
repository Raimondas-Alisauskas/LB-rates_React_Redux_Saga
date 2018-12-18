import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import main from './main';

const rootReducer = combineReducers({
  main
  // routing: routerReducer
});

export default rootReducer;
