import classes from "./PersonInformation.module.css";

const PersonInformation = (props) => {
  return (
    <div className={classes.personInformation}>
     <div className={classes.avatarWrapper}> <img
        className={classes.avatar}
        src="https://www.blexar.com/avatar.png"
        alt=""
      /></div>
      <div className={classes.information}>
        <div><b>name:</b> {props.name}</div>
        <div><b>sname:</b></div>
        <div><b>dirth:</b></div>
        <div><b>fbdfb:</b></div>
        <div><b>fbdf:</b></div>
      </div>
    </div>
  );
};

export default PersonInformation;
