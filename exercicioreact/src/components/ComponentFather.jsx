import React from "react";
import ComponentChildren from "./ComponentChildren";
import Condicao from "./ComponentCondicao";

const ComponentFather = (props)=>{
    return(
        <div className="container" style={{padding:"10px"}}>
            <h1 className="title">Titulo: {props.title}</h1>
            
            <ComponentChildren title="Componente Filho">

            </ComponentChildren>
            <p> Nome: {props.nome}</p>
            <Condicao condicao = {props.nome === "Santos"}>
                <p>É o seu nome</p>
            </Condicao>

        </div>

    )

}
export default ComponentFather;