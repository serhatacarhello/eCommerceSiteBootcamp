import { createStore, combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  // get reducers
  categoryState: categoryReducer,
  authState: authReducer,
});

const store = createStore(rootReducer);

export default store;
