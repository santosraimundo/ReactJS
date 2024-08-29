import React from "react";

const ComponentDaughter = (props)=>{
    return(
        <div style={{backgroundColor: "blue", color: "white", padding: "10px", height:"300px", margin:"15px"}}>
            <p>Título: {props.title}</p>
            <button onClick={props.clicar}>Clicar</button>
        </div>
    )

}
export default ComponentDaughter;