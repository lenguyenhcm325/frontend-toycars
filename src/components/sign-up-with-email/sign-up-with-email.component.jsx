import React, {useState} from "react";
import { handleCreateAuthUserWithEP } from "../../store/user/user.thunk";
import { SignUpWithEmailContainer } from "./sign-up-with-email.styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser, selectAuthError } from "../../store/user/user.selector";
const SignUpWithEmail = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentError = useSelector(selectAuthError);
  const dispatch = useDispatch();

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
      const {email, password} = formData;
      dispatch(handleCreateAuthUserWithEP(email, password))
        // TODO? send this to the backend for further processing
      };
return (
    <SignUpWithEmailContainer>
      {currentUser && !currentError && <Navigate to="/" replace={true}/>}
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit} className="form-div">
      <div className="input-field-div">
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
      <div className="input-field-div">
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
    </SignUpWithEmailContainer>
)


}

export default SignUpWithEmail