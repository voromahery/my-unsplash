const displayAddModal = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_ADD_MODAL":
      return !state;
    default:
      return state;
  }
};

export default displayAddModal;
