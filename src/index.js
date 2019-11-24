import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/modules";
import rootSaga from "./store/sagas";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import familyColor from "./themes/calendarTheme";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

console.log(store.getState());
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={{ familyColor }}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
