import React from "react";

function ComponentChildren(props){
    return(
        <div className="component">
            <h2 className="title">Titulo:{props.title}</h2>
            <p>Filho:</p>
            <p>Função:{props.funcao}</p>
            <p style={{color:"white", backgroundColor:"blue"}}>Nome do Técnico:{props.children}</p>
        </div>
    )
}
export default ComponentChildren;