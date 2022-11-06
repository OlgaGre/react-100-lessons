import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
// import postsItems from'./../../../../index' 


const MyPosts = (props) => {
  let postsItems = props.posts.map((obj) => <Post message={obj.message}  likes = {obj.likes} />);
  return (
    <div className={classes.myPosts}>
      <div className="newPost">
        <textarea name="new post" id="" cols="30" rows="3"></textarea>
        <button>add</button>
      </div>
      {postsItems}
    </div>
  );
};

export default MyPosts;
