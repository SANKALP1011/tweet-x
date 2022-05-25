import React from "react";
import { UserCard } from "../Componets/UserCard";
import { Navbar } from "../Componets/NavBar";

export const User = () =>{
    return<>
    <Navbar/>
     <div className="UserPage">
         <UserCard/>
         <UserCard/>
         <UserCard/>
         <UserCard/>
         <UserCard/>
     </div>
    </>
}
export default User;