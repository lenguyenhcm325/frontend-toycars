
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux";
import { selectCurrentUser } from '../../store/user/user.selector';
import { CheckoutSubmitButtonContainer } from './checkout-submit-button.styles';
import { selectCheckoutItemsReqBody } from '../../store/cart/cart.selector';
import { handleClearCartOnFS, handleFetchShoppingCartFromFS } from '../../store/cart/cart.thunk';
function CheckoutSubmitButton() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser)
  const checkoutItemsReqBody = useSelector(selectCheckoutItemsReqBody);
  const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;
  const frontendEndpoint = import.meta.env.VITE_FRONTEND_ENDPOINT;

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${backendEndpoint}/payment/create-checkout-session`, {
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
      // console.log("this is the body url")
      // console.log(body.url)
      // console.log(body.url)
      // console.log(body.url)
      // console.log(body.url)
      // console.log(body.url)
      // if (body.url === `${frontendEndpoint}/payment-success`){
      //   dispatch(handleClearCartOnFS(currentUser.uid));
      //   dispatch(handleFetchShoppingCartFromFS(currentUser.uid))
      // }
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
