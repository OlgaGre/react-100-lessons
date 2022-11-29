import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
// import postsItems from'./../../../../index'

const MyPosts = (props) => {
  let postsItems = props.posts.map((obj) => (
    <Post content={obj.content} likes={obj.likes} />
  ));

  let newPostEl = React.createRef();
  let addPost = () => {
    props.dispatch({ type: "ADD-NEW-POST" });
  };
  let changeTextInState = () => {
    let text = newPostEl.current.value;
    props.dispatch({type: "CHANGE-TEXT-IN-TEXTAREA-IN-NEW-POST", newTextInTextArea: text});
  };
  return (
    <div className={classes.myPosts}>
      <div className="newPost">
        <textarea
          value={props.textInTextArea}
          name="new post"
          id=""
          cols="30"
          rows="3"
          ref={newPostEl}
          onChange={changeTextInState}
        ></textarea>
        <button onClick={addPost}>add</button>
      </div>
      {postsItems}
    </div>
  );
};

export default MyPosts;
