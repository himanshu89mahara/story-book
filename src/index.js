import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./Store/Reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import AuthProvider from "./Store/Context/AuthProvider";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...[thunk]))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </Provider>
);
