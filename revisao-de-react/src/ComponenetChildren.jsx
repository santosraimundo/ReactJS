import React from "react";

   
    
    const estilo={
        backgroundColor:"white",
        height: "300px",
        margin: "10px",
        padding: "5px"
    }

const ComponentChildren = (props)=>{
    function validar(){
        return(
                props.mostrar("vamos Começar",  "Name: What is your name?")
        )
    }
    return(
        <div style={estilo}>
            <h2>Título: {props.title}</h2>
            <button onClick={validar}>Clicar</button>
            
            
        </div>
    )

}
export default ComponentChildren;