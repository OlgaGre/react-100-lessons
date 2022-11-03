import classes from "./ProfileComp.module.css";
import MyPosts from "./MyPosts/MyPosts";
import PersonInformation from "./PersonInformation/PersonInformation";


const ProfileComp = () => {
  return (
    <main className={classes.main}>
   <div className={classes.headerImg}></div>
     <PersonInformation name='Olga'/>
   <MyPosts />
      main check
    </main>
  );
};

export default ProfileComp;
