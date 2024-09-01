import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = (props)=>{
    function Executar(number, name){
        window.alert(number);
        console.log(name);
    }
    const estilo = {
        backgroundColor:"green",
        height:"400px",
        color:"white",
        textAlign:"center",
        fontSize:"1.5em",
        paddingTop:"5px"
        
    }
    return(
        <div style={estilo}>
            <p>Título: {props.title}</p>
            <ComponentB title="O componente filho vai usar as propriedades do componente pai" funcao={Executar}></ComponentB>
        </div>
    )
}
export default ComponentA;