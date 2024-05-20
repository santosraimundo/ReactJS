import React from "react";

//using arrow function
const ComponentTwo = (props) =>{
    return(
        <div className="component">
        <h2>Titulo2: {props.title} </h2>
        <p>Subtitulo: {props.subtitle}</p>
        </div>
    )
}
export default ComponentTwo;