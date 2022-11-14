export const displayAddModal = () => {
  return { type: "TOGGLE_ADD_MODAL" };
};

export const displayDeleteModal = () => {
  return { type: "TOGGLE_DELETE_MODAL" };
};

export const addNewImage = (image) => {
  return { type: "ADD_IMAGE", image };
};
