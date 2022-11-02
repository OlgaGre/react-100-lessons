import classes from './ProfileComp.module.css'

const ProfileComp = () =>{
  return(
    <main className={classes.main}>
    <img className={classes.headerImg} src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-social-icons.png" />
    <div >
      <img className={classes.avatar} src="" alt="" />
      avatar
      </div>
    <div className={classes.item}>descr</div>
    <div className={classes.item}>new post</div>
    <div> post</div>
    main check
  </main>
  )
}

export default ProfileComp