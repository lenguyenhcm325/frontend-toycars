import styled from "styled-components";

export const NotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;



& .not-found-content {
    text-align: center;
    max-width: 500px;
}

& .not-found-content h1 {
    font-size: 8rem;
    color: #339af0;  
    margin-bottom: 1rem;
}

& .not-found-content p {
    font-size: 1.5rem;
    color: #1864ab;  
    margin-bottom: 2rem;
}

& .not-found-content a {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    background-color: #228be6;  
    color: white;
    transition: background-color 0.2s ease;
}

& .not-found-content a:hover {
    background-color: #1c7ed6;  
}


`