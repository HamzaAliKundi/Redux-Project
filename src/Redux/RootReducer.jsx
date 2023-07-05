import { combineReducers } from "redux";
import postsReducer from "./PostsReducer";

const RootReducer = combineReducers({
  data: postsReducer,
});

export default RootReducer;
