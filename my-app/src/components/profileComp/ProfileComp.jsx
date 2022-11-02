import classes from "./ProfileComp.module.css";
import MyPosts from "./MyPosts/MyPosts";
import PersonInformation from "./PersonInformation/PersonInformation";


const ProfileComp = () => {
  return (
    <main className={classes.main}>
      <img
        className={classes.headerImg}
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-social-icons.png"
      />
     <PersonInformation name='Olga'/>
   <MyPosts />
      main check
    </main>
  );
};

export default ProfileComp;
