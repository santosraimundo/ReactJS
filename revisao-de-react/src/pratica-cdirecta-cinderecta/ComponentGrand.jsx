import React from "react";
import ComponentMother from "./ComponentMother";


function ComponentGrand(props){
    function Vcompleta(nome, apelido){
        window.alert(nome, apelido)
       
        
    }
    return(
        <div>
            <h1>Grand Father</h1>
            <ComponentMother valor ={"React"} mostra={Vcompleta}></ComponentMother>
        </div>
    )
}
export default ComponentGrand;