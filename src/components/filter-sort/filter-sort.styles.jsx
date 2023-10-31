import styled from "styled-components";


export const FilterSortContainer = styled.div`
    height: 256px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    font-size: 18px; 
    display: flex;
    flex-direction: column;
    align-items: center;

& .price-container {
    margin-top: 36px;
    display: flex;
    gap: 24px;
    margin-bottom: 16px;
}



& .filter {
    display: flex;
    flex-direction: column;
    
    
}

& .filter-brand {
    align-items: center;
}

& .alert-message {
    color: red;
    margin-bottom: 16px;

}  

& label {
    font-weight: bold;
    margin-bottom: 5px;
}


& input[type="number"],
& select {
    font-size: 16px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 120px;
}

& select {
    width: 240px;
}

& .button-container {
    margin-top: 16px;
    display: flex; 
    justify-content: center;
}

& .submit-button {
    
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;
}

& .submit-button:hover {
    background-color: #357AE8;
}
`

