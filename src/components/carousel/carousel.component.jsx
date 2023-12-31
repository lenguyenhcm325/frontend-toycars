import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { ArrowLeft, ArrowRight } from "./carousel.styles";
import CarouselSlide from "../carousel-slide/carousel-slide.component";
import { CarouselContainer, Dot } from "./carousel.styles";
import { selectWishlistedModelNames } from "../../store/wishlist/wishlist.selector";
const Carousel = ({carModels, brandName}) => {
    let numSlidesOnCarousel = 3;
    const wishlistedModelNames = useSelector(selectWishlistedModelNames);

    const [carouselPage, setCarouselPage] = useState(1);

    const handleArrowClick = (direction) => {
        if (carouselPage == 1 && direction == "left"){
                return;
        }
        if (carouselPage == Math.floor(carModels.length / numSlidesOnCarousel + 1) && direction == "right"){
                return;
        }
        else{
            if (direction == "left"){
                setCarouselPage(carouselPage - 1);
            }
            else{
                setCarouselPage(carouselPage + 1);
            }


        }
    }

    const handleDotClick = (pageNumber) => {
        setCarouselPage(Math.floor(pageNumber/3 + 1))
    }

    let dotArray = [];
    let carouselSlideArray = [];
    for(let i = 0; i < carModels.length; i++){

        if (i % numSlidesOnCarousel === 0){
            if (Math.floor(i/numSlidesOnCarousel + 1) == carouselPage){
                dotArray.push(<Dot key={Math.random().toString(36).substring(7)} color="#4dabf7" onClick={() => handleDotClick(i)}/>)
            }
            else {
                dotArray.push(<Dot key={Math.random().toString(36).substring(7)} onClick={() => handleDotClick(i)}/>)

            }
         }
    }
    if (((carouselPage - 1) * numSlidesOnCarousel - 1 + numSlidesOnCarousel) >= carModels.length){
        for (let i = carModels.length - 1; i >= (carModels.length - numSlidesOnCarousel); i--){
            const carInfo = carModels[i];
            carouselSlideArray.push(<CarouselSlide number={"" + i} key={Math.random().toString(36).substring(7)} {...carInfo} brand_name={brandName} 
            wishlisted={wishlistedModelNames && wishlistedModelNames.includes(carInfo.model_brand)}/>);

        }
    }
    else{    
        for (let i = ((carouselPage - 1) * numSlidesOnCarousel); i < numSlidesOnCarousel * carouselPage; i++){
            const carInfo = carModels[i];

        carouselSlideArray.push(<CarouselSlide number={"" + i} key={Math.random().toString(36).substring(7)} {...carInfo} brand_name={brandName} 
        wishlisted={wishlistedModelNames && wishlistedModelNames.includes(carInfo.model_brand)}/>)
    }}


    return (
        <div style={{
            display: "flex", 
            flexDirection: "column"
        }}>
            <CarouselContainer >
                <ArrowLeft onClick={() => handleArrowClick("left")} />

                {carouselSlideArray }
                <ArrowRight onClick={() => handleArrowClick("right")}/>

            </CarouselContainer>
            <div style={{
                paddingTop: "20px",
                paddingBottom: "20px",
            display: "flex",
            gap: "10px" ,
            justifyContent: "center"
        }}>
                {dotArray}
            </div>
        </div>
    )
}

export default Carousel;