import styled from "styled-components"


export const InputContainer = styled.input`
    // font-size: 16px; 
    // width: 700px;
    // padding: 8px;
    // border-radius: 10px;

    font-size: 16px; 
    width: 700px;
    padding: 10px 20px;
    border-radius: 25px 0 0 25px;
    border: none;
    outline: none;
    margin-right: -5px;
    border: 2px solid #030e17; // dark blue-ish color

    ::placeholder {
        color: #7a8b9c; // lighter shade for placeholder text
    }

`

export const SearchButton = styled.button`
    padding: 12px 20px;
    border-radius: 0 25px 25px 0;
    border: none;
    background-color: #030e17;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;

    font-size: 16px;

    &:hover {
        background-color: #071c2e; 
    }
`