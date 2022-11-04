import classes from "./Post.module.css";

const Post = (props) => {
  return <div className={classes.item}>
   <div>{props.message}</div> 
   <div><b>likes {props.likes}</b></div>
  </div>;
};

export default Post;
