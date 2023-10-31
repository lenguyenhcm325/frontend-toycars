import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { RemoveFromWishlistButtonContainer } from "./remove-from-wishlist-button.styles";
import { SVGasImage } from "../svg-block/svg-block.styles";
import {handleToggleWishlistOnFS} from "../../store/wishlist/wishlist.thunk"
const RemoveFromWishlistButton = ({image_url, model_brand, price, description}) => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    return (
        <RemoveFromWishlistButtonContainer onClick={() => dispatch(handleToggleWishlistOnFS(currentUser.uid, model_brand, image_url, description ,price))}>
            <SVGasImage src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/cross-svg.svg" alt="cross svg" /> <span>Remove from wishlist</span>
        </RemoveFromWishlistButtonContainer>
    )
}

export default RemoveFromWishlistButton;