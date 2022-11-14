import { combineReducers } from "redux";
import displayAddModal from "./displayAddModal";
import displayDeleteModal from "./displayDeleteModal";
import addNewImage from "./addNewImage";

const rootReducer = combineReducers({
  displayAddModal,
  displayDeleteModal,
  images: addNewImage,
});

export default rootReducer;
