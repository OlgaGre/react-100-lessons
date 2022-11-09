import classes from './Messagers.module.css'

const Messagers = (props) => {
  let messegers = props.mess.map(el => <div className={`${el.sender===true? classes.me:classes.you}`} > {el.mess}  </div>)
  return(
    <div>
   {messegers}
   </div>
  )
}
export default Messagers