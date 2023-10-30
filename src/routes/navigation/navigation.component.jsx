import React, { useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import PromptLoginAlert from "../../components/prompt-login-alert/prompt-login-alert.component";
import Dummy from "../../components/dummy/dummy.component";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/search-bar/search-bar.component";
import { useDispatch, useSelector } from "react-redux"
import { handleSignOutAuthUser } from "../../store/user/user.thunk";
import { selectCurrentUser, selectAuthError } from "../../store/user/user.selector";
import SVGBlock from "../../components/svg-block/svg-block.component";
import {IconsContainer, LogoContainer,CarLogo, NavigationContainer} from "./navigation.styles"
const Navigation = ({handleSearch}) => {
    const [showPromptLogin, setShowPromptLogin] = useState(false);
    const timerRef = useRef(null);
    const handleClick = () => {
        if (timerRef.current){
            clearTimeout(timerRef.current)
        }
        setShowPromptLogin(true);
        timerRef.current = setTimeout(() => {
            setShowPromptLogin(false)
        }, 2000)
    }

    useEffect(() => {
        return () => {
            if (timerRef.current){
                clearTimeout(timerRef.current)
            }
        }
    }, [])

    const currentUser = useSelector(selectCurrentUser);
    const currentError =useSelector(selectAuthError);
    const dispatch = useDispatch();
    const myStyles={
        width: "100%",

    }
    const navigate = useNavigate(); 
    return (
<div style={myStyles}>
        {
            showPromptLogin && (<PromptLoginAlert/>)
        }
        <NavigationContainer>
            <LogoContainer>
            <Link to="/"><CarLogo/></Link>
                
            </LogoContainer>
            <div className="search-bar-outer-div">
                <SearchBar onSearch={handleSearch}/>
            </div>
        
        <IconsContainer>
            {
                currentUser && (
                    <Link to={"/profile/"+ currentUser.uid} >
                        <SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/user-svg.svg" text="Your profile" />
                    </Link>
                )
            }
            {
                !currentUser? (
                    <Link to="/signin" className="link">
                    <SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/log-in-svg.svg" text="Sign in"/>
                    </Link>
                ) :
                (
                    <div onClick = {() => {
                        dispatch(handleSignOutAuthUser())
                        if (!currentError){
                            navigate("/signout")
                        }

                    }}>
                    <SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/log-out-svg.svg" text="Sign out"/>
                    </div>


                )
            }
            {currentUser? 
            (<Link className="link" to="/cart">
            <SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/shopping-cart-svg.svg" text="Cart"/>
            </Link>): 
            (<SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/shopping-cart-svg.svg" onClick={handleClick} text="Cart"/>)
            }

            {currentUser? 
            (<Link className="link" to="/wishlist">
            <SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/heart-svg.svg"  text="Wishlist"/></Link>):
            (<SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/heart-svg.svg" onClick={handleClick} text="Wishlist"/>)}

        </IconsContainer>
        {currentUser && (<Dummy currentUser={currentUser}/>)}
        </NavigationContainer>

</div>
    )
}

export default Navigation;