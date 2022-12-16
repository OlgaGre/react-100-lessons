const addNewPost = "ADD-NEW-POST";
const changeTextInTexareaInNewPost = "CHANGE-TEXT-IN-TEXTAREA-IN-NEW-POST";

 const profileReducer = (state, action) => {
  if (action.type === addNewPost) {
    let newPostObj = {
      content: state.textInTextArea,
      likes: 0,
    };
    state.postsContentArr.push(newPostObj);
    state.textInTextArea = "";
  } else if (action.type === "CHANGE-TEXT-IN-TEXTAREA-IN-NEW-POST") {
    state.textInTextArea = action.newTextInTextArea;
  }
  return state;
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
export default profileReducer