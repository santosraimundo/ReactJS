import React from "react";
import ComponentChildren from "./Component.Children";

const ComponentFather = (props) =>{
    return(
        <div className="component">
            <h1 className="title">{props.title}</h1>
            <p>Pai: Component Father With their Children</p>
            <ComponentChildren title=" Component Filho " funcao=" Técnico de Hardware" >Santos Raimundo</ComponentChildren>
            <ComponentChildren title=" Component Filho " funcao=" Especilista de Hardware" >José Renato</ComponentChildren>
            <ComponentChildren title=" Component Filho " funcao=" Técnico de Hardware Sênior" >Ismael Cristovão</ComponentChildren>
        </div>
    )
}
export default ComponentFather;