import React from "react";
import { NotFoundContainer } from "./not-found.styles";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (

        <NotFoundContainer>
            <div class="not-found-content">
                <h1>404</h1>
                <p>Sorry, the page you're looking for cannot be found.</p>
                <Link to="/">Go Back Home</Link>
            </div>
        </NotFoundContainer>
    )
}

export default NotFound;