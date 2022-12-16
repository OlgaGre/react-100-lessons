const addNewMess = "ADD-NEW-MESS";
const changeTextInTextareaInMess = "CHANGE-TEXT-IN-TEXTAREA-IN-MESS";

export const dialogsReducer = (state, action) => {
  if (action.type === addNewMess) {
    let newObj = {
      mess: state.messageInTextArea,
      sender: true,
    };
    state.messagersArr.push(newObj);
    state.messageInTextArea = "";
  } else if (action.type === changeTextInTextareaInMess) {
    state.messageInTextArea = action.messText;
  }

  return state;
};
export const addNewMessActionCreator = () => {
  return { type: addNewMess };
};
export const changeTextInTextareaInMessActionCreator = (text) => {
  return {
    type: changeTextInTextareaInMess,
    messText: text,
  };
};
export default dialogsReducer;
