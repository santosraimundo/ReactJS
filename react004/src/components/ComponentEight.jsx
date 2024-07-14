import React from "react";

export default function(props){
    return(
        <div className="component">
             <h5>Título5: {props.title}</h5>
             <p>Subtítulo: {props.subtitle}</p>

        </div>
    )
}
