import React,{useEffect} from "react";
import SignInWithEmail from "../../components/sign-in-with-email/sign-in-with-email.component";
import SignInGoogleButton from "../../components/sign-in-google-button/sign-in-google-button.component";
import { Link } from "react-router-dom";
import { SignInFormContainer } from "./sign-in.styles";
const SignInForm = () => {
    useEffect(() => {
    }, [])
    return (
        <SignInFormContainer>
            {/* <div className="sign-in-buttons"> */}
                <SignInWithEmail/>
                <SignInGoogleButton/>
            {/* </div> */}
            {/* <button onClick={handleOnclick}>Pleaes click here!</button> */}
            <p className="dont-have-account-p">Don't have an account? <Link to="/signup"><span>Sign up now!</span></Link></p>
        </SignInFormContainer>


    )
}

export default SignInForm;