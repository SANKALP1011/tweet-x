import React from "react";
import { useState } from "react";
import { UserProfileTop } from "../Componets/UserProfileTop";
import { Navbar } from "../Componets/NavBar";
import { FeedCard } from "../Componets/FeedCard";
import { UserCard } from "../Componets/UserCard";
import {FollowingCard} from "../Componets/FollowingCard";

export const UserProfilePage = () =>{
    const [feed,setFeed] = useState(false);
    const [users,setUsers] = useState(false);
    const [following,setFollowing] = useState(false);
    
    return<>
    <Navbar/>
       <div className="UserProfilePageDiv">
           <UserProfileTop/>
       </div>
       <hr className="line"/>
       <div className="UserOptions">
       <button className="Posts" onClick={()=>{
           setFeed(true);
           setUsers(false);
           setFollowing(false);
       }}>
         Posts
        </button>
       <button className="Followers" onClick={()=>{
           setUsers(true)
           setFeed(false);
           setFollowing(false)
        }}>
          Followers
        </button>
        <button className="Following" onClick={()=>{
            setFeed(false);
            setUsers(false);
            setFollowing(true)
        }}>
           Following
        </button>
       </div>
       <div className="CardInformation">
           {feed === true && <FeedCard/>}
           {feed === true && <FeedCard/>}
           {feed === true && <FeedCard/>}
           {users === true && <UserCard/>}
           {users === true && <UserCard/>}
           {users === true && <UserCard/>}
           {following === true && <FollowingCard/>}
           {following === true && <FollowingCard/>}
           {following === true && <FollowingCard/>}
           {feed === false && !<FeedCard/>}
           {users === false && !<UserCard/>}
           {following === false && !<FollowingCard/>}
       </div>
     
    </>
}
export default UserProfilePage