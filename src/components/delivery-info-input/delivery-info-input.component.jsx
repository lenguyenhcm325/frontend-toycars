import React, {Profiler, useEffect, useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { DeliverInfoContainer } from "./delivery-info-input.styles";
import { toPlainJSObject } from "../../utils/firebase-document-to-js-object";
import DeliveryOption from "../delivery-option/delivery-option.component"
import { selectCurrentUser } from "../../store/user/user.selector";
const auth = getAuth();
const DeliveryInfoInput = ({onBubble}) => {
    const baseApiUrl = import.meta.env.VITE_FIRESTORE_USER_PROFILES_BASE_URL;
    const reqBodyBaseName = import.meta.env.VITE_FIRESTORE_REQ_BODY_NAME
    const currentUser= useSelector(selectCurrentUser);
    const [changeSaved, setChangeSaved] = useState(false);
    const [changeHasError, setChangeHasError] = useState(false);
    const [profileInfo, setProfileInfo] = useState(null);
    const uid = currentUser? currentUser.uid : null;
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        if (changeSaved){
            setTimeout(() => {
                setChangeSaved(false);
            }, 4500)
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
                console.error(JSON.stringify(err));
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
    <DeliverInfoContainer>
        {
            !profileInfo && isLoading && <LoadingSpinner />
        }
    {
        profileInfo && (
        <Fragment>
            <form method="post" onSubmit={handleSubmit}>
                <label htmlFor="given_name">Given Name:</label>
                <input type="text" id="given_name" name="given_name" required defaultValue={profileInfo.given_name}/><br/>

                <label htmlFor="family_name">Family Name:</label>
                <input type="text" id="family_name" name="family_name" required defaultValue={profileInfo.family_name}/><br/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required defaultValue={profileInfo.email}/><br/>

                <label htmlFor="phone_number">Phone number:</label>
                <input type="text" id="phone_number" name="phone_number" required defaultValue={profileInfo.phone_number}/><br/>

                <h2 style={{fontSize: "48px"}}>Billing address</h2>

                <label htmlFor="billing_address.line_1">Address Line 1:</label>
                <input type="text" id="billing_address.line_1" name="billing_address.line_1" required defaultValue={profileInfo.billing_address && profileInfo.billing_address.line_1}/><br/>

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

                <h2 style={{fontSize: "48px"}}>Delivery address</h2>


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

                <label >Select delivery option</label>
                <DeliveryOption onBubble={onBubble}/>
                <div className="confirm-address-button-div">
                <input type="submit" value="Address confirmation" />
                </div>
                {
                    changeSaved && <p style={{
                        color: "#008000",
                        fontSize: "24px",
                        textAlign: "center"
                    }}>&#10004; Address has been confirmed!</p>
                }
                {
                    changeHasError && <p style={{
                        color: "#FF0000", 
                        fontSize: "24px",
                        textAlign: "center"
                    }}>&#10006; Something went wrong. Please try again later!</p>
                }
            </form>
            
        </Fragment>
        )
    }
    </DeliverInfoContainer>
)
}

export default DeliveryInfoInput