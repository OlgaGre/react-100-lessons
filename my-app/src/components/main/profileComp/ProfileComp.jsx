import classes from "./ProfileComp.module.css";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import PersonInformation from "./PersonInformation/PersonInformation";

const ProfileComp = (props) => {
  return (
    <main className={classes.main}>
      <div className={classes.headerImg}></div>
      <PersonInformation name="Olga" />
      <MyPostsContainer
       store = {props.store}
       dispatch={props.dispatch}
      />
    </main>
  );
};

export default ProfileComp;
