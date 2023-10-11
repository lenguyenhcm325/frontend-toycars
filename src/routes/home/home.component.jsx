import React from "react";
import { Fragment } from "react";
import Carousel from "../../components/carousel/carousel.component";
import { useSelector } from "react-redux";
import { selectAllCarsInfo } from "../../store/brand/brand.selector";
const Home = () => {

    const allCarsInfo = useSelector(selectAllCarsInfo); 
    return (
        <div>

            {   

                allCarsInfo.map((item, index) => {
                    
                    return (
                        <Fragment>

                        <div>
                            <h2>{item.brand_name}</h2>
                        </div>
                        <Carousel key={Math.random().toString(36).substring(7)} carModels={item.car_models} brandName={item.brand_name}/>
                        </Fragment>
                    )
})
            }
        </div>
    )
}

export default Home;