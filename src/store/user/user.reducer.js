import { USER_ACTION_TYPES } from "./user.types";
// export const USER_ACTION_TYPES = {
//     GOOGLE_LOGIN_START: "user/GOOGLE_LOGIN_START",
//     GOOGLE_LOGIN_ERROR: "user/GOOGLE_LOGIN_ERROR",
//     GOOGLE_LOGIN_SUCCESS: "user/GOOGLE_LOGIN_SUCCESS",
//     EMAIL_LOGIN_START: "user/EMAIL_LOGIN_START",
//     EMAIL_LOGIN_SUCCESS: "user/EMAIL_LOGIN_SUCCESS",
//     EMAIL_LOGIN_ERROR: "user/EMAIL_LOGIN_ERROR",
//     LOGOUT_START: "user/LOGOUT_START",
//     LOGOUT_ERROR: "user/LOGOUT_ERROR",
//     LOGOUT_SUCCESS: "user/LOGOUT_SUCCESS",
//     EMAIL_SIGNUP_START: "user/EMAIL_SIGNUP_START",
//     EMAIL_SIGNUP_SUCCESS: "user/EMAIL_SIGNUP_SUCCESS",
//     EMAIL_SIGNUP_ERROR: "user/EMAIL_SIGNUP_ERROR",
// }
const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  if (action.type == USER_ACTION_TYPES.GOOGLE_LOGIN_START) {
    return { ...state, isLoading: true };
  }
  if (action.type == USER_ACTION_TYPES.GOOGLE_LOGIN_ERROR) {
    return { ...state, error: action.payload, isLoading: false };
  }
  if (action.type == USER_ACTION_TYPES.GOOGLE_LOGIN_SUCCESS) {
    const { email, uid } = action.payload;
    return {
      ...state,
      isLoading: false,
      currentUser: {
        email,
        uid,
      },
    };
  }
  if (action.type == USER_ACTION_TYPES.EMAIL_LOGIN_START) {
    return { ...state, isLoading: true };
  }
  if (action.type == USER_ACTION_TYPES.EMAIL_LOGIN_SUCCESS) {
    const { email, uid } = action.payload;
    return {
      ...state,
      isLoading: false,
      currentUser: {
        email,
        uid,
      },
    };
  }
  if (action.type == USER_ACTION_TYPES.EMAIL_LOGIN_ERROR) {
    return { ...state, error: action.payload, isLoading: false };
  }
  if (action.type == USER_ACTION_TYPES.LOGOUT_START) {
    return { ...state, isLoading: true };
  }
  if (action.type == USER_ACTION_TYPES.LOGOUT_ERROR) {
    return { ...state, error: action.payload, isLoading: false };
  }
  if (action.type == USER_ACTION_TYPES.LOGOUT_SUCCESS) {
    return initialState;
  }
  if (action.type == USER_ACTION_TYPES.EMAIL_SIGNUP_SUCCESS) {
    const { email, uid } = action.payload;
    return {
      ...state,
      isLoading: false,
      currentUser: {
        email,
        uid,
      },
    };
  }
  if (action.type == USER_ACTION_TYPES.EMAIL_SIGNUP_START) {
    return { ...state, isLoading: true };
  }
  if (action.type == USER_ACTION_TYPES.EMAIL_SIGNUP_ERROR) {
    return { ...state, error: action.payload, isLoading: false };
  }
  if (action.type == USER_ACTION_TYPES.CLEAR_STATE_AFTER_ERROR) {
    return initialState;
  }
  return state;
};
