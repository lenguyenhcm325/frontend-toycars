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
                console.log("hit this if user");
                const token1 = await user.getIdToken();
                setToken(token1);
                console.log("this is the token  ", token1);
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
                console.log(data)
                console.log(data)
                console.log(data)
                console.log(toPlainJSObject(data));
                console.log("set the profile!", data);
                setProfileInfo(toPlainJSObject(data))
                console.log("after set the profile!", data);

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
            
              console.log("hit this else user");
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





// other
// async function fetchUserInfo(){
//     try {
//         console.log(token1)
//         console.log(token1)
//         console.log(token1)
//         console.log(token1)

//         console.log("this should be only one time!")
//         console.log(token);
//         let apiUrl = baseApiUrl + "N98vA0qgUoOqrN739gBcudGKAD63";  
//         const response = await fetch(apiUrl, {
//             method: "GET", 
//             headers: {
//                 "Authorization": `Bearer ${token1}`,
//                 "Content-Type": "application/json"
//             }
//         })
//         if (!response.ok){
//             throw new Error("either not authorized or network error");
//         }
//         const data = await response.json();
//         console.log()



//     }catch(err){
//         console.error(err.message);
//     }
// }
// fetchUserInfo();


// const whatToRender = () => {
//     if (profileInfo) {
//         const {billing_address, delivery_address} = profileInfo;
//         return (
//             <ShowProfileContainer>
    
//                 <h1>User Profile</h1>
    
//                 <div className="personal-info-wrapper">
//                 <div class="section personal-info-section">
//                     <h2>Personal Information</h2>
//                     <div class="info">
//                         <div class="field">
//                             <label for="first-name">First Name:</label>
//                             <span id="first-name">${profileInfo.given_name}</span>
//                         </div>
//                         <div class="field">
//                             <label for="last-name">Last Name:</label>
//                             <span id="last-name">${profileInfo.family_name}</span>
//                         </div>
//                         <div class="field">
//                             <label for="email">Email Address:</label>
//                             <span id="email">${profileInfo.email}</span>
//                         </div>
//                         <div class="field">
//                             <label for="phone">Phone Number:</label>
//                             <span id="phone">${profileInfo.phone_number}</span>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//                 <div className="address-section">
    
//                 <div class="section">
//                     <h2>Billing Address</h2>
//                     <div class="info">
//                         <div class="field">
//                             <label for="billing-address-1">Billing Address Line 1:</label>
//                             <span id="billing-address-1">${billing_address.line_1}</span>
//                         </div>
//                         <div class="field">
//                             <label for="billing-address-2">Billing Address Line 2:</label>
//                             <span id="billing-address-2">${billing_address.line_2}</span>
//                         </div>
//                         <div class="field">
//                             <label for="billing-city">City:</label>
//                             <span id="billing-city">${billing_address.city}</span>
//                         </div>
//                         <div class="field">
//                             <label for="billing-state">State/Province:</label>
//                             <span id="billing-state">${billing_address.state}</span>
//                         </div>
//                         <div class="field">
//                             <label for="billing-zip">ZIP/Postal Code:</label>
//                             <span id="billing-zip">${billing_address.postal_code}</span>
//                         </div>
//                         <div class="field">
//                             <label for="billing-country">Country:</label>
//                             <span id="billing-country">${billing_address.country}</span>
//                         </div>
//                     </div>
//                 </div>
    
//                 <div class="section">
//                     <h2>Delivery Address</h2>
//                     <div class="info">
//                         <div class="field">
//                             <label for="delivery-address-1">Delivery Address Line 1:</label>
//                             <span id="delivery-address-1">${delivery_address.line_1}</span>
//                         </div>
//                         <div class="field">
//                             <label for="delivery-address-2">Delivery Address Line 2:</label>
//                             <span id="delivery-address-2">${delivery_address.line_2}</span>
//                         </div>
//                         <div class="field">
//                             <label for="delivery-city">City:</label>
//                             <span id="delivery-city">${delivery_address.city}</span>
//                         </div>
//                         <div class="field">
//                             <label for="delivery-state">State/Province:</label>
//                             <span id="delivery-state">${delivery_address.state}</span>
//                         </div>
//                         <div class="field">
//                             <label for="delivery-zip">ZIP/Postal Code:</label>
//                             <span id="delivery-zip">${delivery_address.postal_code}</span>
//                         </div>
//                         <div class="field">
//                             <label for="delivery-country">Country:</label>
//                             <span id="delivery-country">${delivery_address.country}</span>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//                 <div className="button-container">
//                     <button>Edit your profile</button>
//                 </div>
//             </ShowProfileContainer>
//         )
//     }else {
//         return(
//             <ShowProfileContainer>
//             Sorry you are not authorized
//         </ShowProfileContainer>
//         )
//     }
// }  