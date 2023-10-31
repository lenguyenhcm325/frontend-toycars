 import React, {useState} from "react";
 import { useSelector } from "react-redux";
 import AddToCartButton from "../add-to-cart-button/add-to-cart-button.component";
import { CarouselSlideContainer, CarouselImage } from "./carousel-slide.styles";
import ToggleWishlistButton from "../toggle-wishlist-button/toggle-wishlist-button.component";
import SlideText from "../slide-text/slide-text.component";
import { selectCurrentUser } from "../../store/user/user.selector";
 const CarouselSlide = ({number, image_url, model_brand, price , brand_name, description, wishlisted}) => {
    const currentUser = useSelector(selectCurrentUser);
    const [isHovered, setIsHovered] = useState(false); 
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const fillWishlistHeart = () => {
        if (wishlisted){
            return "true"
        }
        else {
            return undefined
        }
    } 
    return (
        <CarouselSlideContainer>

            <CarouselImage url={image_url}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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