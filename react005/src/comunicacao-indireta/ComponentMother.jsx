import React from "react";
import ComponentDaughter from "./ComponentDaughter";

function ComponentMother(props){
    function Clicou(){
        window.alert("O botão foi acionado pelo Componente Filha")
    }
    return(
        <div>
            <h1 className="title"> Título: {props.title}</h1>
            <ComponentDaughter title="A comunicação indireta é quando é usado a propridade do filho para o pai" clicar={Clicou}></ComponentDaughter>
        </div>
    )
}
export default ComponentMother;