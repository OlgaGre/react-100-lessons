import classes from "./PersonInformation.module.css";

const PersonInformation = (props) => {
  return (
    <div className={classes.personInformation}>
      <img
        className={classes.avatar}
        src="https://www.blexar.com/avatar.png"
        alt=""
      />
      <div className={classes.information}>
        <div>name: {props.name}</div>
        <div>sname</div>
        <div>dirth</div>
        <div>fbdfb</div>
        <div>fbdf</div>
      </div>
    </div>
  );
};

export default PersonInformation;
