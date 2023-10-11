import React from "react";
import { AddToCartButtonContainer } from "./add-to-cart-button.styles";
import { SVGasImage } from "../svg-block/svg-block.styles";
import { handleAddItemToCartOnFS } from "../../store/cart/cart.thunk";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
const AddToCartButton = ({image_url, model_brand, price, description}) => {
    const items = useSelector(selectCartItems); 
    const currentUser = useSelector(selectCurrentUser);
    // image_url={image_url} 
    // model_brand={model_brand} 
    // price={price}
    // brand_name={brand_name}
    // description={description}
    

    const dispatch = useDispatch(); 



    return (
        <AddToCartButtonContainer onClick={() => dispatch(handleAddItemToCartOnFS(currentUser.uid, {image_url, model_brand, price, description}))}>
            <SVGasImage src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/plus-svg.svg" alt="" /> <span>Add to cart</span>

        </AddToCartButtonContainer>


    )


}

export default AddToCartButton