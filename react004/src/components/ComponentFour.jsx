import React from "react";

const ComponentFour = (props)=>{
    return(
        <div className="component">
            <h4>Título4: {props.title}</h4>
            <p>Subtitulo: {props.subtitle}</p>
            {props.children}

        </div>
    )
}
export default ComponentFour;