import React from "react";

export const FeedButton = ({name}) =>{
  return(
      <div>
          <button type="button" className="FeedButton shadow-md">{name}</button>
      </div>
  )
}
export default FeedButton;