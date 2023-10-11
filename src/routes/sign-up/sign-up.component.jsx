import React, { useState, useEffect } from 'react';
import SignInGoogleButton from '../../components/sign-in-google-button/sign-in-google-button.component';
import SignUpWithEmail from '../../components/sign-up-with-email/sign-up-with-email.component';
import { useSelector, useDispatch } from 'react-redux';
import { clearStateAfterError } from '../../store/user/user.action';
import { Fragment } from 'react';
import { selectCurrentUser ,selectAuthError} from '../../store/user/user.selector';
import ConfirmSignUp from '../confirm-sign-up/confirm-sign-up.component';
const SignUpForm = () => {
  const dispatch = useDispatch();
  const currentError = useSelector(selectAuthError);
  const currentUser = useSelector(selectCurrentUser); 
  const [errorToDisplay, setErrorToDisplay] = useState(null);
  // const [username, setUsername] = useState("");
  // const [displayConfirmationInput, setDisplayConfirmationInput] = useState(false);
  // const passUsernameUp = (usernameToPass) => {
  //   setUsername(usernameToPass);
  //   setDisplayConfirmationInput(true);
  // }
  useEffect(() => {
    if (currentError){
      setErrorToDisplay(currentError);
      dispatch(clearStateAfterError())
} 
  

}, [currentError])
  return (
    <div>
      
   
        <Fragment>
        <SignUpWithEmail 
        // passUsernameUp={passUsernameUp}
        />
        <SignInGoogleButton/>
        {
          errorToDisplay && <p>{errorToDisplay}</p>
        }
        </Fragment>
      
    {/* {
      username !== "" && <ConfirmSignUp username={username}/>
    }
      
      {
        currentUser && (<p>{currentUser.uid} {currentUser.email}</p>)
      } */}
      
    </div>
  );
}

export default SignUpForm;
