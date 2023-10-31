import styled from "styled-components";

export const SignInWithEmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

& input {
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 12px 24px;
    font-size: 16px;
    transition: background-color 0.3s;

}

& .form-div {
    width: 340px;
    display: flex;
    flex-direction: column; 
    gap: 8px;
}

& .input-field-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

& input:hover {
    border-color: #999;
}


& input:active, & input:focus {
    border-color: #333; 
  }

& button {
    background-color: #3498db;  
    color: #fff;  
    border: none;  
    padding: 10px 20px;  
    font-size: 16px;  
    border-radius: 5px; 
    cursor: pointer;  
    text-decoration: none;  
    transition: background-color 0.3s ease;
}
`