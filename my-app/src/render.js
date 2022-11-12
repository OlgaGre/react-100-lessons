import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// postsContentArr// import Post from './components/main/profileComp/MyPosts/Post/Post';
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
