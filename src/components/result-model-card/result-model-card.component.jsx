import React from "react";
import { ResultModelCardContainer } from "./result-model-card.styles";
import AddToCartButton from "../add-to-cart-button/add-to-cart-button.component"

const ResultModelCard = ({
    model_brand, price, description, image_url
}) => {
    return (
    <ResultModelCardContainer>
        <div className="image-div">
        <img alt="wishlisted product" src={image_url} className="model-image"/>
        </div>
        <div className="model-details">
            <p className="model-name">{model_brand}</p>
            <p className="model-price">€{price}</p>
            <p className="model-description">{description}</p>
            <div style={{display: "flex", gap:"24px"}}>
            {/* <AddToCartButton {...props}/>
            <RemoveFromWishlistButton
            {...props}        
            /> */}
            <AddToCartButton/>
            </div>


        </div>

    </ResultModelCardContainer>)


}


export default ResultModelCard;