const displayDeleteModal = (state = false, action) => {
    switch (action.type) {
      case "TOGGLE_DELETE_MODAL":
        return !state;
      default:
        return state;
    }
  };
  
  export default displayDeleteModal;
  