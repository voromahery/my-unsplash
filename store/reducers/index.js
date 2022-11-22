import { combineReducers } from "redux";
import displayAddModal from "./displayAddModal";
import displayDeleteModal from "./displayDeleteModal";
import images from "./images";

const rootReducer = combineReducers({
  displayAddModal,
  displayDeleteModal,
  images,
});

export default rootReducer;
