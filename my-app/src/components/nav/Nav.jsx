import classes from './Nav.module.css'
const Nav = () =>{
  return (
    <nav className={classes.nav}>
        <div className='item'>
          <a href='/profile'>Profile</a>
        </div>
        <div className='item'>
          <a href='/messagers'>Messages</a>
        </div>
        <div>
          <a href='/news'>News</a>
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