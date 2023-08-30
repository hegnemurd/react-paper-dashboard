import { createStore } from "redux";
import rootReducer from "reducers/rootReducer";

function configureStore(
  state = {
    bgState: { bgcolor: "black" },
    activeState: { activeColor: "info" },
  }
) {
  return createStore(rootReducer, state);
}

export default configureStore;
