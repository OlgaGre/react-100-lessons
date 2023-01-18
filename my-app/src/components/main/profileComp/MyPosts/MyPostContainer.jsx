import React from "react";

import MyPosts from "./MyPosts";
// import postsItems from'./../../../../index'
import {
  addNewPostActionCreator,
  changeTextInTexareaInNewPostActionCreator,
} from "../../../../redux/profileReducer";
import StoreContext from "../../../../StoreContext";
const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addNewPostActionCreator());
        };
        let changeTextInState = (event) => {
          let text = event.target.value;
          store.dispatch(changeTextInTexareaInNewPostActionCreator(text));
        };
        return (
          <MyPosts
            textInTextArea={state.profilePage.textInTextArea}
            posts={state.profilePage.postsContentArr}
            addPost={addPost}
            changeTextInState={changeTextInState}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
