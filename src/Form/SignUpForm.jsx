import React from "react";
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
           <RedButton name={<h3>Sign Up</h3>}/>
        </div>
    </>
}
export default SignUpForm;