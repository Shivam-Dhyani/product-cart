import React from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { Provider } from "react-redux";
const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
};

export const reduxStore = configureStore();

sagaMiddleware.run(rootSaga);

const Store = ({ children }: { children: React.ReactNode }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

export default Store;
