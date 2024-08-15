import React from "react";

function ComponentChildren(props){
    return(
        <div className="component">
            <h2 className="title">Titulo:{props.title}</h2>
            <p>Filho:</p>
        </div>
    )
}
export default ComponentChildren;