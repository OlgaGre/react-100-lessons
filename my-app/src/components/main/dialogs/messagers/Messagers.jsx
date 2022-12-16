import React from "react";
import { addNewMessActionCreator, changeTextInTextareaInMessActionCreator } from "../../../../redux/dialogsReducer";
import classes from "./Messagers.module.css";

const Messagers = (props) => {
  let messegers = props.mess.map((el) => (
    <div className={`${el.sender !== true ? classes.me : classes.you}`}>
      {" "}
      {el.mess}{" "}
    </div>
  ));

  // let newMessEl = React.createRef();
  let addNewMess = () => {
    props.dispatch(addNewMessActionCreator());
  };
  let changeTextArea = (event) => {
    let text = event.target.value;
    props.dispatch(changeTextInTextareaInMessActionCreator(text))
  };

  return (
    <div>
      <div>{messegers}</div>
      <div className={classes.textAreaAndBtn}>
        <textarea
          className={classes.textArea}
          // ref={newMessEl}
          value={props.messageInTextArea}
          onChange={changeTextArea}
        ></textarea>
        <button onClick={addNewMess} className={classes.addBtn}>
          add
        </button>
      </div>
    </div>
  );
};
export default Messagers;
