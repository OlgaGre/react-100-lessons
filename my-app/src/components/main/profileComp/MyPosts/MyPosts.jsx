import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
// import postsItems from'./../../../../index'

const MyPosts = (props) => {
  let postsItems = props.posts.map((obj) => (
    <Post content={obj.content} likes={obj.likes} />
  ));

  // let newPostEl = React.createRef();

  return (
    <div className={classes.myPosts}>
      <div className="newPost">
        <textarea
          value={props.textInTextArea}
          name="new post"
          id=""
          cols="30"
          rows="3"
          // ref={newPostEl}
          onChange={props.changeTextInState}
        ></textarea>
        <button onClick={props.addPost }>add</button>
      </div>
      {postsItems}
    </div>
  );
};

export default MyPosts;
