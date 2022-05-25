import React from "react";
import { UserProfileTop } from "../Componets/UserProfileTop";
import { Navbar } from "../Componets/NavBar";

export const UserProfilePage = () =>{
    return<>
    <Navbar/>
       <div className="UserProfilePageDiv">
           <UserProfileTop/>
       </div>
    </>
}
export default UserProfilePage