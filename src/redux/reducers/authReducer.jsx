const initialState = {
  token: null,
  user: null,
};

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.payload.token,
        user: action.payload.user,
      };

    case USER_LOGOUT:
      return {
        token: null,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
