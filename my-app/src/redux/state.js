import { renderTree } from "../render";

let state = {
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
    messageInTextArea: "eggde",
  },
};

export let addNewPost = () => {
  let newPostObj = {
    content: state.profilePage.textInTextArea,
    likes: 0,
  };
  state.profilePage.postsContentArr.push(newPostObj);
  state.profilePage.textInTextArea = "";
  renderTree(state);
};
export let changeTextInTextAreaInNewPost = (newTextInTextArea) => {
  state.profilePage.textInTextArea = newTextInTextArea;

  renderTree(state);
};

export let addNewMessagerInArr = () => {
  let newObj = { mess: state.dialogsPage.messageInTextArea, sender: true };
  state.dialogsPage.messagersArr.push(newObj);
  state.dialogsPage.messageInTextArea = '';
  renderTree(state);
};
export let changeTextInTextAreaInMessage = (text) => {
  state.dialogsPage.messageInTextArea = text;
  renderTree(state);
};
export default state;
