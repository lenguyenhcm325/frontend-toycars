import React from "react";
import { WishlistCardContainer } from "./wishlist-model-card.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import AddToCartButton from "../add-to-cart-button/add-to-cart-button.component"
import RemoveFromWishlistButton from "../remove-from-wishlist-button/remove-from-wishlist-button.component";
const WishlistCard = (props) => {
    const uid = useSelector(selectCurrentUser).uid;
    // {
    //     uid,
    //     model_brand,
    //     price,
    //     image_url, 
    //     description,
    //     brand_name   
    // }

    const {
        image_url, model_brand, price, description
    } = props;
    return(
        <WishlistCardContainer>
            <img alt="wishlisted product" src={image_url} className="model-image"/>
            <div className="model-details">
            <p className="model-name">{model_brand}</p>
            <p className="model-price">{price}</p>
            <p className="model-description">{description}</p>
            <div style={{display: "flex", gap:"24px"}}>
            <AddToCartButton {...props}/>
            <RemoveFromWishlistButton
                    {...props}        
        />
            </div>


            </div>

        </WishlistCardContainer>

    )


}

export default WishlistCard;


