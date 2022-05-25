import React from "react";
import { FeedCard } from "../Componets/FeedCard";
import {FeedButton} from "../Componets/FeedButton";
import { Navbar } from "../Componets/NavBar";

export const Feed = () =>{
   return<>
    <Navbar/>
    <div className="FeedPage">
        <FeedButton name={<h3>Write</h3>}/>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
    </div>
   
   </>
}
export default Feed;