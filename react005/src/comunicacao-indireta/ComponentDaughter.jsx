import React from "react";

const ComponentDaughter = (props)=>{
    return(
        <div>
            <p>Título: {props.title}</p>
            <button onClick={props.clicar}>Clicar</button>
        </div>
    )

}
export default ComponentDaughter;