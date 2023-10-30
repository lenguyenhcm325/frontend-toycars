import React from "react";
import { handleSignInWIthGoogle } from "../../store/user/user.thunk";
import { SignInButtonContainer } from "./sign-in-google-button.styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectAuthError } from "../../store/user/user.selector";
import { Navigate } from "react-router-dom";
const SignInGoogleButton = () => {
  const dispatch = useDispatch();
  // const didMountRef = useRef(false);
  
  const currentError = useSelector(selectAuthError);
  const currentUser = useSelector(selectCurrentUser);

  const handleClickSignIn = () => {
    dispatch(handleSignInWIthGoogle())

    }
return (    <SignInButtonContainer>
  {
    !currentError && currentUser && <Navigate to="/" replace={true}/>
  }
    {/* <h2>Sign In with Google</h2> */}
    <button onClick={handleClickSignIn}>Sign In with Google</button>
    {/* {errorToDisplay && <p>{errorToDisplay}</p>} */}
    </SignInButtonContainer>)
}

export default SignInGoogleButton