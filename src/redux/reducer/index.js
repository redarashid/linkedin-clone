import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articalesReducer from "./articalesReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articalesReducer,
});

export default rootReducer;
