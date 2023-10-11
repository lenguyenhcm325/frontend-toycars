import React, {useEffect, useState, useRef} from "react";
import { handleCreateAuthUserWithEP } from "../../store/user/user.thunk";
import { SignUpWithEmailContainer } from "./sign-up-with-email.styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser, selectAuthError } from "../../store/user/user.selector";
import { clearStateAfterError } from "../../store/user/user.action";
const SignUpWithEmail = () => {
  // const [errorToDisplay, setErrorToDisplay] = useState(null);
  const currentUser = useSelector(selectCurrentUser);
  const currentError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  // useEffect(() => {
  
  //     if (currentError){
  //       setErrorToDisplay(currentError);
  //       dispatch(clearStateAfterError())
  // } 

  // }, [currentError])

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // username: '',
        // given_name: '',
        // family_name:'',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // passUsernameUp(formData.username);
        // const response = await fetch('http://localhost:3000/api/signup', {
        //   method: "POST", 
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData)
        // })
        // if (response.ok){
        // }else {
        //   // NEED TO IMPLEMENT THIS LATER
        // }
      const {email, password} = formData;
      dispatch(handleCreateAuthUserWithEP(email, password))
      // if (currentError){
      //   setErrorToDisplay(currentError);
      // }else {
      //   setErrorToDisplay(null);
      // }
        // TODO? send this to the backend for further processing
      };
return (
    <SignUpWithEmailContainer>
      {currentUser && !currentError && <Navigate to="/" replace={true}/>}
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label htmlFor="given_name">Given name:</label>
        <input
          type="text"
          id="given_name"
          name="given_name"
          value={formData.given_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="family_name">Family name:</label>
        <input
          type="text"
          id="family_name"
          name="family_name"
          value={formData.family_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div> */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button type="submit">Sign Up</button>
      </div>
    </form>
    {/* {
      errorToDisplay && <p>{errorToDisplay}</p>
    } */}


    </SignUpWithEmailContainer>
)


}

export default SignUpWithEmail