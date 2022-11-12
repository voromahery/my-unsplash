import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import state from "../states";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, state, applyMiddleware(thunk));

export default store;
