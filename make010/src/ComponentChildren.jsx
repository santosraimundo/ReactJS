import React from "react";

const ComponentChildren =(props)=>{
    return(
        <div className="children">
            <h2 className="title">Título: {props.title}</h2>
            <p> Função: {props.funcao}</p>
            <p> Departamento: {props.departamento}</p>
            <p>{props.children}</p>
            
        </div>
    )
}
export default ComponentChildren;