import React from "react";
import { RedButton } from "../Componets/RedButton";
import { WhiteButton } from "../Componets/WhiteButton";
import { TextField } from "../Componets/TextField";

export const LandingPage = () =>{
    return<>
    <h1>This the landing page.</h1>
    <RedButton name={<h3>Sign up</h3>} />
    <WhiteButton name={<h3>white</h3>} />
    <TextField placeholder="HHIJI"/>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
    </>

}
export default LandingPage;