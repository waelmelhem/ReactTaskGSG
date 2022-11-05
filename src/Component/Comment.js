import React from "react";

function Comment(props){
    return(
        <div>
            <h5>{props.data}</h5>
            <div className="text-secondary">date : {props.date}</div>
            <br/>
        </div>
    )
}
export default Comment;