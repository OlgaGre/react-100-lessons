import classes from "./Dialogs.module.css";
import Interlocutors from "./interlocutors/Interlocutors";
import Messagers from "./messagers/Messagers";
const Dialogs = (props) => {
  debugger;
  return (
    <div className={classes.main}>
      <Interlocutors interlocutorsArr={props.interlocutorsArr} />
      <Messagers
        className={classes.messegers}
        mess={props.messagersArr}
        messageInTextArea={props.messageInTextArea}
        dispatch={props.dispatch}/>
    </div>
  );
};
export default Dialogs;
