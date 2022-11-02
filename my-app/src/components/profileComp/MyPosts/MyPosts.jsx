import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
