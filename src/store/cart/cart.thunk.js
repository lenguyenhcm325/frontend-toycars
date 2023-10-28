import {
  addItemToCartOnFS,
  clearCartOnFS,
  clearProductFromCartOnFS,
  fetchShoppingCartFromFS,
  removeItemFromCartOnFS,
  updateProductQuantityOnFS,
} from "../../utils/firebase/shopping-cart-firestore.utils";
import {
  addItemToCartError,
  addItemToCartStart,
  addItemToCartSuccess,
  clearCartError,
  clearCartStart,
  clearCartSuccess,
  clearProductFromCartError,
  clearProductFromCartStart,
  clearProductFromCartSuccess,
  fetchCartError,
  fetchCartStart,
  fetchCartSuccess,
  removeItemFromCartError,
  removeItemFromCartStart,
  removeItemFromCartSuccess,
  updateProductQuantityStart,
  updateProductQuantityError,
  updateProductQuantitySuccess,
} from "./cart.action";

export const handleAddItemToCartOnFS =
  (uid, productInfo) => async (dispatch) => {
    try {
      dispatch(addItemToCartStart(productInfo));
      await addItemToCartOnFS(uid, productInfo);
      dispatch(addItemToCartSuccess(productInfo));
    } catch (error) {
      dispatch(addItemToCartError(error));
    }
  };

export const handleRemoveItemFromCartFromFS =
  (uid, productInfo) => async (dispatch) => {
    try {
      dispatch(removeItemFromCartStart(productInfo));
      await removeItemFromCartOnFS(uid, productInfo);
      dispatch(removeItemFromCartSuccess(productInfo));
    } catch (error) {
      dispatch(removeItemFromCartError(error));
    }
  };

export const handleClearProductFromCartOnFS =
  (uid, productInfo) => async (dispatch) => {
    try {
      dispatch(clearProductFromCartStart(productInfo));
      await clearProductFromCartOnFS(uid, productInfo);
      dispatch(clearProductFromCartSuccess(productInfo));
    } catch (error) {
      dispatch(clearProductFromCartError(error));
    }
  };

export const handleClearCartOnFS = (uid) => async (dispatch) => {
  try {
    dispatch(clearCartStart());
    await clearCartOnFS(uid);
    dispatch(clearCartSuccess());
  } catch (error) {
    dispatch(clearCartError(error));
  }
};

export const handleFetchShoppingCartFromFS = (uid) => async (dispatch) => {
  try {
    dispatch(fetchCartStart());
    const cartData = await fetchShoppingCartFromFS(uid);
    dispatch(fetchCartSuccess(cartData));
  } catch (error) {
    dispatch(fetchCartError(error));
  }
};

export const handleUpdateProductQuantityOnFS =
  (uid, productInfoWithQuantity) => async (dispatch) => {
    try {
      dispatch(updateProductQuantityStart(productInfoWithQuantity));
      await updateProductQuantityOnFS(uid, productInfoWithQuantity);
      dispatch(updateProductQuantitySuccess(productInfoWithQuantity));
    } catch (error) {
      dispatch(updateProductQuantityError(error));
    }
  };
