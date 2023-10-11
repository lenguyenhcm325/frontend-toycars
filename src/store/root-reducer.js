import { combineReducers } from "redux";
import { brandsReducer } from "./brand/brand.reducer";
import { wishlistReducer } from "./wishlist/wishlist.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  brands: brandsReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
