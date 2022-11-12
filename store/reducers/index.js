import { combineReducers } from "redux";
import displayAddModal from "./displayAddModal";
import displayDeleteModal from "./displayDeleteModal";

const rootReducer = combineReducers({ displayAddModal, displayDeleteModal });

export default rootReducer;
