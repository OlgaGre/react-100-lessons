import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={store.getState()}
       dispatch = {store.dispatch.bind(store)}
      />
    </React.StrictMode>
  );
};
renderTree(store._state);
store.subscribe(renderTree);

reportWebVitals();
