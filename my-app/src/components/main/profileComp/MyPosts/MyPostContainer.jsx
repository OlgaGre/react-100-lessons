import React from "react";

import MyPosts from "./MyPosts";
// import postsItems from'./../../../../index'
import {
  addNewPostActionCreator,
  changeTextInTexareaInNewPostActionCreator,
} from "../../../../redux/profileReducer";
const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addNewPostActionCreator());
  };
  let changeTextInState = (event) => {
    let text = event.target.value;
    props.dispatch(changeTextInTexareaInNewPostActionCreator(text));
  };
  return (
    <MyPosts
    textInTextArea = {props.store.profilePage.textInTextArea}
      posts={props.store.profilePage.postsContentArr}
      addPost={addPost}
      changeTextInState={changeTextInState}
    />
  );
};

export default MyPostsContainer;
