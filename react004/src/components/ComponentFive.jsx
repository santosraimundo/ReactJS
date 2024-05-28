import React from "react";
import Clientes from "../cliente/dados_clientes";

const ComponentFive = (props) =>{
    return(
        <div className="component">
            <h5>Títul5: {props.title}</h5>
            <p>Subtítulo: {props.subtitle}</p>
        </div>

    )
}
export default ComponentFive;