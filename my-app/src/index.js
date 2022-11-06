import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// postsContentArr// import Post from './components/main/profileComp/MyPosts/Post/Post';

let postsContentArr = [
  { message: "1 post", likes: 2 },
  { message: "2 post", likes: 3 },
];
let interlocutorsArr = [
  { id: 1, name: "sasha" },
  { id: 2, name: "olga" },
];
let messagersArr = [
  {mess: ' hi'},
  {mess: 'bay'}
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={postsContentArr} interlocutorsArr={interlocutorsArr} messagersArr={messagersArr}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export default postsItems
