import React from "react";
import SignInWithEmail from "../../components/sign-in-with-email/sign-in-with-email.component";
import { Link } from "react-router-dom";

const SignInForm = () => {

    // const handleOnclick = async () => {
    //     try{
    //         const response = await fetch("http://localhost:3000/api/test-route");
    //         if (!response.ok){
    //             throw new Error('network sucks')
    //         }
    //         const responseData = await response.json();
    //         console.log(responseData)
    //         console.log(responseData)
    //         console.log(responseData)
    //         console.log(responseData)
    //     }catch(err){
    //         console.log(err)
    //     }

    // }
    return (
        <div>
            <SignInWithEmail/>
            {/* <button onClick={handleOnclick}>Pleaes click here!</button> */}
            <p>Don't have an account? <Link to="/signup"><span>Sign up now!</span></Link></p>
        </div>


    )
}

export default SignInForm;