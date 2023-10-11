import React, {useState, useEffect} from 'react'; 
import { InputContainer, SearchButton } from './search-bar.styles';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
function SearchBar({onSearch}) {
    const navigate = useNavigate();
    let location = useLocation(); 
    const [searchQuery, setSearchQuery] = useState("");
    let [searchParams] = useSearchParams(); 
    const searchQueryParams = new URLSearchParams();

    if (searchParams.get("searchQuery") && location.pathname == "/results"){
        const searchQuery = searchParams.get("searchQuery");
        localStorage.setItem("searchQuery", searchQuery);
    }


    if (location.pathname !== "/results"){
        localStorage.removeItem("searchQuery");
    }

    useEffect(() => {
        if (location.pathname == "/results"){
            if (localStorage.getItem("searchQuery")){
                setSearchQuery(localStorage.getItem("searchQuery"))
            }
        }
        else if (location.pathname !== "/results"){
            setSearchQuery("")
        }
    }, [location.pathname])

    const handleChange = (e) => {
        setSearchQuery(e.target.value); 
        
    };

    const handleSubmit = (e) => {
        searchQueryParams.set("searchQuery", searchQuery);
        e.preventDefault();
        localStorage.setItem("searchQuery", searchQuery);
        onSearch(searchQuery);
        navigate(`/results?${searchQueryParams.toString()}`)



    }; 

    return (

        <form onSubmit={handleSubmit}>
            <InputContainer type="text" 
            placeholder='Type a keyword to search...'
            value={searchQuery}
            onChange={handleChange}
            />
            <SearchButton type='submit'>Search</SearchButton>
        </form>
    )
}

export default SearchBar;