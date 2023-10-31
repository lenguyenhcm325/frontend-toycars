import React, {useEffect, useState} from "react";
import {  useSearchParams } from "react-router-dom";
import { ResultsContainer } from "./results.styles";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import FilterSort from "../../components/filter-sort/filter-sort.component";
import ResultModelCard from "../../components/result-model-card/result-model-card.component";
const Results = () => {
    const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;
    const [isLoading, setIsLoading] = useState(true);
    const [resultsData, setResultsData] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    let searchQuery;


    if (localStorage.getItem("searchQuery") !== null){
        if (!searchParams.get("searchQuery")){
            const searchQuery = localStorage.getItem("searchQuery")
            searchParams.set("searchQuery", searchQuery);
        }

    }else {
        searchQuery = undefined;
    }

    

    
    const queryParams = {}; 

    for (const [key,value] of searchParams.entries()){
        queryParams[key] = value;
    }



    const apiUrl = `${backendEndpoint}/api/search?${searchParams.toString()}`
 

    useEffect(() => {
        setResultsData([])
        const fetchResultsData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(apiUrl);
                
                if (!response.ok){
                    throw new Error("Network response was not ok");
                }

                setResultsData( await response.json())
                setIsLoading(false)
            }
            catch(error){
            console.error("Error", error.message);
            setIsLoading(false);
            }
        }
        fetchResultsData();
    }, [searchParams.toString()])

    const priceRangeParam = searchParams.get("priceRange")
    const brandParam = searchParams.get("brand")

    return (

        <ResultsContainer>
        {
            isLoading && <LoadingSpinner/>
        }
            <FilterSort/>
        <div>
            {
                !resultsData.length? (!isLoading && <p className="no-product">Sorry, we couldn't find any products that match your search criteria.</p>)
                :
                resultsData.map((result) => {
                    const resultData = result._source
                    return (
                        <ResultModelCard {...resultData}/>
                    )
                })
            }
        {

            }
        </div>
        </ResultsContainer>
    )
}

export default Results ;