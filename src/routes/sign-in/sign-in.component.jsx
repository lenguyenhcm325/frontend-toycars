import React,{useEffect} from "react";
import SignInWithEmail from "../../components/sign-in-with-email/sign-in-with-email.component";
import { Link } from "react-router-dom";

const SignInForm = () => {
    useEffect(() => {
    }, [])
    return (
        <div>
            <SignInWithEmail/>
            {/* <button onClick={handleOnclick}>Pleaes click here!</button> */}
            <p>Don't have an account? <Link to="/signup"><span>Sign up now!</span></Link></p>
        </div>


    )
}

export default SignInForm;