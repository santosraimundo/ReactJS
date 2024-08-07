import React from "react";

function ComponentNine(props){
    const estilo ={
        backgroundColor: "green",
        padding: "10px",
        color: "white"
       
    }
    return(
        <div className="component">
            <h1>Título: {props.title}</h1>
            <p>Subtítulo:{props.subtitle}</p>
            <p style={{backgroundColor:"blue", padding:"20px"}}>Vamos começar a desenvolver os sites responsivo</p>
            <p style={estilo}>Ninguém vai nos parar</p>

        </div>
    )
}
export default ComponentNine;