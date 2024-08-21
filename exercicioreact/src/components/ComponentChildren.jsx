import React from "react";


const ComponentChildren = (props)=>{
    return(
        <div className="children" style = {{backgroundColor: "green", margin:"10px"}}>
            <h1 className="title">Título: {props.title}</h1>
            
        </div>
    )
}
export default ComponentChildren;