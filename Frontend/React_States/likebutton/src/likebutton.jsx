import { useState } from "react"

export default function Likebutton(){
  let [isliked,setIsliked]=useState(false);
  let toggleLike=()=>{
setIsliked(!isliked);
  }
    return(
        <div>
            
            <p onClick={toggleLike}>
                {isliked?(<i className="fa-solid fa-heart"></i>):(
                <i className="fa-regular fa-heart"></i>)}
            </p>
        </div>
    )
}