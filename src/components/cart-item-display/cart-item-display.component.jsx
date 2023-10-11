import React from "react";
import { CartItemContainer, CartItemImage, CartItemInfoContainer } from "./cart-item-display.styles";
import CartQuantityAdjust from "../cart-quantity-adjust/cart-quantity-adjust.component";
const CartItemDisplay = (props) => {
    const {item} = props; 

    return (
        <CartItemContainer>
            <CartItemImage url={item.image_url}/>
            <CartItemInfoContainer >
            <p className="item-price">Price: {item.price}</p>
            <p className="item-name">Brand: {item.model_brand}</p>
            <p className="item-description">{item.description}</p>
            <CartQuantityAdjust {...item}/>
            </CartItemInfoContainer>
        </CartItemContainer>

    )




}


export default CartItemDisplay