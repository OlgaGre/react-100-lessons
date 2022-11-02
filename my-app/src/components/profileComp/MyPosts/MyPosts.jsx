import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      <Post message='1 post' />
      <Post message='2 post' />
      <Post message='3 post'/>
    </div>
  );
};

export default MyPosts;
