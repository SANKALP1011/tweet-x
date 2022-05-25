import React from "react";
import { NavLink } from "react-router-dom";
import {RedButton} from "../Componets/RedButton";
import {TextField} from "../Componets/TextField";

export const SignUpForm = () =>{
    return<>
        <div className="SignUpBlock">
            <h1 className="SignUphHeading">Create Account</h1>
           <TextField/>
           <TextField/>
           <TextField/>
           <TextField/>
           <NavLink exact to="/UserProfilePage">
               <RedButton name={<h3>Sign Up</h3>}/>
           </NavLink>
        </div>
    </>
}
export default SignUpForm;