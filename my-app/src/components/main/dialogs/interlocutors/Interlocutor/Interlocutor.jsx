import classes from './Interlocutor.module.css'
import {NavLink} from 'react-router-dom'
const Interlocutor = (props) => {
  return(
    <div className={classes.item}>
      <img src={props.avatar} className={classes.avatar} alt="" />
   <NavLink to={`/messagers/${props.id}` }> {props.name}</NavLink> 
    </div>
  )
}
export default Interlocutor