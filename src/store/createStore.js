import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducer';
import rootSaga from '../rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);

sagaMiddleware.run(rootSaga);

export default store;