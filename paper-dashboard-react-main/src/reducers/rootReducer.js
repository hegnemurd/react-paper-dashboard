import { combineReducers } from "redux";
import bgReducer from "./bgReducer";
import colorReducer from "./colorReducer";

const backgChange = combineReducers({
  activeState: colorReducer,
  bgState: bgReducer,
});

export default backgChange;
