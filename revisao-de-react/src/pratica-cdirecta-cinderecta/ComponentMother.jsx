import React from "react";
import ComponentSon from "./ComponentSon";

export default (props)=>{
   
    return(
        <div>
            <h2>Mother</h2>
            <p>{props.condicional}</p>
            <ComponentSon {...props}/>
        </div>
    )
}