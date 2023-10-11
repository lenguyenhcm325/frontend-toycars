import styled from "styled-components";


export const WishlistCardContainer = styled.div`
    display: flex;
    border: 1px solid #ddd;
    position: relative;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    & .model-image {
        max-width: 40%;
        height: auto;

      }
      
      
    & .model-details {
        flex: 3;
        font-size: 16px; 
      }
      
      
    & .model-name {
        font-weight: bold;
        font-size: 24px; 
        margin-bottom: 5px;
      }
      
    & .model-price {
        font-weight: bold;
        font-size: 24px; 
        color: #ff5733; 
        margin-bottom: 5px;
      }


    & .model-description {
    font-size: 20px; /
}
`