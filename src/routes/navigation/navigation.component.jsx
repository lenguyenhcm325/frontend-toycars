import React, { useState} from "react";
import { Link } from "react-router-dom";
import PromptLoginAlert from "../../components/prompt-login-alert/prompt-login-alert.component";
import Dummy from "../../components/dummy/dummy.component";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/search-bar/search-bar.component";
import { useDispatch, useSelector } from "react-redux"
import { handleSignOutAuthUser } from "../../store/user/user.thunk";
import { selectCurrentUser, selectAuthError } from "../../store/user/user.selector";
import SVGBlock from "../../components/svg-block/svg-block.component";
import {IconsContainer, LogoContainer,CarLogo, BrandName, NavigationContainer, BrandNameContainer} from "./navigation.styles"
const Navigation = ({handleSearch}) => {
    const [showPromptLogin, setShowPromptLogin] = useState(false);
    // const [lastClicked, setLastClicked] = useState(null);

    const handlePromptLoginAlert = () => {
        setShowPromptLogin(true);
        setTimeout(() => {
            setShowPromptLogin(false)
        }, 2800)

        // const now = new Date().getTime();

        // // If the function was called less than 1 second ago
        // if (lastClicked && now - lastClicked < 4000) {
        //     setShowPromptLogin(true);
        //     setTimeout(() => {
        //         setShowPromptLogin(false);
        //     }, 4000);
        // }
    
        // setLastClicked(now);
    }

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
        <SearchBar onSearch={handleSearch}/>
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
            {/* <SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/user-svg.svg" text="Login"/> */}
            {currentUser? 
            (<Link className="link" to="/cart">
            <SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/shopping-cart-svg.svg" text="Cart"/>
            </Link>): 
            (<SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/shopping-cart-svg.svg" onClick={handlePromptLoginAlert} text="Cart"/>)
            }

            {currentUser? 
            (<Link className="link" to="/wishlist">
            <SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/heart-svg.svg"  text="Wishlist"/></Link>):
            (<SVGBlock src="https://toycars-img.s3.eu-central-1.amazonaws.com/svg/heart-svg.svg" onClick={handlePromptLoginAlert} text="Wishlist"/>)}

        </IconsContainer>

        </NavigationContainer>
        <BrandNameContainer>
        <BrandName to="/" color="pink">UrbanX</BrandName>
        <BrandName to="/" color="blue">AdrenalineRush</BrandName>
        <BrandName to="/" color="teal">TrailBlitz</BrandName>
        <BrandName to="/" color="green">XtremeDrive</BrandName>
            {currentUser && (<Dummy currentUser={currentUser}/>)}
        </BrandNameContainer>

</div>
    )
}

export default Navigation;