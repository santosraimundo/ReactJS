import React from "react";
function ComponentOne(props){
    return(
        <div class="component">
            <h1>{props.title}</h1>
            <p>Componete mas simples de ReactJS</p>
        </div>
    )
}
export default ComponentOne;