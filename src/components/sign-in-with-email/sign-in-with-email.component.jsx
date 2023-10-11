import React, {useState, useEffect, useRef} from "react";
import { handleSignInAuthUserWithEP } from "../../store/user/user.thunk";
import { SignInWithEmailContainer } from "./sign-in-with-email.styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { clearStateAfterError } from "../../store/user/user.action";
import { selectAuthError, selectCurrentUser } from "../../store/user/user.selector";
const SignInWithEmail = () => {
  const dispatch = useDispatch();
  // const didMountRef = useRef(false);
  const [errorToDisplay, setErrorToDisplay] = useState(null);
  const currentError = useSelector(selectAuthError);
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
  

    // if (didMountRef.current){
      if (currentError){
        setErrorToDisplay(currentError);
        dispatch(clearStateAfterError())

    // }
    // didMountRef.current = true;
  } 

    
  }, [currentError])

    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        const {email, password} = formData
        dispatch(handleSignInAuthUserWithEP(email, password))
      };
return (
    <SignInWithEmailContainer>
      {
        currentUser && !currentError && <Navigate to="/" replace={true}/>
      }

    <h2>Sign In</h2>
    <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </div>
    </form>
    {
      errorToDisplay && <p className="error">{errorToDisplay}</p>
    }
    
    </SignInWithEmailContainer>
)


}

export default SignInWithEmail