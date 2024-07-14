import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function(props){
    return(
        <div className="component">
             <h5>Título5: {props.title}</h5>
             <p>Subtítulo: {props.subtitle}</p>
            <CondicaoIf condicao ={true}>
                <p>Verdadeiro</p>
            </CondicaoIf>
            <CondicaoIf >
                <p>Falso</p>
            </CondicaoIf>
        </div>
    )
}
