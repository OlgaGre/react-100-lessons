import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import App from "./App";
import { addNewMessagerInArr, changeTextInTextAreaInMessage, changeTextInTextAreaInNewPost } from "./redux/state";
import { addNewPost } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderTree = (state) => {
 
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addNewPost={addNewPost}
        
        addNewMessagerInArr={addNewMessagerInArr}
        changeTextInTextAreaInNewPost={changeTextInTextAreaInNewPost}
        changeTextInTextAreaInMessage={changeTextInTextAreaInMessage}
     />
    </React.StrictMode>
  );
};
renderTree(state)
subscribe(renderTree)

reportWebVitals();
