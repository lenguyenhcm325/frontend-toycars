import { styled } from "styled-components";


export const CTAEmailBoxContainer = styled.div`   
    display: flex; 
    align-items: center; 
    border-radius: 4px; 
    & form {
        width: 80%;
        display: flex;
        border-radius: 4px;
        overflow: hidden;

    }
`;


export const EmailInputField = styled.input`
    font-size: 20px;
    flex: 1;
    padding: 16px;
    border: none;
    outline: none;
    color: #333;
    background-color: #e7f5ff; 
    border-right: 1px solid #b0c4de;

    ::placeholder {
        color: #7a8b9c;
    }

    &:focus {
        border-color: #74c0fc; 
    }
    
`

export const EmailSubmitButton = styled.button`
    font-size: 20px;
    padding: 16px;
    color: white;
    background-color: #1971c2;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #569cd6;
    }

    &:active {
        background-color: #3f7ebd; 
    }
`