import React from "react";
import ProfilePic from "../Assets/ProfilePic.svg";

export const FeedCard = () =>{
    return(
        <div className="shadow-md FeedDiv">
           <img src={ProfilePic} className="ProfilePic" alt=""/>
           <div className="FeedData">
               <h2 className="UserName">Arjun Reddy</h2>
               <p className="FeedFont">Lorem Ipsum is simply dummy text of the printing and 
                   typesetting industry. Lorem Ipsum has been the industry's 
                   standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
               </p>
           </div>
           <div className="semicricle"></div>
        </div>
    )
}