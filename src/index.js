import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

const AppWithStore = (
  <Provider store={store}>
    <App store={store} />
  </Provider>
);

ReactDOM.render(AppWithStore, document.getElementById("root"));
registerServiceWorker();
