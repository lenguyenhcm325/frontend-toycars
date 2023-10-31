import { CART_ACTION_TYPES } from "./cart.types";

export const addItemToCartStart = (itemInfo) => {
  return {
    type: CART_ACTION_TYPES.ADD_ITEM_TO_CART_START,
    payload: itemInfo,
  };
};
export const addItemToCartError = (error) => {
  return {
    type: CART_ACTION_TYPES.ADD_ITEM_TO_CART_ERROR,
    payload: error,
  };
};
export const addItemToCartSuccess = (itemInfo) => {
  return {
    type: CART_ACTION_TYPES.ADD_ITEM_TO_CART_SUCCESS,
    payload: itemInfo,
  };
};

export const removeItemFromCartStart = (itemInfo) => {
  return {
    type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART_START,
    payload: itemInfo,
  };
};
export const removeItemFromCartSuccess = (itemInfo) => {
  return {
    type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART_SUCCESS,
    payload: itemInfo,
  };
};
export const removeItemFromCartError = (error) => {
  return {
    type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART_ERROR,
    payload: error,
  };
};

export const clearProductFromCartStart = (productInfo) => {
  return {
    type: CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART_START,
    payload: productInfo,
  };
};
export const clearProductFromCartError = (error) => {
  return {
    type: CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART_ERROR,
    payload: error,
  };
};
export const clearProductFromCartSuccess = (productInfo) => {
  return {
    type: CART_ACTION_TYPES.CLEAR_PRODUCT_FROM_CART_SUCCESS,
    payload: productInfo,
  };
};
export const clearCartStart = () => {
  return {
    type: CART_ACTION_TYPES.CLEAR_CART_START,
  };
};
export const clearCartError = (error) => {
  return {
    type: CART_ACTION_TYPES.CLEAR_CART_ERROR,
    payload: error,
  };
};

export const clearCartSuccess = () => {
  return {
    type: CART_ACTION_TYPES.CLEAR_CART_SUCCESS,
  };
};

export const updateProductQuantityStart = (productInfoWithQuantity) => {
  return {
    type: CART_ACTION_TYPES.UPDATE_PRODUCT_QUANTITY_START,
    payload: productInfoWithQuantity,
  };
};

export const updateProductQuantitySuccess = (productInfoWithQuantity) => {
  return {
    type: CART_ACTION_TYPES.UPDATE_PRODUCT_QUANTITY_SUCCESS,
    payload: productInfoWithQuantity,
  };
};

export const updateProductQuantityError = (error) => {
  return {
    type: CART_ACTION_TYPES.UPDATE_PRODUCT_QUANTITY_START,
    payload: error,
  };
};

export const fetchCartStart = () => {
  return {
    type: CART_ACTION_TYPES.FETCH_CART_START,
  };
};

export const fetchCartError = (error) => {
  return {
    type: CART_ACTION_TYPES.FETCH_CART_ERROR,
    payload: error,
  };
};

export const fetchCartSuccess = (cartData) => {
  return {
    type: CART_ACTION_TYPES.FETCH_CART_SUCCESS,
    payload: cartData,
  };
};

export const clearCartLocal = () => {
  return {
    type: CART_ACTION_TYPES.CLEAR_CART_LOCAL,
  };
};
