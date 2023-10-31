import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import { toPlainJSObject } from "../../../utils/firebase-document-to-js-object";
import { Fragment } from "react";
import LoadingSpinner from "../../../components/loading-spinner/loading-spinner.component";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { EditProfileContainer } from "./edit-profile.styles";
import { selectCurrentUser } from "../../../store/user/user.selector";
const auth = getAuth();
const EditProfile = () => {
    const baseApiUrl = import.meta.env.VITE_FIRESTORE_USER_PROFILES_BASE_URL;
    const reqBodyBaseName = import.meta.env.VITE_FIRESTORE_REQ_BODY_NAME;
    const currentUser= useSelector(selectCurrentUser);
    const navigate = useNavigate();
    const uid = currentUser? currentUser.uid : null;
    const [profileInfo, setProfileInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [changeSaved, setChangeSaved] = useState(false);
    const [changeHasError, setChangeHasError] = useState(false);
    const [token, setToken] = useState(null);


    useEffect(() => {
        if (changeSaved === true){
            setTimeout(() => {
                navigate(`/profile/${uid}`)
            }, 2000)
        }
    }, [changeSaved, setChangeSaved])

    useEffect(() => {
        onAuthStateChanged(auth,async (user) => {
            setIsLoading(true);
            if (user){
            try {

                const token1 = await user.getIdToken();
                setToken(token1)


                let apiUrl = baseApiUrl + uid;  
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
        })
    }, [])

    let infoFormInput = {};
    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const data = new FormData(event.target); 
        const entriesData = [...data.entries()];
        for (let i = 0 ; i < entriesData.length; i++){
            if (entriesData[i][0].includes(".")){
                const keys = entriesData[i][0].split(".");
                const outerKey = keys[0];
                const innerKey = keys[1];
                if (!infoFormInput[outerKey]){
                    infoFormInput[outerKey] = {}
                }
                if (innerKey == "postal_code"){
                    infoFormInput[outerKey][innerKey] = parseInt(entriesData[i][1]);
                }
                else {
                    infoFormInput[outerKey][innerKey] = entriesData[i][1];
                }
            }else {
                infoFormInput[entriesData[i][0]] = entriesData[i][1]
            }
        }
        let apiUrl = baseApiUrl + uid;
        let reqBody = {
            name: reqBodyBaseName + uid,
            fields: 
            {
                email: {
                    stringValue: infoFormInput.email
                },
                family_name: {
                    stringValue: infoFormInput.family_name
                },
                given_name: {
                    stringValue: infoFormInput.given_name
                },
                phone_number: {
                    stringValue: infoFormInput.phone_number
                },
                billing_address: {
                    mapValue: {
                        fields: {
                            city: {
                                stringValue: infoFormInput.billing_address.city
                            },
                            country: {
                                stringValue: infoFormInput.billing_address.country
                            }, 
                            line_1: {
                                stringValue: infoFormInput.billing_address.line_1
                            },
                            line_2: {
                                stringValue: infoFormInput.billing_address.line_2
                            },
                            postal_code: {
                                integerValue: infoFormInput.billing_address.postal_code
                            },
                            state: {
                                stringValue: infoFormInput.billing_address.state
                            }

                        }
                    }
                },
                delivery_address: {
                    mapValue: {
                        fields: {
                            city: {
                                stringValue: infoFormInput.delivery_address.city
                            },
                            country: {
                                stringValue: infoFormInput.delivery_address.country
                            }, 
                            line_1: {
                                stringValue: infoFormInput.delivery_address.line_1
                            },
                            line_2: {
                                stringValue: infoFormInput.delivery_address.line_2
                            },
                            postal_code: {
                                integerValue: infoFormInput.delivery_address.postal_code
                            },
                            state: {
                                stringValue: infoFormInput.delivery_address.state
                            }

                        }
                    }
                },
            }
        }; 

        try {
            const response = await fetch(apiUrl,{
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reqBody)
            } );
            if (!response.ok){
                throw new Error("Either not authorized or network error");
            }
            const data = await response.json();
            setChangeSaved(true);
        }catch(error){
            console.error("Error", JSON.stringify(error));
            setChangeHasError(true);
        }
    }
return (
    <EditProfileContainer>
        {
            !token && isLoading && <LoadingSpinner />
        }
        {
            profileInfo && (
        <Fragment>
            <h1>Edit customer details </h1>
            <form method="post" onSubmit={handleSubmit}>
                <label htmlFor="given_name">Given Name:</label>
                <input type="text" id="given_name" name="given_name" defaultValue={profileInfo.given_name} required/><br/>

                <label htmlFor="family_name">Family Name:</label>
                <input type="text" id="family_name" name="family_name" defaultValue={profileInfo.family_name} required/><br/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" defaultValue={profileInfo.email} required/><br/>

                <label htmlFor="phone_number">Phone number:</label>
                <input type="text" id="phone_number" name="phone_number" defaultValue={profileInfo.phone_number} required/><br/>

                <h2 style={{fontSize: "36px"}}>Billing address</h2>

                <label htmlFor="billing_address.line_1">Address Line 1:</label>
                <input type="text" id="billing_address.line_1" name="billing_address.line_1" defaultValue={profileInfo.billing_address && profileInfo.billing_address.line_1} required/><br/>

                <label htmlFor="billing_address.line_2">Address Line 2:</label>
                <input type="text" id="billing_address.line_2" name="billing_address.line_2" defaultValue={profileInfo.billing_address && profileInfo.billing_address.line_2}/><br/>

                <label htmlFor="billing_address.city">City:</label>
                <input type="text" id="billing_address.city" name="billing_address.city" required defaultValue={profileInfo.billing_address && profileInfo.billing_address.city}/><br/>

                <label htmlFor="billing_address.postal_code">Postal Code:</label>
                <input type="text" id="billing_address.postal_code" name="billing_address.postal_code" required defaultValue={profileInfo.billing_address && profileInfo.billing_address.postal_code}/><br/>

                <label htmlFor="billing_address.state">State:</label>
                <input type="text" id="billing_address.state" name="billing_address.state" required defaultValue={profileInfo.billing_address && profileInfo.billing_address.state}/><br/>

                <label htmlFor="billing_address.country">Country:</label>
                <input type="text" id="billing_address.country" name="billing_address.country" required defaultValue={profileInfo.billing_address && profileInfo.billing_address.country}/><br/>

                <h2 style={{fontSize: "36px"}}>Delivery address</h2>


                <label htmlFor="delivery_address.line_1">Address Line 1:</label>
                <input type="text" id="delivery_address.line_1" name="delivery_address.line_1" required defaultValue={profileInfo.delivery_address && profileInfo.delivery_address.line_1}/><br/>

                <label htmlFor="delivery_address.line_2">Address Line 2:</label>
                <input type="text" id="delivery_address.line_2" name="delivery_address.line_2" defaultValue={profileInfo.delivery_address && profileInfo.delivery_address.line_2}/><br/>

                <label htmlFor="delivery_address.city">City:</label>
                <input type="text" id="delivery_address.city" name="delivery_address.city" required defaultValue={profileInfo.delivery_address && profileInfo.delivery_address.city}/><br/>

                <label htmlFor="delivery_address.postal_code">Postal Code:</label>
                <input type="text" id="delivery_address.postal_code" name="delivery_address.postal_code" required defaultValue={profileInfo.delivery_address && profileInfo.delivery_address.postal_code}/><br/>

                <label htmlFor="delivery_address.state">State:</label>
                <input type="text" id="delivery_address.state" name="delivery_address.state" required defaultValue={profileInfo.delivery_address && profileInfo.delivery_address.state}/><br/>

                <label htmlFor="delivery_address.country">Country:</label>
                <input type="text" id="delivery_address.country" name="delivery_address.country" required defaultValue={profileInfo.delivery_address && profileInfo.delivery_address.country}/><br/>
                <div className="confirm-button-div">
                <input type="submit" defaultValue="Confirm change" />
                </div>
                {
                    changeSaved && <p style={{
                        color: "#008000",
                        fontSize: "24px",
                        textAlign: "center"
                    }}>&#10004; Change has been saved! You will be redirected to your profile page shortly...</p>
                }
                {
                    changeHasError && <p style={{
                        color: "#FF0000", 
                        fontSize: "24px",
                        textAlign: "center"
                    }}>&#10006; Save failed. Please try again later!</p>
                }
            </form>
    </Fragment>
        )
    }

    </EditProfileContainer>
)
}

export default EditProfile;