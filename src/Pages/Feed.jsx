import React from "react";
import { FeedCard } from "../Componets/FeedCard";
import {FeedButton} from "../Componets/FeedButton";

export const Feed = () =>{
   return<>
    
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