import {
  fetchWishlistFromFirestore,
  toggleWishlistOnFirestore,
} from "../../utils/firebase/wishlist-firestore.utils";
import { WISHLIST_ACTION_TYPES } from "./wishlist.types";
import {
  fetchWishlistStart,
  fetchWishlistError,
  fetchWishlistSuccess,
  toggleWishlistStart,
  toggleWishlistError,
} from "./wishlist.action";
export const handleFetchWishlistFromFS = (uid) => async (dispatch) => {
  try {
    dispatch(fetchWishlistStart());
    const result = await fetchWishlistFromFirestore(uid);

    dispatch(fetchWishlistSuccess(result));
  } catch (error) {
    dispatch(fetchWishlistError(error));
  }
};

export const handleToggleWishlistOnFS =
  (uid, model_brand, image_url, description, price) => async (dispatch) => {
    try {
      dispatch(
        toggleWishlistStart({
          model_brand,
          image_url,
          description,
          price,
        })
      );
      await toggleWishlistOnFirestore({
        uid,
        model_brand,
        image_url,
        description,
        price,
      });
    } catch (error) {
      dispatch(toggleWishlistError(error));
    }
  };
