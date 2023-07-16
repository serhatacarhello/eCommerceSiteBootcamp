const initialState = {
  cart: null,
};
export const SET_CART = "SET_CART";
export const REMOVE_CART = "REMOVE_CART";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case REMOVE_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
