import React from "react";
import { RedButton } from "../Componets/RedButton";
import { WhiteButton } from "../Componets/WhiteButton";
import "../Styles/index.css";

export const LandingPage = () =>{
    return<>
    <h1>This the landing page.</h1>
    <RedButton name={<h3>TEXT</h3>} />
    <WhiteButton name={<h3>white</h3>} />
    <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>
    </>

}
export default LandingPage;