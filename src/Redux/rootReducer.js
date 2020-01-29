import searchReducer from "./searchReducer";
import { combineReducers } from "redux";

export default combineReducers({ search: searchReducer });
