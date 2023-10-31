import {
  signInWithGoogle,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutAuthUser,
  createIfNotExistUserProfile,
} from "../../utils/firebase/firebase.utils";
import {
  googleLoginStart,
  googleLoginSuccess,
  googleLoginError,
  emailSignupStart,
  emailSignupSuccess,
  emailSignupError,
  emailLoginError,
  emailLoginStart,
  emailLoginSuccess,
  logoutStart,
  logoutSuccess,
  logoutError,
} from "./user.action";
import { handleFetchWishlistFromFS } from "../wishlist/wishlist.thunk";
export const handleSignInWIthGoogle = () => async (dispatch) => {
  try {
    dispatch(googleLoginStart());
    const result = await signInWithGoogle();
    const { email, uid } = result.user;
    dispatch(googleLoginSuccess({ email, uid }));
    await createIfNotExistUserProfile(uid);
  } catch (error) {
    if (error.code === "auth/invalid-verification-id") {
      dispatch(
        googleLoginError(
          "The verification ID is invalid. Please try signing in with Google again."
        )
      );
    } else if (error.code === "auth/app-not-authorized") {
      dispatch(
        googleLoginError(
          "The verification ID is invalid. Please try signing in with Google again."
        )
      );
    } else if (error.code === "auth/user-not-found") {
      dispatch(
        googleLoginError(
          "User not found. It seems there is no account associated with this Google sign-in."
        )
      );
    } else if (error.code === "auth/network-request-failed") {
      dispatch(
        googleLoginError(
          "Unable to connect. Please check your internet connection and try again."
        )
      );
    } else {
      dispatch(googleLoginError(error.message));
    }
  }
};

export const handleCreateAuthUserWithEP =
  (emailInput, password) => async (dispatch) => {
    try {
      dispatch(emailSignupStart());
      const result = await createAuthUserWithEmailAndPassword(
        emailInput,
        password
      );
      const { email, uid } = result.user;
      dispatch(emailSignupSuccess({ email, uid }));
      await createIfNotExistUserProfile(uid);
      // here to check if the document already exist
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        dispatch(
          emailSignupError(
            "The provided email address is already associated with an existing account. If this is your email, please log in or reset your password."
          )
        );
      } else if (error.code === "auth/invalid-email") {
        dispatch(
          emailSignupError(
            "The email address you provided is not valid. Please check for typos and try again."
          )
        );
      } else if (error.code === "auth/weak-password") {
        dispatch(
          emailSignupError(
            "The password you've chosen is too weak. Please use a stronger password with a mix of letters, numbers, and symbols."
          )
        );
      } else if (error.code === "auth/network-request-failed") {
        dispatch(
          emailSignupError(
            "Unable to connect. Please check your internet connection and try again."
          )
        );
      } else if (error.code === "auth/app-not-authorized") {
        dispatch(
          emailSignupError(
            "The application is not authorized to use Firebase Authentication. Please contact the app administrator or support for assistance."
          )
        );
      } else {
        dispatch(emailSignupError(error.message));
      }
    }
  };

export const handleSignInAuthUserWithEP =
  (emailInput, password) => async (dispatch) => {
    try {
      dispatch(emailLoginStart());
      const result = await signInAuthUserWithEmailAndPassword(
        emailInput,
        password
      );
      const { email, uid } = result.user;
      dispatch(emailLoginSuccess({ email, uid }));
      dispatch(handleFetchWishlistFromFS(uid));
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      console.log(error.code);
      console.log(error.message);
      console.log(error.code);
      console.log(error.message);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        dispatch(
          emailLoginError("Invalid username or password. Please try again.")
        );
      } else if (error.code === "auth/network-request-failed") {
        dispatch(
          emailLoginError(
            "Unable to connect. Please check your internet connection and try again."
          )
        );
      } else if (error.code === "auth/internal-error") {
        dispatch(
          emailLoginError(
            "Oops! Something went wrong on our end. Please try again later."
          )
        );
      } else {
        dispatch(emailLoginError(error.message));
      }
    }
  };

export const handleSignOutAuthUser = () => async (dispatch) => {
  try {
    dispatch(logoutStart());

    const result = await signOutAuthUser();
    dispatch(logoutSuccess());

    // window.location.href = "/signout";
  } catch (error) {
    dispatch(logoutError(error));
  }
};
