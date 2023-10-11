import styled from "styled-components";


export const WishlistCardContainer = styled.div`
    display: flex;
    border: 1px solid #ddd;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    & .product-image {
        max-width: 100%;
        height: auto;
      }
      
      
    & .product-details {
        flex: 3;
        font-size: 16px; 
      }
      
      
    & .product-name {
        font-weight: bold;
        font-size: 24px; 
        margin-bottom: 5px;
      }
      
    & .product-price {
        font-weight: bold;
        font-size: 24px; 
        color: #ff5733; 
        margin-bottom: 5px;
      }


    & .product-description {
    font-size: 16px; /
}
`