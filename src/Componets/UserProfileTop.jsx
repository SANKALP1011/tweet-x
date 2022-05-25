import React from "react";
import ProfileImage from "../Assets/ProfilePic.svg";

export const UserProfileTop = () =>{
    return <>
    <div className="UserProfileDiv">
       <img src={ProfileImage} className="ProfilePic" alt="userImage"/>
       <div className="UserProfileData">
          <h2 className="UserName">Arjun Reddy</h2>
          <div className="UserProfileInfo">
              <p className="FeedFont">Posts: 511</p>
              <p className="FeedFont">Follower: 511</p>
              <p className="FeedFont">Following : 511</p>
       </div>
    </div>
    </div>
    </>;
}