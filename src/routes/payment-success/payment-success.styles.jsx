import styled from "styled-components"

export const PaymentSuccessContainer = styled.div`
    padding: 40px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 70%; 
    margin: 96px auto;   

    & .confirmation-message {
        font-size: 20px;
        margin-bottom: 20px;
    }
    
    & .back-to-homepage {
        font-size: 18px;
        color: #3498db;
        text-decoration: none;
        border-bottom: 1px dashed #3498db;
        padding-bottom: 2px;
    }
`