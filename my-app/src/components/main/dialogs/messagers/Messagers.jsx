import classes from './Messagers.module.css'

const Messagers = (props) => {
  let messegers = props.mess.map(el => <div> {el.mess}  </div>)
  return(
   messegers
  )
}
export default Messagers