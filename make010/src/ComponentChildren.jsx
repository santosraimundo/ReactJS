import React from "react";

const ComponentChildren = (props)=>{
    return(
        <div className="children">
            <h2 className="title">Título: {}</h2>
            <p>Filho</p>
            <ComponentChildren></ComponentChildren>
        </div>
    )
}
export default ComponentChildren;