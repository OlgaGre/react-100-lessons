import {
  addNewMessActionCreator,
  changeTextInTextareaInMessActionCreator,
} from "../../../../redux/dialogsReducer";


import Messagers from "./Messagers";
import { connect } from "react-redux";
// const MessagersContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         // let addNewMess = () => {
//         //   store.dispatch(addNewMessActionCreator());
//         // };
//         // let changeTextArea = (event) => {
//         //   let text = event.target.value;
//         //   store.dispatch(changeTextInTextareaInMessActionCreator(text));
//         // };
//         return (
//           <Messagers
//             // addNewMess={addNewMess}
//             // changeTextArea={changeTextArea}
//             // mess={state.dialogsPage.messagersArr}
//             // messageInTextArea={state.dialogsPage.messageInTextArea}
//             dispatch={store.dispatch}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
let mapStateToProps = (state) => {
  return {
    mess: state.dialogsPage.messagersArr,
    messageInTextArea: state.dialogsPage.messageInTextArea,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addNewMess: () => {
      dispatch(addNewMessActionCreator());
    },
    changeTextArea: (event) => {
      let text = event.target.value;
      dispatch(changeTextInTextareaInMessActionCreator(text));
    },
  };
};

let MessagersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messagers);
export default MessagersContainer;
