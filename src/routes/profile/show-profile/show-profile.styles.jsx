import styled from "styled-components";


export const ShowProfileContainer = styled.div`



    margin: 48px auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #e7f5ff;
    width: 90%;



& .address-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

& h1 {
    text-align: center;
    margin-bottom: 20px;
}

& .section {
    margin-bottom: 30px;
}

& .personal-info-wrapper {
    display: flex;
    width: 100%; 
    justify-content: center;
}

& .personal-info-section {
    justify-self: center;
    width: 60%;
}

& h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #1864ab;

}

& .info {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
}

& .field {
    margin-bottom: 10px;
}

& label {
    display: block;
    font-weight: bold;
    margin-bottom: 12px;
    font-size: 20px;
}

& span {
    width: 60%;
    display: flex;
    
    // background-color: #f9f9f9;
    // border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 20px;
    margin-bottom: 12px;
}

& .button-container {
    display: flex; 
    justify-content: center;
}

& button {
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
}

& button:hover {
    background-color: #357AE8;
}

`