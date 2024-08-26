import React from "react";

    const Condicao=(props)=>{
        if(props.condicao){
            return props.children
        }else{
            return false
        }
    }
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
            <p> Subtítulo: {Condicao()}</p>
        </div>
    )

}
export default ComponentChildren;