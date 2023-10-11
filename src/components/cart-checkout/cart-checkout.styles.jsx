import styled from "styled-components";


export const CartCheckoutContainer = styled.div`
    width: 100%;
    border-radius: 4px;
    padding: 20px;
    height: 360px;
    box-sizing: border-box;
    background-color: pink;

    & h2 {
        font-size: 36px;
        text-align: center;
    }
    & .title {
        font-weight: 700;
    }
    & .sub-total, & .delivery {
        display: flex;
        justify-content: space-between;
    }

    & .checkout-button-div {
        display: flex; 
        justify-content: center;
    }

    & .checkout-button {
        width: 100%;       
        padding: 12px 0;  
        background-color: #339af0;
        color: #d0ebff;   
        border: none;   
        border-radius: 4px;   
        font-size: 16px;  
        cursor: pointer;   
        text-align: center;
        transition: 0.3s;   
    }
    & form {
        width: 60%; 
        margin: 0 auto; 
        padding: 20px; 
    
        
    & .checkout-button:hover {
        background-color: #add8e6;   
        }
    }
    
`