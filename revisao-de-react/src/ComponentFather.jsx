import React from "react";
import ComponentChildren from "./ComponenetChildren";
import { Component } from "react";

function ComponentFather(props){
    return(
        <div style={{backgroundColor:"gray", height: "500px"}}>
            <h1>Título: {props.title}</h1>
            <p>Este é o campo do componente Pai</p>
            <ComponentChildren title="Componente Filho"></ComponentChildren>
        </div>
    )
}
export default ComponentFather;