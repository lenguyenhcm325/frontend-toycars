import React from "react";

const SlideText = ({model_brand, price}) => {


    return (
        <div>
            
            <h3>{price}</h3>
            <h3>{model_brand}</h3>
        </div>
    )
}

export default SlideText;