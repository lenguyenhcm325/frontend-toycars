import React, {useState} from "react";
import {useSelector} from "react-redux";
import DeliveryInfoInput from "../delivery-info-input/delivery-info-input.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItemsContainer } from "./cart-items-block.styles";
import CartItemDisplay from "../cart-item-display/cart-item-display.component";
const CartItemsBlock = ({onBubble}) => {
    const cartItems = useSelector(selectCartItems);    
    const [isOnDeliverySection, setIsOnDeliverySection] = useState(false);
    const handleTitleClick = (value) => {
        setIsOnDeliverySection(value)
    }
    return (
        <CartItemsContainer>
            <div className="section">
            <h2 onClick={() => handleTitleClick(false)}>MY SHOPPING CART</h2>
            <h2 onClick={() => handleTitleClick(true)}>DELIVERY</h2>

            </div>
        {
            !isOnDeliverySection && cartItems.map(cartItem => {
                // return (<CartItemDisplay item={cartItem} />)
                const flattenNameWithoutSpace = Object.keys(cartItem)[0];
                return (<CartItemDisplay key={flattenNameWithoutSpace} item={cartItem[flattenNameWithoutSpace]} />)
            })
        }{
            !cartItems.length && (<h2 className="no-item-msg">Currently there is no item in the shopping cart</h2>)
        }
        {
            isOnDeliverySection && (
                <DeliveryInfoInput onBubble={onBubble}/>
            )
        }
        </CartItemsContainer>
    )
}

export default CartItemsBlock