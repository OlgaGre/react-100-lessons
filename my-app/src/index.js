import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import App from "./App";
import StoreContext from "./StoreContext";
// import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderTree = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App
        // store={store.getState()}
        // dispatch = {store.dispatch.bind(store)}
      />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};
renderTree(store._state);
store.subscribe(()=>{
  let state = store.getState()
  renderTree(state)
});

reportWebVitals();
