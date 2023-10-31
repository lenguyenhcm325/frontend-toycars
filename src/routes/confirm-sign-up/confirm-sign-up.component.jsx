import React, {useState} from "react";
import { SignUpWithEmailContainer } from "../../components/sign-up-with-email/sign-up-with-email.styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser, selectAuthError } from "../../store/user/user.selector";
const ConfirmSignUp = ({username}) => {
  const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const currentError = useSelector(selectAuthError);
  const dispatch = useDispatch();
    const [confirmationCode, setConfirmationCode] = useState(0); 
    
      const handleChange = (e) => {
        const {  value } = e.target;
        setConfirmationCode(parseInt(value));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${backendEndpoint}/api/confirm-signup`, {
          method: "POST", 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({confirmationCode, username})
        })
        if (response.ok){
            navigate("/");
        }else {
          // TODO implement some logic here
        }

      };
return (
    <SignUpWithEmailContainer>

    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
      
      <div>
        <label htmlFor="confirmation_code">Confirmation Code:</label>
        <input
          type="number"
          id="confirmation_code"
          name="confirmation_code"
          value={confirmationCode}
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

export default ConfirmSignUp