import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoadingSpinner from "../../../components/loading-spinner/loading-spinner.component";
import { toPlainJSObject } from "../../../utils/firebase-document-to-js-object";
import { ShowProfileContainer } from "./show-profile.styles";
import {useParams} from "react-router-dom";
// Don't delete the line below, although it is unused!
import { retrieveIdToken } from "../../../utils/firebase/firebase.utils";
const auth = getAuth();
const ShowProfile = () => {
    const [profileInfo, setProfileInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();
    const [token , setToken ] = useState(null);
    useEffect(() => {
        const baseApiUrl = import.meta.env.VITE_FIRESTORE_USER_PROFILES_BASE_URL
        onAuthStateChanged(auth,async (user) => {
            setIsLoading(true);
            if (user){


              try {
                const token1 = await user.getIdToken();
                setToken(token1);
                let apiUrl = baseApiUrl + id;  
                const response = await fetch(apiUrl, {
                    method: "GET", 
                    headers: {
                        "Authorization": `Bearer ${token1}`,
                        "Content-Type": "application/json"
                    }
                })
                if (!response.ok){
                    throw new Error("either not authorized or network error");
                }
                const data = await response.json();
                setProfileInfo(toPlainJSObject(data))
                setIsLoading(false);

            }catch(err){
                console.error(err);
                setIsLoading(false);
            }
            }else {
                // YOU ARE NOT LOGGED IN
                // UNAUTHORIZED
                // UNAUTHENTICATED
                setIsLoading(false)
            }
          }  )
    }, [])


    if (isLoading){
        return (
            <LoadingSpinner />
        )
    }
    if (profileInfo){
        return (

            <ShowProfileContainer>
                    <div className="button-container">
                        <Link to={`/profile/${id}/edit`}>
                            <button>Edit your profile</button>
                        </Link>
                        
                    </div>

            
                    <div className="personal-info-wrapper">
                    <div className="section personal-info-section">
                        <h2>Personal Information</h2>
                        <div className="info">
                            <div className="field">
                                <label for="first-name">First Name:</label>
                                <span id="first-name">{profileInfo.given_name}</span>
                            </div>
                            <div className="field">
                                <label for="last-name">Last Name:</label>
                                <span id="last-name">{profileInfo.family_name}</span>
                            </div>
                            <div className="field">
                                <label for="email">Email Address:</label>
                                <span id="email">{profileInfo.email}</span>
                            </div>
                            <div className="field">
                                <label for="phone">Phone Number:</label>
                                <span id="phone">{profileInfo.phone_number}</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="address-section">
            
                    <div className="section">
                        <h2>Billing Address</h2>
                        <div className="info">
                            <div className="field">
                                <label for="billing-address-1">Billing Address Line 1:</label>
                                <span id="billing-address-1">{profileInfo.billing_address && profileInfo.billing_address.line_1}</span>
                            </div>
                            <div className="field">
                                <label for="billing-address-2">Billing Address Line 2:</label>
                                <span id="billing-address-2">{profileInfo.billing_address && profileInfo.billing_address.line_2}</span>
                            </div>
                            <div className="field">
                                <label for="billing-city">City:</label>
                                <span id="billing-city">{profileInfo.billing_address && profileInfo.billing_address.city}</span>
                            </div>
                            <div className="field">
                                <label for="billing-state">State/Province:</label>
                                <span id="billing-state">{profileInfo.billing_address && profileInfo.billing_address.state}</span>
                            </div>
                            <div className="field">
                                <label for="billing-zip">ZIP/Postal Code:</label>
                                <span id="billing-zip">{profileInfo.billing_address && profileInfo.billing_address.postal_code}</span>
                            </div>
                            <div className="field">
                                <label for="billing-country">Country:</label>
                                <span id="billing-country">{profileInfo.billing_address && profileInfo.billing_address.country}</span>
                            </div>
                        </div>
                    </div>
            
                    <div className="section">
                        <h2>Delivery Address</h2>
                        <div className="info">
                            <div className="field">
                                <label for="delivery-address-1">Delivery Address Line 1:</label>
                                <span id="delivery-address-1">{profileInfo.delivery_address && profileInfo.delivery_address.line_1}</span>
                            </div>
                            <div className="field">
                                <label for="delivery-address-2">Delivery Address Line 2:</label>
                                <span id="delivery-address-2">{profileInfo.delivery_address && profileInfo.delivery_address.line_2}</span>
                            </div>
                            <div className="field">
                                <label for="delivery-city">City:</label>
                                <span id="delivery-city">{profileInfo.delivery_address && profileInfo.delivery_address.city}</span>
                            </div>
                            <div className="field">
                                <label for="delivery-state">State/Province:</label>
                                <span id="delivery-state">{profileInfo.delivery_address && profileInfo.delivery_address.state}</span>
                            </div>
                            <div className="field">
                                <label for="delivery-zip">ZIP/Postal Code:</label>
                                <span id="delivery-zip">{profileInfo.delivery_address && profileInfo.delivery_address.postal_code}</span>
                            </div>
                            <div className="field">
                                <label for="delivery-country">Country:</label>
                                <span id="delivery-country">{profileInfo.delivery_address && profileInfo.delivery_address.country}</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="button-container">
                        <Link to={`/profile/${id}/edit`}>
                            <button>Edit your profile</button>
                        </Link>
                        
                    </div>
                </ShowProfileContainer>
                )
            
    }else {
        return (<div>You are not authorized</div>)
    }
}

export default ShowProfile;
