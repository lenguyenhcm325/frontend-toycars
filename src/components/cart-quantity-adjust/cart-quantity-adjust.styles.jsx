import styled from "styled-components";


export const CartQuantityAdjustContainer = styled.div`
    box-sizing: border-box;
    margin-top: 24px;
    display: inline-flex;
    align-items: center;
    border: 2px solid #ddd;
    border-radius: 5px;
    overflow: hidden;

    & img {
        padding: 10px 20px;
        font-size: 20px;
        background-color: transparent;
        color: #555;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        flex-shrink: 0;        
    }
    & img:focus {
        outline: none;
    }
    
    & img:hover {
        background-color: #ddd;
    }

    & input {
        -webkit-appearance: none;
        width: 36px;
        text-align: center;
        padding: 10px 16px;
        font-size: 20px;
        background-color: #fff;
        color: #555;
        border-left: 2px solid #ddd;
        border-right: 2px solid #ddd;
    }
    
    & .bin-svg {
        border-left: 2px solid #ddd;
    }

`