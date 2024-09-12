import React from "react";
import ComponentSon from "./ComponentSon";

export default (props)=>{
   
    return(
        <div>
            <h2>Mother</h2>
            
            <ComponentSon {...props} condicional={props.nome==="Santos"}/>
        </div>
    )
}