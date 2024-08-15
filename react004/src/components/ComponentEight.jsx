import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function(props){
    return(
        <div className="component">
             <h4>Título5: {props.title}</h4>
             <p>Subtítulo: {props.subtitle}</p>
             <p>
                Nome: {props.valor}
             </p>
            <CondicaoIf condicao = {props.valor === 'Santos'}>
                <p>É o nome Verdadeiro.</p>
            </CondicaoIf>
            <CondicaoIf condicao = {props.valor !== 'Santos' && props.volor !== 'Ana'}>
                <p>O nome é Desconhecido.</p>
            </CondicaoIf>
            <CondicaoIf condicao = {props.valor === 'Isaac' && props.volor === 'Santos' || props.valor === "Ana"}>
                <p>O {props.valor}  é meu irmão(ã).</p>
            </CondicaoIf>
        </div>
    )
}
