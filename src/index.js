import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { createStore } from "redux";

//Ation increment
const increment = () => ({ type: "INCREMENT" });

const decrement = () => ({ type: "DECREMENT" });

//reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(counter);

//display it in console

store.subscribe(() => alert(store.getState()));

//dispatch
store.dispatch(increment());

store.dispatch(increment());

store.dispatch(increment());

store.dispatch(decrement());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
