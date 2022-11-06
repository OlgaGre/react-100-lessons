import classes from "./ProfileComp.module.css";
import MyPosts from "./MyPosts/MyPosts";
import PersonInformation from "./PersonInformation/PersonInformation";


const ProfileComp = (props) => {
  return (
    <main className={classes.main}>
   <div className={classes.headerImg}></div>
     <PersonInformation name='Olga'/>
   <MyPosts posts ={props.posts}/>
      main check
    </main>
  );
};

export default ProfileComp;
