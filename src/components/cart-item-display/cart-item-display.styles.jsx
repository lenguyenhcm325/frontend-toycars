import styled from "styled-components";

export const CartItemContainer = styled.div`
    display: grid; 
    align-items: center;
    grid-template-columns: 35fr 65fr;
    gap: 32px;



`

export const CartItemImage = styled.div`
    width: 100%;
    padding-top: calc(2/3 * 100%);
    background-size: cover;
    background-image: url("${props => props.url}")
`

export const CartItemInfoContainer = styled.div`
    p {
        margin: 0; 
    }
    & .item-price {
        font-size: 36px;
    }
    & .item-name {
        font-size: 24px;
    }
    & .item-description {
        font-size: 16px;
    }
    & .item-quantity {
        font-size: 24px;
    }
`