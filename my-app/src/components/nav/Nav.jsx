import classes from './Nav.module.css'
const Nav = () =>{
  return (
    <nav className={classes.nav}>
        <div className='item'>
          <a href='#'>Profile</a>
        </div>
        <div className='item'>
          <a href='#'>Messages</a>
        </div>
        <div>
          <a href='#'>News</a>
        </div>
        <div>
          <a href='#'>Music</a>
        </div>
        <div>
          <a href='#'>Settings</a>
        </div>
      </nav>
  )
}
export default Nav