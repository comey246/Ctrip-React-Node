import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.less";
import { PersistGate } from "redux-persist/integration/react";
import {persistor, store} from "@/redux/index.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
  </PersistGate>
    </Provider>
  </React.StrictMode>
);
