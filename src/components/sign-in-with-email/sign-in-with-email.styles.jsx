import styled from "styled-components";

export const SignInWithEmailContainer = styled.div`

& input {
  

    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 12px 24px;
    font-size: 16px;
    transition: background-color 0.3s;

}
& input:hover {
    border-color: #999;
}


& input:active, & input:focus {
    border-color: #333; 
  }

& button {
    background-color: #3498db; /* Light blue color */
    color: #fff; /* White text color */
    border: none; /* Remove the border */
    padding: 10px 20px; /* Add padding for better appearance */
    font-size: 16px; /* Font size */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Cursor on hover */
    text-decoration: none; /* Remove underlines */
    transition: background-color 0.3s ease;
}
`