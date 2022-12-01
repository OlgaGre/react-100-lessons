const addNewPost = "ADD-NEW-POST";
const changeTextInTexareaInNewPost = "CHANGE-TEXT-IN-TEXTAREA-IN-NEW-POST";
const addNewMess = "ADD-NEW-MESS";
const changeTextInTextareaInMess = "CHANGE-TEXT-IN-TEXTAREA-IN-MESS";
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
    console.log("dff");
  },

  dispatch(action) {
    if (action.type === addNewPost) {
      let newPostObj = {
        content: this._state.profilePage.textInTextArea,
        likes: 0,
      };
      this._state.profilePage.postsContentArr.push(newPostObj);
      this._state.profilePage.textInTextArea = "";
      this._callSubscriber(this._state);
    } else if (action.type === "CHANGE-TEXT-IN-TEXTAREA-IN-NEW-POST") {
      debugger;
      this._state.profilePage.textInTextArea = action.newTextInTextArea;
      this._callSubscriber(this._state);
    } else if (action.type ===addNewMess) {
      let newObj = {
        mess: this._state.dialogsPage.messageInTextArea,
        sender: true,
      };
      this._state.dialogsPage.messagersArr.push(newObj);
      this._state.dialogsPage.messageInTextArea = "";
      this._callSubscriber(this._state);
    } else if (action.type === changeTextInTextareaInMess) {
      this._state.dialogsPage.messageInTextArea = action.messText;
      this._callSubscriber(this._state);
    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};
export const addNewPostActionCreator = () => {
  return { type: addNewPost };
};

export const changeTextInTexareaInNewPostActionCreator = (text) => {
  return {
    type: changeTextInTexareaInNewPost,
    newTextInTextArea: text,
  };
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
export default store;
