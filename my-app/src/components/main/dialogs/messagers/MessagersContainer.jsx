import {
  addNewMessActionCreator,
  changeTextInTextareaInMessActionCreator,
} from "../../../../redux/dialogsReducer";
import StoreContext from "../../../../StoreContext";

import Messagers from "./Messagers";

const MessagersContainer = (props) => {
  // let newMessEl = React.createRef();


  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState()
  let addNewMess = () => {
    store.dispatch(addNewMessActionCreator());
  };
  let changeTextArea = (event) => {
    let text = event.target.value;
    store.dispatch(changeTextInTextareaInMessActionCreator(text));
  };
    return     <Messagers
          addNewMess={addNewMess}
          changeTextArea={changeTextArea}
          mess={state.dialogsPage.messagersArr}
          messageInTextArea={state.dialogsPage.messageInTextArea}
          dispatch={store.dispatch}
        />;
      }}
    </StoreContext.Consumer>
  );
};
export default MessagersContainer;
