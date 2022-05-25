import React from "react";
import Tweet from "../Assets/Tweet.svg";
import { Navbar } from "../Componets/NavBar";
import { RedButton } from "../Componets/RedButton";

export const LandingPage = () =>{
    return<>
    <Navbar/>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="LandingPage">
             <h1 className="LandingPageHeading">Welcome</h1>
             <h2  className="LandingPageHeading">to the tweet-x.</h2>
             <h2 className="LandingSubFont">Only place to stay connected with everyone.</h2>
             <RedButton name={<h3>Sign In</h3>}/>
          </div>
          <img src={Tweet} className="LandingImage" alt="tweet"/>
      </div>
    </>

}
export default LandingPage;