import React from "react";
import ComponentB from "./ComponentB";
const ComponentA = (props)=>{
    function Executar(number, name){
        window.alert(number, name);
    }
    const estilo = {
        backgroundColor:"green",
        height:"300px",
        color:"white"
    }
    return(
        <div style={estilo}>
            <p>Título: {props.title}</p>
            <ComponentB title="O componente filho vai usar as propriedades do componente pai" funcao{}></ComponentB>
        </div>
    )
}
export default ComponentA;