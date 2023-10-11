 import React, {useState} from "react";
 import { useSelector } from "react-redux";
 import AddToCartButton from "../add-to-cart-button/add-to-cart-button.component";
import { CarouselSlideContainer, CarouselImage } from "./carousel-slide.styles";
import ToggleWishlistButton from "../toggle-wishlist-button/toggle-wishlist-button.component";
import SlideText from "../slide-text/slide-text.component";
import { useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectWishlist, selectWishlistedModelNames } from "../../store/wishlist/wishlist.selector";
import { stringNormalizer } from "../../utils/string-normalizer";
 const CarouselSlide = ({number, image_url, model_brand, price , brand_name, description, wishlisted}) => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch(); 
    const [isHovered, setIsHovered] = useState(false); 
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }


    const wishlist = useSelector(selectWishlist);
    const modelNames = useSelector(selectWishlistedModelNames)
    const flattenModelName = stringNormalizer(model_brand)
    const fillWishlistHeart = () => {
        if (wishlisted){
            return "true"
        }
        else {
            return undefined
        }
    } 
    // if (currentUser){
    //     const toggleWishlistButtonProps = {
    //         uid: currentUser.uid,
    //         model_brand,
    //         price,
    //         image_url, 
    //         description
    //     }        
    // }else {
    //     const toggleWishlistButtonProps = undefined        
    // }

    return (
        <CarouselSlideContainer>

            <CarouselImage url={image_url}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}


            // {   uid
            //     model_brand, 
            //     price,
            //     image_url, 
            //     description,
            //     brand_name
            //     }
            />

            {currentUser && isHovered && 
            <ToggleWishlistButton
            fill={fillWishlistHeart({})}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
                {...{
                    uid: currentUser.uid,
                    model_brand,
                    price,
                    image_url, 
                    description
                }}
            />        
            }
            <SlideText model_brand={model_brand} price={price}/>


            <AddToCartButton
            image_url={image_url} 
            model_brand={model_brand} 
            price={price}
            description={description}
            />

        </CarouselSlideContainer>
    )
 }
 export default CarouselSlide