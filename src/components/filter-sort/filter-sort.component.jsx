import React, {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom"
import { FilterSortContainer } from "./filter-sort.styles";
const FilterSort = () => {
    const navigate = useNavigate();
    const [searchParamsFromURL] = useSearchParams();

    const searchParams = new URLSearchParams();
    const [isValidPriceRange, setIsValidPriceRange] = useState(true);
    const [priceRange, setPriceRange] = useState({
        minPrice: 0, 
        maxPrice: 9999,
    })
    useEffect(() => {
        if (searchParamsFromURL.get("priceRange")){

            const priceRange = searchParamsFromURL.get("priceRange")
            const priceParts = priceRange.split("-");
            let minPrice = parseInt(priceParts[0], 10);
            let maxPrice = parseInt(priceParts[1], 10);
            setPriceRange({
                minPrice: minPrice,
                maxPrice: maxPrice
            })
        }

    }, [])
    const [chosenBrand, setChosenBrand] = useState("")
    const handleChangePrice = (e) => {
        setPriceRange(
            {
                ...priceRange, [e.target.name]: Number(e.target.value)
            }
            
        )
    }

    useEffect


    useEffect(() => {
        console.log(priceRange)
        if ((priceRange.minPrice > priceRange.maxPrice) || (priceRange.maxPrice < priceRange.minPrice)){
            setIsValidPriceRange(false)
        }
        else {
            setIsValidPriceRange(true)
        }
    }, [priceRange])

    const handleChangeBrand = (e) => {
        const selectedBrand = e.target.value;
        setChosenBrand(selectedBrand);
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const {minPrice, maxPrice} = priceRange;
        let brandParam;
        if (localStorage.getItem("searchQuery") !== null){
            if (!searchParams.get("searchQuery")){
                const searchQuery = localStorage.getItem("searchQuery")
                searchParams.set("searchQuery", searchQuery);
            }

        }
        if (chosenBrand && chosenBrand != ""){
            searchParams.append("brand", chosenBrand);
        }
        searchParams.append("priceRange", `${minPrice}-${maxPrice}`);

        navigate("/results?" + searchParams.toString())

        
    }

    return (
        <FilterSortContainer>
    <form onSubmit={handleSubmit}>
        <div className="price-container">
            <div className="filter">
                <label htmlFor="min-price">Min Price:</label>
                <input type="number" id="min-price" name="minPrice" placeholder="Min Price" 
                value={priceRange.minPrice}
                onChange={handleChangePrice}/>
            </div>
            <div className="filter">
                <label htmlFor="max-price">Max Price:</label>
                <input type="number" id="max-price" name="maxPrice" placeholder="Max Price" 
                value={priceRange.maxPrice}
                onChange={handleChangePrice}/>
            </div>
        </div>
    {
        !isValidPriceRange && <div className="alert-message">&#9888; Please input a valid price range!</div>
    }

        <div className="filter filter-brand">
            <label htmlFor="brand">Brand:</label>
            <select value={chosenBrand} id="brand" name="brand" onChange={handleChangeBrand}>
                <option value="">Select an option</option>
                <option value="UrbanX">UrbanX</option>
                <option value="TrailBlitz">TrailBlitz</option>
                <option value="AdrenalineRush">AdrenalineRush</option>
                <option value="XTremeDrive">XTremeDrive</option>
                
            </select>
        </div>
        <div className="button-container">
            <button className="submit-button" type="submit">Apply filter</button>
        </div>
    </form>
        </FilterSortContainer>
    )
}

export default FilterSort;