import React from "react";
import ComponentMother from "./ComponentMother";
import cond from "./condicional";


function ComponentGrand(props){
    function Vcompleta(nome, apelido){
        window.alert(nome, apelido)
       
        
    }
    return(
        <div>
            <h1>Grand Father</h1>
            <ComponentMother valor ={"React"} mostra={Vcompleta} condicional={props.cond ==="Raimundo"}></ComponentMother>
        </div>
    )
}
export default ComponentGrand;