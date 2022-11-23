import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export const displayAddModal = () => {
  return { type: "TOGGLE_ADD_MODAL" };
};

export const displayDeleteModal = () => {
  return { type: "TOGGLE_DELETE_MODAL" };
};

export const getImages = () => {
  return async (dispatch) => {
    onSnapshot(collection(db, "images"), (snapshot) => {
      dispatch({
        type: "GET_DATA",
        payload: snapshot.docs.map((doc) => doc.data()),
      });
    });
  };
};
