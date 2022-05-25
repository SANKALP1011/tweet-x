import React from "react";
import "../Styles/ComponentsStyles/TextField.css";

export const TextField = ({label}) =>{
    return(
        <div>
             <input type="text" className="form__input" id="name" placeholder={label} required="" />
        </div>
    )
}