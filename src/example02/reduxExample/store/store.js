import { createStore, combineReducers } from "redux";
import { postReducer } from "./reducer";

const rootReducer = combineReducers({
  posts: postReducer,
});

export const store = createStore(rootReducer);
