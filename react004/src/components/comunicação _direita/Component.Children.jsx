import React from "react";

function ComponentChildren(props){
    return(
        <div className="component">
            <p className="title">{props.title}</p>
            <p>Filho:</p>
        </div>
    )
}
export default ComponentChildren;