import React from "react";
import ComponentSon from "./ComponentSon";

export default (props)=>{
   
    return(
        <div>
            <h2>Mother</h2>
            
            <ComponentSon {...props} condicional={props.nome==="Santos"}/>
            <ComponentSon condicional={props.nome !== "santos"}/>
        </div>
    )
}