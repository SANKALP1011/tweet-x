import React from "react";
import { TextField } from "../Componets/TextField";
import { RedButton } from "../Componets/RedButton";
import { WhiteButton } from "../Componets/WhiteButton";

export const LogInForm = () =>{
    return<>
     <div className="LogInForm">
           <h1 className="SignUphHeading">Login</h1>
           <TextField/>
           <TextField/>
           <div className="ForgotPassDiv">
           <h4 className="ForgotPassword">Forgot Password?</h4>
           <RedButton name={<h3>Log In</h3>}/>
           </div>
       
     </div>
    </>
}
export default LogInForm;