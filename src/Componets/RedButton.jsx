import React from "react";
import "../Styles/index.css";
import "../Styles/ComponentsStyles/RedButton.css";

export const RedButton = ({name}) =>{
    return(
        <div>
<button type="button" className="redButton shadow-md">{name}</button>
        </div>
    )
}