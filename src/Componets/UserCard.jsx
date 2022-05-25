import { render } from "@testing-library/react";
import React from "react";
import ProfilePic from "../Assets/ProfilePic.svg"
import {FollwerButton} from "./FollowersButton";

export const UserCard = () =>{
    return(
        <div className="UserDiv">
            <img src={ProfilePic} className="ProfilePic" alt=""/>
            <div className="FollowersData">
               <h2 className="UserName">Arjun Reddy</h2>
               <FollwerButton name={<h3>Following</h3>}/>
           </div>
        </div>
    )
}