import React from "react";
import Logo from "../Componets/Logo";
import { WhiteButton } from "../Componets/WhiteButton";
import {LogInForm} from "../Form/LogInForm";
import UserAuth from "../Assets/UserAuth.svg";
import { NavLink } from "react-router-dom";

export const LogIn = () =>{
    return<>
           <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
               <div>
               <Logo/>
               <NavLink exact to="/signin">
                    <WhiteButton name={<h4>Sign In</h4>}/> 
               </NavLink>
              <LogInForm/>
               </div>
               <div>
                <img src={UserAuth} className="userAuth" alt="user"/>
               </div>
           </div>
    </>
}
export default LogIn;