const addNewMess = "ADD-NEW-MESS";
const changeTextInTextareaInMess = "CHANGE-TEXT-IN-TEXTAREA-IN-MESS";

let initialState = {
  // true = me; false = sender
  messagersArr: [
    { mess: " hi", sender: true },
    { mess: "bay", sender: "1" },
    {
      mess: " hisgs ggjspgosf gmfgpodsfmg dgomsogms gomsgmg sgnsdogndspkgmo[sdfgms gsgnsogns gk",
      sender: true,
    },
    { mess: "bay", sender: "2" },
  ],
  interlocutorsArr: [
    {
      id: 1,
      name: "sasha",
      avatar:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
    },
    {
      id: 2,
      name: "olga",
      avatar:
        "https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg",
    },
  ],
  messageInTextArea: "",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addNewMess: {
      let newObj = {
        mess: state.messageInTextArea,
        sender: true,
      };
      return {
        ...state,
        messageInTextArea: "",
        messagersArr: [...state.messagersArr, newObj],
      };
    }
    case changeTextInTextareaInMess: {
      return { ...state, messageInTextArea: action.messText };
    }
    default:
      return state;
  }
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
