import React from "react";
import Clientes from "../cliente/dados_clientes";

        function cliente(){
          return Clientes.map(colecao_cliente =>{
            return <li key ={colecao_cliente.id_clientes}>Nome: {colecao_cliente.name} | Email: {colecao_cliente.email}</li>
           })
        }
const ComponentFive = (props) =>{
    return(
        <div className="component">
            <h5>Título5: {props.title}</h5>
            <p>Subtítulo: {props.subtitle}</p>
            <ul>
                {cliente()}
            </ul>
        </div>

    )
}
export default ComponentFive;