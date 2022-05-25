import React from "react";
import { UserCard } from "../Componets/UserCard";

export const User = () =>{
    return<>
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