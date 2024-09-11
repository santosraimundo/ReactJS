import React from "react";
import ComponentMother from "./ComponentMother";

function Vcompleta(){
    let nome = "Santos";
    let apelido = "Raimundo";
    
}
function ComponentGrand(props){
    function Vcompleta(nome, apelido){
        window.alert(nome, apelido)
        
    }
    return(
        <div>
            <h1>Grand Father</h1>
            <ComponentMother valor ="5+5" mostra={Vcompleta}></ComponentMother>
        </div>
    )
}
export default ComponentGrand;