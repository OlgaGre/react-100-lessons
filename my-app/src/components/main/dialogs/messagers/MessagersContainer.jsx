import {
  addNewMessActionCreator,
  changeTextInTextareaInMessActionCreator,
} from "../../../../redux/dialogsReducer";

import Messagers from "./Messagers";

const MessagersContainer = (props) => {
  // let newMessEl = React.createRef();
  let addNewMess = () => {
    props.dispatch(addNewMessActionCreator());
  };
  let changeTextArea = (event) => {
    let text = event.target.value;
    props.dispatch(changeTextInTextareaInMessActionCreator(text));
  };

  return (
    <Messagers
      addNewMess={addNewMess}
      changeTextArea={changeTextArea}
      mess={props.store.dialogsPage.messagersArr}
      messageInTextArea={props.store.dialogsPage.messageInTextArea}
      dispatch={props.dispatch}
    />
  );
};
export default MessagersContainer;
