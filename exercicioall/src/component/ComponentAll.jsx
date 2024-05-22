import React from "react";

const ComponentAll= (props)=>{
    return(
    <div className="componentall">
        <h1>Title: {props.title}</h1>
        {props.children}
    </div>
    )
}
export default ComponentAll;