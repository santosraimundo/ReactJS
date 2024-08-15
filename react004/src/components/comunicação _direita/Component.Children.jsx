import React from "react";

function ComponentChildren(props){
    return(
        <div className="component">
            <h2 className="title">Titulo:{props.title}</h2>
            <p>Filho: Component Father</p>
            <p>Função:{props.funcao}</p>
            <p style={{color:"black", backgroundColor:"yellow", padding:"10px"}}>Nome do Técnico: {props.children}</p>
            
        </div>
    )
}
export default ComponentChildren;