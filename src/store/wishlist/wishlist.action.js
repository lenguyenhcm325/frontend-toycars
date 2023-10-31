import { WISHLIST_ACTION_TYPES } from "./wishlist.types";

export const toggleWishlistStart = (productInfo) => ({
  type: WISHLIST_ACTION_TYPES.TOGGLE_WISHLIST_START,
  payload: productInfo,
});

export const toggleWishlistError = (error) => ({
  type: WISHLIST_ACTION_TYPES.TOGGLE_WISHLIST_ERROR,
  payload: error,
});

export const fetchWishlistStart = () => ({
  type: WISHLIST_ACTION_TYPES.FETCH_WISHLIST_START,
});

export const fetchWishlistError = (error) => ({
  type: WISHLIST_ACTION_TYPES.FETCH_WISHLIST_ERROR,
  payload: error,
});

export const fetchWishlistSuccess = (data) => ({
  type: WISHLIST_ACTION_TYPES.FETCH_WISHLIST_SUCCESS,
  payload: data,
});

export const removeLocalWishlist = () => ({
  type: WISHLIST_ACTION_TYPES.REMOVE_LOCAL_WISHLIST,
});

export const clearWishlistLocal = () => ({
  type: WISHLIST_ACTION_TYPES.CLEAR_WISHLIST_LOCAL,
});
