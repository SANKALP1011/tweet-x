import React from "react";
import Logo from "../Componets/Logo";
import { WhiteButton } from "../Componets/WhiteButton";
import {SignUpForm} from "../Form/SignUpForm";
import UserAuth from "../Assets/UserAuth.svg";
import "../Styles/index.css";
import { NavLink } from "react-router-dom";

export const SignUp = () =>{
    return <>
       <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
           <div>
              <Logo/>
              <NavLink exact to="/login">
                  <WhiteButton name={<h4>Log In</h4>}/> 
              </NavLink>
              <SignUpForm />
           </div>
           <div>
               <img src={UserAuth} className="userAuth"  alt="userAUTH"/>
           </div>
       </div>
    
    </>
}
export default SignUp;