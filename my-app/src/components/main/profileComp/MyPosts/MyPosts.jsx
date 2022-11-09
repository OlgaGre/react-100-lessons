import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
// import postsItems from'./../../../../index'

const MyPosts = (props) => {
  let postsItems = props.posts.map((obj) => (
    <Post content={obj.content} likes={obj.likes} />
  ));
 
  let newPostEl = React.createRef();
  let addNewPost = () => {
    let text = newPostEl.current.value;
    alert(text);
  };

  return (
    <div className={classes.myPosts}>
      <div className="newPost">
        <textarea
          name="new post"
          id=""
          cols="30"
          rows="3"
          ref={newPostEl}
        ></textarea>
        <button onClick={addNewPost}>add</button>
      </div>
      {postsItems}
    </div>
  );
};

export default MyPosts;
