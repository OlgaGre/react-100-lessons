const addNewPost = "ADD-NEW-POST";
const changeTextInTexareaInNewPost = "CHANGE-TEXT-IN-TEXTAREA-IN-NEW-POST";

let initialState = {
  postsContentArr: [
    { content: "1 post", likes: 2 },
    { content: "2 post", likes: 3 },
  ],
  textInTextArea: "fff",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addNewPost:
      let newPostObj = {
        content: state.textInTextArea,
        likes: 0,
      };
      state.postsContentArr.push(newPostObj);
      state.textInTextArea = "";
      return state;

    case changeTextInTexareaInNewPost:
      state.textInTextArea = action.newTextInTextArea;

    default:
      return state;
  }
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
export default profileReducer;
