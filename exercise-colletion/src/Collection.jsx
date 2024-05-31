import React from "react";
import dadosPessoal from "./colletion";

const pessoas = ()=>{
    return dadosPessoal.map(person =>{
      return  <li key ={person.id_dados_pessoal}> Nome:{person.name} | Idade: {person.age} | Altura: {person.height}m | Peso: {person.weight}Kg </li>
       /*return (
       <li key ={person.id_dados_pessoal}> Nome:{person.name} | Idade: {person.age} | Altura: {person.height}m | Peso: {person.weight}Kg </li>
    )
    */
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