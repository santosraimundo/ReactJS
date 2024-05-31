import React from "react";
import dadosPessoal from "./colletion";

const pessoas = ()=>{
    return dadosPessoal.map(person =>{
       
    })
}
const Collection = (props)=>{
    return(
        <section className="component-collection">
            <p>Titulo: {props.title}</p>
            
            <ul>{pessoas()}</ul>
        </section>
        
    )
}
export default Collection;