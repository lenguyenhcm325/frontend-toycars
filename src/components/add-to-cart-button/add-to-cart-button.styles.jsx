import styled from 'styled-components'

export const AddToCartButtonContainer = styled.button`
    padding: 8px 16px;
    display: flex;
    align-items: center;
    border-radius: 16px;
    gap: 8px;
    cursor: pointer;
    outline: none;
    transition: transform 0.3s;

    &:active {
        transform: translateY(4px)
    }
    
    &:focus {
        box-shadow: inset 0 0 3px #444;
    }




`