import React from "react";
import ComponentChildren from "./ComponentChildren";

function ComponentFather(props){

    return(
        <div className="father">
            <h1 className="title">Título: {props.title}</h1>
            
            <ComponentChildren title="Component Children" funcao="Técnico de Hardware" departamento="ITDATA-BCX"> Nome: Santos Raimundo</ComponentChildren>
            <ComponentChildren title="Component Children" funcao="Técnico Sénior de Hardware" departamento="ITDATA-BCX">Nome: Ismael Cristovão</ComponentChildren>
            <ComponentChildren title="Component Children" funcao="Especilista de Hardware" departamento="ITDATA-BCX">Nome: José Renato</ComponentChildren>
        </div>
    )

}
export default ComponentFather;