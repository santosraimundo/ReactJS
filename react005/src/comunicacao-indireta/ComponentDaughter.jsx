import React from "react";

const ComponentDaughter = (props)=>{
    return(
        <div style={{backgroundColor: "blue", color: "whi"}}>
            <p>Título: {props.title}</p>
            <button onClick={props.clicar}>Clicar</button>
        </div>
    )

}
export default ComponentDaughter;