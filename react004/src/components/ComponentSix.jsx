import React from "react";


const ComponentSix = (props)=>{
    return(
        <div className="component">
            <h6> Titulo6: {props.title}</h6>
            <p>Subtitulo: {props.subtitle}</p>
            {
                props.valor === true? <p>A condição é verdadeira!</p>
                : <p>A condição é Falsa!</p>
            }
        </div>
    )
}
export default ComponentSix;