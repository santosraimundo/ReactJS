import React from "react";

const ComponentChildren =(props)=>{
    return(
        <div className="children">
            <h2 className="title">Título: {props.title}</h2>
            <p>Filho</p>
            
        </div>
    )
}
export default ComponentChildren;