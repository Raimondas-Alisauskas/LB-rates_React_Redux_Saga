import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from '../reducers';
import sagas from '../sagas';

function storeFactory() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware);

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const store = createStore(rootReducer, composeEnhancers(middleware));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  sagaMiddleware.run(sagas);

  return store;
}

export default storeFactory();
