import { combineReducers } from "redux";
import notesReducer from "./notesReducer";

const rootReducer = combineReducers({ notesReducer });

export default rootReducer;
