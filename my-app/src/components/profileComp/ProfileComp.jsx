import classes from "./ProfileComp.module.css";
import MyPosts from "./MyPosts/MyPosts";
const ProfileComp = () => {
  return (
    <main className={classes.main}>
      <img
        className={classes.headerImg}
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-social-icons.png"
      />
      <div className={classes.personInformation}>
        <img
          className={classes.avatar}
          src="https://www.blexar.com/avatar.png"
          alt=""
        />
        <div>name</div>
        <div>sname</div>
        <div>dirth</div>
        <div>fbdfb</div>
        <div>fbdf</div>
      </div>
   <MyPosts />
      main check
    </main>
  );
};

export default ProfileComp;
