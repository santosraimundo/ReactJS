import React from "react";
function ComponentOne(props){
    return(
        <div className="component">
            <h1>Titulo1: {props.title}</h1>
            <p>Subtitulo: {props.subtitle}</p>
        </div>
    )
}
export default ComponentOne;