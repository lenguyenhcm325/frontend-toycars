import styled from "styled-components";

export const DeliverInfoContainer = styled.div`
& form {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

& label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

& input[type="text"],
& input[type="tel"],
& input[type="email"] {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

& input[type="submit"] {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

& input[type="submit"]:hover {
    background-color: #0056b3;
}
& .confirm-address-button-div {
    display: flex;
    justify-content: center; 
}


`