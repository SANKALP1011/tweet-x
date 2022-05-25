import React from "react";
import ProfileImage from "../Assets/ProfilePic.svg";

export const FollowingCard = () =>{
   return<>
   <div className="FollowingCard shadow-md">
     <img src={ProfileImage} alt="user" className="ProfilePic"/>
     <div className="FollowingData">
     <h2 className="UserName">Arjun</h2>
     <p className="Following">Following</p>
     </div>
   </div>
   </>
}
export default FollowingCard