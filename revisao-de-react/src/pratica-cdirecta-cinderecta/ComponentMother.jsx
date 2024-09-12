import React from "react";
import ComponentSon from "./ComponentSon";

export default (props)=>{
   
    return(
        <div>
            <h2>Mother</h2>
            
            <ComponentSon {...props} condicional={props.nome==="Raimundo"}/>
            <ComponentSon condicional={props.nome !== "Santos" && props.nome === "Mateus"}>
                <p>O nome é desconhecido {props.nome}</p>
            </ComponentSon>
        </div>
    )
}