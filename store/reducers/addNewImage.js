const addNewImage = (state = [], action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return [...state, action.image];
    default:
      return state;
  }
};

export default addNewImage;
