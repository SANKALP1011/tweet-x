import React from "react";
import CompanyLogo from "../Assets/Logo.png";

export const Logo = () =>{
    return(
        <div className="LogoImage">
           <img src={CompanyLogo} alt="ComapnyLogo" className="ComapnyLogo" />
        </div>
    )
}
export default Logo;