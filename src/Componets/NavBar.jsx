import React from "react";
import { NavLink } from "react-router-dom";
import ComapanyLogo from "../Assets/Logo.png";

export const Navbar = () =>{
 return<>
  <div className="NavBar shadow-md">
      <img src={ComapanyLogo} className="NavBarLogo" alt="h"/>
      <div className="RightAlign">
      <a>
        <NavLink exact to="/FeedPage">
            Feed
        </NavLink>
    </a>
    <a>
        <NavLink exact to="/UserPage">
            User
        </NavLink>
    </a>
    <a>
        <NavLink exact to="/UserProfilePage">
            Profile
        </NavLink>
    </a>
      </div>

  </div>
 </>
}