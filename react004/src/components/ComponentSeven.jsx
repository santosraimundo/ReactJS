import React from "react";

function ComponentSeven(props){
    return(
        <div className="component">
            <h2>Título: {props.title}</h2>
            <p>Subtítulo: {props.suntitle}</p>
        </div>
    )
}
export default ComponentSeven;