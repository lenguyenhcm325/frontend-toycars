
import React, { useState } from 'react';
import {useSelector} from "react-redux";
import { CheckoutSubmitButtonContainer } from './checkout-submit-button.styles';
import { selectCheckoutItemsReqBody } from '../../store/cart/cart.selector';
function CheckoutSubmitButton() {
  const checkoutItemsReqBody = useSelector(selectCheckoutItemsReqBody);


  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/payment/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(checkoutItemsReqBody)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
        
      }
      const body = await response.json();
      window.location.href = body.url
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
    }
  };

  return (

    <CheckoutSubmitButtonContainer>
    <button onClick={handleSubmit} className="checkout-button">Checkout</button>
    </CheckoutSubmitButtonContainer> 

  );
}

export default CheckoutSubmitButton;
