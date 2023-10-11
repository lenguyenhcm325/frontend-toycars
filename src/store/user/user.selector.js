export const selectCurrentUser = (state) => {
  return state.user.currentUser;
};

export const selectAuthError = (state) => {
  return state.user.error;
};
