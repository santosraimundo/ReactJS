import React from "react";

   
    
    const estilo={
        backgroundColor:"white",
        height: "300px",
        margin: "10px",
        padding: "5px",
        borderRadius:"5px",
        boxShadow:"1px 2px 3px black"
    }

const ComponentChildren = (props)=>{
    function validar(){
        return(
                props.mostrar("vamos Começar", "What is your name?")
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