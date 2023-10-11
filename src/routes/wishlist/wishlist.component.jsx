import React from "react";
import { WishlistCardContainer } from "./wishlist.styles";
import {useSelector} from "react-redux";
import WishlistCard from "../../components/wishlist-model-card/wishlist-model-card.component";
import {selectWishlist} from "../../store/wishlist/wishlist.selector"
const Wishlist = () => {
    const wishlist = useSelector(selectWishlist);


    return (
    
    <div>
        {wishlist.map((item) => {
            const itemData = item[Object.keys(item)[0]];
            return <WishlistCard {...itemData}/>
        })}
    </div>)
}


export default Wishlist;