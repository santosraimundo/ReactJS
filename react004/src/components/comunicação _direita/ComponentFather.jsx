import React from "react";
import ComponentChildren from "./Component.Children";

const ComponentFather = (props) =>{
    return(
        <div className="component">
            <h1 className="title">{props.title}</h1>
            <p>Pai: Component Father With their Children</p>
            <ComponentChildren title=" Component Filho " funcao=" Técnico de Hardware" >Santos Raimundo
            <ul className="list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>REACTJS</li>
                <li>BOOTSTRAP</li>
            </ul>
            </ComponentChildren>
            <ComponentChildren title=" Component Filho " funcao=" Especilista de Hardware" >José Renato
            <ul className="list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>REACTJS</li>
                <li>BOOTSTRAP</li>
            </ul>
            </ComponentChildren>
            <ComponentChildren title=" Component Filho " funcao=" Técnico de Hardware Sênior" >Ismael Cristovão
            <ul className="list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>REACTJS</li>
                <li>BOOTSTRAP</li>
            </ul>
            </ComponentChildren>
            {props.children}
        </div>
    )
}
export default ComponentFather;