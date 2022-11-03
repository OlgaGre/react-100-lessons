import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      <div className="newPost" >
        <textarea name="new post" id="" cols="30" rows="3"></textarea>
        <button>add</button>
      </div>
      <Post message='1 post' />
      <Post message='2 post' />
      <Post message='3 post'/>
    </div>
  );
};

export default MyPosts;
