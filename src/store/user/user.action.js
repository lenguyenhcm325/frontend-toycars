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

export const googleLoginStart = () => {
  return {
    type: USER_ACTION_TYPES.GOOGLE_LOGIN_START,
  };
};

export const googleLoginError = (error) => {
  return {
    type: USER_ACTION_TYPES.GOOGLE_LOGIN_ERROR,
    payload: error,
  };
};

export const googleLoginSuccess = (data) => {
  return {
    type: USER_ACTION_TYPES.GOOGLE_LOGIN_SUCCESS,
    payload: data,
  };
};

export const emailSignupStart = () => {
  return {
    type: USER_ACTION_TYPES.EMAIL_SIGNUP_START,
  };
};

export const emailSignupError = (error) => {
  return {
    type: USER_ACTION_TYPES.EMAIL_SIGNUP_ERROR,
    payload: error,
  };
};

export const emailSignupSuccess = (data) => {
  return {
    type: USER_ACTION_TYPES.EMAIL_SIGNUP_SUCCESS,
    payload: data,
  };
};

export const emailLoginStart = () => {
  return {
    type: USER_ACTION_TYPES.EMAIL_LOGIN_START,
  };
};

export const emailLoginError = (error) => {
  return {
    type: USER_ACTION_TYPES.EMAIL_LOGIN_ERROR,
    payload: error,
  };
};

export const emailLoginSuccess = (data) => {
  console.log("logged in success");
  return {
    type: USER_ACTION_TYPES.EMAIL_LOGIN_SUCCESS,
    payload: data,
  };
};

export const logoutStart = () => {
  console.log("being logged out");
  return {
    type: USER_ACTION_TYPES.LOGOUT_START,
  };
};

export const logoutError = (error) => {
  return {
    type: USER_ACTION_TYPES.LOGOUT_ERROR,
    payload: error,
  };
};

export const logoutSuccess = () => {
  return {
    type: USER_ACTION_TYPES.LOGOUT_SUCCESS,
  };
};

export const clearStateAfterError = () => {
  return {
    type: USER_ACTION_TYPES.CLEAR_STATE_AFTER_ERROR,
  };
};
