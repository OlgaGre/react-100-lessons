import React from "react";
import classes from "./Messagers.module.css";

const Messagers = (props) => {
  let messegers = props.mess.map((el) => (
    <div className={`${el.sender === true ? classes.me : classes.you}`}>
      {" "}
      {el.mess}{" "}
    </div>
  ));

  let newMessEl = React.createRef();
  let addNewMess = () => {
    let text = newMessEl.current.value;
    
    alert(text);
  };

  return (
    <div>
      <div>{messegers}</div>
      <div className={classes.textAreaAndBtn}>
        <textarea className={classes.textArea} ref={newMessEl}></textarea>
        <button  onClick={addNewMess} className={classes.addBtn}>
          add
        </button>
      </div>
    </div>
  );
};
export default Messagers;
