import React from "react";

    const estilo={
        backgroundColor:"white",
        height: "300px",
        margin: "10px",
        padding: "5px"
    }

const ComponentChildren = (props)=>{
    return(
        <div style={estilo}>
            <h2>Título: {props.title}</h2>
        </div>
    )

}
export default ComponentChildren;