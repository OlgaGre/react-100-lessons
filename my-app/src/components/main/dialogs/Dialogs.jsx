import classes from "./Dialogs.module.css";

import MessagersContainer from "./messagers/MessagersContainer";
const Dialogs = (props) => {
 
  return (
    <div className={classes.main}>
      
      {/* <Interlocutors interlocutorsArr={props.store.dialogsPage.interlocutorsArr} /> */}
      <MessagersContainer
       
        store = {props.store}
        dispatch={props.dispatch}/>
    </div>
  );
};
export default Dialogs;
