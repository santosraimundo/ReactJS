import React from "react";
import ComponentChildren from "./Component.Children";

const ComponentFather = (props) =>{
    return(
        <div className="component">
            <h1 className="title">{props.title}</h1>
            <p>Pai</p>
            <ComponentChildren title=" Component Filho " Funcao="Técnico de Hardware" >Nome: Santos Raimundo</ComponentChildren>
        </div>
    )
}
export default ComponentFather;