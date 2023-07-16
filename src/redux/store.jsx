import { createStore, combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/ProductReducer";

const rootReducer = combineReducers({
  // get reducers
  categoryState: categoryReducer,
  authState: authReducer,
  productState: productReducer,
});

const store = createStore(rootReducer);

export default store;
