import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'
const Nav = () =>{
  return (
    <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/profile' className= { navData => navData.isActive ? classes.active : classes.link }>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/messagers'className = { navData => navData.isActive ? classes.active : classes.link }>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/news' className= { navData => navData.isActive ? classes.active : classes.link }>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music' className= { navData => navData.isActive ? classes.active : classes.link }>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='settings' className= { navData => navData.isActive ? classes.active : classes.link }>Settings</NavLink>
        </div>
      </nav>
  )
}
export default Nav