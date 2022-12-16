import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const addNewPost = "ADD-NEW-POST";
const changeTextInTexareaInNewPost = "CHANGE-TEXT-IN-TEXTAREA-IN-NEW-POST";
const addNewMess = "ADD-NEW-MESS";
const changeTextInTextareaInMess = "CHANGE-TEXT-IN-TEXTAREA-IN-MESS";

// const changeTextInTextareaInMess = "CHANGE-TEXT-IN-TEXTAREA-IN-MESS";
let store = {
  _state: {
    profilePage: {
      postsContentArr: [
        { content: "1 post", likes: 2 },
        { content: "2 post", likes: 3 },
      ],
      textInTextArea: "fff",
    },
    dialogsPage: {
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
      messageInTextArea: "new mess",
    },
  },
  _callSubscriber() {
    // console.log("dff");
  },

  dispatch(action) {
   this._state.profilePage = profileReducer(this._state.profilePage, action);
   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
   
    this._callSubscriber(this._state);
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};


export default store;
