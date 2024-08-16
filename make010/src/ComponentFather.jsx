import React from "react";
import ComponentChildren from "./ComponentChildren";

function ComponentFather(props){

    return(
        <div className="father">
            <h1 className="title">Título: {props.title}</h1>
            <p>Pai:</p>
            <ComponentChildren title="Component Children" funcao="Técnico de Hardware"> Nome: Santos Raimundo</ComponentChildren>
            <ComponentChildren title="Component Children" funcao="Técnico Sénior de Hardware">Nome: Ismael Cristovão</ComponentChildren>
            <ComponentChildren title="Component Children" funcao="Especilista de Hardware">Nome: José Renato</ComponentChildren>
        </div>
    )

}
export default ComponentFather;