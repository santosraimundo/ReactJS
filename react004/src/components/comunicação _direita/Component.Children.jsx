import React from "react";

function ComponentChildren(props){
    return(
        <div className="component">
            <h2 className="title">Titulo:{props.title}</h2>
            <p>Filho: Component Father</p>
            <p>Função:{props.funcao}</p>
            <p style={{color:"white", backgroundColor:"blue", padding:"10px"}}>Nome do Técnico: {props.children}</p>
            <ul className="list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>REACTJS</li>
                <li>BOOTSTRAP</li>
            </ul>
        </div>
    )
}
export default ComponentChildren;