import { createStore, combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";
import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/ProductReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  // get reducers
  categoryState: categoryReducer,
  authState: authReducer,
  productState: productReducer,
  cartState: cartReducer,
});

const store = createStore(rootReducer);

export default store;
