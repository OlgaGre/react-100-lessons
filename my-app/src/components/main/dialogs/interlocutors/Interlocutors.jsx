import classes from './Interlocutors.module.css'
import Interlocutor from './Interlocutor/Interlocutor'
const Interlocutors = (props) => {
  let interlocutors = props.interlocutorsArr.map(el => <Interlocutor id={el.id} name={el.name} />)
  return(
    <div>
 {interlocutors}
    </div>
  )
}
export default Interlocutors