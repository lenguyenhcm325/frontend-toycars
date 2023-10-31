import React, { useState, useEffect } from 'react';
import SignInGoogleButton from '../../components/sign-in-google-button/sign-in-google-button.component';
import SignUpWithEmail from '../../components/sign-up-with-email/sign-up-with-email.component';
import { SignUpFormContainer } from './sign-up.styles';
import { useSelector, useDispatch } from 'react-redux';
import { clearStateAfterError } from '../../store/user/user.action';
import { selectCurrentUser ,selectAuthError} from '../../store/user/user.selector';
const SignUpForm = () => {
  const dispatch = useDispatch();
  const currentError = useSelector(selectAuthError);
  const currentUser = useSelector(selectCurrentUser); 
  const [errorToDisplay, setErrorToDisplay] = useState(null);
  useEffect(() => {
    if (currentError){
      setErrorToDisplay(currentError);
      dispatch(clearStateAfterError())
} 
  

}, [currentError])
  return (
    <div>
        <SignUpFormContainer>
          <SignUpWithEmail />
          <SignInGoogleButton/>
          {
            errorToDisplay && <p>{errorToDisplay}</p>
          }
        </SignUpFormContainer>
    </div>
  );
}

export default SignUpForm;
