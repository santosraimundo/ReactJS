import React from "react";
import ComponentChildren from "./ComponenetChildren";

function ComponentFather(props){
    const apresenta =(valor, name)=>{
            
            window.alert(valor);
            window.prompt(name);
            

        
    }
    return(
        <div style={{backgroundColor:"gray", height: "1060px"}}>
            <h1>Título: {props.title}</h1>
            <p>Este é o campo do componente Pai</p>
            <ComponentChildren title="Componente Filho" mostrar={apresenta}></ComponentChildren>
            <ComponentChildren title="Componente Filho"></ComponentChildren>
            <ComponentChildren title="Componente Filho"></ComponentChildren>
        </div>
    )
}
export default ComponentFather;