const initialState = {
  categories: [],
};

export const SET_CATEGORIES = "SET_CATEGORIES";

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
