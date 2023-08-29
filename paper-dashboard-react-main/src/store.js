import { createStore } from "redux";
import rootReducer from "reducers/rootReducer";

function configureStore(state = { bgcolor: "black", activeColor: "info" }) {
  return createStore(rootReducer, state);
}

export default configureStore;
