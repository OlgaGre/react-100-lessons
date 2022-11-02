import classes from './Nav.module.css'
const Nav = () =>{
  return (
    <nav className={classes.nav}>
        <div className='item'>
          <a>Profile</a>
        </div>
        <div className='item'>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
  )
}
export default Nav