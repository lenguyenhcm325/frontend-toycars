
import React from "react";
import { ToggleWishlistButtonContainer } from "./toggle-wishlist-button.styles";
import { toggleWishlistStart, toggleWishlistError } from "../../store/wishlist/wishlist.action";
import { useDispatch } from "react-redux";
import {toggleWishlistOnFirestore} from "../../utils/firebase/wishlist-firestore.utils"
const ToggleWishlistButton = ({
    uid,
    model_brand,
    price,
    image_url, 
    description,
    brand_name,
    handleMouseEnter, 
    handleMouseLeave,
    fill
}) => {
    const dispatch = useDispatch();
    const toggleWishlist = async (
        ) => {
            try {
                dispatch(toggleWishlistStart({
                    model_brand, 
                    price,
                    image_url, 
                    description,
                    brand_name
                    }))
                await toggleWishlistOnFirestore({uid, image_url, model_brand, price, description} )
            }catch(error) {
                dispatch(toggleWishlistError(error))
            }
    
        };
return (
    <ToggleWishlistButtonContainer 
    fill={fill || undefined}
    onClick={() => toggleWishlist()}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    />
)

}

export default ToggleWishlistButton;