import React from "react";

function ComponentNine(props){
    return(
        <div className="component">
            <h1>Título: {props.title}</h1>
            <p>Subtítulo:{props.subtitle}</p>

        </div>
    )
}
export default ComponentNine;