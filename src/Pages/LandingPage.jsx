import React from "react";
import { RedButton } from "../Componets/RedButton";
import { WhiteButton } from "../Componets/WhiteButton";
import { TextField } from "../Componets/TextField";
import "../Styles/index.css";

export const LandingPage = () =>{
    return<>
    <h1>This the landing page.</h1>
    <RedButton name={<h3>TEXT</h3>} />
    <WhiteButton name={<h3>white</h3>} />
    <TextField placeholder="HHIJI"/>
    </>

}
export default LandingPage;