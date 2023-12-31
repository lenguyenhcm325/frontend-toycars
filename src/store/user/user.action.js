import { USER_ACTION_TYPES } from "./user.types";

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
  return {
    type: USER_ACTION_TYPES.EMAIL_LOGIN_SUCCESS,
    payload: data,
  };
};

export const logoutStart = () => {
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
