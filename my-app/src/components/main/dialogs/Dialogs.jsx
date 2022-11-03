import classes from "./Dialogs.module.css";
import Interlocutors from "./interlocutors/Interlocutors";
import Messagers from "./messagers/Messagers";
const Dialogs = (props) => {
  return (
    <div className={classes.main}>
      <Interlocutors />
      <Messagers />
    </div>
  );
};
export default Dialogs;
