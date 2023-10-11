import React from "react";
import { ProfileContainer } from "./profile.styles";
import { Outlet } from "react-router-dom";
import ShowProfile from "./show-profile/show-profile.component";
import ErrorPage from "../error-page/error-page.component";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

const profileRouter = createBrowserRouter([
    {   
        errorElement: <ErrorPage />,
        children: [
        {
            path: "gun",
            element: <ShowProfile />, 
            
        },
        // {
        //     path: ":userId/edit",
        //     element: <EditProfile />
        // }
        ]
    }
])



const Profile = () => {
    return (

            <ProfileContainer>
                <Outlet/>
            </ProfileContainer>

    )
}


export default Profile;
