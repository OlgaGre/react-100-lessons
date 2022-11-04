import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
let postsContent = [
  { message: "1 post", likes: 2 },
  { message: "1 post", likes: 3 },
];
let postsItems = postsContent.map((obj) => <Post message={obj.message}  likes = {obj.likes} />);

const MyPosts = () => {

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
